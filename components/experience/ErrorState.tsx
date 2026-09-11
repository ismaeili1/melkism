interface Props{

message:string;

}



export default function ErrorState(
{
message
}:Props
){


return (

<section>


<strong>

Error

</strong>


<p>

{message}

</p>


</section>

)

}