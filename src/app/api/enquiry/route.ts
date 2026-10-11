import { NextRequest, NextResponse } from "next/server";
import { appointmentFormSchema, EnquiryApiResponse } from "@/lib/schema";

// In-memory rate limiting store (tracks IP and timestamps)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 30;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

function sanitizeInput(text: string): string {
  return text
    .replace(/[<>]/g, "") // remove angle brackets to prevent HTML injection
    .trim();
}

export async function POST(req: NextRequest): Promise<NextResponse<EnquiryApiResponse>> {
  try {
    // 1. IP identification for rate limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "rate_limited",
          message:
            "Too many requests from your network. Please call +91 98336 75356 directly to schedule your appointment.",
        },
        { status: 429 }
      );
    }

    // 2. Parse request body
    const body = await req.json();

    // 3. Server-side Zod validation
    const validationResult = appointmentFormSchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          error: "validation_failed",
          message: "Please correct the errors in the appointment request form.",
          details: fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Honeypot check: If the hidden honeypot has content, silently reject
    if (data.website && data.website.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "validation_failed",
          message: "Submission flagged by anti-spam verification.",
        },
        { status: 400 }
      );
    }

    // Sanitize values
    const safeName = sanitizeInput(data.fullName);
    const safePhone = sanitizeInput(data.phone);
    const safeDay = data.preferredDay ? sanitizeInput(data.preferredDay) : "Not specified";
    const safeTimeWindow =
      data.preferredTimeWindow === "morning"
        ? "Morning (10:45 AM – 2:00 PM)"
        : data.preferredTimeWindow === "evening"
        ? "Evening (5:45 PM – 9:15 PM)"
        : data.preferredTimeWindow === "any"
        ? "Any session"
        : "Flexible / Not specified";
    const safeReason = data.reason ? sanitizeInput(data.reason) : "None provided";

    // 4. Verify email service configuration (Resend)
    const apiKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.CLINIC_NOTIFY_EMAIL;
    const fromEmail = process.env.FROM_EMAIL || "appointments@dr-vassams-clinic.com";

    if (!apiKey || !notifyEmail) {
      // HONEST ERROR: If email service is not configured, NEVER fake success!
      return NextResponse.json(
        {
          success: false,
          error: "email_not_configured",
          message:
            "The online enquiry delivery system is currently not configured. Please contact the clinic directly via phone or WhatsApp.",
        },
        { status: 503 }
      );
    }

    // 5. Send email via Resend API
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #1F3D33; border-radius: 8px;">
        <h2 style="color: #1F3D33; border-bottom: 2px solid #1F3D33; padding-bottom: 10px;">
          New Appointment Request - Dr Vassam's Clinic
        </h2>
        <p style="color: #555;">An appointment request has been submitted through the clinic website:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 40%;">Patient Name:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Contact Phone:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${safePhone}">${safePhone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Preferred Day:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeDay}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Preferred Time:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeTimeWindow}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Brief Reason:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeReason}</td>
          </tr>
        </table>

        <div style="margin-top: 25px; padding: 12px; background-color: #f9f9f9; border-left: 4px solid #1F3D33; font-size: 13px; color: #666;">
          <strong>Reminder:</strong> This is an initial appointment request, not a confirmed slot. Please contact the patient to confirm the time.
        </div>
      </div>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: notifyEmail,
        subject: `Appointment Request: ${safeName} (${safePhone})`,
        html: emailHtml,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      console.error("Resend API error:", errText);
      return NextResponse.json(
        {
          success: false,
          error: "server_error",
          message:
            "We could not send your request online due to a delivery provider issue. Please call +91 98336 75356 or send a message via WhatsApp.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your request has been sent. The clinic will contact you to confirm a time. This is not a confirmed booking.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API enquiry error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "server_error",
        message:
          "An unexpected error occurred. Please call +91 98336 75356 or contact the clinic on WhatsApp.",
      },
      { status: 500 }
    );
  }
}
