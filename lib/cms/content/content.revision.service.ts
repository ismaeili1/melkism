import {
  badRequest,
  notFound,
} from "@/lib/api/core/errors";

import {
  contentRevisionRepository,
} from "@/lib/cms/content/content.revision.repository";

import type {
  ContentRevisionListResult,
} from "@/lib/cms/content/content.revision.types";

export const contentRevisionService = {
  async list(
    contentId: string,
    input: {
      page: number;
      pageSize: number;
    }
  ): Promise<
    ContentRevisionListResult<unknown>
  > {
    const skip =
      (input.page - 1) *
      input.pageSize;

    const result =
      await contentRevisionRepository
        .listByContentId(
          contentId,
          {
            skip,
            take:
              input.pageSize,
          }
        );

    return {
      items:
        result.items,
      pagination: {
        page:
          input.page,
        pageSize:
          input.pageSize,
        total:
          result.total,
        totalPages:
          Math.ceil(
            result.total /
              input.pageSize
          ),
      },
    };
  },

  async getById(
    revisionId: string
  ) {
    const revision =
      await contentRevisionRepository
        .getById(
          revisionId
        );

    if (!revision) {
      throw notFound(
        "Content revision not found."
      );
    }

    return revision;
  },

  async restore(
    contentId: string,
    revisionId: string
  ) {
    const revision =
      await contentRevisionRepository
        .getById(
          revisionId
        );

    if (!revision) {
      throw notFound(
        "Content revision not found."
      );
    }

    if (
      revision.contentId !==
      contentId
    ) {
      throw badRequest(
        "Revision does not belong to this content."
      );
    }

    const restored =
      await contentRevisionRepository
        .restoreWithRevision(
          contentId,
          revisionId
        );

    if (!restored) {
      throw notFound(
        "Content not found."
      );
    }

    return restored;
  },
};