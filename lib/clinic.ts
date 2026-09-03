/**
 * Single source of truth for everything the clinic states about itself.
 * All content transcribed from phillipscliniclv.com (the site this replaces),
 * fetched 2026-09-03. Do not restate hours, phone, or addresses in components.
 */

export const clinic = {
  name: "Phillips Clinic",
  legalName: "Phillips Clinic Family Practice",
  descriptor: "Family Practice, Wellness & Anti-Aging Medicine",
  tagline: "Be well. Stay well. Age well.",
  phone: "(702) 363-4000",
  phoneHref: "tel:+17023634000",
  fax: "(702) 362-0086",
  email: "phillipsclinic@cox.net",
  address: {
    street: "5970 South Rainbow Boulevard, Suite 100",
    city: "Las Vegas",
    state: "NV",
    zip: "89118",
  },
  directions:
    "On South Rainbow between Russell and the 215, on the east side of the street in the Southwest Business Park.",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=5970+S+Rainbow+Blvd+Suite+100+Las+Vegas+NV+89118",
  bookingHref:
    "https://www.zocdoc.com/practice/phillips-clinic-family-practice-22848?lock=true&isNewPatient=false&referrerType=Widget",
  /** The clinic's own supplement storefront. */
  supplementsHref: "https://phillips-clinic.pharmabuilt.com/",
  /**
   * Staff payroll login, not a patient portal \u2014 the button image on the old
   * site reads "EMPLOYEE LOGIN". Their actual patient portal is AdvancedMD
   * (patientportal.advancedmd.com/121316/account/logon), still to be wired up.
   */
  employeePortalHref: "https://avfee.prismhr.com/avf/cmd/login",
  facebookHref: "https://www.facebook.com/phillipsclinic",
} as const;

/** Day-of-week keys match `Date#getDay()` order so the "open now" logic stays trivial. */
export const hours = [
  { day: "Sunday", short: "Sun", open: null, close: null },
  { day: "Monday", short: "Mon", open: "8:00 AM", close: "5:00 PM" },
  { day: "Tuesday", short: "Tue", open: "7:30 AM", close: "6:00 PM" },
  { day: "Wednesday", short: "Wed", open: "7:30 AM", close: "6:00 PM" },
  { day: "Thursday", short: "Thu", open: "7:30 AM", close: "6:00 PM" },
  { day: "Friday", short: "Fri", open: "8:00 AM", close: "5:00 PM" },
  { day: "Saturday", short: "Sat", open: "9:00 AM", close: "4:00 PM" },
] as const;

export type Provider = {
  slug: string;
  name: string;
  credential: string;
  role: string;
  photo: string | null;
  /** Real photo is a sub-200px thumbnail lifted from the old site. Flags the reshoot. */
  photoNeedsReshoot: boolean;
  bio: string[];
  focus: string[];
};

