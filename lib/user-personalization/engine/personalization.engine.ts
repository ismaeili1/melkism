import type {

PersonalizationProfile

} from "../contracts/profile.types";


export function personalize(

profile:PersonalizationProfile

){

return {

userId:profile.userId,

recommendations:[]

};


}


