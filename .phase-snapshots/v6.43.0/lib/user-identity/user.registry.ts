import type {
UserRecord
} from "./user.types";


const users:UserRecord[]=[];


export function registerUser(
user:UserRecord
){

users.push(user);

}


export function getUsers(){

return [...users];

}

