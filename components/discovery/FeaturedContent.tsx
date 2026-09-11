import ContentCard from "../content/ContentCard";
import type {ContentItem} from "../content/content.types";


export default function FeaturedContent(){

const items:ContentItem[]=[

{
id:"featured-1",
title:"Global Market Intelligence",
summary:"Analysis of real estate markets worldwide.",
category:"Markets"
},

{
id:"featured-2",
title:"Future Cities Intelligence",
summary:"Urban transformation and city evolution.",
category:"Cities"
}

];


return (

<section>

<h2>
Featured Intelligence
</h2>


{items.map(item=>(

<ContentCard
key={item.id}
item={item}
/>

))}


</section>

)

}