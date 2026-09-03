/**
 * The Phillips Health Care Newsletter, transcribed from the blog on
 * phillipscliniclv.com (the site this replaces), fetched 2026-09-03.
 *
 * Content is the clinic's own, largely summarising CDC and HHS public-health
 * guidance. It is transcribed rather than rewritten; the only edits are to
 * repair words the old page broke mid-line and two obvious typos in headings.
 * Their blog paginates ("Older Entries"), so posts before April 2026 are not
 * here yet.
 */
export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  /** ISO date, from their "by Phillips Clinic on MM/DD/YY" byline. */
  date: string;
  /** One-line summary for the index and metadata. */
  dek: string;
  body: Block[];
  /** Where the clinic drew the guidance from, when the post names it. */
  source?: { label: string; href: string };
};

export const posts: Post[] = [
  {
    slug: "september-is-cholesterol-education-month",
    title: "September is Cholesterol Education Month",
    date: "2026-08-31",
    dek: "National Cholesterol Education Month promotes heart-healthy habits, blood pressure monitoring, and cardiovascular risk reduction.",
    body: [
      {
        type: "p",
        text: "National Cholesterol Education Month is observed every September to raise awareness about heart health, the risks of high cholesterol, and methods for lipid management. Spearheaded by public health groups like the Centers for Disease Control and Prevention, the observance focuses on routine screenings and lifestyle changes to prevent heart disease and stroke.",
      },
      { type: "h", text: "What it is" },
      {
        type: "p",
        text: "Blood cholesterol is a waxy, fat-like substance made by your liver. Blood cholesterol is essential for good health. Your body needs it to perform important jobs, such as making hormones and digesting fatty foods.",
      },
      {
        type: "p",
        text: "Your body makes all the blood cholesterol it needs. Experts recommend that people eat as little dietary cholesterol as possible.",
      },
      {
        type: "p",
        text: "Dietary cholesterol is found in animal foods, including meat, seafood, poultry, eggs, and dairy products.",
      },
      { type: "h", text: "What do blood cholesterol numbers mean?" },
      {
        type: "p",
        text: "Cholesterol is measured in milligrams per deciliter (mg/dL). When you go to a health care professional to get your cholesterol checked, this test will usually check the levels of cholesterol and triglycerides in your body. (A cholesterol check is also called a lipid panel or lipid profile.)",
      },
      {
        type: "ul",
        items: [
          "Low-density lipoprotein (LDL), or “bad” cholesterol. Having high levels of LDL cholesterol can lead to plaque buildup in your arteries and result in heart disease or stroke.",
          "High-density lipoprotein (HDL), or “good” cholesterol. HDL is known as “good” cholesterol because high levels of it can lower your risk of heart disease and stroke.",
          "Triglycerides, a type of fat in your blood that your body uses for energy. The combination of high levels of triglycerides with either low HDL cholesterol or high LDL cholesterol levels can increase your risk for heart attack and stroke.",
          "Total cholesterol, the total amount of cholesterol in your blood based on your HDL, LDL, and triglycerides numbers.",
        ],
      },
      { type: "h", text: "Optimal cholesterol levels" },
      {
        type: "ul",
        items: [
          "Total cholesterol: about 150 mg/dL",
          "LDL (“bad”) cholesterol: about 100 mg/dL",
          "HDL (“good”) cholesterol: at least 40 mg/dL in men and 50 mg/dL in women",
          "Triglycerides: less than 150 mg/dL",
        ],
      },
      { type: "h", text: "Signs and symptoms" },
      {
        type: "p",
        text: "Certain health conditions, such as type 2 diabetes and obesity, can raise your risk for high cholesterol. Lifestyle factors, such as eating a diet high in saturated and trans fats and not getting enough activity, can also raise your risk for high cholesterol. Some people who have a family history of high cholesterol can also be at risk. All these factors are called “risk factors.”",
      },
      {
        type: "p",
        text: "You cannot control some of these risk factors, such as your age or your family history. But you can take steps to lower your risk for high cholesterol by changing things you can control.",
      },
      { type: "h", text: "What problems does high cholesterol cause?" },
      {
        type: "p",
        text: "Having high blood cholesterol can lead to a buildup called “plaque” on the walls of your arteries (a type of blood vessel).",
      },
      {
        type: "p",
        text: "As plaque builds up over time, the insides of your arteries narrow. This narrowing blocks blood flow to and from your heart and other organs. When blood flow to the heart is blocked, it can cause chest pain (also called angina) or a heart attack (also called myocardial infarction).",
      },
      {
        type: "p",
        text: "High cholesterol also increases your risk for heart disease and stroke, two leading causes of death in the United States.",
      },
      { type: "h", text: "Prevention" },
      {
        type: "p",
        text: "Strong evidence shows that eating patterns that include less dietary cholesterol are associated with reduced risk of cardiovascular disease. Your overall risk for high cholesterol depends on many factors.",
      },
      { type: "h", text: "How do I know if I have high cholesterol?" },
      {
        type: "p",
        text: "The only way to know whether you have high cholesterol is to get your cholesterol checked by your health care team. Talk with your health care team about how often you should have your cholesterol screened.",
      },
    ],
    source: {
      label: "CDC: cholesterol",
      href: "https://www.cdc.gov/cholesterol/index.html",
    },
  },
  {
    slug: "august-is-national-immunization-awareness-month",
    title: "August is National Immunization Awareness Month",
    date: "2026-07-30",
    dek: "A month-long campaign to review vaccine records, catch up on missed well-child visits, and check protection across the lifespan.",
    body: [
      {
        type: "p",
        text: "National Immunization Awareness Month (NIAM) is an annual observance held every August to highlight the importance of routine vaccinations for people of all ages. The month-long campaign is a time to review vaccine records, catch up on missed well-child visits, and ensure protection against serious diseases across the lifespan.",
      },
      { type: "h", text: "The primary focus areas" },
      {
        type: "ul",
        items: [
          "Infants and children: ensuring children are up to date on routine immunizations like DTaP, MMR, and polio before heading back to school.",
          "Preteens and teens: highlighting vaccines that protect against diseases like HPV and meningitis.",
          "Adults: reminding adults that they need booster shots (such as Tdap) and season-specific immunizations.",
          "Seniors: promoting vaccines that protect against shingles, RSV, and pneumococcal disease.",
        ],
      },
      {
        type: "p",
        text: "The Centers for Disease Control and Prevention (CDC) provides updated recommended immunization schedules to help you and your healthcare provider determine which vaccines are appropriate based on your age and health conditions.",
      },
      {
        type: "p",
        text: "Current federal guidelines recommend universal vaccination for 11 core childhood diseases, though major professional medical organizations like the American Academy of Pediatrics advocate for a broader schedule.",
      },
      { type: "h", text: "Universally recommended vaccines" },
      {
        type: "ul",
        items: [
          "Diphtheria, tetanus, and whooping cough (DTaP/Tdap)",
          "Measles, mumps, and rubella (MMR)",
          "Polio",
          "Varicella (chickenpox)",
          "Haemophilus influenzae type b (Hib)",
          "Pneumococcal disease",
          "Human papillomavirus (HPV) — reduced to 1 dose in updated federal guidance.",
        ],
      },
      { type: "h", text: "Targeted and shared decision-making vaccines" },
      {
        type: "p",
        text: "High-risk groups only: RSV, dengue, and specific guidance for hepatitis A, hepatitis B, and meningococcal vaccines.",
      },
      {
        type: "p",
        text: "Shared clinical decision-making: flu, COVID-19, and rotavirus vaccines depend on individual discussions between parents and healthcare providers under current federal policy, though traditional pediatric bodies continue recommending broader coverage. Local state guidelines may also align closer to traditional pediatric standards.",
      },
      { type: "h", text: "Annual and routine adult vaccines" },
      {
        type: "ul",
        items: [
          "Influenza (flu): get 1 dose every year before the flu season starts to lower your risk of severe illness.",
          "COVID-19: get at least 1 updated dose, with older adults (65 and older) recommended to receive at least 2 doses of the current formula.",
          "Tdap or Td: get a tetanus, diphtheria, and pertussis booster every 10 years. Pregnant individuals need one Tdap dose during each pregnancy.",
        ],
      },
      { type: "h", text: "Age-specific and risk-based vaccines" },
      {
        type: "ul",
        items: [
          "Shingles (Shingrix): recommended as a 2-dose series for healthy adults starting at age 50.",
          "Pneumococcal: recommended for adults aged 50 and older (updated from age 65) to prevent serious bacterial lung infections.",
          "RSV (respiratory syncytial virus): recommended for adults aged 75 and older, and for those aged 50 to 74 with higher risk factors.",
          "Hepatitis B: recommended for all adults through age 59 who have not been vaccinated yet, and for older adults with specific risk factors.",
          "HPV (human papillomavirus): recommended through age 26, with shared clinical decision-making for some adults older than that.",
        ],
      },
    ],
    source: {
      label: "CDC: immunization schedules",
      href: "https://www.cdc.gov/vaccines/schedules/index.html",
    },
  },
  {
    slug: "celebrating-womens-health",
    title: "Celebrating Women's Health",
    date: "2026-06-30",
    dek: "Care is moving toward a more proactive, connected and science-driven approach across four focus areas.",
    body: [
      {
        type: "p",
        text: "An important shift is taking place in how women’s health is understood, supported, and advanced. Increasingly, care is moving toward a more proactive, connected, and science-driven approach — one that prioritizes early action, incorporates new discoveries, and ensures those advances translate into meaningful improvements in everyday health. This evolving model recognizes that better outcomes are achieved not through isolated moments of care, but through continuous, informed engagement across the lifespan.",
      },
      { type: "h", text: "Prevention and early detection across the lifespan" },
      {
        type: "p",
        text: "Health outcomes are often shaped long before symptoms appear. That is why prevention and early detection play such a critical role in supporting women at every stage of life. Routine screenings, timely risk assessments, and early interventions make it possible to identify potential concerns sooner, when they are more manageable and, in many cases, preventable.",
      },
      {
        type: "p",
        text: "At the same time, prevention extends well beyond clinical care. Daily habits, particularly nutrition and physical activity, are among the most powerful tools for reducing the risk of chronic conditions such as cardiovascular disease, diabetes, and osteoporosis. A balanced diet, regular movement, adequate sleep, and stress management all contribute to maintaining healthy weight, supporting metabolic function, and protecting long-term health.",
      },
      {
        type: "p",
        text: "Because risk factors and health needs evolve over time, prevention strategies must be adaptable, reflecting differences in age, lifestyle, family history, and environment. While individual needs may vary, the following offers a general guide for prioritizing prevention at every stage:",
      },
      {
        type: "ul",
        items: [
          "Adolescence and young adulthood: establish a strong foundation of healthy habits, including balanced nutrition, regular physical activity, and mental health awareness. Begin age-appropriate screenings and build comfort with accessing healthcare services.",
          "Reproductive years: maintain consistent preventive care, including routine screenings and reproductive health visits, while prioritizing nutrition, physical activity, and stress management.",
          "Midlife: monitor key risk factors such as blood pressure, cholesterol, and blood sugar. This is also a critical time to reinforce healthy eating patterns and regular exercise to reduce the risk of chronic disease.",
          "Older adulthood: focus on maintaining mobility, strength, and balance through regular physical activity, along with nutrition that supports bone health and cognitive function. Continue recommended screenings and prioritize independence and quality of life.",
        ],
      },
      { type: "h", text: "Sex-specific biology and hormonal foundations" },
      {
        type: "p",
        text: "Advances in research are deepening our understanding of how biological and hormonal factors shape women’s health across the lifespan. Hormones such as estrogen and progesterone play a central role in regulating physical, emotional, and metabolic processes, and their influence shifts significantly at different life stages. During puberty, hormonal changes drive growth, reproductive development, and brain maturation. In the reproductive years, hormonal patterns affect menstrual health, fertility, pregnancy, and mood. As women transition through menopause, declining hormone levels can impact cardiovascular health, bone density, sleep, and cognitive function.",
      },
      {
        type: "p",
        text: "Sex-specific differences also affect how diseases develop, present, and respond to treatment. Cardiovascular disease, the leading cause of death among women, often presents with symptoms such as fatigue, nausea, or shortness of breath rather than the more widely recognized chest pain. Autoimmune diseases are more common in women, while conditions like osteoporosis disproportionately affect women later in life. Women may also respond differently to medications due to variations in metabolism, body composition, and hormonal influences.",
      },
      {
        type: "p",
        text: "Health is also shaped by the environments in which women live, work, and age. Exposure to environmental factors, such as air and water quality, chemicals in consumer products, and workplace conditions, can influence hormone function, reproductive health, and long-term disease risk.",
      },
      { type: "h", text: "Chronic disease, midlife health, aging and longevity" },
      {
        type: "p",
        text: "Midlife represents a pivotal period for women’s health, one in which the risk for chronic conditions becomes more pronounced, but also one of the most important opportunities for prevention and early intervention. Conditions such as cardiovascular disease, diabetes, and autoimmune disorders often emerge or accelerate during these years.",
      },
      {
        type: "p",
        text: "Hormonal changes associated with menopause can affect cholesterol levels, blood pressure, fat distribution, and insulin sensitivity, increasing the risk for heart disease and metabolic disorders. Pregnancy-related conditions such as gestational diabetes or preeclampsia can have long-term implications for cardiovascular health later in life. Social and structural factors, including caregiving responsibilities, chronic stress, and reduced time for self-care, can further contribute to health risks and delay care.",
      },
      {
        type: "p",
        text: "Despite these challenges, midlife offers a critical window for intervention. Regular monitoring of blood pressure, cholesterol, and blood glucose can help detect early changes before they progress. As women move beyond midlife, the focus expands to maintaining strength, cognitive function, mobility, and independence. The goal is not simply to extend lifespan, but to support a longer health span — years lived in good health, with the ability to remain active and engaged.",
      },
      { type: "h", text: "Innovation, translation and the future" },
      {
        type: "p",
        text: "Breakthroughs in research and technology are rapidly expanding what is possible in women’s health. However, the true measure of progress lies in how effectively these advances reach individuals and improve day-to-day care. Innovations such as data-driven care, digital health tools, and more personalized treatment approaches are beginning to reshape the healthcare experience.",
      },
      {
        type: "p",
        text: "Equally important is the role of education and empowerment. When women have access to clear, actionable information, they are better able to participate in decisions about their care and take meaningful steps to support their health.",
      },
    ],
    source: {
      label: "womenshealth.gov: focus areas",
      href: "https://womenshealth.gov/nwhw/focus-areas",
    },
  },
  {
    slug: "june-is-mens-health-awareness-month",
    title: "June is Men's Health Awareness Month",
    date: "2026-05-29",
    dek: "What better time for a men's physical? How often to go, and the screenings worth asking about.",
    body: [
      {
        type: "p",
        text: "According to Harvard Health, “Men are less likely than women to get routine physical exams and screenings. A survey by the American Academy of Family Physicians found that 55% of men surveyed had not seen their doctor for a physical exam in the previous year, even though 40% of them had at least one chronic condition.",
      },
      {
        type: "p",
        text: "Nearly one-fifth of men ages 55 and over said they had never undergone screening for colon cancer, and almost 30% said they ‘wait as long as possible’ to seek medical attention when they are feeling sick or in pain.”",
      },
      {
        type: "p",
        text: "For all adults, scheduling regular check-ups and physicals can help catch health problems when they are manageable, to address and treat them at their earliest stages.",
      },
      { type: "h", text: "How often should you get a physical?" },
      {
        type: "ul",
        items: [
          "In your 20s: every five years.",
          "In your 30s: every three years.",
          "In your 40s: every two years.",
          "50 and above: every year.",
        ],
      },
      { type: "h", text: "Blood pressure" },
      {
        type: "p",
        text: "Every man should have their blood pressure checked regularly, and patients with other cardiovascular risk factors should check their blood pressure more frequently. This can be performed at your doctor’s office. High blood pressure is the biggest risk for heart disease and a significant risk for other serious health conditions.",
      },
      { type: "h", text: "Blood cholesterol" },
      {
        type: "p",
        text: "All men 35 or older should get their blood cholesterol levels checked regularly. Men who use tobacco; are overweight or obese; have a relative who had a heart attack before the age of 50; or have diabetes, high blood pressure, or a history of heart disease should get their cholesterol checked much earlier, at the age of 20. There are several measures of cholesterol, and all are important in determining heart disease risk.",
      },
      { type: "h", text: "Colon cancer" },
      {
        type: "p",
        text: "All men should get screened for colorectal (colon or rectal) cancer by age 50. People with a family history of colorectal cancer should get a colonoscopy even sooner.",
      },
      { type: "h", text: "Diabetes" },
      {
        type: "p",
        text: "Men who have high blood pressure or take medication to control their high blood pressure should get screened for diabetes (high blood sugar). Anyone experiencing symptoms of persistently severe thirst, frequent urination, unexpected weight loss, increased hunger, and tingling in the hands or feet also should talk to their doctor about getting tested. The preferred screening for diabetes is a blood test that measures your average blood sugar over the last three months.",
      },
      { type: "h", text: "Weight" },
      {
        type: "p",
        text: "Using a BMI calculator to determine your body mass index (BMI) is usually a reliable, but not conclusive, indicator of whether you’re at a healthy weight. A BMI between 18.5 and 24.9 is considered healthy, a BMI above 25 is overweight, and a BMI greater than 30 is obese.",
      },
      { type: "h", text: "Prostate exam" },
      {
        type: "p",
        text: "Because PSA screening recommendations vary widely among health care professionals, talk to your provider about the benefits and risks of screening to determine what is best for you.",
      },
      { type: "h", text: "Other tests" },
      {
        type: "p",
        text: "EKG, STD, HIV and hepatitis, blood tests and urinalysis. Some additional testing may be recommended for men 50 or over, or with a family history of chronic disease.",
      },
    ],
  },
  {
    slug: "may-is-national-allergies-and-asthma-awareness-month",
    title: "May is National Allergies & Asthma Awareness Month",
    date: "2026-04-30",
    dek: "Nearly 20% of Americans have allergies. The common triggers, and the skin test and sublingual serum we do in the office.",
    body: [
      { type: "h", text: "What is an allergy?" },
      {
        type: "p",
        text: "Nearly 20% of Americans have allergies. Allergies are an abnormal response of your immune system. Your body’s defenses react to a usually harmless substance, such as pollen, animal dander, or food. Almost anything can trigger an allergic reaction, which can range from mild and annoying to sudden and life-threatening.",
      },
      { type: "h", text: "Pollen" },
      {
        type: "p",
        text: "Pollen from trees, grasses, and weeds can trigger hay fever or seasonal allergies. You might have symptoms like sneezing, runny nose, nasal congestion, and itchy, watery eyes.",
      },
      { type: "h", text: "Animal dander" },
      {
        type: "p",
        text: "Proteins secreted by oil glands in an animal’s skin and present in their saliva can cause allergic reactions for some people. The allergy can take two or more years to develop and symptoms may not go away until months after being away from the animal. If your pet is causing allergies, make your bedroom a pet-free zone, avoid carpets, and wash them regularly. A HEPA filter and frequent vacuuming may also help.",
      },
      { type: "h", text: "Dust mites" },
      {
        type: "p",
        text: "Dust mites are microscopic organisms that live in house dust. Help prevent dust mite allergies by covering mattresses, pillows, and box springs, using hypoallergenic pillows, washing sheets weekly in hot water, and keeping the house free of dust-collecting items.",
      },
      { type: "h", text: "Bug bites and insect stings" },
      {
        type: "p",
        text: "Symptoms include extensive swelling and redness from the sting or bite that may last a week or more, nausea, fatigue, and low-grade fever. In rare cases when insect bites cause a severe reaction (anaphylaxis), symptoms may include difficulty breathing, swelling around the face, throat, or mouth, racing pulse, an itchy rash or hives, dizziness, or a sharp drop in blood pressure.",
      },
      { type: "h", text: "Molds" },
      {
        type: "p",
        text: "Molds make allergens, irritants, and in some cases potentially toxic substances. Inhaling or touching mold or mold spores may cause allergic reactions in some people. There are many types of mold and they all need moisture to grow. They can be found in damp areas such as basements or bathrooms, as well as in grass or mulch. Avoid activities that trigger symptoms, such as raking leaves, and ventilate moist areas in your home.",
      },
      { type: "h", text: "Food" },
      {
        type: "p",
        text: "Milk, shellfish, eggs, and nuts are among the most common foods that cause allergies. An allergic reaction usually happens within minutes of eating the offending food. Symptoms, which can include breathing problems, hives, vomiting, diarrhea, and swelling around the mouth, can be severe. Avoid all foods that you are allergic to.",
      },
      { type: "h", text: "Relieving your allergy symptoms" },
      {
        type: "p",
        text: "Your Phillips Clinic Family Practice provider can perform a simple allergy skin test. Symptoms which usually prompt an allergy test include:",
      },
      {
        type: "ul",
        items: [
          "Respiratory: itchy eyes, nose or throat; nasal congestion, runny nose, watery eyes, chest congestion, cough or wheezing.",
          "Skin: itchiness or eczema.",
          "Abdominal: vomiting, or cramping and diarrhea consistently after eating certain foods.",
          "Severe reactions to stinging insect stings.",
        ],
      },
      {
        type: "p",
        text: "Skin tests can be performed in the office to determine what is causing your symptoms. A very small amount of certain allergens is put into your skin by making a small indentation or “prick” on the surface of your skin. Your skin will react to the substances that trigger your allergies.",
      },
      {
        type: "p",
        text: "A personalized serum is then made up for you. You take this serum home and use a few drops under your tongue every day. You return every 12 weeks for a refill and follow-up. Within months, you should notice a significant reduction in your symptoms and the need for allergy medications.",
      },
    ],
  },
];

/** Newest first, which is the order they publish in. */
export const postsByDate = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatPostDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
