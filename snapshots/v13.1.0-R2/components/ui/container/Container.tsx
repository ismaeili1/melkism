import React from "react";


interface ContainerProps {

children:React.ReactNode;

}


export function Container({

children

}:ContainerProps){

return (

<div className="melkism-container">
{children}
</div>

);

}

