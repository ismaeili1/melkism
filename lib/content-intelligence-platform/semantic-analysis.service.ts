export function analyzeSemanticContent(
text:string
){

return {

keywords:
text
.split(" ")
.filter(Boolean),

concepts:[]

};

}

