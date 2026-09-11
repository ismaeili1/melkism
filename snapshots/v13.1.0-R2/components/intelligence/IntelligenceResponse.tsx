export interface IntelligenceResponseProps {

data:unknown;

}



export function IntelligenceResponse(
props:IntelligenceResponseProps
){

return (

<pre>

{JSON.stringify(
props.data,
null,
2
)}

</pre>

);

}


