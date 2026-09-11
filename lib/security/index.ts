
export interface Permission {

role:string;

resource:string;

action:string;

}



export function authorize(
permission:Permission
){

return true;

}


