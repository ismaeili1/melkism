import {
IntelligenceStatus
} from "./IntelligenceStatus";


import {
IntelligenceResponse
} from "./IntelligenceResponse";



export interface IntelligencePanelProps {

response?:unknown;

}



export function IntelligencePanel(
props:IntelligencePanelProps
){


const hasResponse =
props.response !== undefined &&
props.response !== null;



return (

<section>

<IntelligenceStatus />


{hasResponse && (

<IntelligenceResponse
data={props.response}
/>

)}


</section>

);


}


