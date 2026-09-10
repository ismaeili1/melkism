import type {
SessionRecord
} from "./auth.types";


const sessions:SessionRecord[]=[];


export function registerSession(
session:SessionRecord
){

sessions.push(session);

}


export function getSessions(){

return [...sessions];

}

