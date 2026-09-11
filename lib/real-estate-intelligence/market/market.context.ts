export interface MarketContext {

region:string;

indicators:string[];

}


export function createMarketContext():

MarketContext {

return {

region:"unknown",

indicators:[]

};

}


