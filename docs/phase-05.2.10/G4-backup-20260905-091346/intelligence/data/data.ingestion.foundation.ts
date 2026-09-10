/**
 * MELKISM Data Ingestion Foundation
 * v38.20.14
 */


export interface DataSourceRecord {


source:string;

payload:unknown;

createdAt:Date;

}



export class DataIngestionFoundation {


private history:
DataSourceRecord[] = [];



registerSource(

source:string

){


return {


source,

registered:true

};


}



ingestData(

source:string,

payload:unknown

){


const record:
DataSourceRecord = {


source,

payload,

createdAt:new Date()


};


this.history.push(record);


return record;


}



getIngestionHistory(){


return this.history;


}


}
