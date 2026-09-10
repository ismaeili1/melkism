
export type IntelligenceStabilityStatus =
    | "stable"
    | "degraded"
    | "unstable";


export interface IntelligenceStabilityRecord {

    id: string;

    status: IntelligenceStabilityStatus;

    score: number;

    context: string;

    createdAt: Date;

}

