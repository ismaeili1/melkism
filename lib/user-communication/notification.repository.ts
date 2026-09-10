import type {
NotificationRecord
} from "./notification.types";


const storage:NotificationRecord[]=[];


export class NotificationRepository {


create(
notification:NotificationRecord
){

storage.push(notification);

return notification;

}


findByUserId(
userId:string
){

return storage.filter(
item=>item.userId===userId
);

}


list(){

return [...storage];

}


}

