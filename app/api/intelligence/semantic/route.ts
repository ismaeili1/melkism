import {

NextResponse

} from "next/server";


export async function GET(
request:Request
){


const url = new URL(request.url);


const query =

url.searchParams.get("q")
??
"";


return NextResponse.json({

status:
"active",

query,

timestamp:
new Date()

});


}

