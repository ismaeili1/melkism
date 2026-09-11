import {
  badRequest,
  conflict,
  notFound,
} from "@/lib/api/core/errors";

import {
  contentRepository,
} from "@/lib/cms/content/content.repository";

import type {
  ContentCreateInput,
  ContentListInput,
  ContentListResult,
  ContentUpdateInput,
} from "@/lib/cms/content/content.types";

export const contentService = {
  async list(
    input: ContentListInput
  ): Promise<
    ContentListResult<unknown>
  > {
    const skip =
      (input.page - 1) *
      input.pageSize;

    const where: {
      status:
        | "DRAFT"
        | "REVIEW"
        | "PUBLISHED"
        | "ARCHIVED";
      kind?: ContentCreateInput["kind"];
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
    } = {
      status:
        input.includeDrafts
          ? "DRAFT"
          : "PUBLISHED",
    };

    if (input.kind) {
      where.kind =
        input.kind;
    }

    if (input.localeId) {
      where.localeId =
        input.localeId;
    }

    if (input.search) {
      where.OR = [
        {
          title: {
            contains:
              input.search,
            mode: "insensitive",
          },
        },
        {
          summary: {
            contains:
              input.search,
            mode: "insensitive",
          },
        },
      ];
    }

    const result =
      await contentRepository
        .listMany({
          skip,
          take:
            input.pageSize,
          where,
        });

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
    id: string
  ) {
    const content =
      await contentRepository
        .findById(id);

    if (!content) {
      throw notFound(
        "Content not found."
      );
    }

    return content;
  },

  async create(
    input: ContentCreateInput,
    authorId: string
  ) {
    const existing =
      await contentRepository
        .findBySlug(
          input.slug
        );

    if (existing) {
      throw conflict(
        "Content slug already exists."
      );
    }

    return contentRepository.createWithRevision({
      ...input,
      authorId,
    });
  },

  async update(
    id: string,
    input: ContentUpdateInput
  ) {
    const current =
      await contentRepository
        .findById(id);

    if (!current) {
      throw notFound(
        "Content not found."
      );
    }

    if (input.slug) {
      const existing =
        await contentRepository
          .findBySlug(
            input.slug
          );

      if (
        existing &&
        existing.id !== id
      ) {
        throw conflict(
          "Content slug already exists."
        );
      }
    }

    return contentRepository.updateWithRevision(
      id,
      input
    );
  },

  async publish(
    id: string
  ) {
    const current =
      await contentRepository
        .findById(id);

    if (!current) {
      throw notFound(
        "Content not found."
      );
    }

    if (
      !current.title.trim() ||
      !current.slug.trim() ||
      !current.body?.trim()
    ) {
      throw badRequest(
        "Content must have a title, slug and body before publishing."
      );
    }

    if (
      current.status ===
      "PUBLISHED"
    ) {
      return current;
    }

    if (
      current.status !==
        "DRAFT" &&
      current.status !==
        "REVIEW"
    ) {
      throw badRequest(
        "Only draft or review content can be published."
      );
    }

    return contentRepository.publish(
      id
    );
  },

  async delete(
    id: string
  ) {
    const current =
      await contentRepository
        .findById(id);

    if (!current) {
      throw notFound(
        "Content not found."
      );
    }

    return contentRepository.delete(
      id
    );
  },
};
