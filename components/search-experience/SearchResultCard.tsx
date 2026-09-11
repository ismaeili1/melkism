import type {SearchItem} from "./search.types";


interface Props{

item:SearchItem;

}



export default function SearchResultCard(
{item}:Props
){


return (

<article>


<h3>
{item.title}
</h3>


<p>
{item.description}
</p>


<span>
{item.category}
</span>


</article>

)

}