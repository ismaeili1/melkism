import type {

LearningType,

LearningMetadata

} from "./learning.types";



export interface LearningRecord {


id:string;


type:
LearningType;


input:
unknown;


output?:
unknown;


metadata?:
LearningMetadata;


createdAt:
Date;


}


