export interface AdaptiveSignal {


signal:string;


strength:number;


createdAt:Date;


}



export interface AdaptiveResult {


accepted:boolean;


action:string;


createdAt:Date;


}



export class LearningMemoryAdaptiveConnector {


private history:
AdaptiveResult[] = [];



connectSignal(
signal:AdaptiveSignal
){

return this.evaluateSignal(
signal
);

}




evaluateSignal(
signal:AdaptiveSignal
)
:AdaptiveResult {


const result:AdaptiveResult = {


accepted:
signal.strength > 0,


action:
signal.strength >= 0.7
?
"reinforce"
:
"improve",


createdAt:
new Date()


};



this.history.push(result);


return result;


}




processAdaptiveFeedback(
signal:AdaptiveSignal
){

return this.connectSignal(
signal
);

}




getAdaptiveHistory(){

return this.history;

}


}
