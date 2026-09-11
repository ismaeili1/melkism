export interface CognitiveEnergy {


id:string;


source:string;


capacity:number;


consumed:number;


available:number;


status:

"available"|
"consuming"|
"optimized";

}



export class CognitiveEnergyRegistry {


private energies=

new Map<string,CognitiveEnergy>();



register(

energy:CognitiveEnergy

){

this.energies.set(

energy.id,

energy

);

return energy;

}



get(id:string){

return this.energies.get(id);

}



list(){

return Array.from(this.energies.values());

}

}
