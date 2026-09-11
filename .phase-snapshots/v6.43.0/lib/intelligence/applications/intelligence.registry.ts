import type {

IntelligenceDomain,

IntelligenceApplicationStatus

} from "./intelligence.application.types";



export interface IntelligenceApplicationRegistryItem {


domain:IntelligenceDomain;


name:string;


status:IntelligenceApplicationStatus;


createdAt:Date;


}



export const intelligenceApplications:

IntelligenceApplicationRegistryItem[]=[


{

domain:"market",

name:"Market Intelligence",

status:"active",

createdAt:new Date()

},


{

domain:"property",

name:"Property Intelligence",

status:"active",

createdAt:new Date()

},


{

domain:"user",

name:"User Intelligence",

status:"active",

createdAt:new Date()

}

];

