
export {

processAIDomainIntelligenceFoundation

} from "../ai-domain-intelligence-foundation-v2";



export {

processRealEstateKnowledgeIntelligence

} from "../real-estate-knowledge-intelligence-engine-v2";



export {

processBuiltEnvironmentIntelligence

} from "../built-environment-intelligence-engine-v2";



export {

processMarketIntelligence

} from "../market-intelligence-engine-v2";



export {

processInvestmentIntelligence

} from "../investment-intelligence-engine-v2";



export {

processAIDecisionSupportGovernance

} from "../ai-decision-support-governance-v2";






export const AIDomainIntelligenceSuite = {


version:"1.0.0",


modules:[


"ai-domain-intelligence-foundation",


"real-estate-knowledge-intelligence-engine",


"built-environment-intelligence-engine",


"market-intelligence-engine",


"investment-intelligence-engine",


"ai-decision-support-governance"


],



domains:[


"real-estate",


"architecture",


"built-environment",


"market-analysis",


"investment-analysis"


],



capabilities:[


"property-intelligence",


"architecture-intelligence",


"market-intelligence",


"investment-intelligence",


"decision-support"


]


} as const;


