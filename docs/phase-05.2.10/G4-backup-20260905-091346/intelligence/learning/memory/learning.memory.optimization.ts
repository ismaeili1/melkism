export interface OptimizationInput {


signal:string;


strength:number;


createdAt:Date;


}



export interface OptimizationResult {


optimized:boolean;


improvement:number;


action:string;


createdAt:Date;


}



export class LearningMemoryOptimizationService {



private history:
OptimizationResult[] = [];



optimize(
input:OptimizationInput
)
:OptimizationResult {


const result:OptimizationResult = {


optimized:
input.strength > 0,


improvement:
Math.min(
input.strength,
1
),


action:
input.strength >= 0.7
?
"reinforced"
:
"adjusted",


createdAt:
new Date()


};



this.history.push(result);


return result;


}



reinforceMemory(
input:OptimizationInput
){

return this.optimize(
input
);

}



calculateImprovement(){

if(
this.history.length === 0
){

return 0;

}


return (
this.history
.reduce(
(sum,item)=>
sum + item.improvement,
0
)
/
this.history.length
);

}



getOptimizationHistory(){

return this.history;

}



}
