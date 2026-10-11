import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getApprovedServices, getApprovedServiceBySlug } from "@/content/services";
import { getWhatsAppUrl } from "@/config/clinic";
import {
  Stethoscope,
  FileCheck,
  AlertOctagon,
  HelpCircle,
  MessageCircle,
  ShieldAlert,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const approved = getApprovedServices();
  return approved.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getApprovedServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Worli, Mumbai`,
    description: `${service.summary} Consultations by Dr. Srinivas Vasam, BHMS in Worli, Mumbai. Individualized clinical case intake.`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getApprovedServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const whatsappUrl = getWhatsAppUrl(
    `Hello Dr. Vasam's Clinic, I would like to enquire about ${service.title} and request an appointment.`
  );

  return (
    <div className="py-12 md:py-20 bg-[#FBF8F1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-[#5B6660]">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-[#1F3D33] transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/services" className="hover:text-[#1F3D33] transition-colors">
                Services
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#1F3D33] font-semibold" aria-current="page">
              {service.shortLabel}
            </li>
          </ol>
        </nav>

        {/* Title Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F3D33]/10 text-[#1F3D33] text-xs font-semibold uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Consultation Scope · Area {service.number}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1B2421] font-medium tracking-tight">
            {service.title}
          </h1>
          <p className="text-lg text-[#5B6660] leading-relaxed">
            {service.summary}
          </p>
        </div>

        {/* Mandatory Medical Disclaimer Band */}
        <div className="p-6 rounded-lg bg-[#F3EEE2] border-l-4 border-[#1F3D33] text-xs text-[#5B6660] space-y-2">
          <div className="flex items-center gap-2 font-semibold text-[#1B2421] text-sm">
            <ShieldAlert className="w-4 h-4 text-[#1F3D33]" />
            <span>Non-Negotiable Medical Disclaimer</span>
          </div>
          <p className="leading-relaxed">
            Homoeopathy is not a substitute for emergency or conventional medical care; do not stop prescribed medicines without your doctor&apos;s advice. This consultation aims to understand your overall health profile and provide constitutional homoeopathic care. We do not promise cures or guaranteed timelines.
          </p>
        </div>

        {/* 1. What the Consultation Involves */}
        <section className="p-8 rounded-lg bg-[#F3EEE2] border border-[#1F3D33]/15 space-y-4">
          <h2 className="font-serif text-2xl text-[#1B2421] font-semibold">
            What the Consultation Involves
          </h2>
          <p className="text-sm text-[#5B6660]">
            During your visit to our Worli clinic, Dr. Srinivas Vasam conducts a structured assessment:
          </p>
          <ul className="space-y-2.5 text-sm text-[#1B2421] list-disc list-inside">
            {service.whatTheConsultationInvolves.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 2. What to Bring or Tell the Doctor */}
        <section className="p-8 rounded-lg bg-[#FBF8F1] border border-[#1F3D33]/20 space-y-4">
          <div className="flex items-center gap-2 text-[#1F3D33]">
            <FileCheck className="w-5 h-5" />
            <h2 className="font-serif text-2xl text-[#1B2421] font-semibold">
              What to Bring & Share at Your Appointment
            </h2>
          </div>
          <p className="text-sm text-[#5B6660]">
            To ensure an accurate and comprehensive clinical evaluation, please prepare:
          </p>
          <ul className="space-y-2.5 text-sm text-[#1B2421] list-disc list-inside">
            {service.whatToBringOrTell.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 3. When to Seek Conventional or Urgent Medical Care */}
        <section className="p-8 rounded-lg bg-red-50/50 border border-red-200 space-y-4 text-xs text-[#1B2421]">
          <div className="flex items-center gap-2 text-red-900 font-semibold text-base">
            <AlertOctagon className="w-5 h-5 text-red-700" />
            <span>When to Seek Conventional or Urgent Medical Care</span>
          </div>
          <p className="text-[#5B6660]">
            Homoeopathy is not indicated for acute emergencies or sudden critical instability. Please seek hospital emergency care or conventional specialists immediately if you experience:
          </p>
          <ul className="space-y-2 list-disc list-inside text-red-950 font-medium">
            {service.whenToSeekConventionalOrUrgentCare.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 4. Consultation FAQs */}
        {service.faqs.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#1F3D33]" />
              <h2 className="font-serif text-2xl text-[#1B2421] font-semibold">
                Frequently Asked Questions for this Service
              </h2>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg bg-[#F3EEE2] border border-[#1F3D33]/15 space-y-2"
                >
                  <h3 className="font-serif text-base font-semibold text-[#1B2421]">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-[#5B6660] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA Card */}
        <div className="p-8 rounded-lg bg-[#1F3D33] text-[#FBF8F1] space-y-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h2 className="font-serif text-2xl font-medium">
                Request a Consultation
              </h2>
              <p className="text-xs text-[#FBF8F1]/80 max-w-md">
                Available Monday to Saturday at our Worli clinic.
                Please contact the clinic to schedule your visit.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact#appointment-request-card"
                className="px-5 py-3 rounded-lg bg-[#FBF8F1] text-[#1F3D33] text-xs font-semibold uppercase tracking-wider hover:bg-[#F3EEE2] transition-colors"
              >
                {service.ctaText}
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg bg-[#2C5B55] text-[#FBF8F1] text-xs font-semibold uppercase tracking-wider hover:bg-[#1F3D33] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
          <p className="text-[11px] text-[#A9B8A0] text-center border-t border-[#FBF8F1]/10 pt-4">
            * An appointment request is not a confirmed booking. Our team will contact you to confirm a date and time.
          </p>
        </div>
      </div>
    </div>
  );
}
