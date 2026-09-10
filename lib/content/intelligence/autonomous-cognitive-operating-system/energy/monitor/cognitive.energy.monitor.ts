export class CognitiveEnergyMonitor {


check(energy:any){


return {


healthy:

energy.available>=0

};


}

}
