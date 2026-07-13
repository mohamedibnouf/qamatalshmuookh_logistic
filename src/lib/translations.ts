import type { Locale } from "@/types";

const en = {
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    fleet: "Fleet",
    whyUs: "Why Us",
    contact: "Contact",
    requestQuote: "Request a Quote",
  },
  hero: {
    headline: "Reliable Transportation Solutions Across Saudi Arabia.",
    subheadline:
      "Premium logistics partner for businesses, factories, and enterprises seeking safe, on-time cargo delivery nationwide.",
    ctaQuote: "Request Quote",
    ctaContact: "Contact Us",
    badge: "Trusted Saudi Logistics Partner",
  },
  about: {
    label: "About Us",
    title: "Driving Excellence in Saudi Transportation",
    description:
      "Qamat Alshmuookh Transportation Company delivers professional cargo and logistics services across the Kingdom of Saudi Arabia. We combine modern fleet technology with experienced drivers to move your business forward with confidence.",
    mission: "Mission",
    missionText:
      "To provide reliable, safe, and efficient transportation solutions that empower businesses to grow without logistical barriers.",
    vision: "Vision",
    visionText:
      "To be the most trusted logistics partner in Saudi Arabia, recognized for excellence, innovation, and unwavering commitment to quality.",
    values: "Values",
    valuesText:
      "Integrity, safety, punctuality, and customer-first service guide every delivery we make.",
    cards: {
      safety: { title: "Safety First", desc: "Rigorous safety protocols and trained professionals on every route." },
      drivers: { title: "Professional Drivers", desc: "Certified, experienced drivers committed to excellence." },
      fleet: { title: "Modern Fleet", desc: "Well-maintained vehicles equipped for diverse cargo needs." },
      delivery: { title: "On-Time Delivery", desc: "Precision scheduling and real-time coordination for every shipment." },
    },
  },
  services: {
    label: "Our Services",
    title: "Comprehensive Logistics Solutions",
    description: "End-to-end transportation services tailored for businesses of every scale across Saudi Arabia.",
    items: {
      general: { title: "General Cargo Transport", desc: "Secure transportation for commercial goods and general cargo nationwide." },
      heavy: { title: "Heavy Equipment Transport", desc: "Specialized handling for heavy machinery and industrial equipment." },
      construction: { title: "Construction Materials Transport", desc: "Reliable delivery of building materials to project sites on schedule." },
      commercial: { title: "Commercial Goods Delivery", desc: "Efficient distribution for retail and wholesale commercial goods." },
      longDistance: { title: "Long Distance Transportation", desc: "Cross-region logistics with optimized routing and tracking." },
      fleet: { title: "Fleet Management Solutions", desc: "Custom fleet solutions for enterprises requiring dedicated logistics support." },
    },
  },
  fleet: {
    label: "Our Fleet",
    title: "Modern Vehicles, Maximum Performance",
    description: "A diverse fleet of premium trucks maintained to the highest standards for safety and reliability.",
    items: {
      flatbed: { title: "Flatbed Trucks", desc: "Ideal for oversized and heavy cargo with secure loading capabilities." },
      box: { title: "Box Trucks", desc: "Protected enclosed transport for sensitive commercial goods." },
      trailer: { title: "Heavy Trailers", desc: "High-capacity trailers for industrial and construction materials." },
      refrigerated: { title: "Refrigerated Units", desc: "Temperature-controlled transport for perishable goods." },
    },
  },
  whyUs: {
    label: "Why Choose Us",
    title: "Your Trusted Logistics Partner",
    description: "We deliver more than cargo — we deliver confidence, speed, and peace of mind.",
    features: {
      team: { title: "Professional Team", desc: "Dedicated logistics experts managing every detail of your shipment." },
      fast: { title: "Fast Delivery", desc: "Optimized routes and efficient operations for timely arrivals." },
      support: { title: "24/7 Support", desc: "Round-the-clock assistance for urgent logistics needs." },
      fleet: { title: "Modern Fleet", desc: "State-of-the-art vehicles maintained for peak performance." },
      prices: { title: "Competitive Prices", desc: "Premium service at fair, transparent pricing." },
      safety: { title: "Safety Standards", desc: "Industry-leading safety compliance on every journey." },
      reliable: { title: "Reliable Service", desc: "Consistent, dependable delivery you can count on." },
    },
    stats: {
      projects: "Projects Completed",
      clients: "Satisfied Clients",
      years: "Years of Experience",
      deliveries: "Successful Deliveries",
    },
  },
  process: {
    label: "Our Process",
    title: "How We Work",
    description: "A streamlined workflow designed for efficiency, transparency, and on-time delivery.",
    steps: {
      request: { title: "Request", desc: "Submit your transportation requirements through our quote form." },
      planning: { title: "Planning", desc: "Our team designs the optimal route and logistics plan." },
      loading: { title: "Loading", desc: "Professional loading with safety checks and secure fastening." },
      transport: { title: "Transportation", desc: "Safe transit with real-time coordination and updates." },
      delivery: { title: "Delivery", desc: "On-time arrival at destination with proof of delivery." },
      completion: { title: "Completion", desc: "Final confirmation and follow-up for your satisfaction." },
    },
  },
  testimonials: {
    label: "Testimonials",
    title: "What Our Clients Say",
    items: [
      { name: "Ahmed Al-Rashid", company: "Al-Rashid Construction", text: "QAS has been our trusted logistics partner for over three years. Their reliability and professionalism are unmatched." },
      { name: "Mohammed Al-Qahtani", company: "Gulf Trading Co.", text: "Exceptional service from start to finish. They handle our commercial deliveries with precision and care." },
      { name: "Khalid Al-Otaibi", company: "Saudi Industrial Group", text: "Their heavy equipment transport team is highly skilled. We've never had a single incident with QAS." },
      { name: "Faisal Al-Dosari", company: "Eastern Logistics", text: "Competitive pricing, modern fleet, and 24/7 support. QAS is the best transportation company we've worked with." },
    ],
  },
  cta: {
    title: "Need Reliable Transportation?",
    subtitle: "Let's Move Your Business Forward.",
    callNow: "Call Now",
    whatsapp: "WhatsApp",
  },
  contact: {
    label: "Contact Us",
    title: "Get In Touch",
    description: "Ready to discuss your transportation needs? Reach out and our team will respond promptly.",
    info: "Company Information",
    phone: "Phone",
    whatsapp: "WhatsApp",
    email: "Email",
    hours: "Working Hours",
    location: "Location",
    form: {
      name: "Full Name",
      company: "Company Name",
      phone: "Phone Number",
      email: "Email Address",
      message: "Your Message",
      submit: "Send Message",
      success: "Thank you! Your message has been sent successfully.",
      errors: {
        name: "Name is required",
        phone: "Valid phone number is required",
        email: "Valid email is required",
        message: "Message is required",
      },
    },
    mapPlaceholder: "Google Maps integration placeholder",
  },
  footer: {
    description: "Premium logistics and transportation services across Saudi Arabia.",
    quickLinks: "Quick Links",
    servicesTitle: "Services",
    contactTitle: "Contact",
    rights: "All Rights Reserved.",
  },
  floating: {
    call: "Call",
    whatsapp: "WhatsApp",
    backToTop: "Back to top",
  },
  loading: "Loading...",
} as const;

