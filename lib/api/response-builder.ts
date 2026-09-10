import type {
  ApiResponse,
} from "./types/api.types";


export function apiSuccess<T>(
  data:T
): ApiResponse<T> {


  return {

    status:"success",

    data,

    timestamp:new Date().toISOString(),

  };

}



export function apiFailure(
  message:string
): ApiResponse<never> {


  return {

    status:"error",

    message,

    timestamp:new Date().toISOString(),

  };

}

