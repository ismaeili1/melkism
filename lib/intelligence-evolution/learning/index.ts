export type LearningContext={

source:string;

experience:string;

};


export function recordLearning(
source:string,
experience:string
){

return {

source,
experience

};

}
