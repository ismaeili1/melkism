import ContentCard from "./ContentCard";
import type { ContentItem } from "./content.types";


export default function IntelligenceFeed(){

const items:ContentItem[]=[

{
id:"1",
title:"Global Real Estate Intelligence",
summary:"Market intelligence and built environment analysis.",
category:"Research"
},

{
id:"2",
title:"Future Cities Report",
summary:"Urban intelligence and city evolution.",
category:"Cities"
}

];


return (

<section>

{items.map((item)=>(

<ContentCard
key={item.id}
item={item}
/>

))}

</section>

)

}