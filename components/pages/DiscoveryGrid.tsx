import DiscoveryCard from "./DiscoveryCard";


const items=[

{

title:"Global Intelligence",

summary:"Knowledge and market intelligence."

},

{

title:"Future Research",

summary:"Research insights and analysis."

},

{

title:"Urban Intelligence",

summary:"Cities and built environment data."

}

];



export default function DiscoveryGrid(){


return (

<section>


{

items.map(item=>(

<DiscoveryCard

key={item.title}

title={item.title}

summary={item.summary}

/>

))

}


</section>

)

}