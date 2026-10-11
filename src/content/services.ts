/**
 * Clinical Services Content Definition
 * 
 * COMPLIANCE & TRUTHFULNESS RULE:
 * Every service is framed strictly as "consulting about X" and never claims
 * cures, guarantees, or replacements for conventional clinical medicine.
 * 
 * Only items with `approved: true` are surfaced in navigation, index, sitemap,
 * and detail pages. Unapproved items are retained for doctor review in HANDOVER.md.
 */

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortLabel: string;
  number: string;
  summary: string;
  approved: boolean;
  approvalBasis: string;
  whatTheConsultationInvolves: string[];
  whatToBringOrTell: string[];
  whenToSeekConventionalOrUrgentCare: string[];
  faqs: ServiceFAQ[];
  ctaText: string;
}

export const servicesData: ServiceItem[] = [
  {
    slug: "general-consultation",
    title: "General Homoeopathic Consultation",
    shortLabel: "General Consultation",
    number: "01",
    summary:
      "A thorough, individualized clinical assessment evaluating current symptoms, personal health history, and day-to-day lifestyle patterns.",
    approved: true,
    approvalBasis: "Standard clinical scope confirmed by public listings (BHMS practice).",
    whatTheConsultationInvolves: [
      "In-depth discussion of your primary symptoms, duration, and onset circumstances.",
      "Review of past medical events, surgical history, and family health tendencies.",
      "Inquiry into environmental sensitivities, sleep architecture, appetite, and thermal comfort.",
      "Objective physical observation and recording of vital signs where appropriate.",
      "Formulation of an individualized homoeopathic assessment plan.",
    ],
    whatToBringOrTell: [
      "Any recent blood investigations, imaging reports, or diagnostic summaries.",
      "A complete list of current prescription medicines and supplements with dosages.",
      "Prior prescriptions or treatment notes relevant to your current concerns.",
      "A timeline or brief notes on when symptoms tend to flare or subside.",
    ],
    whenToSeekConventionalOrUrgentCare: [
      "Acute chest pain, severe shortness of breath, sudden numbness, or speech difficulties.",
      "Sudden severe headache, unexplained high fever, or loss of consciousness.",
      "Severe acute abdominal pain, major physical trauma, or profuse bleeding.",
      "Any sudden, rapid deterioration in an existing chronic condition.",
    ],
    faqs: [
      {
        question: "How long does a general consultation typically take?",
        answer:
          "An initial consultation typically takes between 30 and 45 minutes to allow for a structured case discussion and thorough history taking. Follow-up visits are usually shorter, focusing on progression and response.",
      },
      {
        question: "Should I discontinue my current allopathic or prescribed medications?",
        answer:
          "No. You must never discontinue, alter, or pause any prescribed medications without explicit consultation and instructions from the prescribing physician. Homoeopathic consultations are conducted with full awareness of your existing regimen.",
      },
      {
        question: "Are homoeopathic consultations suitable for emergency conditions?",
        answer:
          "No. Homoeopathic clinics are not emergency care facilities. In cases of acute trauma, severe respiratory distress, cardiac symptoms, or medical emergencies, please visit an emergency department immediately.",
      },
    ],
    ctaText: "Request a General Consultation",
  },
  {
    slug: "skin-concerns",
    title: "Consultation for Chronic Skin Concerns",
    shortLabel: "Skin Concerns",
    number: "02",
    summary:
      "Clinical evaluation of persistent skin conditions, analyzing triggers, seasonal patterns, and individual susceptibility.",
    approved: true,
    approvalBasis: "Supported by public clinic practice listings for homoeopathic skin evaluations.",
    whatTheConsultationInvolves: [
      "Visual examination of lesions, distribution patterns, and skin texture.",
      "Detailed review of aggravating factors (weather changes, sweat, dietary patterns, topical products).",
      "Analysis of family dermatological history and allergic background.",
      "Assessment of concurrent stress, sleep quality, and gut health correlations.",
      "Discussion of supportive gentle skincare routines alongside homoeopathic advice.",
    ],
    whatToBringOrTell: [
      "A list of topical creams, steroids, moisturizers, and soaps you have used or currently use.",
      "Dates of allergy patch tests, biopsies, or previous dermatological diagnoses.",
      "Observations about whether itching or rash intensifies during specific seasons, times of day, or post-exposure.",
      "Clear photos of earlier rash stages if the appearance has changed.",
    ],
    whenToSeekConventionalOrUrgentCare: [
      "Sudden spreading rash accompanied by facial swelling, breathing difficulty, or difficulty swallowing (seek emergency anaphylaxis care immediately).",
      "Signs of secondary bacterial infection: rapid warmth, spreading redness, pus discharge, red streaks, or high fever.",
      "Rapidly evolving, blistering, or painful lesions covering large body areas.",
      "Any suspicious mole changing rapidly in symmetry, border, color, or diameter.",
    ],
    faqs: [
      {
        question: "Does homoeopathic treatment guarantee a permanent cure for skin disorders?",
        answer:
          "No. Medical ethics and Indian healthcare regulations strictly prohibit guaranteeing cures. Responses vary based on chronicity, individual physiology, and triggers. Consultations aim to evaluate symptoms and support overall wellbeing.",
      },
      {
        question: "Can I continue using my prescribed dermatological ointments?",
        answer:
          "You should discuss all current topical treatments openly. The doctor will evaluate your situation, and you should not abruptly cease prescription ointments without consulting your treating dermatologist.",
      },
      {
        question: "How soon do patients notice changes in skin symptoms?",
        answer:
          "Chronic dermatological complaints generally require time, steady observation, and regular follow-ups. No immediate or overnight outcomes are promised.",
      },
    ],
    ctaText: "Enquire About a Skin Consultation",
  },
  {
    slug: "migraine-and-headaches",
    title: "Consultation for Migraine and Chronic Headaches",
    shortLabel: "Migraine & Headaches",
    number: "03",
    summary:
      "Systematic assessment of recurrent headache patterns, identifying sensory triggers, stress links, and pain characteristics.",
    approved: false,
    approvalBasis: "Requires formal clinical sign-off from Dr. Srinivas Vasam before publication.",
    whatTheConsultationInvolves: [
      "Mapping the location, quality (throbbing, dull, piercing), and progression of headache episodes.",
      "Identifying sensory triggers: sunlight, noise, screen exposure, skipping meals, or hormonal shifts.",
      "Reviewing past neurological evaluations and previous response to analgesics.",
    ],
    whatToBringOrTell: [
      "A headache diary noting frequency, intensity, and duration over recent weeks.",
      "Previous neuroimaging reports (CT, MRI) if previously performed.",
    ],
    whenToSeekConventionalOrUrgentCare: [
      "Sudden severe 'thunderclap' headache reaching maximum intensity in seconds.",
      "Headache with neurological deficits: weakness, numbness, visual field loss, or speech slurring.",
      "Headache accompanied by stiff neck, confusion, high fever, or recent head trauma.",
    ],
    faqs: [],
    ctaText: "Request Headache Consultation",
  },
  {
    slug: "allergies",
    title: "Consultation for Respiratory & Seasonal Allergies",
    shortLabel: "Allergies",
    number: "04",
    summary:
      "Evaluation of recurrent sneezing, nasal congestion, and seasonal allergic tendencies through individual constitutional assessment.",
    approved: false,
    approvalBasis: "Requires formal clinical sign-off from Dr. Srinivas Vasam before publication.",
    whatTheConsultationInvolves: [
      "Detailed mapping of environmental sensitivities: dust, pollen, dampness, and cold drafts.",
      "Examining seasonal variation and diurnal timing of symptoms.",
      "Reviewing previous ENT evaluations and anti-histamine usage.",
    ],
    whatToBringOrTell: [
      "Prior allergy test results (IgE, skin prick tests).",
      "Names of inhalers, nasal sprays, and oral anti-histamines currently used.",
    ],
    whenToSeekConventionalOrUrgentCare: [
      "Acute wheezing, stridor, or inability to complete a full sentence due to breathlessness.",
      "Swelling of the lips, tongue, throat, or sudden dizziness (call emergency services).",
    ],
    faqs: [],
    ctaText: "Request Allergy Consultation",
  },
  {
    slug: "digestive-complaints",
    title: "Consultation for Chronic Digestive Complaints",
    shortLabel: "Digestive Complaints",
    number: "05",
    summary:
      "Holistic evaluation of recurring acidity, bloating, and irregular bowel habits alongside dietary and stress factors.",
    approved: false,
    approvalBasis: "Requires formal clinical sign-off from Dr. Srinivas Vasam before publication.",
    whatTheConsultationInvolves: [
      "Documenting meal timings, dietary preferences, and symptomatic reactions to specific foods.",
      "Review of bowel habit patterns, bloating triggers, and abdominal discomfort.",
    ],
    whatToBringOrTell: [
      "Recent abdominal ultrasound or endoscopy reports.",
      "List of antacids, prokinetics, or digestive supplements taken.",
    ],
    whenToSeekConventionalOrUrgentCare: [
      "Vomiting blood or passing black, tarry stools.",
      "Unexplained rapid weight loss, persistent fever, or persistent swallowing difficulty.",
    ],
    faqs: [],
    ctaText: "Request Digestive Consultation",
  },
  {
    slug: "joint-and-spine-discomfort",
    title: "Consultation for Joint & Musculoskeletal Discomfort",
    shortLabel: "Joint Discomfort",
    number: "06",
    summary:
      "Clinical discussion of chronic stiffness and joint mobility concerns in relation to weather, movement, and posture.",
    approved: false,
    approvalBasis: "Requires formal clinical sign-off from Dr. Srinivas Vasam before publication.",
    whatTheConsultationInvolves: [
      "Functional assessment of joint mobility, morning stiffness duration, and pain triggers.",
      "Review of physical activity, workstation ergonomics, and joint stress factors.",
    ],
    whatToBringOrTell: [
      "X-rays, MRI scans, or rheumatological blood panels (RA factor, uric acid, ESR/CRP).",
    ],
    whenToSeekConventionalOrUrgentCare: [
      "Hot, severely swollen, red joint with acute fever (suspected septic arthritis).",
      "Inability to bear weight after acute trauma, or sudden loss of bowel/bladder control with back pain.",
    ],
    faqs: [],
    ctaText: "Request Musculoskeletal Consultation",
  },
  {
    slug: "hair-and-scalp-concerns",
    title: "Consultation for Hair and Scalp Concerns",
    shortLabel: "Hair & Scalp",
    number: "07",
    summary:
      "Systematic evaluation of chronic hair shedding, scalp flaking, and associated nutritional and stress factors.",
    approved: false,
    approvalBasis: "Requires formal clinical sign-off from Dr. Srinivas Vasam before publication.",
    whatTheConsultationInvolves: [
      "Assessment of hair shedding pattern, scalp health, and grooming habits.",
      "Reviewing nutritional history, thyroid status, and family history of thinning.",
    ],
    whatToBringOrTell: [
      "Recent blood panels (hemoglobin, serum ferritin, thyroid profile, vitamin D/B12).",
    ],
    whenToSeekConventionalOrUrgentCare: [
      "Sudden patchy hair loss with scarring, intense burning, or pustules.",
    ],
    faqs: [],
    ctaText: "Request Hair & Scalp Consultation",
  },
];

/**
 * Returns only the approved services for public display.
 */
export function getApprovedServices(): ServiceItem[] {
  return servicesData.filter((s) => s.approved);
}

/**
 * Returns an approved service matching the slug, or null.
 */
export function getApprovedServiceBySlug(slug: string): ServiceItem | null {
  const service = servicesData.find((s) => s.slug === slug);
  if (!service || !service.approved) {
    return null;
  }
  return service;
}

/**
 * Returns all unapproved services for the HANDOVER audit.
 */
export function getUnapprovedServices(): ServiceItem[] {
  return servicesData.filter((s) => !s.approved);
}
