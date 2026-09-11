export class CognitiveConclusionEngine {


conclude(evidence:any[]){


return {


resultGenerated:true,


evidence:evidence.length,


confidence:0.9


};


}

}
