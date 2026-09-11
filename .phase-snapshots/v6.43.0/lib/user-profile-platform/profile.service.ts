import {
ProfileRepository
} from "./profile.repository";


export class ProfileService {


constructor(
private repository=new ProfileRepository()
){}


create(profile:any){

return this.repository.create(profile);

}


get(userId:string){

return this.repository.findByUserId(userId);

}


list(){

return this.repository.list();

}


}

