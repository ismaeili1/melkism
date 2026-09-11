export interface AutonomousCognitiveSelfModelingIntelligenceContract {


id:string;


metaIntelligenceId:string;


selfModelingIntelligenceId:string;



selfModelIdentityModels:Array<{

identity:string;

confidence:number;

}>;



cognitiveSelfRepresentationModels:Array<{

representation:string;

accuracy:number;

}>;



capabilityMappingModels:Array<{

capability:string;

level:number;

}>;



internalArchitectureMappingModels:Array<{

architecture:string;

coverage:number;

}>;



cognitiveStateModelingModels:Array<{

state:string;

stability:number;

}>;



selfObservationModels:Array<{

observation:string;

quality:number;

}>;



selfAnalysisModels:Array<{

analysis:string;

score:number;

}>;



selfOptimizationModels:Array<{

optimization:string;

effectiveness:number;

}>;



selfModelEvolutionTrackingModels:Array<{

cycle:string;

growth:number;

}>;



selfContinuityManagementModels:Array<{

continuity:string;

score:number;

}>;



selfInsights:Array<{

insight:string;

value:number;

}>;



selfModelRegistryModels:Array<{

model:string;

status:string;

}>;



selfModelState:

"initializing"|"modeling"|"completed";



selfModelVersion:number;


confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
