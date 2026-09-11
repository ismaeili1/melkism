import type {
DataProvider
} from "./data.types";


let provider:
DataProvider | null = null;



export function registerDataProvider(
data:DataProvider
){

provider=data;

}



export function getDataProvider(){

return provider;

}

