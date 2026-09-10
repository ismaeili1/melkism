$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$ProjectRoot = Split-Path -Parent $PSScriptRoot

if (-not (Test-Path -LiteralPath $ProjectRoot -PathType Container)) {
    throw "MELKISM project directory not found: $ProjectRoot"
}

Set-Location -LiteralPath $ProjectRoot

Write-Host ""
Write-Host "MELKISM v6.4 Deployment Verification" -ForegroundColor Cyan
Write-Host ""

if (-not (Test-Path -LiteralPath "package.json" -PathType Leaf)) {
    throw "package.json was not found."
}

$packageJson = Get-Content `
    -LiteralPath "package.json" `
    -Raw `
    -Encoding UTF8 |
    ConvertFrom-Json

if ($null -eq $packageJson.scripts) {
    throw "package.json scripts section is missing."
}

if ($null -eq $packageJson.scripts.build) {
    throw "Build script is missing."
}

if ($null -eq $packageJson.scripts.lint) {
    throw "Lint script is missing."
}

Write-Host "package.json : PASS" -ForegroundColor Green

$node = node --version

if ($LASTEXITCODE -ne 0) {
    throw "Node.js is unavailable."
}

$npm = npm --version

if ($LASTEXITCODE -ne 0) {
    throw "npm is unavailable."
}

Write-Host "Node.js : $node" -ForegroundColor DarkGray
Write-Host "npm     : $npm" -ForegroundColor DarkGray

Write-Host ""
Write-Host "Checking release infrastructure..." -ForegroundColor Yellow

$required = @(
    "lib\production-release",
    "lib\production-operations",
    "lib\production-reliability",
    "lib\release-governance",
    "lib\deployment-verification",
    "app\api\system-health\route.ts",
    "app\api\production-readiness\route.ts",
    "app\api\reliability-status\route.ts",
    "app\api\release-status\route.ts",
    "app\api\deployment-readiness\route.ts",
    "app\[locale]\production-status\page.tsx",
    "app\[locale]\operations-status\page.tsx",
    "app\[locale]\reliability-status\page.tsx",
    "app\[locale]\release-status\page.tsx",
    "app\[locale]\deployment-status\page.tsx",
    "docs\PRODUCTION-RELEASE-v6.0.md",
    "docs\PRODUCTION-OPERATIONS-v6.1.md",
    "docs\PRODUCTION-RELIABILITY-v6.2.md",
    "docs\RELEASE-GOVERNANCE-v6.3.md",
    "docs\DEPLOYMENT-VERIFICATION-v6.4.md"
)

foreach ($path in $required) {
    if (-not (Test-Path -LiteralPath $path)) {
        throw "Required release infrastructure is missing: $path"
    }
}

Write-Host "Release infrastructure : PASS" -ForegroundColor Green

Write-Host ""
Write-Host "Checking Prisma boundary..." -ForegroundColor Yellow

if (Test-Path -LiteralPath "prisma\schema.prisma" -PathType Leaf) {
    Write-Host "prisma\schema.prisma : PRESENT" -ForegroundColor Green
}
else {
    Write-Host "prisma\schema.prisma : NOT FOUND" -ForegroundColor DarkYellow
}

Write-Host "No database migration is executed by this verification." -ForegroundColor Green

Write-Host ""
Write-Host "Checking secret safety..." -ForegroundColor Yellow

$protectedFiles = @(
    "lib\deployment-verification\deployment-verification.service.ts",
    "app\api\deployment-readiness\route.ts",
    "components\deployment-verification\DeploymentVerificationStatus.tsx"
)

foreach ($file in $protectedFiles) {
    if (-not (Test-Path -LiteralPath $file -PathType Leaf)) {
        throw "Protected verification file is missing: $file"
    }

    $text = Get-Content `
        -LiteralPath $file `
        -Raw `
        -Encoding UTF8

    if ($text.Contains("console.log")) {
        throw "Unexpected console.log found in: $file"
    }

    if ($text.Contains("console.error")) {
        throw "Unexpected console.error found in: $file"
    }
}

Write-Host "Secret-safety source inspection : PASS" -ForegroundColor Green

Write-Host ""
Write-Host "Running TypeScript..." -ForegroundColor Yellow

npx tsc --noEmit

if ($LASTEXITCODE -ne 0) {
    throw "TypeScript validation failed."
}

Write-Host "TypeScript : PASS" -ForegroundColor Green

Write-Host ""
Write-Host "Running ESLint..." -ForegroundColor Yellow

npm run lint

if ($LASTEXITCODE -ne 0) {
    throw "ESLint validation failed."
}

Write-Host "ESLint : PASS" -ForegroundColor Green

Write-Host ""
Write-Host "Running production build..." -ForegroundColor Yellow

npm run build

if ($LASTEXITCODE -ne 0) {
    throw "Production build failed."
}

Write-Host "Production build : PASS" -ForegroundColor Green

Write-Host ""
Write-Host "MELKISM v6.4 Deployment Verification : PASS" -ForegroundColor Green
Write-Host ""
