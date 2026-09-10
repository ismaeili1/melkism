import {
RecommendationRepository
} from "./recommendation.repository";


export class RecommendationService {


constructor(
private repository=new RecommendationRepository()
){}



create(
record:any
){

return this.repository.create(record);

}



getUserRecommendations(
userId:string
){

return this.repository.findByUser(userId);

}



list(){

return this.repository.list();

}


}

