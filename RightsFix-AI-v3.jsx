import { useState, useRef, useEffect } from "react";

// ═══════════════════════════════════════════════════════════════
// RIGHTSFIX AI v3
// Created by Bagbenga Bamodu | Access to Justice Advocate
// Citizens Advice Generalist Adviser | Founder, RightsFix AI
// ═══════════════════════════════════════════════════════════════

const SYSTEM_PROMPT = `You are RightsFix AI — a plain English rights navigator for everyday people in the UK experiencing problems with companies, landlords, employers, public bodies, or services.

Created by Bagbenga Bamodu — Access to Justice Advocate, Citizens Advice Generalist Adviser, and founder of RightsFix AI.

Core belief: "Most justice problems start with confusion, not conflict."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REGULATORY SAFETY — NON-NEGOTIABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These rules override everything else in this prompt:

1. LANGUAGE OF CERTAINTY — NEVER state legal outcomes as facts.
✅ Always use: "may", "could", "might", "in some cases", "it is possible that"
❌ Never use: "will", "you are entitled to", "can overturn", "you have a right to [specific outcome]"

2. JUDICIAL REVIEW, COURT & TRIBUNAL ROUTES — Whenever these are mentioned, ALWAYS begin with this exact line on its own, before any explanation:
"⚠️ This route involves significant legal complexity and cost. You must take specialist advice from a qualified solicitor or barrister before considering any steps."

3. COMPENSATION & FINANCIAL CLAIMS — Always qualify: "You may be able to claim..." Never "You can claim..." or "You are entitled to..."

4. URGENT SITUATIONS — If the situation appears urgent (imminent eviction, health risk, immediate financial harm), always add:
"If this is urgent, please contact Citizens Advice directly on 0800 144 8848 (free) or visit your nearest Citizens Advice bureau."

5. REGULATORY INDEPENDENCE — RightsFix AI is not affiliated with the Law Society, Solicitors Regulation Authority (SRA), Bar Council, Financial Conduct Authority, or any regulatory body. Never imply otherwise.

6. IMMIGRATION, FAMILY COURT, CRIMINAL MATTERS — Do not advise on these topics under any circumstances. Acknowledge the concern with warmth, then signpost directly to specialist services only.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
YOUR OUTPUT STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For every FIRST response on a new issue, produce ALL sections in this exact order.
For FOLLOW-UP questions, apply Smart Follow-Up Rules below — use only sections that genuinely serve the question.

---

**📋 SUMMARY**
2–3 sentences. Warm, empathetic acknowledgment of what the user has described. Make the person feel truly heard before anything else. Never clinical or transactional.

---

**⚖️ GENERAL LAW INFORMATION**
Explain the relevant law in plain English — what rights apply, what legislation governs this, what it means in practice.
- Short paragraphs, 3–4 sentences maximum each
- No jargon without immediate plain-English explanation in the same sentence
- Embed links naturally: e.g. "Under the [Consumer Rights Act 2015](https://www.gov.uk/accepting-returns-and-giving-refunds)..."
- Primary source: gov.uk (always preferred). Secondary: Citizens Advice, ACAS, Shelter, MoneyHelper, official ombudsman sites
- ONLY use links from the Approved Link Library — never generate or guess any URL
- Add where relevant: 📍 *This applies to England and Wales. Rules may differ in Scotland and Northern Ireland.*

End the law section with the Case Strength Indicator on its own line:
🟢 **Strong position** — [one plain sentence] OR
🟡 **Moderate — depends on evidence** — [one plain sentence] OR
🔴 **Complex — specialist advice recommended** — [one plain sentence]

---

**⏰ TIME ALERT** [Only when a genuine legal deadline applies]
One sentence only. Example: "You must refer your complaint to the Financial Ombudsman Service within **6 months** of the company's final response letter."

---

**🚨 RED ALERT**
2–4 bullet points. What the user must NOT do — mistakes that could damage their position. Direct but never alarming. Begin each with "Do not..."

---

**✅ RIGHTSFIX ACTION PLAN**
Begin with:
📁 *Before you start, gather:* [2–4 specific items needed]

Then 5–7 numbered steps. Each must:
- Be specific and actionable (exactly what to do, not what to consider)
- Follow logical escalation: informal → formal complaint → regulator → ombudsman → legal route
- Include relevant links where a step involves visiting a website

---

**🏢 ORGANISATIONS THAT CAN HELP**
MANDATORY — never omit this section.
List 3–5 organisations relevant to this specific situation. Format exactly as:
- **[Organisation Name](link)** — One sentence on what they do and how they help THIS user specifically.
Use only organisations from the Approved Library below.

---

**⚠️ DISCLAIMER** [Smart rules below — do not include automatically]
*RightsFix AI provides general information only, not legal advice. AI can make mistakes and the law may have changed. Always verify with a qualified adviser — Citizens Advice, a solicitor, or the relevant ombudsman. RightsFix AI is not affiliated with the Law Society, SRA, or any regulatory body.*

---

**💬 YOU MIGHT ALSO WANT TO KNOW:**
MANDATORY — include on every single response, first or follow-up, no exceptions.
Always exactly 5 questions in this structure — the labels must appear exactly as shown:

*On your situation:*
→ [Specific question about a detail of this issue]
→ [Specific question from a different angle on the same issue]

*Take action:*
→ Would you like me to help you draft a [complaint letter / formal objection / email to the ombudsman] about this?

*Looking ahead:*
→ [What to do if first steps don't work]
→ [A related issue that commonly follows from this situation]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SMART DISCLAIMER RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SHOW disclaimer when:
- First response on any new topic
- Issue involves financial loss over £200, health risk, housing security, or job loss
- Case strength is 🔴 Complex
- Court, tribunal, or Judicial Review is mentioned

DO NOT show when:
- User asks a follow-up on the same topic already covered
- User asks you to draft a letter or document
- User asks what an organisation does or how to contact them
- User asks a simple clarifying question
- Disclaimer already shown earlier in this conversation on this topic

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SMART FOLLOW-UP RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

On follow-up questions, use only sections that serve that question:
"Help me write the letter" → Draft the letter only. No summary or law section.
"What if they ignore me?" → Updated Action Plan + Organisations. Brief law update only if it changes.
"What does [term] mean?" → Plain English definition. Nothing else.
"Can I claim compensation?" → Law (compensation angle) + Case Strength + Action Plan focused on that route.
"What happens at court/tribunal?" → Begin with the Regulatory Safety Rule 2 warning. Then Law + Action Plan.

The 5 Follow-Up Questions appear on every response without exception — first responses and all follow-ups.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPROVED LINK LIBRARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

GOV.UK:
Consumer rights & refunds: https://www.gov.uk/accepting-returns-and-giving-refunds
Online shopping: https://www.gov.uk/online-and-distance-selling-for-businesses
Private renting repairs: https://www.gov.uk/private-renting-tenants/repairs
Tenancy deposits: https://www.gov.uk/tenancy-deposit-protection
Eviction: https://www.gov.uk/eviction-and-illegal-eviction
Redundancy: https://www.gov.uk/rights-redundant-employee
Unfair dismissal: https://www.gov.uk/dismissal
Discrimination: https://www.gov.uk/discrimination-your-rights
Employment tribunals: https://www.gov.uk/employment-tribunals
Statutory sick pay: https://www.gov.uk/statutory-sick-pay
Data protection: https://www.gov.uk/data-protection
Small claims: https://www.gov.uk/make-court-claim-for-money
Benefit appeals: https://www.gov.uk/appeal-benefit-decision
Universal Credit: https://www.gov.uk/universal-credit
NHS complaints: https://www.gov.uk/complain-about-nhs-england

CITIZENS ADVICE:
Main: https://www.citizensadvice.org.uk/
Consumer: https://www.citizensadvice.org.uk/consumer/
Housing: https://www.citizensadvice.org.uk/housing/
Employment: https://www.citizensadvice.org.uk/work/
Benefits: https://www.citizensadvice.org.uk/benefits/
Debt: https://www.citizensadvice.org.uk/debt-and-money/
Find local: https://www.citizensadvice.org.uk/about-us/contact-us/contact-us/contact-us/

OMBUDSMEN:
Financial Ombudsman: https://www.financial-ombudsman.org.uk/
Housing Ombudsman: https://www.housing-ombudsman.org.uk/
NHS Ombudsman: https://www.ombudsman.org.uk/
Local Government Ombudsman: https://www.lgo.org.uk/
Legal Ombudsman: https://www.legalombudsman.org.uk/
Energy Ombudsman: https://www.ombudsman-services.org/sectors/energy
Communications Ombudsman: https://www.ombudsman-services.org/sectors/communications
Property Ombudsman: https://www.tpos.co.uk/

REGULATORS:
OFGEM: https://www.ofgem.gov.uk/
Ofcom: https://www.ofcom.org.uk/phones-and-broadband/help-and-advice
FCA: https://www.fca.org.uk/consumers
ICO (data): https://ico.org.uk/make-a-complaint/
CMA: https://www.gov.uk/government/organisations/competition-and-markets-authority

SPECIALISTS:
ACAS: https://www.acas.org.uk/
Shelter: https://shelter.org.uk/
MoneyHelper: https://www.moneyhelper.org.uk/
StepChange: https://www.stepchange.org/
Which?: https://www.which.co.uk/consumer-rights
Resolver: https://www.resolver.co.uk/
Law Centres: https://www.lawcentres.org.uk/
National Debtline: https://www.nationaldebtline.org/
Planning Aid England: https://www.rtpi.org.uk/planning-aid/
CPRE: https://www.cpre.org.uk/

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TONE & VOICE — PLAIN ENGLISH ALWAYS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Write like a knowledgeable friend explaining things over a cup of tea — not a solicitor writing to a client, and not a court document.

WORDS TO AVOID — REPLACE WITH PLAIN ENGLISH:
"legislation" → "the law" or "the rules"
"statutory rights" → "your legal rights"
"pursuant to" → "under" or "because of"
"in accordance with" → "following" or "under"
"aforementioned" → "this" or just remove it
"notwithstanding" → "even though" or "despite"
"whereby" → "where" or "which means"
"the relevant provisions" → "the rules"
"hereafter" → "from now on" or remove
"you are entitled to assert" → "you can ask for"
"initiating formal complaint proceedings" → "making a formal complaint"
"exercise your statutory right" → "use your right"

WRITE LIKE THIS — NOT LIKE THIS:
✅ "The Consumer Rights Act 2015 gives you clear rights here — you can ask for a repair, replacement, or full refund."
❌ "You are entitled to assert your statutory consumer rights pursuant to the Consumer Rights Act 2015."

✅ "Your landlord has a legal duty to keep the property in good repair — the law has said this since 1985."
❌ "The landlord is in breach of their repairing obligations pursuant to Section 11 of the Landlord and Tenant Act 1985."

✅ "Your next step is to make a formal complaint — here's how to do it."
❌ "You may wish to consider initiating formal complaint proceedings at this juncture."

✅ "If the company still won't help, you can take your case to the ombudsman — it's free and they have real power."
❌ "In the event that the respondent fails to resolve the matter, you may escalate to the relevant alternative dispute resolution scheme."

SHORT SENTENCES. Short paragraphs — 3 sentences maximum in any block.
Explain every legal term in the same sentence, in brackets or after a dash.
Make the person feel they have real options and that the system can work for them.`;

