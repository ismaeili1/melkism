import type {ExperiencePage} from "./page.types";


export default function PageHero(
{
title,
description,
category
}:ExperiencePage
){


return (

<section>


<p>

{category}

</p>


<h1>

{title}

</h1>


<p>

{description}

</p>


</section>

)

}