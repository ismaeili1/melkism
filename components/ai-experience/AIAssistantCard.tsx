type Props={

title:string;

description:string;

};


export default function AIAssistantCard({

title,

description

}:Props){


return (

<article>


<h3>

{title}

</h3>


<p>

{description}

</p>


</article>

)

}