window.TAXONOMY = [
  {
    title: "Security Control Categories",
    subtitle: "Sort each real implementation into its NIST control category.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "technical", label: "Technical" },
      { id: "managerial", label: "Managerial" },
      { id: "operational", label: "Operational" },
      { id: "physical", label: "Physical" }
    ],
    items: [
      { text: "Installing a firewall", cat: "technical" },
      { text: "Enabling MFA", cat: "technical" },
      { text: "Antivirus software", cat: "technical" },
      { text: "Encryption", cat: "technical" },
      { text: "Writing an acceptable use policy", cat: "managerial" },
      { text: "Conducting a risk assessment", cat: "managerial" },
      { text: "Security policies", cat: "managerial" },
      { text: "Vendor risk management program", cat: "managerial" },
      { text: "Security awareness training", cat: "operational" },
      { text: "Running background checks", cat: "operational" },
      { text: "Incident response procedures", cat: "operational" },
      { text: "Change management process", cat: "operational" },
      { text: "Installing security cameras", cat: "physical" },
      { text: "Biometric door lock", cat: "physical" },
      { text: "Bollards", cat: "physical" },
      { text: "Fencing", cat: "physical" },
      { text: "Access badge reader", cat: "physical" }
    ]
  },
  {
    title: "Cryptographic Functions",
    subtitle: "Classify each algorithm or concept by its cryptographic family.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "symmetric", label: "Symmetric" },
      { id: "asymmetric", label: "Asymmetric" },
      { id: "hashing", label: "Hashing" }
    ],
    items: [
      { text: "AES", cat: "symmetric" },
      { text: "3DES", cat: "symmetric" },
      { text: "ChaCha20", cat: "symmetric" },
      { text: "A single shared secret key", cat: "symmetric" },
      { text: "Blowfish", cat: "symmetric" },
      { text: "RSA", cat: "asymmetric" },
      { text: "ECC", cat: "asymmetric" },
      { text: "Diffie-Hellman", cat: "asymmetric" },
      { text: "Public and private key pair", cat: "asymmetric" },
      { text: "Digital signatures", cat: "asymmetric" },
      { text: "SHA-256", cat: "hashing" },
      { text: "MD5", cat: "hashing" },
      { text: "HMAC", cat: "hashing" },
      { text: "Fixed-length digest", cat: "hashing" },
      { text: "One-way irreversible function", cat: "hashing" },
      { text: "Bcrypt", cat: "hashing" }
    ]
  },
  {
    title: "Attack Typologies",
    subtitle: "Match each exploit indicator to the attack type it signals.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "phishing", label: "Phishing" },
      { id: "injection", label: "Injection" },
      { id: "lateral", label: "Lateral Movement" }
    ],
    items: [
      { text: "Spoofed sender and urgent link", cat: "phishing" },
      { text: "Vishing call", cat: "phishing" },
      { text: "Look-alike domain", cat: "phishing" },
      { text: "Fake invoice attachment", cat: "phishing" },
      { text: "SQL UNION SELECT in a form field", cat: "injection" },
      { text: "Cross-site scripting payload", cat: "injection" },
      { text: "Command injection", cat: "injection" },
      { text: "LDAP query manipulation", cat: "injection" },
      { text: "Pass-the-hash across hosts", cat: "lateral" },
      { text: "Using stolen credentials to pivot", cat: "lateral" },
      { text: "PsExec to a new host", cat: "lateral" },
      { text: "Remote service exploitation inside the network", cat: "lateral" },
      { text: "Watering hole on a trusted site", cat: "phishing" },
      { text: "Smishing text message", cat: "phishing" },
      { text: "XML external entity payload", cat: "injection" },
      { text: "NoSQL injection in an API", cat: "injection" },
      { text: "RDP hopping between servers", cat: "lateral" }
    ]
  },
  {
    title: "Security Control Impact Classifications",
    subtitle: "Sort security measures by operational posture and engineering objective.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "physical", label: "Physical Defense" },
      { id: "technical", label: "Technical/Logical" },
      { id: "managerial", label: "Managerial Oversight" }
    ],
    items: [
      { text: "Mantrap entry vestibule", cat: "physical" },
      { text: "Bollards blocking vehicles", cat: "physical" },
      { text: "Biometric door scanner", cat: "physical" },
      { text: "Security guard patrol", cat: "physical" },
      { text: "Firewall ACL rules", cat: "technical" },
      { text: "Encryption at rest", cat: "technical" },
      { text: "Multifactor authentication", cat: "technical" },
      { text: "Intrusion prevention system", cat: "technical" },
      { text: "Risk assessment program", cat: "managerial" },
      { text: "Acceptable use policy", cat: "managerial" },
      { text: "Vendor security review", cat: "managerial" },
      { text: "Background check requirement", cat: "managerial" }
    ]
  },
  {
    title: "Cryptographic Keys and PKI Lifecycle",
    subtitle: "Map data protection mechanisms to their PKI implementation phase or component.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "ca", label: "Certificate Authority (CA Root)" },
      { id: "revoke", label: "Revocation (CRL/OCSP)" },
      { id: "keygen", label: "Key Generation (CSR)" },
      { id: "hardware", label: "Hardware Protection (TPM/HSM)" }
    ],
    items: [
      { text: "Signs subordinate certificates", cat: "ca" },
      { text: "Self-signed trust anchor", cat: "ca" },
      { text: "Issues end-entity certs", cat: "ca" },
      { text: "Maintains chain of trust", cat: "ca" },
      { text: "Published revoked serial list", cat: "revoke" },
      { text: "Real-time status responder", cat: "revoke" },
      { text: "OCSP stapling response", cat: "revoke" },
      { text: "Compromised key invalidation", cat: "revoke" },
      { text: "Public private keypair created", cat: "keygen" },
      { text: "Signing request to CA", cat: "keygen" },
      { text: "Subject distinguished name", cat: "keygen" },
      { text: "Entropy seeded randomness", cat: "keygen" },
      { text: "Tamper-resistant key storage", cat: "hardware" },
      { text: "Secure boot attestation", cat: "hardware" },
      { text: "FIPS 140-2 module", cat: "hardware" },
      { text: "Dedicated crypto coprocessor", cat: "hardware" }
    ]
  },
  {
    title: "Social Engineering Attack Methodology",
    subtitle: "Sort voice, message, and behavioral interactions into the precise social engineering type.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "vishing", label: "Voice Phishing (Vishing)" },
      { id: "smishing", label: "SMS Phishing (Smishing)" },
      { id: "spear", label: "Spear Phishing" },
      { id: "whaling", label: "Whaling" }
    ],
    items: [
      { text: "Fake IT helpdesk call", cat: "vishing" },
      { text: "Spoofed caller ID number", cat: "vishing" },
      { text: "Recorded bank robocall", cat: "vishing" },
      { text: "Verbal one-time code request", cat: "vishing" },
      { text: "Text with malicious link", cat: "smishing" },
      { text: "Fake delivery tracking text", cat: "smishing" },
      { text: "SMS account locked alert", cat: "smishing" },
      { text: "Toll payment scam message", cat: "smishing" },
      { text: "Email naming your manager", cat: "spear" },
      { text: "Targeted department employee", cat: "spear" },
      { text: "Researched personal details", cat: "spear" },
      { text: "Tailored project reference", cat: "spear" },
      { text: "CEO wire transfer request", cat: "whaling" },
      { text: "CFO invoice fraud email", cat: "whaling" },
      { text: "Targeting board executive", cat: "whaling" },
      { text: "Urgent message to president", cat: "whaling" }
    ]
  },
  {
    title: "Vulnerability Type Identification",
    subtitle: "Classify flaws by the underlying layer where they occur.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "webapp", label: "Web App Flaws (SQLi/XSS)" },
      { id: "memory", label: "Memory Corruption" },
      { id: "misconfig", label: "Misconfigurations" },
      { id: "eol", label: "End-of-Life Legacy" }
    ],
    items: [
      { text: "Unsanitized query input", cat: "webapp" },
      { text: "Reflected script injection", cat: "webapp" },
      { text: "Cross-site request forgery", cat: "webapp" },
      { text: "Insecure deserialization flaw", cat: "webapp" },
      { text: "Stack smashing overflow", cat: "memory" },
      { text: "Use-after-free pointer", cat: "memory" },
      { text: "Heap corruption exploit", cat: "memory" },
      { text: "Out-of-bounds write", cat: "memory" },
      { text: "Default admin credentials", cat: "misconfig" },
      { text: "Open public S3 bucket", cat: "misconfig" },
      { text: "Unnecessary open ports", cat: "misconfig" },
      { text: "Verbose error messages", cat: "misconfig" },
      { text: "Unpatched Windows Server 2008", cat: "eol" },
      { text: "Discontinued vendor support", cat: "eol" },
      { text: "Outdated Java runtime", cat: "eol" },
      { text: "No more security updates", cat: "eol" }
    ]
  },
  {
    title: "Secure Network Design Principles",
    subtitle: "Categorize design patterns by primary defensive zone.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "boundary", label: "Boundary Defense (DMZ)" },
      { id: "microseg", label: "Microsegmentation (East-West)" },
      { id: "isolation", label: "Isolation (Air-Gap)" },
      { id: "endpoint", label: "Endpoint (Host Firewall)" }
    ],
    items: [
      { text: "Public-facing web servers", cat: "boundary" },
      { text: "Screened subnet perimeter", cat: "boundary" },
      { text: "Bastion jump host", cat: "boundary" },
      { text: "Reverse proxy gateway", cat: "boundary" },
      { text: "Per-workload security policy", cat: "microseg" },
      { text: "Lateral movement restriction", cat: "microseg" },
      { text: "VM-to-VM traffic control", cat: "microseg" },
      { text: "Zero trust segmentation", cat: "microseg" },
      { text: "No network connectivity", cat: "isolation" },
      { text: "Standalone SCADA system", cat: "isolation" },
      { text: "Physically separated network", cat: "isolation" },
      { text: "Offline classified enclave", cat: "isolation" },
      { text: "Windows Defender Firewall", cat: "endpoint" },
      { text: "Per-device inbound rules", cat: "endpoint" },
      { text: "Local port blocking", cat: "endpoint" },
      { text: "Host-based packet filter", cat: "endpoint" }
    ]
  },
  {
    title: "Data Loss Prevention System States",
    subtitle: "Map protection rules to the data state being protected.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "transit", label: "Data in Transit (TLS)" },
      { id: "rest", label: "Data at Rest (Disk Encryption)" },
      { id: "inuse", label: "Data in Use (Secure Enclaves)" }
    ],
    items: [
      { text: "TLS 1.3 handshake", cat: "transit" },
      { text: "IPsec VPN tunnel", cat: "transit" },
      { text: "HTTPS encrypted session", cat: "transit" },
      { text: "Email in SMTP STARTTLS", cat: "transit" },
      { text: "BitLocker full-disk encryption", cat: "rest" },
      { text: "AES-256 encrypted database", cat: "rest" },
      { text: "Encrypted backup tapes", cat: "rest" },
      { text: "Stored file at rest", cat: "rest" },
      { text: "Intel SGX enclave", cat: "inuse" },
      { text: "Decrypted data in RAM", cat: "inuse" },
      { text: "Confidential computing memory", cat: "inuse" },
      { text: "Homomorphic encryption processing", cat: "inuse" }
    ]
  },
  {
    title: "Change Management Process Steps",
    subtitle: "Sort activities into the sequential change control checkpoint.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "request", label: "Request (Impact Analysis)" },
      { id: "review", label: "Review (CAB Approval)" },
      { id: "implement", label: "Implementation (Deployment)" },
      { id: "backout", label: "Backout (Rollback)" }
    ],
    items: [
      { text: "Document affected systems", cat: "request" },
      { text: "Estimate downtime risk", cat: "request" },
      { text: "Submit change ticket", cat: "request" },
      { text: "Identify dependencies", cat: "request" },
      { text: "Advisory board sign-off", cat: "review" },
      { text: "Stakeholder approval vote", cat: "review" },
      { text: "Schedule the change", cat: "review" },
      { text: "Authorize the request", cat: "review" },
      { text: "Apply during maintenance window", cat: "implement" },
      { text: "Execute deployment runbook", cat: "implement" },
      { text: "Push to production", cat: "implement" },
      { text: "Validate post-change tests", cat: "implement" },
      { text: "Restore previous version", cat: "backout" },
      { text: "Revert failed update", cat: "backout" },
      { text: "Recover from snapshot", cat: "backout" },
      { text: "Roll back database migration", cat: "backout" }
    ]
  },
  {
    title: "Data Obfuscation and Sanitization",
    subtitle: "Classify privacy mechanisms by how they mask sensitive fields.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "irreversible", label: "Irreversible (Hashing/Salting)" },
      { id: "reversible", label: "Reversible (Tokenization)" },
      { id: "structural", label: "Structural (Data Masking)" },
      { id: "hidden", label: "Hidden (Steganography)" }
    ],
    items: [
      { text: "SHA-256 password digest", cat: "irreversible" },
      { text: "Added random salt value", cat: "irreversible" },
      { text: "One-way fixed-length output", cat: "irreversible" },
      { text: "Bcrypt stored credential", cat: "irreversible" },
      { text: "Surrogate token replaces PAN", cat: "reversible" },
      { text: "Vault maps token to value", cat: "reversible" },
      { text: "Reversible with secure lookup", cat: "reversible" },
      { text: "Payment card detokenization", cat: "reversible" },
      { text: "Show only last four digits", cat: "structural" },
      { text: "Asterisks over SSN field", cat: "structural" },
      { text: "Format-preserving redaction", cat: "structural" },
      { text: "Test data scrubbing", cat: "structural" },
      { text: "Message hidden in image", cat: "hidden" },
      { text: "Payload in pixel bits", cat: "hidden" },
      { text: "Data concealed in audio", cat: "hidden" },
      { text: "Covert channel in metadata", cat: "hidden" }
    ]
  },
  {
    title: "Business Impact Analysis Metrics",
    subtitle: "Match availability and recovery parameters to their industry term.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "rpo", label: "Max Data Loss (RPO)" },
      { id: "rto", label: "Max Downtime (RTO)" },
      { id: "mtbf", label: "Reliability (MTBF)" },
      { id: "mttr", label: "Repair Time (MTTR)" }
    ],
    items: [
      { text: "Acceptable lost data window", cat: "rpo" },
      { text: "Backup frequency requirement", cat: "rpo" },
      { text: "Last good restore point", cat: "rpo" },
      { text: "Tolerable transaction loss", cat: "rpo" },
      { text: "Target restoration deadline", cat: "rto" },
      { text: "Maximum tolerable outage", cat: "rto" },
      { text: "Time to resume service", cat: "rto" },
      { text: "Recovery completion target", cat: "rto" },
      { text: "Average uptime between failures", cat: "mtbf" },
      { text: "Expected component lifespan", cat: "mtbf" },
      { text: "Hardware failure interval", cat: "mtbf" },
      { text: "Reliability prediction metric", cat: "mtbf" },
      { text: "Average fix duration", cat: "mttr" },
      { text: "Time to restore component", cat: "mttr" },
      { text: "Mean repair turnaround", cat: "mttr" },
      { text: "Maintainability measurement", cat: "mttr" }
    ]
  },
  {
    title: "Secure Coding and DevSecOps",
    subtitle: "Sort scanning routines and release actions into the pipeline phase.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "sast", label: "Static Analysis (SAST)" },
      { id: "dast", label: "Runtime Scanning (DAST)" },
      { id: "ci", label: "Continuous Integration" },
      { id: "cd", label: "Continuous Deployment (IaC)" }
    ],
    items: [
      { text: "Source code inspection", cat: "sast" },
      { text: "Scan without execution", cat: "sast" },
      { text: "Linting for unsafe calls", cat: "sast" },
      { text: "Detect hardcoded secrets", cat: "sast" },
      { text: "Fuzzing running application", cat: "dast" },
      { text: "Black-box web testing", cat: "dast" },
      { text: "Probe live endpoints", cat: "dast" },
      { text: "Runtime injection testing", cat: "dast" },
      { text: "Automated unit test run", cat: "ci" },
      { text: "Merge to main build", cat: "ci" },
      { text: "Compile on every commit", cat: "ci" },
      { text: "Pull request validation", cat: "ci" },
      { text: "Terraform provisioning", cat: "cd" },
      { text: "Automated release to production", cat: "cd" },
      { text: "Declarative infrastructure code", cat: "cd" },
      { text: "Push approved build live", cat: "cd" }
    ]
  },
  {
    title: "Incident Response Lifecycle Stages",
    subtitle: "Map containment and defense actions to the IR framework phase.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "detection", label: "Detection and Analysis" },
      { id: "containment", label: "Containment and Eradication" },
      { id: "recovery", label: "Recovery" },
      { id: "lessons", label: "Lessons Learned" }
    ],
    items: [
      { text: "SIEM alert triggered", cat: "detection" },
      { text: "Triage log anomalies", cat: "detection" },
      { text: "Confirm true positive", cat: "detection" },
      { text: "Determine attack scope", cat: "detection" },
      { text: "Isolate infected host", cat: "containment" },
      { text: "Remove malware artifacts", cat: "containment" },
      { text: "Disable compromised accounts", cat: "containment" },
      { text: "Wipe and reimage system", cat: "containment" },
      { text: "Restore from clean backup", cat: "recovery" },
      { text: "Return systems to production", cat: "recovery" },
      { text: "Monitor for reinfection", cat: "recovery" },
      { text: "Validate normal operations", cat: "recovery" },
      { text: "Post-incident review meeting", cat: "lessons" },
      { text: "Update runbook procedures", cat: "lessons" },
      { text: "Document root cause", cat: "lessons" },
      { text: "Improve detection rules", cat: "lessons" }
    ]
  },
  {
    title: "Application Exploit Code Patterns",
    subtitle: "Sort terminal outputs, payloads, and logs into the application-layer vulnerability they represent.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "xss", label: "Cross-Site Scripting (XSS)" },
      { id: "sqli", label: "SQL Injection (SQLi)" },
      { id: "traversal", label: "Directory Traversal" },
      { id: "api", label: "Unvalidated API Endpoint" }
    ],
    items: [
      { text: "script alert document cookie", cat: "xss" },
      { text: "img onerror payload", cat: "xss" },
      { text: "Injected javascript in comment", cat: "xss" },
      { text: "Stolen session via DOM", cat: "xss" },
      { text: "OR 1 equals 1", cat: "sqli" },
      { text: "UNION SELECT password", cat: "sqli" },
      { text: "Comment terminator double dash", cat: "sqli" },
      { text: "Dumped users table", cat: "sqli" },
      { text: "dot dot slash etc passwd", cat: "traversal" },
      { text: "Encoded path sequence", cat: "traversal" },
      { text: "Access boot.ini file", cat: "traversal" },
      { text: "Escape web root directory", cat: "traversal" },
      { text: "Broken object level authorization", cat: "api" },
      { text: "Enumerate IDs in URL", cat: "api" },
      { text: "Missing token check", cat: "api" },
      { text: "Mass assignment exposure", cat: "api" }
    ]
  }
];
