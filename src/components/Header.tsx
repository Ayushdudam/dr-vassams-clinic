"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clinicConfig } from "@/config/clinic";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // Close mobile menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FBF8F1]/95 backdrop-blur-md border-b border-[#1F3D33]/15 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3 sm:gap-4">
          {/* Brand Logo & Landmark Tagline */}
          <Link
            href="/"
            className="flex flex-col min-w-0 group focus:outline-none focus:ring-2 focus:ring-[#1F3D33] rounded p-1"
          >
            <span className="font-serif text-base sm:text-xl md:text-2xl font-bold tracking-tight text-[#1F3D33] group-hover:text-[#162E26] transition-colors truncate">
              Dr Vassam&apos;s Clinic
            </span>
            <span className="text-[10px] sm:text-xs text-[#5B6660] tracking-wider uppercase font-medium flex items-center gap-1.5 truncate">
              <span>Worli, Mumbai</span>
              <span className="w-1 h-1 rounded-full bg-[#1F3D33]/40 shrink-0" />
              <span className="hidden sm:inline">Near Mahindra Towers</span>
            </span>
          </Link>

          {/* Desktop Navigation Links (>= lg: 1024px) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" aria-label="Main Navigation">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors py-2 relative focus:outline-none focus:ring-2 focus:ring-[#1F3D33] rounded ${
                    isActive
                      ? "text-[#1F3D33] font-bold"
                      : "text-[#5B6660] hover:text-[#1F3D33]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#1F3D33]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action CTA (>= lg: 1024px) */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
            {/* Call button: icon-only below 1180px, full text on wider screens */}
            <a
              href={clinicConfig.contact.phoneTel}
              aria-label={`Call ${clinicConfig.contact.phoneDisplay}`}
              className="inline-flex items-center justify-center gap-2 p-2.5 xl:px-3.5 xl:py-2 min-h-[44px] min-w-[44px] rounded-lg border border-[#1F3D33]/30 text-[#1F3D33] text-xs font-semibold uppercase tracking-wider bg-[#F3EEE2] hover:bg-[#DDE5D6] transition-colors focus:ring-2 focus:ring-[#1F3D33]"
              title={`Call ${clinicConfig.contact.phoneDisplay}`}
            >
              <Phone className="w-4 h-4 text-[#1F3D33] shrink-0" />
              <span className="hidden xl:inline">Call {clinicConfig.contact.phoneDisplay}</span>
            </a>
            <Link
              href="/contact#appointment-request-card"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[44px] rounded-lg bg-[#1F3D33] text-[#FBF8F1] text-xs font-semibold uppercase tracking-wider hover:bg-[#162E26] transition-colors focus:ring-2 focus:ring-[#1F3D33]"
            >
              <span>Request Appointment</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </Link>
          </div>

          {/* Mobile & Tablet Quick Actions ( < lg: 1024px ) */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <a
              href={clinicConfig.contact.phoneTel}
              aria-label={`Call ${clinicConfig.contact.phoneDisplay}`}
              className="p-2.5 min-h-[44px] min-w-[44px] rounded-lg border border-[#1F3D33]/25 bg-[#F3EEE2] text-[#1F3D33] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1F3D33]"
              title={`Call ${clinicConfig.contact.phoneDisplay}`}
            >
              <Phone className="w-4 h-4 text-[#1F3D33]" />
            </a>
            <button
              ref={toggleButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="p-2.5 min-h-[44px] min-w-[44px] rounded-lg border border-[#1F3D33]/25 bg-[#F3EEE2] text-[#1F3D33] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1F3D33]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
          className="lg:hidden border-b border-[#1F3D33]/20 bg-[#FBF8F1] px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-colors ${
                    isActive
                      ? "bg-[#1F3D33] text-[#FBF8F1] font-semibold"
                      : "text-[#1B2421] hover:bg-[#F3EEE2]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#1F3D33]/15 space-y-2.5">
            <Link
              href="/contact#appointment-request-card"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#1F3D33] text-[#FBF8F1] text-xs font-semibold uppercase tracking-wider"
            >
              <span>Request Appointment</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={clinicConfig.contact.phoneTel}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-[#1F3D33]/30 bg-[#F3EEE2] text-[#1F3D33] text-xs font-semibold uppercase tracking-wider"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {clinicConfig.contact.phoneDisplay}</span>
            </a>
          </div>

          <div className="text-[11px] text-[#5B6660] text-center pt-2">
            Worli, Mumbai · Mon–Sat clinic
          </div>
        </div>
      )}
    </header>
  );
};
