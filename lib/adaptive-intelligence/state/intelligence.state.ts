export interface IntelligenceState {

activeComponent:string;

confidence:number;

updatedAt:string;

}


export function createIntelligenceState():

IntelligenceState {


return {

activeComponent:"none",

confidence:0,

updatedAt:
new Date().toISOString()

};


}


