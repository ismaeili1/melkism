# ============================================================
# MELKISM
# FIX LAYOUT PROPS TYPE
#
# Safe Patch
# ============================================================

$ErrorActionPreference="Stop"

$Root="C:\Projects\melkism"

$LayoutFile =
Join-Path $Root "app\layout.tsx"

$BackupRoot =
"C:\MELKISM-BACKUPS\layout-fix"



Write-Host ""
Write-Host "=============================================="
Write-Host "MELKISM LAYOUT PROPS REPAIR"
Write-Host "=============================================="
Write-Host ""



Set-Location $Root



# ------------------------------------------------
# 1 Verify
# ------------------------------------------------

Write-Host "[1/6] Verify layout"



if(!(Test-Path $LayoutFile)){

throw "app/layout.tsx not found"

}



Write-Host "PASS"



# ------------------------------------------------
# 2 Backup
# ------------------------------------------------


Write-Host "[2/6] Backup"



New-Item `
-ItemType Directory `
-Path $BackupRoot `
-Force | Out-Null



Copy-Item `
$LayoutFile `
$BackupRoot `
-Force



Write-Host "PASS"



# ------------------------------------------------
# 3 Inspect
# ------------------------------------------------


Write-Host "[3/6] Analyze LayoutProps"



$content =
Get-Content $LayoutFile -Raw



if($content -notmatch "type LayoutProps"){


Write-Host "LayoutProps missing. Repairing..."



if($content -notmatch "import type"){


$content =
"import type { ReactNode } from `"react`";`r`n`r`n" +
$content


}



$typeBlock=@'

type LayoutProps<T extends string = "/"> = {
  children: ReactNode;
};

'@



$content =
$typeBlock +
"`r`n" +
$content



[System.IO.File]::WriteAllText(
$LayoutFile,
$content,
(New-Object System.Text.UTF8Encoding($false))
)



}
else{


Write-Host "LayoutProps already exists"


}



Write-Host "PASS"



# ------------------------------------------------
# 4 Clean
# ------------------------------------------------


Write-Host "[4/6] Clean cache"



if(Test-Path ".next"){

Remove-Item `
".next" `
-Recurse `
-Force

}



Write-Host "PASS"



# ------------------------------------------------
# 5 TypeScript
# ------------------------------------------------


Write-Host "[5/6] Run TypeScript"



npx tsc --noEmit



if($LASTEXITCODE -ne 0){

throw "TypeScript failed"

}



Write-Host "PASS"



# ------------------------------------------------
# 6 Done
# ------------------------------------------------


Write-Host "[6/6] Complete"



git status --short



Write-Host ""

Write-Host "=============================================="
Write-Host "LAYOUT PROPS REPAIR COMPLETE"
Write-Host "=============================================="
