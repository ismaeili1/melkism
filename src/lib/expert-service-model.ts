export type ExpertDisciplineCode =
  | "ARC"
  | "INT"
  | "URB"
  | "LND"
  | "STR"
  | "MEP"
  | "VAL"
  | "FES"
  | "BIM"
  | "AIX"
  | "PMM";

export type ExpertServiceTypeCode =
  | "ADVISORY"
  | "STUDIES"
  | "DESIGN"
  | "SUPERVISION"
  | "EXECUTION"
  | "VALUATION";

export type QualificationTierCode =
  | "OFFICIAL_EXPERT"
  | "INDEPENDENT_VALUER"
  | "CONSULTANT_ENGINEER"
  | "TECHNICAL_SPECIALIST";

export type QualificationVerificationStatus =
  | "AUTO_VERIFIED"
  | "ADMIN_APPROVED"
  | "PENDING_ADMIN"
  | "NEEDS_REVISION"
  | "REJECTED";

export type ServiceDeliveryMode =
  | "ON_SITE_ZONES"
  | "FREELANCE_REMOTE"
  | "HYBRID_PROJECT_BASED";

export type FreelanceScopeCode =
  | "COUNTRY_WIDE"
  | "INTERNATIONAL"
  | "SELECTED_ZONES";

export interface ServiceCoverageZone {
  id: string;
  mode: ServiceDeliveryMode;
  country: string;
  province?: string;
  city?: string;
  districts?: string[];
  remoteScope?: FreelanceScopeCode;
}

export interface ExpertQualificationRecord {
  id: string;
  discipline: ExpertDisciplineCode;
  tier: QualificationTierCode;
  licenseCode: string;
  experienceYears: number;
  documentTitle: string;
  documentFileName?: string;
  notes?: string;
  status: QualificationVerificationStatus;
  createdAt: string;
}

export interface ExpertServiceOffering {
  id: string;
  title: string;
  discipline: ExpertDisciplineCode;
  serviceType: ExpertServiceTypeCode;
  baseFee: string;
  active: boolean;
}

export type SixStageStep = 1 | 2 | 3 | 4 | 5 | 6;

export interface ExpertProjectCase {
  id: string;
  title: string;
  clientName: string;
  discipline: ExpertDisciplineCode;
  stage: SixStageStep;
  createdAt: string;
}

export const EXPERT_DISCIPLINES: { code: ExpertDisciplineCode; labelKey: string }[] = [
  { code: "ARC", labelKey: "catARC" },
  { code: "INT", labelKey: "catINT" },
  { code: "URB", labelKey: "catURB" },
  { code: "LND", labelKey: "catLND" },
  { code: "STR", labelKey: "catSTR" },
  { code: "MEP", labelKey: "catMEP" },
  { code: "VAL", labelKey: "catVAL" },
  { code: "FES", labelKey: "catFES" },
  { code: "BIM", labelKey: "catBIM" },
  { code: "AIX", labelKey: "catAIX" },
  { code: "PMM", labelKey: "catPMM" },
];

export const EXPERT_SERVICE_TYPES: { code: ExpertServiceTypeCode; labelKey: string }[] = [
  { code: "ADVISORY", labelKey: "stypeAdvisory" },
  { code: "STUDIES", labelKey: "stypeStudies" },
  { code: "DESIGN", labelKey: "stypeDesign" },
  { code: "SUPERVISION", labelKey: "stypeSupervision" },
  { code: "EXECUTION", labelKey: "stypeExecution" },
  { code: "VALUATION", labelKey: "stypeValuation" },
];

export const QUALIFICATION_TIERS: { code: QualificationTierCode; labelKey: string }[] = [
  { code: "OFFICIAL_EXPERT", labelKey: "qtierOfficial" },
  { code: "INDEPENDENT_VALUER", labelKey: "qtierIndependent" },
  { code: "CONSULTANT_ENGINEER", labelKey: "qtierConsultant" },
  { code: "TECHNICAL_SPECIALIST", labelKey: "qtierSpecialist" },
];

export const SIX_STAGE_KEYS: { step: SixStageStep; titleKey: string }[] = [
  { step: 1, titleKey: "stage1Title" },
  { step: 2, titleKey: "stage2Title" },
  { step: 3, titleKey: "stage3Title" },
  { step: 4, titleKey: "stage4Title" },
  { step: 5, titleKey: "stage5Title" },
  { step: 6, titleKey: "stage6Title" },
];

/**
 * ارزیابی وضعیت اولیه صلاحیت پس از احراز هویت:
 * - صلاحیت رسمی دادگستری یا نیازمند بررسی انسانی به صف تایید دستی ادمین می‌رود.
 * - اگر احراز هویت انجام شده باشد و مدرک/شناسه معتبر ثبت شده باشد، در دسته‌های مجاز تایید اتوماتیک می‌گیرد.
 */
export function evaluateQualificationVerification(params: {
  identityVerified: boolean;
  tier: QualificationTierCode;
  licenseCode: string;
  documentTitle: string;
  forceManualReview?: boolean;
}): QualificationVerificationStatus {
  if (!params.identityVerified) {
    return "NEEDS_REVISION";
  }
  if (params.forceManualReview || params.tier === "OFFICIAL_EXPERT") {
    return "PENDING_ADMIN";
  }
  const hasCredential = params.licenseCode.trim().length >= 3;
  const hasDocument = params.documentTitle.trim().length >= 2;
  if (hasCredential && hasDocument) {
    return "AUTO_VERIFIED";
  }
  return "PENDING_ADMIN";
}