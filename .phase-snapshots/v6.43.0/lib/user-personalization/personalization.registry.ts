import type {
SearchHistoryRecord
} from "./personalization.types";


const records:SearchHistoryRecord[]=[];


export function registerSearch(
record:SearchHistoryRecord
){

records.push(record);

}


export function getSearchHistory(){

return [...records];

}

