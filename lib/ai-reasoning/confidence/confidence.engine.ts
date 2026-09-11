export interface ConfidenceScore {

 value:number;

 level:
 "low"
 |
 "medium"
 |
 "high";

}


export function calculateConfidence(
value:number
):ConfidenceScore {


if(value>=0.8){

return {

value,

level:"high"

};

}


if(value>=0.5){

return {

value,

level:"medium"

};

}


return {

value,

level:"low"

};


}


