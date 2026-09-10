export type UserIntelligenceType =

"behavior"

|

"preference"

|

"activity"

|

"engagement";



export type UserSignalStatus =

"created"

|

"analyzed"

|

"evaluated";



export interface UserIntelligenceSignal {


id:string;


userId:string;


type:UserIntelligenceType;


score:number;


status:UserSignalStatus;


metadata?:Record<string,unknown>;


createdAt:Date;


}



export interface UserIntelligenceResult {


userId:string;


signals:UserIntelligenceSignal[];


overallScore:number;


createdAt:Date;


}

