import type { Metadata, Viewport } from "next";
import { Newsreader, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { clinicConfig } from "@/config/clinic";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#1F3D33",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(clinicConfig.meta.siteUrl),
  title: {
    default: "Dr Vassam's Homoeopathic Clinic | Worli, Mumbai",
    template: "%s | Dr Vassam's Homoeopathic Clinic",
  },
  description:
    "Homoeopathic consultations in Worli, Mumbai by Dr. Srinivas Vasam, BHMS. Near Mahindra Towers. Comprehensive case assessments and lifestyle guidance.",
  keywords: [
    "homoeopathic clinic Worli",
    "homoeopath near Mahindra Towers",
    "homoeopathic doctor Worli Mumbai",
    "Dr Srinivas Vasam",
    "Vasam Homoeopathic Clinic",
    "BHMS homeopath Mumbai",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: clinicConfig.meta.siteUrl,
    siteName: clinicConfig.brandName,
    title: "Dr Vassam's Homoeopathic Clinic | Worli, Mumbai",
    description:
      "Homoeopathic consultations in Worli, Mumbai by Dr. Srinivas Vasam, BHMS. Individualized case assessments near Mahindra Towers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Vassam's Homoeopathic Clinic | Worli, Mumbai",
    description:
      "Homoeopathic consultations in Worli, Mumbai by Dr. Srinivas Vasam, BHMS. Near Mahindra Towers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Verified JSON-LD Schema: MedicalBusiness & Person
  // NOTE: openingHoursSpecification is strictly omitted because clinicConfig.timings.hoursVerified = false
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": `${clinicConfig.meta.siteUrl}/#clinic`,
        name: clinicConfig.brandName,
        alternateName: clinicConfig.alternateNames,
        description:
          "Outpatient homoeopathic clinic in Worli, Mumbai offering individualized consultations by Dr. Srinivas Vasam, BHMS.",
        telephone: clinicConfig.contact.phoneDisplay,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${clinicConfig.address.shopAndUnit}, ${clinicConfig.address.building}, ${clinicConfig.address.street}`,
          addressLocality: clinicConfig.address.area,
          addressRegion: clinicConfig.address.state,
          postalCode: clinicConfig.address.postalCode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: clinicConfig.geo.latitude,
          longitude: clinicConfig.geo.longitude,
        },
        medicalSpecialty: "Homeopathic",
      },
      {
        "@type": "Person",
        "@id": `${clinicConfig.meta.siteUrl}/#doctor`,
        name: clinicConfig.doctor.name,
        jobTitle: "Homoeopathic physician",
        alumniOf: {
          "@type": "EducationalOrganization",
          name: clinicConfig.doctor.college,
        },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Bachelor of Homeopathic Medicine and Surgery (BHMS)",
          recognizedBy: {
            "@type": "Organization",
            name: clinicConfig.doctor.registrationCouncil,
          },
        },
        worksFor: {
          "@id": `${clinicConfig.meta.siteUrl}/#clinic`,
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${newsreader.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen text-[#1B2421] bg-[#FBF8F1] antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
