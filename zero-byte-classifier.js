const fs=require("fs");
const path=require("path");

const root=process.cwd();

const targets=[
"app",
"components",
"lib"
];


let report=[];


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

else if(
/\.(ts|tsx|js|jsx)$/.test(item)
){

const stat=fs.statSync(full);


if(stat.size===0){

let category="UNKNOWN";


if(full.includes("\\app\\api\\")){
category="API_ROUTE";
}

else if(full.includes("\\components\\")){
category="COMPONENT";
}

else if(full.includes("\\lib\\")){
category="LIBRARY";
}


report.push({

file:path.relative(root,full),
size:stat.size,
category

});


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
"ZERO BYTE CLASSIFIED:",
report.length
);

console.log("");

console.log(
report.reduce((a,x)=>{

a[x.category]=(a[x.category]||0)+1;
return a;

},{})
);



fs.writeFileSync(
"zero-byte-classified-report.json",
JSON.stringify(report,null,2)
);

