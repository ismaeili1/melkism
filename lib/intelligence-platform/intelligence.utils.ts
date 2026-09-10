export function createIntelligenceId(
name:string
){

return name
.toLowerCase()
.trim()
.replace(/\s+/g,"-");

}

