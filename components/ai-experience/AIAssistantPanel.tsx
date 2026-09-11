import AIMessageBubble
from "./AIMessageBubble";


import type {
AIMessage
}
from "./ai.types";



const messages:AIMessage[]=[


{

id:"message-1",

role:"assistant",

content:
"Welcome to MELKISM Intelligence Assistant",

timestamp:"2026"

}


];



export default function AIAssistantPanel(){


return (

<section>


<h2>

MELKISM AI Assistant

</h2>



{

messages.map((message)=>(


<AIMessageBubble

key={message.id}

message={message}


/>


))

}


</section>

)

}