// ═══════════════════════════════════════════════════════════════
// TOPIC SHORTCUTS
// ═══════════════════════════════════════════════════════════════

const TOPICS = [
  { icon: "🛍️", label: "Faulty goods & refunds", prompt: "I bought a product that is faulty and the company is refusing to give me a refund. What are my rights?" },
  { icon: "🏠", label: "Landlord & housing", prompt: "My landlord is refusing to carry out repairs to my rented property. What can I do?" },
  { icon: "💼", label: "Employment & pay", prompt: "My employer has not paid me correctly this month. What are my rights?" },
  { icon: "💡", label: "Utility disputes", prompt: "My energy company has sent me a very high unexpected bill that I don't think is correct. What can I do?" },
  { icon: "🏥", label: "NHS complaint", prompt: "I want to make a formal complaint about treatment I received from the NHS. How do I do this?" },
  { icon: "📱", label: "Company ignored me", prompt: "I made a formal complaint to a company two months ago and they have not responded at all. What are my options?" },
];

const DEFAULT_QUICK_REPLIES = [
  "What are my rights here?",
  "Help me draft a letter",
  "What if they ignore me?",
];

// ═══════════════════════════════════════════════════════════════
// RESPONSE PARSER — splits main content from follow-up questions
// ═══════════════════════════════════════════════════════════════

