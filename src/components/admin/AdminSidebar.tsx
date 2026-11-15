import Link from "next/link";

// لیست آیتم‌های منوی منوی ادمین
const ADMIN_MENU_ITEMS = [
  { title: "داشبورد اصلی", href: "/fa/admin/dashboard", icon: "📊" },
  { title: "ماتریس اختیارات ۲۱گانه", href: "/fa/admin/security/permissions", icon: "🛡️" },
  { title: "مدیریت معاملات و اسکرو", href: "/fa/admin/transactions/scenarios", icon: "💎" },
  
  // 🌟 لینک جدید دسترسی به مرکز فایل‌های خام اکسل و آپلود انبوه
  { title: "مرکز فایل اکسل و ورود انبوه", href: "/fa/admin/import", icon: "📥" },

  { title: "مدیریت کاربران", href: "/fa/admin/users", icon: "👥" },
  { title: "تنظیمات سیستم", href: "/fa/admin/settings", icon: "⚙️" },
  { title: "مخزن تصاویر و ویرایشگر", href: "/fa/admin/media-library", icon: "🖼️" },
];

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-slate-100 min-h-screen p-4 dir-rtl font-sans space-y-6">
      <div className="px-2 py-3 border-b border-slate-800">
        <h2 className="text-lg font-black text-indigo-400">پنل مدیریت ملکیسم</h2>
        <span className="text-[10px] text-slate-500 block mt-0.5">سطح دسترسی: SUPER_ADMIN / MANAGER</span>
      </div>

      <nav className="space-y-1">
        {ADMIN_MENU_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 hover:text-white transition"
          >
            <span className="text-base">{item.icon}</span>
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}