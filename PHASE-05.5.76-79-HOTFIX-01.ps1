$ErrorActionPreference="Stop"


$ProjectRoot="C:\Projects\melkism"


function Write-SafeFile {

param(
[string]$Path,
[string]$Content
)


$Temp="$Path.tmp"


Set-Content `
-Path $Temp `
-Value $Content `
-Encoding UTF8


Move-Item `
-Path $Temp `
-Destination $Path `
-Force

}



Write-Host ""
Write-Host "=========================================="
Write-Host " MELKISM PHASE-05.5.76-79 HOTFIX-01"
Write-Host "=========================================="


$Modules=@(

@{
folder="adaptive-self-evolution-intelligence-learning-v2"
Name="Learning"
},

@{
folder="adaptive-self-evolution-intelligence-improvement-v2"
Name="Improvement"
},

@{
folder="adaptive-self-evolution-intelligence-optimization-v2"
Name="Optimization"
},

@{
folder="adaptive-self-evolution-intelligence-governance-v2"
Name="Governance"
}

)



foreach($Module in $Modules){


$Path="$ProjectRoot\intelligence\$($Module.folder)\engine\engine.types.ts"


$content=@"

import type {

AdaptiveSelfEvolutionIntelligence$($Module.Name)Input,

AdaptiveSelfEvolutionIntelligence$($Module.Name)Record

} from "../contracts";


export interface AdaptiveSelfEvolutionIntelligence$($Module.Name)Context {


request:AdaptiveSelfEvolutionIntelligence$($Module.Name)Input;


history:AdaptiveSelfEvolutionIntelligence$($Module.Name)Record[];

}



export interface AdaptiveSelfEvolutionIntelligence$($Module.Name)Result {


record:AdaptiveSelfEvolutionIntelligence$($Module.Name)Record;


executionTime:number;


}

"@


Write-SafeFile $Path $content


$Processor="$ProjectRoot\intelligence\$($Module.folder)\engine\processor.ts"


$processorContent=@"

import type {

AdaptiveSelfEvolutionIntelligence$($Module.Name)Context,

AdaptiveSelfEvolutionIntelligence$($Module.Name)Result

} from "./engine.types";



export function processAdaptiveSelfEvolutionIntelligence$($Module.Name)(

context:AdaptiveSelfEvolutionIntelligence$($Module.Name)Context

):AdaptiveSelfEvolutionIntelligence$($Module.Name)Result {


return {


record:{


id:context.request.id,


score:0.5,


confidence:0.5,


memoryScore:0.5,


status:"initialized",


createdAt:new Date()


},


executionTime:0


} as AdaptiveSelfEvolutionIntelligence$($Module.Name)Result;


}

"@


Write-SafeFile $Processor $processorContent



}



Write-Host "Engine namespaces fixed"



Set-Location $ProjectRoot


npx tsc --noEmit


if($LASTEXITCODE -ne 0){

throw "TypeScript failed"

}


npm run lint


if($LASTEXITCODE -ne 0){

throw "Lint failed"

}


npm run build


if($LASTEXITCODE -ne 0){

throw "Build failed"

}



Write-Host ""
Write-Host "=========================================="
Write-Host " HOTFIX COMPLETE"
Write-Host " TypeScript PASS"
Write-Host " ESLint PASS"
Write-Host " Build PASS"
Write-Host "=========================================="