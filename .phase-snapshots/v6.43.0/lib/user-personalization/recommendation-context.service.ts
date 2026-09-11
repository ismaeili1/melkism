export function createRecommendationContext(
userId:string
){

return {

userId,

generatedAt:
new Date().toISOString()

};

}

