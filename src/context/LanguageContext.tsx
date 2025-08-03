import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  currentLang: string;
  translations: Record<string, Record<string, string>>;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    navServices: "Services",
    navAdvisor: "Packaging",
    navPricing: "Pricing",
    navEstimator: "Estimator",
    navSubscriptions: "Subscriptions",
    navTestimonials: "Testimonials",
    navContact: "Contact",
    navTrackShipment: "Track Shipment",
    heroTitle: "Lightning-Fast Shipping for Your",
    heroTitleSpan: "E-commerce Business",
    heroSubtitle: "We empower small businesses with professional handling and delivery in 3 business days, guaranteed.",
    heroCTA: "Get Started",
    trackTitle: "Track Your Shipment",
    trackSubtitle: "Enter your tracking number to see the status of your package.",
    trackPlaceholder: "Enter your tracking number (e.g., FE123456789)",
    trackButton: "Track",
    explainButton: "✨ Explain This Status",
    servicesTitle: "Our Promise to You",
    servicesSubtitle: "We handle every package with care and ensure it reaches its destination on time.",
    service1Title: "Professional Handling",
    service1Desc: "Our expert team is trained to handle your products with the utmost care, ensuring they arrive in perfect condition. We treat every package as if it were our own.",
    service2Title: "Max 3 Business Days Delivery",
    service2Desc: "Speed is crucial for e-commerce. We guarantee delivery within a maximum of three business days, helping you keep your customers happy and loyal.",
    advisorTitle: "Packaging Advisor",
    advisorSubtitle: "Not sure how to pack your item? Describe it below and our AI assistant will give you expert advice.",
    advisorPlaceholder: "e.g., a fragile glass vase, a stack of books, a laptop...",
    advisorButton: "✨ Get Packaging Advice",
    pricingTitle: "Our Pricing",
    pricingSubtitle: "Simple, transparent pricing for our partners.",
    smallOrdersTitle: "Small Orders",
    smallOrdersPrice: "75 LE",
    smallOrdersDesc: "Flat rate for all our partners across Greater Cairo.",
    largeOrdersTitle: "Large Orders",
    largeOrdersDesc: "For bulk shipments or special requirements, please get in touch for a custom price quotation.",
    largeOrdersCTA: "Request a Quote",
    estimatorTitle: "Bulk Shipment Estimator",
    estimatorSubtitle: "Get a preliminary quote for your large shipment. Describe your items and destination below.",
    estimatorPlaceholder: "e.g., 50 boxes of t-shirts, each weighing 5kg, from Maadi to Zamalek...",
    estimatorButton: "✨ Get Estimated Quote",
    subscriptionsTitle: "Exclusive Partner Program",
    subscriptionsDesc: "Our partner program is designed for our most loyal customers. Contact us to learn about the criteria and unlock special rates and exclusive offers.",
    subscriptionsCTA: "Learn More",
    testimonialsTitle: "Trusted by Businesses Like Yours",
    testimonialsSubtitle: "Hear what our happy customers have to say about our service.",
    testimonial1: `"Flash Express has been a game-changer for our online store. Their speed and reliability have significantly improved our customer satisfaction."`,
    testimonial1Name: "Omar Hassan",
    testimonial1Role: "Founder, The Cairo Bazaar",
    testimonial2: `"The professional handling is top-notch. We ship fragile items, and with Flash Express, we have peace of mind knowing they'll arrive safely."`,
    testimonial2Name: "Fatima Ali",
    testimonial2Role: "Manager, Alexandria Crafts",
    testimonial3: `"Switching to Flash Express was the best decision we made for our logistics. The 3-day delivery promise is always met. Highly recommended!"`,
    testimonial3Name: "Youssef Mahmoud",
    testimonial3Role: "Owner, Giza Goods",
    contactTitle: "Get in Touch",
    contactSubtitle: "You can reach us via call or WhatsApp for any inquiries.",
    contactNumber: "Customer Service",
    contactCall: "Call Us",
    contactWhatsapp: "WhatsApp",
    chatbotTitle: "Flash Express Assistant",
    chatbotPlaceholder: "Type your message...",
    chatbotSend: "Send",
    chatbotGreeting: "Hello! I'm the Flash Express assistant. How can I help you today?",
    footerSlogan: "Your reliable partner for e-commerce shipping.",
    footerLinks: "Quick Links",
    footerTrack: "Track",
    footerFollow: "Follow Us",
    footerRights: "All rights reserved."
  },
  ar: {
    navServices: "خدماتنا",
    navAdvisor: "نصائح التغليف",
    navPricing: "الأسعار",
    navEstimator: "تقدير الأسعار",
    navSubscriptions: "الاشتراكات",
    navTestimonials: "آراء العملاء",
    navContact: "اتصل بنا",
    navTrackShipment: "تتبع شحنتك",
    heroTitle: "شحن فائق السرعة لأعمالك",
    heroTitleSpan: "التجارية الإلكترونية",
    heroSubtitle: "ندعم الشركات الصغيرة والمتاجر الإلكترونية من خلال التعامل الاحترافي والتوصيل في غضون 3 أيام عمل مضمونة.",
    heroCTA: "ابدأ الآن",
    trackTitle: "تتبع شحنتك",
    trackSubtitle: "أدخل رقم التتبع الخاص بك لمعرفة حالة شحنتك.",
    trackPlaceholder: "أدخل رقم التتبع (مثال: FE123456789)",
    trackButton: "تتبع",
    explainButton: "✨ اشرح هذه الحالة",
    servicesTitle: "وعدنا لك",
    servicesSubtitle: "نتعامل مع كل طرد بعناية فائقة ونضمن وصوله إلى وجهته في الوقت المحدد.",
    service1Title: "تعامل احترافي",
    service1Desc: "فريقنا الخبير مدرب على التعامل مع منتجاتك بأقصى درجات العناية، مما يضمن وصولها في حالة ممتازة. نتعامل مع كل طرد كما لو كان ملكنا.",
    service2Title: "توصيل خلال 3 أيام عمل كحد أقصى",
    service2Desc: "السرعة أمر حاسم في التجارة الإلكترونية. نضمن التوصيل في غضون ثلاثة أيام عمل كحد أقصى، مما يساعدك على إبقاء عملائك سعداء ومخلصين.",
    advisorTitle: "مستشار التغليف",
    advisorSubtitle: "لست متأكدًا من كيفية تغليف أغراضك؟ صفها أدناه وسيقدم لك مساعدنا الذكي نصائح الخبراء.",
    advisorPlaceholder: "مثال: مزهرية زجاجية هشة، مجموعة كتب، جهاز كمبيوتر محمول...",
    advisorButton: "✨ احصل على نصائح التغليف",
    pricingTitle: "أسعارنا",
    pricingSubtitle: "أسعار بسيطة وشفافة لشركائنا.",
    smallOrdersTitle: "الطلبات الصغيرة",
    smallOrdersPrice: "75 جنيه",
    smallOrdersDesc: "سعر ثابت لجميع شركائنا في القاهرة الكبرى.",
    largeOrdersTitle: "الطلبات الكبيرة",
    largeOrdersDesc: "للشحنات الكبيرة أو المتطلبات الخاصة، يرجى التواصل معنا للحصول على عرض أسعار مخصص.",
    largeOrdersCTA: "اطلب عرض سعر",
    estimatorTitle: "مُقدِّر أسعار الشحنات الكبيرة",
    estimatorSubtitle: "احصل على عرض أسعار مبدئي لشحنتك الكبيرة. صف أغراضك والوجهة أدناه.",
    estimatorPlaceholder: "مثال: 50 صندوقًا من القمصان، وزن كل منها 5 كجم، من المعادي إلى الزمالك...",
    estimatorButton: "✨ احصل على تقدير للسعر",
    subscriptionsTitle: "برنامج الشركاء الحصري",
    subscriptionsDesc: "برنامج الشركاء مصمم لعملائنا الأكثر ولاءً. تواصل معنا لمعرفة المعايير والحصول على أسعار وخدمات خاصة.",
    subscriptionsCTA: "اعرف المزيد",
    testimonialsTitle: "موثوق به من قبل شركات مثل شركتك",
    testimonialsSubtitle: "استمع إلى ما يقوله عملاؤنا السعداء عن خدمتنا.",
    testimonial1: `"كانت فلاش إكسبريس نقطة تحول لمتجرنا عبر الإنترنت. لقد أدت سرعتهم وموثوقيتهم إلى تحسين رضا عملائنا بشكل كبير."`,
    testimonial1Name: "عمر حسن",
    testimonial1Role: "مؤسس، بازار القاهرة",
    testimonial2: `"التعامل الاحترافي على أعلى مستوى. نحن نشحن عناصر هشة، ومع فلاش إكسبريس، نشعر براحة البال مع العلم أنها ستصل بأمان."`,
    testimonial2Name: "فاطمة علي",
    testimonial2Role: "مديرة، حرف الإسكندرية",
    testimonial3: `"كان التحول إلى فلاش إكسبريس أفضل قرار اتخذناه بشأن الخدمات اللوجستية لدينا. يتم الوفاء بوعد التسليم لمدة 3 أيام دائمًا. موصى به للغاية!"`,
    testimonial3Name: "يوسف محمود",
    testimonial3Role: "صاحب، بضائع الجيزة",
    contactTitle: "تواصل معنا",
    contactSubtitle: "يمكنك التواصل معنا عبر الاتصال أو واتساب لأي استفسارات.",
    contactNumber: "خدمة العملاء",
    contactCall: "اتصل بنا",
    contactWhatsapp: "واتساب",
    chatbotTitle: "مساعد فلاش إكسبريس",
    chatbotPlaceholder: "اكتب رسالتك...",
    chatbotSend: "إرسال",
    chatbotGreeting: "مرحباً! أنا مساعد فلاش إكسبريس. كيف يمكنني مساعدتك اليوم؟",
    footerSlogan: "شريكك الموثوق به في شحن التجارة الإلكترونية.",
    footerLinks: "روابط سريعة",
    footerTrack: "تتبع",
    footerFollow: "تابعنا",
    footerRights: "جميع الحقوق محفوظة."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('en');

  const setLanguage = (lang: string) => {
    setCurrentLang(lang);
    document.documentElement.setAttribute('lang', lang);
    document.body.classList.toggle('lang-ar', lang === 'ar');
  };

  const t = (key: string): string => {
    return translations[currentLang]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLang, translations, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};