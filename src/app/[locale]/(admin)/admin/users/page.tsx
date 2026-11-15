"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function AdminUsersManagementPage() {
  const searchParams = useSearchParams();
  const initialRole = searchParams.get("role") || "ALL";

  const [selectedRole, setSelectedRole] = useState(initialRole);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<any | null>(null);
  const [selectedDetailUser, setSelectedDetailUser] = useState<any | null>(null);

  const [formData, setFormData] = useState({
    name: "", username: "", email: "", mobile: "", role: "USER", status: "ACTIVE",
    country: "ایران", province: "تهران", city: "تهران", specialtyTitle: "", licenseNumber: "",
    companyName: "", bankName: "ملی", iban: "IR", featuredAllowed: "2", featuredActive: "0", description: ""
  });

  const [users, setUsers] = useState([
    {
      id: "1", name: "دکتر مورتضی اسماعیلی", username: "morteza_admin", email: "morteza.admin@melkism.com",
      mobile: "09121112233", role: "SUPER_ADMIN", status: "ACTIVE", province: "تهران", city: "تهران",
      specialtyTitle: "مدیر ارشد و معماری", licenseNumber: "IR-ADMIN-01", bankName: "پاسارگاد", iban: "IR550540101980002133445566",
      featuredAllowed: "10", featuredActive: "5", description: "دسترسی کامل به فایروال، تراکنش‌ها و مدیریت کلان."
    },
    {
      id: "2", name: "سارا رضایی", username: "sara_manager", email: "manager.ai@melkism.com",
      mobile: "09123334455", role: "MANAGER", status: "ACTIVE", province: "تهران", city: "تهران",
      specialtyTitle: "مدیر محتوا و هوش مصنوعی", licenseNumber: "MGR-992", bankName: "ملت", iban: "IR120120000000123456789012",
      featuredAllowed: "5", featuredActive: "2", description: "مسئول انتشار اخبار و کتابخانه تخصصی."
    },
    {
      id: "3", name: "شرکت انبوه‌سازی آلتون", username: "alton_build", email: "info@alton-build.com",
      mobile: "02188889999", role: "COMPANY", status: "ACTIVE", province: "تهران", city: "تهران",
      companyName: "سازندگان آلتون", licenseNumber: "45120", bankName: "تجارت", iban: "IR990180000000009876543211",
      featuredAllowed: "20", featuredActive: "8", description: "مجری برج‌های مسکونی لوکس و پیش‌فروش‌های ویژه."
    },
    {
      id: "4", name: "آژانس املاک مدرن پاسداران", username: "modern_agency", email: "modern.realestate@agency.ir",
      mobile: "02122223344", role: "AGENCY", status: "PENDING", province: "تهران", city: "تهران",
      licenseNumber: "LCS-8839", bankName: "سامان", iban: "IR440560000000112233445566",
      featuredAllowed: "10", featuredActive: "3", description: "در انتظار تأیید پروانه کسب و مدارک صنفی."
    },
    {
      id: "5", name: "مهندس آرش طاهری", username: "arash_expert", email: "expert.arash@melkism.com",
      mobile: "09195556677", role: "EXPERT", status: "ACTIVE", province: "تهران", city: "تهران",
      specialtyTitle: "کارشناس ارشد و ارزیاب ملک", licenseNumber: "ENG-4492", bankName: "ملی", iban: "IR330170000000004455667788",
      featuredAllowed: "4", featuredActive: "1", description: "عضو نظام مهندسی و متخصص ارزیابی فنی."
    },
    {
      id: "6", name: "علی اکبری", username: "ali_akbari", email: "ali.akbari@gmail.com",
      mobile: "09357778899", role: "USER", status: "ACTIVE", province: "تهران", city: "تهران",
      specialtyTitle: "کاربر عادی / متقاضی", description: "متقاضی خرید مسکن و سرمایه‌گذاری."
    }
  ]);

  const handleOpenModal = (user: any = null) => {
    if (user) {
      setEditingUser(user);
      setFormData({ ...user });
    } else {
      setEditingUser(null);
      setFormData({
        name: "", username: "", email: "", mobile: "", role: "USER", status: "ACTIVE",
        country: "ایران", province: "تهران", city: "تهران", specialtyTitle: "", licenseNumber: "",
        companyName: "", bankName: "ملی", iban: "IR", featuredAllowed: "2", featuredActive: "0", description: ""
      });
    }
    setShowModal(true);
  };

  const handleSaveUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    if (editingUser) {
      setUsers(users.map(u => u.id === editingUser.id ? { ...formData, id: u.id } : u));
      alert("اطلاعات کاربر با موفقیت ویرایش شد.");
    } else {
      const newUser = { ...formData, id: (users.length + 1).toString() };
      setUsers([newUser, ...users]);
      alert("کاربر جدید با موفقیت ایجاد شد.");
    }
    setShowModal(false);
  };

  const handleToggleStatus = (id: string, currentStatus: string) => {
    const nextStatus = currentStatus === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
    setUsers(users.map(u => u.id === id ? { ...u, status: nextStatus } : u));
  };

  const filteredUsers = users.filter(user => {
    const matchesRole = selectedRole === "ALL" || user.role === selectedRole;
    const matchesStatus = statusFilter === "ALL" || user.status === statusFilter;
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          user.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 dir-rtl font-sans space-y-6">
      
      {/* هدر صفحه */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block mb-1">
            مدیریت پیشرفته کاربران و تفکیک سطوح ۶ گانه
          </span>
          <h1 className="text-2xl font-black text-slate-900">کنترل جامع سطوح دسترسی، اطلاعات صنفی و مالی</h1>
          <p className="text-xs text-slate-500 mt-1">دسترسی مستقیم به گزارش‌های مالی و کیف پول هر کاربر از طریق جدول زیر.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/fa/admin/financial/users-ledger" className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm">
            💰 کل سوابق مالی کاربران
          </Link>
          <button onClick={() => handleOpenModal()} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm">
            + افزودن کاربر
          </button>
          <Link href="/fa/admin/dashboard" className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
            ← داشبورد
          </Link>
        </div>
      </div>

      {/* فیلترها */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
        <div className="flex flex-col lg:flex-row justify-between gap-4 items-center">
          <div className="flex flex-wrap gap-2 text-xs items-center w-full lg:w-auto">
            <span className="font-bold text-slate-700 ml-1">سطح:</span>
            {["ALL", "SUPER_ADMIN", "MANAGER", "COMPANY", "AGENCY", "EXPERT", "USER"].map(key => (
              <button 
                key={key}
                onClick={() => setSelectedRole(key)}
                className={`px-3 py-1.5 rounded-xl font-bold transition ${selectedRole === key ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {key}
              </button>
            ))}
          </div>
          <input 
            type="text" 
            placeholder="جستجو نام، ایمیل..." 
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="border border-slate-200 rounded-xl px-3.5 py-2 text-xs outline-none focus:border-indigo-600 bg-slate-50/50 w-56"
          />
        </div>
      </div>

      {/* جدول کاربران با لینک مستقیم مالی */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900">
          📋 لیست کاربران ({filteredUsers.length} مورد) — همراه با دکمه دسترسی مالی اختصاصی
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-medium">
                <th className="pb-3">نام کاربر</th>
                <th className="pb-3">ایمیل / موبایل</th>
                <th className="pb-3">نقش</th>
                <th className="pb-3">وضعیت</th>
                <th className="pb-3 text-center">عملیات اجرایی و مالی</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredUsers.map(user => (
                <tr key={user.id} className="hover:bg-slate-50/80 transition">
                  <td className="py-4 font-bold text-slate-900">
                    {user.name}
                    <span className="block text-[10px] text-slate-400 font-mono">@{user.username}</span>
                  </td>
                  <td className="py-4 text-slate-500 font-mono text-[11px]">
                    {user.email}
                    <span className="block text-[10px] text-slate-400">{user.mobile}</span>
                  </td>
                  <td className="py-4">
                    <span className="bg-indigo-50 text-indigo-700 font-bold px-2.5 py-1 rounded-lg text-[10px] border border-indigo-100">
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className={`font-bold px-2.5 py-1 rounded-lg text-[10px] ${user.status === 'ACTIVE' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                      {user.status === 'ACTIVE' ? '🟢 فعال' : '🔴 در انتظار تأیید'}
                    </span>
                  </td>
                  <td className="py-4 text-center space-x-2 space-x-reverse">
                    {/* دکمه اختصاصی لینک مالی برای هر کاربر */}
                    <Link 
                      href={`/fa/admin/financial/users-ledger?userId=${user.id}`}
                      className="inline-block bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold px-3 py-1.5 rounded-xl border border-emerald-200 transition"
                      title="مشاهده گزارش مالی، کیف پول و تراکنش‌ها"
                    >
                      📊 گزارش مالی
                    </Link>
                    <button 
                      onClick={() => handleOpenModal(user)} 
                      className="text-indigo-600 hover:underline font-bold"
                    >
                      ویرایش
                    </button>
                    <button 
                      onClick={() => setSelectedDetailUser(user)} 
                      className="text-slate-700 hover:underline font-bold"
                    >
                      جزئیات
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* مودال ویرایش (در صورت نیاز) */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md space-y-4 shadow-xl">
            <h3 className="text-base font-bold text-slate-900">ویرایش مشخصات کاربر</h3>
            <form onSubmit={handleSaveUser} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-600 font-bold mb-1">نام کامل</label>
                <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none" required />
              </div>
              <div>
                <label className="block text-slate-600 font-bold mb-1">ایمیل</label>
                <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none" required />
              </div>
              <div className="pt-2 flex gap-2 justify-end">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 bg-slate-100 text-slate-600 font-bold rounded-xl">انصراف</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white font-bold rounded-xl">ذخیره</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* مودال جزئیات */}
      {selectedDetailUser && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm space-y-3 shadow-xl text-xs">
            <h3 className="font-bold text-slate-900">اطلاعات تکمیلی: {selectedDetailUser.name}</h3>
            <p>● شبا بانکی: <span className="font-mono">{selectedDetailUser.iban}</span></p>
            <p>● سهمیه آگهی ویژه: {selectedDetailUser.featuredAllowed} عدد</p>
            <button onClick={() => setSelectedDetailUser(null)} className="w-full mt-2 py-2 bg-slate-800 text-white font-bold rounded-xl">بستن</button>
          </div>
        </div>
      )}

    </div>
  );
}