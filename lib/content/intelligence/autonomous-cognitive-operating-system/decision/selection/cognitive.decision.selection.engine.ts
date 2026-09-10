export class CognitiveDecisionSelectionEngine {


select(evaluations:any[]){


return {


decision:evaluations[0].option,


selected:true


};


}

}
