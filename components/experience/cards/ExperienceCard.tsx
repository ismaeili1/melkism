
interface Props{

title:string;

description:string;

}


export default function ExperienceCard(
{title,description}:Props
){


return (

<article>

<h3>{title}</h3>

<p>{description}</p>

</article>

)

}


