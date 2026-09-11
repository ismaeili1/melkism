"use client";


export interface IntelligenceInputProps {

value:string;

onChange?:
(value:string)=>void;

}



export function IntelligenceInput(
{
value,
onChange
}: IntelligenceInputProps
){


return (

<input
type="text"
value={value}
onChange={(event)=>{

onChange?.(
event.target.value
);

}}
/>

);


}


