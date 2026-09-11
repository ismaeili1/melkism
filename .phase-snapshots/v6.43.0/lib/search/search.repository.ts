/**
 * MELKISM v6.26.0
 * Prisma-backed Search and Discovery repository.
 */

import type {
  Prisma,
} from "@/prisma/generated/prisma/client";

import {
  getAuthPrisma,
} from "@/lib/auth/prisma";

import type {
  SearchInput,
  SearchResult,
} from "@/lib/search/search.types";

function buildContains(
  query: string
) {
  return {
    contains: query,
    mode: "insensitive" as const,
  };
}

function normalize(
  value: string | null | undefined
): string {
  return (
    value ?? ""
  ).toLocaleLowerCase();
}

function scoreText(
  value: string | null | undefined,
  query: string
): number {

  const source =
    normalize(value);

  const target =
    normalize(query);

  if (
    !source ||
    !target
  ) {
    return 0;
  }

  if (
    source === target
  ) {
    return 1;
  }

  if (
    source.startsWith(target)
  ) {
    return 0.9;
  }

  if (
    source.includes(target)
  ) {
    return 0.75;
  }

  return 0.1;
}

function scoreGeneric(
  values: Array<string | null | undefined>,
  query: string
): number {

  return Math.min(
    0.99,
    Math.max(
      ...values.map(
        (value) =>
          scoreText(
            value,
            query
          )
      )
    )
  );
}

async function searchContent(
  query: string,
  take: number
): Promise<SearchResult[]> {

  const prisma =
    getAuthPrisma();

  const where:
    Prisma.ContentWhereInput = {
      status: "PUBLISHED",
      OR: [
        {
          title:
            buildContains(query),
        },
        {
          summary:
            buildContains(query),
        },
        {
          body:
            buildContains(query),
        },
        {
          slug:
            buildContains(query),
        },
      ],
    };

  const rows =
    await prisma.content.findMany({
      where,
      orderBy: [
        {
          publishedAt:
            "desc",
        },
        {
          updatedAt:
            "desc",
        },
      ],
      take,
    });

  return rows.map(
    (row) => ({
      id:
        row.id,
      entity:
        "content",
      title:
        row.title,
      subtitle:
        row.summary,
      slug:
        row.slug,
      score:
        scoreGeneric(
          [
            row.title,
            row.summary,
            row.body,
            row.slug,
          ],
          query
        ),
      updatedAt:
        row.updatedAt.toISOString(),
      metadata: {
        kind:
          row.kind,
        status:
          row.status,
        localeId:
          row.localeId,
      },
    })
  );
}

async function searchSources(
  query: string,
  take: number
): Promise<SearchResult[]> {

  const prisma =
    getAuthPrisma();

  const where:
    Prisma.SourceWhereInput = {
      isActive: true,
      OR: [
        {
          name:
            buildContains(query),
        },
        {
          publisher:
            buildContains(query),
        },
        {
          description:
            buildContains(query),
        },
        {
          url:
            buildContains(query),
        },
      ],
    };

  const rows =
    await prisma.source.findMany({
      where,
      orderBy: {
        updatedAt:
          "desc",
      },
      take,
    });

  return rows.map(
    (row) => ({
      id:
        row.id,
      entity:
        "source",
      title:
        row.name,
      subtitle:
        row.publisher,
      slug:
        row.url,
      score:
        scoreGeneric(
          [
            row.name,
            row.publisher,
            row.description,
            row.url,
          ],
          query
        ),
      updatedAt:
        row.updatedAt.toISOString(),
      metadata: {
        type:
          row.type,
      },
    })
  );
}

