export interface AutonomousCognitiveSelfManagementIntelligenceContract {


id:string;


selfAwarenessArchitectureId:string;


selfManagementIntelligenceId:string;



selfManagementIdentityModels:Array<{

identity:string;

confidence:number;

}>;



internalRegulationModels:Array<{

regulation:string;

effectiveness:number;

}>;



cognitiveResourceManagementModels:Array<{

resource:string;

utilization:number;

}>;



capabilityAllocationModels:Array<{

capability:string;

allocation:number;

}>;



performanceRegulationModels:Array<{

performance:string;

stability:number;

}>;



selfCorrectionModels:Array<{

correction:string;

accuracy:number;

}>;



cognitiveOptimizationControlModels:Array<{

optimization:string;

effectiveness:number;

}>;



adaptiveManagementStrategyModels:Array<{

strategy:string;

adaptability:number;

}>;



selfManagementEvolutionTrackingModels:Array<{

cycle:string;

growth:number;

}>;



autonomousControlContinuityModels:Array<{

continuity:string;

score:number;

}>;



managementInsights:Array<{

insight:string;

value:number;

}>;



selfManagementRegistryModels:Array<{

management:string;

status:string;

}>;



managementState:

"initializing"|"regulating"|"completed";



managementVersion:number;


confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
