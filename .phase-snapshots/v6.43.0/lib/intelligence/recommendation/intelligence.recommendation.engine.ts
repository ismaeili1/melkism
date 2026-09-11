
import {

saveRecommendation

}
from "./intelligence.recommendation.store";



export function generateRecommendations(
request:any
){


const item={


id:
crypto.randomUUID(),


title:
"Generated recommendation",


reason:
"Generated from intelligence context",


score:
0.5,


metadata:{

target:
request.target

}


};



return saveRecommendation(item);


}



