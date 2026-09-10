import type {

AdaptiveResponse

} from "./response.types";



export class ResponseEngine {



private responses:AdaptiveResponse[]=[];



generate(

content:string,

confidence:number,

decisionId?:string

){


const response:AdaptiveResponse={


id:crypto.randomUUID(),


decisionId,


content,


confidence,


status:"generated",


createdAt:new Date()


};



this.responses.push(response);


return response;


}



deliver(

response:AdaptiveResponse

){


response.status="delivered";


return response;

}



archive(

response:AdaptiveResponse

){


response.status="archived";


return response;

}



getAll(){

return this.responses;

}


}

