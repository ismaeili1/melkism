
interface Props{

title:string;

content:string;

}


export default function AIInsightCard(
{title,content}:Props
){


return (

<article>

<h3>
{title}
</h3>


<p>
{content}
</p>


</article>

)

}


