Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent $PSScriptRoot

if (-not (Test-Path -LiteralPath $ProjectRoot -PathType Container)) {
    throw "Project root not found: $ProjectRoot"
}

Set-Location -LiteralPath $ProjectRoot

Write-Host ""
Write-Host "MELKISM Security Headers Deployment Audit v6.12" -ForegroundColor Cyan
Write-Host "ProjectRoot: $ProjectRoot" -ForegroundColor DarkCyan
Write-Host ""

$configCandidates = @(
    (Join-Path $ProjectRoot "middleware.ts"),
    (Join-Path $ProjectRoot "middleware.js"),
    (Join-Path $ProjectRoot "middleware.mjs"),
    (Join-Path $ProjectRoot "middleware.cjs"),
    (Join-Path $ProjectRoot "src\middleware.ts"),
    (Join-Path $ProjectRoot "src\middleware.js"),
    (Join-Path $ProjectRoot "src\middleware.mjs"),
    (Join-Path $ProjectRoot "src\middleware.cjs"),
    (Join-Path $ProjectRoot "next.config.ts"),
    (Join-Path $ProjectRoot "next.config.js"),
    (Join-Path $ProjectRoot "next.config.mjs"),
    (Join-Path $ProjectRoot "next.config.cjs")
)

$knownHeaders = @(
    "Content-Security-Policy",
    "Referrer-Policy",
    "X-Frame-Options",
    "X-Content-Type-Options",
    "Permissions-Policy",
    "Strict-Transport-Security",
    "Cache-Control"
)

$foundConfigurations = @()
$foundHeaders = New-Object System.Collections.Generic.HashSet[string]

foreach ($candidate in $configCandidates) {
    if (-not (Test-Path -LiteralPath $candidate -PathType Leaf)) {
        continue
    }

    $foundConfigurations += $candidate

    $content = Get-Content -LiteralPath $candidate -Raw

    foreach ($headerName in $knownHeaders) {
        if ($content -match [regex]::Escape($headerName)) {
            [void]$foundHeaders.Add($headerName)
        }
    }
}

Write-Host "Global configuration files: $($foundConfigurations.Count)" -ForegroundColor Green
Write-Host "Known security headers detected: $($foundHeaders.Count)" -ForegroundColor Green

if ($foundConfigurations.Count -gt 0) {
    Write-Host ""
    Write-Host "Configuration files:" -ForegroundColor Yellow

    foreach ($configuration in $foundConfigurations) {
        Write-Host " - $configuration" -ForegroundColor Yellow
    }
}

if ($foundHeaders.Count -gt 0) {
    Write-Host ""
    Write-Host "Detected security headers:" -ForegroundColor Yellow

    foreach ($header in $foundHeaders) {
        Write-Host " - $header" -ForegroundColor Yellow
    }
}
else {
    Write-Host ""
    Write-Host "No known global security headers detected." -ForegroundColor DarkYellow
}

$existingMiddlewareCount = @(
    $foundConfigurations |
        Where-Object {
            $_ -match "(^|\\)middleware\.(ts|js|mjs|cjs)$"
        }
).Count

$existingNextConfigCount = @(
    $foundConfigurations |
        Where-Object {
            $_ -match "next\.config\.(ts|js|mjs|cjs)$"
        }
).Count

$manualReviewRequired = $false

if ($existingMiddlewareCount -gt 0) {
    $manualReviewRequired = $true
}

if ($existingNextConfigCount -gt 0) {
    $manualReviewRequired = $true
}

if ($foundHeaders.Count -gt 0) {
    $manualReviewRequired = $true
}

Write-Host ""

if ($manualReviewRequired) {
    Write-Host "GLOBAL ENFORCEMENT STATUS: REVIEW REQUIRED" -ForegroundColor Yellow
    Write-Host "Existing routing/configuration may already control response behavior." -ForegroundColor Yellow
}
else {
    Write-Host "GLOBAL ENFORCEMENT STATUS: NO CONFLICT DETECTED BY STATIC AUDIT" -ForegroundColor Green
}

$reportDirectory = Join-Path $ProjectRoot "docs\security-audit"

New-Item -Path $reportDirectory -ItemType Directory -Force | Out-Null

$reportPath = Join-Path $reportDirectory "security-headers-v6.12.txt"

$reportLines = @(
    "MELKISM v6.12 Security Headers Deployment Audit",
    "Generated: $((Get-Date).ToString("o"))",
    "ProjectRoot: $ProjectRoot",
    "",
    "Global configuration files: $($foundConfigurations.Count)",
    "Middleware files detected: $existingMiddlewareCount",
    "Next.js config files detected: $existingNextConfigCount",
    "Known security headers detected: $($foundHeaders.Count)",
    "Manual review required: $manualReviewRequired",
    "",
    "Detected configuration files:",
    ($foundConfigurations -join [Environment]::NewLine),
    "",
    "Detected security headers:",
    ($foundHeaders -join [Environment]::NewLine)
)

Set-Content -LiteralPath $reportPath -Value ($reportLines -join [Environment]::NewLine) -Encoding UTF8

Write-Host ""
Write-Host "Audit report written to:" -ForegroundColor Cyan
Write-Host $reportPath -ForegroundColor Green

Write-Host ""
Write-Host "Static deployment audit completed." -ForegroundColor Cyan
Write-Host ""
Write-Host ""
Write-Host "Security deployment audit completed successfully." -ForegroundColor Green

$global:LASTEXITCODE = 0
