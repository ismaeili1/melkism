"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useLocalizedText } from "@/hooks/useLocalizedText";
import {
  EXPERT_DISCIPLINES,
  EXPERT_SERVICE_TYPES,
  QUALIFICATION_TIERS,
  SIX_STAGE_KEYS,
  ExpertDisciplineCode,
  ExpertServiceTypeCode,
  QualificationTierCode,
  QualificationVerificationStatus,
  ServiceCoverageZone,
  ServiceDeliveryMode,
  FreelanceScopeCode,
  ExpertQualificationRecord,
  ExpertServiceOffering,
  ExpertProjectCase,
  SixStageStep,
  evaluateQualificationVerification,
} from "@/lib/expert-service-model";

type ExpertTab = "OVERVIEW" | "QUALIFICATIONS" | "SERVICES" | "WORKFLOW";

const QUAL_KEY = "melkism_expert_qualifications_v1";
const ZONES_KEY = "melkism_expert_zones_v1";
const SERVICES_KEY = "melkism_expert_services_v1";
const PROJECTS_KEY = "melkism_expert_projects_v1";
const VERIFIED_KEY = "melkism_expert_identity_verified_v1";

export default function ExpertDashboardPage() {
  const params = useParams();
  const router = useRouter();
  const locale = (params?.locale as string) || "fa";
  const isRtl = ["fa", "ar"].includes(locale);
  const dir = isRtl ? "rtl" : "ltr";

  const { t, num } = useLocalizedText("ExpertWorkspace");

  const [activeTab, setActiveTab] = useState<ExpertTab>("OVERVIEW");
  const [identityVerified, setIdentityVerified] = useState<boolean>(false);

  // صلاحیت‌ها و مدارک
  const [qualifications, setQualifications] = useState<ExpertQualificationRecord[]>([]);
  const [discipline, setDiscipline] = useState<ExpertDisciplineCode>("ARC");
  const [tier, setTier] = useState<QualificationTierCode>("CONSULTANT_ENGINEER");
  const [licenseCode, setLicenseCode] = useState("");
  const [experienceYears, setExperienceYears] = useState("8");
  const [documentTitle, setDocumentTitle] = useState("");
  const [documentFileName, setDocumentFileName] = useState("");
  const [notes, setNotes] = useState("");

  // محدوده‌های خدمات‌دهی (چند محدوده + فریلنسری)
  const [zones, setZones] = useState<ServiceCoverageZone[]>([]);
  const [deliveryMode, setDeliveryMode] = useState<ServiceDeliveryMode>("ON_SITE_ZONES");
  const [country, setCountry] = useState(isRtl ? "ایران" : "Netherlands");
  const [province, setProvince] = useState(isRtl ? "تهران" : "North Holland");
  const [city, setCity] = useState(isRtl ? "تهران" : "Amsterdam");
  const [districtsInput, setDistrictsInput] = useState("");
  const [remoteScope, setRemoteScope] = useState<FreelanceScopeCode>("COUNTRY_WIDE");

  // خدمات قابل ارائه
  const [services, setServices] = useState<ExpertServiceOffering[]>([]);
  const [serviceTitle, setServiceTitle] = useState("");
  const [serviceType, setServiceType] = useState<ExpertServiceTypeCode>("ADVISORY");
  const [baseFee, setBaseFee] = useState("");

  // پروژه‌ها و مراحل ۶گانه
  const [projects, setProjects] = useState<ExpertProjectCase[]>([]);
  const [clientName, setClientName] = useState("");
  const [projectTitle, setProjectTitle] = useState("");

  useEffect(() => {
    try {
      const vRaw = window.localStorage.getItem(VERIFIED_KEY);
      if (vRaw === "true") setIdentityVerified(true);

      const qRaw = window.localStorage.getItem(QUAL_KEY);
      if (qRaw) setQualifications(JSON.parse(qRaw));

      const zRaw = window.localStorage.getItem(ZONES_KEY);
      if (zRaw) setZones(JSON.parse(zRaw));

      const sRaw = window.localStorage.getItem(SERVICES_KEY);
      if (sRaw) setServices(JSON.parse(sRaw));

      const pRaw = window.localStorage.getItem(PROJECTS_KEY);
      if (pRaw) setProjects(JSON.parse(pRaw));
    } catch {
      // ignore
    }
  }, []);

  function saveQualifications(next: ExpertQualificationRecord[]) {
    setQualifications(next);
    try {
      window.localStorage.setItem(QUAL_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  }

  function saveZones(next: ServiceCoverageZone[]) {
    setZones(next);
    try {
      window.localStorage.setItem(ZONES_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  }

  function saveServices(next: ExpertServiceOffering[]) {
    setServices(next);
    try {
      window.localStorage.setItem(SERVICES_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  }

  function saveProjects(next: ExpertProjectCase[]) {
    setProjects(next);
    try {
      window.localStorage.setItem(PROJECTS_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  }

  function handleVerifyIdentity() {
    setIdentityVerified(true);
    try {
      window.localStorage.setItem(VERIFIED_KEY, "true");
    } catch {
      // ignore
    }
  }

  function handleDocFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setDocumentFileName(file ? file.name : "");
  }

  function handleAddQualification(e: React.FormEvent) {
    e.preventDefault();
    if (!documentTitle.trim()) return;

    const computedStatus = evaluateQualificationVerification({
      identityVerified,
      tier,
      licenseCode,
      documentTitle,
    });

    const record: ExpertQualificationRecord = {
      id: `qual_${Date.now()}`,
      discipline,
      tier,
      licenseCode: licenseCode.trim() || "PENDING-ID",
      experienceYears: Math.max(0, Number(experienceYears) || 0),
      documentTitle: documentTitle.trim(),
      documentFileName: documentFileName || undefined,
      notes: notes.trim() || undefined,
      status: computedStatus,
      createdAt: new Date().toISOString(),
    };

    saveQualifications([record, ...qualifications]);
    setLicenseCode("");
    setDocumentTitle("");
    setDocumentFileName("");
    setNotes("");
  }

  function handleUpdateQualificationStatus(
    id: string,
    nextStatus: QualificationVerificationStatus
  ) {
    saveQualifications(
      qualifications.map((q) => (q.id === id ? { ...q, status: nextStatus } : q))
    );
  }

  function handleDeleteQualification(id: string) {
    saveQualifications(qualifications.filter((q) => q.id !== id));
  }

  function handleAddZone(e: React.FormEvent) {
    e.preventDefault();
    if (!country.trim()) return;

    const districts = districtsInput
      .split(",")
      .map((d) => d.trim())
      .filter(Boolean);

    const newZone: ServiceCoverageZone = {
      id: `zone_${Date.now()}`,
      mode: deliveryMode,
      country: country.trim(),
      province: province.trim() || undefined,
      city: city.trim() || undefined,
      districts,
      remoteScope: deliveryMode === "ON_SITE_ZONES" ? undefined : remoteScope,
    };

    saveZones([...zones, newZone]);
    setDistrictsInput("");
  }

  function handleDeleteZone(id: string) {
    saveZones(zones.filter((z) => z.id !== id));
  }

  function handleAddService(e: React.FormEvent) {
    e.preventDefault();
    if (!serviceTitle.trim()) return;

    const item: ExpertServiceOffering = {
      id: `srv_${Date.now()}`,
      title: serviceTitle.trim(),
      discipline,
      serviceType,
      baseFee: baseFee.trim() || "—",
      active: true,
    };

    saveServices([item, ...services]);
    setServiceTitle("");
    setBaseFee("");
  }

  function handleDeleteService(id: string) {
    saveServices(services.filter((s) => s.id !== id));
  }

  function handleAddProject(e: React.FormEvent) {
    e.preventDefault();
    if (!projectTitle.trim()) return;

    const proj: ExpertProjectCase = {
      id: `prj_${Date.now()}`,
      title: projectTitle.trim(),
      clientName: clientName.trim() || "Client",
      discipline,
      stage: 1,
      createdAt: new Date().toISOString(),
    };

    saveProjects([proj, ...projects]);
    setClientName("");
    setProjectTitle("");
  }

  function handleStepProjectStage(id: string, delta: -1 | 1) {
    saveProjects(
      projects.map((p) => {
        if (p.id !== id) return p;
        const nextStage = Math.min(6, Math.max(1, p.stage + delta)) as SixStageStep;
        return { ...p, stage: nextStage };
      })
    );
  }

  function getStatusLabel(status: QualificationVerificationStatus): string {
    switch (status) {
      case "AUTO_VERIFIED":
        return t("statusAutoVerified");
      case "ADMIN_APPROVED":
        return t("statusAdminApproved");
      case "PENDING_ADMIN":
        return t("statusPendingAdmin");
      case "NEEDS_REVISION":
        return t("statusNeedsRevision");
      case "REJECTED":
        return t("statusRejected");
    }
  }

  function getDisciplineLabel(code: ExpertDisciplineCode): string {
    const found = EXPERT_DISCIPLINES.find((d) => d.code === code);
    return found ? t(found.labelKey) : code;
  }

  function getServiceTypeLabel(code: ExpertServiceTypeCode): string {
    const found = EXPERT_SERVICE_TYPES.find((s) => s.code === code);
    return found ? t(found.labelKey) : code;
  }

  function getTierLabel(code: QualificationTierCode): string {
    const found = QUALIFICATION_TIERS.find((q) => q.code === code);
    return found ? t(found.labelKey) : code;
  }

  function getModeLabel(mode: ServiceDeliveryMode): string {
    if (mode === "ON_SITE_ZONES") return t("modeOnSite");
    if (mode === "FREELANCE_REMOTE") return t("modeFreelance");
    return t("modeHybrid");
  }

  function getRemoteScopeLabel(scope?: FreelanceScopeCode): string {
    if (scope === "INTERNATIONAL") return t("remoteInternational");
    if (scope === "SELECTED_ZONES") return t("remoteSelectedZones");
    return t("remoteCountryWide");
  }

  const verifiedQualCount = qualifications.filter(
    (q) => q.status === "AUTO_VERIFIED" || q.status === "ADMIN_APPROVED"
  ).length;

  const tabs: { id: ExpertTab; label: string }[] = [
    { id: "OVERVIEW", label: t("tabOverview") },
    { id: "QUALIFICATIONS", label: t("tabQualifications", { count: num(qualifications.length) }) },
    { id: "SERVICES", label: t("tabServices", { count: num(services.length) }) },
    { id: "WORKFLOW", label: t("tabWorkflow", { count: num(projects.length) }) },
  ];

  return (
    <div
      className={`min-h-screen bg-slate-50 text-slate-800 p-6 ${
        isRtl ? "dir-rtl" : "dir-ltr"
      } font-sans space-y-6`}
      dir={dir}
    >
      {/* هدر داشبورد متخصص */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div className="space-y-1">
          <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full inline-block">
            {t("roleBadge")}
          </span>
          <h1 className="text-2xl font-black text-slate-900">{t("pageTitle")}</h1>
          <p className="text-xs text-slate-500">{t("pageSubtitle")}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={`/${locale}/specialists`}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"
          >
            {t("viewPublicShowcase")}
          </Link>
          <button
            type="button"
            onClick={() => router.push(`/${locale}/login`)}
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-4 py-2.5 rounded-xl transition"
          >
            {t("backToLogin")}
          </button>
        </div>
      </div>

      {/* وضعیت احراز هویت */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="space-y-1">
          <div className="font-black text-slate-900">{t("authTitle")}</div>
          <p className="text-slate-500">
            {identityVerified ? t("authVerifiedDesc") : t("authUnverifiedDesc")}
          </p>
        </div>

        {identityVerified ? (
          <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold px-3.5 py-2 rounded-xl whitespace-nowrap">
            {t("authVerifiedBadge")}
          </span>
        ) : (
          <button
            type="button"
            onClick={handleVerifyIdentity}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl transition whitespace-nowrap"
          >
            {t("authVerifyBtn")}
          </button>
        )}
      </div>

      {/* شاخص‌های کلیدی */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="text-xs text-slate-500">{t("kpiActiveQualifications")}</div>
          <div className="text-2xl font-black text-indigo-700 mt-1">{num(verifiedQualCount)}</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="text-xs text-slate-500">{t("kpiActiveServices")}</div>
          <div className="text-2xl font-black text-slate-900 mt-1">{num(services.length)}</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="text-xs text-slate-500">{t("kpiActiveProjects")}</div>
          <div className="text-2xl font-black text-emerald-700 mt-1">{num(projects.length)}</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="text-xs text-slate-500">{t("kpiCoverageModes")}</div>
          <div className="text-2xl font-black text-amber-700 mt-1">{num(zones.length)}</div>
        </div>
      </div>

      {/* تب‌ها */}
      <div className="bg-white border border-slate-200 rounded-2xl p-2 shadow-sm flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === tab.id
                ? "bg-indigo-600 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* نمای کلی */}
      {activeTab === "OVERVIEW" && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {EXPERT_DISCIPLINES.map((d) => (
              <div
                key={d.code}
                className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 flex items-center justify-between"
              >
                <span className="font-bold text-slate-800">{t(d.labelKey)}</span>
                <span className="text-[10px] font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                  {d.code}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* تب صلاحیت‌ها و مدارک */}
      {activeTab === "QUALIFICATIONS" && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6 text-xs">
          <h2 className="text-sm font-black text-slate-900">{t("qualFormTitle")}</h2>

          <form onSubmit={handleAddQualification} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">{t("fieldCategory")}</label>
                <select
                  value={discipline}
                  onChange={(e) => setDiscipline(e.target.value as ExpertDisciplineCode)}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2 bg-slate-50"
                >
                  {EXPERT_DISCIPLINES.map((d) => (
                    <option key={d.code} value={d.code}>
                      {t(d.labelKey)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">
                  {t("fieldQualificationTier")}
                </label>
                <select
                  value={tier}
                  onChange={(e) => setTier(e.target.value as QualificationTierCode)}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2 bg-slate-50"
                >
                  {QUALIFICATION_TIERS.map((q) => (
                    <option key={q.code} value={q.code}>
                      {t(q.labelKey)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">{t("fieldLicenseCode")}</label>
                <input
                  type="text"
                  value={licenseCode}
                  onChange={(e) => setLicenseCode(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2 bg-slate-50"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">
                  {t("fieldExperienceYears")}
                </label>
                <input
                  type="number"
                  min={0}
                  value={experienceYears}
                  onChange={(e) => setExperienceYears(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2 bg-slate-50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">{t("fieldDocTitle")}</label>
                <input
                  type="text"
                  required
                  value={documentTitle}
                  onChange={(e) => setDocumentTitle(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2 bg-slate-50"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">{t("fieldDocFile")}</label>
                <input
                  type="file"
                  accept=".pdf,image/*"
                  onChange={handleDocFileChange}
                  className="w-full border border-slate-200 rounded-xl px-3 py-1.5 bg-slate-50"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 block">{t("fieldNotes")}</label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-3 py-2 bg-slate-50"
              />
            </div>

            <p className="text-[11px] text-slate-500">{t("autoVerifyHint")}</p>

            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-black px-5 py-2.5 rounded-xl transition"
            >
              {t("submitQualificationBtn")}
            </button>
          </form>

          {qualifications.length === 0 ? (
            <p className="text-slate-400">{t("noQualificationsText")}</p>
          ) : (
            <div className="space-y-2.5">
              {qualifications.map((q) => (
                <div
                  key={q.id}
                  className="p-4 rounded-xl border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-black text-slate-900">
                        {getDisciplineLabel(q.discipline)}
                      </span>
                      <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-bold">
                        {getStatusLabel(q.status)}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {getTierLabel(q.tier)} • {q.licenseCode} • {q.documentTitle}
                      {q.documentFileName ? ` (${q.documentFileName})` : ""}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {q.status === "PENDING_ADMIN" && (
                      <button
                        type="button"
                        onClick={() =>
                          handleUpdateQualificationStatus(q.id, "ADMIN_APPROVED")
                        }
                        className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-bold"
                      >
                        {t("approveAdminSimBtn")}
                      </button>
                    )}
                    {q.status !== "PENDING_ADMIN" && (
                      <button
                        type="button"
                        onClick={() =>
                          handleUpdateQualificationStatus(q.id, "PENDING_ADMIN")
                        }
                        className="px-3 py-1 rounded-lg bg-amber-50 text-amber-800 font-bold"
                      >
                        {t("moveAdminQueueBtn")}
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => handleDeleteQualification(q.id)}
                      className="px-3 py-1 rounded-lg text-rose-600 font-bold hover:underline"
                    >
                      {t("deleteBtn")}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* تب خدمات و محدوده‌های خدمات‌دهی */}
      {activeTab === "SERVICES" && (
        <div className="space-y-6 text-xs">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5">
            <h2 className="text-sm font-black text-slate-900">{t("zonesSectionTitle")}</h2>

            <form onSubmit={handleAddZone} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                <select
                  value={deliveryMode}
                  onChange={(e) => setDeliveryMode(e.target.value as ServiceDeliveryMode)}
                  className="border border-slate-200 rounded-xl px-3 py-2 bg-slate-50 font-bold"
                >
                  <option value="ON_SITE_ZONES">{t("modeOnSite")}</option>
                  <option value="FREELANCE_REMOTE">{t("modeFreelance")}</option>
                  <option value="HYBRID_PROJECT_BASED">{t("modeHybrid")}</option>
                </select>

                <input
                  type="text"
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder={t("fieldCountry")}
                  className="border border-slate-200 rounded-xl px-3 py-2 bg-slate-50"
                />

                <input
                  type="text"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  placeholder={t("fieldProvince")}
                  className="border border-slate-200 rounded-xl px-3 py-2 bg-slate-50"
                />

                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder={t("fieldCity")}
                  className="border border-slate-200 rounded-xl px-3 py-2 bg-slate-50"
                />

                {deliveryMode === "ON_SITE_ZONES" ? (
                  <input
                    type="text"
                    value={districtsInput}
                    onChange={(e) => setDistrictsInput(e.target.value)}
                    placeholder={t("fieldDistricts")}
                    className="border border-slate-200 rounded-xl px-3 py-2 bg-slate-50"
                  />
                ) : (
                  <select
                    value={remoteScope}
                    onChange={(e) => setRemoteScope(e.target.value as FreelanceScopeCode)}
                    className="border border-slate-200 rounded-xl px-3 py-2 bg-slate-50 font-bold"
                  >
                    <option value="COUNTRY_WIDE">{t("remoteCountryWide")}</option>
                    <option value="INTERNATIONAL">{t("remoteInternational")}</option>
                    <option value="SELECTED_ZONES">{t("remoteSelectedZones")}</option>
                  </select>
                )}
              </div>

              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-2 rounded-xl transition"
              >
                {t("addZoneBtn")}
              </button>
            </form>

            {zones.length === 0 ? (
              <p className="text-slate-400">{t("noZonesText")}</p>
            ) : (
              <div className="space-y-2">
                {zones.map((z) => (
                  <div
                    key={z.id}
                    className="p-3.5 rounded-xl border border-slate-200 flex items-center justify-between gap-3"
                  >
                    <div>
                      <span className="font-bold text-slate-900">{getModeLabel(z.mode)}</span>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        {[z.country, z.province, z.city].filter(Boolean).join(" / ")}
                        {z.districts && z.districts.length > 0
                          ? ` • ${z.districts.join(", ")}`
                          : ""}
                        {z.mode !== "ON_SITE_ZONES"
                          ? ` • ${getRemoteScopeLabel(z.remoteScope)}`
                          : ""}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDeleteZone(z.id)}
                      className="text-rose-600 font-bold hover:underline"
                    >
                      {t("deleteBtn")}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5">
            <h2 className="text-sm font-black text-slate-900">{t("serviceFormTitle")}</h2>

            <form
              onSubmit={handleAddService}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
            >
              <input
                type="text"
                required
                value={serviceTitle}
                onChange={(e) => setServiceTitle(e.target.value)}
                placeholder={t("fieldServiceTitle")}
                className="border border-slate-200 rounded-xl px-3 py-2 bg-slate-50"
              />
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value as ExpertServiceTypeCode)}
                className="border border-slate-200 rounded-xl px-3 py-2 bg-slate-50"
              >
                {EXPERT_SERVICE_TYPES.map((st) => (
                  <option key={st.code} value={st.code}>
                    {t(st.labelKey)}
                  </option>
                ))}
              </select>
              <input
                type="text"
                value={baseFee}
                onChange={(e) => setBaseFee(e.target.value)}
                placeholder={t("fieldBaseFee")}
                className="border border-slate-200 rounded-xl px-3 py-2 bg-slate-50"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-2 rounded-xl transition"
              >
                {t("addServiceBtn")}
              </button>
            </form>

            {services.length === 0 ? (
              <p className="text-slate-400">{t("noServicesText")}</p>
            ) : (
              <div className="space-y-2">
                {services.map((s) => (
                  <div
                    key={s.id}
                    className="p-3.5 rounded-xl border border-slate-200 flex items-center justify-between gap-3"
                  >
                    <div>
                      <span className="font-bold text-slate-900">{s.title}</span>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        {getDisciplineLabel(s.discipline)} • {getServiceTypeLabel(s.serviceType)} •{" "}
                        {s.baseFee}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDeleteService(s.id)}
                      className="text-rose-600 font-bold hover:underline"
                    >
                      {t("deleteBtn")}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* تب پروژه‌ها و مراحل ۶گانه */}
      {activeTab === "WORKFLOW" && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6 text-xs">
          <h2 className="text-sm font-black text-slate-900">{t("workflowFormTitle")}</h2>

          <form
            onSubmit={handleAddProject}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            <input
              type="text"
              required
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              placeholder={t("fieldProjectTitle")}
              className="border border-slate-200 rounded-xl px-3 py-2 bg-slate-50"
            />
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder={t("fieldClientName")}
              className="border border-slate-200 rounded-xl px-3 py-2 bg-slate-50"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-2 rounded-xl transition"
            >
              {t("addProjectBtn")}
            </button>
          </form>

          {projects.length === 0 ? (
            <p className="text-slate-400">{t("noProjectsText")}</p>
          ) : (
            <div className="space-y-3">
              {projects.map((p) => {
                const stageMeta =
                  SIX_STAGE_KEYS.find((st) => st.step === p.stage) || SIX_STAGE_KEYS[0];
                return (
                  <div
                    key={p.id}
                    className="p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="font-black text-slate-900">{p.title}</div>
                      <div className="text-[11px] text-indigo-700 font-bold">
                        {t(stageMeta.titleKey)} • {p.clientName}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        disabled={p.stage <= 1}
                        onClick={() => handleStepProjectStage(p.id, -1)}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 disabled:opacity-40 font-bold"
                      >
                        {t("prevStageBtn")}
                      </button>
                      <button
                        type="button"
                        disabled={p.stage >= 6}
                        onClick={() => handleStepProjectStage(p.id, 1)}
                        className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white disabled:opacity-40 font-bold"
                      >
                        {t("nextStageBtn")}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}