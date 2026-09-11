import {
  Prisma,
} from "@/prisma/generated/prisma/client";

import {
  getAuthPrisma,
} from "@/lib/auth/prisma";

import type {
  JsonRecord,
  MediaCreateInput,
  MediaListInput,
  MediaUpdateInput,
} from "@/lib/cms/media/media.types";

function toPrismaJson(
  value: JsonRecord | undefined
): Prisma.InputJsonValue | undefined {
  if (value === undefined) {
    return undefined;
  }

  return JSON.parse(
    JSON.stringify(value)
  ) as Prisma.InputJsonValue;
}

export const mediaRepository = {

  async list(
    input: MediaListInput
  ) {
    const prisma =
      getAuthPrisma();

    const where =
      input.kind
        ? {
            kind: input.kind,
          }
        : undefined;

    const skip =
      (input.page - 1) *
      input.pageSize;

    const [items, total] =
      await Promise.all([
        prisma.mediaAsset.findMany({
          where,
          orderBy: {
            createdAt: "desc",
          },
          skip,
          take:
            input.pageSize,
        }),
        prisma.mediaAsset.count({
          where,
        }),
      ]);

    return {
      items,
      total,
    };
  },

  async findById(
    id: string
  ) {
    const prisma =
      getAuthPrisma();

    return prisma.mediaAsset.findUnique({
      where: {
        id,
      },
    });
  },

  async create(
    input: MediaCreateInput
  ) {
    const prisma =
      getAuthPrisma();

    const metadata =
      toPrismaJson(
        input.metadata
      );

    return prisma.mediaAsset.create({
      data: {
        kind:
          input.kind,
        storageKey:
          input.storageKey,
        url:
          input.url,
        mimeType:
          input.mimeType,
        sizeBytes:
          input.sizeBytes,
        width:
          input.width,
        height:
          input.height,
        metadata,
      },
    });
  },

  async update(
    id: string,
    input: MediaUpdateInput
  ) {
    const prisma =
      getAuthPrisma();

    const data:
      Prisma.MediaAssetUpdateInput = {
        kind:
          input.kind,
        storageKey:
          input.storageKey,
        url:
          input.url,
        mimeType:
          input.mimeType,
        sizeBytes:
          input.sizeBytes,
        width:
          input.width,
        height:
          input.height,
      };

    if (
      input.metadata !== undefined
    ) {
      data.metadata =
        toPrismaJson(
          input.metadata
        );
    }

    return prisma.mediaAsset.update({
      where: {
        id,
      },
      data,
    });
  },

  async delete(
    id: string
  ) {
    const prisma =
      getAuthPrisma();

    return prisma.mediaAsset.delete({
      where: {
        id,
      },
    });
  },

  async attachToContent(
    contentId: string,
    mediaId: string,
    sortOrder: number
  ) {
    const prisma =
      getAuthPrisma();

    return prisma.$transaction(
      async (tx) => {

        await tx.content.findUniqueOrThrow({
          where: {
            id: contentId,
          },
          select: {
            id: true,
          },
        });

        await tx.mediaAsset.findUniqueOrThrow({
          where: {
            id: mediaId,
          },
          select: {
            id: true,
          },
        });

        return tx.contentMedia.upsert({
          where: {
            contentId_mediaId: {
              contentId,
              mediaId,
            },
          },
          create: {
            contentId,
            mediaId,
            sortOrder,
          },
          update: {
            sortOrder,
          },
        });
      }
    );
  },

  async listContentMedia(
    contentId: string
  ) {
    const prisma =
      getAuthPrisma();

    return prisma.contentMedia.findMany({
      where: {
        contentId,
      },
      include: {
        media: true,
      },
      orderBy: [
        {
          sortOrder: "asc",
        },
        {
          createdAt: "asc",
        },
      ],
    });
  },

  async updateContentMedia(
    contentId: string,
    mediaId: string,
    sortOrder: number
  ) {
    const prisma =
      getAuthPrisma();

    return prisma.contentMedia.update({
      where: {
        contentId_mediaId: {
          contentId,
          mediaId,
        },
      },
      data: {
        sortOrder,
      },
      include: {
        media: true,
      },
    });
  },

  async deleteContentMedia(
    contentId: string,
    mediaId: string
  ) {
    const prisma =
      getAuthPrisma();

    return prisma.contentMedia.delete({
      where: {
        contentId_mediaId: {
          contentId,
          mediaId,
        },
      },
    });
  },
};
