import type {
AIRecommendation
}
from "./ai.types";


interface Props{

item:AIRecommendation;

}



export default function AIRecommendationCard(
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


</article>

)

}