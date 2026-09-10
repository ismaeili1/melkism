<#
==============================================================
 MELKISM PHASE 05.2.10.C
 Intelligence Resolver Integration

 SAFE PATCH
==============================================================
#>


$ErrorActionPreference="Stop"


Write-Host ""
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host " MELKISM PHASE 05.2.10.C" -ForegroundColor Cyan
Write-Host " Intelligence Resolver Integration" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan



$Root="C:\Projects\melkism"


if(!(Test-Path $Root)){
    throw "Project root not found"
}


Set-Location $Root



# --------------------------------------------------
# BACKUP
# --------------------------------------------------

$Backup=
"docs\phase-05.2.10\resolver-backup-$(Get-Date -Format yyyyMMdd-HHmmss)"


New-Item `
-Type Directory `
-Force `
-Path $Backup | Out-Null


Write-Host "[PASS] Backup directory created"



# --------------------------------------------------
# LOCATE RESOLVER
# --------------------------------------------------

$Resolver=
"lib\intelligence\orchestration\intelligence.module.resolver.ts"



if(Test-Path $Resolver){

Copy-Item `
$Resolver `
"$Backup\intelligence.module.resolver.ts" `
-Force


Write-Host "[PASS] Resolver backup created"

}
else{

Write-Host "[INFO] Resolver not found - integration foundation only"

}




# --------------------------------------------------
# CREATE RESOLVER CONTRACT
# --------------------------------------------------

$ResolverTypes=
"lib\intelligence\orchestration\intelligence.resolver.types.ts"


@'

export interface IntelligenceResolutionResult {

 success:boolean;

 moduleId:string;

 module?:unknown;

 error?:string;

}


'@ |
Out-File `
$ResolverTypes `
-Encoding utf8



Write-Host "[PASS] Resolver contract created"



# --------------------------------------------------
# CREATE REGISTRY BRIDGE
# --------------------------------------------------

$Bridge=
"lib\intelligence\orchestration\intelligence.registry.bridge.ts"



@'

import {
 intelligenceRegistry
}
from "../registry";


import type {
 IntelligenceResolutionResult
}
from "./intelligence.resolver.types";



export function resolveIntelligenceModule(
 moduleId:string
):IntelligenceResolutionResult {


 const module =
 intelligenceRegistry.get(moduleId);



 if(!module){

   return {

    success:false,

    moduleId,

    error:
    "INTELLIGENCE_MODULE_NOT_FOUND"

   };

 }



 return {

   success:true,

   moduleId,

   module

 };


}



'@ |
Out-File `
$Bridge `
-Encoding utf8



Write-Host "[PASS] Registry bridge created"



# --------------------------------------------------
# EXPORT UPDATE
# --------------------------------------------------

$Index=
"lib\intelligence\orchestration\index.ts"



if(Test-Path $Index){

Add-Content `
$Index `
"`nexport * from './intelligence.registry.bridge';"

Write-Host "[PASS] Orchestration export updated"

}
else{


@'

export *
from "./intelligence.registry.bridge";

'@ |
Out-File `
$Index `
-Encoding utf8


Write-Host "[PASS] Orchestration index created"

}



# --------------------------------------------------
# DOCUMENTATION
# --------------------------------------------------

@"

# MELKISM Intelligence Resolver Integration

Phase:
05.2.10.C


Purpose:

Connect Intelligence Resolver
to Central Intelligence Registry.


Architecture:

Resolver
    |
    v
Registry Bridge
    |
    v
Intelligence Registry
    |
    v
Module Contract


Status:

ACTIVE FOUNDATION


"@ |
Out-File `
"docs\MELKISM-INTELLIGENCE-RESOLVER-INTEGRATION-v1.0.0.md" `
-Encoding utf8



Write-Host "[PASS] Documentation created"



# --------------------------------------------------
# VALIDATION
# --------------------------------------------------

Write-Host ""
Write-Host "Running TypeScript validation..."

npx tsc --noEmit



Write-Host ""
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host " PHASE 05.2.10.C COMPLETE" -ForegroundColor Green
Write-Host "==================================================" -ForegroundColor Cyan


Write-Host ""
Write-Host "Next Phase:"
Write-Host "PHASE 05.2.10.D Intelligence Runtime Registration"

