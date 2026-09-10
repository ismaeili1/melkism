/**
 * MELKISM Runtime Dashboard Contract
 */



export interface RuntimeDashboardContract {


status:string;


timestamp:string;


metrics:Record<string,unknown>;


}



const dashboardMetrics:
Record<string,unknown>={};



export function registerDashboardMetric(
key:string,
value:unknown
){


dashboardMetrics[key]=value;


return {

key,

value

};

}



export function getDashboardMetrics(){

return dashboardMetrics;

}



export function getRuntimeDashboard()
:
RuntimeDashboardContract {



return {


status:"healthy",


timestamp:
new Date().toISOString(),


metrics:
dashboardMetrics


};


}



export function clearDashboardMetrics(){

for(const key of Object.keys(dashboardMetrics)){

delete dashboardMetrics[key];

}

}

