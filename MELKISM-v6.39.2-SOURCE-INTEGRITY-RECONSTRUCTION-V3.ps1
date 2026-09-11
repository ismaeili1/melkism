# ============================================================
# MELKISM v6.39.2
# SOURCE INTEGRITY RECONSTRUCTION V3.1
# SAFE READ ONLY AUDIT
#
# NO SOURCE CHANGE
# NO GIT CHANGE
# NO COMMIT
# NO PUSH
#
# PowerShell 5 / 7 Compatible
# ============================================================

$ErrorActionPreference = "Stop"


# ------------------------------------------------------------
# Configuration
# ------------------------------------------------------------

$Version = "v6.39.2"

$ProjectRoot = "C:\Projects\melkism"

$TimeStamp = Get-Date -Format "yyyyMMdd-HHmmss"


$OutputRoot = Join-Path `
    $ProjectRoot `
    "reconstruction-v6.39.2-v3.1"


$SnapshotRoot = Join-Path `
    $env:TEMP `
    "MELKISM-v6.39.2-SNAPSHOT-$TimeStamp"



# ------------------------------------------------------------
# Helper functions
# ------------------------------------------------------------

function Write-Title {

    param(
        [string]$Text
    )

    Write-Host ""
    Write-Host "============================================================"
    Write-Host $Text
    Write-Host "============================================================"
}


function Write-Step {

    param(
        [string]$Text
    )

    Write-Host ""
    Write-Host "[+] $Text"
}



function Save-Json {

    param(
        $Data,
        [string]$Path
    )

    $Data |
        ConvertTo-Json -Depth 12 |
        Set-Content `
            -Path $Path `
            -Encoding UTF8
}



function Add-Unique {

    param(
        [System.Collections.ArrayList]$List,
        $Item
    )

    if($null -eq $Item){
        return
    }

    [void]$List.Add($Item)
}



# ------------------------------------------------------------
# Start
# ------------------------------------------------------------


Write-Title `
    "MELKISM v6.39.2 SOURCE INTEGRITY RECONSTRUCTION V3.1"



# ------------------------------------------------------------
# Repository validation
# ------------------------------------------------------------


Write-Step `
    "Repository validation"



