import type {

ExecutionResult

} from "./result.types";



export class ResultProcessor {



private results:
ExecutionResult[] = [];



process(
actionId:string,
data:unknown,
score:number
){


const result:ExecutionResult={


id:
crypto.randomUUID(),


actionId,


status:
score >= 0.5
?
"success"
:
"failure",


data,


score,


createdAt:
new Date()


};



this.results.push(result);


return result;


}



getResults(){


return this.results;


}



getSuccessfulResults(){


return this.results.filter(

result=>

result.status==="success"

);


}



}



