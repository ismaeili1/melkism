export class CognitiveActionRecommendationEngine {


recommend(decision:any){


return {


action:

decision.decision,


confidence:0.9,


recommended:true


};


}

}
