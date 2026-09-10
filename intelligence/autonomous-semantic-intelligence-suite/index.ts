
export * from "../autonomous-knowledge-graph-core-v2";

export * from "../autonomous-semantic-intelligence-processing-v2";

export * from "../autonomous-knowledge-relationship-reasoning-v2";

export * from "../autonomous-semantic-intelligence-governance-v2";



export const AutonomousSemanticIntelligenceSuite = {


version:"1.0.0",


modules:[


"knowledge-graph-core",

"semantic-intelligence-processing",

"knowledge-relationship-reasoning",

"semantic-intelligence-governance"


],


capabilities:[


"autonomous-knowledge-graph",

"semantic-understanding",

"knowledge-discovery",

"relationship-reasoning",

"semantic-governance"


]


} as const;


