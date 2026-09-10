export function matchEntity(
entity:string,
items:string[]
){

return items.filter(
item =>
item.includes(entity)
);

}

