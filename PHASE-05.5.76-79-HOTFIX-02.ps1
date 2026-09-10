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
Write-Host " MELKISM PHASE-05.5.76-79 HOTFIX-02"
Write-Host "=========================================="


$Modules=@(

@{
folder="adaptive-self-evolution-intelligence-learning-v2"
Name="Learning"
Function="processAdaptiveSelfEvolutionIntelligenceLearning"
},

@{
folder="adaptive-self-evolution-intelligence-improvement-v2"
Name="Improvement"
Function="processAdaptiveSelfEvolutionIntelligenceImprovement"
},

@{
folder="adaptive-self-evolution-intelligence-optimization-v2"
Name="Optimization"
Function="processAdaptiveSelfEvolutionIntelligenceOptimization"
},

@{
folder="adaptive-self-evolution-intelligence-governance-v2"
Name="Governance"
Function="processAdaptiveSelfEvolutionIntelligenceGovernance"
}

)



foreach($Module in $Modules){


$Path="$ProjectRoot\intelligence\$($Module.folder)\engine\index.ts"



$content=@"

export type {

AdaptiveSelfEvolutionIntelligence$($Module.Name)Context,

AdaptiveSelfEvolutionIntelligence$($Module.Name)Result

} from "./engine.types";


export {

$($Module.Function)

} from "./processor";

"@



Write-SafeFile $Path $content



}



Write-Host "Engine exports updated"



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
Write-Host " HOTFIX-02 COMPLETE"
Write-Host " TypeScript PASS"
Write-Host " ESLint PASS"
Write-Host " Build PASS"
Write-Host "=========================================="