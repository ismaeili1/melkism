export class CognitiveCapabilityExpansionAnalyzer {


analyze(capability:any){


return {


current:

capability.level,


potential:

capability.potential,


expandable:

capability.potential>capability.level


};


}

}
