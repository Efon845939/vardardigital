import type { Dictionary } from "./en";

export const tr: Dictionary = {
  meta: {
    title: "Vardar Digital · Web platformları, paneller ve mobil uygulamalar",
    description:
      "Bağımsız yazılım stüdyosu. Özel web platformları, operasyon panelleri ve mobil uygulamalar; tasarlanır, geliştirilir ve yayına alınır.",
  },
  nav: {
    work: "İşler",
    services: "Hizmetler",
    contact: "İletişim",
    cta: "Proje Başlat",
    language: "Dil",
    primary: "Ana menü",
    skip: "İçeriğe geç",
  },
  hero: {
    eyebrow: "Bağımsız yazılım stüdyosu",
    title: ["Ölçeklenen dijital", "platformlar inşa ediyoruz."],
    sub: "Tablolarla yönetilemeyecek kadar büyüyen ekipler için özel web platformları, operasyon panelleri ve mobil uygulamalar. Konuştuğunuz mühendisler tarafından tasarlanır, geliştirilir ve yayına alınır.",
    primary: "Proje Başlat",
    secondary: "İşleri İncele",
    stackLabel: "Teknoloji",
  },
  work: {
    index: "01",
    label: "İşler",
    title: "Seçili işler",
    sub: "Tasarladığımız, geliştirdiğimiz ve yayına aldığımız ürünler. Her kart canlı siteyi açar.",
    visit: "Canlı siteyi aç",
    newTab: "yeni sekmede açılır",
    screenshotAlt: "{title} ekran görüntüsü",
  },
  services: {
    index: "02",
    label: "Hizmetler",
    title: "Ne inşa ediyoruz",
    sub: "Dört disiplin, tek mühendislik standardı.",
    items: [
      {
        title: "Özel Web Platformları",
        body: "Next.js üzerinde yüksek performanslı web uygulamaları. Sunucu tarafı render, yapılandırılmış veri ve Core Web Vitals ek özellik değil, gereksinimdir.",
        points: ["SSR / SSG", "Teknik SEO", "CMS veya özel yönetim paneli"],
      },
      {
        title: "Mobil Uygulamalar",
        body: "Web platformunuzla aynı backend'e bağlı React Native ve Flutter istemcileri. Tek veri modeli, tek kimlik doğrulama katmanı, iki mağaza.",
        points: ["iOS + Android", "Ortak API", "Bildirim ve çevrimdışı"],
      },
      {
        title: "Veri Panelleri",
        body: "Tabloların yerini alan operasyon panelleri: mevcut verinizin üzerinde rol bazlı erişim, filtreler, grafikler ve dışa aktarma.",
        points: ["Rol bazlı erişim", "Grafik ve dışa aktarma", "Gerçek zamanlı veri"],
      },
      {
        title: "UI/UX Modernizasyonu",
        body: "Eskimiş arayüzler, ekibinizin dayandığı iş akışları bozulmadan hızlı, erişilebilir ve dönüşüm odaklı ürünlere çevrilir.",
        points: ["Analiz ve yeniden tasarım", "Tasarım sistemi", "WCAG AA"],
      },
    ],
  },
  contact: {
    index: "03",
    label: "İletişim",
    title: "Dijital altyapınızı modernize etmeye hazır mısınız? Mimariyi konuşalım.",
    sub: "Kapsamı gönderin. Bir iş günü içinde sorularımız, teknik yaklaşımımız ve kaba bir tahminle dönüyoruz.",
    emailLabel: "Doğrudan e-posta",
    copy: "Kopyala",
    copied: "Kopyalandı",
    form: {
      name: "Ad Soyad",
      email: "E-posta",
      scope: "Proje kapsamı",
      scopePlaceholder: "Ne inşa ediyorsunuz, kim kullanacak ve bugün elinizde ne var?",
      budget: "Bütçe aralığı",
      budgetPlaceholder: "Bir aralık seçin",
      budgets: ["30.000 ₺ altı", "30–60 bin ₺", "60–120 bin ₺", "120 bin ₺ üzeri", "Henüz belirsiz"],
      consentBefore: "Bu formdaki verilerin talebime yanıt verilmesi amacıyla ",
      consentLink: "Aydınlatma Metni",
      consentAfter: "'nde açıklandığı şekilde işlenmesini kabul ediyorum.",
      submit: "Talebi gönder",
      sending: "Gönderiliyor",
      success: "Talebiniz alındı. Bir iş günü içinde dönüş yapacağız.",
      errors: {
        name: "Adınızı yazın.",
        email: "Geçerli bir e-posta adresi yazın.",
        scope: "Projeyi birkaç cümleyle anlatın.",
        budget: "Bir bütçe aralığı seçin.",
        consent: "Formu göndermek için onay gerekli.",
        server: "Mesaj gönderilemedi. Bize doğrudan e-posta gönderin:",
        unconfigured: "Form henüz bağlanmadı. Bize doğrudan e-posta gönderin:",
      },
      mailSubject: "Proje talebi",
    },
  },
  footer: {
    rights: "Tüm hakları saklıdır.",
    privacy: "Gizlilik ve KVKK",
    tagline: "Web platformları, paneller ve mobil uygulamalar.",
  },
  privacy: {
    title: "KVKK Aydınlatma Metni",
    updated: "Son güncelleme: 6 Ekim 2026",
    back: "Ana sayfaya dön",
    sections: [
      {
        heading: "Veri sorumlusu",
        body: "Bu metinde açıklanan kişisel veriler bakımından veri sorumlusu Vardar Digital'dir. İletişim: {email}.",
      },
      {
        heading: "İşlenen veriler",
        body: "İletişim formunu kullandığınızda ad soyad, e-posta adresi, proje kapsamı ve bütçe aralığı bilgileriniz işlenir. Sitede analiz, reklam veya takip betiği çalıştırılmaz.",
      },
      {
        heading: "İşleme amacı ve hukuki sebep",
        body: "Bu veriler yalnızca talebinize yanıt vermek ve teklif hazırlamak için kullanılır. Hukuki sebep, bir sözleşmenin kurulmasıyla doğrudan ilgili olması (KVKK m.5/2-c) ve açık rızanızdır.",
      },
      {
        heading: "Aktarım",
        body: "Form iletileri e-posta altyapısı sağlayıcısı Resend üzerinden iletilir ve Google (Gmail) üzerinde saklanır. Bu sağlayıcılar verileri Türkiye dışında işleyebilir. Bu aktarım, formu gönderirken verdiğiniz açık rızaya dayanır.",
      },
      {
        heading: "Saklama süresi",
        body: "Bir iş ilişkisi kurulmazsa talep verileri, yanıtımızdan itibaren en geç 12 ay içinde silinir.",
      },
      {
        heading: "Çerezler",
        body: "Bu site takip veya reklam çerezi kullanmaz. Dil tercihinizi hatırlamak için tek bir zorunlu çerez (NEXT_LOCALE) kullanılır. Barındırma sağlayıcısı güvenlik amacıyla standart sunucu kayıtları tutabilir.",
      },
      {
        heading: "Haklarınız",
        body: "KVKK m.11 kapsamında verilerinize erişme, düzeltilmesini, silinmesini veya işlenmesinin kısıtlanmasını isteme ve işlemeye itiraz etme haklarına sahipsiniz. Taleplerinizi {email} adresine gönderebilirsiniz. 30 gün içinde yanıt veririz.",
      },
    ],
  },
};
