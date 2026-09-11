
const items=[

"Real Estate Intelligence",

"Architecture Intelligence",

"Market Intelligence",

"Knowledge Intelligence"

]


export default function IntelligenceSections(){


return (

<section>

{items.map(item=>(

<div key={item}>

{item}

</div>

))}


</section>

)

}


