export class CognitiveEnergyAnalyzer {


analyze(energy:any){


return {


consumption:

energy.consumed,


efficiency:

(energy.capacity-energy.consumed)
/energy.capacity,


remaining:

energy.available


};


}

}
