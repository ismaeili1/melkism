import type {
MarketIndicator
} from "./market.types";


export function calculateIndicator(
indicator:MarketIndicator
){

return {

...indicator,

normalized:
indicator.value

};

}

