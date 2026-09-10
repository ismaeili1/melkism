import React from "react";


const navigation = [

{
label:"Intelligence",
href:"/intelligence"
},

{
label:"Real Estate",
href:"/property"
},

{
label:"Knowledge",
href:"/articles"
},

{
label:"Cities & Markets",
href:"/markets"
},

{
label:"Architecture",
href:"/architecture"
},

{
label:"Services",
href:"/consulting"
}

];


export function Navigation(){

return (

<nav>

{navigation.map(item=>(

<a
key={item.label}
href={item.href}
>

{item.label}

</a>

))}

</nav>

);

}
