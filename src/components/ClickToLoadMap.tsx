"use client";

import React, { useState } from "react";
import { clinicConfig } from "@/config/clinic";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

export const ClickToLoadMap: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // OpenStreetMap or Google Maps embed URL
  const embedUrl = `https://maps.google.com/maps?q=${clinicConfig.geo.latitude},${clinicConfig.geo.longitude}&hl=en&z=16&output=embed`;

  return (
    <div className="w-full rounded-lg overflow-hidden border border-[#1F3D33]/15 bg-[#F3EEE2] relative">
      {!isLoaded ? (
        <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center space-y-5 min-h-[340px]">
          <div className="w-14 h-14 rounded-full bg-[#1F3D33]/10 text-[#1F3D33] flex items-center justify-center">
            <MapPin className="w-7 h-7 stroke-[1.75]" />
          </div>

          <div className="max-w-md space-y-2">
            <h3 className="font-serif text-xl font-semibold text-[#1B2421]">
              Clinic Location & Map
            </h3>
            <p className="text-sm text-[#5B6660] leading-relaxed">
              {clinicConfig.address.fullFormatted}
            </p>
            <p className="text-xs font-mono text-[#5B6660]">
              GPS: {clinicConfig.geo.latitude}, {clinicConfig.geo.longitude} (Worli, Mumbai)
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setIsLoaded(true)}
              className="px-5 py-2.5 rounded-lg bg-[#1F3D33] text-[#FBF8F1] text-xs uppercase tracking-wider font-semibold hover:bg-[#162E26] transition-colors focus:ring-2 focus:ring-[#1F3D33] focus:ring-offset-2"
            >
              Load Interactive Map
            </button>
            <a
              href={clinicConfig.geo.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#1F3D33]/30 text-[#1F3D33] text-xs uppercase tracking-wider font-semibold bg-[#FBF8F1] hover:bg-[#EAE4D5] transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions</span>
              <ExternalLink className="w-3 h-3 text-[#5B6660]" />
            </a>
          </div>

          <p className="text-[11px] text-[#5B6660]">
            Loading the interactive map connects to Google Maps servers.
          </p>
        </div>
      ) : (
        <div className="relative w-full h-[380px]">
          <iframe
            title="Dr Vassam's Homoeopathic Clinic Map Location"
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
          <div className="absolute bottom-3 right-3 bg-[#FBF8F1]/95 backdrop-blur-sm px-3 py-1.5 rounded border border-[#1F3D33]/15 shadow-sm">
            <a
              href={clinicConfig.geo.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#1F3D33] hover:underline flex items-center gap-1.5"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Open in Google Maps App &rarr;</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