const ar = {
  nav: {
    home: "الرئيسية",
    about: "من نحن",
    services: "خدماتنا",
    fleet: "أسطولنا",
    whyUs: "لماذا نحن",
    contact: "تواصل معنا",
    requestQuote: "اطلب عرض سعر",
  },
  hero: {
    headline: "ننقل أعمالك بثقة... ونصل بها إلى وجهتها بأعلى معايير الجودة.",
    subheadline:
      "شريك لوجستي متميز للشركات والمصانع والمؤسسات التي تبحث عن نقل آمن وفي الوقت المحدد في جميع أنحاء المملكة.",
    ctaQuote: "اطلب عرض سعر",
    ctaContact: "تواصل معنا",
    badge: "شريك لوجستي سعودي موثوق",
  },
  about: {
    label: "من نحن",
    title: "نقود التميز في النقل بالمملكة",
    description:
      "تقدم شركة قمة الشموخ للنقليات خدمات نقل وشحن احترافية في جميع أنحاء المملكة العربية السعودية. نجمع بين أسطول حديث وسائقين ذوي خبرة لنقل أعمالك بثقة.",
    mission: "رسالتنا",
    missionText:
      "تقديم حلول نقل موثوقة وآمنة وفعالة تمكّن الشركات من النمو دون عوائق لوجستية.",
    vision: "رؤيتنا",
    visionText:
      "أن نكون الشريك اللوجستي الأكثر ثقة في المملكة، المعروف بالتميز والابتكار والالتزام بالجودة.",
    values: "قيمنا",
    valuesText:
      "النزاهة والسلامة والالتزام بالمواعيد وخدمة العملاء أولاً هي ما يوجه كل شحنة ننقلها.",
    cards: {
      safety: { title: "السلامة أولاً", desc: "بروتوكولات سلامة صارمة ومحترفون مدربون في كل مسار." },
      drivers: { title: "سائقون محترفون", desc: "سائقون معتمدون وذوو خبرة ملتزمون بالتميز." },
      fleet: { title: "أسطول حديث", desc: "مركبات مُصانة جيداً ومجهزة لاحتياجات الشحن المتنوعة." },
      delivery: { title: "تسليم في الوقت", desc: "جدولة دقيقة وتنسيق فوري لكل شحنة." },
    },
  },
  services: {
    label: "خدماتنا",
    title: "حلول لوجستية شاملة",
    description: "خدمات نقل متكاملة مصممة للشركات بجميع الأحجام في المملكة العربية السعودية.",
    items: {
      general: { title: "نقل البضائع العامة", desc: "نقل آمن للبضائع التجارية والشحنات العامة على مستوى المملكة." },
      heavy: { title: "نقل المعدات الثقيلة", desc: "تعامل متخصص مع الآلات الثقيلة والمعدات الصناعية." },
      construction: { title: "نقل مواد البناء", desc: "توصيل موثوق لمواد البناء إلى مواقع المشاريع في الوقت المحدد." },
      commercial: { title: "توصيل البضائع التجارية", desc: "توزيع فعال للبضائع التجارية بالجملة والتجزئة." },
      longDistance: { title: "النقل لمسافات طويلة", desc: "لوجستيات بين المناطق مع تخطيط مسارات محسّن." },
      fleet: { title: "حلول إدارة الأساطيل", desc: "حلول أسطول مخصصة للمؤسسات التي تحتاج دعماً لوجستياً مخصصاً." },
    },
  },
  fleet: {
    label: "أسطولنا",
    title: "مركبات حديثة، أداء متميز",
    description: "أسطول متنوع من الشاحنات الفاخرة المُصانة وفق أعلى معايير السلامة والموثوقية.",
    items: {
      flatbed: { title: "شاحنات مسطحة", desc: "مثالية للشحنات كبيرة الحجم والثقيلة مع قدرات تحميل آمنة." },
      box: { title: "شاحنات مغلقة", desc: "نقل محمي ومغلق للبضائع التجارية الحساسة." },
      trailer: { title: "مقطورات ثقيلة", desc: "مقطورات عالية السعة للمواد الصناعية ومواد البناء." },
      refrigerated: { title: "وحدات مبردة", desc: "نقل بدرجة حرارة محكومة للبضائع القابلة للتلف." },
    },
  },
  whyUs: {
    label: "لماذا نحن",
    title: "شريكك اللوجستي الموثوق",
    description: "نحن لا ننقل البضائع فحسب — بل ننقل الثقة والسرعة وراحة البال.",
    features: {
      team: { title: "فريق محترف", desc: "خبراء لوجستيون يديرون كل تفاصيل شحنتك." },
      fast: { title: "تسليم سريع", desc: "مسارات محسّنة وعمليات فعالة للوصول في الوقت المحدد." },
      support: { title: "دعم 24/7", desc: "مساعدة على مدار الساعة للاحتياجات اللوجستية العاجلة." },
      fleet: { title: "أسطول حديث", desc: "مركبات متطورة مُصانة لأفضل أداء." },
      prices: { title: "أسعار تنافسية", desc: "خدمة متميزة بأسعار عادلة وشفافة." },
      safety: { title: "معايير السلامة", desc: "امتثال رائد لمعايير السلامة في كل رحلة." },
      reliable: { title: "خدمة موثوقة", desc: "تسليم متسق وموثوق يمكنك الاعتماد عليه." },
    },
    stats: {
      projects: "مشروع مكتمل",
      clients: "عميل راضٍ",
      years: "سنوات خبرة",
      deliveries: "تسليم ناجح",
    },
  },
  process: {
    label: "آلية العمل",
    title: "كيف نعمل",
    description: "سير عمل مبسط مصمم للكفاءة والشفافية والتسليم في الوقت المحدد.",
    steps: {
      request: { title: "الطلب", desc: "قدّم متطلبات النقل عبر نموذج عرض السعر." },
      planning: { title: "التخطيط", desc: "يصمم فريقنا المسار الأمثل وخطة اللوجستيات." },
      loading: { title: "التحميل", desc: "تحميل احترافي مع فحوصات السلامة والتثبيت الآمن." },
      transport: { title: "النقل", desc: "نقل آمن مع تنسيق فوري وتحديثات مستمرة." },
      delivery: { title: "التسليم", desc: "وصول في الوقت المحدد مع إثبات التسليم." },
      completion: { title: "الإتمام", desc: "تأكيد نهائي ومتابعة لضمان رضاك." },
    },
  },
  testimonials: {
    label: "آراء العملاء",
    title: "ماذا يقول عملاؤنا",
    items: [
      { name: "أحمد الراشد", company: "الراشد للمقاولات", text: "قمة الشموخ شريكنا اللوجستي الموثوق منذ أكثر من ثلاث سنوات. موثوقيتهم واحترافيتهم لا مثيل لها." },
      { name: "محمد القحطاني", company: "شركة الخليج التجارية", text: "خدمة استثنائية من البداية للنهاية. يتعاملون مع شحناتنا التجارية بدقة وعناية." },
      { name: "خالد العتيبي", company: "المجموعة الصناعية السعودية", text: "فريق نقل المعدات الثقيلة لديهم مهارة عالية. لم نواجه أي حادث مع قمة الشموخ." },
      { name: "فيصل الدوسري", company: "اللوجستيات الشرقية", text: "أسعار تنافسية وأسطول حديث ودعم على مدار الساعة. قمة الشموخ أفضل شركة نقل تعاملنا معها." },
    ],
  },
  cta: {
    title: "هل تحتاج نقلاً موثوقاً؟",
    subtitle: "لننقل أعمالك إلى الأمام.",
    callNow: "اتصل الآن",
    whatsapp: "واتساب",
  },
  contact: {
    label: "تواصل معنا",
    title: "نحن هنا لمساعدتك",
    description: "مستعد لمناقشة احتياجات النقل؟ تواصل معنا وسيرد فريقنا بسرعة.",
    info: "معلومات الشركة",
    phone: "الهاتف",
    whatsapp: "واتساب",
    email: "البريد الإلكتروني",
    hours: "ساعات العمل",
    location: "الموقع",
    form: {
      name: "الاسم الكامل",
      company: "اسم الشركة",
      phone: "رقم الهاتف",
      email: "البريد الإلكتروني",
      message: "رسالتك",
      submit: "إرسال الرسالة",
      success: "شكراً لك! تم إرسال رسالتك بنجاح.",
      errors: {
        name: "الاسم مطلوب",
        phone: "رقم هاتف صحيح مطلوب",
        email: "بريد إلكتروني صحيح مطلوب",
        message: "الرسالة مطلوبة",
      },
    },
    mapPlaceholder: "مكان تكامل خرائط جوجل",
  },
  footer: {
    description: "خدمات لوجستية ونقل متميزة في جميع أنحاء المملكة العربية السعودية.",
    quickLinks: "روابط سريعة",
    servicesTitle: "الخدمات",
    contactTitle: "تواصل",
    rights: "جميع الحقوق محفوظة.",
  },
  floating: {
    call: "اتصال",
    whatsapp: "واتساب",
    backToTop: "العودة للأعلى",
  },
  loading: "جاري التحميل...",
} as const;

export const translations = { en, ar } as const;

export function getTranslation(locale: Locale) {
  return translations[locale];
}

export type Translations = typeof import("@/lib/translations").translations.en | typeof import("@/lib/translations").translations.ar;
