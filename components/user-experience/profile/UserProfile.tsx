
interface Props{

name:string;

}


export default function UserProfile(
{ name }:Props
){


return (

<section>

<h2>
{name}
</h2>


<p>
MELKISM Intelligence Profile
</p>


</section>

)

}


