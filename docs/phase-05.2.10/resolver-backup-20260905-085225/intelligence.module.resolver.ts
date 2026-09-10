/**
 * MELKISM Intelligence intelligenceModule Resolver
 * v38.20.14
 */


export interface IntelligenceModuleRecord {


name:string;

version:string;

createdAt:Date;

}



export class IntelligenceModuleResolver {


private modules:
IntelligenceModuleRecord[] = [];



registerModule(

name:string,

version:string

){


const intelligenceModule:
IntelligenceModuleRecord = {


name,

version,

createdAt:new Date()


};


this.modules.push(intelligenceModule);


return intelligenceModule;


}



resolveModule(

name:string

){


return this.modules.find(

intelligenceModule =>
intelligenceModule.name === name

);


}



getRegisteredModules(){


return this.modules;


}


}
