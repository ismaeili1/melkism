<#
==============================================================
 MELKISM PHASE 05.2.10.B
 Intelligence Module Registry Activation

 SAFE IMPLEMENTATION SCRIPT

 Actions:
 - Backup
 - Registry Foundation Creation
 - Module Contract Creation
 - Resolver Preparation
 - Validation

==============================================================
#>

$ErrorActionPreference = "Stop"


Write-Host ""
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host " MELKISM PHASE 05.2.10.B" -ForegroundColor Cyan
Write-Host " Intelligence Module Registry Activation" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""


# --------------------------------------------------
# ROOT
# --------------------------------------------------

$Root="C:\Projects\melkism"


if(!(Test-Path $Root)){
    throw "MELKISM root not found"
}


Set-Location $Root



# --------------------------------------------------
# BACKUP
# --------------------------------------------------

$Backup =
"docs\phase-05.2.10\backup-registry-$(Get-Date -Format yyyyMMdd-HHmmss)"


New-Item `
-Type Directory `
-Path $Backup `
-Force | Out-Null



Write-Host "[PASS] Backup point created"



# --------------------------------------------------
# CREATE REGISTRY DIRECTORY
# --------------------------------------------------


$RegistryPath =
"lib\intelligence\registry"



New-Item `
-Type Directory `
-Path $RegistryPath `
-Force | Out-Null



Write-Host "[PASS] Registry directory created"



# --------------------------------------------------
# TYPES
# --------------------------------------------------


@'
export type IntelligenceModuleStatus =
  | "active"
  | "inactive"
  | "experimental"
  | "deprecated";


export type IntelligenceModuleCategory =
  | "core"
  | "agent"
  | "knowledge"
  | "decision"
  | "learning"
  | "runtime";


export interface IntelligenceModuleContract {

  id:string;

  name:string;

  version:string;

  category:IntelligenceModuleCategory;

  status:IntelligenceModuleStatus;


  execute(
    input:unknown
  ):Promise<unknown>;


  healthCheck():
  Promise<boolean>;

}

'@ |
Out-File `
"$RegistryPath\intelligence.registry.types.ts" `
-Encoding utf8



Write-Host "[PASS] Registry types created"



# --------------------------------------------------
# CONSTANTS
# --------------------------------------------------


@'
export const INTELLIGENCE_REGISTRY_VERSION =
"1.0.0";


export const INTELLIGENCE_STATUS = {

ACTIVE:"active",

INACTIVE:"inactive",

EXPERIMENTAL:"experimental",

DEPRECATED:"deprecated"

} as const;

'@ |
Out-File `
"$RegistryPath\intelligence.registry.constants.ts" `
-Encoding utf8



Write-Host "[PASS] Registry constants created"



# --------------------------------------------------
# REGISTRY CORE
# --------------------------------------------------


@'
import {
 IntelligenceModuleContract
}
from "./intelligence.registry.types";


class IntelligenceRegistry {


 private modules:
 Map<string,IntelligenceModuleContract>
 =
 new Map();



 register(
 module:IntelligenceModuleContract
 ){

   this.modules.set(
    module.id,
    module
   );

 }



 get(
 id:string
 ){

   return this.modules.get(id);

 }



 list(){

   return Array.from(
    this.modules.values()
   );

 }


}



export const intelligenceRegistry =
new IntelligenceRegistry();

'@ |
Out-File `
"$RegistryPath\intelligence.registry.ts" `
-Encoding utf8



Write-Host "[PASS] Registry core created"



# --------------------------------------------------
# INDEX
# --------------------------------------------------


@'
export *
from "./intelligence.registry";


export *
from "./intelligence.registry.types";


export *
from "./intelligence.registry.constants";

'@ |
Out-File `
"$RegistryPath\index.ts" `
-Encoding utf8



Write-Host "[PASS] Registry exports created"



# --------------------------------------------------
# DOCUMENTATION
# --------------------------------------------------


@"
# MELKISM Intelligence Registry

Phase:
05.2.10.B

Purpose:

Central registry for Intelligence Runtime modules.

Responsibilities:

- Module registration
- Module discovery
- Module lifecycle control

Status:

Foundation Layer

"@ |
Out-File `
"docs\MELKISM-INTELLIGENCE-REGISTRY-v1.0.0.md" `
-Encoding utf8



Write-Host "[PASS] Documentation created"



# --------------------------------------------------
# TYPESCRIPT CHECK
# --------------------------------------------------

Write-Host ""
Write-Host "Running TypeScript validation..."

npx tsc --noEmit



Write-Host ""
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host " PHASE 05.2.10.B COMPLETE" -ForegroundColor Green
Write-Host "==================================================" -ForegroundColor Cyan

Write-Host ""
Write-Host "Next Phase:"
Write-Host "PHASE 05.2.10.C Resolver Integration"
