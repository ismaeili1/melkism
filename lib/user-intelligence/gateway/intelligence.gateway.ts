import type {

IntelligenceQuery

} from "../contracts/query.types";


export function processIntelligenceQuery(

request:IntelligenceQuery

){


return {

accepted:true,

query:request

};


}

