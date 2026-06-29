window.LABS = [
  {
    "id": "Lab 01",
    "num": 1,
    "group": "GENERAL CONCEPTS",
    "title": "Implementing Network Security Controls",
    "desc": "Explore the full taxonomy of security controls, from managerial and operational to technical and physical, and apply them to realistic enterprise scenarios. You classify controls by category and by functional type, then validate your mapping against an audit scenario.",
    "objectives": [
      "Distinguish among Managerial, Operational, Technical, and Physical control categories.",
      "Classify controls by functional type (Preventive, Detective, Corrective, Deterrent, Directive, Compensating).",
      "Apply both frameworks to real-world scenarios."
    ],
    "console": {
      "host": "acme-sec01",
      "boot": [
        "[SYS] Control framework lab online.",
        "[SYS] Scenario loaded: ACME Financial audit."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Classify a security policy by control category"
        },
        {
          "id": "t2",
          "label": "Assign the correct functional type to a CCTV camera"
        },
        {
          "id": "t3",
          "label": "Map a control to a real audit finding"
        },
        {
          "id": "t4",
          "label": "List all control categories in scope"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Category for an acceptable use policy",
          "options": [
            "Technical",
            "Managerial",
            "Physical",
            "Operational"
          ],
          "correct": "Managerial",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Functional type for a CCTV camera (recording only)",
          "options": [
            "Preventive",
            "Detective",
            "Deterrent",
            "Corrective"
          ],
          "correct": "Detective",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "MAP CONTROL TO FINDING",
        "placeholder": "encryption-at-rest",
        "button": "Apply",
        "response": "[AUDIT] Control mapped to finding AF-204 (unencrypted PII).\n[AUDIT] Category: Technical, Type: Preventive.\n[AUDIT] Remediation accepted.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list categories",
          "out": "[CTRL] Managerial\n[CTRL] Operational\n[CTRL] Technical\n[CTRL] Physical",
          "task": "t4"
        },
        {
          "cmd": "show findings",
          "out": "[AUDIT] 3 open findings across categories."
        },
        {
          "cmd": "show status",
          "out": "Framework engine nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 02",
    "num": 2,
    "group": "GENERAL CONCEPTS",
    "title": "Basic Encryption",
    "desc": "Put cryptographic theory into practice: work with symmetric and asymmetric algorithms, generate MD5 hashes, and match encryption methods to real-world use cases. You select algorithms for given scenarios and verify integrity with a hash calculator.",
    "objectives": [
      "Demonstrate symmetric and asymmetric encryption, choosing the correct algorithm for a scenario.",
      "Generate an MD5 hash using a hashing calculator.",
      "Match cipher choices to confidentiality and integrity needs."
    ],
    "console": {
      "host": "acme-crypto1",
      "boot": [
        "[SYS] Crypto sandbox initialized.",
        "[SYS] Algorithm library loaded: AES, RSA, MD5, SHA-256."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select a symmetric cipher for bulk disk encryption"
        },
        {
          "id": "t2",
          "label": "Select an asymmetric algorithm for key exchange"
        },
        {
          "id": "t3",
          "label": "Generate an MD5 hash of a sample string"
        },
        {
          "id": "t4",
          "label": "Inspect available algorithms"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Cipher for fast bulk disk encryption",
          "options": [
            "RSA-2048",
            "AES-256",
            "MD5",
            "Diffie-Hellman"
          ],
          "correct": "AES-256",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Algorithm for secure key exchange",
          "options": [
            "AES-256",
            "RSA-2048",
            "SHA-256",
            "RC4"
          ],
          "correct": "RSA-2048",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "HASH CALCULATOR (MD5)",
        "placeholder": "password123",
        "button": "Hash",
        "response": "[HASH] MD5 digest computed: 482c811da5d5b4bc6d497ffa98491e38\n[HASH] Length: 128 bits.\n[HASH] Note: MD5 is collision-prone, use for non-security checks only.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list algorithms",
          "out": "[CRYPTO] Symmetric: AES, 3DES, ChaCha20\n[CRYPTO] Asymmetric: RSA, ECC, DH\n[CRYPTO] Hash: MD5, SHA-256",
          "task": "t4"
        },
        {
          "cmd": "show keysize aes",
          "out": "[CRYPTO] AES supports 128, 192, 256 bit keys."
        },
        {
          "cmd": "show status",
          "out": "Crypto engine nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 03",
    "num": 3,
    "group": "THREATS AND VULNS",
    "title": "Social Engineering Tactics",
    "desc": "Step into the attacker mindset: demonstrate social engineering techniques, identify malware families by behavior, and measure password strength under realistic conditions. You craft a pretext, classify malware samples, and benchmark a complex password.",
    "objectives": [
      "Demonstrate social engineering tactics.",
      "Identify malware families by behavior, propagation, and objective.",
      "Measure and compare the strength of a complex password."
    ],
    "console": {
      "host": "acme-redlab",
      "boot": [
        "[SYS] Social engineering simulation online.",
        "[SYS] Safe sandbox: no live targets."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Identify the tactic behind a fake invoice email"
        },
        {
          "id": "t2",
          "label": "Classify a self-replicating network malware sample"
        },
        {
          "id": "t3",
          "label": "Craft and test a phishing pretext"
        },
        {
          "id": "t4",
          "label": "Measure the strength of a complex password"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Tactic: urgent fake invoice from CEO",
          "options": [
            "Tailgating",
            "Business Email Compromise",
            "Shoulder surfing",
            "Dumpster diving"
          ],
          "correct": "Business Email Compromise",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Malware that self-replicates across the network",
          "options": [
            "Trojan",
            "Worm",
            "Ransomware",
            "Rootkit"
          ],
          "correct": "Worm",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "PRETEXT BUILDER",
        "placeholder": "Subject: Urgent payroll update required",
        "button": "Send",
        "response": "[SIM] Pretext delivered to 50 simulated users.\n[SIM] 18 clicked the link, 6 entered credentials.\n[SIM] Click rate 36 percent flags awareness training need.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "pwstrength",
          "out": "[PW] Entropy: 78 bits\n[PW] Estimated crack time: 4 centuries (offline GPU)\n[PW] Rating: Strong",
          "task": "t4"
        },
        {
          "cmd": "list tactics",
          "out": "[SE] phishing, vishing, smishing, pretexting, baiting, tailgating"
        },
        {
          "cmd": "show status",
          "out": "Red lab nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 04",
    "num": 4,
    "group": "THREATS AND VULNS",
    "title": "Vulnerability Identification",
    "desc": "Use real commands to surface vulnerabilities across OS, application, mobile, cloud, and web platforms, then prioritize remediation using CVSS, business impact, and exploitability. You run scans, interpret misconfigurations, and choose mitigations.",
    "objectives": [
      "Use commands to identify vulnerabilities across platforms.",
      "Explain how misconfigurations create exploitable conditions.",
      "Distinguish patching, hardening, segmentation, isolation, and access control as mitigations."
    ],
    "console": {
      "host": "acme-vmscan",
      "boot": [
        "[SYS] Vulnerability scanner ready.",
        "[SYS] Target scope: 10.20.0.0/24 enterprise subnet."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Run a port and service scan against the subnet"
        },
        {
          "id": "t2",
          "label": "Select the right mitigation for an unpatched CVE"
        },
        {
          "id": "t3",
          "label": "Submit a misconfigured S3 bucket for analysis"
        },
        {
          "id": "t4",
          "label": "Show CVSS scores for discovered findings"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Best mitigation for a critical unpatched RCE CVE",
          "options": [
            "Segmentation",
            "Patching",
            "Deterrent signage",
            "Awareness training"
          ],
          "correct": "Patching",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "CLOUD CONFIG ANALYZER",
        "placeholder": "s3://acme-billing --acl public-read",
        "button": "Analyze",
        "response": "[CLOUD] Finding: bucket grants public-read to anonymous users.\n[CLOUD] Exposure: 12,400 objects including PII.\n[CLOUD] Fix: remove public ACL, enable block-public-access.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "nmap 10.20.0.0/24",
          "out": "[NMAP] 22/tcp open ssh\n[NMAP] 445/tcp open microsoft-ds (SMBv1 detected)\n[NMAP] 3389/tcp open ms-wbt-server",
          "task": "t1"
        },
        {
          "cmd": "show cvss",
          "out": "[CVSS] CVE-2024-1102 score 9.8 Critical\n[CVSS] CVE-2023-7777 score 6.5 Medium",
          "task": "t4"
        },
        {
          "cmd": "show status",
          "out": "Scanner nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 05",
    "num": 5,
    "group": "ARCHITECTURE",
    "title": "Secure Operational Technologies",
    "desc": "Examine virtualization, IoT, and ICS/SCADA security challenges through scenario tasks, then design a resilience solution addressing business continuity requirements. You evaluate isolation risks and adapt controls to operational technology constraints.",
    "objectives": [
      "Identify virtualization risks (hypervisor types, VM escape, container isolation).",
      "Describe IoT security challenges and controls.",
      "Distinguish ICS/SCADA from traditional IT and adapt controls."
    ],
    "console": {
      "host": "acme-otlab",
      "boot": [
        "[SYS] OT security lab online.",
        "[SYS] Environment: plant floor with PLCs and IoT sensors."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Identify the hypervisor type running bare-metal"
        },
        {
          "id": "t2",
          "label": "Select a control for legacy ICS that cannot be patched"
        },
        {
          "id": "t3",
          "label": "Submit an IoT device profile for hardening review"
        },
        {
          "id": "t4",
          "label": "Enumerate connected OT assets"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Hypervisor running directly on hardware",
          "options": [
            "Type 2 hosted",
            "Type 1 bare-metal",
            "Container runtime",
            "Emulator"
          ],
          "correct": "Type 1 bare-metal",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Control for an unpatched legacy SCADA controller",
          "options": [
            "Network segmentation",
            "Daily reboots",
            "Public internet access",
            "Disable logging"
          ],
          "correct": "Network segmentation",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "IOT HARDENING REVIEW",
        "placeholder": "thermostat-fw v1.0 default-creds=admin/admin",
        "button": "Review",
        "response": "[IOT] Default credentials detected: critical risk.\n[IOT] No firmware signing present.\n[IOT] Recommend: change creds, isolate VLAN, enable signed updates.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list ot-assets",
          "out": "[OT] PLC-01 Modbus/TCP\n[OT] HMI-Station-3\n[OT] Sensor-Array IoT (24 nodes)",
          "task": "t4"
        },
        {
          "cmd": "show protocols",
          "out": "[OT] Modbus, DNP3, OPC-UA in use."
        },
        {
          "cmd": "show status",
          "out": "OT lab nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 06",
    "num": 6,
    "group": "ARCHITECTURE",
    "title": "Configure a Firewall",
    "desc": "Select, configure, and compare network defense tools (firewalls, IDS/IPS, DNS filtering, NAC, DLP, endpoint controls), mapping each to the threat vectors it neutralizes. You write firewall rules and contrast detection technologies.",
    "objectives": [
      "Compare packet-filtering, stateful, NGFW, and WAF firewalls.",
      "Contrast IDS and IPS by detection, placement, and response.",
      "Map DNS filtering, NAC, and DLP to their threat vectors."
    ],
    "console": {
      "host": "acme-fw01",
      "boot": [
        "[SYS] Firewall management console online.",
        "[SYS] Ruleset: default-deny inbound."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Choose the firewall type that inspects HTTP payloads"
        },
        {
          "id": "t2",
          "label": "Select the device that blocks attacks inline"
        },
        {
          "id": "t3",
          "label": "Add a firewall rule allowing HTTPS to the web tier"
        },
        {
          "id": "t4",
          "label": "Display the active firewall policy"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Firewall that inspects web application payloads",
          "options": [
            "Packet-filter",
            "Stateful",
            "WAF",
            "Circuit-level"
          ],
          "correct": "WAF",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Device that detects and blocks inline",
          "options": [
            "IDS",
            "IPS",
            "SPAN tap",
            "Syslog server"
          ],
          "correct": "IPS",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "RULE BUILDER",
        "placeholder": "allow tcp any -> 10.0.1.10 port 443",
        "button": "Commit",
        "response": "[FW] Rule compiled and inserted at position 5.\n[FW] allow tcp any -> 10.0.1.10:443 (HTTPS web tier)\n[FW] Stateful tracking enabled.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show policy",
          "out": "[FW] 1 deny any any (default)\n[FW] 2 allow established\n[FW] 3 allow tcp any -> dns:53",
          "task": "t4"
        },
        {
          "cmd": "firewall-cmd --list-all",
          "out": "[FW] zone: public, services: ssh https"
        },
        {
          "cmd": "show status",
          "out": "Firewall nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 07",
    "num": 7,
    "group": "SECURITY OPS",
    "title": "Identity and Access Management",
    "desc": "Implement enterprise IAM: configure AAA, evaluate authentication factors, compare access control models, and trace the Joiner-Mover-Leaver lifecycle to uncover governance gaps. You build MFA and assign role-based permissions.",
    "objectives": [
      "Demonstrate Authentication, Authorization, and Accounting.",
      "Compare the five authentication factor types and identify true MFA.",
      "Differentiate DAC and RBAC and select the right model."
    ],
    "console": {
      "host": "acme-iam01",
      "boot": [
        "[SYS] IAM controller online.",
        "[SYS] Directory: 1,240 identities synced."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select a combination that constitutes true MFA"
        },
        {
          "id": "t2",
          "label": "Choose the model that assigns access by job role"
        },
        {
          "id": "t3",
          "label": "Provision a new joiner with role-based access"
        },
        {
          "id": "t4",
          "label": "Review the accounting log for a user session"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "True multifactor combination",
          "options": [
            "Password plus PIN",
            "Password plus fingerprint",
            "Two passwords",
            "Two security questions"
          ],
          "correct": "Password plus fingerprint",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Model assigning access by job function",
          "options": [
            "DAC",
            "RBAC",
            "MAC",
            "Rule-based"
          ],
          "correct": "RBAC",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "PROVISION JOINER",
        "placeholder": "user=jsmith role=Analyst dept=Finance",
        "button": "Provision",
        "response": "[IAM] Account jsmith created.\n[IAM] Role Analyst grants: read finance-reports, submit-expense.\n[IAM] JML lifecycle stage: Joiner complete.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show accounting jsmith",
          "out": "[AAA] 09:14 login success MFA\n[AAA] 09:15 accessed finance-reports\n[AAA] 11:40 logout",
          "task": "t4"
        },
        {
          "cmd": "list factors",
          "out": "[AAA] something you know, have, are, do, somewhere you are"
        },
        {
          "cmd": "show status",
          "out": "IAM nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 08",
    "num": 8,
    "group": "SECURITY OPS",
    "title": "Build Asset Inventory",
    "desc": "Establish system baselines, build and maintain an asset inventory, then configure SIEM alert thresholds by distinguishing event, system, security, and application log types. You register assets and tune detection thresholds.",
    "objectives": [
      "Create system baselines.",
      "Build and maintain an asset inventory.",
      "Distinguish log types and configure SIEM alert thresholds."
    ],
    "console": {
      "host": "acme-cmdb1",
      "boot": [
        "[SYS] Asset management and SIEM console online.",
        "[SYS] Baseline engine loaded."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the log type recording failed logons"
        },
        {
          "id": "t2",
          "label": "Register a new asset into the inventory"
        },
        {
          "id": "t3",
          "label": "Capture a configuration baseline for a server"
        },
        {
          "id": "t4",
          "label": "Set a SIEM alert threshold for brute force"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Log type recording authentication failures",
          "options": [
            "Application log",
            "Security log",
            "System log",
            "Setup log"
          ],
          "correct": "Security log",
          "task": "t1"
        }
      ],
      "payload": {
        "label": "ASSET REGISTRATION",
        "placeholder": "host=db-prod-2 owner=DBA crit=High ip=10.0.2.5",
        "button": "Register",
        "response": "[CMDB] Asset db-prod-2 added (ID AST-0451).\n[CMDB] Criticality High, owner DBA team.\n[CMDB] Inventory total: 1,241 assets.",
        "task": "t2"
      },
      "commands": [
        {
          "cmd": "baseline capture web-01",
          "out": "[BASE] Services, ports, and config hashed.\n[BASE] Baseline BL-web-01 stored for drift detection.",
          "task": "t3"
        },
        {
          "cmd": "siem set-threshold failed-login 5/min",
          "out": "[SIEM] Alert rule armed: 5 failed logins per minute triggers Medium.",
          "task": "t4"
        },
        {
          "cmd": "show status",
          "out": "CMDB nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 09",
    "num": 9,
    "group": "SECURITY OPS",
    "title": "Vulnerability Scan and Incident Response",
    "desc": "Execute the full vulnerability management lifecycle (scan, analyze, prioritize, validate), then apply digital forensics and incident response procedures to a realistic event. You run scans, prioritize findings, and preserve evidence.",
    "objectives": [
      "Compare credentialed and non-credentialed scans.",
      "Prioritize findings using CVSS, asset criticality, and exploitability.",
      "Apply digital forensics principles (chain of custody, order of volatility, write blockers, imaging) and select IR actions."
    ],
    "console": {
      "host": "acme-ir01",
      "boot": [
        "[SYS] Incident response console online.",
        "[SYS] Active case: INC-2026-0042 suspected breach."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Choose the scan type using valid host credentials"
        },
        {
          "id": "t2",
          "label": "Select what to collect first per order of volatility"
        },
        {
          "id": "t3",
          "label": "Run a credentialed vulnerability scan"
        },
        {
          "id": "t4",
          "label": "Acquire a forensic disk image with a write blocker"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Scan that authenticates to the host",
          "options": [
            "Non-credentialed",
            "Credentialed",
            "Passive sniff",
            "External only"
          ],
          "correct": "Credentialed",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Collect first per order of volatility",
          "options": [
            "Disk image",
            "CPU registers and cache",
            "Backup tapes",
            "Archived logs"
          ],
          "correct": "CPU registers and cache",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "EVIDENCE IMAGER",
        "placeholder": "image /dev/sdb --writeblock --hash sha256",
        "button": "Acquire",
        "response": "[FORENSIC] Write blocker engaged, source read-only.\n[FORENSIC] Image acquired, SHA-256 verified matching.\n[FORENSIC] Chain of custody entry logged for INC-2026-0042.",
        "task": "t4"
      },
      "commands": [
        {
          "cmd": "scan --credentialed 10.0.2.5",
          "out": "[SCAN] Authenticated scan complete.\n[SCAN] 3 missing patches, 1 weak cipher found.",
          "task": "t3"
        },
        {
          "cmd": "show priority",
          "out": "[VM] CVE-2024-1102 9.8 on High-crit asset = P1."
        },
        {
          "cmd": "show status",
          "out": "IR console nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 10",
    "num": 10,
    "group": "PROGRAM MGMT",
    "title": "Security Governance and Policy",
    "desc": "Navigate the governance document hierarchy, map major compliance frameworks to regulated industries, and apply privacy principles to a real compliance scenario. You classify governance documents and align frameworks to sectors.",
    "objectives": [
      "Distinguish policies, standards, procedures, and guidelines.",
      "Identify security governance roles.",
      "Map frameworks (PCI DSS, HIPAA, SOX, GDPR, CMMC, NIST CSF) to sectors and apply privacy principles."
    ],
    "console": {
      "host": "acme-gov01",
      "boot": [
        "[SYS] Governance console online.",
        "[SYS] Document library and framework catalog loaded."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Classify a step-by-step instruction document"
        },
        {
          "id": "t2",
          "label": "Map the framework governing payment card data"
        },
        {
          "id": "t3",
          "label": "Submit a data-processing scenario for privacy review"
        },
        {
          "id": "t4",
          "label": "List governance roles in the program"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Document type giving exact step-by-step instructions",
          "options": [
            "Policy",
            "Standard",
            "Procedure",
            "Guideline"
          ],
          "correct": "Procedure",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Framework for payment card data",
          "options": [
            "HIPAA",
            "PCI DSS",
            "SOX",
            "GDPR"
          ],
          "correct": "PCI DSS",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "PRIVACY SCENARIO REVIEW",
        "placeholder": "collect EU customer emails for marketing",
        "button": "Review",
        "response": "[PRIV] GDPR applies: lawful basis and consent required.\n[PRIV] Data subject rights: access, erasure, portability.\n[PRIV] Recommend DPIA and documented retention limit.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list roles",
          "out": "[GOV] Data Owner, Data Custodian, Data Steward, Privacy Officer, DPO",
          "task": "t4"
        },
        {
          "cmd": "list frameworks",
          "out": "[GOV] PCI DSS, HIPAA, SOX, GDPR, CMMC, NIST CSF"
        },
        {
          "cmd": "show status",
          "out": "Governance console nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 11",
    "num": 11,
    "group": "PROGRAM MGMT",
    "title": "Risk Management and Analysis",
    "desc": "Calculate risk scores, compare treatment strategies, build a risk register, and apply BIA metrics (RTO, RPO, MTTR, MTBF) to an organizational risk scenario. You quantify risk and select treatment options.",
    "objectives": [
      "Calculate a risk score using likelihood times impact.",
      "Compare Accept, Avoid, Transfer, and Mitigate.",
      "Explain the risk register and BIA and apply to a scenario."
    ],
    "console": {
      "host": "acme-risk1",
      "boot": [
        "[SYS] Risk analysis engine online.",
        "[SYS] Risk register initialized: 0 entries."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the treatment that buys cyber insurance"
        },
        {
          "id": "t2",
          "label": "Identify the metric for maximum tolerable data loss"
        },
        {
          "id": "t3",
          "label": "Compute a risk score from likelihood and impact"
        },
        {
          "id": "t4",
          "label": "Add a quantified risk to the register"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Treatment that shifts risk via insurance",
          "options": [
            "Accept",
            "Avoid",
            "Transfer",
            "Mitigate"
          ],
          "correct": "Transfer",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Metric for maximum tolerable data loss",
          "options": [
            "RTO",
            "RPO",
            "MTTR",
            "MTBF"
          ],
          "correct": "RPO",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "RISK REGISTER ENTRY",
        "placeholder": "risk=ransomware likelihood=4 impact=5",
        "button": "Add",
        "response": "[RISK] Entry RR-007 added: Ransomware.\n[RISK] Score = 4 x 5 = 20 (Critical).\n[RISK] Owner assigned, treatment pending.",
        "task": "t4"
      },
      "commands": [
        {
          "cmd": "calc-risk 3 4",
          "out": "[RISK] Likelihood 3 x Impact 4 = Score 12 (High).",
          "task": "t3"
        },
        {
          "cmd": "show bia",
          "out": "[BIA] RTO 4h, RPO 1h, MTTR 2h, MTBF 900h."
        },
        {
          "cmd": "show status",
          "out": "Risk engine nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 12",
    "num": 12,
    "group": "CAPSTONE",
    "title": "Final Project Capstone",
    "desc": "Bring every domain together: identify real threats and vulnerabilities, then complete a full System Security Plan and Security Assessment Report for a defined organization. You synthesize controls, findings, and documentation end to end.",
    "objectives": [
      "Identify vulnerabilities and threats to an organization.",
      "Complete a System Security Plan.",
      "Complete a Security Assessment Report."
    ],
    "console": {
      "host": "acme-capstone",
      "boot": [
        "[SYS] Capstone environment online.",
        "[SYS] Organization profile: ACME Financial, 1,200 users."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the document defining the system security baseline"
        },
        {
          "id": "t2",
          "label": "Identify the top threat to internet-facing assets"
        },
        {
          "id": "t3",
          "label": "Generate the System Security Plan draft"
        },
        {
          "id": "t4",
          "label": "Produce the Security Assessment Report"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Document defining controls and baseline for a system",
          "options": [
            "SSP",
            "SAR",
            "BIA",
            "MOU"
          ],
          "correct": "SSP",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Top threat to exposed web servers",
          "options": [
            "Tailgating",
            "Web application exploitation",
            "Dumpster diving",
            "Power loss"
          ],
          "correct": "Web application exploitation",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "GENERATE SSP",
        "placeholder": "system=core-banking owner=CISO controls=NIST-800-53",
        "button": "Generate",
        "response": "[SSP] System Security Plan drafted for core-banking.\n[SSP] 18 control families documented per NIST 800-53.\n[SSP] Authorization boundary defined.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "generate sar",
          "out": "[SAR] Security Assessment Report compiled.\n[SAR] 9 findings: 2 Critical, 3 High, 4 Moderate.\n[SAR] Recommendations and POAM attached.",
          "task": "t4"
        },
        {
          "cmd": "show profile",
          "out": "[ORG] ACME Financial, regulated under PCI DSS and SOX."
        },
        {
          "cmd": "show status",
          "out": "Capstone nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 13",
    "num": 13,
    "group": "GENERAL CONCEPTS",
    "title": "Public Key Infrastructure and Certificates",
    "desc": "Build and operate a PKI: generate key pairs, submit certificate signing requests, validate trust chains, and handle revocation. You issue an X.509 certificate and verify it against a certificate authority and CRL.",
    "objectives": [
      "Explain the roles of CA, RA, CSR, and certificate trust chains.",
      "Generate a key pair and issue an X.509 certificate.",
      "Validate certificate status using CRL and OCSP."
    ],
    "console": {
      "host": "acme-pki01",
      "boot": [
        "[SYS] PKI console online.",
        "[SYS] Root CA and intermediate CA loaded."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the component that vets requester identity"
        },
        {
          "id": "t2",
          "label": "Choose the method giving real-time revocation status"
        },
        {
          "id": "t3",
          "label": "Submit a CSR to issue a server certificate"
        },
        {
          "id": "t4",
          "label": "Verify a certificate trust chain"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Component that validates requester identity before issuance",
          "options": [
            "CRL",
            "Registration Authority",
            "OCSP responder",
            "Key escrow"
          ],
          "correct": "Registration Authority",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Method providing real-time revocation status",
          "options": [
            "CRL download",
            "OCSP",
            "Self-signed check",
            "DNS lookup"
          ],
          "correct": "OCSP",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "SUBMIT CSR",
        "placeholder": "openssl req -new -key web.key -subj /CN=www.acme.com",
        "button": "Sign",
        "response": "[PKI] CSR received for CN=www.acme.com.\n[PKI] Intermediate CA signed certificate, valid 397 days.\n[PKI] Serial 0x4F2A issued, chain: Root -> Intermediate -> Leaf.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "openssl verify www.acme.com.crt",
          "out": "[PKI] Chain: Root CA -> Intermediate -> Leaf\n[PKI] Result: www.acme.com.crt OK",
          "task": "t4"
        },
        {
          "cmd": "show crl",
          "out": "[PKI] CRL last updated 2026-06-27, 3 revoked serials listed."
        },
        {
          "cmd": "show status",
          "out": "PKI nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 14",
    "num": 14,
    "group": "GENERAL CONCEPTS",
    "title": "Hashing and File Integrity Verification",
    "desc": "Apply cryptographic hashing to guarantee integrity: compute SHA-256 digests, compare hashes to detect tampering, and use HMAC for authenticated integrity. You verify a downloaded file against its published checksum.",
    "objectives": [
      "Differentiate hashing from encryption and explain integrity guarantees.",
      "Compute and compare SHA-256 digests to detect tampering.",
      "Apply HMAC and salting to strengthen integrity and password storage."
    ],
    "console": {
      "host": "acme-hash01",
      "boot": [
        "[SYS] Integrity verification console online.",
        "[SYS] Hash library: MD5, SHA-1, SHA-256, HMAC."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the property a hash provides (not confidentiality)"
        },
        {
          "id": "t2",
          "label": "Choose the technique adding a key to a hash"
        },
        {
          "id": "t3",
          "label": "Compute the SHA-256 digest of a file"
        },
        {
          "id": "t4",
          "label": "Compare two digests to detect tampering"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Security property a hash function provides",
          "options": [
            "Confidentiality",
            "Integrity",
            "Availability",
            "Non-repudiation alone"
          ],
          "correct": "Integrity",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Technique combining a secret key with a hash",
          "options": [
            "Salting",
            "HMAC",
            "Base64",
            "Nonce"
          ],
          "correct": "HMAC",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "HASH FILE",
        "placeholder": "sha256sum installer.iso",
        "button": "Compute",
        "response": "[HASH] SHA-256 of installer.iso:\n[HASH] 9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08\n[HASH] 256-bit digest, deterministic and one-way.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "compare published computed",
          "out": "[HASH] Published: 9f86d0...0a08\n[HASH] Computed: 9f86d0...0a08\n[HASH] Match: file integrity verified, no tampering.",
          "task": "t4"
        },
        {
          "cmd": "list algorithms",
          "out": "[HASH] MD5(broken), SHA-1(weak), SHA-256, SHA-3, HMAC"
        },
        {
          "cmd": "show status",
          "out": "Hash console nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 15",
    "num": 15,
    "group": "ARCHITECTURE",
    "title": "Network Segmentation and Zero Trust",
    "desc": "Design segmented network zones and enforce Zero Trust principles: define VLANs and DMZ placement, apply least privilege, and require continuous verification. You build microsegmentation policy and test lateral movement containment.",
    "objectives": [
      "Design network zones using VLANs, DMZ, and microsegmentation.",
      "Apply Zero Trust principles of never trust and always verify.",
      "Demonstrate how segmentation contains lateral movement."
    ],
    "console": {
      "host": "acme-zt01",
      "boot": [
        "[SYS] Zero Trust policy engine online.",
        "[SYS] Topology: DMZ, internal, restricted PCI zones."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select where to place an internet-facing web server"
        },
        {
          "id": "t2",
          "label": "Choose the Zero Trust core principle"
        },
        {
          "id": "t3",
          "label": "Define a microsegmentation policy between zones"
        },
        {
          "id": "t4",
          "label": "Test lateral movement containment"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Placement for an internet-facing web server",
          "options": [
            "Internal LAN",
            "DMZ",
            "PCI restricted zone",
            "Management VLAN"
          ],
          "correct": "DMZ",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Core Zero Trust principle",
          "options": [
            "Trust the internal network",
            "Never trust, always verify",
            "Allow by default",
            "Perimeter is enough"
          ],
          "correct": "Never trust, always verify",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "SEGMENTATION POLICY",
        "placeholder": "deny web-zone -> pci-zone except tcp/443 verified",
        "button": "Apply",
        "response": "[ZT] Policy compiled between web-zone and pci-zone.\n[ZT] Default deny enforced, only verified TCP/443 allowed.\n[ZT] Identity and device posture checks required per flow.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "test lateral web-host pci-db",
          "out": "[ZT] Attempt web-host -> pci-db on tcp/1433\n[ZT] Blocked by segmentation policy, lateral movement contained.",
          "task": "t4"
        },
        {
          "cmd": "show zones",
          "out": "[ZT] DMZ, Internal, PCI-Restricted, Management"
        },
        {
          "cmd": "show status",
          "out": "Zero Trust engine nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 16",
    "num": 16,
    "group": "ARCHITECTURE",
    "title": "Secure Protocols and Wireless Hardening",
    "desc": "Replace insecure protocols with hardened equivalents and lock down wireless networks. You swap plaintext services for encrypted versions and configure WPA3 enterprise authentication for a corporate SSID.",
    "objectives": [
      "Replace insecure protocols with secure equivalents (FTP to SFTP, Telnet to SSH, HTTP to HTTPS).",
      "Configure WPA3 and 802.1X enterprise wireless authentication.",
      "Identify wireless threats such as rogue APs and evil twins."
    ],
    "console": {
      "host": "acme-wifi01",
      "boot": [
        "[SYS] Network hardening console online.",
        "[SYS] Corporate SSID and protocol audit loaded."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the secure replacement for Telnet"
        },
        {
          "id": "t2",
          "label": "Choose the strongest wireless security standard"
        },
        {
          "id": "t3",
          "label": "Configure WPA3 enterprise on the corporate SSID"
        },
        {
          "id": "t4",
          "label": "Scan for rogue access points"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Secure replacement for Telnet",
          "options": [
            "FTP",
            "SSH",
            "SNMPv1",
            "HTTP"
          ],
          "correct": "SSH",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Strongest current wireless security standard",
          "options": [
            "WEP",
            "WPA2-PSK",
            "WPA3-Enterprise",
            "Open"
          ],
          "correct": "WPA3-Enterprise",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "WIRELESS CONFIG",
        "placeholder": "ssid=ACME-Corp auth=WPA3-Enterprise 802.1X radius=10.0.0.9",
        "button": "Apply",
        "response": "[WIFI] SSID ACME-Corp set to WPA3-Enterprise.\n[WIFI] 802.1X with RADIUS 10.0.0.9 enabled, SAE handshake active.\n[WIFI] Management frame protection enforced.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "scan rogue-ap",
          "out": "[WIFI] Detected SSID ACME-Corp on unknown BSSID aa:bb:cc:11:22:33\n[WIFI] Signal mismatch flags possible evil twin, alert raised.",
          "task": "t4"
        },
        {
          "cmd": "list protocols",
          "out": "[NET] SFTP:22, SSH:22, HTTPS:443, LDAPS:636 active."
        },
        {
          "cmd": "show status",
          "out": "Wireless console nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 17",
    "num": 17,
    "group": "SECURITY OPS",
    "title": "SIEM Log Correlation and Threat Hunting",
    "desc": "Hunt threats by correlating events across sources in a SIEM. You write correlation queries, pivot on indicators of compromise, and confirm a multi-stage attack chain from authentication and network logs.",
    "objectives": [
      "Aggregate and correlate logs from multiple sources in a SIEM.",
      "Write queries to detect suspicious patterns and IOCs.",
      "Reconstruct an attack chain through threat hunting."
    ],
    "console": {
      "host": "acme-siem01",
      "boot": [
        "[SYS] SIEM correlation engine online.",
        "[SYS] Ingesting auth, firewall, DNS, and endpoint logs."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the pattern indicating credential brute force"
        },
        {
          "id": "t2",
          "label": "Choose the correct artifact type for a malicious IP"
        },
        {
          "id": "t3",
          "label": "Run a correlation query for the attack chain"
        },
        {
          "id": "t4",
          "label": "Pivot on an IOC to find related events"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Pattern indicating credential brute force",
          "options": [
            "Single successful login",
            "Many failed logins then one success",
            "Scheduled backup job",
            "DNS cache refresh"
          ],
          "correct": "Many failed logins then one success",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Artifact type for a known-bad IP address",
          "options": [
            "Baseline",
            "Indicator of compromise",
            "Heartbeat",
            "False positive"
          ],
          "correct": "Indicator of compromise",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "SIEM QUERY",
        "placeholder": "search auth fail>10 then success | join firewall by src_ip",
        "button": "Run",
        "response": "[SIEM] 14 failed logins then success from 203.0.113.9.\n[SIEM] Same IP later beacons to C2 over firewall log.\n[SIEM] Correlation rule fired: multi-stage intrusion.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "pivot ip 203.0.113.9",
          "out": "[SIEM] DNS: resolved evil-c2.example\n[SIEM] Endpoint: powershell download on host fin-ws-12\n[SIEM] 3 related events linked to IOC.",
          "task": "t4"
        },
        {
          "cmd": "show sources",
          "out": "[SIEM] auth, firewall, dns, endpoint, proxy ingesting."
        },
        {
          "cmd": "show status",
          "out": "SIEM nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 18",
    "num": 18,
    "group": "SECURITY OPS",
    "title": "Data Protection and DLP",
    "desc": "Protect sensitive data across its lifecycle: classify information, apply protection states, and deploy DLP policies that detect and block exfiltration. You tag regulated data and trigger a DLP rule on an outbound transfer.",
    "objectives": [
      "Classify data and protect it at rest, in transit, and in use.",
      "Apply masking, tokenization, and encryption appropriately.",
      "Configure DLP policies to detect and block exfiltration."
    ],
    "console": {
      "host": "acme-dlp01",
      "boot": [
        "[SYS] Data protection console online.",
        "[SYS] Classification labels and DLP engine loaded."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the protection state for data moving over the wire"
        },
        {
          "id": "t2",
          "label": "Choose the technique replacing data with non-sensitive tokens"
        },
        {
          "id": "t3",
          "label": "Define a DLP rule blocking credit card exfiltration"
        },
        {
          "id": "t4",
          "label": "Classify a file containing customer PII"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "State describing data crossing the network",
          "options": [
            "Data at rest",
            "Data in transit",
            "Data in use",
            "Data archived"
          ],
          "correct": "Data in transit",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Technique substituting sensitive values with tokens",
          "options": [
            "Hashing",
            "Tokenization",
            "Compression",
            "Encoding"
          ],
          "correct": "Tokenization",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "DLP POLICY",
        "placeholder": "block egress if match=PAN(16-digit) channel=email,usb",
        "button": "Deploy",
        "response": "[DLP] Policy deployed: detects 16-digit PAN with Luhn check.\n[DLP] Email attachment with 240 card numbers blocked.\n[DLP] Incident logged, sender and manager notified.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "classify customers.csv",
          "out": "[DLP] Detected names, emails, SSNs.\n[DLP] Label applied: Confidential - PII.\n[DLP] Encryption-at-rest enforced.",
          "task": "t4"
        },
        {
          "cmd": "list labels",
          "out": "[DLP] Public, Internal, Confidential, Restricted"
        },
        {
          "cmd": "show status",
          "out": "DLP console nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 19",
    "num": 19,
    "group": "THREATS AND VULNS",
    "title": "Penetration Testing and Red Team",
    "desc": "Run an authorized penetration test through its phases: scope the engagement, enumerate targets, exploit a weakness, and report findings. You map the kill chain and operate within rules of engagement.",
    "objectives": [
      "Distinguish reconnaissance, scanning, exploitation, and reporting phases.",
      "Compare black-box, gray-box, and white-box testing and rules of engagement.",
      "Map activity to the cyber kill chain and document findings."
    ],
    "console": {
      "host": "acme-pentest",
      "boot": [
        "[SYS] Authorized pentest range online.",
        "[SYS] Rules of engagement: scope 10.50.0.0/24, no DoS."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the test type with no prior knowledge given"
        },
        {
          "id": "t2",
          "label": "Choose the kill chain stage for initial code execution"
        },
        {
          "id": "t3",
          "label": "Enumerate live hosts and services on the range"
        },
        {
          "id": "t4",
          "label": "Exploit a discovered weakness within scope"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Test type with zero prior knowledge of the target",
          "options": [
            "White-box",
            "Gray-box",
            "Black-box",
            "Crystal-box"
          ],
          "correct": "Black-box",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Kill chain stage for gaining initial execution",
          "options": [
            "Reconnaissance",
            "Exploitation",
            "Actions on objectives",
            "Weaponization"
          ],
          "correct": "Exploitation",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "EXPLOIT LAUNCHER",
        "placeholder": "exploit smb-eternalblue target=10.50.0.21",
        "button": "Run",
        "response": "[PENTEST] Target 10.50.0.21 vulnerable to SMBv1 flaw.\n[PENTEST] Exploit succeeded, low-priv shell obtained.\n[PENTEST] Finding logged for report, no persistence left.",
        "task": "t4"
      },
      "commands": [
        {
          "cmd": "nmap -sV 10.50.0.0/24",
          "out": "[NMAP] 10.50.0.21 445/tcp microsoft-ds SMBv1\n[NMAP] 10.50.0.30 80/tcp Apache 2.2 (outdated)",
          "task": "t3"
        },
        {
          "cmd": "show roe",
          "out": "[ROE] Scope 10.50.0.0/24, hours 6pm-6am, no social engineering."
        },
        {
          "cmd": "show status",
          "out": "Pentest range nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 20",
    "num": 20,
    "group": "PROGRAM MGMT",
    "title": "Business Continuity and Disaster Recovery Drill",
    "desc": "Run a disaster recovery drill from plan to validation: select a recovery site strategy, execute failover, and verify recovery objectives are met. You test backups and confirm the organization meets its RTO and RPO.",
    "objectives": [
      "Differentiate hot, warm, and cold recovery sites.",
      "Execute backup and failover and validate against RTO and RPO.",
      "Explain BCP versus DRP and tabletop versus full-interruption testing."
    ],
    "console": {
      "host": "acme-dr01",
      "boot": [
        "[SYS] DR orchestration console online.",
        "[SYS] Drill scenario: primary datacenter outage."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the site type ready for near-instant failover"
        },
        {
          "id": "t2",
          "label": "Choose the lowest-cost, lowest-impact test method"
        },
        {
          "id": "t3",
          "label": "Execute failover to the recovery site"
        },
        {
          "id": "t4",
          "label": "Validate recovery against RTO and RPO targets"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Site enabling near-instant failover",
          "options": [
            "Cold site",
            "Warm site",
            "Hot site",
            "Mobile site"
          ],
          "correct": "Hot site",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Lowest-impact DR test method",
          "options": [
            "Full-interruption test",
            "Tabletop exercise",
            "Parallel test",
            "Live cutover"
          ],
          "correct": "Tabletop exercise",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "FAILOVER ORCHESTRATOR",
        "placeholder": "failover core-banking -> dr-hotsite verify=true",
        "button": "Execute",
        "response": "[DR] Replication confirmed current to last 12 minutes.\n[DR] Failover to hot site complete in 38 minutes.\n[DR] Services healthy at recovery site.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "validate rto rpo",
          "out": "[DR] RTO target 1h, actual 38m: PASS\n[DR] RPO target 15m, actual 12m: PASS\n[DR] Drill objectives met.",
          "task": "t4"
        },
        {
          "cmd": "show backups",
          "out": "[DR] Last full backup 02:00, incrementals every 15m, verified."
        },
        {
          "cmd": "show status",
          "out": "DR console nominal."
        }
      ]
    }
  }
];
