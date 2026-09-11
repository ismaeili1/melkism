$ErrorActionPreference="Stop"

$Version="v6.39.0"
$Root="C:\Projects\melkism"
$Backup="$env:TEMP\MELKISM-$Version-backup-$(Get-Date -Format yyyyMMdd-HHmmss)"


function Step($m){
Write-Host ""
Write-Host "============================================================"
Write-Host $m
Write-Host "============================================================"
}


function Dir($p){
if(!(Test-Path $p)){
New-Item -ItemType Directory -Path $p -Force | Out-Null
}
}


function File($p,$c){

Dir (Split-Path $p)

Set-Content `
-Path $p `
-Value $c `
-Encoding UTF8

}


try{


Step "MELKISM $Version - Design System & UI Components"


Set-Location $Root


Step "[1/10] Repository check"

$git=git rev-parse --show-toplevel

if(($git -replace "\\","/") -ne "C:/Projects/melkism"){
throw "Git root mismatch"
}


Step "[2/10] Backup"

Dir $Backup


foreach($x in @(
"components",
"styles"
)){

Copy-Item `
"$Root\$x" `
"$Backup\$x" `
-Recurse `
-Force `
-ErrorAction SilentlyContinue

}


Step "[3/10] Design tokens"


File `
"$Root\styles\tokens\colors.css" `

@"
:root{

--color-primary:#1f4b99;
--color-secondary:#64748b;
--color-accent:#d97706;

--color-background:#ffffff;
--color-surface:#f8fafc;

--color-text:#111827;
--color-muted:#475569;

}
"@



File `
"$Root\styles\tokens\typography.css" `

@"
:root{

--font-xs:0.75rem;
--font-sm:0.875rem;
--font-md:1rem;
--font-lg:1.25rem;
--font-xl:2rem;
--font-xxl:3rem;

}
"@



File `
"$Root\styles\tokens\layout.css" `

@"
:root{

--container-max:1280px;

--radius-sm:8px;
--radius-md:16px;
--radius-lg:24px;

--shadow-card:0 10px 30px rgba(0,0,0,.08);

}
"@



Step "[4/10] UI folders"


foreach($f in @(
"components/ui/button",
"components/ui/card",
"components/ui/layout",
"components/ui/typography"
)){

Dir "$Root\$f"

}



Step "[5/10] Button component"


File `
"$Root\components\ui\button\Button.tsx" `

@"
type Props={
children:React.ReactNode
}

export function Button({children}:Props){

return (

<button>

{children}

</button>

)

}
"@



Step "[6/10] Card component"


File `
"$Root\components\ui\card\Card.tsx" `

@"
type Props={
children:React.ReactNode
}

export function Card({children}:Props){

return (

<div>

{children}

</div>

)

}
"@



Step "[7/10] Typography components"


File `
"$Root\components\ui\typography\Heading.tsx" `

@"
export function Heading({
children
}:{
children:React.ReactNode
}){

return <h2>{children}</h2>

}
"@



Step "[8/10] Export UI foundation"


File `
"$Root\components\ui\index.ts" `

@"
export * from './button/Button'
export * from './card/Card'
export * from './typography/Heading'
"@



Step "[9/10] Validation"


npx tsc --noEmit



Step "[10/10] Completed"


Write-Host ""
Write-Host "============================================================"
Write-Host "MELKISM $Version COMPLETED"
Write-Host "============================================================"
Write-Host ""
Write-Host "Backup:"
Write-Host $Backup
Write-Host ""
Write-Host "Next phase:"
Write-Host "MELKISM v6.40.0 - Page Experience Implementation"


}

catch{

Write-Host ""
Write-Host "FAILED"
Write-Host $_.Exception.Message
Write-Host "Backup retained:"
Write-Host $Backup

throw

}