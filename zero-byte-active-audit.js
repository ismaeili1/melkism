const fs = require("fs");
const path = require("path");

const root = process.cwd();

const zeroFiles = JSON.parse(
 fs.readFileSync(
  "zero-byte-real-source-report.json",
  "utf8"
 )
);

let active=[];

function scan(dir){

 if(!fs.existsSync(dir)) return;

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

  else if(
    /\.(ts|tsx|js|jsx)$/.test(item)
  ){

    const content=
    fs.readFileSync(full,"utf8");

    for(const z of zeroFiles){

      const relative=
      z.replace(/\\/g,"/");

      const name=
      path.basename(relative);

      if(
        content.includes(name.replace(".ts",""))
        ||
        content.includes(name.replace(".tsx",""))
      ){

        active.push({
          source:path.relative(root,full),
          zeroTarget:z
        });

        break;
      }

    }

  }

 }

}


scan(path.join(root,"app"));
scan(path.join(root,"components"));
scan(path.join(root,"lib"));


console.log(
"Referenced zero-byte files:",
active.length
);


console.log("");

active
.slice(0,100)
.forEach(x=>{
 console.log(
 x.zeroTarget,
 "<-",
 x.source
 );
});


fs.writeFileSync(
"zero-byte-active-report.json",
JSON.stringify(active,null,2)
);
