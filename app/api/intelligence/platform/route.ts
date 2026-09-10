import {

NextResponse

} from "next/server";



export async function GET(){


return NextResponse.json({


status:
"active",


version:
"38.0.0-R1",


timestamp:
new Date()


});


}

