# ============================================================
# MELKISM v38.20.15
# PHASE 05.2.9.C.1
# WORKFLOW TYPE SAFETY PATCH
# SAFE VERSION
# ============================================================


$ErrorActionPreference="Stop"



$Root = "C:\Projects\melkism"


Write-Host ""
Write-Host "=============================================="
Write-Host "WORKFLOW TYPE SAFETY PATCH"
Write-Host "=============================================="



# ------------------------------------------------
# Verify root
# ------------------------------------------------

if(!(Test-Path $Root)){

    throw "MELKISM ROOT NOT FOUND"

}


Set-Location -Path $Root


Write-Host "Current Path:"
Get-Location



# ------------------------------------------------
# Files
# ------------------------------------------------


$Files=@(

"lib/workflow/learning/melkism.workflow.learning.layer.ts"

"lib/workflow/monitoring/melkism.workflow.monitoring.layer.ts"

)



$Backup =
"C:\MELKISM-BACKUPS\workflow-type-fix"



New-Item `
-ItemType Directory `
-Path $Backup `
-Force | Out-Null



foreach($file in $Files){


    $FullPath =
    Join-Path $Root $file



    Write-Host ""
    Write-Host "Processing:"
    Write-Host $FullPath



    if(!(Test-Path $FullPath)){

        Write-Host "SKIP - FILE NOT FOUND"

        continue

    }



    Copy-Item `
    $FullPath `
    $Backup `
    -Force



    $content =
    Get-Content `
    $FullPath `
    -Raw



    # remove unused imports safely

    $content =
    $content -replace `
    'import\s*\{\s*MELKISMInput,\s*MELKISMOutput\s*\}\s*from\s*["''][^"'']+["''];?\s*',
    ''



    # any -> unknown

    $content =
    $content -replace `
    '\bany\b',
    'unknown'



    [System.IO.File]::WriteAllText(
        $FullPath,
        $content,
        [System.Text.UTF8Encoding]::new($false)
    )


}



Write-Host ""
Write-Host "[1/3] TypeScript"



npx tsc --noEmit


if($LASTEXITCODE -ne 0){

throw "TypeScript failed"

}


Write-Host "PASS"



Write-Host ""
Write-Host "[2/3] ESLint"



npm run lint


if($LASTEXITCODE -ne 0){

throw "Lint failed"

}


Write-Host "PASS"



Write-Host ""
Write-Host "[3/3] COMPLETE"



git status --short



Write-Host ""
Write-Host "WORKFLOW TYPE SAFETY PATCH COMPLETE"
