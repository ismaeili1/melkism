
import type {

AutonomousLearningKnowledgeEvolutionInput,

AutonomousLearningKnowledgeEvolutionRecord

} from "../contracts";



export interface AutonomousLearningKnowledgeEvolutionContext {


request:

AutonomousLearningKnowledgeEvolutionInput;


history:

AutonomousLearningKnowledgeEvolutionRecord[];


}



export interface AutonomousLearningKnowledgeEvolutionResult {


record:

AutonomousLearningKnowledgeEvolutionRecord;


executionTime:number;


}



