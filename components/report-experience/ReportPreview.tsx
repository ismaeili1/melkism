import type {ReportItem}
from "./report.types";


export default function ReportPreview(
{report}:{report:ReportItem}
){


return (

<section>


<h2>
{report.title}
</h2>


<p>
{report.summary}
</p>


<button>
Download Report
</button>


</section>

)

}