import DataMetricCard from "./DataMetricCard";


const metrics = [

{

id:"country-1",

title:"Country Intelligence",

value:"Ready",

category:"country" as const,

description:
"Country level intelligence foundation"

}

];


export default function CountryDataExperience(){


return (

<section>

<h2>
Country Intelligence
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