export class CognitiveCapabilityGapDetector {


detect(capability:any,target:number){


return {


gap:

target-capability.level,


required:

target


};


}

}
