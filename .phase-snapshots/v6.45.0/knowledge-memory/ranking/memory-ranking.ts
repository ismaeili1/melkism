
export function rankMemory(
 confidence:number,
 relevance:number
){

 return (
  confidence * 0.6 +
  relevance * 0.4
 );

}


