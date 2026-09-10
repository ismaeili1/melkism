export type {
  AutonomousGovernanceCoreInput,
  AutonomousGovernanceCoreRecord,
  AutonomousGovernanceCoreContext,
  AutonomousGovernanceCoreResult
} from "../autonomous-governance-intelligence-core-v2";

export {
  processAutonomousGovernanceCore
} from "../autonomous-governance-intelligence-core-v2";


export type {
  AutonomousGovernanceMemoryInput,
  AutonomousGovernanceMemoryRecord,
  AutonomousGovernanceMemoryContext,
  AutonomousGovernanceMemoryResult
} from "../autonomous-governance-intelligence-memory-v2";

export {
  processAutonomousGovernanceMemory
} from "../autonomous-governance-intelligence-memory-v2";


export type {
  AutonomousGovernanceReasoningInput,
  AutonomousGovernanceReasoningRecord,
  AutonomousGovernanceReasoningContext,
  AutonomousGovernanceReasoningResult
} from "../autonomous-governance-intelligence-reasoning-v2";

export {
  processAutonomousGovernanceReasoning
} from "../autonomous-governance-intelligence-reasoning-v2";


export type {
  AutonomousGovernanceDecisionInput,
  AutonomousGovernanceDecisionRecord,
  AutonomousGovernanceDecisionContext,
  AutonomousGovernanceDecisionResult
} from "../autonomous-governance-intelligence-decision-v2";

export {
  processAutonomousGovernanceDecision
} from "../autonomous-governance-intelligence-decision-v2";


export const AutonomousGovernanceIntelligenceCoreSuite = {
  version: "1.0.0",
  modules: [
    "core",
    "memory",
    "reasoning",
    "decision"
  ],
  capabilities: [
    "governance",
    "memory",
    "reasoning",
    "decision",
    "autonomy"
  ]
} as const;
