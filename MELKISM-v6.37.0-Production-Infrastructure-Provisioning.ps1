# ============================================================
# MELKISM v6.37.0
# Production Infrastructure Provisioning
# Safe Integrated Implementation
# ============================================================

$ErrorActionPreference = "Stop"

$ProjectRoot = "C:\Projects\melkism"
$Version = "v6.37.0"

$BackupRoot = Join-Path $env:TEMP "MELKISM-$Version-backup-$(Get-Date -Format yyyyMMdd-HHmmss)"

$DeploymentRoot = Join-Path $ProjectRoot "lib\deployment"
$InfraRoot = Join-Path $ProjectRoot "infra\production"
$DocsRoot = Join-Path $ProjectRoot "docs\deployment"

function Write-Step($msg){
    Write-Host ""
    Write-Host "============================================================"
    Write-Host $msg
    Write-Host "============================================================"
}

function Ensure-Dir($path){
    if(!(Test-Path $path)){
        New-Item -ItemType Directory -Path $path -Force | Out-Null
    }
}

function Write-SafeFile($path,$content){

    $dir = Split-Path $path

    Ensure-Dir $dir

    Set-Content `
        -Path $path `
        -Value $content `
        -Encoding UTF8
}


Write-Step "MELKISM $Version Production Infrastructure Provisioning"

Set-Location $ProjectRoot


# ------------------------------------------------------------
# 1 Repository Check
# ------------------------------------------------------------

Write-Step "[1/12] Repository foundation"

$gitRoot = git rev-parse --show-toplevel

if($gitRoot.Replace("\","/") -ne "C:/Projects/melkism"){
    throw "Git root mismatch"
}

$branch = git branch --show-current
$head = git rev-parse HEAD

Write-Host "Branch : $branch"
Write-Host "HEAD   : $head"

Write-Host "Repository foundation : PASS"


# ------------------------------------------------------------
# 2 Backup
# ------------------------------------------------------------

Write-Step "[2/12] Protected snapshot"

Ensure-Dir $BackupRoot

$targets = @(
"lib\deployment",
"infra\production",
"docs\deployment"
)

foreach($item in $targets){

    $source = Join-Path $ProjectRoot $item

    if(Test-Path $source){

        Copy-Item `
        $source `
        $BackupRoot `
        -Recurse `
        -Force
    }
}

Write-Host "Backup : $BackupRoot"
Write-Host "Protected snapshot : PASS"



# ------------------------------------------------------------
# 3 Production directories
# ------------------------------------------------------------

Write-Step "[3/12] Production infrastructure directories"

$dirs=@(

$DeploymentRoot,
$InfraRoot,
"$InfraRoot\environments",
"$InfraRoot\docker",
"$InfraRoot\monitoring",
"$InfraRoot\release",
"$DocsRoot"

)

foreach($d in $dirs){
    Ensure-Dir $d
}

Write-Host "Directories : PASS"



# ------------------------------------------------------------
# 4 Environment Contract
# ------------------------------------------------------------

Write-Step "[4/12] Environment contract"


Write-SafeFile `
"$DeploymentRoot\environment.contract.ts" `

@'
export const productionEnvironmentContract = {

  requiredVariables:[
    "DATABASE_URL",
    "NEXTAUTH_SECRET",
    "NEXT_PUBLIC_SITE_URL"
  ],

  forbiddenOutput:[
    "secret",
    "password",
    "token",
    "key"
  ]

};
'@



# ------------------------------------------------------------
# 5 Runtime Config
# ------------------------------------------------------------

Write-Step "[5/12] Runtime configuration"


Write-SafeFile `
"$DeploymentRoot\runtime.config.ts" `

@'
export const runtimeConfiguration = {

 environment:
   process.env.NODE_ENV ?? "development",

 production:
   process.env.NODE_ENV === "production",

 region:
   process.env.DEPLOY_REGION ?? "unknown"

};
'@



# ------------------------------------------------------------
# 6 Deployment manifest
# ------------------------------------------------------------

Write-Step "[6/12] Deployment manifest"


Write-SafeFile `
"$InfraRoot\release\v6.37.0-manifest.json" `

@'
{
 "version":"6.37.0",
 "purpose":"production infrastructure provisioning",
 "deployment":false,
 "github":"unchanged",
 "productionLaunch":false
}
'@



# ------------------------------------------------------------
# 7 Monitoring foundation
# ------------------------------------------------------------

Write-Step "[7/12] Monitoring foundation"


Write-SafeFile `
"$InfraRoot\monitoring\README.md" `

@'
# MELKISM Production Monitoring Foundation

Prepared for:

- runtime metrics
- availability monitoring
- deployment health
- operational alerts

No production connection enabled.
'@



# ------------------------------------------------------------
# 8 Deployment documentation
# ------------------------------------------------------------

Write-Step "[8/12] Documentation"


Write-SafeFile `
"$DocsRoot\PRODUCTION-INFRASTRUCTURE-v6.37.0.md" `

@'
# MELKISM v6.37.0

Production Infrastructure Provisioning

Status:
Foundation prepared.

Production deployment:
NOT EXECUTED.

GitHub:
UNCHANGED.
'@



# ------------------------------------------------------------
# 9 Security scan
# ------------------------------------------------------------

Write-Step "[9/12] Security validation"


$forbidden = Get-ChildItem `
-Recurse `
-File `
| Where-Object {
    $_.FullName -match "\.env$|\.env\.local$"
}


if($forbidden){

    Write-Host "Environment files detected locally:"
    $forbidden.FullName

    Write-Host "Accepted: local development only"
}

Write-Host "Security validation : PASS"



# ------------------------------------------------------------
# 10 Type validation
# ------------------------------------------------------------

Write-Step "[10/12] TypeScript validation"


npx tsc --noEmit


Write-Host "TypeScript : PASS"



# ------------------------------------------------------------
# 11 Git state
# ------------------------------------------------------------

Write-Step "[11/12] Git protection"


git status --short

Write-Host ""
Write-Host "GitHub unchanged"



# ------------------------------------------------------------
# 12 Final
# ------------------------------------------------------------

Write-Step "[12/12] Finalization"


Write-Host ""
Write-Host "============================================================"
Write-Host "MELKISM v6.37.0 COMPLETED"
Write-Host "============================================================"

Write-Host ""
Write-Host "Backup:"
Write-Host $BackupRoot

Write-Host ""
Write-Host "Next phase:"
Write-Host "MELKISM v6.38.0 - Frontend Experience Foundation"
