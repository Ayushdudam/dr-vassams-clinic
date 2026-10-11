import React from "react";
import type { Metadata } from "next";
import { clinicConfig, getWhatsAppUrl } from "@/config/clinic";
import { AppointmentForm } from "@/components/AppointmentForm";
import { ClickToLoadMap } from "@/components/ClickToLoadMap";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Navigation,
  ExternalLink,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Appointment Request | Worli, Mumbai",
  description:
    "Contact Dr Vassam's Homoeopathic Clinic in Worli, Mumbai. Phone: +91 98336 75356. Request a consultation near Mahindra Towers. Verified hours & location.",
};

export default function ContactPage() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <div className="py-12 md:py-20 bg-[#FBF8F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Breadcrumb & Title */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F3D33]/10 text-[#1F3D33] text-xs font-semibold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5" />
            <span>Clinic Access & Appointments</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1B2421] font-medium tracking-tight">
            Contact & Location
          </h1>
          <p className="text-base sm:text-lg text-[#5B6660] leading-relaxed">
            Get in touch with Dr. Vassam&apos;s Homoeopathic Clinic in Worli, Mumbai.
            Submit an appointment request or reach us directly via telephone or WhatsApp.
          </p>
          <p className="text-xs text-[#5B6660] italic">
            Also listed online as {clinicConfig.alternateNames.join(" / ")}.
          </p>
        </div>

        {/* Two-Column Grid: Left Contact Info / Map, Right Appointment Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (5 Cols on lg) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Box */}
            <div className="p-6 rounded-lg bg-[#F3EEE2] border border-[#1F3D33]/15 space-y-5">
              <h2 className="font-serif text-xl font-semibold text-[#1B2421]">
                Direct Contacts
              </h2>

              <div className="space-y-4">
                {/* Telephone */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-[#1F3D33]/10 text-[#1F3D33]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#5B6660] block">
                      Telephone
                    </span>
                    <a
                      href={clinicConfig.contact.phoneTel}
                      className="text-base font-semibold text-[#1B2421] hover:text-[#1F3D33] underline"
                    >
                      {clinicConfig.contact.phoneDisplay}
                    </a>
                    <p className="text-[11px] text-[#5B6660]">Call during clinic hours for instant assistance</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-[#2C5B55]/10 text-[#2C5B55]">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#5B6660] block">
                      WhatsApp Messaging
                    </span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-[#2C5B55] hover:underline flex items-center gap-1"
                    >
                      <span>{clinicConfig.contact.phoneDisplay}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <p className="text-[11px] text-[#5B6660]">
                      *WhatsApp availability subject to confirmation by clinic staff.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Address & Landmark Details */}
            <div className="p-6 rounded-lg bg-[#F3EEE2] border border-[#1F3D33]/15 space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#1F3D33]/10 text-[#1F3D33]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-semibold text-[#1B2421]">
                    Worli Clinic Address
                  </h3>
                  <p className="text-xs text-[#5B6660] leading-relaxed">
                    {clinicConfig.address.fullFormatted}
                  </p>
                  <p className="text-xs text-[#1F3D33] font-medium pt-1">
                    Landmark: {clinicConfig.address.landmarkDescription}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={clinicConfig.geo.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex sm:inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#1F3D33] text-[#FBF8F1] text-xs font-semibold uppercase tracking-wider hover:bg-[#162E26] transition-colors text-center w-full sm:w-auto"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Timings Card */}
            <div className="p-6 rounded-lg bg-[#F3EEE2] border border-[#1F3D33]/15 space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#1F3D33]/10 text-[#1F3D33]">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-2 w-full text-xs">
                  <h3 className="font-serif text-base font-semibold text-[#1B2421]">
                    Consultation Timings
                  </h3>
                  <div className="divide-y divide-[#1F3D33]/10 text-[#5B6660]">
                    <div className="py-1 flex justify-between">
                      <span>Monday – Saturday:</span>
                      <span className="font-medium text-[#1B2421]">
                        10:45 AM – 2:00 PM
                      </span>
                    </div>
                    <div className="py-1 flex justify-between">
                      <span>Evening Session:</span>
                      <span className="font-medium text-[#1B2421]">
                        5:45 PM – 9:15 PM
                      </span>
                    </div>
                    <div className="py-1 flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium text-[#1B2421]">Closed</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#5B6660] italic pt-1">
                    *{clinicConfig.timings.unverifiedNotice}
                  </p>
                </div>
              </div>
            </div>


          </div>

          {/* Right Column: Appointment Request Form (7 Cols on lg) */}
          <div className="lg:col-span-7">
            <AppointmentForm />
          </div>
        </div>

        {/* Click to Load Interactive Map */}
        <section className="space-y-4 pt-6 border-t border-[#1F3D33]/15">
          <div className="space-y-1">
            <h2 className="font-serif text-2xl text-[#1B2421] font-semibold">
              Interactive Map & Transit Route
            </h2>
            <p className="text-xs text-[#5B6660]">
              Click below to load live Google Maps navigation. No trackers are loaded prior to your interaction.
            </p>
          </div>
          <ClickToLoadMap />
        </section>
      </div>
    </div>
  );
}
