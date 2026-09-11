$ErrorActionPreference="Stop"

$Root="C:\Projects\melkism"

$Target="$Root\MELKISM-v6.39.2-SOURCE-RECONSTRUCTION-AUDIT.ps1"

Write-Host ""
Write-Host "============================================================"
Write-Host "MELKISM v6.39.2 AUDIT BUILDER"
Write-Host "============================================================"

if(!(Test-Path $Root)){
    throw "Project root not found"
}

$Script=@'
$ErrorActionPreference="Stop"

$Root="C:\Projects\melkism"

$Report="$Root\reconstruction-audit-v6.39.2"

if(Test-Path $Report){
    Remove-Item $Report -Recurse -Force
}

New-Item $Report -ItemType Directory | Out-Null


function Save-Json($Path,$Data){

    $Data |
    ConvertTo-Json -Depth 8 |
    Out-File $Path -Encoding utf8

}


Write-Host ""
Write-Host "============================================================"
Write-Host "MELKISM v6.39.2 SOURCE RECONSTRUCTION AUDIT"
Write-Host "============================================================"


Write-Host ""
Write-Host "[1] Repository validation"


Push-Location $Root

$GitRoot=(git rev-parse --show-toplevel)

if($GitRoot -replace "/","\" -ne $Root){

    throw "Git root mismatch"

}

$Head=(git rev-parse HEAD)

Pop-Location


Write-Host "Git root PASS"
Write-Host "HEAD: $Head"



Write-Host ""
Write-Host "[2] Creating audit snapshot"


$Snapshot="$env:TEMP\MELKISM-v6.39.2-audit-$((Get-Date).ToString('yyyyMMdd-HHmmss'))"

robocopy `
$Root `
$Snapshot `
/E `
/XD `
node_modules `
.next `
.git `
releases `
/NFL `
/NDL `
/NJH `
/NJS `
| Out-Null


Write-Host "Snapshot:"
Write-Host $Snapshot



Write-Host ""
Write-Host "[3] Scanning zero byte source files"


$SourceFolders=@(
"app",
"components",
"lib",
"prisma",
"styles"
)


$ZeroFiles=@()


foreach($folder in $SourceFolders){

    $Path=Join-Path $Root $folder

    if(Test-Path $Path){

        $items=Get-ChildItem `
        $Path `
        -Recurse `
        -File `
        -ErrorAction SilentlyContinue


        foreach($file in $items){

            if($file.Length -eq 0){

                $ZeroFiles += $file

            }

        }

    }

}



Write-Host "Zero byte source files:"
Write-Host $ZeroFiles.Count



Write-Host ""
Write-Host "[4] Searching possible recovery candidates"


$Recovered=@()
$Unresolved=@()


foreach($zero in $ZeroFiles){

    $relative=$zero.FullName.Replace(
        "$Root\",
        ""
    )


    $name=$zero.Name


    $candidates=@()


    $search=Get-ChildItem `
    $Root `
    -Recurse `
    -File `
    -ErrorAction SilentlyContinue |
    Where-Object {

        $_.Name -eq $name `
        -and $_.Length -gt 0 `
        -and $_.FullName -notlike "*node_modules*" `
        -and $_.FullName -notlike "*\.next*" `
        -and $_.FullName -notlike "*.git*"

    }



    if(@($search).Count -gt 0){

        $best=@($search) |
        Sort-Object Length -Descending |
        Select-Object -First 1


        $Recovered += [PSCustomObject]@{

            Missing=$relative
            Candidate=$best.FullName
            Size=$best.Length

        }

    }
    else{

        $Unresolved += [PSCustomObject]@{

            Missing=$relative

        }

    }


}



Write-Host ""
Write-Host "[5] Saving reports"


Save-Json `
"$Report\recovered.json" `
$Recovered


Save-Json `
"$Report\unresolved.json" `
$Unresolved


Save-Json `
"$Report\summary.json" `
([PSCustomObject]@{

    Version="6.39.2"

    ZeroByteFiles=$ZeroFiles.Count

    Recovered=$Recovered.Count

    Unresolved=$Unresolved.Count

    Snapshot=$Snapshot

})



Write-Host ""
Write-Host "============================================================"
Write-Host "AUDIT COMPLETED"
Write-Host "============================================================"

Write-Host ""
Write-Host "Zero byte:"
Write-Host $ZeroFiles.Count

Write-Host "Recoverable:"
Write-Host $Recovered.Count

Write-Host "Unresolved:"
Write-Host $Unresolved.Count


Write-Host ""
Write-Host "Reports:"
Write-Host $Report


Write-Host ""
Write-Host "IMPORTANT:"
Write-Host "No source file modified."
Write-Host "No GitHub change."
Write-Host "No commit."
Write-Host "No push."

'@


Set-Content `
-Path $Target `
-Value $Script `
-Encoding UTF8


Write-Host ""
Write-Host "Created:"
Write-Host $Target


Write-Host ""
Write-Host "Executing audit..."

& $Target