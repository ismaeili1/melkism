import { getAllEscrowTransactions, updateEscrowStatus } from "@/actions/escrow";
import { EscrowStatus } from "@prisma/client";

// ترجمه وضعیت‌های اسکرو به فارسی همراه با استایل‌های نمایشی
const STATUS_CONFIG: Record<EscrowStatus, { label: string; color: string }> = {
  PENDING_DEPOSIT: { label: "در انتظار واریز", color: "bg-amber-50 text-amber-700 border-amber-200" },
  DEPOSITED_IN_ESCROW: { label: "مسدود در اسکرو", color: "bg-blue-50 text-blue-700 border-blue-200" },
  UNDER_INSPECTION: { label: "در حال بازرسی", color: "bg-purple-50 text-purple-700 border-purple-200" },
  RELEASED: { label: "آزاد شده به فروشنده", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  REFUNDED: { label: "مرجوع به خریدار", color: "bg-rose-50 text-rose-700 border-rose-200" },
  DISPUTED: { label: "دارای اختلاف (مسدود)", color: "bg-red-100 text-red-800 border-red-300 font-bold" },
};

interface EscrowScenariosPageProps {
  params: { locale: string };
}

export default async function EscrowScenariosPage({ params }: EscrowScenariosPageProps) {
  const { locale } = params;
  const dir = ["fa", "ar"].includes(locale) ? "rtl" : "ltr";

  const transactions = await getAllEscrowTransactions();

  // محاسبات آمار کلی صندوق (Escrow Metrics)
  const totalVolume = transactions.reduce((acc, t) => acc + t.amount, 0);
  const activeEscrow = transactions
    .filter((t) => t.status === "DEPOSITED_IN_ESCROW" || t.status === "UNDER_INSPECTION")
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 p-6 ${dir === "rtl" ? "dir-rtl" : "dir-ltr"} font-sans space-y-6 max-w-7xl mx-auto`} dir={dir}>
      
      {/* هدر صفحه */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full inline-block mb-1">
            سیستم مالی امن و حساب‌های واسط (Escrow Engine)
          </span>
          <h1 className="text-2xl font-black text-slate-900">مدیریت معاملات و سناریوهای تسویه حساب</h1>
          <p className="text-xs text-slate-500 mt-1">نظارت بر سپرده‌های بانکی، روند بازرسی ملک و آزاد‌سازی ایمن وجوه بین خریداران و سازندگان.</p>
        </div>
      </div>

      {/* کارت‌های خلاصه آماری */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
          <span className="text-xs text-slate-400 block font-medium">کل حجم معاملات ثبت‌شده</span>
          <span className="text-xl font-black text-slate-900 mt-1 block">
            {totalVolume.toLocaleString()} <span className="text-xs font-normal text-slate-500">تومان</span>
          </span>
        </div>
        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
          <span className="text-xs text-slate-400 block font-medium">موجودی فعال در حساب اسکرو (امن)</span>
          <span className="text-xl font-black text-blue-600 mt-1 block">
            {activeEscrow.toLocaleString()} <span className="text-xs font-normal text-slate-500">تومان</span>
          </span>
        </div>
        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
          <span className="text-xs text-slate-400 block font-medium">تعداد کل قراردادهای در جریان</span>
          <span className="text-xl font-black text-slate-900 mt-1 block">{transactions.length} قرارداد</span>
        </div>
      </div>

      {/* جدول لیست معاملات اسکرو */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm overflow-x-auto">
        <table className={`w-full ${dir === 'rtl' ? 'text-right' : 'text-left'} text-xs`}>
          <thead>
            <tr className="border-b border-slate-200 text-slate-900 font-bold bg-slate-50">
              <th className={`p-3.5 ${dir === 'rtl' ? 'rounded-r-xl' : 'rounded-l-xl'}`}>کد رهگیری</th>
              <th className="p-3.5">خریدار</th>
              <th className="p-3.5">فروشنده / سازنده</th>
              <th className="p-3.5">مبلغ معامله (تومان)</th>
              <th className="p-3.5">وضعیت اسکرو</th>
              <th className={`p-3.5 ${dir === 'rtl' ? 'rounded-l-xl' : 'rounded-r-xl'} text-center`}>عملیات و تغییر وضعیت</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {transactions.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-8 text-slate-400">
                  هنوز هیچ معامله اسکرویی در سیستم ثبت نشده است.
                </td>
              </tr>
            ) : (
              transactions.map((tx) => {
                const statusInfo = STATUS_CONFIG[tx.status];
                return (
                  <tr key={tx.id} className="hover:bg-slate-50/80 transition">
                    <td className="p-4 font-mono font-bold text-indigo-600">{tx.trackingCode}</td>
                    <td className="p-4">
                      <div className="font-bold text-slate-800">{tx.buyer.name || "بدون نام"}</div>
                      <div className="text-[10px] text-slate-400">{tx.buyer.mobile || tx.buyer.email}</div>
                    </td>
                    <td className="p-4">
                      <div className="font-bold text-slate-800">{tx.seller.name || "بدون نام"}</div>
                      <div className="text-[10px] text-slate-400">
                        {tx.seller.role} - {tx.seller.mobile || tx.seller.email}
                      </div>
                    </td>
                    <td className="p-4 font-bold text-slate-900">
                      {tx.amount.toLocaleString()} تومان
                    </td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] border inline-block ${statusInfo.color}`}>
                        {statusInfo.label}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex justify-center items-center gap-2">
                        {/* دکمه آزادسازی وجه */}
                        {tx.status !== "RELEASED" && (
                          <form
                            action={async () => {
                              "use server";
                              await updateEscrowStatus(
                                tx.id,
                                EscrowStatus.RELEASED,
                                "ADMIN_SYSTEM",
                                "آزادسازی وجه با تایید مدیر مالی"
                              );
                            }}
                          >
                            <button
                              type="submit"
                              className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg text-[10px] font-bold transition shadow-sm whitespace-nowrap"
                            >
                              آزادسازی وجه ✓
                            </button>
                          </form>
                        )}

                        {/* دکمه انتقال به وضعیت اختلاف/مسدودی */}
                        {tx.status !== "DISPUTED" && tx.status !== "RELEASED" && (
                          <form
                            action={async () => {
                              "use server";
                              await updateEscrowStatus(
                                tx.id,
                                EscrowStatus.DISPUTED,
                                "ADMIN_SYSTEM",
                                "گزارش اختلاف مالی و مسدودی حساب واسط"
                              );
                            }}
                          >
                            <button
                              type="submit"
                              className="bg-rose-100 hover:bg-rose-200 text-rose-700 px-3 py-1.5 rounded-lg text-[10px] font-bold transition whitespace-nowrap"
                            >
                              اختلاف مالی ⚠️
                            </button>
                          </form>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}