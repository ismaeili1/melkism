export type ApiSuccess<T> = {
  ok: true;
  data: T;
  requestId: string;
};

export type ApiFailure = {
  ok: false;
  error: {
    code: string;
    message: string;
  };
  requestId: string;
};

export type ApiResult<T> =
  | ApiSuccess<T>
  | ApiFailure;

export type ApiRequestContext = {
  requestId: string;
  method: string;
  path: string;
  authenticated: boolean;
  userId?: string;
};

export type PaginationInput = {
  page: number;
  pageSize: number;
};

export type PaginationMeta = {
  page: number;
  pageSize: number;
  total?: number;
};

export type PaginatedData<T> = {
  items: readonly T[];
  pagination: PaginationMeta;
};
