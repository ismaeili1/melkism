import React from "react";


const items=[

"Home",
"Search",
"Intelligence",
"Saved",
"Profile"

];


export function MobileNavigation(){

return (

<nav>

{items.map(item=>(

<span key={item}>
{item}
</span>

))}

</nav>

);

}

