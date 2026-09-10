import type {
UserRecord
} from "./user.types";


const storage:UserRecord[]=[];


export class UserRepository {


create(
user:UserRecord
){

storage.push(user);

return user;

}


findById(
id:string
){

return storage.find(
user=>user.id===id
) ?? null;

}


list(){

return [...storage];

}


}

