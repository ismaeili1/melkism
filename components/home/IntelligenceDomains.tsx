const domains=[

"Real Estate Intelligence",

"Market Intelligence",

"City Intelligence",

"Architecture Intelligence",

"Data Intelligence",

"AI Intelligence"

];


export default function IntelligenceDomains(){


return (

<section>


<h2>

Intelligence Domains

</h2>


<div className="intelligence-grid">


{

domains.map(domain=>(

<div

key={domain}

className="intelligence-card"

>


<h3>

{domain}

</h3>


<p>

Advanced knowledge and analytics layer.

</p>


</div>


))

}


</div>


</section>

)


}