import type {
DashboardRecord
} from "./dashboard.types";


const storage:DashboardRecord[]=[];


export class DashboardRepository {


create(
dashboard:DashboardRecord
){

storage.push(dashboard);

return dashboard;

}


findByUserId(
userId:string
){

return storage.find(
item=>item.userId===userId
) ?? null;

}


list(){

return [...storage];

}


}

