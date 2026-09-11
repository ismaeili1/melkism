import {
IntelligenceApplication
} from "@/lib/application/intelligence";


import type {
IntelligenceAPIRequest,
IntelligenceAPIResponse
} from "@/lib/api/intelligence";


export class IntelligenceController {


private application =
new IntelligenceApplication();



async handle(
request:IntelligenceAPIRequest
):Promise<IntelligenceAPIResponse>{


const result =
this.application.run({

query:
request.query,

context:
request.context

});



return {

success:
true,

data:
result,

timestamp:
new Date()

};


}


}

