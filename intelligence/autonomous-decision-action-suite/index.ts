
export * from "../autonomous-decision-intelligence-core-v2";

export * from "../autonomous-action-planning-engine-v2";

export * from "../autonomous-response-optimization-v2";

export * from "../autonomous-decision-governance-v2";



export const AutonomousDecisionActionSuite = {


version:"1.0.0",


modules:[


"decision-intelligence-core",

"autonomous-action-planning",

"response-optimization",

"decision-governance"


],


capabilities:[


"decision-intelligence",

"autonomous-action-planning",

"intelligent-response-optimization",

"decision-simulation",

"decision-governance-control"


]


} as const;


