import {

AdaptiveLearningEngine

} from "./adaptive.engine";



export class LearningOrchestrator {



private adaptive =
new AdaptiveLearningEngine();



run(

successRate:number

){


return this.adaptive.evaluate({

signals:1,

successRate,

createdAt:new Date()

});


}



}

