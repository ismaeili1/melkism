export interface ActivityFeedProps {

items:string[];

}



export function ActivityFeed(
props:ActivityFeedProps
){


return (

<ul>

{

props.items.map(

(item,index)=>(

<li key={index}>

{item}

</li>

)

)

}

</ul>

);


}


