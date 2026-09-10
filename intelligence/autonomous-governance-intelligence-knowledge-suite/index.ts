
export * from "../autonomous-governance-intelligence-knowledge-v2";

export * from "../autonomous-governance-intelligence-learning-memory-v2";

export * from "../autonomous-governance-intelligence-knowledge-graph-v2";

export * from "../autonomous-governance-intelligence-semantic-v2";



export const AutonomousGovernanceIntelligenceKnowledgeSuite = {


version:"1.0.0",


modules:[


"knowledge",

"learning-memory",

"knowledge-graph",

"semantic"


],


capabilities:[


"knowledge-acquisition",

"memory-learning",

"relationship-mapping",

"semantic-understanding"


]


} as const;


