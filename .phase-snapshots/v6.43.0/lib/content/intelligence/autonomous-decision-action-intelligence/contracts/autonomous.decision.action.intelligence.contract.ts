export interface AutonomousDecisionActionIntelligenceContract {


id:string;



executionFrameworkId:string;



decisionIntelligenceId:string;



situationModels:Array<{

situation:string;

score:number;

}>;



decisionContexts:Array<{

context:string;

state:string;

}>;



goalAlignmentModels:Array<{

goal:string;

alignment:number;

}>;



optionEvaluationModels:Array<{

option:string;

score:number;

}>;



actionSelectionModels:Array<{

action:string;

score:number;

}>;



riskAssessmentModels:Array<{

risk:string;

level:number;

}>;



confidenceModels:Array<{

decision:string;

confidence:number;

}>;



outcomePredictionModels:Array<{

outcome:string;

probability:number;

}>;



optimizationModels:Array<{

optimization:string;

score:number;

}>;



learningFeedbackModels:Array<{

feedback:string;

score:number;

}>;



decisionInsights:Array<{

insight:string;

value:number;

}>;



evolutionTracking:Array<{

cycle:string;

growth:number;

}>;



decisionState:

"initializing"|"deciding"|"completed";



decisionVersion:number;



confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
