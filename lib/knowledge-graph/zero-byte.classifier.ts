
export type ZeroByteClassification =
 | "runtime-risk"
 | "future-module"
 | "documentation"
 | "unknown";


export function classifyZeroByte(
 path:string
):ZeroByteClassification {


 if(
  path.includes("docs") ||
  path.includes("architecture")
 ){
  return "documentation";
 }


 if(
  path.includes("future") ||
  path.includes("ai")
 ){
  return "future-module";
 }


 if(
  path.includes("app") ||
  path.includes("components") ||
  path.includes("lib")
 ){
  return "runtime-risk";
 }


 return "unknown";

}

