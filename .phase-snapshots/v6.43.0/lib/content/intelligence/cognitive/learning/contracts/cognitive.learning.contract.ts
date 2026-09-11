/**
 * MELKISM Cognitive Learning Contract
 *
 * v0.9.4
 */


export interface CognitiveLearningContract {


id:
string;


adaptiveStateId:
string;


cycle:
number;


learningSignal:
"improve"
|
"stable"
|
"degrade";


improvementScore:
number;


metadata?:
Record<string,unknown>;



createdAt:
Date;


}

