import fs from "fs";
import path from "path";

const fullUserDashboardHome = {
  fa: {
    roleBadge: "حساب شخصی کاربر عادی (USER)",
    pageTitle: "داشبورد حساب شخصی",
    pageSubtitle: "مدیریت آگهی‌ها و موارد ذخیره‌شده شخصی، درخواست‌ها، کیف‌پول و پروفایل فردی شما.",
    walletTopBtn: "کیف پول و گزارش مالی من",
    walletActiveBadge: "فعال",
    ordersCardTitle: "مدیریت سفارش‌ها و آگهی‌ها",
    ordersCardDesc: "ثبت و پیگیری آگهی‌های عادی، ویژه و پروژه‌های ساختمانی.",
    ordersCardLink: "مشاهده سفارش‌ها",
    balanceCardTitle: "موجودی و رسیدهای پرداخت",
    balanceCardDesc: "بررسی تخفیف‌ها، جوایز، رسیدها و عودت وجه.",
    balanceCardLink: "ورود به کیف پول",
    profileCardTitle: "پروفایل شخصی و اطلاعات فردی",
    profileCardDesc: "ویرایش نام، ایمیل شخصی، شماره موبایل، شهر و توضیحات فردی.",
    profileCardLink: "ویرایش پروفایل شخصی"
  },
  ar: {
    roleBadge: "حساب شخصي للمستخدم العادي (USER)",
    pageTitle: "لوحة الحساب الشخصي",
    pageSubtitle: "إدارة الإعلانات والعناصر المحفوظة والطلبات والمحفظة والملف الشخصي.",
    walletTopBtn: "محفظتي والتقرير المالي",
    walletActiveBadge: "نشط",
    ordersCardTitle: "إدارة الطلبات والإعلانات",
    ordersCardDesc: "إنشاء ومتابعة الإعلانات العادية والمميزة والمشاريع العقارية.",
    ordersCardLink: "عرض الطلبات",
    balanceCardTitle: "الرصيد وإيصالات الدفع",
    balanceCardDesc: "مراجعة الخصومات والمكافآت والإيصالات واسترداد المبالغ.",
    balanceCardLink: "فتح المحفظة",
    profileCardTitle: "الملف الشخصي والبيانات الفردية",
    profileCardDesc: "تعديل الاسم والبريد الشخصي ورقم الجوال والمدينة والنبذة الشخصية.",
    profileCardLink: "تعديل الملف الشخصي"
  },
  en: {
    roleBadge: "Personal Account (USER)",
    pageTitle: "Personal Account Dashboard",
    pageSubtitle: "Manage your personal listings, saved items, requests, wallet, and individual profile.",
    walletTopBtn: "My Wallet & Financial Report",
    walletActiveBadge: "Active",
    ordersCardTitle: "Orders & Listings Management",
    ordersCardDesc: "Create and track standard listings, featured ads, and construction projects.",
    ordersCardLink: "View Orders",
    balanceCardTitle: "Balance & Payment Receipts",
    balanceCardDesc: "Review discounts, rewards, receipts, and refunds.",
    balanceCardLink: "Open Wallet",
    profileCardTitle: "Personal Profile & Info",
    profileCardDesc: "Edit your name, personal email, mobile number, city, and personal bio.",
    profileCardLink: "Edit Personal Profile"
  },
  de: {
    roleBadge: "Persönliches Konto (USER)",
    pageTitle: "Persönliches Konto-Dashboard",
    pageSubtitle: "Verwalten Sie persönliche Anzeigen, gespeicherte Einträge, Anfragen, Wallet und Profil.",
    walletTopBtn: "Mein Wallet & Finanzbericht",
    walletActiveBadge: "Aktiv",
    ordersCardTitle: "Bestellungen & Anzeigenverwaltung",
    ordersCardDesc: "Standardanzeigen, hervorgehobene Einträge und Bauprojekte erstellen und verfolgen.",
    ordersCardLink: "Bestellungen ansehen",
    balanceCardTitle: "Guthaben & Zahlungsbelege",
    balanceCardDesc: "Rabatte, Prämien, Belege und Rückerstattungen prüfen.",
    balanceCardLink: "Wallet öffnen",
    profileCardTitle: "Persönliches Profil & Daten",
    profileCardDesc: "Bearbeiten Sie Namen, persönliche E-Mail, Mobilnummer, Stadt und Kurzbeschreibung.",
    profileCardLink: "Persönliches Profil bearbeiten"
  },
  fr: {
    roleBadge: "Compte personnel (USER)",
    pageTitle: "Tableau de bord personnel",
    pageSubtitle: "Gérez vos annonces personnelles, éléments enregistrés, demandes, portefeuille et profil.",
    walletTopBtn: "Mon portefeuille & rapport financier",
    walletActiveBadge: "Actif",
    ordersCardTitle: "Gestion des commandes & annonces",
    ordersCardDesc: "Créer et suivre les annonces standards, mises en avant et projets de construction.",
    ordersCardLink: "Voir les commandes",
    balanceCardTitle: "Solde & reçus de paiement",
    balanceCardDesc: "Consulter les remises, bonus, reçus et remboursements.",
    balanceCardLink: "Ouvrir le portefeuille",
    profileCardTitle: "Profil personnel & informations",
    profileCardDesc: "Modifiez votre nom, e-mail personnel, mobile, ville et présentation.",
    profileCardLink: "Modifier le profil personnel"
  },
  es: {
    roleBadge: "Cuenta personal (USER)",
    pageTitle: "Panel de cuenta personal",
    pageSubtitle: "Administre sus anuncios personales, guardados, solicitudes, billetera y perfil.",
    walletTopBtn: "Mi billetera e informe financiero",
    walletActiveBadge: "Activo",
    ordersCardTitle: "Gestión de pedidos y anuncios",
    ordersCardDesc: "Cree y siga anuncios estándar, destacados y proyectos de construcción.",
    ordersCardLink: "Ver pedidos",
    balanceCardTitle: "Saldo y comprobantes de pago",
    balanceCardDesc: "Revise descuentos, recompensas, comprobantes y reembolsos.",
    balanceCardLink: "Abrir billetera",
    profileCardTitle: "Perfil personal e información",
    profileCardDesc: "Edite su nombre, correo personal, teléfono, ciudad y biografía.",
    profileCardLink: "Editar perfil personal"
  },
  tr: {
    roleBadge: "Kişisel Hesap (USER)",
    pageTitle: "Kişisel Hesap Paneli",
    pageSubtitle: "Kişisel ilanlarınızı, kayıtlı öğelerinizi, taleplerinizi, cüzdanınızı ve profilinizi yönetin.",
    walletTopBtn: "Cüzdanım ve Finansal Rapor",
    walletActiveBadge: "Aktif",
    ordersCardTitle: "Sipariş ve İlan Yönetimi",
    ordersCardDesc: "Standart ilanları, öne çıkan reklamları ve inşaat projelerini oluşturun ve takip edin.",
    ordersCardLink: "Siparişleri Gör",
    balanceCardTitle: "Bakiye ve Ödeme Dekontları",
    balanceCardDesc: "İndirimleri, ödülleri, dekontları ve iadeleri inceleyin.",
    balanceCardLink: "Cüzdanı Aç",
    profileCardTitle: "Kişisel Profil ve Bilgiler",
    profileCardDesc: "Adınızı, kişisel e-postanızı, telefonunuzu, şehrinizi ve biyografinizi düzenleyin.",
    profileCardLink: "Kişisel Profili Düzenle"
  },
  ru: {
    roleBadge: "Личный аккаунт (USER)",
    pageTitle: "Личный кабинет",
    pageSubtitle: "Управляйте личными объявлениями, сохранённым, запросами, кошельком и профилем.",
    walletTopBtn: "Мой кошелёк и финансовый отчёт",
    walletActiveBadge: "Активен",
    ordersCardTitle: "Управление заказами и объявлениями",
    ordersCardDesc: "Создавайте и отслеживайте обычные объявления, спецразмещения и строительные проекты.",
    ordersCardLink: "Смотреть заказы",
    balanceCardTitle: "Баланс и чеки оплат",
    balanceCardDesc: "Проверяйте скидки, бонусы, чеки и возвраты средств.",
    balanceCardLink: "Открыть кошелёк",
    profileCardTitle: "Личный профиль и данные",
    profileCardDesc: "Редактируйте имя, личный email, телефон, город и описание профиля.",
    profileCardLink: "Редактировать личный профиль"
  },
  zh: {
    roleBadge: "个人账户 (USER)",
    pageTitle: "个人账户控制台",
    pageSubtitle: "管理您的个人房源/信息、收藏、申请、钱包和个人资料。",
    walletTopBtn: "我的钱包与财务报表",
    walletActiveBadge: "已启用",
    ordersCardTitle: "订单与房源信息管理",
    ordersCardDesc: "创建并跟踪普通信息、置顶推广和建筑项目。",
    ordersCardLink: "查看订单",
    balanceCardTitle: "余额与支付凭证",
    balanceCardDesc: "查看优惠、奖励、收据和退款记录。",
    balanceCardLink: "打开钱包",
    profileCardTitle: "个人资料与信息",
    profileCardDesc: "编辑您的姓名、个人邮箱、手机号、城市和个人简介。",
    profileCardLink: "编辑个人资料"
  },
  it: {
    roleBadge: "Account personale (USER)",
    pageTitle: "Dashboard account personale",
    pageSubtitle: "Gestisci annunci personali, elementi salvati, richieste, portafoglio e profilo.",
    walletTopBtn: "Il mio portafoglio e report finanziario",
    walletActiveBadge: "Attivo",
    ordersCardTitle: "Gestione ordini e annunci",
    ordersCardDesc: "Crea e monitora annunci standard, in evidenza e progetti edilizi.",
    ordersCardLink: "Vedi ordini",
    balanceCardTitle: "Saldo e ricevute di pagamento",
    balanceCardDesc: "Controlla sconti, bonus, ricevute e rimborsi.",
    balanceCardLink: "Apri portafoglio",
    profileCardTitle: "Profilo personale e dati",
    profileCardDesc: "Modifica nome, email personale, cellulare, città e note personali.",
    profileCardLink: "Modifica profilo personale"
  }
};

for (const [lang, userNs] of Object.entries(fullUserDashboardHome)) {
  const filePath = path.join("messages", `${lang}.json`);
  const raw = fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, "");
  const data = JSON.parse(raw);
  data.UserDashboardHome = { ...(data.UserDashboardHome || {}), ...userNs };
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
  console.log(`Synced UserDashboardHome in messages/${lang}.json`);
}