async function searchTaxonomy(
  query: string,
  take: number
): Promise<SearchResult[]> {

  const prisma =
    getAuthPrisma();

  const where:
    Prisma.TaxonomyTermWhereInput = {
      OR: [
        {
          key:
            buildContains(query),
        },
        {
          label:
            buildContains(query),
        },
      ],
    };

  const rows =
    await prisma.taxonomyTerm.findMany({
      where,
      orderBy: {
        updatedAt:
          "desc",
      },
      take,
    });

  return rows.map(
    (row) => ({
      id:
        row.id,
      entity:
        "taxonomy",
      title:
        row.label,
      subtitle:
        row.key,
      slug:
        row.key,
      score:
        scoreGeneric(
          [
            row.key,
            row.label,
          ],
          query
        ),
      updatedAt:
        row.updatedAt.toISOString(),
      metadata: {
        kind:
          row.kind,
        parentId:
          row.parentId,
      },
    })
  );
}

async function searchKnowledge(
  query: string,
  take: number
): Promise<SearchResult[]> {

  const prisma =
    getAuthPrisma();

  const where:
    Prisma.KnowledgeNodeWhereInput = {
      OR: [
        {
          key:
            buildContains(query),
        },
        {
          label:
            buildContains(query),
        },
        {
          description:
            buildContains(query),
        },
      ],
    };

  const rows =
    await prisma.knowledgeNode.findMany({
      where,
      orderBy: {
        updatedAt:
          "desc",
      },
      take,
    });

  return rows.map(
    (row) => ({
      id:
        row.id,
      entity:
        "knowledge",
      title:
        row.label,
      subtitle:
        row.key,
      slug:
        row.key,
      score:
        scoreGeneric(
          [
            row.key,
            row.label,
            row.description,
          ],
          query
        ),
      updatedAt:
        row.updatedAt.toISOString(),
      metadata: {
        nodeType:
          row.nodeType,
      },
    })
  );
}

async function searchIntelligence(
  query: string,
  take: number
): Promise<SearchResult[]> {

  const prisma =
    getAuthPrisma();

  const where:
    Prisma.IntelligenceRecordWhereInput = {
      OR: [
        {
          key:
            buildContains(query),
        },
        {
          title:
            buildContains(query),
        },
        {
          summary:
            buildContains(query),
        },
      ],
    };

  const rows =
    await prisma.intelligenceRecord.findMany({
      where,
      orderBy: {
        recordedAt:
          "desc",
      },
      take,
    });

  return rows.map(
    (row) => ({
      id:
        row.id,
      entity:
        "intelligence",
      title:
        row.title,
      subtitle:
        row.summary,
      slug:
        row.key,
      score:
        scoreGeneric(
          [
            row.key,
            row.title,
            row.summary,
          ],
          query
        ),
      updatedAt:
        row.updatedAt.toISOString(),
      metadata: {
        type:
          row.type,
        confidence:
          row.confidence === null
            ? null
            : row.confidence.toString(),
        recordedAt:
          row.recordedAt.toISOString(),
      },
    })
  );
}

export const searchRepository = {

  async search(
    input: SearchInput
  ): Promise<SearchResult[]> {

    const take =
      Math.min(
        100,
        Math.max(
          20,
          input.pageSize * 3
        )
      );

    const tasks:
      Promise<SearchResult[]>[] = [];

    for (
      const entity
      of input.entities
    ) {

      if (
        entity === "content"
      ) {
        tasks.push(
          searchContent(
            input.query,
            take
          )
        );
      }

      if (
        entity === "source"
      ) {
        tasks.push(
          searchSources(
            input.query,
            take
          )
        );
      }

      if (
        entity === "taxonomy"
      ) {
        tasks.push(
          searchTaxonomy(
            input.query,
            take
          )
        );
      }

      if (
        entity === "knowledge"
      ) {
        tasks.push(
          searchKnowledge(
            input.query,
            take
          )
        );
      }

      if (
        entity === "intelligence"
      ) {
        tasks.push(
          searchIntelligence(
            input.query,
            take
          )
        );
      }
    }

    const groups =
      await Promise.all(
        tasks
      );

    return groups.flat();
  },
};