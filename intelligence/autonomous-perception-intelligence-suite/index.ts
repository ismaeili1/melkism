
export * from "../autonomous-perception-intelligence-core-v2";

export * from "../autonomous-environmental-context-awareness-v2";

export * from "../autonomous-multimodal-intelligence-fusion-v2";

export * from "../autonomous-perception-intelligence-governance-v2";



export const AutonomousPerceptionIntelligenceSuite = {


version:"1.0.0",


modules:[


"perception-intelligence-core",

"environmental-context-awareness",

"multimodal-intelligence-fusion",

"perception-intelligence-governance"


],


capabilities:[


"autonomous-perception",

"environmental-awareness",

"multimodal-fusion",

"context-understanding",

"perception-governance"


]


} as const;


