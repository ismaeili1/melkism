import React from "react";


export interface TypographyProps
extends React.HTMLAttributes<HTMLElement>{

variant?:
"h1"
|
"h2"
|
"h3"
|
"body"
|
"caption";

}



export function Typography({

variant="body",
children,
...props

}: TypographyProps){


const Tag =
variant==="h1" ? "h1" :
variant==="h2" ? "h2" :
variant==="h3" ? "h3" :
"p";


return (

<Tag {...props}>

{children}

</Tag>

);


}

