import type {

IntelligenceContext

} from "../context/context.types";



export class IntelligencePipeline {


run(

context:IntelligenceContext

){


return {


context,


processedAt:new Date()


};


}



}

