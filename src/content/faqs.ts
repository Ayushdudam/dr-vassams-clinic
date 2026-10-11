/**
 * Clinic-wide Frequently Asked Questions
 * 
 * Factual, transparent, and compliant with medical advertising standards.
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "consultation" | "timings" | "safety" | "location";
}

export const clinicFaqs: FAQItem[] = [
  {
    id: "faq-process",
    question: "What should I expect during a homoeopathic consultation?",
    answer:
      "A consultation involves a focused, structured discussion regarding your primary symptoms, medical history, lifestyle, and individual factors. The doctor takes time to understand your concerns in detail before discussing a tailored homoeopathic plan. No immediate or guaranteed outcome is promised.",
    category: "consultation",
  },
  {
    id: "faq-booking",
    question: "Is submitting the online appointment request a confirmed booking?",
    answer:
      "No. Submitting an online enquiry is a request, not a confirmed appointment. The clinic team will review your requested day and time window and contact you directly via phone or WhatsApp to confirm an available slot.",
    category: "consultation",
  },
  {
    id: "faq-medicines",
    question: "Should I stop taking my regular prescribed medications?",
    answer:
      "Never stop or modify any prescribed allopathic medications without the direct guidance of the prescribing physician. Homoeopathic care is conducted with full knowledge of your ongoing treatments and does not replace conventional medical regimens.",
    category: "safety",
  },
  {
    id: "faq-emergencies",
    question: "Does the clinic handle medical emergencies?",
    answer:
      "No. This is an outpatient homoeopathic clinic and is not equipped for medical emergencies, acute trauma, severe respiratory distress, or cardiac events. In any emergency situation, please proceed directly to the nearest hospital emergency department.",
    category: "safety",
  },

  {
    id: "faq-timings",
    question: "What are the clinic timings?",
    answer:
      "Standard clinic hours are Monday through Saturday, 10:45 AM – 2:00 PM (morning session) and 5:45 PM – 9:15 PM (evening session). The clinic is closed on Sundays. As third-party listings vary slightly, please call +91 98336 75356 to confirm timings prior to your visit.",
    category: "timings",
  },
  {
    id: "faq-location",
    question: "How do I reach the clinic in Worli?",
    answer:
      "The clinic is located at Shop No. 20, 121, BDD Chawls, H. R. Devrukhkar Marg, Worli, Mumbai 400018. The most recognized landmarks are behind Mahindra Towers and opposite Sumer Kendra.",
    category: "location",
  },
  {
    id: "faq-records",
    question: "What documents or records should I bring?",
    answer:
      "Please bring any recent lab investigation reports (blood, urine, imaging), a list of current medications with dosages, and any relevant past medical records. This helps Dr. Vasam form an accurate clinical picture.",
    category: "consultation",
  },
];
