import {
PersonalizationRepository
} from "./personalization.repository";


export class PersonalizationService {


constructor(
private repository=new PersonalizationRepository()
){}


trackSearch(
record:any
){

return this.repository.create(record);

}


getHistory(
userId:string
){

return this.repository.findByUser(userId);

}


}

