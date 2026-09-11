interface Props{

time?:string;

}


export default function ReadingMeta(
{
time="5 min"
}:Props
){

return (

<small>

Reading time: {time}

</small>

)

}