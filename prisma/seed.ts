// تعریف تمامی کلیدهای دسترسی پیشرفته سیستم
  const permissionsData = [
    // اخبار و محتوا
    { code: "NEWS_CREATE", title: "تولید اخبار", category: "اخبار و هاب محتوا" },
    { code: "NEWS_MANAGE", title: "مدیریت اخبار", category: "اخبار و هاب محتوا" },
    { code: "NEWS_APPROVE", title: "تأیید اخبار", category: "اخبار و هاب محتوا" },

    // کتابخانه تخصصی
    { code: "LIBRARY_CREATE", title: "تولید اسناد کتابخانه", category: "کتابخانه تخصصی" },
    { code: "LIBRARY_MANAGE", title: "مدیریت اسناد کتابخانه", category: "کتابخانه تخصصی" },
    { code: "LIBRARY_APPROVE", title: "تأیید اسناد کتابخانه", category: "کتابخانه تخصصی" },

    // هوش بازار
    { code: "MARKET_CREATE", title: "تولید گزارش هوش بازار", category: "هوش بازار" },
    { code: "MARKET_MANAGE", title: "مدیریت گزارش هوش بازار", category: "هوش بازار" },
    { code: "MARKET_APPROVE", title: "تأیید گزارش هوش بازار", category: "هوش بازار" },

    // قوانین و مقررات
    { code: "RULES_CREATE", title: "تولید استخراج و تحلیل قوانین", category: "قوانین و مقررات" },
    { code: "RULES_MANAGE", title: "مدیریت استخراج و تحلیل قوانین", category: "قوانین و مقررات" },
    { code: "RULES_APPROVE", title: "تأیید استخراج و تحلیل قوانین", category: "قوانین و مقررات" },

    // املاک و پروفایل
    { code: "PROPERTY_CREATE", title: "ثبت آگهی ملکی", category: "املاک و آگهی‌ها" },
    { code: "PROPERTY_MANAGE", title: "مدیریت پروفایل", category: "املاک و آگهی‌ها" },
    { code: "PROPERTY_APPROVE", title: "تأیید آگهی ملکی", category: "املاک و آگهی‌ها" },

    // مالی و نظرات
    { code: "FINANCIAL_APPROVE", title: "بررسی و تأیید مالی", category: "مالی و تراکنش‌ها" },
    { code: "COMMENT_VIEW", title: "بررسی کامنت‌ها", category: "مدیریت کامنت‌ها" },
    { code: "COMMENT_APPROVE", title: "تأیید کامنت‌ها", category: "مدیریت کامنت‌ها" },
    { code: "COMMENT_RESTRICT", title: "محدود کردن کامنت‌ها", category: "مدیریت کامنت‌ها" },
    { code: "COMMENT_DELETE", title: "حذف کامنت‌ها", category: "مدیریت کامنت‌ها" },
    { code: "COMMENT_REPLY", title: "پاسخ‌دهی به کامنت‌ها", category: "مدیریت کامنت‌ها" },

    // عمومی و سیستم
    { code: "USER_ROLE_EDIT", title: "تغییر و ویرایش نقش کاربران", category: "سطوح دسترسی" },
  ];