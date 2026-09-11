export type MarketNode={

market:string;

region:string;

};


export function createMarketNode(
market:string,
region:string
){

return {

market,
region

};

}
