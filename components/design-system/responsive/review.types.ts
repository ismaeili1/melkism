export type DeviceType =
"desktop"
|
"tablet"
|
"mobile";


export interface ResponsiveReview {

device:DeviceType;

width:string;

layout:string;

navigation:string;

status:
"ready"
|
"review";

}