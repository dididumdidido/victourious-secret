/* ============================================================
   RESOURCE DIRECTORY
   Add one { ... } block per listing. Fields:
     name, type, state ("National" or a 2-letter code like "WA"),
     description, url, phone (optional), tags (optional list)
   type must be one of: "Legal", "Counseling", "Medical",
     "Holistic", "Nonprofit", "Hotline", "VA / Government"
   Seed entries are national resources — VERIFY details before launch.
   ============================================================ */
window.RESOURCES = [
  {
    name: "Veterans & Military Crisis Line",
    type: "Hotline", state: "National",
    description: "24/7 confidential crisis support for service members, veterans, and their families. Call, text, or chat.",
    url: "https://www.veteranscrisisline.net", phone: "Dial 988, then press 1 · Text 838255",
    tags: ["24/7", "Crisis"]
  },
  {
    name: "DoD Safe Helpline",
    type: "Hotline", state: "National",
    description: "Anonymous, confidential sexual assault support for the DoD community, available 24/7 by phone, online chat, or text.",
    url: "https://www.safehelpline.org", phone: "877-995-5247",
    tags: ["24/7", "Anonymous", "Sexual assault"]
  },
  {
    name: "Military OneSource",
    type: "Counseling", state: "National",
    description: "Free, confidential non-medical counseling sessions for service members and families — in person, by phone, or video. Using it does not get reported to your command.",
    url: "https://www.militaryonesource.mil", phone: "800-342-9647",
    tags: ["Free", "Confidential"]
  },
  {
    name: "VA Military Sexual Trauma (MST) Care",
    type: "VA / Government", state: "National",
    description: "Free MST-related care through the VA. Every VA health care system has an MST Coordinator. You may be eligible even if you didn't report at the time.",
    url: "https://www.va.gov/health-care/health-needs-conditions/military-sexual-trauma/",
    tags: ["MST", "Free"]
  },
  {
    name: "Vet Centers",
    type: "Counseling", state: "National",
    description: "Community-based counseling centers offering confidential readjustment and MST counseling for eligible veterans, service members, and families.",
    url: "https://www.vetcenter.va.gov", phone: "877-927-8387",
    tags: ["MST", "Family"]
  },
  {
    name: "Protect Our Defenders",
    type: "Nonprofit", state: "National",
    description: "Advocacy organization supporting survivors of military sexual assault and harassment, including help connecting with pro bono attorneys.",
    url: "https://www.protectourdefenders.com",
    tags: ["Advocacy", "Pro bono referrals"]
  },
  {
    name: "Service Women's Action Network (SWAN)",
    type: "Nonprofit", state: "National",
    description: "Policy advocacy and peer support for women who have served or are serving.",
    url: "https://www.servicewomen.org",
    tags: ["Women", "Policy"]
  },
  {
    name: "National Veterans Legal Services Program (NVLSP)",
    type: "Legal", state: "National",
    description: "Nonprofit veterans' legal organization offering help with VA benefits claims, discharge upgrades, and related issues.",
    url: "https://www.nvlsp.org",
    tags: ["VA claims", "Discharge upgrades"]
  }
];
