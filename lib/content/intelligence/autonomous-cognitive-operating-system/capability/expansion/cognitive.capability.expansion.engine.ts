export class CognitiveCapabilityExpansionEngine {


expand(capability:any){


capability.level=

capability.potential;


capability.status="expanded";


return {


expanded:true,


level:capability.level


};


}

}
