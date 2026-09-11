import type {
 KnowledgeRelationship
} from "../knowledge.graph.contract";



export class KnowledgeRelationshipRegistryRuntime {



 private readonly relationships =
 new Map<string, KnowledgeRelationship>();



 register(
  relationship:
  KnowledgeRelationship
 ):
 void {


  this.relationships.set(
   this.createKey(
    relationship
   ),
   relationship
  );


 }



 get(
  key:
  string
 ):
 KnowledgeRelationship | undefined {


  return this.relationships.get(
   key
  );


 }



 has(
  key:
  string
 ):
 boolean {


  return this.relationships.has(
   key
  );


 }



 remove(
  key:
  string
 ):
 boolean {


  return this.relationships.delete(
   key
  );


 }



 list():
 readonly KnowledgeRelationship[] {


  return Array.from(
   this.relationships.values()
  );


 }



 findFrom(
  nodeId:
  string
 ):
 readonly KnowledgeRelationship[] {


  return this.list()
  .filter(
   relationship =>
   relationship.from === nodeId
  );


 }



 findTo(
  nodeId:
  string
 ):
 readonly KnowledgeRelationship[] {


  return this.list()
  .filter(
   relationship =>
   relationship.to === nodeId
  );


 }



 private createKey(
  relationship:
  KnowledgeRelationship
 ):
 string {


  return [
   relationship.from,
   relationship.type,
   relationship.to
  ]
  .join(
   "::"
  );


 }



}

