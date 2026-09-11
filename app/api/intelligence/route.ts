import { NextRequest, NextResponse } from "next/server";


import {
IntelligenceController
} from "@/lib/controllers/intelligence";


import type {
IntelligenceAPIRequest
} from "@/lib/api/intelligence";



export async function POST(
request:NextRequest
){


const body =
(await request.json()) as IntelligenceAPIRequest;



const controller =
new IntelligenceController();



const result =
await controller.handle(body);



return NextResponse.json(result);


}

