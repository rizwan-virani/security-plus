/* ============================================================================
   security+  ::  contentData.js
   Exam facts, per-domain metadata + objectives, PBQ format definitions,
   curated external resources, the Exam-Mechanics and Career-Guidance readers,
   and the textbook-dense domain reading content (SECPLUS.reading[1..5],
   appended below this header).

   This file loads first and establishes the global SECPLUS namespace consumed
   by quizEngine.js and app.js.

   Authored by Professor Rizwan Virani.
   ========================================================================== */
window.SECPLUS = window.SECPLUS || {};

SECPLUS.exam = {
  code: "SY0-701",
  name: "CompTIA Security+",
  minutes: 90,
  maxQuestions: 90,
  scaleLow: 100, scaleHigh: 900, passing: 750,
  domains: 5,
  launched: "2023",
  retiredPredecessor: "SY0-601"
};

/* Per-domain metadata. `objectives` mirror the official SY0-701 exam outline. */
SECPLUS.domainMeta = [
  { id: 1, weight: 12, color: "d1", icon: "🛡", title: "General Security Concepts", sectionCount: 16,
    short: "The vocabulary of the field: the CIA triad and AAA, the categories and functional types of security controls, change management, and the role of cryptography.",
    objectives: [
      { id: "1.1", t: "Compare and contrast various types of security controls" },
      { id: "1.2", t: "Summarize fundamental security concepts" },
      { id: "1.3", t: "Explain the importance of change management processes and their impact on security" },
      { id: "1.4", t: "Explain the importance of using appropriate cryptographic solutions" }
    ] },
  { id: 2, weight: 22, color: "d2", icon: "🎯", title: "Threats, Vulnerabilities & Mitigations", sectionCount: 17,
    short: "Threat actors and their motivations, attack surfaces and vectors, malware families, social engineering, the vulnerability landscape, and how to mitigate them.",
    objectives: [
      { id: "2.1", t: "Compare and contrast common threat actors and motivations" },
      { id: "2.2", t: "Explain common threat vectors and attack surfaces" },
      { id: "2.3", t: "Explain various types of vulnerabilities" },
      { id: "2.4", t: "Given a scenario, analyze indicators of malicious activity" },
      { id: "2.5", t: "Explain the purpose of mitigation techniques used to secure the enterprise" }
    ] },
  { id: 3, weight: 18, color: "d3", icon: "🏛", title: "Security Architecture", sectionCount: 18,
    short: "Architecture models from cloud to ICS, Zero Trust, network segmentation, defense-in-depth, data protection, cryptographic infrastructure/PKI, and resilience.",
    objectives: [
      { id: "3.1", t: "Compare and contrast security implications of different architecture models" },
      { id: "3.2", t: "Given a scenario, apply security principles to secure enterprise infrastructure" },
      { id: "3.3", t: "Compare and contrast concepts and strategies to protect data" },
      { id: "3.4", t: "Explain the importance of resilience and recovery in security architecture" }
    ] },
  { id: 4, weight: 28, color: "d4", icon: "📡", title: "Security Operations", sectionCount: 19,
    short: "The largest domain: hardening, asset and vulnerability management, monitoring and SIEM, IAM, automation, the incident-response lifecycle, and investigative data sources.",
    objectives: [
      { id: "4.1", t: "Given a scenario, apply common security techniques to computing resources" },
      { id: "4.2", t: "Explain the security implications of proper hardware, software, and data asset management" },
      { id: "4.3", t: "Explain various activities associated with vulnerability management" },
      { id: "4.4", t: "Explain security alerting and monitoring concepts and tools" },
      { id: "4.5", t: "Given a scenario, modify enterprise capabilities to enhance security" },
      { id: "4.6", t: "Given a scenario, implement and maintain identity and access management" },
      { id: "4.7", t: "Explain the importance of automation and orchestration related to secure operations" },
      { id: "4.8", t: "Explain appropriate incident response activities" },
      { id: "4.9", t: "Given a scenario, use data sources to support an investigation" }
    ] },
  { id: 5, weight: 20, color: "d5", icon: "⚖", title: "Security Program Management & Oversight", sectionCount: 16,
    short: "Governance and policy, the risk management process, third-party/vendor risk, compliance regimes (GDPR, HIPAA, PCI-DSS), audits, and security awareness.",
    objectives: [
      { id: "5.1", t: "Summarize elements of effective security governance" },
      { id: "5.2", t: "Explain elements of the risk management process" },
      { id: "5.3", t: "Explain the processes associated with third-party risk assessment and management" },
      { id: "5.4", t: "Summarize elements of effective security compliance" },
      { id: "5.5", t: "Explain types and purposes of audits and assessments" },
      { id: "5.6", t: "Given a scenario, implement security awareness practices" }
    ] }
];

