/**
 * MELKISM Autonomous Intelligence Evolutionary Learning Contract
 *
 * v1.1.8
 */


export interface AutonomousEvolutionaryLearningContract {


id:
string;


generativeLearningId:
string;


evolutionaryContextId:
string;


capabilities:
Array<{

capability:
string;


level:
number;


}>;



evolutionGoals:
Array<{

goal:
string;


priority:
number;


}>;



mutationStrategy:
Record<string,unknown>;



evolutionModel:
Record<string,unknown>;



evolutionaryState:
"observed"
|
"evaluated"
|
"adapted"
|
"enhanced"
|
"integrated";


evolutionaryVersion:
number;


confidence:
number;


status:
"created"
|
"processing"
|
"completed";


metadata?:
Record<string,unknown>;


createdAt:
Date;


}

