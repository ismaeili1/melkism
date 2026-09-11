import type {
SessionRecord
} from "./auth.types";


export function createSession(
userId:string
):SessionRecord{


return {

id:
crypto.randomUUID(),

userId,

expiresAt:
new Date(
Date.now()+86400000
).toISOString()

};

}

