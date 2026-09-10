export function normalizeMetricName(
name:string
){

return name
.trim()
.toLowerCase()
.replace(/\s+/g,".");

}

