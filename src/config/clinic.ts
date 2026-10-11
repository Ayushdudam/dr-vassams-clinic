/**
 * Dr Vassam's Homoeopathic Clinic - Central Clinic Configuration
 * 
 * TRUTHFULNESS NOTICE:
 * All clinic facts below are derived strictly from public business records
 * (Practo listing, Justdial listing) and user instructions.
 * Fields marked with `*Verified: false` are subject to final confirmation
 * by Dr. Srinivas Vasam and are documented in HANDOVER.md.
 */

export interface ClinicHours {
  days: string;
  morning: string;
  evening: string;
  sunday: string;
}

export interface ClinicConfig {
  brandName: string;
  alternateNames: string[];
  doctor: {
    name: string;
    qualification: string;
    college: string;
    graduationYear: number;
    collegeNote: string;
    registrationCouncil: string;
    registrationNumber: string;
    registrationYear: number;
    registrationNote: string;
    languages: string[];
    languagesVerified: boolean;
    photo: string | null;
  };
  address: {
    shopAndUnit: string;
    building: string;
    street: string;
    oppositeLandmark: string;
    nearLandmark: string;
    area: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    landmarkDescription: string;
    fullFormatted: string;
  };
  contact: {
    phoneDisplay: string;
    phoneRaw: string;
    phoneTel: string;
    whatsappNumber: string;
    whatsappVerified: boolean;
    defaultWhatsappMessage: string;
  };
  geo: {
    latitude: number;
    longitude: number;
    googleMapsDirectionsUrl: string;
    googleMapsSearchUrl: string;
  };

  timings: {
    standard: ClinicHours;
    thirdPartyAlternative: ClinicHours;
    hoursVerified: boolean;
    unverifiedNotice: string;
  };
  profiles: {
    practoDoctor: string;
    practoClinic: string;
    justdialClinic: string;
  };
  media: {
    clinicPhotos: string[];
  };
  meta: {
    siteUrl: string;
    websiteBy: string;
  };
}

export const clinicConfig: ClinicConfig = {
  brandName: "Dr Vassam's Homoeopathic Clinic",
  alternateNames: [
    "Vasam Homoeopathic Clinic",
    "Vaasam's Homeopathic Clinic",
  ],
  doctor: {
    name: "Dr. Srinivas Vasam",
    qualification: "BHMS",
    college: "Motivala Homoeopathic College",
    graduationYear: 2006,
    collegeNote: "As listed on Practo",
    registrationCouncil: "Maharashtra Council of Indian Medicine",
    registrationNumber: "42733",
    registrationYear: 2007,
    registrationNote:
      "Registered with the Maharashtra Council of Indian Medicine, No. 42733 (2007), as listed on Practo",
    languages: ["English", "Hindi", "Marathi"],
    languagesVerified: false,
    photo: null, // Null triggers elegant typographic monogram panel until genuine owner portrait is provided
  },
  address: {
    shopAndUnit: "Shop No. 20, 121",
    building: "BDD Chawls",
    street: "H. R. Devrukhkar Marg",
    oppositeLandmark: "Opposite Sumer Kendra",
    nearLandmark: "Near Mahindra Towers",
    area: "Worli",
    city: "Mumbai",
    state: "Maharashtra",
    postalCode: "400018",
    country: "India",
    landmarkDescription: "Behind Mahindra Towers, opposite Sumer Kendra",
    fullFormatted:
      "Shop No. 20, 121, BDD Chawls, H. R. Devrukhkar Marg, opposite Sumer Kendra, near Mahindra Towers, Worli, Mumbai, Maharashtra 400018",
  },
  contact: {
    phoneDisplay: "+91 98336 75356",
    phoneRaw: "9833675356",
    phoneTel: "tel:+919833675356",
    whatsappNumber: "919833675356",
    whatsappVerified: false,
    defaultWhatsappMessage:
      "Hello Dr. Vasam's Clinic, I would like to enquire about consultation timings and request an appointment.",
  },
  geo: {
    latitude: 19.004771,
    longitude: 72.822352,
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Shop+No.+20%2C+121%2C+BDD+Chawls%2C+H.+R.+Devrukhkar+Marg%2C+opposite+Sumer+Kendra%2C+near+Mahindra+Towers%2C+Worli%2C+Mumbai%2C+Maharashtra+400018",
    googleMapsSearchUrl:
      "https://www.google.com/maps/search/?api=1&query=19.004771,72.822352",
  },
  timings: {
    standard: {
      days: "Monday – Saturday",
      morning: "10:45 AM – 2:00 PM",
      evening: "5:45 PM – 9:15 PM",
      sunday: "Closed",
    },
    thirdPartyAlternative: {
      days: "Monday – Saturday",
      morning: "10:30 AM – 1:30 PM",
      evening: "5:30 PM – 9:00 PM",
      sunday: "Closed",
    },
    hoursVerified: false,
    unverifiedNotice: "Please call to confirm timings",
  },
  profiles: {
    practoDoctor:
      "https://www.practo.com/mumbai/doctor/dr-srinivas-vasam-homeopath",
    practoClinic:
      "https://www.practo.com/mumbai/clinic/vasam-homoeopathic-clinic-mumbai",
    justdialClinic:
      "https://www.justdial.com/Mumbai/Dr-Srinivas-Vasam-Opposite-Sumer-Kendra-Worli/022PXX22-XX22-000494429953-H4D7_BZDET",
  },
  media: {
    clinicPhotos: [], // Empty array triggers address/map card instead of fake imagery
  },
  meta: {
    siteUrl:
      process.env.NEXT_PUBLIC_SITE_URL || "https://dr-vassams-clinic.example.com",
    websiteBy: "",
  },
};

/**
 * Generates an encoded WhatsApp URL with an optional custom message
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || clinicConfig.contact.defaultWhatsappMessage;
  return `https://wa.me/${clinicConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}