export const providers: Provider[] = [
  {
    slug: "william-moffat",
    name: "William Moffat",
    credential: "DO",
    role: "Family Medicine Physician",
    photo: "/team/william-moffat.jpg",
    photoNeedsReshoot: true,
    bio: [
      "Dr. Moffat is certified by the American Board of Family Medicine. As a family medicine physician he treats patients of every age, from newborns to seniors, and sees people most often for annual physicals, allergy consultations, illness, and chronic disease management.",
      "As an osteopathic physician he practices osteopathic manipulative treatment. OMT is a hands-on treatment that relieves pain and decreases stiffness and tension. Patients of all ages benefit from it for headaches, low back pain, musculoskeletal pain, sinus and ear problems, asthma, menstrual cramps, and infant colic.",
      "He received his DO from Touro University in Henderson in December 2020 and completed his residency and internship with Valley Health Systems in 2024. He earned his BS at Virginia Tech. He served five years of active duty in the United States Air Force from 2010 to 2015, deploying to Iraq and Africa, and has continued in the reserves since 2016.",
      "Outside the clinic he hikes, travels internationally, brews beer, and works with wood.",
    ],
    focus: ["Osteopathic manipulative treatment", "Annual physicals", "Chronic disease management", "Allergy"],
  },
  {
    slug: "julie-gidvani",
    name: "Julie A. Gidvani",
    credential: "FNP-C",
    role: "Family Nurse Practitioner",
    photo: "/team/julie-gidvani.png",
    photoNeedsReshoot: true,
    bio: [
      "Julie joined Phillips Clinic in 2008 after graduating from the University of Iowa as a family nurse practitioner. She maintains a well-developed, multi-faceted practice focused on overall wellness and disease prevention, and encourages her patients to ask questions and take an interest in their own health.",
      "Before joining the clinic she worked as an intensive care unit nurse at the University of Iowa Hospitals and Clinics. She is certified in anti-aging medicine and assists men and women with hormone replacement therapy and supplement selection.",
      "When she is not working, Julie spends time with family and friends and travels.",
    ],
    focus: ["Anti-aging medicine", "Hormone replacement therapy", "Preventive care", "Supplement guidance"],
  },
  {
    slug: "kenneth-meier",
    name: "Kenneth Meier",
    credential: "FNP-C",
    role: "Family Nurse Practitioner",
    photo: "/team/kenneth-meier.jpg",
    photoNeedsReshoot: true,
    bio: [
      "Kenneth joined Phillips Clinic in 2019 after graduating from Chamberlain College of Nursing as a family nurse practitioner.",
      "“My primary focus is on the well being and disease prevention of all patients, with a strong belief in patient centered care. I believe that as a provider my job is not only to treat but to also educate, so that patients can make the necessary steps to improve their condition.”",
      "He worked at Summerlin Hospital Medical Center as an intensive care unit nurse, among other settings, before joining the clinic. In his free time he is with family and friends, stays active, and watches sports and movies.",
    ],
    focus: ["Preventive care", "Patient education", "Chronic disease management"],
  },
  {
    slug: "hannah-garcia",
    name: "Hannah Garcia",
    credential: "FNP-C",
    role: "Family Nurse Practitioner",
    photo: "/team/hannah-garcia.jpg",
    photoNeedsReshoot: true,
    bio: [
      "Hannah Garcia is a family nurse practitioner who welcomes patients of all ages and communities, and offers virtual consultations.",
      "She attended Roseman University of Health Sciences for her master’s degree in family health nursing, and treats and manages a wide range of acute and chronic health concerns.",
      "She listens attentively, works to understand a patient’s symptoms, and takes a detailed medical history before recommending a treatment plan.",
    ],
    focus: ["Acute and chronic care", "Virtual consultations", "All ages"],
  },
];

export const founder = {
  photo: "/team/mitchel-phillips.png",
  name: "Mitchel E. Phillips",
  credential: "DO",
  role: "Founder",
  years: "1976 graduate, College of Osteopathic Medicine and Surgery, Des Moines",
  bio: "Dr. Phillips completed his medical training while serving in the United States Air Force and practiced for over 30 years in Las Vegas. He was board certified in Family Practice, Pain Management, and Anti-Aging Medicine. His special interests were aging management, bio-identical hormone therapy, risk factor reduction, lifestyle management, and rejuvenation.",
};

