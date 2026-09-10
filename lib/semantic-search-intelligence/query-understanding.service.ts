export function understandQuery(
text:string
){

return {

text,

entities:
text
.split(" ")
.filter(Boolean),

intent:
"knowledge-search"

};

}

