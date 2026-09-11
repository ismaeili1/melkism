export class CognitiveResourceAnalyzer {


analyze(resource:any){

return {

resource,

load:

resource.capacity-resource.available,

efficiency:

resource.available/resource.capacity

};

}

}
