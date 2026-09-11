export class CognitiveReasoningObservationEngine {


observe(reasoning:any){


return {


observed:true,


steps:reasoning.steps || []


};


}

}
