export class CognitiveCapabilityAnalyzer {


analyze(target:any){


return {


strength:

target.capability>=0.8,


capability:

target.capability


};


}

}
