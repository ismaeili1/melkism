import AIAssistantCard
from "./AIAssistantCard";


import type {AIRecommendation}
from "./ai.types";



type Props={

items:AIRecommendation[];

};



export default function AIRecommendationPanel({

items

}:Props){


return (

<section>


{

items.map(item=>(

<AIAssistantCard

key={item.title}

title={item.title}

description={item.description}

/>

))

}


</section>

)

}