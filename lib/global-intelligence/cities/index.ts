export type CityNode={

city:string;

country:string;

};


export function createCityNode(
city:string,
country:string
){

return {

city,
country

};

}
