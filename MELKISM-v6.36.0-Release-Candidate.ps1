$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

$ProjectRoot = 'C:\Projects\melkism'
$Version = 'v6.36.0'

$ReleaseRoot = Join-Path $ProjectRoot 'releases\v6.36.0'
$PackageRoot = Join-Path $ReleaseRoot 'package'
$AuditRoot = Join-Path $ReleaseRoot 'audit'
$ArchivePath = Join-Path $ReleaseRoot 'MELKISM-v6.36.0-release.zip'

$Stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$SnapshotRoot = Join-Path $env:TEMP ("MELKISM-v6.36.0-" + $Stamp)

$CurrentStage = 'Initialization'

function Step {
    param(
        [int]$Number,
        [int]$Total,
        [string]$Title
    )

    $script:CurrentStage = "[{0}/{1}] {2}" -f $Number, $Total, $Title

    Write-Host ''
    Write-Host $script:CurrentStage -ForegroundColor Cyan
}

function Pass {
    param([string]$Message)

    Write-Host ($Message + ' : PASS') -ForegroundColor Green
}

function Assert-Ok {
    param(
        [bool]$Condition,
        [string]$Message
    )

    if (-not $Condition) {
        throw $Message
    }
}

function Normalize-Path {
    param([string]$Path)

    $full = [IO.Path]::GetFullPath($Path)

    return ($full.TrimEnd('\','/') -replace '/','\').ToLowerInvariant()
}

function Get-RelativePath {
    param([string]$FullPath)

    $full = [IO.Path]::GetFullPath($FullPath)
    $root = [IO.Path]::GetFullPath($ProjectRoot)

    $fullForCompare = $full.TrimEnd('\','/')
    $rootForCompare = $root.TrimEnd('\','/')

    if (
        $fullForCompare.Equals(
            $rootForCompare,
            [StringComparison]::OrdinalIgnoreCase
        )
    ) {
        return ''
    }

    $prefix = $rootForCompare + '\'

    if (
        -not $fullForCompare.StartsWith(
            $prefix,
            [StringComparison]::OrdinalIgnoreCase
        )
    ) {
        throw "Path is outside project root: $FullPath"
    }

    # IMPORTANT:
    # Return the original filesystem casing.
    return $fullForCompare.Substring($prefix.Length)
}

function Test-ForbiddenDirectory {
    param([string]$Name)

    $items = @(
        '.git',
        'node_modules',
        '.next',
        '.turbo',
        '.cache',
        '.parcel-cache',
        '.vercel',
        'coverage',
        '.nyc_output',
        'test-results',
        'tmp',
        'temp',
        'releases',
        'backups',
        'backup',
        'melkist-backups'
    )

    return ($items -contains $Name.ToLowerInvariant())
}

function Test-ForbiddenReleaseFile {
    param([string]$RelativePath)

    $normalized = ($RelativePath -replace '\\','/').TrimStart('/')
    $lower = $normalized.ToLowerInvariant()
    $name = [IO.Path]::GetFileName($lower)

    if ($name -eq '.env.example') {
        return $false
    }

    if ($name -eq '.env') {
        return $true
    }

    if ($name.StartsWith('.env.')) {
        return $true
    }

    if ($name -eq 'tsconfig.tsbuildinfo') {
        return $true
    }

    if ($name -match '\.backup-\d{8}-\d{6}$') {
        return $true
    }

    if ($name -match '\.bak$') {
        return $true
    }

    $forbiddenExtensions = @(
        '.pem',
        '.key',
        '.p12',
        '.pfx',
        '.jks'
    )

    $extension = [IO.Path]::GetExtension($name)

    if ($forbiddenExtensions -contains $extension) {
        return $true
    }

    $forbiddenNames = @(
        'credentials.json',
        'service-account.json',
        'service-account-key.json',
        'id_rsa',
        'id_rsa.pem',
        'secrets.config',
        'secrets.config.js',
        'secrets.config.cjs',
        'secrets.config.mjs',
        'secrets.config.ts'
    )

    if ($forbiddenNames -contains $name) {
        return $true
    }

    return $false
}

function Write-Utf8 {
    param(
        [string]$Path,
        [string]$Content
    )

    $parent = Split-Path -Parent $Path

    if (-not (Test-Path -LiteralPath $parent)) {
        New-Item -ItemType Directory -Path $parent -Force | Out-Null
    }

    Set-Content `
        -LiteralPath $Path `
        -Value $Content `
        -Encoding UTF8
}

function Copy-ProjectFile {
    param(
        [System.IO.FileInfo]$File
    )

    $relative = Get-RelativePath $File.FullName
    $destination = Join-Path $PackageRoot $relative
    $parent = Split-Path -Parent $destination

    if (-not (Test-Path -LiteralPath $parent)) {
        New-Item -ItemType Directory -Path $parent -Force | Out-Null
    }

    Copy-Item `
        -LiteralPath $File.FullName `
        -Destination $destination `
        -Force
}

Write-Host ''
Write-Host 'MELKISM v6.36.0 - Release Candidate & Deployment Package' -ForegroundColor White
Write-Host '============================================================'
Write-Host ('Project : ' + $ProjectRoot)
Write-Host 'Branch  : main'
Write-Host 'Mode    : safe release packaging'
Write-Host 'GitHub  : unchanged'
Write-Host '============================================================'

try {

    Step 1 20 'Repository foundation'

    $gitRootRaw = (git rev-parse --show-toplevel 2>$null).Trim()

    Assert-Ok `
        (-not [string]::IsNullOrWhiteSpace($gitRootRaw)) `
        'Unable to determine Git repository root.'

    Assert-Ok `
        ((Normalize-Path $gitRootRaw) -eq (Normalize-Path $ProjectRoot)) `
        ("Git root mismatch. Git=$gitRootRaw Project=$ProjectRoot")

    $branch = (git branch --show-current 2>$null).Trim()

    Assert-Ok `
        ($branch -eq 'main') `
        ("Expected branch main. Found: $branch")

    $head = (git rev-parse HEAD 2>$null).Trim()

    Assert-Ok `
        ($head -match '^[0-9a-f]{40}$') `
        'Invalid Git HEAD SHA.'

    Write-Host ('Branch : ' + $branch)
    Write-Host ('HEAD   : ' + $head)
    Write-Host ('GitRoot: ' + $gitRootRaw)

    Pass 'Repository foundation'


    Step 2 20 'Previous phase integrity'

    $required = @(
        'app',
        'lib',
        'prisma',
        'package.json',
        'package-lock.json',
        'next.config.ts',
        'prisma.config.ts',
        'prisma\schema.prisma',
        'components\api-ecosystem\ApiRegistryPanel.tsx'
    )

    foreach ($item in $required) {

        $path = Join-Path $ProjectRoot $item

        Assert-Ok `
            (Test-Path -LiteralPath $path) `
            ("Required path missing: $item")
    }

    Pass 'Previous phase integrity'


    Step 3 20 'Protected phase snapshot'

    New-Item `
        -ItemType Directory `
        -Path $SnapshotRoot `
        -Force | Out-Null

    if (Test-Path -LiteralPath $ReleaseRoot) {

        $snapshotTarget = Join-Path `
            $SnapshotRoot `
            'releases\v6.36.0'

        $snapshotParent = Split-Path -Parent $snapshotTarget

        New-Item `
            -ItemType Directory `
            -Path $snapshotParent `
            -Force | Out-Null

        Copy-Item `
            -LiteralPath $ReleaseRoot `
            -Destination $snapshotTarget `
            -Recurse `
            -Force
    }

    Write-Host ('Snapshot : ' + $SnapshotRoot)

    Pass 'Protected snapshot'


    Step 4 20 'Release staging reset'

    if (Test-Path -LiteralPath $ReleaseRoot) {

        Remove-Item `
            -LiteralPath $ReleaseRoot `
            -Recurse `
            -Force
    }

    New-Item `
        -ItemType Directory `
        -Path $PackageRoot `
        -Force | Out-Null

    New-Item `
        -ItemType Directory `
        -Path $AuditRoot `
        -Force | Out-Null

    Assert-Ok `
        (Test-Path -LiteralPath $PackageRoot) `
        'Unable to create release package root.'

    Pass 'Release staging reset'


    Step 5 20 'Release candidate manifest'

    $manifestLines = @(
        'MELKISM v6.36.0',
        'Release Candidate & Deployment Package',
        '',
        'Project:',
        'C:\Projects\melkism',
        '',
        'Repository:',
        'ismaeili1/melkism',
        '',
        'Branch:',
        $branch,
        '',
        'Commit:',
        $head,
        '',
        'Domain:',
        'https://melkism.com',
        '',
        'Packaging:',
        'Safe source packaging',
        '',
        'GitHub:',
        'UNCHANGED',
        '',
        'Production deployment:',
        'NOT PERFORMED'
    )

    Write-Utf8 `
        -Path (Join-Path $ReleaseRoot 'RELEASE-MANIFEST-v6.36.0.txt') `
        -Content ($manifestLines -join [Environment]::NewLine)

    Pass 'Release candidate manifest'


    Step 6 20 'Deployment checklist'

    $checklistLines = @(
        'MELKISM v6.36.0 — Deployment Checklist',
        '',
        '[ ] Secure production environment variables.',
        '[ ] Keep real secrets outside the release package.',
        '[ ] Install dependencies from package-lock.json.',
        '[ ] Generate Prisma Client.',
        '[ ] Execute production migrations in the dedicated database phase.',
        '[ ] Build production application.',
        '[ ] Start production application.',
        '[ ] Verify health endpoint.',
        '[ ] Verify readiness endpoint.',
        '[ ] Verify fa/en/ar/tr localized routes.',
        '[ ] Verify authentication.',
        '[ ] Verify authorization.',
        '[ ] Verify security headers.',
        '[ ] Verify sitemap and robots.',
        '[ ] Verify logging and monitoring.',
        '[ ] Run smoke tests.',
        '',
        'v6.36.0 performs release packaging only.'
    )

    Write-Utf8 `
        -Path (Join-Path $ReleaseRoot 'DEPLOYMENT-CHECKLIST-v6.36.0.txt') `
        -Content ($checklistLines -join [Environment]::NewLine)

    Pass 'Deployment checklist'


    Step 7 20 'Release audit script'

    $auditCode = @(
        'import fs from "node:fs";',
        'import path from "node:path";',
        '',
        'const root = path.resolve(process.argv[2] || process.cwd());',
        'const violations = [];',
        'const forbiddenNames = new Set([',
        '  ".env",',
        '  "credentials.json",',
        '  "service-account.json",',
        '  "service-account-key.json",',
        '  "id_rsa",',
        '  "id_rsa.pem",',
        '  "secrets.config.js",',
        '  "secrets.config.cjs",',
        '  "secrets.config.mjs",',
        '  "secrets.config.ts",',
        ']);',
        'const forbiddenExtensions = new Set([".pem", ".key", ".p12", ".pfx", ".jks"]);',
        'const forbiddenDirs = new Set([".git", "node_modules", ".next", ".turbo", ".cache", ".vercel", "coverage", "test-results", "tmp", "temp", "releases", "backups", "backup", "melkist-backups"]);',
        '',
        'function walk(dir) {',
        '  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {',
        '    const full = path.join(dir, entry.name);',
        '    if (entry.isDirectory()) {',
        '      if (!forbiddenDirs.has(entry.name.toLowerCase())) walk(full);',
        '      continue;',
        '    }',
        '    const relative = path.relative(root, full).split(path.sep).join("/");',
        '    const name = path.basename(relative).toLowerCase();',
        '    if (name === ".env.example") continue;',
        '    if (name.startsWith(".env.") || name === ".env") violations.push(relative);',
        '    if (forbiddenNames.has(name)) violations.push(relative);',
        '    if (forbiddenExtensions.has(path.extname(name))) violations.push(relative);',
        '    if (/\.backup-\d{8}-\d{6}$/i.test(name)) violations.push(relative);',
        '    if (/\.bak$/i.test(name)) violations.push(relative);',
        '    if (name === "tsconfig.tsbuildinfo") violations.push(relative);',
        '  }',
        '}',
        '',
        'walk(root);',
        'const unique = [...new Set(violations)];',
        'console.log(`Release package root: ${root}`);',
        'console.log(`Forbidden path violations: ${unique.length}`);',
        'if (unique.length > 0) {',
        '  for (const item of unique.slice(0, 100)) console.log(item);',
        '  process.exitCode = 1;',
        '} else {',
        '  console.log("Release audit: PASS");',
        '}'
    )

    Write-Utf8 `
        -Path (Join-Path $ReleaseRoot 'release-audit.mjs') `
        -Content ($auditCode -join [Environment]::NewLine)

    Pass 'Release audit script'


    Step 8 20 'Release candidate quality test'

    $qualityCode = @(
        'import assert from "node:assert/strict";',
        'import fs from "node:fs";',
        'import path from "node:path";',
        'import test from "node:test";',
        '',
        'const root = path.resolve(process.cwd());',
        'const pkg = path.join(root, "releases", "v6.36.0", "package");',
        '',
        'test("package exists", () => {',
        '  assert.equal(fs.existsSync(pkg), true);',
        '});',
        '',
        'test("node_modules excluded", () => {',
        '  assert.equal(fs.existsSync(path.join(pkg, "node_modules")), false);',
        '});',
        '',
        'test(".next excluded", () => {',
        '  assert.equal(fs.existsSync(path.join(pkg, ".next")), false);',
        '});',
        '',
        'test("nested releases excluded", () => {',
        '  assert.equal(fs.existsSync(path.join(pkg, "releases")), false);',
        '});',
        '',
        'test("ApiRegistryPanel canonical case retained", () => {',
        '  const dir = path.join(pkg, "components", "api-ecosystem");',
        '  const entries = fs.readdirSync(dir);',
        '  assert.equal(entries.includes("ApiRegistryPanel.tsx"), true);',
        '  assert.equal(entries.includes("apiregistrypanel.tsx"), false);',
        '});',
        '',
        'test("canonical files retained", () => {',
        '  for (const file of ["package.json", "package-lock.json", "next.config.ts", "prisma.config.ts", "prisma/schema.prisma"]) {',
        '    assert.equal(fs.existsSync(path.join(pkg, file)), true, file);',
        '  }',
        '});'
    )

    Write-Utf8 `
        -Path (Join-Path $ReleaseRoot 'release-candidate.test.mjs') `
        -Content ($qualityCode -join [Environment]::NewLine)

    Pass 'Release candidate quality test'


    Step 9 20 'Package source collection'

    $allFiles = @(
        Get-ChildItem `
            -LiteralPath $ProjectRoot `
            -Recurse `
            -File `
            -Force
    )

    $sourceFiles = New-Object System.Collections.Generic.List[System.IO.FileInfo]

    foreach ($file in $allFiles) {

        $relative = Get-RelativePath $file.FullName

        if (-not (Test-ForbiddenReleaseFile $relative)) {

            $segments = (
                ($relative -replace '\\','/').ToLowerInvariant()
            ).Split('/')

            $blocked = $false

            foreach ($segment in $segments) {

                if (Test-ForbiddenDirectory $segment) {
                    $blocked = $true
                    break
                }
            }

            if (-not $blocked) {
                $sourceFiles.Add($file)
            }
        }
    }

    Assert-Ok `
        ($sourceFiles.Count -gt 0) `
        'No source files discovered for release package.'

    foreach ($file in $sourceFiles) {
        Copy-ProjectFile -File $file
    }

    Write-Host ('Candidate source files : ' + $sourceFiles.Count)

    Assert-Ok `
        (-not (Test-Path -LiteralPath (Join-Path $PackageRoot 'node_modules'))) `
        'node_modules entered package.'

    Assert-Ok `
        (-not (Test-Path -LiteralPath (Join-Path $PackageRoot '.next'))) `
        '.next entered package.'

    Assert-Ok `
        (-not (Test-Path -LiteralPath (Join-Path $PackageRoot 'releases'))) `
        'Nested releases entered package.'

    Pass 'Package source collection'


    Step 10 20 'Critical source retention audit'

    $criticalFiles = @(
        'components\api-ecosystem\ApiRegistryPanel.tsx',
        'lib\auth\password.ts',
        'lib\auth\password.service.ts',
        'lib\auth\password.types.ts',
        'lib\authentication\password.service.ts',
        'components\auth\ForgotPassword.tsx',
        'components\auth\PasswordRecovery.tsx',
        'components\auth\ResetPassword.tsx'
    )

    $retained = @(
        $criticalFiles |
        Where-Object {
            Test-Path -LiteralPath (Join-Path $PackageRoot $_)
        }
    )

    Write-Host ('Retained critical/auth files : ' + $retained.Count)

    Assert-Ok `
        (Test-Path -LiteralPath (Join-Path $PackageRoot 'components\api-ecosystem\ApiRegistryPanel.tsx')) `
        'ApiRegistryPanel.tsx missing from package.'

    Pass 'Critical source retention audit'


    Step 11 20 'Actual secret exclusion audit'

    $packageFiles = @(
        Get-ChildItem `
            -LiteralPath $PackageRoot `
            -Recurse `
            -File `
            -Force
    )

    $violations = New-Object System.Collections.Generic.List[string]

    foreach ($file in $packageFiles) {

        $relative = $file.FullName.Substring(
            $PackageRoot.Length
        ).TrimStart('\','/')

        if (Test-ForbiddenReleaseFile $relative) {
            $violations.Add($file.FullName)
        }
    }

    if ($violations.Count -gt 0) {

        Write-Host ''
        Write-Host 'Forbidden files detected:' -ForegroundColor Red

        foreach ($item in $violations | Select-Object -First 100) {
            Write-Host $item -ForegroundColor Red
        }

        throw (
            'Actual secret exclusion audit failed. Violations: ' +
            $violations.Count
        )
    }

    Write-Host ('Packaged files checked : ' + $packageFiles.Count)

    Pass 'Actual secret exclusion audit'


    Step 12 20 'Release package structural audit'

    $requiredPackageFiles = @(
        'package.json',
        'package-lock.json',
        'next.config.ts',
        'prisma.config.ts',
        'prisma\schema.prisma',
        'app\page.tsx',
        'app\[locale]\layout.tsx',
        'app\robots.ts',
        'app\sitemap.ts',
        'lib\i18n\locale.config.ts',
        'lib\security\security.constants.ts',
        'lib\observability\logger.ts',
        'lib\performance\cache.memory.ts',
        'lib\search\search.service.ts',
        'lib\seo\seo.metadata.ts',
        'lib\accessibility\accessibility.rules.ts',
        'lib\prelaunch\prelaunch.checks.ts',
        'lib\deployment\deployment.readiness.ts'
    )

    $missing = @(
        $requiredPackageFiles |
        Where-Object {
            -not (
                Test-Path -LiteralPath (
                    Join-Path $PackageRoot $_
                )
            )
        }
    )

    if ($missing.Count -gt 0) {

        Write-Host ''
        Write-Host 'Missing package files:' -ForegroundColor Red

        foreach ($item in $missing) {
            Write-Host $item -ForegroundColor Red
        }

        throw 'Release package structural audit failed.'
    }

    Pass 'Release package structural audit'


    Step 13 20 'Dependency and generated-artifact exclusion audit'

    foreach ($directory in @(
        'node_modules',
        '.next',
        '.git',
        '.turbo',
        '.cache',
        '.vercel',
        'coverage',
        'test-results',
        'tmp',
        'temp',
        'releases',
        'backups',
        'backup',
        'melkist-backups'
    )) {

        $bad = @(
            Get-ChildItem `
                -LiteralPath $PackageRoot `
                -Recurse `
                -Directory `
                -Force |
            Where-Object {
                $_.Name -ieq $directory
            }
        )

        Assert-Ok `
            ($bad.Count -eq 0) `
            ("Forbidden directory found in package: $directory")
    }

    Pass 'Dependency and generated-artifact exclusion audit'


    Step 14 20 'Release audit execution'

    node `
        (Join-Path $ReleaseRoot 'release-audit.mjs') `
        $PackageRoot

    if ($LASTEXITCODE -ne 0) {
        throw (
            'Release audit failed with exit code ' +
            $LASTEXITCODE
        )
    }

    Pass 'Release audit execution'


    Step 15 20 'Release candidate automated test'

    node `
        (Join-Path $ReleaseRoot 'release-candidate.test.mjs')

    if ($LASTEXITCODE -ne 0) {
        throw (
            'Release candidate test failed with exit code ' +
            $LASTEXITCODE
        )
    }

    Pass 'Release candidate automated test'


    Step 16 20 'Project validation gates'

    Write-Host ''
    Write-Host 'Running Prisma validate...'

    npx prisma validate

    if ($LASTEXITCODE -ne 0) {
        throw 'Prisma validate failed.'
    }

    Write-Host ''
    Write-Host 'Running Prisma generate...'

    npx prisma generate

    if ($LASTEXITCODE -ne 0) {
        throw 'Prisma generate failed.'
    }

    Write-Host ''
    Write-Host 'Running TypeScript...'

    npx tsc --noEmit

    if ($LASTEXITCODE -ne 0) {
        throw 'TypeScript validation failed.'
    }

    Write-Host ''
    Write-Host 'Running tests...'

    npm test

    if ($LASTEXITCODE -ne 0) {
        throw 'Automated tests failed.'
    }

    Write-Host ''
    Write-Host 'Running lint...'

    npm run lint

    if ($LASTEXITCODE -ne 0) {
        throw 'Lint failed.'
    }

    Pass 'Project validation gates'


    Step 17 20 'Production readiness and prelaunch gates'

    npm run production:readiness

    if ($LASTEXITCODE -ne 0) {
        throw 'Production readiness failed.'
    }

    npm run prelaunch:audit

    if ($LASTEXITCODE -ne 0) {
        throw 'Prelaunch audit failed.'
    }

    Pass 'Production readiness and prelaunch gates'


    Step 18 20 'Production build verification'

    npm run build

    if ($LASTEXITCODE -ne 0) {
        throw 'Production build failed.'
    }

    Pass 'Production build verification'


    Step 19 20 'Release archive and final archive audit'

    if (Test-Path -LiteralPath $ArchivePath) {

        Remove-Item `
            -LiteralPath $ArchivePath `
            -Force
    }

    Compress-Archive `
        -Path (Join-Path $PackageRoot '*') `
        -DestinationPath $ArchivePath `
        -CompressionLevel Optimal `
        -Force

    Assert-Ok `
        (Test-Path -LiteralPath $ArchivePath) `
        'Release ZIP was not created.'

    $archiveHash = (
        Get-FileHash `
            -LiteralPath $ArchivePath `
            -Algorithm SHA256
    ).Hash

    $archiveSize = (
        Get-Item -LiteralPath $ArchivePath
    ).Length

    $extractRoot = Join-Path `
        $AuditRoot `
        'archive-extract'

    if (Test-Path -LiteralPath $extractRoot) {

        Remove-Item `
            -LiteralPath $extractRoot `
            -Recurse `
            -Force
    }

    New-Item `
        -ItemType Directory `
        -Path $extractRoot `
        -Force | Out-Null

    Expand-Archive `
        -LiteralPath $ArchivePath `
        -DestinationPath $extractRoot `
        -Force

    $archiveFiles = @(
        Get-ChildItem `
            -LiteralPath $extractRoot `
            -Recurse `
            -File `
            -Force
    )

    $archiveViolations =
        New-Object System.Collections.Generic.List[string]

    foreach ($file in $archiveFiles) {

        $relative = $file.FullName.Substring(
            $extractRoot.Length
        ).TrimStart('\','/')

        if (Test-ForbiddenReleaseFile $relative) {
            $archiveViolations.Add($file.FullName)
        }
    }

    if ($archiveViolations.Count -gt 0) {

        Write-Host ''
        Write-Host `
            'Forbidden files detected after archive extraction:' `
            -ForegroundColor Red

        foreach (
            $item in
            $archiveViolations |
            Select-Object -First 100
        ) {
            Write-Host $item -ForegroundColor Red
        }

        throw 'Final archive audit failed.'
    }

    $reportLines = @(
        'MELKISM v6.36.0 — Release Package Report',
        '',
        'Project:',
        $ProjectRoot,
        '',
        'Branch:',
        $branch,
        '',
        'Commit:',
        $head,
        '',
        'Candidate source files:',
        [string]$sourceFiles.Count,
        '',
        'Packaged files:',
        [string]$packageFiles.Count,
        '',
        'Extracted archive files:',
        [string]$archiveFiles.Count,
        '',
        'Archive size:',
        [string]$archiveSize,
        '',
        'SHA-256:',
        $archiveHash,
        '',
        'Secret/path violations:',
        '0',
        '',
        'node_modules:',
        'NOT INCLUDED',
        '',
        '.next:',
        'NOT INCLUDED',
        '',
        '.env.local:',
        'NOT INCLUDED',
        '',
        '.env.example:',
        'ALLOWED',
        '',
        'ApiRegistryPanel canonical case:',
        'RETAINED',
        '',
        'GitHub:',
        'UNCHANGED',
        '',
        'Production deployment:',
        'NOT PERFORMED'
    )

    Write-Utf8 `
        -Path (
            Join-Path `
                $ReleaseRoot `
                'RELEASE-PACKAGE-REPORT-v6.36.0.txt'
        ) `
        -Content ($reportLines -join [Environment]::NewLine)

    Write-Host ('Archive : ' + $ArchivePath)
    Write-Host ('Size    : ' + $archiveSize + ' bytes')
    Write-Host ('SHA256  : ' + $archiveHash)

    Pass 'Release archive and final archive audit'


    Step 20 20 'Release candidate finalization'

    $finalLines = @(
        'MELKISM v6.36.0 — RELEASE CANDIDATE READY',
        '',
        'Status:',
        'READY',
        '',
        'Branch:',
        $branch,
        '',
        'Commit:',
        $head,
        '',
        'Archive:',
        $ArchivePath,
        '',
        'SHA-256:',
        $archiveHash,
        '',
        'Packaging:',
        'PASS',
        '',
        'Secret exclusion:',
        'PASS',
        '',
        'Dependency exclusion:',
        'PASS',
        '',
        'Critical source retention:',
        'PASS',
        '',
        'Release audit:',
        'PASS',
        '',
        'Prisma:',
        'PASS',
        '',
        'TypeScript:',
        'PASS',
        '',
        'Tests:',
        'PASS',
        '',
        'Lint:',
        'PASS',
        '',
        'Production readiness:',
        'PASS',
        '',
        'Prelaunch:',
        'PASS',
        '',
        'Production build:',
        'PASS',
        '',
        'Archive audit:',
        'PASS',
        '',
        'GitHub:',
        'UNCHANGED',
        '',
        'Production deployment:',
        'NOT PERFORMED',
        '',
        'Next official phase:',
        'MELKISM v6.37.0 — Production Infrastructure Provisioning'
    )

    Write-Utf8 `
        -Path (
            Join-Path `
                $ReleaseRoot `
                'RELEASE-CANDIDATE-READY-v6.36.0.txt'
        ) `
        -Content ($finalLines -join [Environment]::NewLine)

    Write-Host ''
    Write-Host '============================================================' -ForegroundColor Green
    Write-Host 'MELKISM v6.36.0 RELEASE CANDIDATE READY' -ForegroundColor Green
    Write-Host '============================================================' -ForegroundColor Green
    Write-Host ('Release Root : ' + $ReleaseRoot)
    Write-Host ('Package Root : ' + $PackageRoot)
    Write-Host ('Archive      : ' + $ArchivePath)
    Write-Host ('SHA-256      : ' + $archiveHash)
    Write-Host ''
    Write-Host 'GitHub unchanged.'
    Write-Host 'Production deployment has NOT been performed.'
    Write-Host ''
    Write-Host 'Next phase: MELKISM v6.37.0 — Production Infrastructure Provisioning'

}
catch {

    Write-Host ''
    Write-Host '============================================================' -ForegroundColor Red
    Write-Host 'MELKISM v6.36.0 FAILED' -ForegroundColor Red
    Write-Host '============================================================' -ForegroundColor Red
    Write-Host ('Stage  : ' + $CurrentStage) -ForegroundColor Red
    Write-Host ('Failure: ' + $_.Exception.Message) -ForegroundColor Red
    Write-Host ''
    Write-Host 'Rolling back only v6.36.0 release target...' -ForegroundColor Yellow

    if (Test-Path -LiteralPath $ReleaseRoot) {

        Remove-Item `
            -LiteralPath $ReleaseRoot `
            -Recurse `
            -Force `
            -ErrorAction SilentlyContinue
    }

    Write-Host 'Rollback completed.' -ForegroundColor Yellow
    Write-Host ('Snapshot retained: ' + $SnapshotRoot) -ForegroundColor Yellow

    throw
}