/* The five PBQ formats. `domainColor` just drives the badge tint. */
SECPLUS.pbqFormats = [
  { id: 1, icon: "🔥", domainColor: 3, obj: "3.2 / 3.1", badge: "FIREWALL ACLs", title: "Firewall ACL & Network Architecture",
    desc: "Interpret a topology and write firewall rules — action, source/dest, subnet, port, protocol — to protect DMZs, cloud subnets, and corporate segments.",
    long: "Each scenario gives you a network exhibit and a security requirement. Configure the access-control list field by field: the <b>action</b> (permit/deny), the <b>source</b> and <b>destination</b>, the <b>port</b>, and the <b>protocol</b>. Apply least privilege, deny-by-default, and correct DMZ/segmentation placement." },
  { id: 2, icon: "🚨", domainColor: 4, obj: "4.8 / 4.9", badge: "LOG TRIAGE", title: "Incident Response & Log Triage",
    desc: "Read server, SIEM, EDR, and packet logs (XSS, SQLi, brute force, beaconing, lateral movement), name the attack vector, set severity, and choose remediation.",
    long: "You are the on-call analyst. Read the exhibit, then declare the <b>attack vector</b>, the <b>severity</b>, and the correct <b>containment and remediation</b> actions — isolating endpoints, revoking tokens, blocking indicators — in line with the incident-response lifecycle." },
  { id: 3, icon: "🎣", domainColor: 2, obj: "2.2 / 2.4", badge: "PHISHING & EMAIL", title: "Social Engineering & Email Header Analysis",
    desc: "Inspect full email headers, trace SPF/DKIM/DMARC and MX records, spot look-alike domains and malicious anchors, and categorize the exploit.",
    long: "Phishing analysis. Read the complete header and body exhibit: evaluate <b>SPF/DKIM/DMARC</b> results, compare the <b>envelope</b> and <b>display</b> senders, flag <b>look-alike domains</b> and dangerous link anchors, and categorize the social-engineering vector." },
  { id: 4, icon: "🔐", domainColor: 1, obj: "1.4 / 3.3", badge: "CRYPTOGRAPHY", title: "Cryptographic Architecture",
    desc: "Match the right algorithm, cipher mode, key length, or protocol to a requirement: data-at-rest, API key handling, TLS 1.3 parameters, or PKI registration.",
    long: "Engineer the cryptographic solution. For each requirement — encrypting data at rest, protecting data in transit, signing, key exchange, hashing, or PKI roles — select the correct <b>algorithm</b>, <b>mode/parameters</b>, <b>key length</b>, or <b>protocol</b>, balancing security and performance." },
  { id: 5, icon: "🗺", domainColor: 4, obj: "3.1 / 3.2", badge: "CONTROL PLACEMENT", title: "Network Topology Control Placement",
    desc: "Place controls — WAF, NGFW, load balancer, honeypot, jump server, proxy — into the correct corporate, cloud, and OT zones based on the risk requirement.",
    long: "A placement workspace. For each position in the topology, choose the control that belongs there — <b>WAF</b>, <b>next-gen firewall</b>, <b>load balancer</b>, <b>honeypot</b>, <b>jump server</b>, <b>reverse proxy</b>, and more — to satisfy segmentation, exposure, and defense-in-depth requirements across corporate, cloud, and OT segments." }
];