function parseResponse(text) {
  const marker = "💬 YOU MIGHT ALSO WANT TO KNOW";
  const idx = text.indexOf(marker);

  if (idx === -1) {
    return { mainContent: text, followUps: [], labels: [] };
  }

  const mainContent = text.slice(0, idx).trim();
  const fuSection = text.slice(idx);
  const lines = fuSection.split("\n");

  const followUps = [];
  const labels = [];
  let currentLabel = "";

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.match(/^\*[^*]+\*:?$/) || trimmed.match(/^\*[^*]+:\*$/)) {
      currentLabel = trimmed.replace(/\*/g, "").replace(/:$/, "").trim();
    } else if (trimmed.startsWith("→")) {
      const q = trimmed.replace(/^→\s*/, "").trim();
      if (q) {
        followUps.push(q);
        labels.push(currentLabel);
      }
    }
  }

  return { mainContent, followUps, labels };
}

// ═══════════════════════════════════════════════════════════════
// EXTRACT ACTION PLAN TEXT FOR COPYING
// ═══════════════════════════════════════════════════════════════

function extractActionPlan(text) {
  const lines = text.split("\n");
  let inPlan = false;
  const planLines = [];
  for (const line of lines) {
    const t = line.trim();
    if (t.includes("✅") && t.includes("ACTION PLAN")) { inPlan = true; continue; }
    if (inPlan) {
      if (/^\*\*[^*]+\*\*$/.test(t) && !t.includes("✅")) break;
      if (t) planLines.push(t.replace(/\*\*/g, "").replace(/\*/g, ""));
    }
  }
  return planLines.length > 0 ? planLines.join("\n") : null;
}

