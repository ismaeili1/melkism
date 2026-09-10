import type {
Recommendation
} from "./decision.types";


export function createRecommendation(
decisionId:string,
message:string
):Recommendation{


return {

decisionId,

message

};


}

