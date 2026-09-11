import type {
InvestmentRecord
} from "./investment.types";


const investments:
InvestmentRecord[]=[];



export function registerInvestment(
investment:InvestmentRecord
){

investments.push(investment);

}



export function getInvestments(){

return [...investments];

}

