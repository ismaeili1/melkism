export class CognitiveKnowledgeIntegrationManager {


integrate(item:any){


item.status="integrated";


return {


integrated:true,


knowledge:item.id


};


}

}
