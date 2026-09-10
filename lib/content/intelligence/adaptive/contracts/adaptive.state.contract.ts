/**
 * MELKISM Adaptive Intelligence Contract
 *
 * v0.9.3
 */


export interface AdaptiveStateContract {


id:
string;


cognitiveStateId:
string;


feedbackScore:
number;


evolutionLevel:
number;


adaptationScore:
number;


status:
"initial"
|
"learning"
|
"adapted";


metadata?:
Record<string,unknown>;


}

