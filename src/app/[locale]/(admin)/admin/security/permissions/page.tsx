import { getPermissionsMatrix, toggleRolePermission } from "@/actions/permissions";
import { EscrowStatus } from "@prisma/client"; // در صورت نیاز یا حفظ ایمپورت‌ها

const ROLES = [
  { code: "USER", title: "کاربر عادی" },
  { code: "EXPERT", title: "کارشناس" },
  { code: "AGENCY", title: "دفتر املاک" },
  { code: "COMPANY", title: "شرکت سازنده" },
  { code: "MANAGER", title: "مدیر سیستم" },
  { code: "SUPER_ADMIN", title: "سوپرادمین" },
];

interface PermissionsMatrixPageProps {
  params: { locale: string };
}

export default async function PermissionsMatrixPage({ params }: PermissionsMatrixPageProps) {
  const { locale } = params;
  const dir = ["fa", "ar"].includes(locale) ? "rtl" : "ltr";

  const permissions = await getPermissionsMatrix();

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 p-6 ${dir === "rtl" ? "dir-rtl" : "dir-ltr"} font-sans space-y-6 max-w-7xl mx-auto`} dir={dir}>
      
      {/* هدر صفحه */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block mb-1">
            سیستم کنترل دسترسی پویا (Dynamic RBAC Engine)
          </span>
          <h1 className="text-2xl font-black text-slate-900">مدیریت جامع اختیارات و فرآیندهای عملیاتی ۲۱گانه</h1>
          <p className="text-xs text-slate-500 mt-1">مدیریت تفکیک‌شده تولید، ویرایش، تأیید و نظارت بر محتوا، املاک، قوانین، مالی و کامنت‌ها از پایگاه‌داده.</p>
        </div>
      </div>

      {/* جدول ماتریس دسترسی‌ها */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm overflow-x-auto">
        <table className={`w-full ${dir === 'rtl' ? 'text-right' : 'text-left'} text-xs`}>
          <thead>
            <tr className="border-b border-slate-200 text-slate-900 font-bold bg-slate-50">
              <th className={`p-3.5 ${dir === 'rtl' ? 'rounded-r-xl' : 'rounded-l-xl'} w-[300px]`}>عنوان مجوز / فرآیند عملیاتی</th>
              <th className="p-3.5">دسته‌بندی</th>
              {ROLES.map((r) => (
                <th key={r.code} className={`p-3.5 text-center ${dir === 'rtl' ? 'border-r' : 'border-l'} border-slate-100`}>
                  {r.title}
                  <span className="block text-[9px] text-slate-400 font-mono mt-0.5" dir="ltr">{r.code}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {permissions.map((perm) => (
              <tr key={perm.id} className="hover:bg-slate-50/80 transition">
                <td className="p-4 font-bold text-slate-900">
                  {perm.name}
                  <span className="block text-[10px] text-slate-400 font-mono font-normal" dir="ltr">{perm.code}</span>
                </td>
                <td className="p-4 text-slate-500">
                  <span className="bg-slate-100 px-2.5 py-1 rounded-lg text-[10px] inline-block">
                    {perm.category || "عمومی"}
                  </span>
                </td>
                {ROLES.map((role) => {
                  const rolePerm = perm.roles.find((r) => r.role === role.code);
                  const isGranted = role.code === "SUPER_ADMIN" ? true : (rolePerm ? rolePerm.granted : false);

                  return (
                    <td key={role.code} className={`p-4 text-center ${dir === 'rtl' ? 'border-r' : 'border-l'} border-slate-100`}>
                      <form action={async () => {
                        "use server";
                        if (role.code !== "SUPER_ADMIN") {
                          await toggleRolePermission(role.code, perm.id, !isGranted);
                        }
                      }}>
                        <button
                          type="submit"
                          disabled={role.code === "SUPER_ADMIN"}
                          className={`w-6 h-6 rounded flex items-center justify-center mx-auto transition-colors cursor-pointer disabled:opacity-50 ${
                            isGranted ? "bg-emerald-600 text-white" : "bg-slate-200 text-transparent hover:bg-slate-300"
                          }`}
                        >
                          ✓
                        </button>
                      </form>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}