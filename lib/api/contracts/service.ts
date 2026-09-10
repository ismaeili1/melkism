export type ServiceResult<T> = {
  data: T;
};

export interface ServiceErrorShape {
  code: string;
  message: string;
}
