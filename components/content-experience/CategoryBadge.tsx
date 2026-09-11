interface Props{

name:string;

}


export default function CategoryBadge(
{
name
}:Props
){


return (

<span>

{name}

</span>

)

}