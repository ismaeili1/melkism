"use client";


import { useState } from "react";


export function useIntelligence(){


const [loading,setLoading]=
useState(false);


const [error,setError]=
useState<string|null>(null);


const [data,setData]=
useState<unknown>(null);



async function execute(
query:string
){


try{


setLoading(true);

setError(null);



const response =
await fetch(
"/api/intelligence",
{

method:"POST",

headers:{

"Content-Type":
"application/json"

},

body:
JSON.stringify({

requestId:
crypto.randomUUID(),

query

})

}

);



const result =
await response.json();



setData(result);



return result;



}

catch(error){


setError(
error instanceof Error
? error.message
: "Unknown error"
);


}


finally{


setLoading(false);


}


}



return {

execute,

loading,

error,

data

};


}

