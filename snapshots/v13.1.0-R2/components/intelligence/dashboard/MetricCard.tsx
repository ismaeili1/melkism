export interface MetricCardProps {

title:string;

value:string | number;

}



export function MetricCard(
props:MetricCardProps
){


return (

<div>

<strong>
{props.title}
</strong>


<p>
{props.value}
</p>


</div>

);


}


