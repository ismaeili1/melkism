
interface Props{

message:string;

}


export default function AIAssistant(
{message}:Props
){


return (

<section>

<h2>
MELKISM AI Assistant
</h2>


<p>
{message}
</p>


</section>

)

}


