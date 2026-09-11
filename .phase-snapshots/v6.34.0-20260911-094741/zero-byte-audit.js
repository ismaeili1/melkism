const fs = require("fs");
const path = require("path");

const root = process.cwd();

const targets=[
"app",
"components",
"lib",
"prisma",
"styles"
];

let result=[];

function scan(dir){

 for(const item of fs.readdirSync(dir)){

  const full=path.join(dir,item);

  if(
    item==="node_modules" ||
    item===".next" ||
    item.includes("backup")
  ) continue;

  if(fs.statSync(full).isDirectory()){
    scan(full);
  }
  else{

    if(
      /\.(ts|tsx|js|jsx|prisma|css)$/.test(item)
      &&
      fs.statSync(full).size===0
    ){

      result.push(
        path.relative(root,full)
      );

    }

  }
 }

}

for(const t of targets){

 const p=path.join(root,t);

 if(fs.existsSync(p))
 scan(p);

}


console.log("");

console.log(
"ZERO BYTE PROJECT SOURCE FILES:"
,
result.length
);

console.log("");

for(const r of result.slice(0,100))
 console.log(r);


fs.writeFileSync(
"zero-byte-real-source-report.json",
JSON.stringify(result,null,2)
);
