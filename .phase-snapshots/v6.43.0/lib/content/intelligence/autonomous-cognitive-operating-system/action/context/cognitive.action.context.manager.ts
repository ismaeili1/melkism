export class CognitiveActionContextManager {


prepare(input:any){


return {


objective:input.objective,


resources:input.resources,


prepared:true


};


}

}
