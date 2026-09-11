import type {ReportItem}
from "./report.types";


interface Props{

item:ReportItem;

}


export default function ReportCard(
{item}:Props
){


return (

<article>


<h3>
{item.title}
</h3>


<p>
{item.summary}
</p>


<span>
{item.category}
</span>


{
item.premium &&
<strong>
Premium Report
</strong>
}


</article>

)

}