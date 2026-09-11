import type {
ResponsiveReview
}
from "./review.types";


export const responsiveMatrix:
ResponsiveReview[]
=
[

{
device:"desktop",
width:"1440px+",
layout:"full experience",
navigation:"desktop navigation",
status:"review"
},


{
device:"tablet",
width:"768px-1439px",
layout:"adaptive grid",
navigation:"collapsed navigation",
status:"review"
},


{
device:"mobile",
width:"390px-767px",
layout:"single column",
navigation:"mobile navigation",
status:"review"
}

];