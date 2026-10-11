import React from "react";
import Link from "next/link";
import { clinicConfig } from "@/config/clinic";
import { Compass, Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-20 md:py-32 bg-[#FBF8F1] text-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="w-16 h-16 rounded-full bg-[#1F3D33]/10 text-[#1F3D33] flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8 stroke-[1.5]" />
        </div>

        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#5B6660] font-semibold">
            Error 404 · Page Not Found
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#1B2421] font-medium">
            This page could not be found
          </h1>
          <p className="text-sm text-[#5B6660] leading-relaxed">
            The page you are looking for may have been moved, renamed, or is currently pending clinical verification.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1F3D33] text-[#FBF8F1] text-xs font-semibold uppercase tracking-wider hover:bg-[#162E26] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#1F3D33]/30 bg-[#F3EEE2] text-[#1F3D33] text-xs font-semibold uppercase tracking-wider hover:bg-[#DDE5D6] transition-colors"
          >
            <span>Consultation Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="pt-6 border-t border-[#1F3D33]/15 text-xs text-[#5B6660]">
          For urgent enquiries or appointment scheduling, please call{" "}
          <a href={clinicConfig.contact.phoneTel} className="font-semibold text-[#1F3D33] underline">
            {clinicConfig.contact.phoneDisplay}
          </a>
          .
        </div>
      </div>
    </div>
  );
}
