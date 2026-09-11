export interface PropertyAnalysisInput {


propertyId:string;


data:Record<string,number>;


}



export interface PropertyAnalysisSummary {


propertyId:string;


valueScore:number;


locationScore:number;


conditionScore:number;


investmentScore:number;


createdAt:Date;


}

