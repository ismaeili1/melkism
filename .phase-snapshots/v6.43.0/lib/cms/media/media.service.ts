import {
  mediaRepository,
} from "@/lib/cms/media/media.repository";

import type {
  MediaCreateInput,
  MediaListInput,
  MediaUpdateInput,
} from "@/lib/cms/media/media.types";

export const mediaService = {

  async list(
    input: MediaListInput
  ) {
    const result =
      await mediaRepository.list(
        input
      );

    return {
      items:
        result.items,
      total:
        result.total,
      page:
        input.page,
      pageSize:
        input.pageSize,
    };
  },

  async getById(
    id: string
  ) {
    return mediaRepository.findById(
      id
    );
  },

  async create(
    input: MediaCreateInput
  ) {
    return mediaRepository.create(
      input
    );
  },

  async update(
    id: string,
    input: MediaUpdateInput
  ) {
    return mediaRepository.update(
      id,
      input
    );
  },

  async delete(
    id: string
  ) {
    return mediaRepository.delete(
      id
    );
  },

  async listContentMedia(
    contentId: string
  ) {
    return mediaRepository.listContentMedia(
      contentId
    );
  },

  async attachToContent(
    contentId: string,
    mediaId: string,
    sortOrder: number
  ) {
    return mediaRepository.attachToContent(
      contentId,
      mediaId,
      sortOrder
    );
  },

  async updateContentMedia(
    contentId: string,
    mediaId: string,
    sortOrder: number
  ) {
    return mediaRepository.updateContentMedia(
      contentId,
      mediaId,
      sortOrder
    );
  },

  async deleteContentMedia(
    contentId: string,
    mediaId: string
  ) {
    return mediaRepository.deleteContentMedia(
      contentId,
      mediaId
    );
  },
};
