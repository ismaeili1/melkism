import IntelligenceCard
from "./IntelligenceCard";


const markets=[

{

category:"Market",

title:"Global Real Estate Markets",

description:"Market signals and investment intelligence."

},

{

category:"Trend",

title:"Price Movement",

description:"Analysis of market direction."

}

];



export default function MarketIntelligence(){


return (

<section>


<h2>

Market Intelligence

</h2>


{

markets.map(item=>(

<IntelligenceCard

key={item.title}

item={item}

/>

))

}


</section>

)

}