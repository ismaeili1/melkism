import {
AssistantRepository
} from "./assistant.repository";


export class AssistantService {


constructor(
private repository=new AssistantRepository()
){}



createSession(
session:any
){

return this.repository.create(session);

}



getSessions(
userId:string
){

return this.repository.findByUser(userId);

}


}

