import type {
IntelligenceStage
} from "../orchestrator/orchestrator.types";


export interface PipelineExecution {


id:string;


stages:IntelligenceStage[];


current?:IntelligenceStage;


completed:boolean;


createdAt:Date;


}

