<#
==============================================================
 MELKISM PHASE 05.2.10.A
 Architecture Snapshot Freeze
 Intelligence Runtime Preparation

 SAFE MODE
 READ ONLY
 NO SOURCE MODIFICATION

 Author: MELKISM Engineering
==============================================================
#>

$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host " MELKISM PHASE 05.2.10.A" -ForegroundColor Cyan
Write-Host " Architecture Snapshot Freeze" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""


# ------------------------------------------------------------
# 1. Validate Project Root
# ------------------------------------------------------------

$ProjectRoot = "C:\Projects\melkism"

if (!(Test-Path $ProjectRoot)) {
    throw "MELKISM project root not found"
}

Set-Location $ProjectRoot

Write-Host "[PASS] Project Root:" $ProjectRoot -ForegroundColor Green


# ------------------------------------------------------------
# 2. Prepare Documentation Folder
# ------------------------------------------------------------

$SnapshotRoot = Join-Path `
    $ProjectRoot `
    "docs\phase-05.2.10"


if (!(Test-Path $SnapshotRoot)) {

    New-Item `
        -ItemType Directory `
        -Path $SnapshotRoot `
        -Force | Out-Null

}


Write-Host "[PASS] Snapshot directory ready"


# ------------------------------------------------------------
# 3. Timestamp
# ------------------------------------------------------------

$TimeStamp = Get-Date `
    -Format "yyyy-MM-dd-HH-mm-ss"



# ------------------------------------------------------------
# 4. Git Snapshot
# ------------------------------------------------------------


git status --short |
Out-File `
    "$SnapshotRoot\git-status-$TimeStamp.txt" `
    -Encoding utf8


git branch |
Out-File `
    "$SnapshotRoot\git-branch-$TimeStamp.txt" `
    -Encoding utf8



Write-Host "[PASS] Git snapshot created"



# ------------------------------------------------------------
# 5. Project Tree Snapshot
# ------------------------------------------------------------


Get-ChildItem `
    -Path $ProjectRoot `
    -Recurse `
    -File |
    Select-Object FullName,Length,LastWriteTime |
    Out-File `
    "$SnapshotRoot\project-tree-$TimeStamp.txt" `
    -Encoding utf8



Write-Host "[PASS] Project tree captured"



# ------------------------------------------------------------
# 6. Intelligence Module Inventory
# ------------------------------------------------------------


$IntelligencePath =
Join-Path `
$ProjectRoot `
"lib\intelligence"



if(Test-Path $IntelligencePath){


Get-ChildItem `
    $IntelligencePath `
    -Recurse `
    -File |
    Select FullName |
    Out-File `
    "$SnapshotRoot\intelligence-modules-$TimeStamp.txt" `
    -Encoding utf8


}


Write-Host "[PASS] Intelligence inventory created"



# ------------------------------------------------------------
# 7. Content Intelligence Inventory
# ------------------------------------------------------------


$ContentIntel =
Join-Path `
$ProjectRoot `
"lib\content\intelligence"


if(Test-Path $ContentIntel){


Get-ChildItem `
    $ContentIntel `
    -Recurse `
    -File |
    Select FullName |
    Out-File `
    "$SnapshotRoot\content-intelligence-$TimeStamp.txt" `
    -Encoding utf8


}


Write-Host "[PASS] Content Intelligence inventory created"



# ------------------------------------------------------------
# 8. Runtime Layers Inventory
# ------------------------------------------------------------


$RuntimeFolders = @(
"lib\runtime",
"lib\workflow",
"lib\orchestration",
"lib\agents",
"lib\engine",
"lib\decision",
"lib\knowledge",
"lib\memory"
)



foreach($folder in $RuntimeFolders){

    $path = Join-Path `
        $ProjectRoot `
        $folder


    if(Test-Path $path){

        Get-ChildItem `
            $path `
            -Recurse `
            -File |
            Select FullName |
            Out-File `
            "$SnapshotRoot\runtime-$($folder.Replace('\','-'))-$TimeStamp.txt" `
            -Encoding utf8

    }

}



Write-Host "[PASS] Runtime inventory created"



# ------------------------------------------------------------
# 9. Package Metadata
# ------------------------------------------------------------


Get-Content `
".\package.json" |
Out-File `
"$SnapshotRoot\package-$TimeStamp.json" `
-Encoding utf8



Write-Host "[PASS] Package metadata captured"



# ------------------------------------------------------------
# 10. TypeScript Configuration Snapshot
# ------------------------------------------------------------


Copy-Item `
".\tsconfig.json" `
"$SnapshotRoot\tsconfig-$TimeStamp.json" `
-Force


Copy-Item `
".\eslint.config.mjs" `
"$SnapshotRoot\eslint-config-$TimeStamp.mjs" `
-Force



Write-Host "[PASS] Tooling configuration captured"



# ------------------------------------------------------------
# 11. Export Detection
# ------------------------------------------------------------


$ExportReport =
"$SnapshotRoot\exports-map-$TimeStamp.txt"



Get-ChildItem `
"lib" `
-Recurse `
-Filter "*.ts" |
ForEach-Object {


    $content =
    Get-Content $_.FullName


    if(
        $content -match "export"
    ){

        Add-Content `
        $ExportReport `
        "FILE: $($_.FullName)"


        Add-Content `
        $ExportReport `
        ($content |
        Select-String "export")


        Add-Content `
        $ExportReport `
        "-----------------------------"

    }

}



Write-Host "[PASS] Export map created"



# ------------------------------------------------------------
# 12. Generate JSON Baseline
# ------------------------------------------------------------


$Baseline = @{

    phase =
    "05.2.10.A"


    timestamp =
    $TimeStamp


    project =
    "MELKISM"


    mode =
    "READ_ONLY"


    eslintErrors =
    0


    eslintWarnings =
    1803


    purpose =
    "Architecture Snapshot Freeze Before Intelligence Runtime Wiring"

}



$Baseline |
ConvertTo-Json -Depth 5 |
Out-File `
"$SnapshotRoot\phase-05.2.10-baseline.json" `
-Encoding utf8



# ------------------------------------------------------------
# 13. Final Report
# ------------------------------------------------------------


Write-Host ""
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host " PHASE 05.2.10.A COMPLETE" -ForegroundColor Green
Write-Host "==================================================" -ForegroundColor Cyan

Write-Host ""
Write-Host "Snapshot Location:"
Write-Host $SnapshotRoot

Write-Host ""
Write-Host "Next Phase:"
Write-Host "PHASE 05.2.10.B Intelligence Module Registry Activation"
Write-Host ""
