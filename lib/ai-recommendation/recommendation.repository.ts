import type {
RecommendationRecord
} from "./recommendation.types";


const storage:RecommendationRecord[]=[];


export class RecommendationRepository {


create(
record:RecommendationRecord
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

