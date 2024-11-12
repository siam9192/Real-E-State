export interface IResponse<T> {
  data: T;
  meta: IMeta;
  error?: IError;
  success: boolean;
  message: string;
}

export interface IError {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
}

export interface IMeta {
  limit: number;
  page: number;
  pages: number[];
  total: number;
  totalPage: number;
}

export interface IParam {
  name: string;
  value: string | number | null | undefined;
}
