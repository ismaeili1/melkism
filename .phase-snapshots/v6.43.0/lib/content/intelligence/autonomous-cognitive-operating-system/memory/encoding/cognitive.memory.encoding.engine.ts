export class CognitiveMemoryEncodingEngine {


encode(experience:any){


return {


encoded:true,


memory:{


id:experience.id,


content:experience


}


};


}

}
