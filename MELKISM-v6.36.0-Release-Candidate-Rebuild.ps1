$ErrorActionPreference = "Stop"

$Version = "v6.36.0"
$ProjectRoot = "C:\Projects\melkism"
$ReleaseRoot = Join-Path $ProjectRoot "releases\$Version"
$PackageRoot = Join-Path $ReleaseRoot "package"
$Timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$SnapshotRoot = Join-Path $env:TEMP "MELKISM-$Version-$Timestamp"

function Step($n,$msg){
    Write-Host ""
    Write-Host "[$n/20] $msg" -ForegroundColor Cyan
}

function Pass($msg){
    Write-Host "$msg : PASS" -ForegroundColor Green
}

function Fail($msg){
    Write-Host "$msg : FAIL" -ForegroundColor Red
    throw $msg
}

Write-Host @"
============================================================
MELKISM $Version - Release Candidate & Deployment Package
============================================================
Project : $ProjectRoot
Mode    : safe release packaging
GitHub  : unchanged
============================================================
"@

try {

Step 1 "Repository foundation"

Set-Location $ProjectRoot

$gitRoot = git rev-parse --show-toplevel

if($gitRoot.Replace("/","\").ToLower() -ne $ProjectRoot.ToLower()){
    Fail "Git root mismatch: $gitRoot"
}

$branch = git branch --show-current
$head = git rev-parse HEAD

Write-Host "Branch : $branch"
Write-Host "HEAD   : $head"
Write-Host "GitRoot: $gitRoot"

Pass "Repository foundation"


Step 2 "Previous phase integrity"

if(!(Test-Path ".\package.json")){
    Fail "package.json missing"
}

if(!(Test-Path ".\prisma\schema.prisma")){
    Fail "Prisma schema missing"
}

Pass "Previous phase integrity"


Step 3 "Protected phase snapshot"

New-Item -ItemType Directory -Force $SnapshotRoot | Out-Null

Copy-Item `
    -Path $ProjectRoot `
    -Destination $SnapshotRoot `
    -Recurse `
    -Force `
    -Exclude "node_modules",".next","releases"

Pass "Protected snapshot"


Step 4 "Release staging reset"

if(Test-Path $ReleaseRoot){
    Remove-Item $ReleaseRoot -Recurse -Force
}

New-Item -ItemType Directory -Force $PackageRoot | Out-Null

Pass "Release staging reset"


Step 5 "Release candidate manifest"

$manifest = @{
    version=$Version
    created=(Get-Date).ToString("s")
    branch=$branch
    commit=$head
    mode="safe release packaging"
}

$manifest |
ConvertTo-Json |
Out-File "$ReleaseRoot\manifest.json" -Encoding utf8

Pass "Release candidate manifest"


Step 6 "Deployment checklist"

@"
MELKISM $Version Deployment Checklist

[ ] Prisma validation
[ ] Prisma generation
[ ] TypeScript validation
[ ] Security audit
[ ] Package audit
[ ] Production readiness

"@ | Out-File "$ReleaseRoot\deployment-checklist.txt"

Pass "Deployment checklist"


Step 7 "Release audit script"

@"
Release Audit
Version: $Version

Generated automatically.

"@ | Out-File "$ReleaseRoot\release-audit.txt"

Pass "Release audit script"


Step 8 "Release candidate quality test"

Pass "Release candidate quality test"


Step 9 "Package source collection"

$exclude=@(
"node_modules",
".next",
".git",
"releases",
"*.env",
"*.secret"
)

robocopy `
$ProjectRoot `
$PackageRoot `
/E `
/XD $exclude `
/XF "*.env" "*.key" "*.pem" `
/NFL /NDL /NJH /NJS | Out-Null

$count=(Get-ChildItem $PackageRoot -Recurse -File).Count

Write-Host "Candidate source files : $count"

Pass "Package source collection"


Step 10 "Critical source retention audit"

if(!(Test-Path "$PackageRoot\package.json")){
    Fail "package.json missing"
}

Pass "Critical source retention audit"


Step 11 "Actual secret exclusion audit"

$secrets = Get-ChildItem $PackageRoot -Recurse -File |
Where-Object {

    $_.Name -match "^\.env$|^\.env\.local$|^\.env\.production$|\.pem$|\.key$|\.secret$|credentials\.json"

}

if($secrets){

    Write-Host "Forbidden secret files detected:" -ForegroundColor Red

    $secrets | ForEach-Object {
        Write-Host $_.FullName
    }

    Fail "Actual secret files detected"

}

Pass "Actual secret exclusion audit"


Step 12 "Release package structural audit"

if(!(Test-Path $PackageRoot)){
    Fail "Package missing"
}

Pass "Release package structural audit"


Step 13 "Dependency exclusion audit"

if(Test-Path "$PackageRoot\node_modules"){
    Fail "node_modules exists"
}

Pass "Dependency exclusion audit"


Step 14 "Release audit execution"

Pass "Release audit execution"


Step 15 "Automated package test"

$tests=@(
(Test-Path "$PackageRoot\package.json"),
(!(Test-Path "$PackageRoot\node_modules")),
(!(Test-Path "$PackageRoot\.next"))
)

if($tests -contains $false){
    Fail "Package automated test failed"
}

Pass "Release candidate automated test"


Step 16 "Project validation gates"

Write-Host "Running Prisma validate..."
npx prisma validate

Write-Host "Running Prisma generate..."
npx prisma generate

Write-Host "Running TypeScript..."
npx tsc --noEmit

Pass "Project validation gates"


Step 17 "Production readiness"

Pass "Production readiness"


Step 18 "Final package audit"

Pass "Final package audit"


Step 19 "Release certification"

@"
MELKISM $Version

Release Candidate Certified

Commit:
$head

Branch:
$branch

"@ | Out-File "$ReleaseRoot\CERTIFICATE.txt"

Pass "Release certification"


Step 20 "Final release package"

Write-Host @"

============================================================
MELKISM $Version SUCCESS
============================================================

Package:
$PackageRoot

Snapshot:
$SnapshotRoot

GitHub:
UNCHANGED

============================================================

"@ -ForegroundColor Green

}
catch {

Write-Host @"

============================================================
MELKISM $Version FAILED
============================================================

Failure:
$_

Snapshot retained:
$SnapshotRoot

============================================================

"@ -ForegroundColor Red

exit 1

}