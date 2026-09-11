"use client";


import { useEffect,useState } from "react";



export function useIntelligenceStatus(){


const [status,setStatus]=
useState("checking");



useEffect(()=>{


fetch(
"/api/intelligence/health"
)

.then(()=>{

setStatus("online");

})

.catch(()=>{

setStatus("offline");

});


},[]);



return status;


}

