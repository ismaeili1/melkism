import type {
AssistantIntent
} from "./assistant.types";


export function processIntent(
text:string
):AssistantIntent{


if(text.includes("property")){
return "search";
}


return "knowledge";

}

