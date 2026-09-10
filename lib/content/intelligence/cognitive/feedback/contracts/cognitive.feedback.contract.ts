/**
 * MELKISM Intelligence Feedback Contract
 *
 * v0.9.1
 */


export interface CognitiveFeedbackContract {


id:
string;


cognitiveStateId:
string;


signal:
"positive"
|
"negative"
|
"neutral";


score:
number;


metadata?:
Record<string,unknown>;


createdAt:
Date;


}

