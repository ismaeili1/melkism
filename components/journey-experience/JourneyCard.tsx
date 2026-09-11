import type {
JourneyItem
}
from "./journey.types";


type Props={

item:JourneyItem;

};


export default function JourneyCard({

item

}:Props){


return (

<article>


<h3>
{item.title}
</h3>


<p>
{item.description}
</p>


</article>

);


}