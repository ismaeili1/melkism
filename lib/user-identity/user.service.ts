import {
UserRepository
} from "./user.repository";


export class UserService {


constructor(
private repository=new UserRepository()
){}


create(user:any){

return this.repository.create(user);

}


get(id:string){

return this.repository.findById(id);

}


list(){

return this.repository.list();

}


}

