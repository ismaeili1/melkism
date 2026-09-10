import type {
Permission
} from "./auth.types";


export function checkPermission(
permissions:Permission[],
required:Permission
){

return permissions.includes(required);

}

