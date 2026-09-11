export class CognitiveExperienceMemoryManager {


store(experience:any){


return {


id:experience.id,


stored:true,


experience


};


}



list(){

return [];

}


}
