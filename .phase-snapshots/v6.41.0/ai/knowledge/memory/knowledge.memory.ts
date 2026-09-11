/**
 * MELKISM AI Knowledge Memory Foundation
 */


export interface KnowledgeMemory {

    key:string;

    value:string;

    timestamp:number;
}


export const memoryStore:
KnowledgeMemory[] = [];
