import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, Hospital } from "lucide-react";

export const metadata: Metadata = {
  title: "Medical & Advertising Disclaimer | Dr Vassam's Homoeopathic Clinic",
  description:
    "Important medical disclosure, statutory boundaries, emergency care guidelines, and appointment request clarification for Dr Vassam's Homoeopathic Clinic, Worli.",
};

export default function DisclaimerPage() {
  return (
    <div className="py-12 md:py-20 bg-[#FBF8F1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-900 text-xs font-semibold uppercase tracking-wider">
            <ShieldAlert className="w-3.5 h-3.5 text-red-700" />
            <span>Statutory Medical Notice</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#1B2421] font-medium tracking-tight">
            Medical Disclaimer & Compliance Notice
          </h1>
          <p className="text-sm text-[#5B6660]">
            Please read this clinical notice carefully before utilizing our website or scheduling a consultation.
          </p>
        </div>

        {/* Emergency Notice Callout */}
        <div className="p-6 rounded-lg bg-red-50 border-l-4 border-red-700 space-y-3 text-red-950">
          <div className="flex items-center gap-2 font-semibold text-base">
            <Hospital className="w-5 h-5 text-red-700" />
            <span>Not for Medical Emergencies</span>
          </div>
          <p className="text-sm leading-relaxed">
            Dr Vassam&apos;s Homoeopathic Clinic is an outpatient consultation practice and is NOT an emergency or acute trauma medical facility. If you or someone in your care is experiencing acute chest discomfort, severe breathlessness, sudden weakness, stroke symptoms, high fever with altered sensorium, severe hemorrhaging, or any life-threatening condition, please visit an emergency department or call 108/112 immediately.
          </p>
        </div>

        {/* Core Disclaimer Clauses */}
        <div className="space-y-8 text-sm text-[#5B6660] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#1B2421]">
              1. No Claims of Cures or Medical Guarantees
            </h2>
            <p>
              In strict adherence to medical ethics and the statutory provisions of the Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954, as well as state and national medical council regulations:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-[#1B2421]">
              <li>We do not claim that homoeopathy cures diseases or guarantees specific health outcomes.</li>
              <li>Every individual responds differently to clinical management, and health conditions depend on numerous genetic, environmental, pathological, and lifestyle determinants.</li>
              <li>We do not use superlative advertising (such as &ldquo;best&rdquo;, &ldquo;No. 1&rdquo;, or &ldquo;guaranteed relief&rdquo;).</li>
              <li>All information provided on this website is for general informational awareness and does not constitute a definitive medical diagnosis.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#1B2421]">
              2. Continuity of Prescribed Conventional Medications
            </h2>
            <p className="font-medium text-[#1B2421]">
              Never discontinue, alter, or pause prescribed allopathic medications (such as blood pressure tablets, diabetes insulin/oral hypoglycemics, thyroid hormones, cardiac medications, or inhalers) without the explicit consent and oversight of your prescribing medical doctor.
            </p>
            <p>
              Homoeopathic consultations are intended to evaluate your health comprehensively alongside ongoing medical treatments, not to arbitrarily disrupt necessary conventional care.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#1B2421]">
              3. Appointment Requests Are Not Confirmed Bookings
            </h2>
            <p>
              Submitting an online appointment enquiry via this website registers an enquiry with our administrative staff. It does NOT constitute a confirmed clinical appointment or a binding contract for immediate medical services. The clinic will contact you via telephone or WhatsApp to confirm time availability.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#1B2421]">
              4. Patient Reviews & Testimonials Policy
            </h2>
            <p>
              Indian healthcare ethics guidelines discourage publishing subjective testimonials that may mislead the public. In compliance with these principles, this website displays NO star ratings, testimonials, or promotional review citations. We provide only verified links to third-party public healthcare registries (such as Practo and Google Maps) for independent public reference.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#1B2421]">
              5. Owner Confirmation Reminder
            </h2>
            <p className="text-xs italic bg-[#F3EEE2] p-4 rounded-lg border border-[#1F3D33]/15">
              The owner of the clinic, Dr. Srinivas Vasam, must review and approve all published content to ensure ongoing adherence to local Maharashtra Council of Indian Medicine (MCIM) guidelines and legal compliance.
            </p>
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
