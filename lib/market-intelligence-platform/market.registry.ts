import type {
MarketIndicator
} from "./market.types";


const indicators:
MarketIndicator[]=[];



export function registerIndicator(
indicator:MarketIndicator
){

indicators.push(indicator);

}



export function getIndicators(){

return [...indicators];

}

