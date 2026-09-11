export class CognitiveDecisionContextManager {


prepare(input:any){


return {


situation:input.situation,


constraints:input.constraints,


prepared:true


};


}

}