/* Curated free study resources. Placeholder PDF link points at CompTIA's site. */
SECPLUS.resources = [
  { icon: "🎥", title: "Professor Messer — Free SY0-701 Course", host: "professormesser.com",
    url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/",
    desc: "The complete, free video course covering every SY0-701 objective, plus monthly live study groups, practice exams, and a downloadable course notes book." },
  { icon: "📄", title: "Official CompTIA SY0-701 Exam Objectives (PDF)", host: "comptia.org",
    url: "https://www.comptia.org/en-us/certifications/security/",
    desc: "The authoritative exam outline — every objective and sub-bullet CompTIA can test. Download the objectives PDF from the certification page and use it as your master checklist." },
  { icon: "👥", title: "r/CompTIA — Community Wiki & Study Guides", host: "reddit.com/r/CompTIA",
    url: "https://www.reddit.com/r/CompTIA/wiki/index/",
    desc: "Crowd-sourced study plans, exam-day experiences, and the well-known community guides. Read recent “passed” posts for current question-style intel." },
  { icon: "🛡", title: "r/cybersecurity — Career & Concepts", host: "reddit.com/r/cybersecurity",
    url: "https://www.reddit.com/r/cybersecurity/",
    desc: "Broader industry context: how Security+ fits real roles, what employers ask for, and discussions that reinforce the domain concepts in practice." },
  { icon: "📚", title: "NIST Glossary & Publications (CSRC)", host: "csrc.nist.gov",
    url: "https://csrc.nist.gov/glossary",
    desc: "When a definition has to be exact, NIST is the source. The CSRC glossary and SP 800-series (e.g., 800-61 incident response, 800-53 controls) underpin much of the exam’s vocabulary." },
  { icon: "🧮", title: "MITRE ATT&CK Framework", host: "attack.mitre.org",
    url: "https://attack.mitre.org/",
    desc: "The knowledge base of adversary tactics and techniques referenced throughout Domain 2 and incident-response questions. Free to browse and excellent for context." }
];

