import type { Locale } from "./i18n";

/** Set to false to show the cards without links to the live sites. */
export const showLiveLinks = true;

type Localized = Record<Locale, string>;

export type Project = {
  slug: string;
  url: string;
  domain: string;
  /** Screenshot in /public/work. null renders a typographic placeholder. */
  image: string | null;
  /** lg: 4 of 6 columns, sm: 2 of 6, wide: full row with image beside text. */
  size: "lg" | "sm" | "wide";
  category: Localized;
  title: Localized;
  description: Localized;
  tags: Record<Locale, string[]>;
};

export const projects: Project[] = [
  {
    slug: "bkaraoke",
    url: "https://www.bkaraoke.com.tr",
    domain: "bkaraoke.com.tr",
    image: "/work/bkaraoke.jpg",
    size: "lg",
    category: { en: "Commercial platform", tr: "Ticari platform" },
    title: { en: "B-Karaoke Web Platform", tr: "B-Karaoke Kurumsal Web Platformu" },
    description: {
      en: "Commercial web platform for the entertainment and events sector. User-focused request and contact flows, a mobile-first interface and a storefront that carries the brand identity.",
      tr: "Eğlence ve etkinlik sektörüne yönelik ticari web platformu. Kullanıcı odaklı istek ve iletişim akışları, mobil uyumlu modern arayüz ve marka kimliğini yansıtan vitrin mimarisi.",
    },
    tags: {
      en: ["Brand Identity", "Conversion", "UI/UX", "SEO"],
      tr: ["Kurumsal Kimlik", "Ticari Dönüşüm", "UI/UX", "SEO"],
    },
  },
  {
    slug: "integra",
    url: "https://3646-cyan.vercel.app",
    domain: "3646-cyan.vercel.app",
    image: "/work/integra.jpg",
    size: "sm",
    category: { en: "Operations portal", tr: "Operasyon portalı" },
    title: { en: "Integra 3646 Team & Operations Portal", tr: "Integra 3646 Ekip & Operasyon Portalı" },
    description: {
      en: "Operational team platform built for FRC Team 3646 Integra. One panel for team data, analysis, comparison and operational decisions.",
      tr: "FRC Team 3646 Integra için geliştirilen operasyonel ekip platformu. Takım verisini, analiz ve karşılaştırma süreçlerini ve operasyonel kararları tek panelde toplar.",
    },
    tags: {
      en: ["Team Operations", "Information Architecture", "Data Dashboard"],
      tr: ["Ekip Yönetimi", "Bilgi Mimarisi", "Veri Paneli"],
    },
  },
  {
    slug: "steamedu",
    url: "https://steamedu.vercel.app",
    domain: "steamedu.vercel.app",
    image: "/work/steamedu.jpg",
    size: "sm",
    category: { en: "EdTech platform", tr: "Eğitim teknolojisi" },
    title: { en: "SteamEdu Platform", tr: "SteamEdu Platformu" },
    description: {
      en: "Structured digital resource and learning management interface for STEM initiatives. Modular content delivery for students and instructors on an open-source architecture.",
      tr: "STEM ve eğitim girişimleri için yapılandırılmış dijital kaynak ve eğitim yönetim arayüzü. Öğrenciler ve eğitmenler için modüler içerik sunumu ve açık kaynaklı mimari altyapısı.",
    },
    tags: {
      en: ["Open Source", "Modular", "EdTech"],
      tr: ["Açık Kaynak", "Modüler Yapı", "Eğitim Teknolojileri"],
    },
  },
  {
    slug: "takvimer",
    url: "https://takvimer.vercel.app",
    domain: "takvimer.vercel.app",
    image: null,
    size: "sm",
    category: { en: "SaaS tool", tr: "SaaS aracı" },
    title: { en: "Takvimer", tr: "Takvimer" },
    description: {
      en: "Minimal SaaS planner for daily flow and scheduling. Fast data entry and clear interactions without interface clutter.",
      tr: "Günlük akışı ve planlamayı optimize eden minimalist SaaS ajanda aracı. Arayüz kalabalığından arındırılmış, hızlı veri girişi ve kullanıcı dostu etkileşimler.",
    },
    tags: {
      en: ["SaaS / Utility", "Fast Input", "Micro-interactions"],
      tr: ["SaaS / Utility", "Hızlı Etkileşim", "Mikro-Animasyonlar"],
    },
  },
  {
    slug: "ecoscan",
    url: "https://eco-scan-kappa.vercel.app",
    domain: "eco-scan-kappa.vercel.app",
    image: "/work/ecoscan.jpg",
    size: "sm",
    category: { en: "Data classification", tr: "Veri sınıflandırma" },
    title: { en: "Eco-Scan", tr: "Eco-Scan" },
    description: {
      en: "Scanning and awareness tool for sustainability and waste/material analysis. Classifies inputs and returns a fast analysis with an action plan.",
      tr: "Çevresel sürdürülebilirlik ve atık/materyal analizi odağında dijital tarama ve farkındalık aracı. Girdileri sınıflandırarak hızlı analiz ve aksiyon planı sunar.",
    },
    tags: {
      en: ["Sustainability", "Data Classification", "Clean UI"],
      tr: ["Sürdürülebilirlik", "Veri Sınıflandırma", "Temiz Arayüz"],
    },
  },
  {
    slug: "offtherecord",
    url: "https://offtherecord-web.vercel.app",
    domain: "offtherecord-web.vercel.app",
    image: "/work/offtherecord.jpg",
    size: "wide",
    category: { en: "Media platform", tr: "Medya platformu" },
    title: { en: "Off The Record", tr: "Off The Record" },
    description: {
      en: "Dynamic web platform for publishing digital media. Modern typography and a responsive layout built around the content feed.",
      tr: "Dijital medya içeriklerinin yayınlandığı dinamik web platformu. İçerik akışını öne çıkaran modern tipografi ve responsive düzen.",
    },
    tags: {
      en: ["Media Publishing", "Type-led UI", "Fast Loading"],
      tr: ["Medya Yayını", "Tipografi Odaklı Arayüz", "Hızlı Yükleme"],
    },
  },
];
