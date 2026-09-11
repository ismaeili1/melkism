import IntelligenceCard
from "./IntelligenceCard";


const cities=[

{

category:"City",

title:"Future Cities",

description:"Urban intelligence and development analysis."

},

{

category:"Urban",

title:"City Indicators",

description:"Smart city performance signals."

}

];



export default function CityIntelligence(){


return (

<section>


<h2>

City Intelligence

</h2>


{

cities.map(item=>(

<IntelligenceCard

key={item.title}

item={item}

/>

))

}


</section>

)

}