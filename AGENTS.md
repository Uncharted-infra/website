# AGENTS.md — Uncharted Context + Cursor Plan Mode

This repository is being refactored into **Uncharted**.

Uncharted is an **AI travel agent**, not a general chatbot and not a generic SaaS dashboard.

The product’s purpose:
Users can talk to Uncharted to **explore destinations, plan trips, and book travel**.
The website is primarily a **consumer landing experience with an embedded chat interface**, similar in interaction model to ChatGPT, Lovable, or Manus — but focused entirely on real-world travel.

The agent should feel like:

> a travel agent in your pocket

Not a productivity tool.
Not a developer platform.
Not a B2B analytics dashboard.

---

# Critical Design Rule (VERY IMPORTANT)

You are **NOT allowed to redesign the UI system**.

The current UI components, typography, spacing scale, color tokens, and design language are the source of truth.

You may:
• Reuse components
• Recompose components
• Extend components carefully
• Add new components that MATCH the system

You may NOT:
• Replace the design system
• Introduce a second UI library
• Change typography scale
• Change color primitives
• Create “one-off” styled components that break consistency
• Convert the site into a dashboard aesthetic

This repo should visually feel like **the same product**, just with more pages and functionality.

If you believe a change to the design system is necessary:
You must explain why and ask before doing it.

---

# Typography

The site uses two fonts:

* **Fenix** — Default font for the rest of the site. Use for all landing content, headings, paragraphs, and UI text. Applied via `font-landing` on the body.
* **Departure Mono** — Use **only when explicitly mentioned**. Apply via the `font-navbar-title` class. Currently used for the navbar (logo, nav items, buttons).

Do not introduce additional fonts without explicit approval.

---

# Website Goals

The website is not documentation and not an admin panel.

It is a **conversion-focused consumer landing site** whose job is to:

1. Explain what Uncharted does in seconds
2. Let users try the agent immediately
3. Build trust
4. Encourage account creation

The homepage must communicate:
• This is an AI travel agent
• It can actually handle travel logistics
• It works before, during, and after a trip

Avoid enterprise language like:
“workflow optimization”
“productivity platform”
“data pipeline”
“AI workspace”

Use consumer language:
“trip”
“travel”
“weekend”
“book”
“plans”
“where to go”

---

# Chat Interface Principles

The chat is the **primary feature**, not a support widget.

It must feel like:
• the product itself
• interactive
• immediate

The landing page should guide users to naturally type messages like:
“weekend trips from chicago”
“plan a 5 day italy trip”
“find hotels in kyoto”

Do NOT treat chat as a contact form.

---

# Maps (Internal Concept)

Uncharted internally measures agent work using “Maps”.

A Map represents when the agent **actively performs travel work** such as:
• searching real travel options
• building itineraries
• organizing plans
• preparing bookings

Users do not need to see implementation details in the UI, but the site should communicate that:
Uncharted is free to explore ideas, and becomes more powerful when actively helping.

---

# Cursor Plan Mode

Review this plan thoroughly before making any code changes. For every issue or recommendation, explain the concrete tradeoffs, give me an opinionated recommendation, and ask for my input before assuming a direction.

### My engineering preferences (use these to guide your recommendations):

* **DRY is important** — flag repetition aggressively.
* **Well-tested code is non-negotiable**; I'd rather have too many tests than too few.
* I want code that's **“engineered enough”** — not under-engineered (fragile, hacky) and not over-engineered (premature abstraction, unnecessary complexity).
* I err on the side of handling more edge cases, not fewer; **thoughtfulness > speed**.
* Bias toward **explicit over clever**.

---

## 1. Architecture review

**Evaluate:**

* Overall system design and component boundaries.
* Dependency graph and coupling concerns.
* Data flow patterns and potential bottlenecks.
* Scaling characteristics and single points of failure.
* Security architecture (auth, data access, API boundaries).

---

## 2. Code quality review

**Evaluate:**

* Code organization and module structure.
* DRY violations — be aggressive here.
* Error handling patterns and missing edge cases (call these out explicitly).
* Technical debt hotspots.
* Areas that are over-engineered or under-engineered relative to my preferences.

---

## 3. Test review

**Evaluate:**

* Test coverage gaps (unit, integration, e2e).
* Test quality and assertion strength.
* Missing edge case coverage — be thorough.
* Untested failure modes and error paths.

---

## 4. Performance review

**Evaluate:**

* N+1 queries and database access patterns.
* Memory-usage concerns.
* Caching opportunities.
* Slow or high-complexity code paths.

---

## For each issue you find

For every specific issue (bug, smell, design concern, or risk):

* Describe the problem concretely, with file and line references.
* Present **2–3 options**, including *“do nothing”* where that’s reasonable.
* For each option, specify: implementation effort, risk, impact on other code, and maintenance burden.
* Give me your recommended option and why, mapped to my preferences above.
* Then explicitly ask whether I agree or want to choose a different direction before proceeding.

---

## Workflow and interaction

* Do not assume my priorities on timeline or scale.
* After each section, pause and ask for my feedback before moving on.

---

## BEFORE YOU START

Ask if I want one of two options:

**1/ BIG CHANGE:** Work through this interactively, one section at a time
(Architecture → Code Quality → Tests → Performance) with at most **4 top issues** in each section.

**2/ SMALL CHANGE:** Work through interactively **ONE question per review section**.

---

## FOR EACH STAGE OF REVIEW

* Output the explanation and pros and cons of each stage’s questions **AND** your opinionated recommendation and why.
* Then use `AskUserQuestion`.
* Also **NUMBER issues** and then give **LETTERS for options**.
* When using `AskUserQuestion`, make sure each option clearly labels the **issue NUMBER** and **option LETTER** so the user doesn’t get confused.
* Make the **recommended option always the 1st option**.
