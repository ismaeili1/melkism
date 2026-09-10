export class GlobalIntelligenceExperienceMemoryEngine {


store(experience:any){

return {

stored:true,

experience

};

}


retrieve(){

return {

memory:
"experience-memory"

};

}


}

