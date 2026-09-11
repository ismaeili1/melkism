import type {
NotificationRecord
} from "./notification.types";


const notifications:NotificationRecord[]=[];


export function registerNotification(
notification:NotificationRecord
){

notifications.push(notification);

}


export function getNotifications(){

return [...notifications];

}

