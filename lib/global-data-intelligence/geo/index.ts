export type GeoIntelligence={

country:string;

city:string;

};


export function createGeoContext(
country:string,
city:string
){

return {

country,
city

};

}
