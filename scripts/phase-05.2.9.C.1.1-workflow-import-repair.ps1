# ============================================================
# MELKISM v38.20.15
# PHASE 05.2.9.C.1.1
# WORKFLOW IMPORT PRECISION REPAIR
# ============================================================


$ErrorActionPreference="Stop"


$Root="C:\Projects\melkism"


Set-Location $Root


Write-Host ""
Write-Host "=============================================="
Write-Host "WORKFLOW IMPORT PRECISION REPAIR"
Write-Host "=============================================="



$Files=@(
"lib/workflow/learning/melkism.workflow.learning.layer.ts",
"lib/workflow/monitoring/melkism.workflow.monitoring.layer.ts"
)



$Backup="C:\MELKISM-BACKUPS\workflow-import-repair"


New-Item `
-ItemType Directory `
-Path $Backup `
-Force | Out-Null



foreach($file in $Files){


$path=Join-Path $Root $file


if(!(Test-Path $path)){

continue

}


Write-Host "Repair:"
Write-Host $path



Copy-Item `
$path `
$Backup `
-Force



$content=
Get-Content `
$path `
-Raw



# Remove any import line containing these unused contracts

$content =
[regex]::Replace(
$content,
'(?m)^.*MELKISMInput.*MELKISMOutput.*\r?\n',
''
)



# Remove separated multiline imports

$content =
[regex]::Replace(
$content,
'(?ms)import\s*(type\s*)?\{\s*MELKISMInput\s*,\s*MELKISMOutput\s*\}\s*from\s*["''][^"'']+["''];?\s*',
''
)



[System.IO.File]::WriteAllText(
$path,
$content,
[System.Text.UTF8Encoding]::new($false)
)


}



Write-Host ""
Write-Host "TypeScript Check"



npx tsc --noEmit


if($LASTEXITCODE -ne 0){

throw "TypeScript failed"

}


Write-Host "PASS"



Write-Host ""
Write-Host "Workflow import repair completed"

