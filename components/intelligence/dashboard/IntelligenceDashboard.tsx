import {
MetricCard
} from "./MetricCard";


import {
ActivityFeed
} from "./ActivityFeed";



export function IntelligenceDashboard(){


return (

<section>


<MetricCard

title="Intelligence"

value="Active"

/>



<ActivityFeed

items={[

"Runtime initialized",

"Services connected"

]}

/>


</section>

);


}

