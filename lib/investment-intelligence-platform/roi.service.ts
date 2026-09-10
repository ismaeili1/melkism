export function calculateROI(
income:number,
cost:number
){

if(cost===0){

return 0;

}


return (
((income-cost)/cost)*100
);

}

