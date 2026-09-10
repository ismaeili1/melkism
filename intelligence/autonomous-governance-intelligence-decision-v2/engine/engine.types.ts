import type {
  AutonomousGovernanceDecisionInput,
  AutonomousGovernanceDecisionRecord
} from "../contracts";

export interface AutonomousGovernanceDecisionContext {
  request: AutonomousGovernanceDecisionInput;
  history: AutonomousGovernanceDecisionRecord[];
}

export interface AutonomousGovernanceDecisionResult {
  record: AutonomousGovernanceDecisionRecord;
  executionTime: number;
}
