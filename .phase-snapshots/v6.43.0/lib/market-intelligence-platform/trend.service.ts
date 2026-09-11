import type {
MarketTrend
} from "./market.types";


export function analyzeTrend(
value:number
):MarketTrend{


return {

indicator:"market",

direction:
value>0
?"up"
:
value<0
?"down"
:
"stable"

};

}

