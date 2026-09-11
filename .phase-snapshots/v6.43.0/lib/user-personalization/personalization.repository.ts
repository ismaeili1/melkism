import type {
SearchHistoryRecord
} from "./personalization.types";


const storage:SearchHistoryRecord[]=[];


export class PersonalizationRepository {


create(
record:SearchHistoryRecord
){

storage.push(record);

return record;

}


findByUser(
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