export type ServiceGroup = {
  slug: string;
  title: string;
  blurb: string;
  services: { name: string; body: string }[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    slug: "primary-care",
    title: "Primary care for the whole family",
    blurb:
      "The visits a family needs year after year, for children, adults and seniors, in one place.",
    services: [
      {
        name: "Wellness exams",
        body: "A yearly physical matters regardless of age, health, or history. We review your family and medical history, listen to how you see your own health, identify potential concerns, and build a plan with you. Regular exams remain the best way to catch a serious illness before it becomes one.",
      },
      {
        name: "Pediatrics",
        body: "A child’s needs are not a smaller version of an adult’s. Our providers take extra time with pediatric patients and educate both the parent and the child so everyone is comfortable with the care.",
      },
      {
        name: "Sports physicals",
        body: "The Nevada Interscholastic Athletics Association requires a sports physical before a student athlete starts a new sport or school year. The exam determines whether it is safe for your child to play, and is worth having even if they do not play school sports.",
      },
      {
        name: "Gynecological exams",
        body: "Proper gynecological care prevents cancers and diseases by allowing early detection, and it matters regardless of age, marital status, or level of sexual activity. We know it is important to choose a provider you are comfortable asking personal questions of.",
      },
      {
        name: "Allergy testing and immunotherapy",
        body: "We narrow down what you react to with skin or blood testing, then treat the allergy rather than only the symptoms. We are strong believers in sublingual immunotherapy for severe allergy patients, and offer allergy shots for intermittent sufferers.",
      },
      {
        name: "Smoking cessation",
        body: "Counseling that helps smokers recognize and cope with the problems that come up while quitting, and provides support in staying smoke-free.",
      },
    ],
  },
  {
    slug: "on-site-diagnostics",
    title: "Diagnostics under one roof",
    blurb:
      "Most clinics send you elsewhere for imaging. We are one of the few in the valley that does not.",
    services: [
      {
        name: "On-site radiology",
        body: "We are one of the few clinics in the Las Vegas valley with an in-house x-ray machine, with a technician on site and providers available to read and interpret the images. Most clinics send patients to another facility at extra cost and inconvenience.",
      },
      {
        name: "On-site ultrasound",
        body: "A full spectrum of ultrasound including evaluations of the heart, vascular system, renal system, abdomen, pelvis, thyroid, and soft tissue masses.",
      },
      {
        name: "Echocardiography",
        body: "A cardiac echo is a sonogram of the heart. It uses ultrasound to create images that let providers assess heart health.",
      },
      {
        name: "Peripheral vascular testing",
        body: "Peripheral vascular disease affects the areas outside your heart. Testing includes ultrasound and treadmill evaluation.",
      },
      {
        name: "Bone density scans",
        body: "On-site bone density testing to assess bone strength and the probability of fracture in patients at risk of osteoporosis.",
      },
      {
        name: "Body fat analysis",
        body: "Body composition measured by DEXA scanner, widely seen as the gold standard for body fat analysis.",
      },
    ],
  },
  {
    slug: "wellness-longevity",
    title: "Wellness and longevity",
    blurb:
      "The part of the practice built around healthspan, not just lifespan.",
    services: [
      {
        name: "Bio-identical hormone therapy",
        body: "Bio-identical hormone replacement therapy uses hormones that are molecularly identical to the ones your body produces. We offer customized compounded prescriptions so the treatment plan fits you.",
      },
      {
        name: "Weight loss programs",
        body: "A comprehensive, individualized program. Every body type is different, so people need to eat and exercise differently. Our staff works with you on the changes and stays with you as you work toward your goals.",
      },
      {
        name: "IV nutritional therapy",
        body: "Intravenous nutrient treatments used against asthma attacks, migraines, fatigue, fibromyalgia, acute muscle spasms, upper respiratory infections, chronic sinusitis, seasonal allergic rhinitis, and cardiovascular disease. The IV form delivers higher concentrations than oral or injected forms.",
      },
      {
        name: "Chelation",
        body: "Toxic metals including lead, mercury, cadmium, iron, and aluminum reach us through food, medicines, fertilizers, and contaminated air and water. In small amounts some are necessary; in larger amounts they build up and cause health problems.",
      },
      {
        name: "Compounded prescriptions",
        body: "Prescription compounding lets a trained pharmacist work with your physician to prepare a medication built for your specific needs.",
      },
      {
        name: "Practitioner-grade supplements",
        body: "A full line of proprietary nutritional supplements formulated for our patients, so there is no guessing about what to take, how much, or how often.",
      },
    ],
  },
];

