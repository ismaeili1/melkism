# ============================================================
# MELKISM v6.39.1
# SOURCE INTEGRITY RECOVERY
# SAFE RESTORATION
# ============================================================

$ErrorActionPreference="Stop"

$ProjectRoot="C:\Projects\melkism"

if(!(Test-Path $ProjectRoot)){
    throw "Project root not found"
}

Set-Location $ProjectRoot


function Write-Title($Text){

    Write-Host ""
    Write-Host "============================================================"
    Write-Host $Text
    Write-Host "============================================================"

}


function Write-Step($Text){

    Write-Host ""
    Write-Host "[+] $Text"

}


Write-Title "MELKISM v6.39.1 SOURCE INTEGRITY RECOVERY"



# ------------------------------------------------------------
# 1. Git validation
# ------------------------------------------------------------

Write-Step "Repository validation"


$gitRoot=(git rev-parse --show-toplevel).Trim()


if(
    $gitRoot.Replace("\","/") -ne
    $ProjectRoot.Replace("\","/")
){

    throw "Git root mismatch: $gitRoot"

}


$head=(git rev-parse HEAD).Trim()


Write-Host "Git root PASS"
Write-Host "HEAD: $head"



# ------------------------------------------------------------
# 2. Backup
# ------------------------------------------------------------

Write-Step "Creating protected backup"


$timestamp=
Get-Date -Format "yyyyMMdd-HHmmss"


$Backup=
Join-Path $env:TEMP `
"MELKISM-v6.39.1-recovery-backup-$timestamp"



New-Item `
-ItemType Directory `
-Path $Backup `
-Force | Out-Null



robocopy `
$ProjectRoot `
$Backup `
/MIR `
/XD `
node_modules `
.next `
.git `
/R:1 `
/W:1 `
/NFL `
/NDL `
/NJH `
/NJS `
| Out-Null



Write-Host "Backup:"
Write-Host $Backup



# ------------------------------------------------------------
# 3. Scan zero byte source
# ------------------------------------------------------------

Write-Step "Scanning zero byte source files"



$Extensions=@(
"*.ts",
"*.tsx",
"*.js",
"*.jsx"
)



$ZeroFiles =
Get-ChildItem `
-Path @(
    "app",
    "components",
    "lib",
    "prisma",
    "styles"
) `
-Recurse `
-File `
-Include $Extensions `
-ErrorAction SilentlyContinue |
Where-Object {
    $_.Length -eq 0
}
Where-Object {
    $_.Length -eq 0
}



Write-Host "Zero byte files:"
Write-Host $ZeroFiles.Count



# ------------------------------------------------------------
# 4. Search backups
# ------------------------------------------------------------

Write-Step "Searching backup candidates"



$Recovered=@()

$Unresolved=@()



foreach($file in $ZeroFiles){

    $dir = $file.Directory.FullName

    $pattern = $file.Name + ".backup-*"


$candidates = @(
    Get-ChildItem `
    -Path $dir `
    -Filter $pattern `
    -File `
    -ErrorAction SilentlyContinue |
    Where-Object {
        $_.Length -gt 0
    } |
    Sort-Object LastWriteTime -Descending
)


if($candidates.Count -gt 0){

    $source = $candidates[0]

        Copy-Item `
        -Path $source.FullName `
        -Destination $file.FullName `
        -Force


        $Recovered += [PSCustomObject]@{

            File=$file.FullName

            RestoredFrom=$source.FullName

        }

    }
    else{

        $Unresolved += [PSCustomObject]@{

            File=$file.FullName

            Reason="No healthy backup found"

        }

    }

}


# ------------------------------------------------------------
# 5. Reports
# ------------------------------------------------------------

Write-Step "Generating reports"



$ReportPath=
Join-Path $ProjectRoot `
"recovery-v6.39.1"



New-Item `
-ItemType Directory `
-Path $ReportPath `
-Force | Out-Null



$Recovered |
ConvertTo-Json -Depth 5 |
Set-Content `
(Join-Path $ReportPath "recovered.json") `
-Encoding UTF8



$Unresolved |
ConvertTo-Json -Depth 5 |
Set-Content `
(Join-Path $ReportPath "unresolved.json") `
-Encoding UTF8



$Summary=[PSCustomObject]@{


Version=
"v6.39.1"


Backup=
$Backup


ZeroByteDetected=
$ZeroFiles.Count


Recovered=
$Recovered.Count


Unresolved=
$Unresolved.Count


GitHubChanged=
$false


}



$Summary |
ConvertTo-Json -Depth 5 |
Set-Content `
(Join-Path $ReportPath "summary.json") `
-Encoding UTF8



# ------------------------------------------------------------
# 6. Final status
# ------------------------------------------------------------


Write-Title "RECOVERY COMPLETED"


Write-Host ""
Write-Host "Backup:"
Write-Host $Backup

Write-Host ""

Write-Host "Zero byte detected:"
Write-Host $ZeroFiles.Count


Write-Host ""

Write-Host "Recovered:"
Write-Host $Recovered.Count


Write-Host ""

Write-Host "Unresolved:"
Write-Host $Unresolved.Count


Write-Host ""

Write-Host "Reports:"
Write-Host $ReportPath



Write-Host ""

Write-Host "GitHub unchanged."
Write-Host "No commit created."
Write-Host "No push performed."



if($Unresolved.Count -gt 0){

    Write-Host ""
    Write-Host "NEXT ACTION:"
    Write-Host "Review unresolved.json before any architecture generation."

}
else{

    Write-Host ""
    Write-Host "READY FOR:"
    Write-Host "MELKISM v6.40.0 Frontend Experience Foundation"

}