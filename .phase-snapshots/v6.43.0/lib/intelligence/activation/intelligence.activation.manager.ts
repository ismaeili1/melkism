import {
 IntelligenceActivationService
} from "./intelligence.activation.service";


export class IntelligenceActivationManager {


private service =
new IntelligenceActivationService();



start(){

return this.service.activate();

}


}

