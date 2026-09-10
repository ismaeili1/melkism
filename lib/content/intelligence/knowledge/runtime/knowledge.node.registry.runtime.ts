import type {
 KnowledgeNode
} from "../knowledge.graph.contract";


export class KnowledgeNodeRegistryRuntime {


 private readonly nodes =
 new Map<string, KnowledgeNode>();


 register(
  node: KnowledgeNode
 ): void {

  this.nodes.set(
   node.id,
   node
  );

 }


 get(
  id: string
 ):
 KnowledgeNode | undefined {

  return this.nodes.get(id);

 }


 has(
  id: string
 ):
 boolean {

  return this.nodes.has(id);

 }


 remove(
  id: string
 ):
 boolean {

  return this.nodes.delete(id);

 }


 list():
 readonly KnowledgeNode[] {

  return Array.from(
   this.nodes.values()
  );

 }


}
