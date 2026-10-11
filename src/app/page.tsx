import React from "react";
import Link from "next/link";
import Image from "next/image";
import { clinicConfig, getWhatsAppUrl } from "@/config/clinic";
import { getApprovedServices } from "@/content/services";
import { clinicFaqs } from "@/content/faqs";
import { DoctorMonogram } from "@/components/DoctorMonogram";
import { PatientFeedbackBlock } from "@/components/PatientFeedbackBlock";
import { ClickToLoadMap } from "@/components/ClickToLoadMap";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight,
  Building,
  GraduationCap,
  Sparkles,
  Navigation,
} from "lucide-react";

export default function HomePage() {
  const approvedServices = getApprovedServices();
  const whatsappUrl = getWhatsAppUrl();

  const consultationSteps = [
    {
      step: "01",
      title: "History",
      description:
        "Detailed review of current symptoms, duration, triggers, and past medical treatments.",
    },
    {
      step: "02",
      title: "Individual factors",
      description:
        "Evaluating personal constitution, daily routines, environmental stressors, and lifestyle.",
    },
    {
      step: "03",
      title: "Reports and medicines",
      description:
        "Careful assessment of previous lab investigations and any ongoing prescribed medications.",
    },
    {
      step: "04",
      title: "Plan",
      description:
        "Discussion of an individualized homoeopathic approach and recommended follow-up timeline.",
    },
  ];

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-[#FBF8F1] border-b border-[#1F3D33]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F3D33]/10 text-[#1F3D33] text-xs font-semibold uppercase tracking-wider">
                <Building className="w-3.5 h-3.5" />
                <span>Worli, Mumbai · Near Mahindra Towers</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F3D33] font-medium tracking-tight leading-[1.15]">
                Homoeopathic consultations in Worli, Mumbai
              </h1>

              <p className="text-base sm:text-lg text-[#5B6660] leading-relaxed">
                Consultations conducted by{" "}
                <strong className="text-[#1B2421] font-semibold">
                  {clinicConfig.doctor.name}, {clinicConfig.doctor.qualification}
                </strong>
                . Offering structured, individualized case assessments and lifestyle evaluations
                in our Worli clinic, located behind Mahindra Towers.
              </p>

              {/* Action Buttons Trio */}
              <div id="hero-cta-group" className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
                <Link
                  href="/contact#appointment-request-card"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#1F3D33] text-[#FBF8F1] text-xs font-semibold uppercase tracking-wider hover:bg-[#162E26] transition-all shadow-sm focus:ring-2 focus:ring-[#1F3D33] text-center"
                >
                  Request an Appointment
                </Link>

                <div className="grid grid-cols-2 sm:flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={clinicConfig.contact.phoneTel}
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-3.5 rounded-lg border border-[#1F3D33]/30 bg-[#F3EEE2] text-[#1F3D33] text-xs font-semibold uppercase tracking-wider hover:bg-[#DDE5D6] transition-colors text-center"
                  >
                    <Phone className="w-3.5 h-3.5 shrink-0" />
                    <span>Call Clinic</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-3.5 rounded-lg bg-[#2C5B55] text-[#FBF8F1] text-xs font-semibold uppercase tracking-wider hover:bg-[#1F3D33] transition-colors text-center"
                  >
                    <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <p className="text-xs text-[#5B6660] pt-1">
                * An appointment request is not a confirmed booking. Timings are confirmed via phone or WhatsApp.
              </p>
            </div>

            {/* Right Visual Panel (5 Cols): Tall ~4:5 Forest-Green Layered Botanical Panel */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] min-h-[440px] md:min-h-[480px] rounded-2xl bg-[#1F3D33] overflow-hidden border border-[#2C5B55] shadow-xl flex flex-col justify-between p-6 sm:p-7">
                {/* Real Doctor Photo Slot (renders if photo exists) */}
                {clinicConfig.doctor.photo ? (
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={clinicConfig.doctor.photo}
                      alt={`Dr. Srinivas Vasam, BHMS`}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D33] via-transparent to-transparent" />
                  </div>
                ) : (
                  /* Layered Ivory Botanical Line Art Asset */
                  <div className="absolute inset-0 z-0 opacity-90 pointer-events-none">
                    <Image
                      src="/images/botanical-ivory-composition.svg"
                      alt="Layered ivory botanical line art of Matricaria chamomilla and Arnica montana"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                )}

                {/* Top Corner Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-sans uppercase tracking-[0.15em] px-2.5 py-1 rounded bg-[#FBF8F1]/10 text-[#FBF8F1] backdrop-blur-sm border border-[#FBF8F1]/15 font-semibold">
                    Homoeopathic Clinic
                  </span>
                  <span className="text-[10px] font-sans text-[#A9B8A0] font-semibold tracking-wider uppercase">
                    WORLI CLINIC
                  </span>
                </div>

                {/* Overlaid Ivory Info Card at Bottom */}
                <div className="relative z-10 w-full p-3.5 sm:p-4 rounded-xl bg-[#FBF8F1] border border-[#1F3D33]/15 shadow-lg flex items-center justify-between gap-3 sm:gap-4">
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#1F3D33]">
                      <MapPin className="w-3 h-3 text-[#1F3D33] shrink-0" />
                      <span>Clinic Location</span>
                    </div>
                    <p className="text-xs font-semibold text-[#1B2421]">
                      Worli, behind Mahindra Towers
                    </p>
                  </div>
                  <div className="space-y-0.5 text-right shrink-0 border-l border-[#1F3D33]/10 pl-3">
                    <div className="flex items-center justify-end gap-1 text-[10px] font-semibold uppercase tracking-wider text-[#5B6660]">
                      <Clock className="w-3 h-3 text-[#5B6660]" />
                      <span>Sessions</span>
                    </div>
                    <p className="text-xs font-semibold text-[#1F3D33]">
                      Mon–Sat clinic hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VERIFIED FACTS STRIP (Balanced 3-Item Layout) */}
      <section className="bg-[#F3EEE2] border-b border-[#1F3D33]/15 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#1F3D33]/15">
            <div className="flex items-start gap-3.5 md:px-4">
              <GraduationCap className="w-5 h-5 text-[#1F3D33] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5B6660] block">
                  Qualifications
                </span>
                <p className="text-sm font-semibold text-[#1B2421]">
                  BHMS (2006)
                </p>
                <p className="text-xs text-[#5B6660] mt-0.5">
                  Motivala Homoeopathic Medical College
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:px-6">
              <CheckCircle className="w-5 h-5 text-[#1F3D33] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5B6660] block">
                  State Registration
                </span>
                <p className="text-sm font-semibold text-[#1B2421]">
                  MCIM Regn. No. 42733 (2007)
                </p>
                <p className="text-xs text-[#5B6660] mt-0.5">
                  Maharashtra Council of Indian Medicine
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:px-6">
              <Clock className="w-5 h-5 text-[#1F3D33] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5B6660] block">
                  Clinic Schedule
                </span>
                <p className="text-sm font-semibold text-[#1B2421]">
                  Mon–Sat Morning & Evening
                </p>
                <p className="text-xs text-[#5B6660] mt-0.5">
                  10:45 AM–2:00 PM & 5:45–9:15 PM*
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-[#1F3D33]/10 text-center md:text-left">
            <p className="text-xs text-[#5B6660]">
              *Please call {clinicConfig.contact.phoneDisplay} to confirm timings prior to your visit.
            </p>
          </div>
        </div>
      </section>

      {/* 3. DOCTOR INTRODUCTION */}
      <section className="py-16 md:py-24 bg-[#FBF8F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Monogram Emblem Slot on Textured Sage */}
            <div className="lg:col-span-5 flex justify-center">
              <DoctorMonogram size="default" />
            </div>

            {/* Right Column: Doctor Professional Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#5B6660] font-semibold">
                  Practitioner Profile
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1B2421] font-medium tracking-tight">
                  {clinicConfig.doctor.name}
                </h2>
                <p className="text-sm text-[#1F3D33] font-sans font-medium">
                  {clinicConfig.doctor.qualification} · Motivala Homoeopathic College (2006)
                </p>
              </div>

              <div className="space-y-4 text-base text-[#5B6660] leading-relaxed">
                <p>
                  Dr. Srinivas Vasam graduated with a Bachelor of Homeopathic Medicine and Surgery (BHMS) from Motivala Homoeopathic Medical College in 2006. He is registered with the Maharashtra Council of Indian Medicine, Registration No. 42733 (2007), as listed on Practo.
                </p>
                <p>
                  At the Worli clinic, consultations emphasize attentive listening and detailed case analysis. Every consultation explores your health history, presenting symptoms, daily routines, and lifestyle factors to determine an individualized approach.
                </p>
              </div>

              {/* Consultation Standards Card */}
              <div className="p-6 rounded-xl bg-[#F3EEE2] border border-[#1F3D33]/15 space-y-3">
                <h3 className="font-serif text-base font-semibold text-[#1B2421]">
                  Clinical Consultation Approach
                </h3>
                <ul className="text-xs text-[#5B6660] space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1F3D33] mt-1.5 shrink-0" />
                    <span>Focus on individualized symptom assessment rather than generalized one-size-fits-all prescriptions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1F3D33] mt-1.5 shrink-0" />
                    <span>Careful review of ongoing allopathic regimens with no interference or unilateral pauses in prescribed drugs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1F3D33] mt-1.5 shrink-0" />
                    <span>Realistic timelines and honest medical boundaries adhering to professional ethical standards.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 space-y-1.5 text-xs">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  <span className="text-[#5B6660]">Languages:</span>
                  <span className="font-medium text-[#1B2421] px-2.5 py-1 rounded bg-[#F3EEE2] border border-[#1F3D33]/10">English</span>
                  <span className="font-medium text-[#1B2421] px-2.5 py-1 rounded bg-[#F3EEE2] border border-[#1F3D33]/10">Hindi</span>
                  <span className="font-medium text-[#1B2421] px-2.5 py-1 rounded bg-[#F3EEE2] border border-[#1F3D33]/10">Marathi</span>
                </div>
                <p className="text-[11px] text-[#5B6660]">
                  *Languages as listed on third-party healthcare profile (pending clinic confirmation).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLINICAL CONSULTATION SCOPE */}
      <section className="py-16 md:py-24 bg-[#F3EEE2] border-t border-[#1F3D33]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs uppercase tracking-widest text-[#5B6660] font-semibold">
              Clinical Areas
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1B2421] font-medium">
              Consultation Services
            </h2>
            <p className="text-base text-[#5B6660] leading-relaxed">
              Dr. Vasam provides individualized evaluations centered on detailed patient history and holistic well-being. In compliance with medical ethics, homoeopathic care does not guarantee specific outcomes or cures.
            </p>
          </div>

          {/* Numbered Editorial Rows */}
          <div className="divide-y divide-[#1F3D33]/20 border-y border-[#1F3D33]/20">
            {approvedServices.map((service) => (
              <div
                key={service.slug}
                className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-[#FBF8F1]/60 transition-colors px-3 rounded-xl group"
              >
                <div className="md:col-span-2">
                  <span className="font-serif text-3xl md:text-4xl text-[#1F3D33]/40 group-hover:text-[#1F3D33] transition-colors font-light">
                    {service.number}
                  </span>
                </div>

                <div className="md:col-span-6 space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1B2421] font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#5B6660] leading-relaxed max-w-xl">
                    {service.summary}
                  </p>
                </div>

                <div className="md:col-span-4 flex md:justify-end">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#1F3D33]/30 bg-[#FBF8F1] text-[#1F3D33] text-xs font-semibold uppercase tracking-wider hover:bg-[#1F3D33] hover:text-[#FBF8F1] transition-all"
                  >
                    <span>View Consultation Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between flex-wrap gap-4 pt-4 text-xs text-[#5B6660]">
            <span className="text-xs text-[#5B6660]">
              In-person consultations at the Worli clinic.
            </span>
            <Link
              href="/services"
              className="text-[#1F3D33] font-semibold hover:underline flex items-center gap-1"
            >
              <span>Explore full service details & boundaries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHAT TO EXPECT AT YOUR CONSULTATION (Horizontal Numbered Timeline) */}
      <section className="py-16 md:py-24 bg-[#FBF8F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs uppercase tracking-widest text-[#5B6660] font-semibold">
              Clinical Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1B2421] font-medium">
              What to Expect at Your Consultation
            </h2>
            <p className="text-base text-[#5B6660]">
              A structured, transparent consultation process focused on factual clinical observation and careful evaluation.
            </p>
          </div>

          {/* Timeline Grid with Connecting Line */}
          <div className="relative">
            {/* Mobile Vertical Timeline */}
            <div className="md:hidden relative pl-6 space-y-6 before:absolute before:top-3 before:bottom-3 before:left-[15px] before:w-[2px] before:bg-[#1F3D33]/20">
              {consultationSteps.map((stepItem) => (
                <div key={stepItem.step} className="relative flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#1F3D33] text-[#FBF8F1] flex items-center justify-center font-sans text-xs font-semibold shrink-0 shadow-sm z-10">
                    {stepItem.step}
                  </div>
                  <div className="flex-1 p-4 rounded-xl bg-[#F3EEE2] border border-[#1F3D33]/15 shadow-sm">
                    <h3 className="font-serif text-base font-semibold text-[#1B2421] mb-1">
                      {stepItem.title}
                    </h3>
                    <p className="text-xs text-[#5B6660] leading-relaxed">
                      {stepItem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Horizontal Timeline */}
            <div className="hidden md:block relative">
              <div className="absolute top-5 left-12 right-12 h-[2px] bg-[#1F3D33]/20 z-0" />
              <div className="grid grid-cols-4 gap-6 relative z-10">
                {consultationSteps.map((stepItem) => (
                  <div
                    key={stepItem.step}
                    className="flex flex-col h-full p-6 rounded-xl bg-[#F3EEE2] border border-[#1F3D33]/15 hover:border-[#1F3D33]/40 transition-all shadow-sm"
                  >
                    {/* Step Node */}
                    <div className="w-10 h-10 rounded-full bg-[#1F3D33] text-[#FBF8F1] flex items-center justify-center font-sans text-xs font-semibold mb-4 shadow-sm">
                      {stepItem.step}
                    </div>

                    <h3 className="font-serif text-lg font-semibold text-[#1B2421] mb-2">
                      {stepItem.title}
                    </h3>

                    <p className="text-xs text-[#5B6660] leading-relaxed flex-grow">
                      {stepItem.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PATIENT FEEDBACK & INDEPENDENT PROFILES */}
      <PatientFeedbackBlock />

      {/* 7. LOCATION & HOURS (Balanced Two-Column Grid) */}
      <section className="py-16 md:py-24 bg-[#FBF8F1] border-t border-[#1F3D33]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs uppercase tracking-widest text-[#5B6660] font-semibold">
              Visit the Clinic
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1B2421] font-medium">
              Location & Hours
            </h2>
            <p className="text-sm text-[#5B6660]">
              Conveniently situated in Worli with landmark accessibility near Mahindra Towers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 5 Cols: Address & Schedule Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Address Card */}
              <div className="p-6 rounded-xl bg-[#F3EEE2] border border-[#1F3D33]/15 space-y-4">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#1F3D33] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-[#1B2421]">Worli Clinic Address</h3>
                    <p className="text-xs text-[#5B6660] leading-relaxed">
                      {clinicConfig.address.fullFormatted}
                    </p>
                    <p className="text-xs text-[#1F3D33] font-medium pt-1">
                      Landmark: {clinicConfig.address.landmarkDescription}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#1F3D33]/10">
                  <a
                    href={clinicConfig.geo.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F3D33] hover:underline"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Google Maps Directions</span>
                  </a>
                </div>
              </div>

              {/* Hours Card */}
              <div className="p-6 rounded-xl bg-[#F3EEE2] border border-[#1F3D33]/15 space-y-4">
                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#1F3D33] shrink-0 mt-0.5" />
                  <div className="space-y-2 text-xs text-[#5B6660] w-full">
                    <h3 className="text-sm font-semibold text-[#1B2421]">Consultation Timings</h3>
                    <div className="flex justify-between py-1.5 border-b border-[#1F3D33]/10">
                      <span>Morning Session:</span>
                      <span className="font-medium text-[#1B2421]">
                        10:45 AM – 2:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#1F3D33]/10">
                      <span>Evening Session:</span>
                      <span className="font-medium text-[#1B2421]">
                        5:45 PM – 9:15 PM
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Sunday:</span>
                      <span className="font-medium text-[#1B2421]">Closed</span>
                    </div>
                    <p className="text-[11px] text-[#5B6660] italic pt-1">
                      *{clinicConfig.timings.unverifiedNotice}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#1F3D33]/10 flex flex-wrap gap-2.5">
                  <a
                    href={clinicConfig.contact.phoneTel}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#1F3D33] text-[#FBF8F1] text-xs font-semibold uppercase tracking-wider hover:bg-[#162E26] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Clinic</span>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#2C5B55] text-[#FBF8F1] text-xs font-semibold uppercase tracking-wider hover:bg-[#1F3D33] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Click to Load Interactive Map */}
            <div className="lg:col-span-7">
              <ClickToLoadMap />
            </div>
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS (Accessible Accordion) */}
      <section className="py-16 md:py-24 bg-[#F3EEE2] border-t border-[#1F3D33]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs uppercase tracking-widest text-[#5B6660] font-semibold">
              Information & Clarity
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1B2421] font-medium">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#5B6660]">
              Clear answers regarding appointments, consultation structure, and medical safety.
            </p>
          </div>

          <FaqAccordion items={clinicFaqs} />
        </div>
      </section>

      {/* 9. FINAL CTA BAND */}
      <section className="py-16 md:py-20 bg-[#1F3D33] text-[#FBF8F1] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBF8F1]/10 text-[#A9B8A0] text-xs font-medium uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consultations by Appointment</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            Schedule a consultation at the Worli clinic
          </h2>

          <p className="text-sm sm:text-base text-[#FBF8F1]/80 max-w-xl mx-auto leading-relaxed">
            Reach out by submitting an online request, calling directly, or messaging on WhatsApp.
            Dr. Vasam&apos;s clinic will coordinate an available appointment window.
          </p>

          <div id="closing-cta-group" className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto w-full">
            <Link
              href="/contact#appointment-request-card"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#FBF8F1] text-[#1F3D33] text-xs font-semibold uppercase tracking-wider hover:bg-[#F3EEE2] transition-colors text-center"
            >
              Request an Appointment
            </Link>
            <a
              href={clinicConfig.contact.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-[#FBF8F1]/30 text-[#FBF8F1] text-xs font-semibold uppercase tracking-wider hover:bg-[#FBF8F1]/10 transition-colors text-center"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>Call {clinicConfig.contact.phoneDisplay}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#2C5B55] text-[#FBF8F1] text-xs font-semibold uppercase tracking-wider hover:bg-[#162E26] transition-colors text-center"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" />
              <span>WhatsApp Message</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
