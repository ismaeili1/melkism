import type {
  AutonomousGovernanceReasoningInput,
  AutonomousGovernanceReasoningRecord
} from "../contracts";

export interface AutonomousGovernanceReasoningContext {
  request: AutonomousGovernanceReasoningInput;
  history: AutonomousGovernanceReasoningRecord[];
}

export interface AutonomousGovernanceReasoningResult {
  record: AutonomousGovernanceReasoningRecord;
  executionTime: number;
}
