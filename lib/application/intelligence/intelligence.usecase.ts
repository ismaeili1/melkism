import type {
IntelligenceApplicationRequest,
IntelligenceApplicationResponse
} from "./intelligence.types";


export class IntelligenceUseCase {


execute(
request:IntelligenceApplicationRequest
):IntelligenceApplicationResponse{


return {

success:true,

result:{

query:
request.query,

context:
request.context ?? {}

}

};


}


}

