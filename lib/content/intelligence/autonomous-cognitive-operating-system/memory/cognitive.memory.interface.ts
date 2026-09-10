export class CognitiveMemoryInterface {


private memory=new Map<string,unknown>();



store(
key:string,
value:unknown
){

this.memory.set(key,value);

}



retrieve(key:string){

return this.memory.get(key);

}



update(
key:string,
value:unknown
){

this.memory.set(key,value);

}

}
