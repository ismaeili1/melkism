import ContentCard from "./ContentCard"
import {ContentItem} from "./content.types"


export default function ContentGrid({

items

}:{

items:ContentItem[]

}){


return (

<section>


{

items.map(item=>(

<ContentCard
key={item.id}
item={item}
/>

))

}


</section>

)

}