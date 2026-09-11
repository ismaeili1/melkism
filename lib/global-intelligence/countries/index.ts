export type CountryNode={

country:string;

market:string;

};


export function createCountryNode(
country:string,
market:string
){

return {

country,
market

};

}
