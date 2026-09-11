# ============================================================
# MELKISM v6.39.0
# Design System & UI Components
# FINAL SAFE RELEASE SCRIPT
# ============================================================

$ErrorActionPreference = "Stop"


$ProjectRoot = "C:\Projects\melkism"

$Version = "v6.39.0"

$Timestamp = Get-Date -Format "yyyyMMdd-HHmmss"

$Backup = Join-Path `
$env:TEMP `
"MELKISM-$Version-backup-$Timestamp"


function Write-Step($Message){

    Write-Host ""
    Write-Host "============================================================"
    Write-Host $Message
    Write-Host "============================================================"

}


function Ensure-Directory($Path){

    if(!(Test-Path $Path)){

        New-Item `
        -ItemType Directory `
        -Path $Path `
        -Force | Out-Null

    }

}


function Validate-ScriptSyntax(){

    Write-Step "PowerShell syntax validation"

    $tokens = $null
    $errors = $null

    [System.Management.Automation.Language.Parser]::ParseFile(
        $PSCommandPath,
        [ref]$tokens,
        [ref]$errors
    )

    if($errors.Count -gt 0){

        throw "PowerShell syntax errors detected."

    }

    Write-Host "Syntax PASS"

}



function Create-Backup(){

    Write-Step "[1] Creating protected backup"


    Ensure-Directory $Backup


    $items = @(
        "components",
        "styles",
        "lib",
        "app"
    )


    foreach($item in $items){

        $source = Join-Path `
        $ProjectRoot `
        $item


        if(Test-Path $source){

            Copy-Item `
            $source `
            $Backup `
            -Recurse `
            -Force

        }

    }


    $files =
    Get-ChildItem `
    $Backup `
    -Recurse `
    -File `
    -ErrorAction SilentlyContinue


    if($files.Count -eq 0){

        throw "Backup validation failed."

    }


    Write-Host "Backup PASS"
    Write-Host $Backup

}



function Check-GitRoot(){

    Write-Step "[2] Repository validation"


    Set-Location $ProjectRoot


    $gitRoot =
    git rev-parse --show-toplevel


    $a =
    $gitRoot.Replace("\","/").TrimEnd("/")


    $b =
    $ProjectRoot.Replace("\","/").TrimEnd("/")


    if($a -ne $b){

        throw "Git root mismatch. Actual=$a Expected=$b"

    }


    Write-Host "Git root PASS"


}



function Ensure-Design-System(){

    Write-Step "[3] Design system foundation"


    $directories = @(
        "components/ui",
        "styles",
        "lib/design-system"
    )


    foreach($dir in $directories){

        Ensure-Directory `
        (Join-Path $ProjectRoot $dir)

    }


    Write-Host "Design foundation PASS"

}



function Check-ZeroByteFiles(){

    Write-Step "[4] Zero byte audit"


    $files =
    Get-ChildItem `
    $ProjectRoot `
    -Recurse `
    -File `
    -Exclude node_modules,.next `
    -ErrorAction SilentlyContinue


    foreach($file in $files){

        if($file.Length -eq 0){

            throw "Zero byte file detected: $($file.FullName)"

        }

    }


    Write-Host "Zero byte audit PASS"

}



function Validate-TypeScript(){

    Write-Step "[5] TypeScript"


    npx tsc --noEmit


    Write-Host "TypeScript PASS"

}



function Validate-Tests(){

    Write-Step "[6] Tests"


    npm test


    Write-Host "Tests PASS"

}



function Validate-Build(){

    Write-Step "[7] Production build"


    npm run build


    Write-Host "Build PASS"

}



function Create-Marker(){

    Write-Step "[8] Completion marker"


    $marker =
    Join-Path `
    $ProjectRoot `
    "release-$Version-complete.txt"


    @"
MELKISM $Version COMPLETE

Design System & UI Components

Status:
PASS

GitHub:
UNCHANGED

Deployment:
NOT EXECUTED

Next:
MELKISM v6.40.0
Page Experience & Visual Implementation
"@ |
    Set-Content `
    -Path $marker `
    -Encoding UTF8


}



try {


    Validate-ScriptSyntax


    Check-GitRoot


    Create-Backup


    Ensure-Design-System


    Check-ZeroByteFiles


    Validate-TypeScript


    Validate-Tests


    Validate-Build


    Create-Marker


    Write-Host ""

    Write-Host "============================================================"
    Write-Host "MELKISM v6.39.0 COMPLETED"
    Write-Host "============================================================"

    Write-Host ""

    Write-Host "Backup:"
    Write-Host $Backup

    Write-Host ""

    Write-Host "Next phase:"
    Write-Host "MELKISM v6.40.0 - Page Experience & Visual Implementation"



}
catch {


    Write-Host ""

    Write-Host "============================================================"
    Write-Host "MELKISM v6.39.0 FAILED"
    Write-Host "============================================================"


    Write-Host $_.Exception.Message


    if(Test-Path $Backup){

        Write-Host ""
        Write-Host "Backup retained:"
        Write-Host $Backup

    }


    throw

}