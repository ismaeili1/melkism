import {
  getAuthPrisma,
} from "@/lib/auth/prisma";

export const contentRepository = {
  async findById(
    id: string
  ) {
    return getAuthPrisma()
      .content
      .findUnique({
        where: {
          id,
        },
      });
  },

  async findBySlug(
    slug: string
  ) {
    return getAuthPrisma()
      .content
      .findUnique({
        where: {
          slug,
        },
      });
  },

  async listMany(input: {
    skip: number;
    take: number;
    where: {
      status:
        | "DRAFT"
        | "REVIEW"
        | "PUBLISHED"
        | "ARCHIVED";
      kind?: ContentKindValue;
      localeId?: string;
      OR?: Array<{
        title?: {
          contains: string;
          mode: "insensitive";
        };
        summary?: {
          contains: string;
          mode: "insensitive";
        };
      }>;
    };
  }) {
    const prisma =
      getAuthPrisma();

    const [
      items,
      total,
    ] = await Promise.all([
      prisma.content.findMany({
        where: input.where,
        skip: input.skip,
        take: input.take,
        orderBy: {
          updatedAt: "desc",
        },
      }),
      prisma.content.count({
        where: input.where,
      }),
    ]);

    return {
      items,
      total,
    };
  },

  async create(input: {
    slug: string;
    title: string;
    summary?: string;
    body?: string;
    kind: ContentKindValue;
    localeId: string;
    authorId: string;
  }) {
    return getAuthPrisma()
      .content
      .create({
        data: {
          slug: input.slug,
          title: input.title,
          summary: input.summary,
          body: input.body,
          kind: input.kind,
          status: "DRAFT",
          localeId: input.localeId,
          authorId: input.authorId,
        },
      });
  },

  async update(
    id: string,
    input: {
      slug?: string;
      title?: string;
      summary?: string;
      body?: string;
      kind?: ContentKindValue;
      localeId?: string;
    }
  ) {
    return getAuthPrisma()
      .content
      .update({
        where: {
          id,
        },
        data: input,
      });
  },

  async publish(
    id: string
  ) {
    return getAuthPrisma()
      .content
      .update({
        where: {
          id,
        },
        data: {
          status: "PUBLISHED",
          publishedAt:
            new Date(),
        },
      });
  },

  async delete(
    id: string
  ) {
    return getAuthPrisma()
      .content
      .delete({
        where: {
          id,
        },
      });
  },
};

type ContentKindValue =
  | "ARTICLE"
  | "NEWS"
  | "REPORT"
  | "RESEARCH"
  | "DATA"
  | "MARKET"
  | "ARCHITECTURE";
