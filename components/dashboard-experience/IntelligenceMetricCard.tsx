import type {DashboardMetric}
from "./dashboard.types";



type Props={

metric:DashboardMetric;

};



export default function IntelligenceMetricCard({

metric

}:Props){


return (

<article>


<span>

{metric.label}

</span>


<strong>

{metric.value}

</strong>


<p>

{metric.change}

</p>


</article>

)

}