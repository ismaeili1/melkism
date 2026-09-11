/**
 * MELKISM Self-Adaptive Intelligence Contract
 *
 * v0.9.5
 */


export interface SelfAdaptiveStateContract {


id:
string;


learningCycleId:
string;


adaptationLevel:
number;


optimizationScore:
number;


mode:
"observe"
|
"adapt"
|
"optimize";


metadata?:
Record<string,unknown>;


createdAt:
Date;


}

