import type {
AIMessage
}
from "./ai.types";


interface Props{

message:AIMessage;

}


export default function AIMessageBubble(
{message}:Props
){


return (

<div>


<strong>

{message.role}

</strong>


<p>

{message.content}

</p>


</div>

)

}