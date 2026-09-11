type Props={

title:string;

summary:string;

};



export default function DiscoveryCard({

title,

summary

}:Props){


return (

<article>


<h3>

{title}

</h3>


<p>

{summary}

</p>


</article>

)

}