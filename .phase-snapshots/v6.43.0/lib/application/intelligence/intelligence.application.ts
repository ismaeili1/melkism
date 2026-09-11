import {
IntelligenceUseCase
} from "./intelligence.usecase";


import type {
IntelligenceApplicationRequest
} from "./intelligence.types";


export class IntelligenceApplication {


private useCase =
new IntelligenceUseCase();



run(
request:IntelligenceApplicationRequest
){

return this.useCase.execute(request);

}


}

