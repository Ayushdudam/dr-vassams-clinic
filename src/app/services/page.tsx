import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getApprovedServices } from "@/content/services";
import { clinicConfig } from "@/config/clinic";
import {
  Stethoscope,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Homoeopathic Consultation Services | Worli, Mumbai",
  description:
    "Approved homoeopathic consultation services by Dr. Srinivas Vasam, BHMS in Worli, Mumbai. Individualized clinical evaluations for general health and skin concerns.",
};

export default function ServicesIndexPage() {
  const approvedServices = getApprovedServices();

  return (
    <div className="py-12 md:py-20 bg-[#FBF8F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Banner */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F3D33]/10 text-[#1F3D33] text-xs font-semibold uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Clinical Scope & Consultations</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1B2421] font-medium tracking-tight">
            Consultation Services
          </h1>
          <p className="text-base sm:text-lg text-[#5B6660] leading-relaxed">
            Individualized case assessments conducted by Dr. Srinivas Vasam, BHMS.
            Every consultation is framed around systematic evaluation and constitutional care.
          </p>
        </div>

        {/* Mandatory Medical Disclaimer Band */}
        <div className="p-6 rounded-lg bg-[#F3EEE2] border-l-4 border-[#1F3D33] space-y-2 text-xs text-[#5B6660]">
          <div className="flex items-center gap-2 font-semibold text-[#1B2421] text-sm">
            <ShieldAlert className="w-4 h-4 text-[#1F3D33]" />
            <span>Essential Medical Boundary Notice</span>
          </div>
          <p className="leading-relaxed">
            Homoeopathy is not a substitute for emergency or conventional medical care; do not stop prescribed medicines without your doctor&apos;s advice. In line with the Drugs and Magic Remedies (Objectionable Advertisements) Act and healthcare advertising ethics, we do not promise cure guarantees or rapid claims.
          </p>
        </div>

        {/* Approved Services Editorial Grid */}
        <div className="space-y-8">
          <div className="space-y-1">
            <h2 className="font-serif text-2xl text-[#1B2421] font-semibold">
              Currently Available Consultations
            </h2>
            <p className="text-xs text-[#5B6660]">
              The following clinical areas represent confirmed consultations in active practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approvedServices.map((service) => (
              <div
                key={service.slug}
                className="p-8 rounded-lg bg-[#F3EEE2] border border-[#1F3D33]/15 flex flex-col justify-between hover:border-[#1F3D33]/40 transition-all shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-sans font-semibold text-[#1F3D33] tracking-wide">
                      AREA {service.number}
                    </span>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#1F3D33]/10 text-[#1F3D33] font-medium">
                      Worli Clinic
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#1B2421]">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#5B6660] leading-relaxed">
                    {service.summary}
                  </p>

                  <div className="pt-2 border-t border-[#1F3D33]/10 space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#1B2421] block">
                      Consultation Involves:
                    </span>
                    <ul className="text-xs text-[#5B6660] space-y-1.5 list-disc list-inside">
                      {service.whatTheConsultationInvolves.slice(0, 3).map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1F3D33]/15 flex items-center justify-between">
                  <span className="text-xs text-[#5B6660]">
                    In-person consultation in Worli
                  </span>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1F3D33] text-[#FBF8F1] text-xs font-semibold uppercase tracking-wider hover:bg-[#162E26] transition-colors"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="p-8 md:p-12 rounded-lg bg-[#1F3D33] text-[#FBF8F1] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="font-serif text-2xl font-medium">
              Have questions regarding your consultation?
            </h2>
            <p className="text-xs text-[#FBF8F1]/80 max-w-lg">
              Our clinic staff can confirm available time slots and explain what records to prepare.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact#appointment-request-card"
              className="px-5 py-3 rounded-lg bg-[#FBF8F1] text-[#1F3D33] text-xs font-semibold uppercase tracking-wider hover:bg-[#F3EEE2] transition-colors"
            >
              Request Appointment
            </Link>
            <a
              href={clinicConfig.contact.phoneTel}
              className="px-4 py-3 rounded-lg border border-[#FBF8F1]/30 text-[#FBF8F1] text-xs font-semibold uppercase tracking-wider hover:bg-[#FBF8F1]/10 transition-colors"
            >
              Call Clinic
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
