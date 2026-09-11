$ErrorActionPreference = "Stop"

$Root = "C:\Projects\melkism"

$ReportRoot = Join-Path $Root "recovery-v6.39.2"

$ExcludedNames = @(
    "node_modules",
    ".next",
    ".git",
    "releases",
    "backup",
    "temp",
    ".turbo",
    ".cache"
)

$SourceRoots = @(
    "app",
    "components",
    "lib",
    "prisma",
    "styles",
    "scripts"
)


function Write-Step($Text){
    Write-Host ""
    Write-Host "============================================================"
    Write-Host $Text
    Write-Host "============================================================"
}


function Save-Json($Path,$Object){

    $Object |
    ConvertTo-Json -Depth 10 |
    Out-File $Path -Encoding utf8

}


function Is-Excluded($Path){

    foreach($item in $ExcludedNames){

        if($Path -like "*\$item\*"){
            return $true
        }

    }

    return $false
}


Write-Step "MELKISM v6.39.2 SOURCE RECONSTRUCTION AUDIT V2"


if(!(Test-Path $Root)){
    throw "Project root missing"
}


Write-Step "Repository validation"


Push-Location $Root

$GitRoot = git rev-parse --show-toplevel

$Head = git rev-parse HEAD

Pop-Location


if(($GitRoot -replace "/","\") -ne $Root){

    throw "Git root mismatch"

}


Write-Host "Git root PASS"
Write-Host "HEAD: $Head"



Write-Step "Creating report directory"


if(Test-Path $ReportRoot){

    Remove-Item $ReportRoot -Recurse -Force

}


New-Item `
$ReportRoot `
-ItemType Directory |
Out-Null



Write-Step "Building single file index"


$Index = @()


foreach($folder in $SourceRoots){

    $Path = Join-Path $Root $folder


    if(Test-Path $Path){

        $Files = Get-ChildItem `
        $Path `
        -File `
        -Recurse `
        -ErrorAction SilentlyContinue


        foreach($file in $Files){

            if(!(Is-Excluded $file.FullName)){


                $Index += [PSCustomObject]@{

                    FullName = $file.FullName

                    Name = $file.Name

                    Length = $file.Length

                    Extension = $file.Extension

                }

            }

        }

    }

}


Write-Host "Indexed files:"
Write-Host $Index.Count



Write-Step "Detecting zero byte files"


$ZeroFiles =
@(
    $Index |
    Where-Object {
        $_.Length -eq 0
    }
)


Write-Host "Zero byte:"
Write-Host $ZeroFiles.Count



Save-Json `
"$ReportRoot\zero-byte-source.json" `
$ZeroFiles



Write-Step "Building candidate map"


$NameMap=@{}


foreach($file in $Index){

    if($file.Length -gt 0){

        if(!$NameMap.ContainsKey($file.Name)){

            $NameMap[$file.Name]=@()

        }


        $NameMap[$file.Name]+=$file

    }

}



$Recoverable=@()

$Unresolved=@()

$Duplicate=@()



foreach($zero in $ZeroFiles){


    if($NameMap.ContainsKey($zero.Name)){


        $Candidates =
        @(
            $NameMap[$zero.Name]
        )


        if($Candidates.Count -eq 1){


            $Recoverable += [PSCustomObject]@{

                Missing=$zero.FullName

                Candidate=$Candidates[0].FullName

                Size=$Candidates[0].Length

            }


        }
        else{


            $Duplicate += [PSCustomObject]@{

                Missing=$zero.FullName

                Candidates=$Candidates.FullName

            }


        }


    }
    else{


        $Unresolved += [PSCustomObject]@{

            Missing=$zero.FullName

        }


    }


}



Write-Step "Dependency impact scan"


$Critical=@()


foreach($zero in $ZeroFiles){


    $Relative =
    $zero.FullName.Replace(
        "$Root\",
        ""
    )


    $Matches =
    Select-String `
    -Path (
        Get-ChildItem `
        $Root `
        -File `
        -Recurse `
        -ErrorAction SilentlyContinue |
        Where-Object {
            !(Is-Excluded $_.FullName)
        }
    ).FullName `
    -Pattern ([regex]::Escape($zero.Name)) `
    -SimpleMatch `
    -ErrorAction SilentlyContinue



    if($Matches){

        $Critical += [PSCustomObject]@{

            File=$Relative

            References=$Matches.Count

        }

    }

}



Write-Step "Saving reports"


Save-Json `
"$ReportRoot\recoverable-candidates.json" `
$Recoverable


Save-Json `
"$ReportRoot\duplicate-map.json" `
$Duplicate


Save-Json `
"$ReportRoot\unresolved-critical.json" `
$Unresolved


Save-Json `
"$ReportRoot\dependency-impact.json" `
$Critical



Save-Json `
"$ReportRoot\reconstruction-plan.json" `
([PSCustomObject]@{

    Version="6.39.2"

    ZeroByte=$ZeroFiles.Count

    Recoverable=$Recoverable.Count

    Duplicate=$Duplicate.Count

    Unresolved=$Unresolved.Count

    Generated=(Get-Date)

})



Save-Json `
"$ReportRoot\summary.json" `
([PSCustomObject]@{

    Version="6.39.2"

    Status="AUDIT_ONLY"

    GitHub="UNCHANGED"

    Commit="NOT_CREATED"

    Push="NOT_PERFORMED"

})



Write-Step "COMPLETED"


Write-Host ""
Write-Host "Zero byte:"
Write-Host $ZeroFiles.Count

Write-Host "Recoverable:"
Write-Host $Recoverable.Count

Write-Host "Duplicate:"
Write-Host $Duplicate.Count

Write-Host "Unresolved:"
Write-Host $Unresolved.Count


Write-Host ""
Write-Host "Reports:"
Write-Host $ReportRoot


Write-Host ""
Write-Host "NO SOURCE FILE MODIFIED"
Write-Host "NO GITHUB CHANGE"
Write-Host "NO COMMIT"
Write-Host "NO PUSH"