import React from "react";
import Image from "next/image";
import { clinicConfig } from "@/config/clinic";

interface DoctorMonogramProps {
  className?: string;
  size?: "default" | "large" | "compact";
}

export const DoctorMonogram: React.FC<DoctorMonogramProps> = ({
  className = "",
  size = "default",
}) => {
  const photo = clinicConfig.doctor.photo;

  if (photo) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl border border-[#1F3D33]/20 shadow-md bg-[#F3EEE2] aspect-[4/5] ${className}`}
      >
        <Image
          src={photo}
          alt={`Portrait of ${clinicConfig.doctor.name}, ${clinicConfig.doctor.qualification}`}
          width={480}
          height={600}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 border border-[#1F3D33]/15 pointer-events-none rounded-2xl" />
      </div>
    );
  }

  // Refined textured sage panel with typographic monogram and credentials
  const dimensions =
    size === "large"
      ? "w-full max-w-sm aspect-[4/5] min-h-[420px]"
      : size === "compact"
      ? "w-full max-w-xs aspect-square"
      : "w-full max-w-md aspect-[4/5] min-h-[400px]";

  return (
    <div
      className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-[#2C5B55]/30 bg-[#DDE5D6]/60 text-[#1B2421] shadow-sm select-none ${dimensions} ${className}`}
      role="img"
      aria-label={`Clinic doctor insignia for ${clinicConfig.doctor.name}, ${clinicConfig.doctor.qualification}`}
    >
      {/* Editorial corner frame marks */}
      <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-[#1F3D33]/40" />
      <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-[#1F3D33]/40" />
      <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-[#1F3D33]/40" />
      <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-[#1F3D33]/40" />

      {/* Top Header Label */}
      <div className="text-center space-y-1">
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#1F3D33] font-semibold block">
          Homoeopathic Physician
        </span>
        <div className="w-10 h-[1.5px] bg-[#B08A63] mx-auto mt-1.5" />
      </div>

      {/* Center Monogram Insignia */}
      <div className="relative my-auto flex flex-col items-center justify-center py-4">
        {/* Embossed Roundel */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#1F3D33]/25 flex items-center justify-center bg-[#FBF8F1] shadow-inner relative">
          <div className="absolute inset-1 rounded-full border border-dashed border-[#B08A63]/50" />
          <span className="font-serif text-3xl sm:text-4xl text-[#1F3D33] tracking-widest italic font-normal">
            SV
          </span>
        </div>

        <h3 className="font-serif text-lg sm:text-xl text-[#1B2421] mt-4 font-semibold text-center tracking-tight">
          {clinicConfig.doctor.name}
        </h3>
        <p className="text-xs uppercase tracking-widest text-[#5B6660] font-medium mt-0.5">
          {clinicConfig.doctor.qualification} · Graduated 2006
        </p>
      </div>

      {/* Bottom Qualification & Council Registration */}
      <div className="pt-4 border-t border-[#1F3D33]/15 w-full text-center space-y-1.5">
        <p className="text-xs font-medium text-[#1B2421]">
          {clinicConfig.doctor.college}
        </p>
        <p className="text-[11px] text-[#5B6660] leading-snug">
          {clinicConfig.doctor.registrationCouncil}
          <br />
          <span className="font-sans text-xs text-[#1F3D33] font-semibold">
            Registration No. {clinicConfig.doctor.registrationNumber} (2007)
          </span>
        </p>
        <div className="pt-1">
          <span className="inline-block text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#1F3D33]/10 text-[#1F3D33] font-semibold">
            Worli Clinic · Mumbai
          </span>
        </div>
      </div>
    </div>
  );
};
