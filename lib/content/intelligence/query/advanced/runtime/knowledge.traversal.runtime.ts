/**
 * MELKISM Multi-Hop Knowledge Traversal Runtime
 *
 * v0.5.1
 *
 * Implements bounded graph traversal with:
 *
 * - maximum depth
 * - direction control
 * - result limits
 * - cycle prevention
 * - path preservation
 */

import type {
  ContentEntity,
} from '../../../entities';

import type {
  KnowledgeRelationship,
} from '../../../knowledge';

import type {
  KnowledgeGraphPersistenceRuntime,
} from '../../../knowledge/persistence/runtime';

import type {
  KnowledgeTraversalDirection,
  KnowledgeTraversalRequest,
  KnowledgeTraversalPath,
  KnowledgeTraversalResult,
} from '../knowledge.traversal.contract';


type TraversalState = {
  entityId:
    string;

  entityIds:
    readonly string[];

  relationshipIds:
    readonly string[];

  depth:
    number;
};


export class KnowledgeTraversalRuntime {

  constructor(
    private readonly graphPersistence:
      KnowledgeGraphPersistenceRuntime,

    private readonly entityLookup:
      (
        id: string
      ) => Promise<ContentEntity | null>
  ) {}


  async traverse(
    request:
      KnowledgeTraversalRequest
  ):
    Promise<KnowledgeTraversalResult> {

    const maxDepth =
      Math.max(
        0,
        request.maxDepth ?? 1
      );

    const maxResults =
      request.maxResults !== undefined
        ? Math.max(0, request.maxResults)
        : Number.POSITIVE_INFINITY;

    const direction:
      KnowledgeTraversalDirection =
        request.direction ?? 'OUTGOING';


    const visitedEntityIds =
      new Set<string>([
        request.startEntityId,
      ]);

    const visitedRelationshipIds =
      new Set<string>();


    const paths:
      KnowledgeTraversalPath[] = [];


    const queue:
      TraversalState[] = [

        {
          entityId:
            request.startEntityId,

          entityIds:
            [request.startEntityId],

          relationshipIds:
            [],

          depth:
            0,
        }

      ];


    while (
      queue.length > 0 &&
      paths.length < maxResults
    ) {

      const current =
        queue.shift()!;


      if (
        current.depth >=
        maxDepth
      ) {
        continue;
      }


      const relationships =
        await this.loadRelationships(
          current.entityId,
          direction
        );


      for (
        const relationship
        of relationships
      ) {

        if (
          paths.length >=
          maxResults
        ) {
          break;
        }


        visitedRelationshipIds.add(
          relationship.id
        );


        const targetEntityId =
          relationship.from ===
          current.entityId
            ? relationship.to
            : relationship.from;


        if (
          current.entityIds.includes(
            targetEntityId
          )
        ) {
          continue;
        }


        const nextEntityIds =
          [
            ...current.entityIds,
            targetEntityId,
          ];


        const nextRelationshipIds =
          [
            ...current.relationshipIds,
            relationship.id,
          ];


        const nextDepth =
          current.depth + 1;


        const path:
          KnowledgeTraversalPath = {

          entityIds:
            nextEntityIds,

          relationshipIds:
            nextRelationshipIds,

          depth:
            nextDepth,

        };


        paths.push(
          path
        );


        if (
          nextDepth <
          maxDepth
        ) {

          if (
            !visitedEntityIds.has(
              targetEntityId
            )
          ) {

            visitedEntityIds.add(
              targetEntityId
            );


            queue.push({

              entityId:
                targetEntityId,

              entityIds:
                nextEntityIds,

              relationshipIds:
                nextRelationshipIds,

              depth:
                nextDepth,

            });
          }
        }
      }
    }


    return {

      startEntityId:
        request.startEntityId,

      paths,

      visitedEntityIds:
        Array.from(
          visitedEntityIds
        ),

      visitedRelationshipIds:
        Array.from(
          visitedRelationshipIds
        ),

    };
  }


  async getEntitiesForPath(
    path:
      KnowledgeTraversalPath
  ):
    Promise<readonly ContentEntity[]> {

    const entities:
      ContentEntity[] = [];


    for (
      const entityId
      of path.entityIds
    ) {

      const entity =
        await this.entityLookup(
          entityId
        );


      if (entity) {
        entities.push(
          entity
        );
      }
    }


    return entities;
  }


  private async loadRelationships(
    entityId:
      string,

    direction:
      KnowledgeTraversalDirection
  ):
    Promise<readonly KnowledgeRelationship[]> {

    if (direction === 'OUTGOING') {

      return this.graphPersistence
        .findRelationshipsFrom(
          entityId
        );
    }


    if (direction === 'INCOMING') {

      return this.graphPersistence
        .findRelationshipsTo(
          entityId
        );
    }


    const [
      outgoing,
      incoming,
    ] = await Promise.all([

      this.graphPersistence
        .findRelationshipsFrom(
          entityId
        ),

      this.graphPersistence
        .findRelationshipsTo(
          entityId
        ),

    ]);


    return [
      ...outgoing,
      ...incoming,
    ];
  }

}
