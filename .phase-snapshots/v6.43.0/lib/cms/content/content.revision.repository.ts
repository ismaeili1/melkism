import {
  getAuthPrisma,
} from "@/lib/auth/prisma";

export const contentRevisionRepository = {
  async listByContentId(
    contentId: string,
    input: {
      skip: number;
      take: number;
    }
  ) {
    const prisma =
      getAuthPrisma();

    const [
      items,
      total,
    ] = await Promise.all([
      prisma.contentRevision.findMany({
        where: {
          contentId,
        },
        orderBy: {
          version: "desc",
        },
        skip: input.skip,
        take: input.take,
      }),
      prisma.contentRevision.count({
        where: {
          contentId,
        },
      }),
    ]);

    return {
      items,
      total,
    };
  },

  async getById(
    revisionId: string
  ) {
    return getAuthPrisma()
      .contentRevision
      .findUnique({
        where: {
          id: revisionId,
        },
      });
  },

  async restoreWithRevision(
    contentId: string,
    revisionId: string
  ) {
    const prisma =
      getAuthPrisma();

    return prisma.$transaction(
      async (tx) => {
        const revision =
          await tx.contentRevision.findUnique({
            where: {
              id: revisionId,
            },
          });

        if (
          !revision ||
          revision.contentId !==
            contentId
        ) {
          return null;
        }

        const content =
          await tx.content.findUnique({
            where: {
              id: contentId,
            },
          });

        if (!content) {
          return null;
        }

        const latestRevision =
          await tx.contentRevision.findFirst({
            where: {
              contentId,
            },
            orderBy: {
              version: "desc",
            },
            select: {
              version: true,
            },
          });

        const nextVersion =
          (latestRevision?.version ?? 0) +
          1;

        const restored =
          await tx.content.update({
            where: {
              id: contentId,
            },
            data: {
              title:
                revision.title,
              summary:
                revision.summary,
              body:
                revision.body,
              status:
                "DRAFT",
              publishedAt:
                null,
            },
          });

        await tx.contentRevision.create({
          data: {
            contentId,
            version:
              nextVersion,
            title:
              revision.title,
            summary:
              revision.summary,
            body:
              revision.body,
          },
        });

        return restored;
      }
    );
  },
};