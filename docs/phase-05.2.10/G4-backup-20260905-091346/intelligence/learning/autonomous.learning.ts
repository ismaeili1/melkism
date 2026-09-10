import {

AutonomousLearningPipeline

} from "./learning.pipeline";



export class AutonomousLearningService {



private pipeline =
new AutonomousLearningPipeline();



learn(

successRate:number

){


return this.pipeline.execute(successRate);


}



}


