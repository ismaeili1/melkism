import DataMetricCard from "./DataMetricCard";


const metrics = [

{

id:"market-1",

title:"Market Intelligence",

value:"Active",

category:"market" as const,

description:
"Real estate market intelligence foundation"

}

];


export default function MarketDataExperience(){


return (

<section>

<h2>
Market Data Intelligence
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