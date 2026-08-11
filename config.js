/* ============================================================
   CONFIG — edit ONLY this file per client
   REBUILT FROM THE CLIENT'S OWN SITE: https://mabula247.co.za
   scraped 2026-08-11 by rebuild_from_existing.py
   placeholder (Pexels stock) image slots: work-5.jpg
   ============================================================ */

const CONFIG = {

  // ─── BUSINESS INFO ───────────────────────────────────────
  business: {
    name:      "24-7 Mabula Electricians and Plumbers",
    phone:     "+27 79 058 5361",
    whatsapp:  "+27 79 058 5361",
    address:   "44 Tenth St, Newlands, Randburg, 2095, South Africa",
    hours:     "Call us for hours",
    region:    "Gauteng",
    priceRange:"$$",
    suburbs: [
      "Newlands",
      "Randburg"
    ]
  },

  // ─── PAGE META / SEO ─────────────────────────────────────
  meta: {
    title:       "24-7 Mabula Electricians and Plumbers — Electrician in Randburg",
    description: "24-7 Mabula Electricians and Plumbers: electrician in Randburg. Rated 4.6 from 59 Google reviews.",
    url:         ""  // Live domain — they already own mabula247.co.za
  },

  // ─── BRANDING ────────────────────────────────────────────
  branding: {
    palette:  "volt",   // ember | security | forest | volt | tide
    ogImage:  "images/og.jpg"
  },

  // ─── CONTENT ─────────────────────────────────────────────
  content: {
    eyebrow:    "Electrician · Randburg & surrounds",
    heroTitle:  "Electrical faults, installations — <em>fixed properly.</em>",
    heroLead:   "We provide 24/7 electrical and plumbing solutions across Randburg and surrounding areas. No job too big or small.",

    googleRating: "4.6",
    reviewsCount: "59",
    featuredQuote: "24/7 Mabula Electricians and Plumbers",
    featuredQuoteAuthor: "— 24-7 Mabula Electricians and Plumbers",

    trustSignals: ["Electrical & Plumbing…", "Electrical", "No power", "Power trips"],

    // ─── SERVICES (scraped from their own site) ────────────
    servicesTitle: "Electrical work done safely and correctly.",
    servicesLead:  "From a tripping breaker to a full rewire — we diagnose, repair and certify.",
    services: [
      {
        icon:  "bolt",
        title: "Electrical & Plumbing Services – Randburg",
        desc:  "We provide 24/7 electrical and plumbing solutions across Randburg and surrounding areas. No job too big or small."
      },
      {
        icon:  "wrench",
        title: "Electrical",
        desc:  "Ask us about electrical — call or WhatsApp for a quote."
      },
      {
        icon:  "circuit",
        title: "No power",
        desc:  "Ask us about no power — call or WhatsApp for a quote."
      },
      {
        icon:  "gauge",
        title: "Power trips",
        desc:  "Ask us about power trips — call or WhatsApp for a quote."
      },
      {
        icon:  "shield",
        title: "Cable installation",
        desc:  "Ask us about cable installation — call or WhatsApp for a quote."
      },
      {
        icon:  "hardhat",
        title: "Power restoration",
        desc:  "Ask us about power restoration — call or WhatsApp for a quote."
      },
    ],

    // ─── WORK GALLERY ──────────────────────────────────────
    galleryTitle: "The work, up close.",
    galleryLead:  "A look at the kind of work we handle every week.",
    gallery: [
      {
        image:   "images/work-1.jpg",
        art:     "lockCylinderPick",
        fig:     "01 — Their work",
        title:   "From their own site",
        caption: "House Rewiring – Neat Conduit Installation"
      },
      {
        image:   "images/work-2.jpg",
        art:     "lockCylinderPick",
        fig:     "02 — Their work",
        title:   "From their own site",
        caption: "Professional Leak Detection"
      },
      {
        image:   "images/work-3.jpg",
        art:     "lockCylinderPick",
        fig:     "03 — Their work",
        title:   "From their own site",
        caption: "Solar Geyser Installation on Roof"
      },
      {
        image:   "images/work-4.jpg",
        art:     "lockCylinderPick",
        fig:     "04 — Their work",
        title:   "From their own site",
        caption: "24/7 Mabula Team – Electrician and Plumber"
      },
      {
        image:   "images/work-5.jpg",
        art:     "lockCylinderPick",
        fig:     "05 — Geyser wiring",
        title:   "Correctly wired",
        caption: "Geyser connections installed to standard with the correct breaker size, isolator and earth bonding."
      },
    ],

    // ─── PHOTO BAND ────────────────────────────────────────
    band: {
      image: "images/band.jpg",
      alt:   "Burst Geyser Replacement",
      text:  "24/7 Mabula Electricians and Plumbers"
    },

    // ─── AREAS BLURB ───────────────────────────────────────
    areasTitle: "Based in Randburg. Serving the wider area.",
    areasLead:  "We cover Newlands, Randburg and surrounds.",  // areas as named on their own site
    areasNote:  "Not sure if your area is covered? Send us a message and we'll confirm.",

    // ─── WHY US (built from real, public facts) ────────────
    whyTitle: "Why people call us for electrical work.",
    why: [
      {
        title: "Local to Randburg",
        desc:  "Working across Newlands, Randburg and the surrounding areas."
      },
      {
        title: "4.6★ on Google",
        desc:  "Rated 4.6 stars across 59 Google reviews — real customers, public record."
      },
      {
        title: "One team, full scope",
        desc:  "From electrical & plumbing services – randburg to no power — one call covers it."
      },
    ],

    // ─── REVIEWS (only what their own site carries) ────────
    reviewsTitle: "Rated 4.6★ from 59 Google reviews.",
    reviews: [
    ],

    // ─── FAQ (derived from their scraped services) ─────────
    faqTitle: "Common questions.",
    faqLead:  "What most people ask before booking.",
    faq: [
      {
        q: "Do you handle electrical & plumbing services – randburg?",
        a: "Yes — electrical & plumbing services – randburg is one of our core services. Get in touch and we'll advise on your job."
      },
      {
        q: "Do you handle electrical?",
        a: "Yes — electrical is one of our core services. Get in touch and we'll advise on your job."
      },
      {
        q: "Do you handle no power?",
        a: "Yes — no power is one of our core services. Get in touch and we'll advise on your job."
      },
      {
        q: "Which areas do you cover?",
        a: "We work across Newlands, Randburg and the surrounding areas."
      },
      {
        q: "How do I get a quote?",
        a: "Call us on +27 79 058 5361 or send a WhatsApp message with the details and we'll come back to you with a quote."
      },
    ],

    // ─── CONTACT ───────────────────────────────────────────
    contactTitle: "Tell us what needs to be done.",
    contactLead:  "Describe what is happening and we will advise on the work and cost.",
    contactPlaceholder: "e.g. breaker tripping, need extra sockets, geyser not heating"
  }
};
