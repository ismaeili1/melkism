import type {
IntelligenceItem
} from "./intelligence.types";


interface Props{

item:IntelligenceItem;

}


export default function IntelligenceCard({
item
}:Props){


return (

<div>

<h3>
{item.title}
</h3>


<p>
{item.description}
</p>


<span>
{item.category}
</span>


</div>

)

}