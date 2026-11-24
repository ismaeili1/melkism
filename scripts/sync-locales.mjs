import fs from 'fs';
import path from 'path';

const locales = ['fa', 'en', 'de', 'fr', 'es', 'it', 'tr', 'zh', 'ar', 'ru'];
const messagesDir = path.resolve(process.cwd(), 'messages');

const baseTemplates = {
  fa: {
    Common: {
      loading: 'در حال بارگذاری...',
      errorGeneric: 'خطایی رخ داد. لطفاً دوباره تلاش کنید.',
      resultsCount: '{count} مورد یافت شد',
      lastUpdated: 'آخرین به‌روزرسانی: {date}',
      paginationSummary: 'نمایش {from} تا {to} از {total} نتیجه'
    },
    Market: {
      avgPricePerSqm: 'میانگین قیمت در {area}: {price} / مترمربع',
      activeListings: '{count} آگهی فعال در بازار ملکیست',
      areaStatsTitle: 'تحلیل {area} با {count} پروژه ثبت‌شده'
    },
    Library: {
      itemMeta: 'تألیف {author} • سال {year}',
      categoryCount: '{count} منبع تخصصی در این دسته'
    },
    Specialists: {
      title: 'متخصصان ملکیست',
      subtitle: 'شبکه مهندسان، معماران، وکلا و مشاوران تأییدشده صنعت ساختمان و املاک',
      experienceSummary: '{years} سال سابقه تخصصی در {specialty}',
      verifiedCount: '{count} متخصص تأییدشده'
    },
    SpecialistsPage: {
      title: 'متخصصان ملکیست',
      subtitle: 'شبکه مهندسان، معماران، وکلا و مشاوران تأییدشده صنعت ساختمان و املاک'
    },
    Header: {
      badgeMedia: 'رسانه و هوش بازار',
      navNews: 'اخبار',
      navMarketplace: 'بازار ملکیست',
      navLibrary: 'کتابخانه',
      navSpecialists: 'متخصص ملکیست',
      navRules: 'قوانین و مقررات',
      verifiedUser: 'کاربر تأییدشده',
      roleAdmin: 'مدیر سیستم',
      roleVip: 'کاربر ویژه',
      roleUser: 'کاربر عادی',
      aiAssistant: 'دستیار هوشمند'
    },
    UnifiedAuth: {
      brandTagline: 'رسانه هوشمند املاک و صنعت ساختمان',
      lightMode: 'حالت روشن',
      darkMode: 'حالت تیره',
      backToHome: 'صفحه اصلی',
      loginBadge: 'ورود یکپارچه به پلتفرم ملکیسم',
      loginTitle: 'ورود به حساب کاربری و پنل اختصاصی',
      loginSubtitle: 'با نام کاربری، ایمیل، شماره موبایل یا حساب گوگل وارد محیط کاری خود شوید.',
      continueWithGoogle: 'ورود سریع با اکانت گوگل',
      orLoginWithCredentials: 'یا ورود با مشخصات حساب کاربری',
      identifierLabel: 'نام کاربری، ایمیل یا شماره موبایل',
      identifierPlaceholder: 'username / email@domain.com / 0912...',
      passwordLabel: 'رمز عبور',
      forgotCredentialsLink: 'فراموشی نام کاربری یا رمز عبور؟',
      hidePassword: 'مخفی',
      showPassword: 'نمایش',
      signInBtn: 'ورود و انتقال به پنل کاربری',
      signingInBtn: 'در حال بررسی و انتقال...',
      quickDemoFillTitle: 'تکمیل سریع اطلاعات نمونه جهت تست نقش‌ها:',
      noAccountPrompt: 'هنوز ثبت‌نام نکرده‌اید؟',
      goToRegisterLink: 'ایجاد حساب کاربری جدید',
      invalidCredentials: 'نام کاربری/ایمیل/موبایل یا رمز عبور واردشده صحیح نیست.',
      accountRestricted: 'این حساب کاربری توسط مدیریت محدود یا غیرفعال شده است.',
      superAdminRestrictedNotice: 'ورود مدیر ارشد کلان (SUPER_ADMIN) از درگاه عمومی مجاز نیست و فقط از طریق درگاه اختصاصی با تأیید دو مرحله‌ای انجام می‌شود.',
      googleModalTitle: 'اتصال و ورود با حساب گوگل',
      googleModalDesc: 'ایمیل گوگل خود را وارد کنید تا حساب شما در حافظه اصلی ملکیسم شناسایی یا ایجاد شود.',
      googleEmailField: 'آدرس ایمیل گوگل',
      googleNameField: 'نام نمایشی (اختیاری)',
      googleDefaultTrade: 'کاربر متصل با گوگل',
      cancelBtn: 'انصراف',
      googleConfirmBtn: 'تأیید و ورود با گوگل',
      registerBadge: 'عضویت در اکوسیستم ملکیسم',
      registerTitle: 'ثبت‌نام و فعال‌سازی حساب کاربری',
      registerSubtitle: 'روش فعال‌سازی (ایمیل یا پیامک موبایل) را انتخاب کنید؛ احراز هویت تکمیلی در پروفایل انجام می‌شود.',
      activateViaEmail: 'فعال‌سازی با ایمیل',
      activateViaMobile: 'فعال‌سازی با پیامک موبایل',
      requiredFieldsHeading: 'اطلاعات ضروری ثبت‌نام',
      fullNameLabel: 'نام و نام خانوادگی / عنوان سازمان',
      usernameLabel: 'نام کاربری یکتا (Username)',
      emailField: 'ایمیل',
      mobileField: 'شماره موبایل',
      accountTypeLabel: 'نوع حساب و سطح کاربری',
      roleOptionUser: 'کاربر عادی / خریدار / فروشنده شخصی',
      roleOptionCompany: 'شرکت ساختمانی / تولیدکننده / پیمانکار',
      roleOptionAgency: 'آژانس و دفتر املاک',
      roleOptionExpert: 'کارشناس، معمار، وکیل یا مشاور تخصصی',
      passwordLabel: 'رمز عبور',
      optionalFieldsHeading: 'اطلاعات تکمیلی (اختیاری)',
      showOptional: 'باز کردن فیلدهای اختیاری +',
      hideOptional: 'بستن −',
      tradeField: 'حوزه تخصصی / صنفی',
      companyField: 'نام شرکت / دفتر',
      websiteField: 'وب‌سایت یا شبکه اجتماعی',
      bioField: 'توضیحات کوتاه',
      enterOtpLabel: 'کد تأیید ۶ رقمی ارسال‌شده:',
      termsConsentText: 'قوانین و مقررات پلتفرم ملکیسم را می‌پذیرم.',
      sendActivationCodeBtn: 'ارسال کد فعال‌سازی',
      completeRegisterAndProfileBtn: 'تأیید کد، ثبت در حافظه سایت و ورود به پروفایل',
      alreadyHaveAccount: 'قبلاً ثبت‌نام کرده‌اید؟',
      goToLoginLink: 'ورود به حساب کاربری',
      backToLoginBtn: 'بازگشت به صفحه ورود',
      usernameTakenError: 'این نام کاربری قبلاً ثبت شده است؛ نام دیگری انتخاب کنید.',
      emailRequiredError: 'وارد کردن ایمیل برای فعال‌سازی ایمیلی ضروری است.',
      mobileRequiredError: 'وارد کردن شماره موبایل برای فعال‌سازی پیامکی ضروری است.',
      termsRequiredError: 'پذیرش قوانین پلتفرم ضروری است.',
      otpSentNotice: 'کد تأیید به {channel} ({target}) ارسال شد. کد آزمایشی: {code}',
      channelEmail: 'ایمیل',
      channelMobile: 'پیامک موبایل',
      invalidOtpError: 'کد تأیید واردشده معتبر نیست.',
      defaultTradeLabel: 'کاربر ثبت‌نام‌شده',
      recoveryTitle: 'بازیابی نام کاربری و رمز عبور',
      recoverySubtitle: 'ایمیل یا شماره موبایل ثبت‌شده را وارد کنید تا نام کاربری بازیابی و رمز جدید ثبت شود.',
      recoveryInputLabel: 'ایمیل یا شماره موبایل ثبت‌شده',
      sendRecoveryCodeBtn: 'ارسال کد بازیابی',
      accountNotFoundError: 'حسابی با این مشخصات در سیستم یافت نشد.',
      recoveryCodeSent: 'کد بازیابی ارسال شد. کد آزمایشی: {code}',
      recoveredUsernameLabel: 'نام کاربری شما: {username}',
      newPasswordLabel: 'رمز عبور جدید (حداقل ۶ کاراکتر)',
      saveNewPasswordBtn: 'ثبت رمز عبور جدید',
      weakPasswordError: 'رمز عبور جدید باید حداقل ۶ کاراکتر باشد.',
      recoveryCompletedNotice: 'رمز عبور جدید برای نام کاربری «{username}» با موفقیت در حافظه سایت ذخیره شد.'
    },
    SuperAdminGate: {
      badge: 'درگاه اختصاصی و محرمانه • SUPER ADMIN 2FA',
      title: 'احراز هویت دو مرحله‌ای مدیر ارشد کلان',
      subtitle: 'دسترسی انحصاری به اتاق فرمان، ماتریس RBAC، امور مالی و تنظیمات هسته.',
      identifierLabel: 'نام کاربری، ایمیل یا موبایل سوپرادمین',
      passwordLabel: 'رمز عبور ارشد',
      nextStepBtn: 'تأیید مرحله اول و ارسال کد ۲FA',
      otpLabel: 'کد امنیتی مرحله دوم (۶ رقمی)',
      verifyEnterBtn: 'تأیید نهایی و ورود به اتاق فرمان سوپرادمین',
      invalidCredentials: 'اطلاعات ورود سوپرادمین معتبر نیست.',
      twoFactorSent: 'کد تأیید دو مرحله‌ای صادر شد. کد امنیتی: {code}',
      invalidOtp: 'کد امنیتی مرحله دوم اشتباه است.'
    },
    AgencyAgents: {
      badge: 'مدیریت تیم مشاوران آژانس • {count} مشاور ثبت‌شده',
      pageTitle: 'مدیریت مشاوران و تقسیم کمیسیون دفتر املاک',
      pageSubtitle: 'نظارت بر فایل‌های فعال هر مشاور، درصد کمیسیون و وضعیت همکاری.',
      addAgentBtn: '+ افزودن مشاور جدید',
      backToDashboard: 'بازگشت به داشبورد',
      closeBtn: 'بستن',
      filterAll: 'همه مشاوران',
      filterActive: 'فعال',
      filterPaused: 'معلق / غیرفعال',
      searchPlaceholder: 'جستجو نام، حوزه فعالیت یا موبایل...',
      colAgent: 'مشاور',
      colSpecialty: 'حوزه تخصصی',
      colListings: 'فایل‌های فعال',
      colCommission: 'سهم کمیسیون',
      colStatus: 'وضعیت',
      colActions: 'عملیات',
      listingsCount: '{count} فایل فعال',
      statusActive: 'فعال',
      statusPaused: 'معلق',
      toggleStatusBtn: 'تغییر وضعیت',
      statusChangedFeedback: 'وضعیت همکاری «{name}» به «{status}» تغییر یافت.',
      agentAddedFeedback: 'مشاور جدید «{name}» به تیم آژانس اضافه شد.',
      modalTitle: 'افزودن مشاور به آژانس',
      fieldName: 'نام و نام خانوادگی',
      fieldSpecialty: 'حوزه تخصصی',
      fieldPhone: 'شماره تماس',
      fieldCommission: 'سهم کمیسیون (%)',
      defaultSpecialty: 'مشاور املاک',
      cancelBtn: 'انصراف',
      saveBtn: 'ذخیره'
    },
    CompanyProjects: {
      badge: 'پنل پروژه‌های شرکت سازنده • {count} پروژه',
      pageTitle: 'مدیریت پروژه‌های ساختمانی و درصد پیشرفت',
      pageSubtitle: 'ثبت پیشرفت فیزیکی پروژه‌ها، تعداد واحدهای باقی‌مانده و وضعیت تحویل.',
      backToDashboard: 'بازگشت به داشبورد',
      filterAll: 'همه پروژه‌ها',
      filterInProgress: 'در حال اجرا',
      filterHandover: 'آماده تحویل / تحویل‌شده',
      progressLabel: 'پیشرفت فیزیکی: {percent}%',
      remainingUnitsLabel: 'واحدهای باقی‌مانده: {count} واحد',
      advanceProgressBtn: '+ ثبت ۵٪ پیشرفت جدید',
      progressUpdatedNotice: 'پیشرفت پروژه «{title}» به {percent}% به‌روزرسانی شد.'
    },
    ExpertEvaluations: {
      badge: 'کارتابل ارزیابی تخصصی • {count} پرونده',
      pageTitle: 'پرونده‌های کارشناسی و ارزیابی فنی املاک',
      pageSubtitle: 'بررسی نقشه‌ها، ارزیابی قیمت و تأیید پرونده‌های ارجاعی.',
      backToDashboard: 'بازگشت به داشبورد',
      filterAll: 'همه پرونده‌ها',
      filterPending: 'در انتظار بررسی',
      filterApproved: 'تأییدشده',
      colCase: 'عنوان پرونده',
      colType: 'نوع کارشناسی',
      colDate: 'تاریخ ارجاع',
      colStatus: 'وضعیت',
      colAction: 'عملیات',
      approveBtn: 'ثبت تأیید کارشناسی',
      completedLabel: 'تکمیل‌شده',
      approvedFeedback: 'پرونده «{title}» با موفقیت تأیید کارشناسی شد.'
    }
  },
  en: {
    Common: {
      loading: 'Loading...',
      errorGeneric: 'Something went wrong. Please try again.',
      resultsCount: '{count} results found',
      lastUpdated: 'Last updated: {date}',
      paginationSummary: 'Showing {from} to {to} of {total} results'
    },
    Market: {
      avgPricePerSqm: 'Average price in {area}: {price} / sqm',
      activeListings: '{count} active listings in MELKIST Market',
      areaStatsTitle: '{area} analysis across {count} recorded projects'
    },
    Library: {
      itemMeta: 'By {author} • {year}',
      categoryCount: '{count} specialized resources in this category'
    },
    Specialists: {
      title: 'MELKIST Specialists',
      subtitle: 'Network of verified engineers, architects, legal experts, and real estate consultants',
      experienceSummary: '{years} years of experience in {specialty}',
      verifiedCount: '{count} verified specialists'
    },
    SpecialistsPage: {
      title: 'MELKIST Specialists',
      subtitle: 'Network of verified engineers, architects, legal experts, and real estate consultants'
    },
    Header: {
      badgeMedia: 'Media & Market Intelligence',
      navNews: 'News',
      navMarketplace: 'MELKIST Market',
      navLibrary: 'Library',
      navSpecialists: 'Specialists',
      navRules: 'Laws & Regulations',
      verifiedUser: 'Verified User',
      roleAdmin: 'Admin',
      roleVip: 'VIP Member',
      roleUser: 'Member',
      aiAssistant: 'AI Assistant'
    },
    UnifiedAuth: {
      brandTagline: 'Built-Environment & Real Estate Intelligence',
      lightMode: 'Light Mode',
      darkMode: 'Dark Mode',
      backToHome: 'Home',
      loginBadge: 'Unified MELKIST Sign In',
      loginTitle: 'Sign In to Your Account & Role Panel',
      loginSubtitle: 'Access your dedicated workspace using username, email, mobile, or Google.',
      continueWithGoogle: 'Continue with Google Account',
      orLoginWithCredentials: 'or sign in with account credentials',
      identifierLabel: 'Username, Email, or Mobile Number',
      identifierPlaceholder: 'username / email@domain.com / +98912...',
      passwordLabel: 'Password',
      forgotCredentialsLink: 'Forgot username or password?',
      hidePassword: 'Hide',
      showPassword: 'Show',
      signInBtn: 'Sign In & Open Workspace',
      signingInBtn: 'Verifying & Redirecting...',
      quickDemoFillTitle: 'Quick-fill demo role credentials for testing:',
      noAccountPrompt: "Don't have an account yet?",
      goToRegisterLink: 'Create a New Account',
      invalidCredentials: 'Invalid username, email, mobile number, or password.',
      accountRestricted: 'This account has been restricted or deactivated by administration.',
      superAdminRestrictedNotice: 'SUPER_ADMIN login is disabled on the public portal and is only permitted via the dedicated 2FA gateway.',
      googleModalTitle: 'Sign In with Google Account',
      googleModalDesc: 'Enter your Google email to sync or create your profile in MELKIST storage.',
      googleEmailField: 'Google Email Address',
      googleNameField: 'Display Name (Optional)',
      googleDefaultTrade: 'Google Authenticated User',
      cancelBtn: 'Cancel',
      googleConfirmBtn: 'Confirm & Continue with Google',
      registerBadge: 'Join MELKIST Ecosystem',
      registerTitle: 'Create & Activate Your Account',
      registerSubtitle: 'Choose Email or Mobile SMS activation; full KYC verification is completed in your profile.',
      activateViaEmail: 'Activate via Email',
      activateViaMobile: 'Activate via Mobile SMS',
      requiredFieldsHeading: 'Required Registration Information',
      fullNameLabel: 'Full Name / Organization Title',
      usernameLabel: 'Unique Username',
      emailField: 'Email',
      mobileField: 'Mobile Number',
      accountTypeLabel: 'Account Type & Initial Role',
      roleOptionUser: 'Standard User / Personal Buyer or Seller',
      roleOptionCompany: 'Construction Company / Manufacturer / Contractor',
      roleOptionAgency: 'Real Estate Agency / Brokerage',
      roleOptionExpert: 'Specialist, Architect, Lawyer, or Consultant',
      passwordLabel: 'Password',
      optionalFieldsHeading: 'Additional Details (Optional)',
      showOptional: 'Show Optional Fields +',
      hideOptional: 'Hide −',
      tradeField: 'Trade / Specialty',
      companyField: 'Company / Office Name',
      websiteField: 'Website or Social Profile',
      bioField: 'Short Bio',
      enterOtpLabel: 'Enter the 6-digit verification code:',
      termsConsentText: 'I accept the MELKIST platform terms and conditions.',
      sendActivationCodeBtn: 'Send Activation Code',
      completeRegisterAndProfileBtn: 'Verify Code, Save Account & Open Profile',
      alreadyHaveAccount: 'Already have an account?',
      goToLoginLink: 'Sign In',
      backToLoginBtn: 'Back to Sign In',
      usernameTakenError: 'This username is already taken. Please choose another.',
      emailRequiredError: 'Email is required for email activation.',
      mobileRequiredError: 'Mobile number is required for SMS activation.',
      termsRequiredError: 'You must accept the platform terms.',
      otpSentNotice: 'Verification code sent to {channel} ({target}). Demo code: {code}',
      channelEmail: 'Email',
      channelMobile: 'Mobile SMS',
      invalidOtpError: 'The verification code entered is invalid.',
      defaultTradeLabel: 'Registered Member',
      recoveryTitle: 'Recover Username & Password',
      recoverySubtitle: 'Enter your registered email or mobile number to recover your username and set a new password.',
      recoveryInputLabel: 'Registered Email or Mobile Number',
      sendRecoveryCodeBtn: 'Send Recovery Code',
      accountNotFoundError: 'No matching account found in the system.',
      recoveryCodeSent: 'Recovery code sent. Demo code: {code}',
      recoveredUsernameLabel: 'Your Username: {username}',
      newPasswordLabel: 'New Password (at least 6 characters)',
      saveNewPasswordBtn: 'Save New Password',
      weakPasswordError: 'New password must be at least 6 characters.',
      recoveryCompletedNotice: 'New password saved for username "{username}".'
    },
    SuperAdminGate: {
      badge: 'RESTRICTED GATEWAY • SUPER ADMIN 2FA',
      title: 'Super Admin Two-Factor Authentication',
      subtitle: 'Exclusive access to Command Hub, RBAC matrix, finance, and core settings.',
      identifierLabel: 'Super Admin Username, Email, or Mobile',
      passwordLabel: 'Master Password',
      nextStepBtn: 'Verify Step 1 & Issue 2FA Code',
      otpLabel: 'Second-Factor Security Code (6 digits)',
      verifyEnterBtn: 'Confirm & Enter Super Admin Command Hub',
      invalidCredentials: 'Invalid Super Admin credentials.',
      twoFactorSent: 'Two-factor code issued. Security code: {code}',
      invalidOtp: 'Invalid two-factor security code.'
    },
    AgencyAgents: {
      badge: 'Agency Agents Team • {count} registered agents',
      pageTitle: 'Manage Agents & Commission Shares',
      pageSubtitle: 'Track active listings per agent, commission percentages, and partnership status.',
      addAgentBtn: '+ Add New Agent',
      backToDashboard: 'Back to Dashboard',
      closeBtn: 'Close',
      filterAll: 'All Agents',
      filterActive: 'Active',
      filterPaused: 'Paused',
      searchPlaceholder: 'Search name, specialty, or phone...',
      colAgent: 'Agent',
      colSpecialty: 'Specialty',
      colListings: 'Active Listings',
      colCommission: 'Commission Share',
      colStatus: 'Status',
      colActions: 'Actions',
      listingsCount: '{count} active listings',
      statusActive: 'Active',
      statusPaused: 'Paused',
      toggleStatusBtn: 'Toggle Status',
      statusChangedFeedback: 'Status for "{name}" updated to "{status}".',
      agentAddedFeedback: 'New agent "{name}" added to the agency team.',
      modalTitle: 'Add Agent to Agency',
      fieldName: 'Full Name',
      fieldSpecialty: 'Specialty Area',
      fieldPhone: 'Phone Number',
      fieldCommission: 'Commission Share (%)',
      defaultSpecialty: 'Real Estate Agent',
      cancelBtn: 'Cancel',
      saveBtn: 'Save'
    },
    CompanyProjects: {
      badge: 'Developer Projects Hub • {count} projects',
      pageTitle: 'Construction Projects & Progress Management',
      pageSubtitle: 'Track physical progress percentages, remaining units, and handover status.',
      backToDashboard: 'Back to Dashboard',
      filterAll: 'All Projects',
      filterInProgress: 'In Progress',
      filterHandover: 'Handover / Completed',
      progressLabel: 'Physical Progress: {percent}%',
      remainingUnitsLabel: 'Remaining Units: {count} units',
      advanceProgressBtn: '+ Record 5% Progress',
      progressUpdatedNotice: 'Progress for "{title}" updated to {percent}%.'
    },
    ExpertEvaluations: {
      badge: 'Specialist Evaluations Queue • {count} cases',
      pageTitle: 'Technical & Property Valuation Cases',
      pageSubtitle: 'Review blueprints, property valuations, and assigned specialist cases.',
      backToDashboard: 'Back to Dashboard',
      filterAll: 'All Cases',
      filterPending: 'Pending Review',
      filterApproved: 'Approved',
      colCase: 'Case Title',
      colType: 'Evaluation Type',
      colDate: 'Submitted Date',
      colStatus: 'Status',
      colAction: 'Action',
      approveBtn: 'Approve Evaluation',
      completedLabel: 'Completed',
      approvedFeedback: 'Case "{title}" approved successfully.'
    }
  }
};

function deepMergeMissing(target, source) {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (
      source[key] &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key])
    ) {
      result[key] = deepMergeMissing(
        result[key] && typeof result[key] === 'object' ? result[key] : {},
        source[key]
      );
    } else if (result[key] === undefined) {
      result[key] = source[key];
    }
  }
  return result;
}

fs.mkdirSync(messagesDir, { recursive: true });

for (const locale of locales) {
  const filePath = path.join(messagesDir, `${locale}.json`);
  let existing = {};

  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '');
    existing = JSON.parse(raw);
  }

  const localeTemplate = baseTemplates[locale] || baseTemplates.en;
  let merged = deepMergeMissing(existing, localeTemplate);
  merged = deepMergeMissing(merged, baseTemplates.en);

  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  console.log(`Synced: messages/${locale}.json`);
}