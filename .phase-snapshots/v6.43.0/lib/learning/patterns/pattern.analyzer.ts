import type {

IntelligencePattern

} from "./pattern.types";



export class PatternAnalyzer {



private patterns:
IntelligencePattern[] = [];



analyze(
input:string
){


const pattern: IntelligencePattern = {


id:
crypto.randomUUID(),


type:
"behavior",


description:
input,


confidence:
0.5,


createdAt:
new Date()


};



this.patterns.push(pattern);


return pattern;


}



getPatterns(){


return this.patterns;


}



}