if(!(Test-Path $ProjectRoot)){

    throw `
        "Project root not found: $ProjectRoot"
}


Set-Location `
    $ProjectRoot



$GitRoot = git rev-parse --show-toplevel



$NormalizedGitRoot =
    $GitRoot.Replace("\","/")



if(
    $NormalizedGitRoot `
    -ne `
    "C:/Projects/melkism"
){

    throw `
        "Git root mismatch: $NormalizedGitRoot"
}



$Head =
    git rev-parse HEAD



Write-Host "Git root PASS"

Write-Host "HEAD: $Head"



# ------------------------------------------------------------
# Snapshot
# ------------------------------------------------------------


Write-Step `
    "Creating protected snapshot"



if(Test-Path $SnapshotRoot){

    Remove-Item `
        $SnapshotRoot `
        -Recurse `
        -Force
}



New-Item `
    -ItemType Directory `
    -Path $SnapshotRoot |
    Out-Null



Write-Host "Snapshot:"
Write-Host $SnapshotRoot



# ------------------------------------------------------------
# Output directory
# ------------------------------------------------------------


Write-Step `
    "Preparing report directory"



if(Test-Path $OutputRoot){

    Remove-Item `
        $OutputRoot `
        -Recurse `
        -Force
}



New-Item `
    -ItemType Directory `
    -Path $OutputRoot |
    Out-Null



# ------------------------------------------------------------
# Source configuration
# ------------------------------------------------------------


$SourceFolders = @(
    "app",
    "components",
    "lib",
    "prisma",
    "styles"
)



$IgnorePatterns = @(
    "\\.next\\",
    "\\node_modules\\",
    "\\.git\\",
    "\\releases\\",
    "\\coverage\\",
    "\\dist\\",
    "\\build\\"
)



$AllowedExtensions = @(
    ".ts",
    ".tsx",
    ".js",
    ".jsx",
    ".mjs",
    ".css",
    ".scss",
    ".prisma"
)



# ------------------------------------------------------------
# Build source index
# ------------------------------------------------------------


Write-Step `
    "Building source index"



$SourceIndex =
    New-Object System.Collections.ArrayList



foreach($Folder in $SourceFolders){


    $FolderPath =
        Join-Path `
            $ProjectRoot `
            $Folder



    if(!(Test-Path $FolderPath)){

        continue
    }



    $Files =
        Get-ChildItem `
            -Path $FolderPath `
            -Recurse `
            -File `
            -ErrorAction SilentlyContinue



    foreach($File in $Files){


        $Skip = $false



foreach($Pattern in $IgnorePatterns){

    $CurrentPath = $File.FullName.ToLower()

    $CurrentPattern = $Pattern.ToLower()


    if($CurrentPath.Contains($CurrentPattern)){

        $Skip = $true

        break
    }
}



        if($Skip){

            continue
        }



        if(
            $AllowedExtensions `
            -contains `
            $File.Extension.ToLower()
        ){

            Add-Unique `
                $SourceIndex `
                $File
        }
    }
}



Write-Host "Indexed files:"
Write-Host $SourceIndex.Count

# ============================================================
# PART 2/3
# MELKISM-v6.39.2-SOURCE-INTEGRITY-RECONSTRUCTION-V3.1.ps1
# ============================================================


# ------------------------------------------------------------
# Zero byte detection
# ------------------------------------------------------------


Write-Step `
    "Detecting zero byte source files"



$ZeroByteFiles =
    New-Object System.Collections.ArrayList



foreach($File in $SourceIndex){


    if($File.Length -eq 0){


        Add-Unique `
            $ZeroByteFiles `
            $File
    }
}



Write-Host "Zero byte files:"
Write-Host $ZeroByteFiles.Count



Save-Json `
    (
        $ZeroByteFiles |
        ForEach-Object {

            [PSCustomObject]@{

                Path =
                    $_.FullName.Replace(
                        $ProjectRoot + "\",
                        ""
                    )

                FullPath =
                    $_.FullName

                Extension =
                    $_.Extension

            }

        }
    ) `
    (
        Join-Path `
            $OutputRoot `
            "zero-byte-files.json"
    )





# ------------------------------------------------------------
# Candidate scan
# ------------------------------------------------------------


Write-Step `
    "Scanning recovery candidates"



$CandidateIndex =
    New-Object System.Collections.ArrayList



$CandidateRoots = @(
    $env:TEMP,
    $ProjectRoot
)



foreach($Root in $CandidateRoots){


    if(!(Test-Path $Root)){

        continue
    }



    $Files =
        Get-ChildItem `
            -Path $Root `
            -Recurse `
            -File `
            -ErrorAction SilentlyContinue



    foreach($File in $Files){


        if($File.Length -eq 0){

            continue
        }



        $Path =
            $File.FullName



        if(
            $Path `
            -match "\\node_modules\\"
        ){

            continue
        }



        if(
            $Path `
            -match "\\.next\\"
        ){

            continue
        }



        if(
            $Path `
            -match "\\.git\\"
        ){

            continue
        }



        if(
            $AllowedExtensions `
            -contains `
            $File.Extension.ToLower()
        ){

            Add-Unique `
                $CandidateIndex `
                $File
        }
    }
}



Write-Host "Candidate files:"
Write-Host $CandidateIndex.Count




# ------------------------------------------------------------
# Create filename map
# ------------------------------------------------------------


Write-Step `
    "Creating filename lookup"



$FilenameMap = @{}





foreach($File in $CandidateIndex){


    $Key =
        $File.Name.ToLower()



    if(!$FilenameMap.ContainsKey($Key)){


        $FilenameMap[$Key] =
            New-Object System.Collections.ArrayList

    }



    [void]$FilenameMap[$Key].Add($File)

}




# ------------------------------------------------------------
# Recovery matching
# ------------------------------------------------------------


Write-Step `
    "Matching recovery candidates"



$Recovered =
    New-Object System.Collections.ArrayList



$Unresolved =
    New-Object System.Collections.ArrayList





foreach($Missing in $ZeroByteFiles){


    $Key =
        $Missing.Name.ToLower()



    $Matches =
        @()



    if(
        $FilenameMap.ContainsKey($Key)
    ){

        $Matches =
            @(
                $FilenameMap[$Key]
            )
    }




    if($Matches.Count -eq 1){


        Add-Unique `
            $Recovered `
            (
                [PSCustomObject]@{

                    Source =
                        $Missing.FullName

                    Candidate =
                        $Matches[0].FullName

                    Confidence =
                        "HIGH"

                }
            )


        continue
    }





    if($Matches.Count -gt 1){


        Add-Unique `
            $Recovered `
            (
                [PSCustomObject]@{

                    Source =
                        $Missing.FullName

                    Candidate =
                        $Matches[0].FullName

                    Confidence =
                        "MULTIPLE"

                }
            )


        continue
    }





    Add-Unique `
        $Unresolved `
        (
            [PSCustomObject]@{

                Source =
                    $Missing.FullName

                Reason =
                    "NO_MATCH"

            }
        )
}





Write-Host "Recovered:"
Write-Host $Recovered.Count


Write-Host "Unresolved:"
Write-Host $Unresolved.Count





Save-Json `
    $Recovered `
    (
        Join-Path `
            $OutputRoot `
            "recovered.json"
    )



Save-Json `
    $Unresolved `
    (
        Join-Path `
            $OutputRoot `
            "unresolved.json"
    )





# ------------------------------------------------------------
# Dependency impact scan
# ------------------------------------------------------------


Write-Step `
    "Dependency impact scan"



$DependencyImpact =
    New-Object System.Collections.ArrayList



foreach($Item in $Unresolved){


    $Name =
        Split-Path `
            $Item.Source `
            -Leaf



    foreach($SourceFile in $SourceIndex){


        try{


            $Found =
                Select-String `
                    -Path $SourceFile.FullName `
                    -Pattern $Name `
                    -SimpleMatch `
                    -ErrorAction SilentlyContinue



            if($null -ne $Found){


                Add-Unique `
                    $DependencyImpact `
                    (
                        [PSCustomObject]@{

                            Missing =
                                $Item.Source

                            ReferencedBy =
                                $SourceFile.FullName

                        }
                    )
            }


        }
        catch{

            continue
        }

    }
}



Write-Host "Dependency references:"
Write-Host $DependencyImpact.Count



Save-Json `
    $DependencyImpact `
    (
        Join-Path `
            $OutputRoot `
            "dependency-impact.json"
    )

    # ============================================================
# PART 3/3
# MELKISM-v6.39.2-SOURCE-INTEGRITY-RECONSTRUCTION-V3.1.ps1
# ============================================================


# ------------------------------------------------------------
# Summary report
# ------------------------------------------------------------


Write-Step `
    "Generating summary report"



$Summary =
    [PSCustomObject]@{


        Version =
            $Version


        Timestamp =
            $TimeStamp


        ProjectRoot =
            $ProjectRoot


        GitHead =
            $Head


        Mode =
            "READ_ONLY_AUDIT"


        SourceModified =
            $false


        GitChanged =
            $false


        CommitCreated =
            $false


        PushPerformed =
            $false


        IndexedFiles =
            $SourceIndex.Count


        ZeroByteFiles =
            $ZeroByteFiles.Count


        CandidateFiles =
            $CandidateIndex.Count


        RecoveredCandidates =
            $Recovered.Count


        UnresolvedFiles =
            $Unresolved.Count


        DependencyReferences =
            $DependencyImpact.Count
    }




Save-Json `
    $Summary `
    (
        Join-Path `
            $OutputRoot `
            "summary.json"
    )





# ------------------------------------------------------------
# Markdown report
# ------------------------------------------------------------


Write-Step `
    "Generating reconstruction plan"



$PlanFile =
    Join-Path `
        $OutputRoot `
        "reconstruction-plan.md"



$Lines =
    New-Object System.Collections.ArrayList



[void]$Lines.Add(
    "# MELKISM v6.39.2 Source Integrity Reconstruction V3.1"
)

[void]$Lines.Add("")

[void]$Lines.Add(
    "## Audit Mode"
)

[void]$Lines.Add("")

[void]$Lines.Add(
    "READ ONLY"
)

[void]$Lines.Add(
    "No source files modified."
)

[void]$Lines.Add(
    "No Git changes."
)

[void]$Lines.Add(
    "No commit."
)

[void]$Lines.Add(
    "No push."
)

[void]$Lines.Add("")


[void]$Lines.Add(
    "## Repository"
)

[void]$Lines.Add("")

[void]$Lines.Add(
    "Root: " + $ProjectRoot
)

[void]$Lines.Add(
    "HEAD: " + $Head
)

[void]$Lines.Add("")


[void]$Lines.Add(
    "## Statistics"
)

[void]$Lines.Add("")

[void]$Lines.Add(
    "Indexed files: " +
    $SourceIndex.Count
)

[void]$Lines.Add(
    "Zero byte files: " +
    $ZeroByteFiles.Count
)

[void]$Lines.Add(
    "Candidate files: " +
    $CandidateIndex.Count
)

[void]$Lines.Add(
    "Recovered candidates: " +
    $Recovered.Count
)

[void]$Lines.Add(
    "Unresolved files: " +
    $Unresolved.Count
)

[void]$Lines.Add(
    "Dependency references: " +
    $DependencyImpact.Count
)

[void]$Lines.Add("")


[void]$Lines.Add(
    "## Next Safe Action"
)

[void]$Lines.Add("")

[void]$Lines.Add(
    "Review recovered.json and unresolved.json before restoration."
)

[void]$Lines.Add(
    "Do not perform bulk reconstruction automatically."
)



$Lines |
    Set-Content `
        -Path $PlanFile `
        -Encoding UTF8





# ------------------------------------------------------------
# Final validation
# ------------------------------------------------------------


Write-Step `
    "Final report validation"



$RequiredReports =
    @(
        "summary.json",
        "zero-byte-files.json",
        "recovered.json",
        "unresolved.json",
        "dependency-impact.json",
        "reconstruction-plan.md"
    )



foreach($Report in $RequiredReports){


    $Path =
        Join-Path `
            $OutputRoot `
            $Report



    if(!(Test-Path $Path)){


        throw `
            "Missing report: $Report"

    }
}




# ------------------------------------------------------------
# Completion
# ------------------------------------------------------------


Write-Host ""

Write-Host "============================================================"

Write-Host `
    "MELKISM v6.39.2 SOURCE INTEGRITY RECONSTRUCTION V3.1 COMPLETED"

Write-Host "============================================================"



Write-Host ""

Write-Host "Report Root:"
Write-Host $OutputRoot


Write-Host ""

Write-Host "Indexed files:"
Write-Host $SourceIndex.Count


Write-Host ""

Write-Host "Zero byte files:"
Write-Host $ZeroByteFiles.Count


Write-Host ""

Write-Host "Recovered candidates:"
Write-Host $Recovered.Count


Write-Host ""

Write-Host "Unresolved:"
Write-Host $Unresolved.Count


Write-Host ""

Write-Host "Dependency references:"
Write-Host $DependencyImpact.Count


Write-Host ""

Write-Host "GitHub unchanged."
Write-Host "No commit created."
Write-Host "No push performed."


Write-Host ""

Write-Host `
    "NEXT ACTION: Review reconstruction-plan.md"