/* ---- Reader: Exam Mechanics card ---- */
SECPLUS.examMechanics = [
  { heading: "Format, length, and delivery", body:
    "<p>The <strong>CompTIA Security+ SY0-701</strong> is a single exam of <strong>up to 90 questions</strong> to be completed in <strong>90 minutes</strong>. It is delivered either at a Pearson VUE testing center or via OnVUE online proctoring. Because the count is a <em>maximum</em>, your particular form may contain fewer scored items; CompTIA also seeds unscored “beta” questions it is evaluating for future exams, and you cannot tell which is which — so treat every question as if it counts.</p>" +
    "<p>The exam mixes <strong>multiple-choice</strong> items (single- and multiple-response) with a handful of <strong>performance-based questions (PBQs)</strong>. PBQs are interactive tasks — configuring a firewall rule, matching attacks to logs, ordering incident-response steps — and they typically appear first. They are worth more and consume more time, which leads directly to the single most important time-management rule below.</p>" +
    "<div class='callout exam'><div class='lbl'>Exam tip</div>PBQs front-load the exam and can eat your clock. If a PBQ stalls you, <strong>flag it and move on</strong>. Bank the fast multiple-choice points first, then return with whatever time remains.</div>" },
  { heading: "Scoring: the 100–900 scale", body:
    "<p>Security+ is scored on a <strong>scaled range of 100 to 900</strong>, and the passing score is <strong>750</strong>. Scaled scoring is not a simple percentage: CompTIA weights items by difficulty and equates across exam forms so that no candidate is advantaged or disadvantaged by drawing a harder set. As a result you cannot reverse-engineer an exact “number correct” from 750, and CompTIA does not publish the raw-to-scaled mapping.</p>" +
    "<p>Practically, strong candidates aim to answer roughly <strong>83% or more</strong> of questions correctly to give themselves comfortable margin. There is <strong>no penalty for guessing</strong> — an unanswered question is simply wrong — so you should never leave an item blank. Eliminate obviously wrong options, make your best choice, flag it if unsure, and move on.</p>" +
    "<blockquote>This platform’s mock exam reports a scaled score using a transparent linear approximation of the 100–900 band. Use it as a <em>relative</em> readiness signal — “am I trending toward 750?” — not as a literal prediction of your official score.</blockquote>" },
  { heading: "Question styles and how to read them", body:
    "<p>CompTIA writes “best answer” questions. Often two or three options are <em>plausible</em> and only one is <em>best</em> for the scenario described. Read the <strong>last sentence first</strong> — it usually contains the actual ask (“which control <em>best</em> mitigates…”, “what should the analyst do <em>first</em>…”). Words like <strong>first</strong>, <strong>best</strong>, <strong>most likely</strong>, and <strong>least</strong> are decisive; circle them mentally.</p>" +
    "<ul><li><strong>Multiple-response</strong> items tell you how many to pick (“choose two”). You must get all of them right for credit.</li><li><strong>Scenario</strong> items bury the relevant detail in a paragraph — identify the asset, the threat, and the constraint before looking at options.</li><li><strong>PBQs</strong> reward methodical work; partial credit is generally available, so complete every field you can even if unsure of one.</li></ul>" +
    "<div class='callout'><div class='lbl'>Strategy</div>Use the <strong>flag-and-review</strong> workflow. First pass: answer everything you know cold and flag the rest. Second pass: spend remaining minutes only on flagged items. This guarantees you never run out of time with easy points unanswered.</div>" },
  { heading: "Eligibility, cost, and renewal", body:
    "<p>There are <strong>no formal prerequisites</strong>, but CompTIA recommends <strong>Network+</strong> and around <strong>two years</strong> of IT administration experience with a security focus. The exam voucher cost varies by region (commonly in the US$390+ range). Academic and bundle discounts exist — ask your institution. There may also be funding available for a free voucher. Connect with the Program Director or your professor for more information about funding opportunities.</p>" +
    "<p>Security+ is valid for <strong>three years</strong> and participates in CompTIA’s <strong>Continuing Education (CE)</strong> program: you renew by earning continuing-education units, completing higher-level certifications, or related activities, rather than re-sitting the exam. Keep your certification active — for many DoD and employer roles, a lapsed cert means a lapsed authorization to work.</p>" },
  { heading: "Exam-day logistics", body:
    "<p>Bring two forms of ID; for online proctoring you must show a clear workspace, a working webcam, and a stable connection. You cannot use notes, phones, or smartwatches. A simple on-screen whiteboard or provided scratch material may be available — use it to jot the acronym you’ll otherwise lose under pressure (think RTO/RPO, or the IR lifecycle order).</p>" +
    "<div class='callout scenario'><div class='lbl'>Mindset</div>Arrive early, breathe, and remember: the exam tests <strong>judgment</strong>, not trivia recall. Most questions are answerable by applying core principles — least privilege, defense in depth, CIA — to the scenario in front of you.</div>" }
];

