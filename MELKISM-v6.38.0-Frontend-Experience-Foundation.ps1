$ErrorActionPreference = "Stop"

$Version = "v6.38.0"
$ProjectRoot = "C:\Projects\melkism"
$BackupRoot = "$env:TEMP\MELKISM-$Version-backup-$(Get-Date -Format yyyyMMdd-HHmmss)"

function Write-Step($Message) {
    Write-Host ""
    Write-Host "============================================================"
    Write-Host $Message
    Write-Host "============================================================"
}

function Ensure-Directory($Path) {
    if (!(Test-Path $Path)) {
        New-Item -ItemType Directory -Path $Path -Force | Out-Null
    }
}

function Write-SafeFile($Path,$Content) {

    $Directory = Split-Path $Path

    Ensure-Directory $Directory

    Set-Content `
        -Path $Path `
        -Value $Content `
        -Encoding UTF8
}

try {

Write-Step "MELKISM $Version - Frontend Experience Foundation"

Set-Location $ProjectRoot


Write-Step "[1/10] Repository verification"

$GitRoot = git rev-parse --show-toplevel

if ($GitRoot -replace "\\","/" -ne "C:/Projects/melkism") {
    throw "Git root mismatch"
}

$Branch = git branch --show-current

Write-Host "Branch : $Branch"
Write-Host "GitRoot: $GitRoot"


Write-Step "[2/10] Backup"

Ensure-Directory $BackupRoot

Copy-Item `
    "$ProjectRoot\app" `
    "$BackupRoot\app" `
    -Recurse `
    -Force `
    -ErrorAction SilentlyContinue

Copy-Item `
    "$ProjectRoot\components" `
    "$BackupRoot\components" `
    -Recurse `
    -Force `
    -ErrorAction SilentlyContinue

Copy-Item `
    "$ProjectRoot\styles" `
    "$BackupRoot\styles" `
    -Recurse `
    -Force `
    -ErrorAction SilentlyContinue

Write-Host "Backup : $BackupRoot"


Write-Step "[3/10] Create design token foundation"


Write-SafeFile `
"$ProjectRoot\styles\tokens\experience.tokens.css" `

@"
:root {

 --melkism-primary:#1f4b99;
 --melkism-secondary:#6b7280;
 --melkism-accent:#d97706;

 --surface:#ffffff;
 --surface-muted:#f8fafc;

 --text-primary:#111827;
 --text-secondary:#475569;

 --radius-sm:8px;
 --radius-md:16px;
 --radius-lg:24px;

 --space-1:4px;
 --space-2:8px;
 --space-3:16px;
 --space-4:24px;
 --space-5:32px;

 --container-width:1280px;

}
"@


Write-Step "[4/10] Create experience folders"


$Folders=@(
"components/experience",
"components/experience/hero",
"components/experience/cards",
"components/experience/sections",
"components/ui"
)


foreach($Folder in $Folders){

Ensure-Directory "$ProjectRoot\$Folder"

}


Write-Step "[5/10] Create Experience primitives"


Write-SafeFile `
"$ProjectRoot\components\experience\ExperienceContainer.tsx" `

@"
export function ExperienceContainer({
children
}:{
children:React.ReactNode
}){

return (
<div className="mx-auto w-full max-w-[1280px] px-6">
{children}
</div>
)

}
"@



Write-SafeFile `
"$ProjectRoot\components\experience\hero\HeroFoundation.tsx" `

@"
export function HeroFoundation(){

return (

<section>

<h1>
MELKISM
</h1>

<p>
Media, Knowledge and Intelligence for Real Estate and Built Environment
</p>

</section>

)

}
"@



Write-Step "[6/10] Create homepage experience layer"


Ensure-Directory "$ProjectRoot\components\experience\home"


Write-SafeFile `
"$ProjectRoot\components\experience\home\HomeExperience.tsx" `

@"
import {HeroFoundation} from '../hero/HeroFoundation'
import {ExperienceContainer} from '../ExperienceContainer'

export function HomeExperience(){

return (

<ExperienceContainer>

<HeroFoundation />

</ExperienceContainer>

)

}
"@



Write-Step "[7/10] Update locale homepage integration"


$Page="$ProjectRoot\app\[locale]\page.tsx"

if(Test-Path $Page){

$content=Get-Content $Page -Raw

if($content -notmatch "HomeExperience"){

$content=@"
import {HomeExperience} from '@/components/experience/home/HomeExperience'

export default function Page(){

return <HomeExperience />

}

"@

Set-Content `
$Page `
$content `
-Encoding UTF8

}

}


Write-Step "[8/10] Validation"


npx prisma validate

npx tsc --noEmit


Write-Step "[9/10] Frontend foundation audit"


$Required=@(
"styles/tokens/experience.tokens.css",
"components/experience/ExperienceContainer.tsx",
"components/experience/home/HomeExperience.tsx",
"components/experience/hero/HeroFoundation.tsx"
)


foreach($File in $Required){

if(!(Test-Path "$ProjectRoot\$File")){

throw "Missing frontend foundation file: $File"

}

}


Write-Step "[10/10] Completed"


Write-Host ""
Write-Host "============================================================"
Write-Host "MELKISM $Version COMPLETED"
Write-Host "============================================================"
Write-Host ""
Write-Host "Backup:"
Write-Host $BackupRoot
Write-Host ""
Write-Host "Next phase:"
Write-Host "MELKISM v6.39.0 - Design System & UI Components"

}

catch {

Write-Host ""
Write-Host "============================================================"
Write-Host "MELKISM $Version FAILED"
Write-Host "============================================================"

Write-Host $_.Exception.Message

Write-Host ""
Write-Host "Backup retained:"
Write-Host $BackupRoot

throw

}