export const reviews = [
  {
    name: "Stephanie V.",
    body: "It was the most thorough doctor visit I’ve ever had. Everything was addressed during the same visit and I never felt rushed at all.",
  },
  {
    name: "Brian M.",
    body: "Especially liked the time taken to know the root of the causes, and discussing the best approach for getting better in lieu of throwing a prescription at me.",
  },
  {
    name: "Brigette V.",
    body: "They listen to your problems without judgement and they don’t just throw medication at the symptoms, instead they search for the cause. I wouldn’t go anywhere else for care in Vegas.",
  },
  {
    name: "Diana K.",
    body: "Very good care from Julie. Never had to wait very long to see her and she has always spent whatever time necessary to answer my questions.",
  },
  {
    name: "Jan W.",
    body: "Our family are treated like VIPs at the Phillips Clinic. They are kind and true healers.",
  },
  {
    name: "Thomas P.",
    body: "Great doctors and customer service. I have been a patient for 17 years.",
  },
  {
    name: "James P.",
    body: "My wife and I used this clinic for four years before we moved from the area. We were consistently well served, very thorough and good with follow ups.",
  },
  {
    name: "Whitney S.",
    body: "So happy I found Phillips Clinic. Everyone is friendly and the medical staff are thorough.",
  },
];

export const patientForms = [
  {
    n: 1,
    title: "Patient History & Systems Review",
    file: "/forms/P_C__Patient_History___Systems_Review.pdf",
    who: "New and established patients",
  },
  {
    n: 2,
    title: "Patient Registration",
    file: "/forms/Phillips_Clinic_Patient_Registration_Form_New-2.pdf",
    who: "New patients, or any change of contact or insurance",
  },
  {
    n: 3,
    title: "Policies & Procedures",
    file: "/forms/Phillips_Clinic_Policies_2015.pdf",
    who: "New patients",
  },
  {
    n: 4,
    title: "HIPAA Notice of Privacy Practices",
    file: "/forms/P_C__HIPAA_Notice_of_Privacy_Practices_2015.pdf",
    who: "New patients",
  },
  {
    n: 5,
    title: "Pain Contract",
    file: "/forms/PAIN_CONTRACT-2014.pdf",
    who: "Patients with chronic pain who may need pain medication",
  },
  {
    n: 6,
    title: "Records Release",
    file: "/forms/Records_Release_Form.pdf",
    who: "Transferring records from a previous provider",
  },
];

/**
 * Prescription medication kits the clinic dispenses with a telehealth visit,
 * in partnership with Partell Pharmacy. Contents and prices transcribed from
 * the clinic's own patient flyer. A dispensing service alongside the practice,
 * not the practice's main offering.
 */
export const medicationKits = [
  {
    slug: "antibiotic-emergency-kit",
    name: "Antibiotic Emergency Kit",
    price: "$249",
    image: "/kits/antibiotic-kit.png",
    blurb:
      "Broad-spectrum coverage to keep on hand for when an infection starts somewhere far from care.",
    contents: [
      "Amoxicillin-Clavulanate 875mg/125mg tablets",
      "Azithromycin 250mg tablets",
      "Doxycycline Hyclate 100mg capsules",
      "Metronidazole 500mg tablets",
      "Ivermectin 18mg compounded capsules",
      "Fluconazole 150mg tablets",
      "Ondansetron 4mg tablets",
    ],
  },
  {
    slug: "covid-emergency-kit",
    name: "COVID Emergency Kit",
    price: "$299",
    image: "/kits/covid-kit.png",
    blurb:
      "A respiratory kit built around early treatment at home, including a handheld nebulizer.",
    contents: [
      "Hydroxychloroquine (HCQ) 200mg tablets",
      "Z-pak (generic) or Doxycycline 100mg capsules",
      "Budesonide 0.5mg or Albuterol 1.25mg vials with Medrol Dosepak (generic)",
      "Handheld nebulizer",
      "Ivermectin 18, 36 or 54mg compounded capsules",
      "Orthomune (OTC)",
    ],
  },
];

