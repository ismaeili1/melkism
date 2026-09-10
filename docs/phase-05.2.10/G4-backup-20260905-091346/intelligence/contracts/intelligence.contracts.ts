export interface IntelligenceInput {

id?: string;

type?: string;

data?: unknown;

context?: Record<string, unknown>;

}



export interface IntelligenceOutput {

success: boolean;

data?: unknown;

metadata?: Record<string, unknown>;

}



export interface IntelligenceContext {

sessionId?: string;

agentId?: string;

timestamp?: Date;

}

