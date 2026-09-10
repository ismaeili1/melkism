
export {

processGlobalIntelligenceNetwork

} from "../global-intelligence-network-core-v3";



export {

processGlobalMarketNetwork

} from "../global-market-intelligence-network-v3";



export {

processGlobalCityNetwork

} from "../global-city-intelligence-network-v3";



export {

processKnowledgeGraphNetwork

} from "../real-estate-knowledge-graph-network-v3";



export {

processCrossBorderExchange

} from "../cross-border-intelligence-exchange-v3";



export {

processGlobalNetworkGovernance

} from "../global-intelligence-governance-layer-v3";





export const GlobalRealEstateIntelligenceNetwork = {


version:"1.0.0",


type:

"global-real-estate-intelligence-network",


capabilities:[


"global-market-intelligence",


"city-intelligence",


"knowledge-graph",


"cross-border-intelligence",


"governance"


]



} as const;



