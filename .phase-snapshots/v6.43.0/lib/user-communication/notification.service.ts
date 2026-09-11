import {
NotificationRepository
} from "./notification.repository";


export class NotificationService {


constructor(
private repository=new NotificationRepository()
){}


create(
notification:any
){

return this.repository.create(notification);

}


getUserNotifications(
userId:string
){

return this.repository.findByUserId(userId);

}


list(){

return this.repository.list();

}


}

