export type DataProviderStatus =
"connected"
|
"disconnected";


export interface DataProvider {

id:string;

name:string;

status:DataProviderStatus;

}


