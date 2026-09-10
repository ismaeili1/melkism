/**
 * MELKISM Knowledge Entity Contract
 *
 * v0.8.0
 */

export type KnowledgeEntityId = string;


export type KnowledgeEntityType =
  | "concept"
  | "topic"
  | "place"
  | "organization"
  | "person"
  | "property"
  | "document"
  | "unknown";


export interface KnowledgeEntityContract {

  id:
    KnowledgeEntityId;


  type:
    KnowledgeEntityType;


  label:
    string;


  domain?:
    string;


  metadata?:
    Record<string, unknown>;

}
