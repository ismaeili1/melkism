export type ApiStatus =
  | "success"
  | "error";


export interface ApiResponse<T> {

  status: ApiStatus;

  data?: T;

  message?: string;

  timestamp: string;

}


export interface ApiError {

  code: string;

  message: string;

}

