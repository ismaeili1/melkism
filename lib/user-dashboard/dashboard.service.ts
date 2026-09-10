import {
DashboardRepository
} from "./dashboard.repository";


export class DashboardService {


constructor(
private repository=new DashboardRepository()
){}


create(
dashboard:any
){

return this.repository.create(dashboard);

}


get(
userId:string
){

return this.repository.findByUserId(userId);

}


list(){

return this.repository.list();

}


}

