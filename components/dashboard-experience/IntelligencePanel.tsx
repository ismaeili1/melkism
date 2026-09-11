import type {DashboardInsight}
from "./dashboard.types";



type Props={

title:string;

items:DashboardInsight[];

};



export default function IntelligencePanel({

title,

items

}:Props){


return (

<section>


<h2>

{title}

</h2>


{

items.map(item=>(

<article key={item.title}>


<span>

{item.category}

</span>


<h3>

{item.title}

</h3>


<p>

{item.description}

</p>


</article>

))

}


</section>

)

}