// ═══════════════════════════════════════════════════════════════
// COPY BUTTON COMPONENT
// ═══════════════════════════════════════════════════════════════

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const handle = () => {
    if (navigator.clipboard && text) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      });
    }
  };
  return (
    <button onClick={handle} title="Copy Action Plan"
      style={{ background: copied ? "rgba(110,232,154,0.15)" : "rgba(200,169,110,0.1)", border: `1px solid ${copied ? "rgba(110,232,154,0.4)" : "rgba(200,169,110,0.25)"}`, borderRadius: "6px", padding: "3px 10px", cursor: "pointer", fontSize: "11px", color: copied ? "#6ee89a" : "rgba(200,169,110,0.8)", fontFamily: "inherit", transition: "all 0.2s", display: "flex", alignItems: "center", gap: "4px", whiteSpace: "nowrap" }}>
      {copied ? "✓ Copied" : "📋 Copy"}
    </button>
  );
}

// ═══════════════════════════════════════════════════════════════
// MARKDOWN RENDERER
// ═══════════════════════════════════════════════════════════════

function renderMarkdown(text, { actionPlan } = {}) {
  const lines = text.split("\n");
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      elements.push(<div key={`sp-${i}`} style={{ height: "6px" }} />);
      i++; continue;
    }

    // Bold section header **...**
    if (/^\*\*[^*]+\*\*$/.test(line.trim())) {
      const content = line.trim().replace(/\*\*/g, "");
      const isActionPlan = content.includes("✅") && content.includes("ACTION PLAN");
      elements.push(
        <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "20px", marginBottom: "7px", borderBottom: "1px solid rgba(200,169,110,0.15)", paddingBottom: "5px", gap: "10px" }}>
          <div style={{ fontWeight: "700", fontSize: "12px", letterSpacing: "0.8px", color: "#e8c87a", textTransform: "uppercase" }}>
            {content}
          </div>
          {isActionPlan && actionPlan && <CopyButton text={actionPlan} />}
        </div>
      );
      i++; continue;
    }

    // Numbered list
    if (/^\d+\./.test(line.trim())) {
      const items = [];
      while (i < lines.length && /^\d+\./.test(lines[i].trim())) {
        items.push(<li key={i} style={{ marginBottom: "7px", lineHeight: "1.75", paddingLeft: "4px" }}>{parseInline(lines[i].replace(/^\d+\.\s*/, ""))}</li>);
        i++;
      }
      elements.push(<ol key={`ol-${i}`} style={{ paddingLeft: "22px", margin: "8px 0 4px", color: "#e8e0d0" }}>{items}</ol>);
      continue;
    }

    // Bullet list - or •
    if (/^[-•]\s/.test(line.trim())) {
      const items = [];
      while (i < lines.length && /^[-•]\s/.test(lines[i].trim())) {
        items.push(<li key={i} style={{ marginBottom: "6px", lineHeight: "1.75" }}>{parseInline(lines[i].replace(/^[-•]\s*/, ""))}</li>);
        i++;
      }
      elements.push(<ul key={`ul-${i}`} style={{ paddingLeft: "20px", margin: "8px 0 4px", color: "#e8e0d0" }}>{items}</ul>);
      continue;
    }

    // Italic label *text*
    if (/^\*[^*]+\*$/.test(line.trim())) {
      elements.push(<div key={i} style={{ color: "#c8a96e", fontSize: "11px", letterSpacing: "0.8px", margin: "10px 0 4px", fontStyle: "italic", textTransform: "uppercase" }}>{line.trim().replace(/\*/g, "")}</div>);
      i++; continue;
    }

    // Horizontal rule
    if (/^---+$/.test(line.trim())) {
      elements.push(<hr key={i} style={{ border: "none", borderTop: "1px solid rgba(200,169,110,0.1)", margin: "10px 0" }} />);
      i++; continue;
    }

    // 📁 gather box
    if (line.trim().startsWith("📁")) {
      elements.push(
        <div key={i} style={{ background: "rgba(200,169,110,0.07)", border: "1px solid rgba(200,169,110,0.18)", borderRadius: "8px", padding: "10px 14px", margin: "10px 0 6px", fontSize: "13px", lineHeight: "1.75", color: "#e8e0d0" }}>
          {parseInline(line.trim())}
        </div>
      );
      i++; continue;
    }

    // ⏰ time alert
    if (line.trim().startsWith("⏰")) {
      elements.push(
        <div key={i} style={{ background: "rgba(255,165,0,0.07)", border: "1px solid rgba(255,165,0,0.22)", borderRadius: "8px", padding: "10px 14px", margin: "10px 0", fontSize: "13px", lineHeight: "1.7", color: "#ffd580" }}>
          {parseInline(line.trim())}
        </div>
      );
      i++; continue;
    }

    // 🚨 red alert header
    if (line.trim().startsWith("🚨")) {
      const alertItems = [];
      i++;
      while (i < lines.length && lines[i].trim().startsWith("Do not")) {
        alertItems.push(lines[i].trim());
        i++;
      }
      elements.push(
        <div key={`alert-${i}`} style={{ background: "rgba(210,40,40,0.07)", border: "1px solid rgba(210,40,40,0.22)", borderRadius: "8px", padding: "12px 14px", margin: "10px 0" }}>
          <div style={{ color: "#ff8888", fontWeight: "700", fontSize: "12px", letterSpacing: "0.8px", marginBottom: alertItems.length ? "8px" : "0" }}>🚨 RED ALERT</div>
          {alertItems.length > 0 && (
            <ul style={{ paddingLeft: "16px", margin: 0, color: "#ffaaaa" }}>
              {alertItems.map((item, idx) => (
                <li key={idx} style={{ marginBottom: "5px", lineHeight: "1.7", fontSize: "13px" }}>{parseInline(item.replace(/^[-•]\s*/, ""))}</li>
              ))}
            </ul>
          )}
        </div>
      );
      continue;
    }

    // 🟢🟡🔴 case strength
    if (/^[🟢🟡🔴]/.test(line.trim())) {
      const color = line.startsWith("🟢") ? "#6ee89a" : line.startsWith("🟡") ? "#ffd580" : "#ff8888";
      elements.push(
        <div key={i} style={{ background: `${color}0d`, border: `1px solid ${color}35`, borderRadius: "8px", padding: "8px 12px", margin: "8px 0", fontSize: "13px", color, lineHeight: "1.6" }}>
          {parseInline(line.trim())}
        </div>
      );
      i++; continue;
    }

    // ⚠️ disclaimer
    if (line.trim().startsWith("⚠️")) {
      elements.push(
        <div key={i} style={{ background: "rgba(200,169,110,0.04)", border: "1px solid rgba(200,169,110,0.12)", borderRadius: "8px", padding: "10px 14px", margin: "14px 0 4px", fontSize: "12px", color: "rgba(232,224,208,0.55)", lineHeight: "1.75", fontStyle: "italic" }}>
          {parseInline(line.trim())}
        </div>
      );
      i++; continue;
    }

    // 📍 jurisdiction note
    if (line.trim().startsWith("📍")) {
      elements.push(
        <div key={i} style={{ fontSize: "12px", color: "rgba(200,169,110,0.6)", margin: "6px 0", fontStyle: "italic" }}>
          {parseInline(line.trim())}
        </div>
      );
      i++; continue;
    }

    // Default paragraph
    elements.push(
      <p key={i} style={{ margin: "0 0 8px", lineHeight: "1.8", color: "#e8e0d0", fontSize: "14px" }}>
        {parseInline(line.trim())}
      </p>
    );
    i++;
  }

  return elements;
}

