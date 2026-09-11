/**
 * MELKISM Learning Memory Reinforcement Adapter
 * v38.20.14
 *
 * Reinforcement signal normalization boundary
 */



export interface LearningMemoryReinforcementSignal {


value:number;


accepted:boolean;


createdAt:Date;


}




export class LearningMemoryReinforcementAdapter {



private history:
LearningMemoryReinforcementSignal[]=[];





adapt(

signal:
{
reinforcement:number;
accepted:boolean;
}

){


const normalized =
this.normalizeReinforcement(signal);



this.history.push(
normalized
);



return normalized;


}





normalizeReinforcement(

signal:
{
reinforcement:number;
accepted:boolean;
}

):LearningMemoryReinforcementSignal{


return {


value:
Math.max(
0,
Math.min(
1,
signal.reinforcement
)
),


accepted:
signal.accepted,


createdAt:
new Date()


};


}





getAdaptedSignals(){

return this.history;

}



}
