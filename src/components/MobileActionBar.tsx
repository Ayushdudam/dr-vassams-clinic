"use client";

import React, { useState, useEffect } from "react";
import { clinicConfig, getWhatsAppUrl } from "@/config/clinic";
import { Phone, MessageCircle, Navigation } from "lucide-react";

export const MobileActionBar: React.FC = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [closingVisible, setClosingVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    // 1. IntersectionObserver for Hero CTA, Closing CTA, and Appointment Form
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15, // Trigger as soon as 15% is visible
    };

    let heroEl: HTMLElement | null = null;
    let closingEl: HTMLElement | null = null;
    let formEl: HTMLElement | null = null;

    let observer: IntersectionObserver | null = null;

    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "hero-cta-group") {
            setHeroVisible(entry.isIntersecting);
          } else if (entry.target.id === "closing-cta-group") {
            setClosingVisible(entry.isIntersecting);
          } else if (entry.target.id === "appointment-request-card") {
            setFormVisible(entry.isIntersecting);
          }
        });
      }, observerOptions);

      // Locate and observe target elements
      heroEl = document.getElementById("hero-cta-group");
      closingEl = document.getElementById("closing-cta-group");
      formEl = document.getElementById("appointment-request-card");

      if (heroEl) observer.observe(heroEl);
      if (closingEl) observer.observe(closingEl);
      if (formEl) observer.observe(formEl);
    }

    // 2. Hide when any form input/textarea/select is focused
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        setInputFocused(true);
      }
    };

    const handleFocusOut = () => {
      setInputFocused(false);
    };

    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusOut);

    // 3. Handle mobile keyboard detection via visualViewport
    const handleViewportResize = () => {
      if (window.visualViewport) {
        // If visual viewport is significantly smaller than window height, keyboard is open
        const isKeyboard = window.visualViewport.height < window.innerHeight * 0.8;
        setKeyboardOpen(isKeyboard);
      }
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleViewportResize);
    }

    // Cleanup all listeners and observers
    return () => {
      if (observer) {
        if (heroEl) observer.unobserve(heroEl);
        if (closingEl) observer.unobserve(closingEl);
        if (formEl) observer.unobserve(formEl);
        observer.disconnect();
      }
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleViewportResize);
      }
    };
  }, []);

  const shouldHide =
    heroVisible || closingVisible || formVisible || inputFocused || keyboardOpen;

  return (
    <aside
      aria-label="Mobile quick actions"
      aria-hidden={shouldHide}
      style={{
        paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom, 0px))",
      }}
      className={`fixed bottom-0 left-0 right-0 z-30 md:hidden bg-[#FBF8F1]/98 backdrop-blur-md border-t border-[#1F3D33]/20 px-3 pt-2 shadow-lg transition-transform duration-300 ease-in-out ${
        shouldHide
          ? "translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100 pointer-events-auto"
      }`}
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Clinic */}
        <a
          href={clinicConfig.contact.phoneTel}
          aria-label={`Call Clinic at ${clinicConfig.contact.phoneDisplay}`}
          className="flex flex-col items-center justify-center min-h-[44px] py-1.5 px-1 rounded-lg bg-[#1F3D33] text-[#FBF8F1] text-[11px] font-semibold tracking-wide hover:bg-[#162E26] active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 mb-0.5 shrink-0" />
          <span>Call Clinic</span>
        </a>

        {/* WhatsApp */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send WhatsApp enquiry to clinic"
          className="flex flex-col items-center justify-center min-h-[44px] py-1.5 px-1 rounded-lg bg-[#2C5B55] text-[#FBF8F1] text-[11px] font-semibold tracking-wide hover:bg-[#1F3D33] active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 mb-0.5 shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Directions */}
        <a
          href={clinicConfig.geo.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get Google Maps navigation directions to clinic"
          className="flex flex-col items-center justify-center min-h-[44px] py-1.5 px-1 rounded-lg border border-[#1F3D33]/30 bg-[#F3EEE2] text-[#1F3D33] text-[11px] font-semibold tracking-wide hover:bg-[#DDE5D6] active:scale-95 transition-all"
        >
          <Navigation className="w-4 h-4 mb-0.5 shrink-0" />
          <span>Directions</span>
        </a>
      </div>
    </aside>
  );
};
