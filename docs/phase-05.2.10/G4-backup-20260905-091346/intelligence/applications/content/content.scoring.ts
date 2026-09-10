import type {

ContentScoreInput,

ContentScoreResult,

ContentCategory

} from "./content.scoring.types";



export class ContentScoringEngine {



score(

input:ContentScoreInput

):ContentScoreResult {



const text=input.text.trim();


const lengthScore=

Math.min(

100,

Math.round(text.length / 10)

);



const category=this.classify(text);



return {


contentId:input.contentId,


qualityScore:lengthScore,


confidence:

text.length>0 ? 0.8 : 0,


category,


signals:[

"content_length_analyzed",

"category_detected"

],


createdAt:new Date()


};



}



private classify(

text:string

):ContentCategory {



const value=text.toLowerCase();



if(

value.includes("property")

||

value.includes("real estate")

)

{

return "property";

}



if(

value.includes("architecture")

)

{

return "architecture";

}



if(

value.includes("report")

)

{

return "report";

}



if(

value.includes("news")

)

{

return "news";

}



if(

value.length>100

)

{

return "article";

}



return "unknown";


}



}

