import {
getEndpoints
} from "./gateway.registry";


export function resolveRoute(
path:string,
method:string
){


return (
getEndpoints()
.find(
endpoint =>
endpoint.path===path &&
endpoint.method===method
)
??
null
);


}


