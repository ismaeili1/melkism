# ============================================================
# MELKISM
# BUILD ENVIRONMENT REPAIR SCRIPT
#
# Purpose:
# - Remove accidental backup folders from TS compilation
# - Move backups outside project
# - Protect tsconfig
# - Validate TypeScript
# ============================================================

$ErrorActionPreference = "Stop"


$Root = "C:\Projects\melkism"

$ExternalBackup = "C:\MELKISM-BACKUPS"


Write-Host ""
Write-Host "=============================================="
Write-Host "MELKISM BUILD ENVIRONMENT REPAIR"
Write-Host "=============================================="
Write-Host ""


Set-Location $Root



# ------------------------------------------------
# 1. Create external backup location
# ------------------------------------------------

Write-Host "[1/6] Prepare external backup location"


New-Item `
-ItemType Directory `
-Path $ExternalBackup `
-Force | Out-Null


Write-Host "PASS"



# ------------------------------------------------
# 2. Move accidental backup folders
# ------------------------------------------------

Write-Host "[2/6] Detect backup folders"



$BackupFolders = Get-ChildItem `
-Path $Root `
-Directory |
Where-Object {
    $_.Name -match "backup"
}



foreach($folder in $BackupFolders){


$destination =
Join-Path `
$ExternalBackup `
$folder.Name



Write-Host "Moving:"
Write-Host $folder.FullName



Move-Item `
-Path $folder.FullName `
-Destination $destination `
-Force


}



Write-Host "PASS"



# ------------------------------------------------
# 3. Update tsconfig
# ------------------------------------------------


Write-Host "[3/6] Update tsconfig protection"



$TsConfig =
Join-Path $Root "tsconfig.json"



if(!(Test-Path $TsConfig)){


throw "tsconfig.json not found"


}



$TsContent =
Get-Content $TsConfig -Raw



if($TsContent -notmatch '"exclude"'){


Write-Host "Adding exclude section"



$TsContent =
$TsContent.TrimEnd()

$TsContent =
$TsContent.TrimEnd("}")


$TsContent += @'

,
"exclude": [
 "node_modules",
 ".next",
 "backups",
 "backup-*"
]
}
'@


}

else {


Write-Host "exclude already exists - manual review skipped"


}



Set-Content `
-Path $TsConfig `
-Value $TsContent `
-Encoding UTF8



Write-Host "PASS"



# ------------------------------------------------
# 4. Remove generated cache
# ------------------------------------------------


Write-Host "[4/6] Clean Next cache"



if(Test-Path ".next"){


Remove-Item `
".next" `
-Recurse `
-Force


}



Write-Host "PASS"



# ------------------------------------------------
# 5. TypeScript validation
# ------------------------------------------------


Write-Host "[5/6] Run TypeScript validation"



npx tsc --noEmit



if($LASTEXITCODE -ne 0){


throw "TypeScript validation failed"


}



Write-Host "PASS"



# ------------------------------------------------
# 6. Final status
# ------------------------------------------------


Write-Host "[6/6] Git status"


git status --short



Write-Host ""

Write-Host "=============================================="
Write-Host "REPAIR COMPLETE"
Write-Host "=============================================="

Write-Host ""

Write-Host "Backup location:"
Write-Host $ExternalBackup
