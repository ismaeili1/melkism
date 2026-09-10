Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$ProjectRoot = "C:\Projects\melkism"

if (-not (Test-Path -LiteralPath $ProjectRoot -PathType Container)) {
    throw "Project root not found: $ProjectRoot"
}

Set-Location -LiteralPath $ProjectRoot

$NextConfigPath = Join-Path $ProjectRoot "next.config.ts"
$ReportPath = Join-Path $ProjectRoot "docs\security-audit\security-header-http-smoke-v6.16.txt"

if (-not (Test-Path -LiteralPath $NextConfigPath -PathType Leaf)) {
    throw "next.config.ts not found."
}

$nextConfig = Get-Content -LiteralPath $NextConfigPath -Raw

$expectedGlobal = [ordered]@{
    "Content-Security-Policy" = "default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none';"
    "Referrer-Policy" = "strict-origin-when-cross-origin"
    "X-Frame-Options" = "DENY"
    "X-Content-Type-Options" = "nosniff"
    "Permissions-Policy" = "camera=(), microphone=(), geolocation=(), payment=(), usb=()"
}

$expectedApi = "no-store, max-age=0"

function Assert-TextContains {
    param(
        [string]$Text,
        [string]$Needle,
        [string]$Message
    )

    if ($Text.IndexOf($Needle, [System.StringComparison]::Ordinal) -lt 0) {
        throw $Message
    }
}

function Assert-TextNotContains {
    param(
        [string]$Text,
        [string]$Needle,
        [string]$Message
    )

    if ($Text.IndexOf($Needle, [System.StringComparison]::Ordinal) -ge 0) {
        throw $Message
    }
}

foreach ($entry in $expectedGlobal.GetEnumerator()) {
    $key = $entry.Key
    $value = $entry.Value

    Assert-TextContains `
        -Text $nextConfig `
        -Needle $key `
        -Message "next.config.ts does not contain required header: $key"

    Assert-TextContains `
        -Text $nextConfig `
        -Needle $value `
        -Message "next.config.ts does not contain expected value for: $key"
}

Assert-TextContains `
    -Text $nextConfig `
    -Needle "source: `"/api/:path*`"" `
    -Message "API-specific security header scope is missing."

Assert-TextContains `
    -Text $nextConfig `
    -Needle $expectedApi `
    -Message "API Cache-Control value is missing."

Assert-TextNotContains `
    -Text $nextConfig `
    -Needle "Strict-Transport-Security" `
    -Message "HSTS is unexpectedly configured."

