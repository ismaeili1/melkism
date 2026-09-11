import type {
AIRequest
} from "./orchestration.types";


export function routeAIRequest(
request:AIRequest
){

return {

request,

route:
request.type

};

}

