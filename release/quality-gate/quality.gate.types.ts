export type QualityStatus =
"PASS" |
"WARNING" |
"FAILED";


export interface QualityGateResult {

area:string;

status:QualityStatus;

details:string;

}