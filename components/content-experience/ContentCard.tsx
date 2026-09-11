interface ContentCardProps {

title:string;

description?:string;

category?:string;

}


export default function ContentCard(
{
title,
description,
category
}:ContentCardProps
){


return (

<article className="content-card">


{category && (

<span>
{category}
</span>

)}



<h3>
{title}
</h3>



<p>
{description}
</p>



</article>

)

}