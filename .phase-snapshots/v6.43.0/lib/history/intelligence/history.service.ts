import type {

IntelligenceHistoryRecord

} from "./history.types";



export class IntelligenceHistoryService {



private records:
IntelligenceHistoryRecord[] = [];



record(
item:IntelligenceHistoryRecord
){


this.records.push(item);


return item;


}



getAll(){


return this.records;


}



findByType(
type:IntelligenceHistoryRecord["type"]
){


return this.records.filter(

item=>

item.type===type

);


}



}


