# ============================================================
# MELKISM
# FIX LayoutProps + ReactNode IMPORT
# ============================================================

$ErrorActionPreference="Stop"


$Root="C:\Projects\melkism"

$LayoutFile =
Join-Path $Root "app\layout.tsx"


$BackupPath =
"C:\MELKISM-BACKUPS\layout-reactnode-fix"



Set-Location $Root


Write-Host ""
Write-Host "=============================================="
Write-Host "MELKISM Layout ReactNode Repair"
Write-Host "=============================================="



# 1
Write-Host "[1/6] Verify"



if(!(Test-Path $LayoutFile)){

throw "app/layout.tsx not found"

}


Write-Host "PASS"



# 2
Write-Host "[2/6] Backup"



New-Item `
-ItemType Directory `
-Path $BackupPath `
-Force | Out-Null


Copy-Item `
$LayoutFile `
$BackupPath `
-Force


Write-Host "PASS"



# 3
Write-Host "[3/6] Repair imports"



$content =
Get-Content $LayoutFile -Raw



if($content -notmatch "import type \{ ReactNode \} from `"react`";"){


$content =
'import type { ReactNode } from "react";' +
"`r`n" +
$content


}



Write-Host "PASS"



# 4
Write-Host "[4/6] Validate LayoutProps"



if($content -notmatch "type LayoutProps"){


$content += @'


type LayoutProps<T extends string = "/"> = {
  children: ReactNode;
};

'@


}



[System.IO.File]::WriteAllText(
$LayoutFile,
$content,
(New-Object System.Text.UTF8Encoding($false))
)


Write-Host "PASS"



# 5
Write-Host "[5/6] TypeScript"



if(Test-Path ".next"){

Remove-Item ".next" -Recurse -Force

}



npx tsc --noEmit


if($LASTEXITCODE -ne 0){

throw "TypeScript validation failed"

}



Write-Host "PASS"



# 6

Write-Host "[6/6] Complete"


git status --short



Write-Host ""
Write-Host "=============================================="
Write-Host "LAYOUT REACTNODE REPAIR COMPLETE"
Write-Host "=============================================="
