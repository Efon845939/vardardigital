export const en = {
  meta: {
    title: "Vardar Digital · Web platforms, dashboards and mobile apps",
    description:
      "Independent software studio. Custom web platforms, operations dashboards and mobile applications, designed, built and shipped to production.",
  },
  nav: {
    work: "Work",
    services: "Services",
    contact: "Contact",
    cta: "Start a Project",
    language: "Language",
    primary: "Main navigation",
    skip: "Skip to content",
  },
  hero: {
    eyebrow: "Independent software studio",
    title: ["We build digital platforms", "that scale."],
    sub: "Custom web platforms, operations dashboards and mobile applications for teams that have outgrown spreadsheets. Designed, built and shipped by the engineers you talk to.",
    primary: "Start a Project",
    secondary: "View Work",
    stackLabel: "Stack",
  },
  work: {
    index: "01",
    label: "Work",
    title: "Selected work",
    sub: "Products we designed, built and deployed. Each card opens the live site.",
    visit: "Visit live site",
    newTab: "opens in a new tab",
    screenshotAlt: "Screenshot of {title}",
  },
  services: {
    index: "02",
    label: "Services",
    title: "What we build",
    sub: "Four disciplines, one engineering standard.",
    items: [
      {
        title: "Custom Web Platforms",
        body: "High-performance web applications on Next.js. Server rendering, structured data and Core Web Vitals are requirements, not extras.",
        points: ["SSR / SSG", "Technical SEO", "CMS or custom admin"],
      },
      {
        title: "Mobile Applications",
        body: "React Native and Flutter clients on the same backend as your web platform. One data model, one auth layer, two stores.",
        points: ["iOS + Android", "Shared API", "Push and offline"],
      },
      {
        title: "Data Dashboards",
        body: "Operational panels that replace spreadsheets: role-based access, filters, charts and exports on top of the data you already have.",
        points: ["Role-based access", "Charts and exports", "Realtime data"],
      },
      {
        title: "UI/UX Modernization",
        body: "Outdated interfaces rebuilt into fast, accessible, conversion-focused products, without breaking the workflows your team depends on.",
        points: ["Audit and redesign", "Design system", "WCAG AA"],
      },
    ],
  },
  contact: {
    index: "03",
    label: "Contact",
    title: "Ready to modernize your digital presence? Let's talk architecture.",
    sub: "Send the scope. We reply within one business day with questions, a technical approach and a rough estimate.",
    emailLabel: "Direct email",
    copy: "Copy",
    copied: "Copied",
    form: {
      name: "Name",
      email: "Email",
      scope: "Project scope",
      scopePlaceholder: "What are you building, who will use it, and what exists today?",
      budget: "Budget range",
      budgetPlaceholder: "Select a range",
      budgets: ["Under $2k", "$2k–5k", "$5k–10k", "$10k+", "Not sure yet"],
      consentBefore: "I agree that Vardar Digital processes the data in this form to respond to my inquiry, as described in the ",
      consentLink: "Privacy Notice",
      consentAfter: ".",
      submit: "Send inquiry",
      sending: "Sending",
      success: "Received. We will reply within one business day.",
      errors: {
        name: "Enter your name.",
        email: "Enter a valid email address.",
        scope: "Describe the project in a few sentences.",
        budget: "Select a budget range.",
        consent: "Consent is required to send the form.",
        server: "The message could not be sent. Email us directly instead:",
        unconfigured: "The form is not connected yet. Email us directly:",
      },
      mailSubject: "Project inquiry",
    },
  },
  footer: {
    rights: "All rights reserved.",
    privacy: "Privacy & KVKK",
    tagline: "Web platforms, dashboards and mobile apps.",
  },
  privacy: {
    title: "Privacy Notice",
    updated: "Last updated: 6 October 2026",
    back: "Back to home",
    sections: [
      {
        heading: "Data controller",
        body: "Vardar Digital is the data controller for the personal data described here. Contact: {email}.",
      },
      {
        heading: "What we process",
        body: "When you use the contact form we process your name, email address, project scope and budget range. We do not run analytics, advertising or tracking scripts.",
      },
      {
        heading: "Purpose and legal basis",
        body: "We use this data only to reply to your inquiry and to prepare a proposal. The legal basis is taking steps at your request before entering into a contract (KVKK Art. 5/2-c, GDPR Art. 6/1-b) and your explicit consent.",
      },
      {
        heading: "Transfers",
        body: "Form messages are delivered through the email provider Resend and stored in Google (Gmail). Both providers may process data outside Türkiye. This transfer relies on the explicit consent you give when sending the form.",
      },
      {
        heading: "Retention",
        body: "If no business relationship follows, inquiry data is deleted within 12 months of our reply.",
      },
      {
        heading: "Cookies",
        body: "This site sets no tracking or advertising cookies. One strictly necessary cookie (NEXT_LOCALE) remembers your language choice. The hosting provider may keep standard server logs for security.",
      },
      {
        heading: "Your rights",
        body: "Under KVKK Art. 11 and the GDPR you can request access, correction, deletion or restriction of your data and object to processing. Send requests to {email}. We respond within 30 days.",
      },
    ],
  },
};

export type Dictionary = typeof en;
