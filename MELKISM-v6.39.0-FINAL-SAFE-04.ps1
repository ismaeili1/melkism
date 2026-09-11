$ErrorActionPreference="Stop"


$Root="C:\Projects\melkism"


function Step($Text){

Write-Host ""
Write-Host "============================================================"
Write-Host $Text
Write-Host "============================================================"

}


function Fail($Text){

Write-Host ""
Write-Host "FAILED"
throw $Text

}



Step "MELKISM v6.39.0 FINAL SAFE 04"


Step "Repository validation"


Push-Location $Root

try{


$gitRoot=(git rev-parse --show-toplevel).Trim()

$gitRoot=(Resolve-Path $gitRoot).Path

$expected=(Resolve-Path $Root).Path


if($gitRoot -ne $expected){

Fail "Git root mismatch"

}


Write-Host "Git root PASS"



Step "Protected backup"


$Backup=Join-Path `
$env:TEMP `
("MELKISM-v6.39.0-SAFE04-"+(Get-Date -Format "yyyyMMdd-HHmmss"))


New-Item `
$Backup `
-ItemType Directory `
-Force | Out-Null


$backupTargets=@(

"app",
"components",
"lib",
"styles",
"prisma",
"package.json",
"next.config.ts"

)


foreach($item in $backupTargets){


$source=Join-Path $Root $item


if(Test-Path $source){


Copy-Item `
$source `
$Backup `
-Recurse `
-Force


}


}


if(!(Test-Path $Backup)){

Fail "Backup failed"

}


Write-Host "Backup:"
Write-Host $Backup




Step "Generated artifact cleanup"


$ignorePatterns=@(

".next",
".next_*",
"node_modules",
"releases",
"*_backup*",
"backup*",
".cache"

)



foreach($pattern in $ignorePatterns){


Get-ChildItem `
$Root `
-Force `
-Directory `
-ErrorAction SilentlyContinue |
Where-Object {$_.Name -like $pattern} |
ForEach-Object {


Write-Host "Ignored artifact:"
Write-Host $_.FullName


}



}



Step "Design foundation"


$dirs=@(

"components/ui",
"styles",
"lib/design-system"

)


foreach($d in $dirs){

$p=Join-Path $Root $d


if(!(Test-Path $p)){

New-Item `
$p `
-ItemType Directory `
-Force | Out-Null

}


}



$tokenFile=Join-Path `
$Root `
"lib/design-system/tokens.ts"


if(!(Test-Path $tokenFile)){


@"
export const designTokens = {
 colors:{
  primary:"#111827",
  background:"#ffffff",
  muted:"#6b7280"
 },
 radius:{
  md:"12px"
 }
};
"@ | Set-Content `
$tokenFile `
-Encoding UTF8


}



Write-Host "Design foundation PASS"




Step "Source zero byte audit"



$sourceRoots=@(

"app",
"components",
"lib",
"styles",
"scripts",
"tests",
"prisma"

)


$extensions=@(

"*.ts",
"*.tsx",
"*.js",
"*.jsx",
"*.mjs",
"*.css",
"*.json"

)



$files=@()



foreach($rootFolder in $sourceRoots){


$path=Join-Path $Root $rootFolder


if(Test-Path $path){


foreach($ext in $extensions){


$files += Get-ChildItem `
$path `
-Recurse `
-File `
-Filter $ext `
-ErrorAction SilentlyContinue


}



}



}



foreach($file in $files){


if($file.Length -eq 0){


Fail "Zero byte SOURCE file detected: $($file.FullName)"


}


}



Write-Host "Source audit PASS"



Step "Prisma validation"

npx prisma validate



Step "TypeScript validation"

npx tsc --noEmit



Step "Tests"

npm test



Step "Production build"

npm run build



Step "SUCCESS"


Write-Host ""
Write-Host "MELKISM v6.39.0 FINAL SAFE 04 COMPLETED"
Write-Host "Backup:"
Write-Host $Backup



}

finally{

Pop-Location

}

