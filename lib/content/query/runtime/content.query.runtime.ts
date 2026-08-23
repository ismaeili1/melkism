/**
 * MELKISM Content Query Runtime
 *
 * v0.2.8
 *
 * Executes content queries through storage boundary.
 *
 * This runtime does not know:
 *
 * - database
 * - search engine
 * - API
 *
 * It only coordinates query execution.
 */


import type {
  ContentQueryRequest,
  ContentQueryResult,
} from "../contracts";


import type {
  ContentStorageRuntime,
} from "../../runtime/content.storage.runtime";



export class ContentQueryRuntime {


  constructor(
    private readonly storage:
      ContentStorageRuntime,
  ) {}



  async query(
    request: ContentQueryRequest,
  ): Promise<ContentQueryResult> {


    const items =
      await this.storage.list();


    let result =
      items;



    if(request.filter?.language){

      result =
        result.filter(
          item =>
            item.language ===
            request.filter?.language,
        );

    }



    const total =
      result.length;



    if(request.pagination){

      const {
        limit,
        offset,
      } =
      request.pagination;


      result =
        result.slice(
          offset,
          offset + limit,
        );

    }



    return {

      items:
        result.map(item => ({

          id:item.id,

          title:item.title,

          language:item.language,

        })),

      total,

    };

  }

}

