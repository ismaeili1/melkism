export interface IntelligenceActionProps {

label:string;

onExecute?:
()=>void;

}



export function IntelligenceAction(
props:IntelligenceActionProps
){


return (

<button

onClick={props.onExecute}

>

{props.label}

</button>

);


}

