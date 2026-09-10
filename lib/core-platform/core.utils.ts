export function createModuleId(
name:string
){

return name
.toLowerCase()
.replace(/\s+/g,"-");

}

