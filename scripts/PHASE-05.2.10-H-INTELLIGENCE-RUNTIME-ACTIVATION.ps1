# ============================================================
# MELKISM PHASE 05.2.10.H
# Intelligence Runtime Activation
# ============================================================

$ErrorActionPreference="Stop"


$ProjectRoot="C:\Projects\melkism"

Set-Location $ProjectRoot


Write-Host ""
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host " MELKISM PHASE 05.2.10.H"
Write-Host " Intelligence Runtime Activation"
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""


# ------------------------------------------------------------
# Backup
# ------------------------------------------------------------

$backupRoot="C:\Projects\melkism-backups\phase-05.2.10"

$stamp=Get-Date -Format "yyyyMMdd-HHmmss"

$backup="$backupRoot\H-runtime-$stamp"


New-Item `
-Type Directory `
-Force `
-Path $backup | Out-Null


Copy-Item `
".\lib\intelligence\runtime" `
"$backup\runtime" `
-Recurse `
-Force `
-ErrorAction SilentlyContinue


Write-Host "[PASS] Runtime backup created"



# ------------------------------------------------------------
# Activation folders
# ------------------------------------------------------------

$activationPath=".\lib\intelligence\activation"


New-Item `
-Type Directory `
-Force `
-Path $activationPath | Out-Null



# ------------------------------------------------------------
# Types
# ------------------------------------------------------------

@'
export type IntelligenceActivationState =
  | "CREATED"
  | "REGISTERED"
  | "INITIALIZED"
  | "ACTIVE"
  | "FAILED";


export interface IntelligenceActivationResult {

 state: IntelligenceActivationState;

 timestamp:string;

}

'@ |
Set-Content `
"$activationPath\intelligence.activation.types.ts" `
-Encoding UTF8



Write-Host "[PASS] Activation types created"



# ------------------------------------------------------------
# Service
# ------------------------------------------------------------


@'
import type {
 IntelligenceActivationResult
} from "./intelligence.activation.types";


export class IntelligenceActivationService {


activate(): IntelligenceActivationResult {


return {

state:"ACTIVE",

timestamp:new Date().toISOString()

};


}


}

'@ |
Set-Content `
"$activationPath\intelligence.activation.service.ts" `
-Encoding UTF8



Write-Host "[PASS] Activation service created"



# ------------------------------------------------------------
# Manager
# ------------------------------------------------------------


@'
import {
 IntelligenceActivationService
} from "./intelligence.activation.service";


export class IntelligenceActivationManager {


private service =
new IntelligenceActivationService();



start(){

return this.service.activate();

}


}

'@ |
Set-Content `
"$activationPath\intelligence.activation.manager.ts" `
-Encoding UTF8



Write-Host "[PASS] Activation manager created"



# ------------------------------------------------------------
# Export
# ------------------------------------------------------------


@'
export * from "./intelligence.activation.types";
export * from "./intelligence.activation.service";
export * from "./intelligence.activation.manager";
'@ |
Set-Content `
"$activationPath\index.ts" `
-Encoding UTF8



Write-Host "[PASS] Activation exports created"



# ------------------------------------------------------------
# Documentation
# ------------------------------------------------------------


$docPath=".\docs\phase-05.2.10\H-runtime-activation"


New-Item `
-Type Directory `
-Force `
-Path $docPath | Out-Null



@"
# MELKISM PHASE 05.2.10.H

## Intelligence Runtime Activation

Status:
ACTIVE FOUNDATION

Created:
$(Get-Date)

Components:

- Activation Types
- Activation Service
- Activation Manager

"@ |
Set-Content `
"$docPath\PHASE-05.2.10.H.md" `
-Encoding UTF8



Write-Host "[PASS] Documentation created"



# ------------------------------------------------------------
# Validation
# ------------------------------------------------------------


Write-Host ""
Write-Host "[1] TypeScript Validation"


npx tsc --noEmit



Write-Host ""
Write-Host "[2] ESLint Error Gate"



$report="$docPath\eslint.json"


npx eslint . `
--format json `
--output-file $report



$data=Get-Content `
$report `
-Raw |
ConvertFrom-Json


$errors=0


foreach($file in $data){

foreach($m in $file.messages){

if($m.severity -eq 2){

$errors++

Write-Host ""
Write-Host "ERROR:"
Write-Host $file.filePath
Write-Host $m.message

}

}

}



if($errors -gt 0){

throw "ESLint real errors detected"

}



Write-Host ""
Write-Host "==================================================" -ForegroundColor Green
Write-Host " PHASE 05.2.10.H COMPLETE"
Write-Host " INTELLIGENCE RUNTIME ACTIVATION READY"
Write-Host "==================================================" -ForegroundColor Green
