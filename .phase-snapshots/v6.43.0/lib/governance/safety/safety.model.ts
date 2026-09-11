export interface SafetyCheck {

id:string;

target:string;

status:
"approved"
|
"blocked";

reason:string;

}

