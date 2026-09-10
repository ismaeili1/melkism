import type {
 KnowledgeNode,
 KnowledgeRelationship
} from "../knowledge.graph.contract";


import {
 KnowledgeNodeRegistryRuntime
} from "./knowledge.node.registry.runtime";


import {
 KnowledgeRelationshipRegistryRuntime
} from "./knowledge.relationship.registry.runtime";



export class KnowledgeGraphRuntime {



 private readonly nodes:
 KnowledgeNodeRegistryRuntime;


 private readonly relationships:
 KnowledgeRelationshipRegistryRuntime;



 constructor(){

  this.nodes =
  new KnowledgeNodeRegistryRuntime();


  this.relationships =
  new KnowledgeRelationshipRegistryRuntime();

 }



 registerNode(
  node:
  KnowledgeNode
 ):
 void {

  this.nodes.register(
   node
  );

 }



 registerRelationship(
  relationship:
  KnowledgeRelationship
 ):
 void {

  this.relationships.register(
   relationship
  );

 }



 getNode(
  id:
  string
 ):
 KnowledgeNode | undefined {

  return this.nodes.get(
   id
  );

 }



 hasNode(
  id:
  string
 ):
 boolean {

  return this.nodes.has(
   id
  );

 }



 listNodes():
 readonly KnowledgeNode[] {

  return this.nodes.list();

 }



 listRelationships():
 readonly KnowledgeRelationship[] {

  return this.relationships.list();

 }



 getRelationshipsFrom(
  id:
  string
 ):
 readonly KnowledgeRelationship[] {

  return this.relationships.findFrom(
   id
  );

 }



 getRelationshipsTo(
  id:
  string
 ):
 readonly KnowledgeRelationship[] {

  return this.relationships.findTo(
   id
  );

 }



 getNeighbors(
  id:
  string
 ):
 readonly KnowledgeNode[] {



  const relations =
  this.getRelationshipsFrom(
   id
  );



  return relations
   .map(
    relation =>
    this.getNode(
     relation.to
    )
   )
   .filter(
    Boolean
   ) as KnowledgeNode[];


 }



}