function parseInline(text) {
  const parts = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|\[([^\]]+)\]\(([^)]+)\))/g;
  let last = 0, match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    if (match[0].startsWith("**")) {
      parts.push(<strong key={match.index} style={{ color: "#e8c87a", fontWeight: "600" }}>{match[0].slice(2, -2)}</strong>);
    } else if (match[0].startsWith("*")) {
      parts.push(<em key={match.index} style={{ color: "#c8a96e" }}>{match[0].slice(1, -1)}</em>);
    } else if (match[2] && match[3]) {
      parts.push(<a key={match.index} href={match[3]} target="_blank" rel="noreferrer" style={{ color: "#c8a96e", textDecoration: "underline", textUnderlineOffset: "3px" }}>{match[2]}</a>);
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length === 1 ? parts[0] : parts;
}

// ═══════════════════════════════════════════════════════════════
// FOLLOW-UP QUESTION CHIPS
// ═══════════════════════════════════════════════════════════════

function FollowUpChips({ followUps, labels, onPopulate }) {
  if (!followUps || followUps.length === 0) return null;

  const groupedOrder = ["On your situation", "Take action", "Looking ahead"];
  const grouped = {};
  followUps.forEach((q, i) => {
    const label = labels[i] || "On your situation";
    if (!grouped[label]) grouped[label] = [];
    grouped[label].push(q);
  });

  return (
    <div style={{ marginTop: "14px", paddingTop: "14px", borderTop: "1px solid rgba(200,169,110,0.1)" }}>
      <div style={{ fontSize: "10px", letterSpacing: "1.5px", color: "rgba(200,169,110,0.5)", marginBottom: "10px", textTransform: "uppercase" }}>
        💬 You might also want to know
      </div>
      {groupedOrder.map(label => {
        const questions = grouped[label];
        if (!questions) return null;
        return (
          <div key={label} style={{ marginBottom: "10px" }}>
            <div style={{ fontSize: "10px", color: "rgba(200,169,110,0.4)", marginBottom: "5px", fontStyle: "italic", textTransform: "uppercase", letterSpacing: "0.5px" }}>{label}</div>
            {questions.map((q, qi) => (
              <button key={qi} onClick={() => onPopulate(q)}
                style={{ display: "block", width: "100%", textAlign: "left", background: "rgba(200,169,110,0.05)", border: "1px solid rgba(200,169,110,0.18)", borderRadius: "8px", padding: "9px 13px 9px 13px", marginBottom: "6px", cursor: "pointer", color: "#e0d8c8", fontSize: "13px", lineHeight: "1.5", fontFamily: "inherit", transition: "all 0.18s", position: "relative" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(200,169,110,0.13)"; e.currentTarget.style.borderColor = "rgba(200,169,110,0.35)"; e.currentTarget.style.color = "#e8c87a"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(200,169,110,0.05)"; e.currentTarget.style.borderColor = "rgba(200,169,110,0.18)"; e.currentTarget.style.color = "#e0d8c8"; }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "8px" }}>
                  <span><span style={{ color: "#c8a96e", marginRight: "7px", fontWeight: "600" }}>→</span>{q}</span>
                  <span style={{ fontSize: "10px", color: "rgba(200,169,110,0.4)", flexShrink: 0, marginTop: "2px", letterSpacing: "0.3px" }}>✏️ edit</span>
                </div>
              </button>
            ))}
          </div>
        );
      })}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════════

export default function RightsfixAI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const [quickReplies, setQuickReplies] = useState(DEFAULT_QUICK_REPLIES);
  const bottomRef = useRef(null);
  const textareaRef = useRef(null);

  const populateInput = (text) => {
    setInput(text);
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        textareaRef.current.setSelectionRange(text.length, text.length);
      }
    }, 40);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const userText = (text || input).trim();
    if (!userText || loading) return;

    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    setStarted(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 2500,
          system: SYSTEM_PROMPT,
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();
      const rawReply = data.content?.[0]?.text || "Something went wrong. Please try again.";
      const { mainContent, followUps, labels } = parseResponse(rawReply);
      const actionPlan = extractActionPlan(mainContent);

      setMessages(prev => [...prev, {
        role: "assistant",
        content: mainContent,
        rawContent: rawReply,
        followUps,
        labels,
        actionPlan,
      }]);

      // Update context-aware quick replies from this response
      if (followUps.length >= 3) {
        const situationQ = followUps[0];
        const actionQ = followUps[2];
        const aheadQ = followUps[3] || followUps[4];
        setQuickReplies([
          situationQ?.length > 42 ? situationQ.slice(0, 42) + "…" : situationQ,
          actionQ?.length > 42 ? actionQ.slice(0, 42) + "…" : actionQ,
          aheadQ?.length > 42 ? aheadQ.slice(0, 42) + "…" : aheadQ,
        ].filter(Boolean));
      }
    } catch {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "I'm having trouble connecting right now. Please try again in a moment.",
        followUps: [],
        labels: [],
      }]);
    }
    setLoading(false);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg, #07111f 0%, #0c1e35 55%, #07111f 100%)", fontFamily: "'Georgia', serif", display: "flex", flexDirection: "column", color: "#e8e0d0", overflow: "hidden" }}>

      {/* Background texture */}
      <div style={{ position: "fixed", inset: 0, opacity: 0.022, backgroundImage: "radial-gradient(circle at 2px 2px, #c8a96e 1px, transparent 0)", backgroundSize: "28px 28px", pointerEvents: "none" }} />

      {/* Top accent */}
      <div style={{ height: "3px", background: "linear-gradient(90deg, transparent, #b8924e, #e8c87a, #b8924e, transparent)", flexShrink: 0 }} />

      {/* HEADER */}
      <header style={{ padding: "14px 20px", borderBottom: "1px solid rgba(200,169,110,0.1)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "11px" }}>
          <div style={{ width: "38px", height: "38px", background: "linear-gradient(135deg, #9a7040, #e8c87a)", borderRadius: "9px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px", flexShrink: 0, boxShadow: "0 2px 12px rgba(200,169,110,0.2)" }}>⚖️</div>
          <div>
            <div style={{ fontSize: "17px", fontWeight: "700", color: "#e8c87a", letterSpacing: "0.2px", lineHeight: 1 }}>RightsFix AI</div>
            <div style={{ fontSize: "9px", color: "rgba(200,169,110,0.5)", letterSpacing: "1.8px", marginTop: "3px", textTransform: "uppercase" }}>Everyday Justice Navigator · UK</div>
          </div>
        </div>
        <div style={{ textAlign: "right", fontSize: "10px", color: "rgba(200,169,110,0.38)", lineHeight: 1.6 }}>
          <div>General information only</div>
          <div>Not legal advice</div>
        </div>
      </header>

      {/* MAIN */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" }}>

        {/* WELCOME SCREEN */}
        {!started ? (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "28px 20px", gap: "26px" }}>
            <div style={{ textAlign: "center", maxWidth: "460px" }}>
              <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#c8a96e", marginBottom: "14px", textTransform: "uppercase" }}>Know Your Rights</div>
              <h1 style={{ fontSize: "clamp(21px, 4.5vw, 30px)", fontWeight: "400", lineHeight: 1.4, color: "#f0e8d8", margin: "0 0 13px" }}>
                Something feels wrong.<br />
                <em style={{ color: "#c8a96e" }}>Let's find your options.</em>
              </h1>
              <p style={{ fontSize: "14px", color: "rgba(232,224,208,0.58)", lineHeight: 1.8, margin: 0 }}>
                Describe your situation in plain English. RightsFix AI will explain your rights, what to avoid, and your clear next steps.
              </p>
            </div>

            <div style={{ width: "100%", maxWidth: "480px" }}>
              <div style={{ fontSize: "9px", letterSpacing: "2px", color: "rgba(200,169,110,0.4)", marginBottom: "10px", textAlign: "center", textTransform: "uppercase" }}>Common situations — tap to start</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {TOPICS.map(t => (
                  <button key={t.label} onClick={() => sendMessage(t.prompt)}
                    style={{ background: "rgba(200,169,110,0.055)", border: "1px solid rgba(200,169,110,0.16)", borderRadius: "10px", padding: "11px 12px", cursor: "pointer", color: "#e8e0d0", fontSize: "13px", textAlign: "left", display: "flex", alignItems: "center", gap: "8px", fontFamily: "inherit", transition: "all 0.18s", lineHeight: "1.35" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(200,169,110,0.12)"; e.currentTarget.style.borderColor = "rgba(200,169,110,0.32)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(200,169,110,0.055)"; e.currentTarget.style.borderColor = "rgba(200,169,110,0.16)"; }}>
                    <span style={{ fontSize: "16px", flexShrink: 0 }}>{t.icon}</span>
                    <span>{t.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div style={{ fontSize: "10px", color: "rgba(200,169,110,0.28)", textAlign: "center", lineHeight: 1.7 }}>
              By Bagbenga Bamodu · Access to Justice Advocate<br />
              Citizens Advice Adviser · Not affiliated with the Law Society or SRA
            </div>
          </div>

        ) : (
          /* CHAT */
          <div style={{ flex: 1, overflowY: "auto", padding: "16px 14px", display: "flex", flexDirection: "column", gap: "18px" }}>
            {messages.map((msg, i) => (
              <div key={i}>
                <div style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start", alignItems: "flex-start", gap: "9px" }}>

                  {msg.role === "assistant" && (
                    <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: "linear-gradient(135deg, #9a7040, #e8c87a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", flexShrink: 0, marginTop: "2px", boxShadow: "0 2px 8px rgba(200,169,110,0.15)" }}>⚖️</div>
                  )}

                  <div style={{
                    maxWidth: msg.role === "user" ? "76%" : "90%",
                    background: msg.role === "user" ? "linear-gradient(135deg, #c8a96e, #a87840)" : "rgba(255,255,255,0.038)",
                    border: msg.role === "user" ? "none" : "1px solid rgba(200,169,110,0.11)",
                    borderRadius: msg.role === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                    padding: msg.role === "user" ? "11px 15px" : "14px 16px",
                    fontSize: "14px",
                    color: msg.role === "user" ? "#07111f" : "#e8e0d0",
                    fontWeight: msg.role === "user" ? "600" : "400",
                    lineHeight: msg.role === "user" ? "1.6" : undefined,
                  }}>
                    {msg.role === "user"
                      ? msg.content
                      : (
                        <>
                          {renderMarkdown(msg.content, { actionPlan: msg.actionPlan })}
                          {msg.followUps && msg.followUps.length > 0 && (
                            <FollowUpChips followUps={msg.followUps} labels={msg.labels} onPopulate={populateInput} />
                          )}
                        </>
                      )
                    }
                  </div>
                </div>
              </div>
            ))}

            {/* Loading */}
            {loading && (
              <div style={{ display: "flex", alignItems: "flex-start", gap: "9px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: "linear-gradient(135deg, #9a7040, #e8c87a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", flexShrink: 0 }}>⚖️</div>
                <div style={{ background: "rgba(255,255,255,0.038)", border: "1px solid rgba(200,169,110,0.11)", borderRadius: "14px 14px 14px 4px", padding: "13px 18px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div style={{ fontSize: "11px", color: "rgba(200,169,110,0.5)", marginBottom: "4px", letterSpacing: "0.5px" }}>Checking your rights…</div>
                  <div style={{ display: "flex", gap: "5px" }}>
                    {[0, 1, 2].map(j => (
                      <div key={j} style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#c8a96e", animation: "rfPulse 1.3s ease-in-out infinite", animationDelay: `${j * 0.18}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        )}

        {/* INPUT AREA */}
        <div style={{ padding: "10px 14px 16px", borderTop: "1px solid rgba(200,169,110,0.08)", flexShrink: 0 }}>

          {/* Context-aware quick replies */}
          {started && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "9px" }}>
              {quickReplies.map((q, i) => (
                <button key={i} onClick={() => populateInput(q)}
                  style={{ background: "rgba(200,169,110,0.06)", border: "1px solid rgba(200,169,110,0.16)", borderRadius: "20px", padding: "5px 12px", color: "rgba(200,169,110,0.72)", fontSize: "11px", cursor: "pointer", fontFamily: "inherit", transition: "all 0.18s", lineHeight: "1.4" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(200,169,110,0.13)"; e.currentTarget.style.color = "#e8c87a"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(200,169,110,0.06)"; e.currentTarget.style.color = "rgba(200,169,110,0.72)"; }}>
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Text input */}
          <div style={{ display: "flex", gap: "9px", alignItems: "flex-end", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(200,169,110,0.2)", borderRadius: "12px", padding: "10px 12px" }}>
            <textarea ref={textareaRef} value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKey}
              placeholder="Describe your situation in plain English…"
              rows={1}
              style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "#e8e0d0", fontSize: "14px", fontFamily: "inherit", resize: "none", lineHeight: 1.65, maxHeight: "110px", overflowY: "auto" }} />
            <button onClick={() => sendMessage()} disabled={!input.trim() || loading}
              style={{ width: "34px", height: "34px", borderRadius: "9px", border: "none", background: input.trim() && !loading ? "linear-gradient(135deg, #c8a96e, #e8c87a)" : "rgba(200,169,110,0.1)", cursor: input.trim() && !loading ? "pointer" : "default", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px", flexShrink: 0, transition: "all 0.18s", color: input.trim() && !loading ? "#07111f" : "rgba(200,169,110,0.35)", fontWeight: "700" }}>
              ›
            </button>
          </div>

          <div style={{ textAlign: "center", fontSize: "10px", color: "rgba(200,169,110,0.25)", marginTop: "7px", lineHeight: "1.5" }}>
            General information only · Not legal advice · RightsFix AI by Bagbenga Bamodu<br />
            Not affiliated with the Law Society, SRA, or any regulatory body
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rfPulse { 0%,100%{opacity:.25;transform:scale(.8)} 50%{opacity:1;transform:scale(1.1)} }
        textarea::placeholder{color:rgba(232,224,208,0.25);}
        *{box-sizing:border-box;}
        ::-webkit-scrollbar{width:3px;}
        ::-webkit-scrollbar-thumb{background:rgba(200,169,110,0.16);border-radius:2px;}
      `}</style>
    </div>
  );
}
