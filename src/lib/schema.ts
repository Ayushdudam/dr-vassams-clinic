import { z } from "zod";

/**
 * Validates Indian Mobile numbers:
 * Accepts optional +91 or 91 country code, followed by 10 digits starting with 6, 7, 8, or 9.
 */
export const indianPhoneRegex = /^(?:\+91[\-\s]?|91[\-\s]?)?[6-9][\d\s\-]{8,12}\d$/;

export const isValidIndianMobile = (val: string) => {
  const digitsOnly = val.replace(/[\s\-\(\)]/g, "");
  return /^(?:\+91|91)?[6-9]\d{9}$/.test(digitsOnly);
};

export const appointmentFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name (at least 2 characters)")
    .max(100, "Name must not exceed 100 characters"),
  phone: z
    .string()
    .trim()
    .refine(
      isValidIndianMobile,
      "Please enter a valid 10-digit Indian mobile number (e.g. 98336 75356)"
    ),
  preferredDay: z
    .string()
    .trim()
    .max(50, "Preferred day description too long")
    .optional()
    .default(""),
  preferredTimeWindow: z
    .enum(["morning", "evening", "any", ""], {
      message: "Please choose a valid time window or leave as any",
    })
    .optional()
    .default(""),
  reason: z
    .string()
    .trim()
    .max(300, "Reason must not exceed 300 characters")
    .optional()
    .default(""),
  consent: z.literal(true, {
    message: "You must consent to being contacted by the clinic to schedule an appointment",
  }),
  // Honeypot field (must remain empty for legitimate users)
  website: z.string().max(0, "Invalid form submission").optional().default(""),
});

export type AppointmentFormData = z.infer<typeof appointmentFormSchema>;

export interface EnquiryApiResponse {
  success: boolean;
  message: string;
  error?: "email_not_configured" | "validation_failed" | "rate_limited" | "server_error";
  details?: Record<string, string[]>;
}
