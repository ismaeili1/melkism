import {
  badRequest,
} from "@/lib/api/core/errors";

import {
  contentRepository,
} from "@/lib/cms/content/content.repository";

import {
  contentService,
} from "@/lib/cms/content/content.service";

export const contentWorkflowService = {
  async submitForReview(
    id: string
  ) {
    const content =
      await contentService.getById(
        id
      );

    if (
      content.status !==
      "DRAFT"
    ) {
      throw badRequest(
        "Only draft content can be submitted for review."
      );
    }

    return contentRepository.updateStatus(
      id,
      "REVIEW"
    );
  },

  async archive(
    id: string
  ) {
    const content =
      await contentService.getById(
        id
      );

    if (
      content.status !==
      "PUBLISHED"
    ) {
      throw badRequest(
        "Only published content can be archived."
      );
    }

    return contentRepository.updateStatus(
      id,
      "ARCHIVED"
    );
  },
};