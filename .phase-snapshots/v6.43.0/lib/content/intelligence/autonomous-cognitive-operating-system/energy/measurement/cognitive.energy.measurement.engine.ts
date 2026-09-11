export class CognitiveEnergyMeasurementEngine {


measure(energy:any){


return {


input:

energy.capacity,


consumption:

energy.consumed,


output:

energy.available


};


}

}
