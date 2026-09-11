import ReportCard
from "./ReportCard";


import type {
ReportItem
}
from "./report.types";



const reports:ReportItem[]=[


{

id:"1",

title:"Global Real Estate Intelligence Report",

summary:"Market intelligence analysis",

category:"market",

date:"2026",

premium:true

}


];



export default function ReportLibrary(){


return (

<section>


<h1>
MELKISM Reports
</h1>



<div>


{

reports.map((report)=>(


<ReportCard

key={report.id}

item={report}


/>


))


}


</div>


</section>

)

}