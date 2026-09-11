export type IntelligenceHistoryType =

"query"

|

"action"

|

"decision";



export interface IntelligenceHistoryRecord {


id:string;


type:
IntelligenceHistoryType;


input:
unknown;


output?:
unknown;


createdAt:
Date;


}



