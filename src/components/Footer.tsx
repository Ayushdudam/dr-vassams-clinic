import React from "react";
import Link from "next/link";
import { clinicConfig, getWhatsAppUrl } from "@/config/clinic";
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  ShieldAlert,
  MessageCircle,
  Navigation,
} from "lucide-react";

export const Footer: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <footer className="bg-[#1F3D33] text-[#FBF8F1] pt-12 pb-28 md:pb-12 border-t border-[#162E26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-10 border-b border-[#FBF8F1]/15">
          {/* Column 1: Brand & Practice Identity */}
          <div className="space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#A9B8A0] block">
              Clinic Overview
            </span>
            <span className="font-serif text-lg font-semibold tracking-tight block text-[#FBF8F1]">
              {clinicConfig.brandName}
            </span>
            <p className="text-xs text-[#FBF8F1]/90 leading-relaxed">
              Consultations by Dr. Srinivas Vasam, BHMS (Motivala Homoeopathic College, 2006). Registered with Maharashtra Council of Indian Medicine (No. 42733, 2007).
            </p>
            <p className="text-[11px] text-[#A9B8A0] italic pt-1">
              Also listed online as {clinicConfig.alternateNames.join(" / ")}.
            </p>
          </div>

          {/* Column 2: Clinic Location & Navigation */}
          <div className="space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#A9B8A0] block">
              Clinic Location
            </span>
            <div className="text-xs text-[#FBF8F1]/90 leading-relaxed flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#A9B8A0] shrink-0 mt-0.5" />
              <div>
                <p>{clinicConfig.address.fullFormatted}</p>
                <p className="mt-1 text-[#A9B8A0] font-medium">
                  Landmark: {clinicConfig.address.landmarkDescription}
                </p>
              </div>
            </div>
            <div className="pt-1 space-y-1.5 text-xs">
              <a
                href={clinicConfig.geo.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#FBF8F1] hover:text-[#A9B8A0] flex items-center gap-1.5 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#A9B8A0]" />
                <span>Get Directions on Google Maps</span>
              </a>
              <a
                href={clinicConfig.geo.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#A9B8A0] hover:text-[#FBF8F1] flex items-center gap-1.5 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View Google Maps Clinic Pin</span>
              </a>
            </div>
          </div>

          {/* Column 3: Hours & Direct Contact */}
          <div className="space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#A9B8A0] block">
              Hours & Contact
            </span>
            <div className="text-xs text-[#FBF8F1]/90 space-y-1">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#A9B8A0] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#FBF8F1]">{clinicConfig.timings.standard.days}</p>
                  <p>Morning: {clinicConfig.timings.standard.morning}</p>
                  <p>Evening: {clinicConfig.timings.standard.evening}</p>
                  <p className="text-[#A9B8A0]">Sunday: {clinicConfig.timings.standard.sunday}</p>
                  <p className="text-[11px] text-[#A9B8A0] mt-1 italic">
                    *{clinicConfig.timings.unverifiedNotice}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#A9B8A0]" />
                <a
                  href={clinicConfig.contact.phoneTel}
                  className="font-medium text-[#FBF8F1] hover:underline"
                >
                  {clinicConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#A9B8A0]" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#A9B8A0] hover:text-[#FBF8F1] hover:underline"
                >
                  WhatsApp Enquiry
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Quick Links & Independent Listings */}
          <div className="space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#A9B8A0] block">
              Navigation & Profiles
            </span>
            <ul className="text-xs space-y-2 text-[#FBF8F1]/90">
              <li>
                <Link href="/about" className="hover:text-[#FBF8F1] transition-colors">
                  About Dr. Srinivas Vasam
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FBF8F1] transition-colors">
                  Consultation Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FBF8F1] transition-colors">
                  Contact & Location
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#FBF8F1] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-[#FBF8F1] transition-colors">
                  Medical Disclaimer
                </Link>
              </li>
              <li className="pt-1.5 border-t border-[#FBF8F1]/10">
                <a
                  href={clinicConfig.profiles.practoDoctor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FBF8F1] flex items-center gap-1.5 text-[#A9B8A0] transition-colors"
                >
                  <span>Practo Doctor Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={clinicConfig.profiles.practoClinic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FBF8F1] flex items-center gap-1.5 text-[#A9B8A0] transition-colors"
                >
                  <span>Practo Clinic Listing</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Medical Disclaimer Band */}
        <div className="py-5 border-b border-[#FBF8F1]/15 text-[11px] text-[#FBF8F1]/85 leading-relaxed flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-[#A9B8A0] shrink-0 mt-0.5" />
          <p>
            <strong>Important Medical Disclaimer:</strong> Homoeopathic consultations are not a substitute for conventional medical diagnosis or emergency care. In the event of acute emergencies, severe pain, breathing distress, or cardiac symptoms, seek immediate hospital emergency care. Never discontinue or alter prescribed medications without explicit advice from the prescribing medical practitioner. Submitting an online appointment enquiry constitutes a request and is not a confirmed booking.
          </p>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FBF8F1]/70 gap-3">
          <p>
            &copy; {new Date().getFullYear()} {clinicConfig.brandName}. All rights reserved.
          </p>
          {clinicConfig.meta.websiteBy ? (
            <p className="text-[11px]">
              Website by {clinicConfig.meta.websiteBy}
            </p>
          ) : null}
        </div>
      </div>
    </footer>
  );
};
