/**
 * MELKISM v38.20.10
 * Autonomous Cognitive Operating System Contracts
 *
 * Contract Foundation Layer
 */


export interface CognitiveNode {

id?: string;

type?: string;

metadata?: Record<string, unknown>;

}



export interface CognitiveRelationship {

source?: CognitiveNode | string;

target?: CognitiveNode | string;

type?: string;

strength?: number;

}



export interface CognitiveMemoryRecord {

id?: string;

content?: unknown;

metadata?: Record<string, unknown>;

createdAt?: Date;

}



export interface CognitiveAgentIdentity {

id?: string;

agentType?: string;

capabilities?: string[];

}



export interface CognitiveActionContext {

agent?: CognitiveAgentIdentity;

input?: unknown;

metadata?: Record<string, unknown>;

}



export interface CognitiveKnowledgeUpdate {

source?: string;

target?: string;

operation?: string;

payload?: unknown;

}


export interface CognitiveGraphContext {

nodes?: CognitiveNode[];

relationships?: CognitiveRelationship[];

}

