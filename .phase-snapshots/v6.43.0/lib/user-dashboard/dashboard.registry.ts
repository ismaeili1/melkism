import type {
DashboardRecord
} from "./dashboard.types";


const dashboards:DashboardRecord[]=[];


export function registerDashboard(
dashboard:DashboardRecord
){

dashboards.push(dashboard);

}


export function getDashboards(){

return [...dashboards];

}

