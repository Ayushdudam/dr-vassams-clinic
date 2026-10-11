"use client";

import React, { useState, useRef } from "react";
import { clinicConfig, getWhatsAppUrl } from "@/config/clinic";
import { appointmentFormSchema, AppointmentFormData } from "@/lib/schema";
import { Phone, MessageCircle, AlertCircle, CheckCircle2, Send, ArrowRight } from "lucide-react";

export const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: "",
    phone: "",
    preferredDay: "",
    preferredTimeWindow: "",
    reason: "",
    consent: true,
    website: "", // honeypot
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverStatus, setServerStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string>("");
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear inline error on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = (): boolean => {
    const result = appointmentFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as string;
        if (!fieldErrors[fieldName]) {
          fieldErrors[fieldName] = issue.message;
        }
      });
      setErrors(fieldErrors);
      // Focus error summary for accessibility
      setTimeout(() => {
        errorSummaryRef.current?.focus();
      }, 50);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerStatus("idle");
    setServerMessage("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setServerStatus("success");
        setServerMessage(
          data.message ||
            "Your request has been sent. The clinic will contact you to confirm a time. This is not a confirmed booking."
        );
        // Reset non-essential fields
        setFormData({
          fullName: "",
          phone: "",
          preferredDay: "",
          preferredTimeWindow: "",
          reason: "",
          consent: true,
          website: "",
        });
      } else {
        setServerStatus("error");
        setServerMessage(
          data.message ||
            "We couldn't send this online. Please call +91 98336 75356 or message us on WhatsApp."
        );
      }
    } catch {
      setServerStatus("error");
      setServerMessage(
        "We couldn't send this online. Please call +91 98336 75356 or message us on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Build dynamic WhatsApp text with the details already entered
  const generateWhatsAppPrefill = () => {
    let msg = `Hello Dr. Vasam's Clinic, I would like to request an appointment.`;
    if (formData.fullName) msg += `\nName: ${formData.fullName.trim()}`;
    if (formData.phone) msg += `\nPhone: ${formData.phone.trim()}`;
    if (formData.preferredDay) msg += `\nPreferred Day: ${formData.preferredDay.trim()}`;
    if (formData.preferredTimeWindow) {
      const timeLabel =
        formData.preferredTimeWindow === "morning"
          ? "Morning (10:45 AM – 2:00 PM)"
          : formData.preferredTimeWindow === "evening"
          ? "Evening (5:45 PM – 9:15 PM)"
          : "Flexible";
      msg += `\nPreferred Time: ${timeLabel}`;
    }
    if (formData.reason) msg += `\nBrief Reason: ${formData.reason.trim()}`;
    return msg;
  };

  const whatsappDirectUrl = getWhatsAppUrl(generateWhatsAppPrefill());

  return (
    <div
      id="appointment-request-card"
      className="p-5 sm:p-8 md:p-10 rounded-lg bg-[#FBF8F1] border border-[#1F3D33]/20 shadow-sm"
    >
      <div className="space-y-2 mb-8">
        <div className="inline-block px-2.5 py-0.5 rounded bg-[#1F3D33]/10 text-[#1F3D33] text-xs font-semibold uppercase tracking-wider">
          Enquiry & Scheduling
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl text-[#1B2421] font-semibold">
          Request an Appointment
        </h2>
        <p className="text-sm text-[#5B6660] leading-relaxed">
          Please provide basic contact details. The clinic will call or message you to confirm an
          available time slot.
        </p>
        <p className="text-xs text-[#5B6660] font-medium pt-1">
          * An appointment request is not a confirmed booking.
        </p>
      </div>

      {/* Accessibility Error Summary */}
      {Object.keys(errors).length > 0 && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          aria-labelledby="error-summary-title"
          className="p-4 mb-6 rounded-lg bg-red-50 border border-red-200 text-red-900 focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
            <h3 id="error-summary-title" className="font-semibold text-sm">
              Please resolve the following issues:
            </h3>
          </div>
          <ul className="list-disc list-inside text-xs space-y-1">
            {Object.entries(errors).map(([field, msg]) => (
              <li key={field}>{msg}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Success Banner */}
      {serverStatus === "success" && (
        <div
          role="status"
          className="p-6 mb-6 rounded-lg bg-[#DDE5D6]/80 border border-[#2C5B55]/30 text-[#1B2421] space-y-3"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-[#1F3D33] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#1F3D33]">
                Request Sent Successfully
              </h3>
              <p className="text-sm text-[#1B2421] mt-1 leading-relaxed">{serverMessage}</p>
            </div>
          </div>
          <div className="pt-3 border-t border-[#1F3D33]/15 text-xs text-[#5B6660]">
            For urgent timing queries, you can also reach the clinic at{" "}
            <a href={clinicConfig.contact.phoneTel} className="font-semibold text-[#1F3D33] underline">
              {clinicConfig.contact.phoneDisplay}
            </a>
            .
          </div>
        </div>
      )}

      {/* Honest Error Fallback Banner */}
      {serverStatus === "error" && (
        <div
          role="alert"
          className="p-6 mb-6 rounded-lg bg-[#F3EEE2] border border-[#1F3D33]/30 text-[#1B2421] space-y-4"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#1F3D33] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif text-base font-semibold text-[#1B2421]">
                Online Form Transmission Note
              </h3>
              <p className="text-sm text-[#5B6660] mt-1 leading-relaxed">{serverMessage}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={clinicConfig.contact.phoneTel}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1F3D33] text-[#FBF8F1] text-xs font-semibold uppercase tracking-wider hover:bg-[#162E26] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {clinicConfig.contact.phoneDisplay}</span>
            </a>
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2C5B55] text-[#FBF8F1] text-xs font-semibold uppercase tracking-wider hover:bg-[#1F3D33] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Anti-spam Honeypot field (hidden from screen readers and users) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold uppercase tracking-wider text-[#1B2421] mb-1.5"
          >
            Full Name <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            autoComplete="name"
            placeholder="e.g. Ramesh Sharma"
            value={formData.fullName}
            onChange={handleInputChange}
            aria-required="true"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={`w-full px-4 py-3 rounded-lg border text-sm text-[#1B2421] bg-[#FBF8F1] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1F3D33] ${
              errors.fullName ? "border-red-600 bg-red-50/20" : "border-[#1F3D33]/25"
            }`}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1 text-xs text-red-700">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Contact Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold uppercase tracking-wider text-[#1B2421] mb-1.5"
          >
            Contact Phone (Indian Mobile) <span className="text-red-700">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            autoComplete="tel"
            placeholder="e.g. 98336 75356"
            value={formData.phone}
            onChange={handleInputChange}
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : "phone-hint"}
            className={`w-full px-4 py-3 rounded-lg border text-sm text-[#1B2421] bg-[#FBF8F1] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1F3D33] ${
              errors.phone ? "border-red-600 bg-red-50/20" : "border-[#1F3D33]/25"
            }`}
          />
          <p id="phone-hint" className="mt-1 text-[11px] text-[#5B6660]">
            The clinic will contact this number to coordinate your appointment.
          </p>
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-xs text-red-700">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Day & Time Window (Two Columns on md) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="preferredDay"
              className="block text-xs font-semibold uppercase tracking-wider text-[#1B2421] mb-1.5"
            >
              Preferred Day (Optional)
            </label>
            <input
              type="text"
              id="preferredDay"
              name="preferredDay"
              placeholder="e.g. Tomorrow / Thursday"
              value={formData.preferredDay}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-[#1F3D33]/25 text-sm text-[#1B2421] bg-[#FBF8F1] focus:outline-none focus:ring-2 focus:ring-[#1F3D33]"
            />
          </div>

          <div>
            <label
              htmlFor="preferredTimeWindow"
              className="block text-xs font-semibold uppercase tracking-wider text-[#1B2421] mb-1.5"
            >
              Time Window (Optional)
            </label>
            <select
              id="preferredTimeWindow"
              name="preferredTimeWindow"
              value={formData.preferredTimeWindow}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-[#1F3D33]/25 text-sm text-[#1B2421] bg-[#FBF8F1] focus:outline-none focus:ring-2 focus:ring-[#1F3D33]"
            >
              <option value="">Flexible / Any timing</option>
              <option value="morning">Morning (10:45 AM – 2:00 PM)</option>
              <option value="evening">Evening (5:45 PM – 9:15 PM)</option>
              <option value="any">Either Session</option>
            </select>
          </div>
        </div>

        {/* Reason for Consultation */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label
              htmlFor="reason"
              className="block text-xs font-semibold uppercase tracking-wider text-[#1B2421]"
            >
              Brief Consultation Reason (Optional)
            </label>
            <span className="text-[11px] text-[#5B6660]">
              {300 - (formData.reason?.length || 0)} chars remaining
            </span>
          </div>
          <textarea
            id="reason"
            name="reason"
            rows={3}
            maxLength={300}
            placeholder="e.g. General health consultation or chronic skin concern"
            value={formData.reason}
            onChange={handleInputChange}
            aria-describedby="reason-helper"
            className="w-full px-4 py-3 rounded-lg border border-[#1F3D33]/25 text-sm text-[#1B2421] bg-[#FBF8F1] focus:outline-none focus:ring-2 focus:ring-[#1F3D33]"
          />
          <p id="reason-helper" className="mt-1 text-[11px] text-[#5B6660]">
            Please do not include detailed medical history, reports, or sensitive health data here.
          </p>
        </div>

        {/* Consent Checkbox */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
              aria-required="true"
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? "consent-error" : undefined}
              className="mt-1 w-4 h-4 rounded border-[#1F3D33]/40 text-[#1F3D33] focus:ring-[#1F3D33]"
            />
            <span className="text-xs text-[#5B6660] leading-relaxed">
              I consent to Dr. Vassam’s Clinic contacting me via phone or WhatsApp regarding this
              appointment request. I understand this request is not a confirmed booking.
            </span>
          </label>
          {errors.consent && (
            <p id="consent-error" className="mt-1 text-xs text-red-700">
              {errors.consent}
            </p>
          )}
        </div>

        {/* Submission Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#1F3D33] text-[#FBF8F1] text-xs uppercase tracking-wider font-semibold hover:bg-[#162E26] transition-colors disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-[#1F3D33] focus:ring-offset-2"
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? "Submitting Request..." : "Submit Appointment Request"}</span>
          </button>

          {/* WhatsApp Direct Alternative Option */}
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-[#2C5B55]/30 bg-[#F3EEE2] text-[#1F3D33] text-xs uppercase tracking-wider font-semibold hover:bg-[#DDE5D6] transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#2C5B55]" />
            <span>Send via WhatsApp Instead</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </form>
    </div>
  );
};
