
export {

processIntelligencePlatformKernel

} from "../intelligence-platform-kernel-v2";



export {

processAIContentIntelligence

} from "../ai-content-intelligence-engine-v2";



export {

processKnowledgeGraph

} from "../knowledge-graph-engine-v2";



export {

processSemanticUnderstanding

} from "../semantic-understanding-engine-v2";



export {

processIntelligenceSearch

} from "../intelligence-search-engine-v2";



export {

processRecommendationIntelligence

} from "../recommendation-intelligence-engine-v2";






export const IntelligencePlatformSuite = {


version:"1.0.0",


modules:[


"intelligence-platform-kernel",


"ai-content-intelligence-engine",


"knowledge-graph-engine",


"semantic-understanding-engine",


"intelligence-search-engine",


"recommendation-intelligence-engine"


],



capabilities:[


"content-intelligence",


"knowledge-graph",


"semantic-understanding",


"intelligent-search",


"recommendation-engine",


"platform-intelligence"


]


} as const;


