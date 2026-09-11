import type {

CoordinationRequest

} from "../contracts/coordination.types";


export function coordinateIntelligence(

request:CoordinationRequest

){


const strongest =
request.signals.sort(

(a,b)=>
b.confidence-a.confidence

)[0];


return {

selected:
strongest?.component ?? "none",

confidence:
strongest?.confidence ?? 0

};


}


