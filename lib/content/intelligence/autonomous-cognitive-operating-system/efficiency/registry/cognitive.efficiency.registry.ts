export interface CognitiveEfficiency {


id:string;


process:string;


performance:number;


efficiency:number;


status:

"measuring"|
"optimized";

}



export class CognitiveEfficiencyRegistry {


private records=

new Map<string,CognitiveEfficiency>();



register(record:CognitiveEfficiency){

this.records.set(record.id,record);

return record;

}



get(id:string){

return this.records.get(id);

}



list(){

return Array.from(this.records.values());

}

}
