export type LanguageCode = 'en' | 'bn' | 'ar';

export interface Translation {
  [key: string]: string;
}

export const translations: Record<LanguageCode, Translation> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'Who We Are',
    'nav.programs': 'What We Do',
    'nav.impact': 'Impact',
    'nav.publications': 'Publications',
    'nav.events': 'Events & Media',
    'nav.jobs': 'Get Involved',
    'nav.donate': 'Donate',
    'nav.ucon': 'uCon Hub',
    'nav.contact': 'Contact',
    'nav.search': 'Search',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.add': 'Add',
    'common.back': 'Back',
    'common.learn_more': 'Learn More',
    'common.read_more': 'Read More',
    'common.view_all': 'View All',
    'common.submit': 'Submit',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.download': 'Download',
    
    // Dashboard
    'dashboard.title': 'Dashboard',
    'dashboard.overview': 'Overview',
    'dashboard.pages': 'Pages',
    'dashboard.news': 'News',
    'dashboard.publications': 'Publications',
    'dashboard.events': 'Events',
    'dashboard.gallery': 'Gallery',
    'dashboard.jobs': 'Jobs',
    'dashboard.training': 'Training',
    'dashboard.users': 'Users',
    'dashboard.analytics': 'Analytics',
    'dashboard.settings': 'Settings',
    
    // Hero & Landing
    'hero.title': 'Empowering Communities',
    'hero.subtitle': 'Working towards sustainable development and social change',
    'hero.cta': 'Get Involved',
    'landing.announcement': 'Advancing health, rights, resilience, and opportunity across Bangladesh',
    'landing.hero_label': 'Population Services and Training Center',
    'landing.hero_title': 'Advancing health, rights, and resilience for communities across Bangladesh',
    'landing.hero_text': 'For nearly five decades, PSTC has worked with communities, partners, and young people to improve access to health, rights, skills, protection, and opportunity.',
    'landing.primary_cta': 'Explore Our Work',
    'landing.secondary_cta': 'View Publications',
    'landing.years_impact': 'Years Impact',
    'landing.lives_reached': 'Lives Reached',
    'landing.impact_title': 'Our Impact in Numbers',
    'landing.impact_text': 'PSTC works with communities, partners, and young people to improve access to health, rights, skills, protection, and opportunity across Bangladesh.',
    'landing.stats_years_label': 'Years of service',
    'landing.stats_years_caption': 'Continuing from FPSTC since 1978',
    'landing.stats_thematic_label': 'Thematic areas',
    'landing.stats_thematic_caption': 'Health, youth, gender, climate, skills',
    'landing.stats_projects_label': 'Major projects',
    'landing.stats_projects_caption': 'Community-focused initiatives',
    'landing.stats_locations_label': 'Model clinic locations',
    'landing.stats_locations_caption': 'Aftabnagar, Gazipur, Kushtia',
    'landing.stats_people_label': 'People reached',
    'landing.stats_people_caption': 'Community reach shown for the demo',
    'landing.stats_partners_label': 'Partners & networks',
    'landing.stats_partners_caption': 'Collaboration for greater impact',
    // Forms
    'form.name': 'Name',
    'form.email': 'Email',
    'form.message': 'Message',
    'form.phone': 'Phone',
    'form.submit': 'Submit',
    'form.thanks': 'Thank you for your message. We\'ll get back to you soon.',
    
    // Footer
    'footer.about': 'About Us',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.newsletter': 'Newsletter',
    'footer.subscribe': 'Subscribe to our newsletter',
    'footer.follow': 'Follow Us',
    
    // Buttons
    'btn.language': 'Language',
    'btn.theme': 'Theme',
    'btn.dark': 'Dark',
    'btn.light': 'Light',
    'btn.logout': 'Logout',
    'btn.login': 'Login',
  },
  
  bn: {
    // Navigation
    'nav.home': 'হোম',
    'nav.about': 'আমরা কারা',
    'nav.programs': 'আমরা কী করি',
    'nav.impact': 'প্রভাব',
    'nav.publications': 'প্রকাশনা',
    'nav.events': 'ইভেন্ট ও মিডিয়া',
    'nav.jobs': 'অংশগ্রহণ করুন',
    'nav.donate': 'দান করুন',
    'nav.ucon': 'uCon হাব',
    'nav.contact': 'যোগাযোগ',
    'nav.search': 'অনুসন্ধান',
    
    // Common
    'common.loading': 'লোড হচ্ছে...',
    'common.error': 'ত্রুটি',
    'common.success': 'সফল',
    'common.save': 'সংরক্ষণ করুন',
    'common.cancel': 'বাতিল',
    'common.delete': 'মুছুন',
    'common.edit': 'সম্পাদনা',
    'common.add': 'যোগ করুন',
    'common.back': 'ফিরে যান',
    'common.learn_more': 'আরও জানুন',
    'common.read_more': 'আরও পড়ুন',
    'common.view_all': 'সব দেখুন',
    'common.submit': 'জমা দিন',
    'common.search': 'অনুসন্ধান',
    'common.filter': 'ফিল্টার',
    'common.download': 'ডাউনলোড',
    
    // Dashboard
    'dashboard.title': 'ড্যাশবোর্ড',
    'dashboard.overview': 'সংক্ষিপ্ত বিবরণ',
    'dashboard.pages': 'পৃষ্ঠা',
    'dashboard.news': 'খবর',
    'dashboard.publications': 'প্রকাশনা',
    'dashboard.events': 'ইভেন্ট',
    'dashboard.gallery': 'গ্যালারি',
    'dashboard.jobs': 'চাকরি',
    'dashboard.training': 'প্রশিক্ষণ',
    'dashboard.users': 'ব্যবহারকারী',
    'dashboard.analytics': 'বিশ্লেষণ',
    'dashboard.settings': 'সেটিংস',
    
    // Hero & Landing
    'hero.title': 'সম্প্রদায়কে ক্ষমতায়ন করা',
    'hero.subtitle': 'টেকসই উন্নয়ন এবং সামাজিক পরিবর্তনের দিকে কাজ করছি',
    'hero.cta': 'অংশগ্রহণ করুন',
    
    // Forms
    'form.name': 'নাম',
    'form.email': 'ইমেল',
    'form.message': 'বার্তা',
    'form.phone': 'ফোন',
    'form.submit': 'জমা দিন',
    'form.thanks': 'আপনার বার্তার জন্য ধন্যবাদ। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।',
    
    // Footer
    'footer.about': 'আমাদের সম্পর্কে',
    'footer.contact': 'যোগাযোগ',
    'footer.privacy': 'গোপনীয়তা নীতি',
    'footer.terms': 'শর্তাবলী',
    'footer.newsletter': 'নিউজলেটার',
    'footer.subscribe': 'আমাদের নিউজলেটার সাবস্ক্রাইব করুন',
    'footer.follow': 'আমাদের অনুসরণ করুন',
    
    // Buttons
    'btn.language': 'ভাষা',
    'btn.theme': 'থিম',
    'btn.dark': 'অন্ধকার',
    'btn.light': 'আলো',
    'btn.logout': 'লগ আউট',
    'btn.login': 'লগ ইন',
  },
  
  ar: {
    // Navigation
    'nav.home': 'الصفحة الرئيسية',
    'nav.about': 'من نحن',
    'nav.programs': 'ما الذي نقوم به',
    'nav.impact': 'التأثير',
    'nav.publications': 'المنشورات',
    'nav.events': 'الأحداث والإعلام',
    'nav.jobs': 'شارك معنا',
    'nav.donate': 'تبرع',
    'nav.ucon': 'مركز uCon',
    'nav.contact': 'اتصل بنا',
    'nav.search': 'بحث',
    
    // Common
    'common.loading': 'جاري التحميل...',
    'common.error': 'خطأ',
    'common.success': 'نجح',
    'common.save': 'حفظ',
    'common.cancel': 'إلغاء',
    'common.delete': 'حذف',
    'common.edit': 'تحرير',
    'common.add': 'إضافة',
    'common.back': 'رجوع',
    'common.learn_more': 'تعرف على المزيد',
    'common.read_more': 'اقرأ المزيد',
    'common.view_all': 'عرض الكل',
    'common.submit': 'إرسال',
    'common.search': 'بحث',
    'common.filter': 'تصفية',
    'common.download': 'تحميل',
    
    // Dashboard
    'dashboard.title': 'لوحة التحكم',
    'dashboard.overview': 'نظرة عامة',
    'dashboard.pages': 'الصفحات',
    'dashboard.news': 'الأخبار',
    'dashboard.publications': 'المنشورات',
    'dashboard.events': 'الأحداث',
    'dashboard.gallery': 'المعرض',
    'dashboard.jobs': 'الوظائف',
    'dashboard.training': 'التدريب',
    'dashboard.users': 'المستخدمون',
    'dashboard.analytics': 'التحليلات',
    'dashboard.settings': 'الإعدادات',
    
    // Hero & Landing
    'hero.title': 'تمكين المجتمعات',
    'hero.subtitle': 'العمل على التنمية المستدامة والتغيير الاجتماعي',
    'hero.cta': 'شارك معنا',
    
    // Forms
    'form.name': 'الاسم',
    'form.email': 'البريد الإلكتروني',
    'form.message': 'الرسالة',
    'form.phone': 'الهاتف',
    'form.submit': 'إرسال',
    'form.thanks': 'شكراً لرسالتك. سنتواصل معك قريباً.',
    
    // Footer
    'footer.about': 'عن الشركة',
    'footer.contact': 'اتصل بنا',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.newsletter': 'النشرة الإخبارية',
    'footer.subscribe': 'اشترك في نشرتنا الإخبارية',
    'footer.follow': 'تابعنا',
    
    // Buttons
    'btn.language': 'اللغة',
    'btn.theme': 'المظهر',
    'btn.dark': 'مظلم',
    'btn.light': 'فاتح',
    'btn.logout': 'تسجيل الخروج',
    'btn.login': 'تسجيل الدخول',
  },
};
