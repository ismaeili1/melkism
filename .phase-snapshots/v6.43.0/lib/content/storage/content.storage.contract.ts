/**
 * MELKISM Content Storage Contract
 *
 * v0.2.7
 *
 * Defines the storage boundary for content.
 *
 * This contract does not select:
 * - database technology
 * - ORM
 * - filesystem
 * - external storage
 *
 * Concrete persistence implementations remain outside
 * this boundary.
 */


export type StoredContent = {

  id: string;

  sourceId: string;

  title: string;

  description?: string;

  content: string;

  language: string;

  tags: string[];

  metadata:
  Record<string, unknown>;

};



export type CreateStoredContentInput =
Omit<StoredContent, "id">;



export type UpdateStoredContentInput =
Partial<
Omit<StoredContent, "id">
>;



export interface ContentStorageContract {


  save(
    input: CreateStoredContentInput
  ):
  Promise<StoredContent>;



  findById(
    id: string
  ):
  Promise<StoredContent | undefined>;



  update(
    id: string,
    input: UpdateStoredContentInput
  ):
  Promise<StoredContent>;



  delete(
    id:string
  ):
  Promise<boolean>;


  list():
  Promise<readonly StoredContent[]>;



}
