interface Props{

title:string;

description:string;

}



export default function EmptyState(
{
title,
description
}:Props
){


return (

<section>


<h3>

{title}

</h3>


<p>

{description}

</p>


</section>

)

}