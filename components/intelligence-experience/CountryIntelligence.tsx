import IntelligenceCard
from "./IntelligenceCard";


const countries=[

{

category:"Country",

title:"Regional Intelligence",

description:"Country level market comparison."

},

{

category:"Investment",

title:"Investment Landscape",

description:"Global opportunity overview."

}

];



export default function CountryIntelligence(){


return (

<section>


<h2>

Country Intelligence

</h2>


{

countries.map(item=>(

<IntelligenceCard

key={item.title}

item={item}

/>

))

}


</section>

)

}