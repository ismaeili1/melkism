import IntelligenceMetricCard
from "./IntelligenceMetricCard";


import IntelligencePanel
from "./IntelligencePanel";



const metrics=[

{

label:"Markets",

value:"128"

},

{

label:"Reports",

value:"46"

},

{

label:"Data Sources",

value:"214"

}

];



const insights=[

{

category:"Market",

title:"Global Market Intelligence",

description:"Real estate intelligence signals."

},

{

category:"Cities",

title:"Urban Intelligence",

description:"Future city analysis."

}

];



export default function IntelligenceDashboard(){


return (

<main>


<h1>

MELKISM Intelligence Dashboard

</h1>



<section>


{

metrics.map(metric=>(

<IntelligenceMetricCard

key={metric.label}

metric={metric}

/>

))

}


</section>



<IntelligencePanel

title="Latest Intelligence"

items={insights}

/>



</main>

)

}