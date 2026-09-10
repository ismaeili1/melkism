export type ImprovementType =

"optimization"

|

"adaptation"

|

"correction";



export interface IntelligenceImprovement {


id:string;


type:ImprovementType;


description:string;


impact:number;


createdAt:Date;


}


