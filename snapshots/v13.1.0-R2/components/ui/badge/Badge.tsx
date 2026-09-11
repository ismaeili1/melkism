import React from "react";


interface BadgeProps {

children:React.ReactNode;

}


export function Badge({

children

}:BadgeProps){

return (

<span className="melkism-badge">

{children}

</span>

);

}

