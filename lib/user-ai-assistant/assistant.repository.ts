import type {
AssistantSession
} from "./assistant.types";


const storage:AssistantSession[]=[];


export class AssistantRepository {


create(
session:AssistantSession
){

storage.push(session);

return session;

}


findByUser(
userId:string
){

return storage.filter(
item=>item.userId===userId
);

}


list(){

return [...storage];

}


}

