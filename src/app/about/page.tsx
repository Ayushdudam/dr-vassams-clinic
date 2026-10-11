import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { clinicConfig } from "@/config/clinic";
import { DoctorMonogram } from "@/components/DoctorMonogram";
import {
  GraduationCap,
  Award,
  Globe2,
  Clock,
  Phone,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Dr. Srinivas Vasam, BHMS | Worli Clinic",
  description:
    "Learn about Dr. Srinivas Vasam, BHMS (Motivala Homoeopathic College, 2006), MCIM Reg. 42733. Individualized homoeopathic consultations in Worli, Mumbai.",
};

export default function AboutPage() {

  return (
    <div className="py-12 md:py-20 bg-[#FBF8F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Breadcrumb & Title */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F3D33]/10 text-[#1F3D33] text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Physician Profile & Credentials</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1B2421] font-medium tracking-tight">
            About Dr. Srinivas Vasam
          </h1>
          <p className="text-base sm:text-lg text-[#5B6660] leading-relaxed">
            Homoeopathic physician offering structured consultations in Worli, Mumbai.
          </p>
          <p className="text-xs text-[#5B6660] italic">
            Also listed online as Vasam Homoeopathic Clinic / Vaasam&apos;s Homeopathic Clinic.
          </p>
        </div>

        {/* Doctor Monogram & Verified Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Portrait Slot / Monogram */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <DoctorMonogram size="large" />
            <div className="mt-4 text-center">
              <span className="text-xs text-[#5B6660]">
                Official portrait slot (will update once official photography is provided)
              </span>
            </div>
          </div>

          {/* Right Column: Factual Verified Bio */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1B2421] font-semibold">
                Education & Professional Registration
              </h2>
              <p className="text-base text-[#5B6660] leading-relaxed">
                Dr. Srinivas Vasam completed his formal medical education in homoeopathy, graduating
                with a Bachelor of Homeopathic Medicine and Surgery (BHMS) from Motivala Homoeopathic
                Medical College in 2006.
              </p>
              <p className="text-base text-[#5B6660] leading-relaxed">
                Registered with the Maharashtra Council of Indian Medicine, No. 42733 (2007), as listed on Practo.
              </p>
            </div>

            {/* Credential Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-lg bg-[#F3EEE2] border border-[#1F3D33]/15 space-y-2">
                <div className="flex items-center gap-2 text-[#1F3D33]">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Medical Education
                  </span>
                </div>
                <h3 className="text-base font-semibold text-[#1B2421]">
                  BHMS (2006)
                </h3>
                <p className="text-xs text-[#5B6660]">
                  Motivala Homoeopathic Medical College (as listed on Practo)
                </p>
              </div>

              <div className="p-5 rounded-lg bg-[#F3EEE2] border border-[#1F3D33]/15 space-y-2">
                <div className="flex items-center gap-2 text-[#1F3D33]">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Council Registration
                  </span>
                </div>
                <h3 className="text-base font-semibold text-[#1B2421]">
                  MCIM Regn. No. 42733
                </h3>
                <p className="text-xs text-[#5B6660]">
                  Maharashtra Council of Indian Medicine, 2007 (as listed on Practo)
                </p>
              </div>

              <div className="p-5 rounded-lg bg-[#F3EEE2] border border-[#1F3D33]/15 space-y-2">
                <div className="flex items-center gap-2 text-[#1F3D33]">
                  <Globe2 className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Spoken Languages
                  </span>
                </div>
                <h3 className="text-base font-semibold text-[#1B2421]">
                  English, Hindi, Marathi
                </h3>
                <p className="text-xs text-[#5B6660]">
                  (From third-party directory listings; subject to confirmation)
                </p>
              </div>

              <div className="p-5 rounded-lg bg-[#F3EEE2] border border-[#1F3D33]/15 space-y-2">
                <div className="flex items-center gap-2 text-[#1F3D33]">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Practice Base
                  </span>
                </div>
                <h3 className="text-base font-semibold text-[#1B2421]">
                  Worli, Mumbai
                </h3>
                <p className="text-xs text-[#5B6660]">
                  Opposite Sumer Kendra, near Mahindra Towers
                </p>
              </div>
            </div>

            {/* Note on Years of Experience non-fabrication */}
            <div className="p-4 rounded-lg bg-[#F3EEE2]/60 border-l-4 border-[#B08A63] text-xs text-[#5B6660] leading-relaxed">
              <strong>Transparency Note:</strong> In strict compliance with healthcare truthfulness rules,
              we do not make unverified claims regarding exact years of clinical experience. Only verified 
              academic graduation (2006) and statutory council registration (2007) are noted.
            </div>
          </div>
        </div>

        {/* Clinical Consultation Approach Section */}
        <section className="p-8 md:p-12 rounded-lg bg-[#F3EEE2] border border-[#1F3D33]/15 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F3D33]/10 text-[#1F3D33] text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Consultation Philosophy</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1B2421] font-semibold">
                Clinical Consultation Approach
              </h2>
              <div className="space-y-3 text-sm text-[#5B6660] leading-relaxed">
                <p>
                  At Dr. Vassam&apos;s Clinic, consultations are conducted with patient dialogue at the center:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#1B2421] pl-2">
                  <li>
                    <strong>Active Listening:</strong> Taking the time to understand how symptoms developed and what factors make them better or worse.
                  </li>
                  <li>
                    <strong>Comprehensive History:</strong> Evaluating personal medical background, family health patterns, and lifestyle habits.
                  </li>
                  <li>
                    <strong>Diagnostic Integration:</strong> Correlating your symptom picture with routine laboratory investigations, blood tests, or diagnostic scans you provide.
                  </li>
                  <li>
                    <strong>Transparent Guidance:</strong> Explaining the proposed homoeopathic remedy selection and advising on diet and routine without making promises or unrealistic claims.
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-48 h-48 relative opacity-90">
                <Image
                  src="/images/arnica-botanical.svg"
                  alt="Arnica botanical line art"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Safety & Medical Disclaimers */}
        <section className="p-6 rounded-lg bg-[#FBF8F1] border border-red-200/80 text-xs text-[#5B6660] space-y-3">
          <div className="flex items-center gap-2 text-red-900 font-semibold text-sm">
            <AlertCircle className="w-4 h-4 text-red-700" />
            <span>Important Medical Boundaries</span>
          </div>
          <p className="leading-relaxed">
            Homoeopathy does not replace conventional medical care, hospital emergency services, or surgical interventions. Patients must never discontinue, alter, or pause prescribed allopathic medications without specific advice from their prescribing doctor. The clinic adheres strictly to ethical standards and Indian medical advertising regulations (including the Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954).
          </p>
        </section>

        {/* Call to Action */}
        <div className="text-center space-y-4 pt-4 border-t border-[#1F3D33]/15">
          <h2 className="font-serif text-2xl text-[#1B2421] font-semibold">
            Ready to schedule a consultation?
          </h2>
          <p className="text-sm text-[#5B6660]">
            Submit an appointment request or contact the clinic directly.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              href="/contact#appointment-request-card"
              className="px-6 py-3 rounded-lg bg-[#1F3D33] text-[#FBF8F1] text-xs font-semibold uppercase tracking-wider hover:bg-[#162E26] transition-colors"
            >
              Request an Appointment
            </Link>
            <a
              href={clinicConfig.contact.phoneTel}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#1F3D33]/30 bg-[#F3EEE2] text-[#1F3D33] text-xs font-semibold uppercase tracking-wider hover:bg-[#DDE5D6] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {clinicConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
