export function normalizeRepositoryName(
name:string
){

return name
.trim()
.toLowerCase()
.replace(/\s+/g,"-");

}

