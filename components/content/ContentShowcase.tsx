import ContentGrid from "./ContentGrid"
import {ContentItem} from "./content.types"


const demoContent:ContentItem[]=[

{

id:"1",

title:"MELKISM Intelligence Report",

summary:
"AI driven real estate and built environment intelligence.",

category:"Report"

},

{

id:"2",

title:"Future Cities Research",

summary:
"Research insights about cities, markets and architecture.",

category:"Research"

}

]


export default function ContentShowcase(){


return (

<ContentGrid
items={demoContent}
/>

)

}