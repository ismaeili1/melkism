$Root="C:\Projects\melkism\intelligence"


$Modules=@(

"autonomous-memory-core-v1",

"experience-memory-engine-v1",

"knowledge-memory-store-v1",

"learning-feedback-engine-v1",

"intelligence-evolution-engine-v1"

)



$Found=@()


foreach($Module in $Modules){


$Path=Join-Path $Root $Module


if(Test-Path $Path){


$result=
Get-ChildItem `
$Path `
-Recurse `
-Filter "*.ts" |
Select-String `
-Pattern `
"export interface MemoryRecord|export interface LearningSignal|export interface ExperienceEvent"



if($result){

$Found += $result

}


}


}



if($Found.Count -gt 3){

$Found

throw "Scoped duplicate memory contracts detected"

}


Write-Host "SCOPED MEMORY AUDIT PASS"

