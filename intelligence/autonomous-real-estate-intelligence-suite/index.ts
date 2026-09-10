
export {

processAutonomousIntelligenceOperatingCore

} from "../autonomous-intelligence-operating-core-v2";



export {

processAIPropertyAnalysisAgent

} from "../ai-property-analysis-agent-v2";



export {

processAIArchitectureAdvisoryAgent

} from "../ai-architecture-advisory-agent-v2";



export {

processAIMarketForecastingAgent

} from "../ai-market-forecasting-agent-v2";



export {

processAIInvestmentAdvisoryAgent

} from "../ai-investment-advisory-agent-v2";



export {

processAutonomousIntelligenceGovernance

} from "../autonomous-intelligence-governance-system-v2";







export const AutonomousRealEstateIntelligenceSuite = {


version:"1.0.0",



agents:[


"autonomous-intelligence-operating-core",


"property-analysis-agent",


"architecture-advisory-agent",


"market-forecasting-agent",


"investment-advisory-agent",


"intelligence-governance-system"


],



domains:[


"real-estate",


"architecture",


"built-environment",


"market-analysis",


"investment-analysis"


],



capabilities:[


"property-analysis",


"architecture-advisory",


"market-forecasting",


"investment-analysis",


"autonomous-decision-support"


]


} as const;


