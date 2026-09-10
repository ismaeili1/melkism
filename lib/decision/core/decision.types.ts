export interface Decision {

id:string;

context:string;

options:string[];

selectedOption?:string;

confidence:number;

explanation:string;

}

