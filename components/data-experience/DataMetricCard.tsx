import type {DataMetric} from "./data.types";


interface Props{

metric:DataMetric;

}


export default function DataMetricCard(
{metric}:Props
){


return (

<div>

<h3>
{metric.title}
</h3>


<strong>
{metric.value}
</strong>


{metric.unit &&

<span>
{metric.unit}
</span>

}


<p>
{metric.description}
</p>


</div>

)

}