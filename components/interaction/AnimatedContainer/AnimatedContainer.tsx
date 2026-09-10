"use client";

import React from "react";


export function AnimatedContainer({

children,
className=""

}:{

children:React.ReactNode;
className?:string;

}){


return (

<div className={className}>

{children}

</div>

);

}
