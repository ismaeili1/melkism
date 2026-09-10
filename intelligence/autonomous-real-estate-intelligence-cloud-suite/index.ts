
export {

processIntelligenceCloudCore

} from "../intelligence-cloud-core-v2";



export {

processDistributedAIServiceInfrastructure

} from "../distributed-ai-service-infrastructure-v2";



export {

processGlobalIntelligenceDataPlane

} from "../global-intelligence-data-plane-v2";



export {

processCloudIntelligenceAPIGateway

} from "../cloud-intelligence-api-gateway-v2";



export {

processEnterpriseAIDeployment

} from "../enterprise-ai-deployment-layer-v2";



export {

processCloudGovernance

} from "../cloud-governance-framework-v2";







export const AutonomousRealEstateIntelligenceCloudPlatform = {


version:"1.0.0",



architecture:"intelligence-cloud-platform",



layers:[


"cloud-core",


"distributed-ai-services",


"data-plane",


"api-gateway",


"deployment-layer",


"governance"


],



capabilities:[


"cloud-intelligence-runtime",


"distributed-ai-execution",


"global-data-management",


"intelligence-api-routing",


"enterprise-deployment",


"cloud-governance"


],



domains:[


"real-estate",


"architecture",


"built-environment",


"urban-intelligence",


"investment-intelligence",


"knowledge-intelligence"


]


} as const;



