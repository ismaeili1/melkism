import type {
  AutonomousGovernanceCoreInput,
  AutonomousGovernanceCoreRecord
} from "../contracts";

export interface AutonomousGovernanceCoreContext {
  request: AutonomousGovernanceCoreInput;
  history: AutonomousGovernanceCoreRecord[];
}

export interface AutonomousGovernanceCoreResult {
  record: AutonomousGovernanceCoreRecord;
  executionTime: number;
}
