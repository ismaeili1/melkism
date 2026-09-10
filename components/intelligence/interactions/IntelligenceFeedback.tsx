export type IntelligenceFeedbackState =

"ready"

|

"processing"

|

"success"

|

"error";



export interface IntelligenceFeedbackProps {

state:
IntelligenceFeedbackState;

}



export function IntelligenceFeedback(
props:IntelligenceFeedbackProps
){


return (

<div>

{props.state}

</div>

);


}

