
import type {

AutonomousFabricMeshSynchronizationInput,

AutonomousFabricMeshSynchronizationRecord

} from "../contracts";



export interface AutonomousFabricMeshSynchronizationContext {


request:

AutonomousFabricMeshSynchronizationInput;


history:

AutonomousFabricMeshSynchronizationRecord[];


}



export interface AutonomousFabricMeshSynchronizationResult {


record:

AutonomousFabricMeshSynchronizationRecord;


executionTime:number;


}



