interface PromptTemplate {

id:string;

template:string;

}



const prompts:PromptTemplate[]=[];



export function registerPrompt(
prompt:PromptTemplate
){

prompts.push(prompt);

}



export function getPrompts(){

return [...prompts];

}

