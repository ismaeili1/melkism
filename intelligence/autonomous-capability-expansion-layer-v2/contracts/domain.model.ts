
export interface SelfImprovementState {


id:string;


organizationLevel:number;


improvementLevel:number;


expansionLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface CapabilityEvolutionModel {


capability:string;


previousVersion:string;


newVersion:string;


}



export interface OptimizationCycle {


cycleId:string;


metric:string;


improvement:number;


}


