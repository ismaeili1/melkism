import DataMetricCard from "./DataMetricCard";


const metrics = [

{

id:"city-1",

title:"City Intelligence",

value:"Ready",

category:"city" as const,

description:
"Urban intelligence experience layer"

}

];


export default function CityDataExperience(){


return (

<section>

<h2>
City Intelligence
</h2>


{metrics.map(item =>

<DataMetricCard
key={item.id}
metric={item}
/>

)}

</section>

)

}