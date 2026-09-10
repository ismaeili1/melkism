
export {

processDigitalTwinIntelligenceCore

} from "../digital-twin-intelligence-core-v2";



export {

processPropertyDigitalTwinModeling

} from "../property-digital-twin-modeling-engine-v2";



export {

processUrbanEnvironmentalSimulation

} from "../urban-environmental-simulation-layer-v2";



export {

processAssetLifecycleIntelligence

} from "../asset-lifecycle-intelligence-engine-v2";



export {

processDigitalTwinDecisionSupport

} from "../digital-twin-decision-support-system-v2";



export {

processDigitalTwinGovernance

} from "../digital-twin-governance-framework-v2";







export const AutonomousRealEstateDigitalTwinIntelligence = {


version:"1.0.0",



architecture:"digital-twin-intelligence-system",



layers:[


"digital-twin-core",


"property-modeling",


"urban-simulation",


"asset-lifecycle",


"decision-support",


"governance"


],



capabilities:[


"property-digital-twin",


"urban-context-modeling",


"environmental-simulation",


"asset-analysis",


"decision-support",


"digital-twin-governance"


],



domains:[


"real-estate",


"architecture",


"built-environment",


"urban-intelligence",


"investment-intelligence"


]


} as const;



