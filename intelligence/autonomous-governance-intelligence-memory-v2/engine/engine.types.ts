import type {
  AutonomousGovernanceMemoryInput,
  AutonomousGovernanceMemoryRecord
} from "../contracts";

export interface AutonomousGovernanceMemoryContext {
  request: AutonomousGovernanceMemoryInput;
  history: AutonomousGovernanceMemoryRecord[];
}

export interface AutonomousGovernanceMemoryResult {
  record: AutonomousGovernanceMemoryRecord;
  executionTime: number;
}
