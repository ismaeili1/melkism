export default function ReportCatalog(){

const reports=[

"Market Intelligence Report",
"Real Estate Analytics Report",
"Architecture Intelligence Report"

];


return (

<section>

{reports.map(report=>(

<div key={report}>

{report}

</div>

))}

</section>

);

}

