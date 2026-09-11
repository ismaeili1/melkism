type HeroProps={

title?:string;

description?:string;

};



export default function HeroExperience({

title="MELKISM",

description="Intelligence Ecosystem for Real Estate, Architecture and Built Environment"

}:HeroProps){


return (

<section className="hero">


<div className="hero-content">


<p className="brand-label">

MELKISM AI

</p>


<h1>

{title}

</h1>


<h2>

Intelligence Ecosystem

</h2>


<p>

{description}

</p>


<div className="hero-actions">


<button>

Explore Intelligence

</button>


<button>

Search Knowledge

</button>


</div>


</div>


</section>

)


}