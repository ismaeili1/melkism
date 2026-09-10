import type {

PropertyIntelligenceResult,

PropertyIntelligenceSignal

} from "./property.types";



export class PropertyIntelligence {



analyze(

propertyId:string

):PropertyIntelligenceResult {



const signal:PropertyIntelligenceSignal={


id:crypto.randomUUID(),


propertyId,


type:"value",


score:0,


status:"analyzed",


createdAt:new Date()


};



return {


propertyId,


signals:[signal],


overallScore:0,


createdAt:new Date()


};



}



}

