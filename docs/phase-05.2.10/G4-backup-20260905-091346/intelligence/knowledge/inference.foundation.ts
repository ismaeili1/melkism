/**
 * MELKISM Inference Foundation
 * v38.20.14
 */


export interface InferenceRecord {


premise:string;

conclusion:string;

createdAt:Date;

}



export class InferenceFoundation {



private history:
InferenceRecord[]=[];



createInference(

premise:string,

conclusion:string

){


const inference:
InferenceRecord={


premise,

conclusion,

createdAt:new Date()


};



this.history.push(inference);



return inference;


}



runInference(

premise:string

){


return {


premise,

conclusion:null


};


}



getInferenceHistory(){


return this.history;


}



}
