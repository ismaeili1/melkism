export interface CognitivePerformance {


id:string;


process:string;


capability:number;


score:number;


trend:

"growing"|
"stable"|
"declining";


status:

"measuring"|
"optimized";

}



export class CognitivePerformanceRegistry {


private records=

new Map<string,CognitivePerformance>();



register(record:CognitivePerformance){

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
