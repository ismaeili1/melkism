export interface AdaptationState {

active:boolean;

confidence:number;

}


export function createAdaptationState(

confidence:number

):AdaptationState{


return {

active:false,

confidence

};


}