export const kitsIntro =
  "Phillips Clinic Family Practice offers Antibiotic and COVID prescription medication kits with a telehealth visit, for all patients. Complete the health questionnaire, and on review and approval you should receive confirmation and the medications within 3 to 5 business days.";

export const kitsPartner =
  "We partner with Partell Pharmacy to provide preparatory products that are safe and effective. These can be kept on hand so you are prepared when unexpected emergencies and illnesses arise.";

/**
 * The Foundations tier of the clinic's own supplement store, transcribed from
 * phillips-clinic.pharmabuilt.com on 2026-09-03.
 *
 * The store photographs every protocol against the same staged scene, so one
 * shot stands in for the line rather than repeating it per card: see
 * /public/protocol-packaging.jpg.
 *
 * Deliberately no prices: the store is the source of truth for those, and a
 * number copied into this file goes stale silently. Every card links out.
 *
 * The store also sells Essentials+ and Ultimate tiers of the same ten
 * protocols; only Foundations is listed here to keep the page readable.
 */
/**
 * Deep link to a protocol's page in the store. Route is `shop/products/{slug}`
 * (the store's own `guest.productDetails` route), verified against all ten
 * slugs on 2026-09-03.
 */
export const supplementProductHref = (slug: string) =>
  `${clinic.supplementsHref.replace(/\/$/, "")}/shop/products/${slug}`;

export const supplementProtocols = [
  {
    slug: "foundations-antiaging-health-protocol",
    name: "AntiAging",
    blurb:
      "Cellular support for energy and vitality, with antioxidants, CoQ10, omega-3s and NAD+ precursors for the pathways that decline with age.",
  },
  {
    slug: "foundations-energy-health-protocol",
    name: "Energy",
    blurb:
      "Smooth, sustained energy rather than a spike. Green tea extract, CoQ10 and omega-3s support mitochondrial function and focus.",
  },
  {
    slug: "foundations-brain-health-protocol",
    name: "Brain",
    blurb:
      "Focus, memory and mental clarity, built on researched adaptogens including rhodiola, ashwagandha and astragalus root.",
  },
  {
    slug: "foundations-immunity-health-protocol",
    name: "Immunity",
    blurb:
      "Everyday defenses from several angles: vitamins C, E and B6 with zinc, plus L-glutamine for the gut lining and elderberry and echinacea.",
  },
  {
    slug: "foundations-gut-health-protocol",
    name: "Gut Health",
    blurb:
      "A full-spectrum digestive system. Targeted enzymes break down proteins, fats and dairy sugars, with probiotics for the microbiome.",
  },
  {
    slug: "foundations-blood-sugar-protocol",
    name: "Blood Sugar",
    blurb:
      "For glucose swings and energy dips. Berberine, cinnamon extract and chromium support healthy glucose metabolism and metabolic resilience.",
  },
  {
    slug: "foundations-womens-health-protocol",
    name: "Women's Health",
    blurb:
      "Hormonal rhythm, monthly comfort and overall vitality, led by high-potency evening primrose oil for a healthy inflammatory balance.",
  },
  {
    slug: "foundations-mens-health-protocol",
    name: "Men's Health",
    blurb:
      "A daily stack for energy and balance, starting with a broad-spectrum enzyme complex for smoother digestion and less post-meal heaviness.",
  },
  {
    slug: "foundations-mood-health-protocol",
    name: "Mood",
    blurb:
      "Calm and clarity without feeling dulled. GABA, L-theanine and taurine support a smooth stress response and a balanced mood.",
  },
  {
    slug: "foundations-glp-1-health-protocol",
    name: "GLP-1 Support",
    blurb:
      "Complements the body's own appetite and energy regulation with berberine complex, chromium picolinate and cinnamon extract.",
  },
] as const;
