import type {
UserProfileRecord
} from "./profile.types";


const storage:UserProfileRecord[]=[];


export class ProfileRepository {


create(
profile:UserProfileRecord
){

storage.push(profile);

return profile;

}


findByUserId(
userId:string
){

return storage.find(
item=>item.userId===userId
) ?? null;

}


list(){

return [...storage];

}


}

