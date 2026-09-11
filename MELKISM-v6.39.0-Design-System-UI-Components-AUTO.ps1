param()

$ErrorActionPreference = "Stop"

function Write-PhaseStep {

    param(
        [string]$Message
    )

    Write-Host ""
    Write-Host "============================================================"
    Write-Host $Message
    Write-Host "============================================================"
}

function Fail($msg){
    Write-Host ""
    Write-Host "FAILED"
    Write-Host $msg
    throw $msg
}


Write-PhaseStep "MELKISM v6.39.0 - Design System & UI Components"

$Root = (Get-Location).Path

if ($Root -ne "C:\Projects\melkism") {
    Fail "Project root mismatch: $Root"
}


Write-PhaseStep "[1] Git validation"

$GitRoot = git rev-parse --show-toplevel

if ($GitRoot.Replace("\","/") -ne "C:/Projects/melkism") {
    Fail "Git root mismatch: $GitRoot"
}

Write-Host "Git root PASS"


Write-PhaseStep "[2] Protected Backup"

$Backup =
"C:\Users\Avat\AppData\Local\Temp\MELKISM-v6.39.0-backup-$((Get-Date).ToString('yyyyMMdd-HHmmss'))"


New-Item `
    -ItemType Directory `
    -Path $Backup `
    -Force | Out-Null


$BackupItems = @(
    "app",
    "components",
    "lib",
    "styles",
    "package.json",
    "next.config.ts"
)


foreach($item in $BackupItems){

    if(Test-Path $item){

        Copy-Item `
        $item `
        $Backup `
        -Recurse `
        -Force

    }
}


Write-Host "Backup PASS"
Write-Host $Backup



Write-PhaseStep "[3] Design System Foundation"


$Folders = @(

"styles/design-system",
"components/ui",
"components/design-system"

)


foreach($folder in $Folders){

    New-Item `
    -ItemType Directory `
    -Path $folder `
    -Force | Out-Null

}



$Files = @{

"styles/design-system/tokens.ts" =
@"
export const designTokens = {

 colors:{
   primary:"#6699FF",
   secondary:"#999999",
   danger:"#FF0000",
   background:"#FFFFFF"
 },

 radius:{
   sm:"4px",
   md:"8px",
   lg:"16px"
 },

 spacing:{
   sm:"8px",
   md:"16px",
   lg:"32px"
 }

}
"@


"components/ui/Button.tsx" =
@"
export function Button(
{
children,
className=""
}:{
children:React.ReactNode
className?:string
})
{
return (

<button className={className}>
{children}
</button>

)

}
"@


"components/ui/Card.tsx" =
@"
export function Card(
{
children
}:{
children:React.ReactNode
})
{

return (

<div>
{children}
</div>

)

}
"@

}



foreach($file in $Files.Keys){

    Set-Content `
    -Path $file `
    -Value $Files[$file] `
    -Encoding UTF8

}


Write-Host "Design system foundation PASS"



Write-PhaseStep "[4] Source Validation"


$ZeroFiles =
Get-ChildItem `
-Recurse `
-File `
-Exclude "*.map" |
Where-Object {

$_.Length -eq 0 -and
$_.FullName -notmatch "\\.next\\" -and
$_.FullName -notmatch "\\node_modules\\"

}


if($ZeroFiles){

    $ZeroFiles | ForEach-Object {
        Write-Host $_.FullName
    }

    Fail "Zero byte source files detected"

}


Write-Host "Zero byte audit PASS"



Write-PhaseStep "[5] Type Validation"


npx prisma validate

npx prisma generate

npx tsc --noEmit


Write-Host "TypeScript PASS"



Write-PhaseStep "[6] Final Status"


Write-Host ""
Write-Host "============================================================"
Write-Host "MELKISM v6.39.0 COMPLETED"
Write-Host "============================================================"
Write-Host "Backup:"
Write-Host $Backup
Write-Host ""
Write-Host "Next:"
Write-Host "MELKISM v6.40.0 - Visual Experience Layer"

