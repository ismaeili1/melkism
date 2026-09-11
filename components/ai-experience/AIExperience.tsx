import AIRecommendationPanel
from "./AIRecommendationPanel";


import type {
AIRecommendation
}
from "./ai.types";



const items:AIRecommendation[]=[


{

id:"recommendation-1",

title:
"Market Intelligence",

description:
"AI generated market insights",

category:
"market"

},


{

id:"recommendation-2",

title:
"City Intelligence",

description:
"Urban intelligence analysis",

category:
"city"

}


];



export default function AIExperience(){


return (

<section>


<h1>

MELKISM AI Experience

</h1>


<AIRecommendationPanel

items={items}

/>


</section>

)

}