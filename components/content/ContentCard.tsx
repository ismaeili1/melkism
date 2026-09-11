import {ContentItem} from "./content.types"


export default function ContentCard({
item
}:{
item:ContentItem
}){


return (

<article>


<h3>
{item.title}
</h3>


<p>
{item.summary}
</p>


<span>
{item.category}
</span>


</article>

)

}