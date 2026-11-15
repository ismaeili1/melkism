import Link from "next/link";

export default function AdminSidebar({ locale }: { locale: string }) {
  return (
    <aside className="w-64 bg-white border-l border-gray-200 min-h-screen p-4 flex flex-col space-y-2 shadow-sm">
      <div className="text-xl font-bold text-gray-800 mb-6 px-4">
        پنل مدیریت ملکیسم
      </div>
      
      <Link
        href={`/${locale}/admin`}
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
      >
        🏠 داشبورد
      </Link>

      <Link
        href={`/${locale}/admin/users`}
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
      >
        👥 مدیریت کاربران
      </Link>

      <Link
        href={`/${locale}/admin/reports`}
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
      >
        📊 گزارش‌های جامع عملکرد
      </Link>
    </aside>
  );
}