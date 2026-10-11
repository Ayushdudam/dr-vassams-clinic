import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { clinicConfig } from "@/config/clinic";
import { Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Dr Vassam's Homoeopathic Clinic",
  description:
    "Privacy Policy for Dr Vassam's Homoeopathic Clinic in Worli, Mumbai. Information practices, DPDP Act 2023 compliance, data retention, and deletion contact.",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 md:py-20 bg-[#FBF8F1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F3D33]/10 text-[#1F3D33] text-xs font-semibold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" />
            <span>Data Protection Notice</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#1B2421] font-medium tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#5B6660]">
            Last updated: October 2026 · Aligned with principles of the Digital Personal Data Protection Act, 2023 (India)
          </p>
        </div>

        {/* Notice for Owner Legal Review */}
        <div className="p-4 rounded-lg bg-[#F3EEE2] border-l-4 border-[#B08A63] text-xs text-[#5B6660] leading-relaxed">
          <strong>Notice:</strong> This privacy document outlines standard transparent data handling procedures for online appointment requests. The clinic owner should review this policy with legal counsel to ensure full institutional compliance with state medical board regulations and the Digital Personal Data Protection Act, 2023.
        </div>

        {/* Body Sections */}
        <div className="space-y-8 text-sm text-[#5B6660] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#1B2421]">
              1. What Information We Collect
            </h2>
            <p>
              When you submit an appointment request through our website form, we collect only the minimal data necessary to coordinate your appointment:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-[#1B2421]">
              <li><strong>Full Name:</strong> To address you and register your consultation file.</li>
              <li><strong>Contact Phone Number:</strong> To contact you via call or WhatsApp regarding your requested time slot.</li>
              <li><strong>Preferred Day & Time Window (Optional):</strong> To check slot availability.</li>
              <li><strong>Brief Consultation Reason (Optional):</strong> Limited to 300 characters for general triage. We explicitly request that you do NOT submit detailed medical records, diagnostic scans, or sensitive reports via this form.</li>
              <li><strong>Consent Confirmation:</strong> Recording your consent to be contacted.</li>
            </ul>
            <p>
              We do not collect payment details, Aadhaar numbers, health insurance credentials, or biometric data through this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#1B2421]">
              2. Purpose of Data Processing
            </h2>
            <p>
              Your contact details are used solely to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-[#1B2421]">
              <li>Respond to your appointment enquiry and schedule a consultation slot.</li>
              <li>Provide essential administrative notices regarding clinic timings or changes.</li>
            </ul>
            <p>
              We strictly do NOT sell, rent, or trade your personal information to third-party telemarketers or pharmaceutical advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#1B2421]">
              3. Third-Party Technical Processors
            </h2>
            <p>
              Website form submissions are transmitted securely to the clinic administration via encrypted transactional email dispatch (powered by Resend). Our website hosting infrastructure is secured via industry-standard SSL/TLS encryption.
            </p>
            <p>
              Our interactive map utilizes a click-to-load mechanism so that external Google Maps cookies and trackers are blocked until you voluntarily choose to interact with the map element.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#1B2421]">
              4. Data Retention & Security
            </h2>
            <p>
              Appointment request records received via email are retained only as long as necessary to facilitate patient scheduling and clinical continuity. We implement administrative and technical safeguards to prevent unauthorized access.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#1B2421]">
              5. Your Rights & Contact for Erasure
            </h2>
            <p>
              Under applicable Indian data protection principles, you have the right to request access to the personal contact information you have submitted, or to request its correction or deletion from our enquiry inbox.
            </p>
            <p>
              To exercise these rights, please contact the clinic:
            </p>
            <div className="p-4 rounded-lg bg-[#F3EEE2] text-xs text-[#1B2421] space-y-1">
              <p><strong>Clinic:</strong> {clinicConfig.brandName}</p>
              <p><strong>Address:</strong> {clinicConfig.address.fullFormatted}</p>
              <p><strong>Telephone:</strong> {clinicConfig.contact.phoneDisplay}</p>
            </div>
          </section>
        </div>

        {/* Back Link */}
        <div className="pt-6 border-t border-[#1F3D33]/15">
          <Link
            href="/"
            className="text-xs font-semibold uppercase tracking-wider text-[#1F3D33] hover:underline"
          >
            &larr; Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
