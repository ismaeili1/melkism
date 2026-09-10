export function createRecommendationContext(
userId:string
){

return {

userId,

createdAt:
new Date().toISOString()

};

}