Assert-TextNotContains `
    -Text $nextConfig `
    -Needle "max-age=31536000" `
    -Message "Unexpected HSTS policy detected."

$port = $null
for ($attempt = 0; $attempt -lt 20; $attempt++) {
    $candidate = Get-Random -Minimum 31000 -Maximum 31999
    $listener = $null

    try {
        $listener = [System.Net.Sockets.TcpListener]::new(
            [System.Net.IPAddress]::Loopback,
            $candidate
        )

        $listener.Start()
        $listener.Stop()

        $port = $candidate
        break
    }
    catch {
        if ($listener) {
            try {
                $listener.Stop()
            }
            catch {
            }
        }
    }
}

if ($null -eq $port) {
    throw "Unable to allocate a free local port."
}

$logDirectory = Join-Path $ProjectRoot "docs\security-audit\runtime"
New-Item -Path $logDirectory -ItemType Directory -Force | Out-Null

$stdoutPath = Join-Path $logDirectory "v6.16-server.stdout.log"
$stderrPath = Join-Path $logDirectory "v6.16-server.stderr.log"

if (Test-Path -LiteralPath $stdoutPath) {
    Remove-Item -LiteralPath $stdoutPath -Force
}

if (Test-Path -LiteralPath $stderrPath) {
    Remove-Item -LiteralPath $stderrPath -Force
}

$process = $null
$overallPass = $false
$reportLines = New-Object System.Collections.Generic.List[string]

$reportLines.Add("MELKISM v6.16 - Production HTTP Security Header Smoke Verification")
$reportLines.Add("Generated: $((Get-Date).ToString("s"))")
$reportLines.Add("ProjectRoot: $ProjectRoot")
$reportLines.Add("Port: $port")
$reportLines.Add("")

try {
    Write-Host ""
    Write-Host "Starting production server on port $port..." -ForegroundColor Yellow

    $process = Start-Process `
        -FilePath "npm.cmd" `
        -ArgumentList @("run", "start", "--", "-p", $port.ToString()) `
        -WorkingDirectory $ProjectRoot `
        -RedirectStandardOutput $stdoutPath `
        -RedirectStandardError $stderrPath `
        -PassThru

    $baseUrl = "http://127.0.0.1:$port"
    $localeUrl = "$baseUrl/fa"
    $apiUrl = "$baseUrl/api/security-header-http-smoke"

    $deadline = (Get-Date).AddSeconds(90)
    $started = $false

    while ((Get-Date) -lt $deadline) {
        if ($process.HasExited) {
            $stdout = if (Test-Path -LiteralPath $stdoutPath) {
                Get-Content -LiteralPath $stdoutPath -Raw
            }
            else {
                ""
            }

            $stderr = if (Test-Path -LiteralPath $stderrPath) {
                Get-Content -LiteralPath $stderrPath -Raw
            }
            else {
                ""
            }

            throw "Production server exited before becoming ready.`nSTDOUT:`n$stdout`nSTDERR:`n$stderr"
        }

        try {
            $probe = Invoke-WebRequest `
                -Uri $apiUrl `
                -UseBasicParsing `
                -TimeoutSec 5

            if ($probe.StatusCode -ge 200 -and $probe.StatusCode -lt 500) {
                $started = $true
                break
            }
        }
        catch {
        }

        Start-Sleep -Seconds 1
    }

    if (-not $started) {
        throw "Production server did not become ready within 90 seconds."
    }

    Write-Host "Production server is READY." -ForegroundColor Green

    $localeResponse = Invoke-WebRequest `
        -Uri $localeUrl `
        -UseBasicParsing `
        -TimeoutSec 15

    $apiResponse = Invoke-WebRequest `
        -Uri $apiUrl `
        -UseBasicParsing `
        -TimeoutSec 15

    if ($localeResponse.StatusCode -lt 200 -or $localeResponse.StatusCode -ge 400) {
        throw "Locale route returned HTTP $($localeResponse.StatusCode)."
    }

    if ($apiResponse.StatusCode -lt 200 -or $apiResponse.StatusCode -ge 400) {
        throw "API route returned HTTP $($apiResponse.StatusCode)."
    }

    $reportLines.Add("Locale route: $localeUrl")
    $reportLines.Add("Locale status: $($localeResponse.StatusCode)")
    $reportLines.Add("API route: $apiUrl")
    $reportLines.Add("API status: $($apiResponse.StatusCode)")
    $reportLines.Add("")

    foreach ($entry in $expectedGlobal.GetEnumerator()) {
        $headerName = $entry.Key
        $expectedValue = $entry.Value

        $actualLocale = $localeResponse.Headers[$headerName]

        if ($null -eq $actualLocale) {
            throw "Missing global header on locale response: $headerName"
        }

        $actualLocaleValue = [string]$actualLocale

        if ($actualLocaleValue -ne $expectedValue) {
            throw "Locale header mismatch for $headerName. Expected '$expectedValue' but received '$actualLocaleValue'."
        }

        $actualApi = $apiResponse.Headers[$headerName]

        if ($null -eq $actualApi) {
            throw "Missing global header on API response: $headerName"
        }

        $actualApiValue = [string]$actualApi

        if ($actualApiValue -ne $expectedValue) {
            throw "API header mismatch for $headerName. Expected '$expectedValue' but received '$actualApiValue'."
        }

        $reportLines.Add("$headerName")
        $reportLines.Add("  Locale: PASS")
        $reportLines.Add("  API: PASS")
    }

    $apiCacheControl = $apiResponse.Headers["Cache-Control"]

    if ($null -eq $apiCacheControl) {
        throw "API Cache-Control header is missing."
    }

    if ([string]$apiCacheControl -ne $expectedApi) {
        throw "API Cache-Control mismatch. Expected '$expectedApi' but received '$apiCacheControl'."
    }

    $localeCacheControl = $localeResponse.Headers["Cache-Control"]

    if ($null -ne $localeCacheControl) {
        $localeCacheControlValue = [string]$localeCacheControl

        if ($localeCacheControlValue -eq $expectedApi) {
            throw "Cache-Control unexpectedly applied to the locale route."
        }
    }

    $localeHsts = $localeResponse.Headers["Strict-Transport-Security"]
    $apiHsts = $apiResponse.Headers["Strict-Transport-Security"]

    if ($null -ne $localeHsts) {
        throw "HSTS unexpectedly present on locale route."
    }

    if ($null -ne $apiHsts) {
        throw "HSTS unexpectedly present on API route."
    }

    $reportLines.Add("")
    $reportLines.Add("Cache-Control API scope: PASS")
    $reportLines.Add("HSTS disabled policy: PASS")
    $reportLines.Add("")
    $reportLines.Add("OVERALL STATUS: PASS")

    Set-Content -LiteralPath $ReportPath -Value $reportLines -Encoding UTF8

    $overallPass = $true

    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "MELKISM v6.16 HTTP SMOKE TEST: PASS" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
}
catch {
    $reportLines.Add("")
    $reportLines.Add("OVERALL STATUS: FAIL")
    $reportLines.Add("ERROR:")
    $reportLines.Add($_.Exception.Message)

    Set-Content -LiteralPath $ReportPath -Value $reportLines -Encoding UTF8

    Write-Host ""
    Write-Host "MELKISM v6.16 HTTP SMOKE TEST: FAIL" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
}
finally {
    if ($process) {
        try {
            if (-not $process.HasExited) {
                Stop-Process -Id $process.Id -Force
                $process.WaitForExit()
            }
        }
        catch {
        }
    }
}

if (-not $overallPass) {
    throw "MELKISM v6.16 runtime smoke verification failed. See $ReportPath"
}

$global:LASTEXITCODE = 0
