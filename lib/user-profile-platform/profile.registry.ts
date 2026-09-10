import type {
UserProfileRecord
} from "./profile.types";


const profiles:UserProfileRecord[]=[];


export function registerProfile(
profile:UserProfileRecord
){

profiles.push(profile);

}


export function getProfiles(){

return [...profiles];

}