/* ---- Reader: Career Guidance card ---- */
SECPLUS.careerGuidance = [
  { heading: "Where Security+ sits on the ladder", body:
    "<p><strong>Security+ is the foundational, vendor-neutral cybersecurity certification.</strong> It is typically the first security-specific credential a professional earns, sitting above entry IT certs (A+, Network+) and below specialist or advanced certifications (CySA+, PenTest+, CISSP, cloud-security tracks). Its value is breadth: it proves you can speak the language of the field across threats, architecture, operations, and governance.</p>" +
    "<p>For hiring managers, Security+ on a résumé is shorthand for “this person understands core security hygiene and won’t need everything explained from scratch.” It is frequently listed as a <em>required</em> or <em>preferred</em> qualification for junior security and IT roles.</p>" },
  { heading: "DoD 8140 / 8570 baseline (IAT Level II)", body:
    "<p>One of Security+’s most concrete career levers is U.S. Department of Defense workforce policy. Under <strong>DoD Directive 8570.01-M</strong> — now being superseded by the <strong>DoD 8140</strong> framework — anyone in an <strong>Information Assurance Technical (IAT) Level II</strong> role on a DoD system must hold an approved baseline certification. <strong>Security+ satisfies the IAT Level II baseline</strong> (and IAT Level I).</p>" +
    "<p>In plain terms: a vast number of defense and federal-contractor positions <em>cannot legally be staffed</em> by someone without an approved cert, and Security+ is the most common, most affordable way to meet that bar. Holding it can be the difference between being eligible and being disqualified for an entire category of jobs.</p>" +
    "<div class='callout exam'><div class='lbl'>Why it matters</div>The 8140/8570 baseline turns Security+ from a “nice to have” into a <strong>gatekeeping requirement</strong> for government-adjacent work. If a DoD career interests you, this cert is effectively mandatory.</div>" },
  { heading: "Roles Security+ opens", body:
    "<p>Security+ aligns with a cluster of early-career roles. It will not, by itself, make you a senior engineer — but it credibly qualifies you for:</p>" +
    "<ul>" +
    "<li><strong>SOC Analyst (Tier 1)</strong> — triaging alerts, reading SIEM and EDR logs, escalating incidents. Domain 4 (Security Operations) maps almost directly to this job.</li>" +
    "<li><strong>Junior Systems / Network Administrator (security-focused)</strong> — hardening hosts, managing patches and configurations, applying least privilege.</li>" +
    "<li><strong>Security Specialist / Information Security Analyst</strong> — supporting vulnerability management, policy, and risk activities.</li>" +
    "<li><strong>Help Desk / IT Support advancing into security</strong> — the cert is a common springboard out of pure support work.</li>" +
    "<li><strong>Compliance / GRC analyst (entry)</strong> — Domain 5 governance and risk content underpins these roles.</li>" +
    "</ul>" },
  { heading: "Building the path beyond Security+", body:
    "<p>Treat Security+ as a launch point, not a destination. A common trajectory: <em>Security+ → hands-on SOC or sysadmin experience → a specialization</em>. From here, defensive-minded analysts often pursue <strong>CompTIA CySA+</strong> (threat detection and response) or a SIEM/EDR vendor certification; offensive-minded learners pursue <strong>PenTest+</strong> or eJPT/OSCP; cloud-bound learners add <strong>AWS/Azure security</strong> credentials; and those eyeing leadership work toward <strong>CISSP</strong> once they have the requisite experience.</p>" +
    "<div class='callout scenario'><div class='lbl'>Practical advice</div>Pair the cert with <strong>demonstrable hands-on skill</strong> — a home lab, a SOC simulator, CTF challenges, or documented projects. Certifications get you past résumé filters; practical evidence gets you through interviews.</div>" }
];

/* Reading content is NO LONGER bundled here. To keep this file lean and to
   load only what a student opens, each domain's dense reading sections live in
   their own module under assets/js/content/domainN.js and are fetched on demand
   by app.js the first time a Domain Study card is opened. This object is the
   shared target those modules populate: SECPLUS.reading[N] = [ ...sections ]. */
SECPLUS.reading = SECPLUS.reading || {};

/* Flashcard decks are likewise lazy-loaded from assets/js/content/flashN.js
   (100 cards per domain) and populate this object: SECPLUS.flash[N] = [ ...cards ]. */
SECPLUS.flash = SECPLUS.flash || {};
