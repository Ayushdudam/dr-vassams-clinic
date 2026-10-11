import React from "react";
import { clinicConfig } from "@/config/clinic";
import { ExternalLink, ShieldCheck, MapPin } from "lucide-react";

export const PatientFeedbackBlock: React.FC = () => {
  return (
    <section className="py-14 md:py-18 bg-[#F3EEE2] border-y border-[#1F3D33]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F3D33]/10 text-[#1F3D33] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Public Directory Records</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1B2421] font-medium tracking-tight">
            Patient Feedback & Independent Listings
          </h2>

          <p className="text-sm sm:text-base text-[#5B6660] leading-relaxed max-w-2xl">
            This site does not publish testimonials or star ratings. You can consult external healthcare directories for their own practitioner and clinic listings.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Practo Doctor Profile */}
          <a
            href={clinicConfig.profiles.practoDoctor}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Dr. Srinivas Vasam's verified profile on Practo"
            className="group p-6 rounded-xl bg-[#FBF8F1] border border-[#1F3D33]/15 hover:border-[#1F3D33] transition-all duration-200 flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[#1F3D33]">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5B6660]">
                  Doctor Profile
                </span>
                <ExternalLink className="w-4 h-4 text-[#5B6660] group-hover:text-[#1F3D33] transition-colors" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#1B2421]">
                Practo Doctor Profile
              </h3>
              <p className="text-xs text-[#5B6660] leading-relaxed">
                View Dr. Srinivas Vasam&apos;s verified educational background (BHMS 2006) and patient feedback on Practo.
              </p>
            </div>
            <span className="mt-6 text-xs font-semibold text-[#1F3D33] group-hover:underline flex items-center gap-1">
              Open Practo Listing &rarr;
            </span>
          </a>

          {/* Practo Clinic Profile */}
          <a
            href={clinicConfig.profiles.practoClinic}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Vasam Homoeopathic Clinic profile on Practo"
            className="group p-6 rounded-xl bg-[#FBF8F1] border border-[#1F3D33]/15 hover:border-[#1F3D33] transition-all duration-200 flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[#1F3D33]">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5B6660]">
                  Clinic Directory
                </span>
                <ExternalLink className="w-4 h-4 text-[#5B6660] group-hover:text-[#1F3D33] transition-colors" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#1B2421]">
                Vasam Homoeopathic Clinic
              </h3>
              <p className="text-xs text-[#5B6660] leading-relaxed">
                Review clinic profile, Worli location details, and patient experience notes on Practo Clinic pages.
              </p>
            </div>
            <span className="mt-6 text-xs font-semibold text-[#1F3D33] group-hover:underline flex items-center gap-1">
              View Clinic Details &rarr;
            </span>
          </a>

          {/* Google Maps Listing */}
          <a
            href={clinicConfig.geo.googleMapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Dr. Vasam's clinic listing on Google Maps"
            className="group p-6 rounded-xl bg-[#FBF8F1] border border-[#1F3D33]/15 hover:border-[#1F3D33] transition-all duration-200 flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[#1F3D33]">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5B6660]">
                  Location & Map
                </span>
                <MapPin className="w-4 h-4 text-[#5B6660] group-hover:text-[#1F3D33] transition-colors" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#1B2421]">
                Google Maps Clinic Pin
              </h3>
              <p className="text-xs text-[#5B6660] leading-relaxed">
                Locate the clinic behind Mahindra Towers, read public community contributions, and obtain navigation routes.
              </p>
            </div>
            <span className="mt-6 text-xs font-semibold text-[#1F3D33] group-hover:underline flex items-center gap-1">
              View on Google Maps &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
