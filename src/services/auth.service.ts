'use server';

import axiosInstance from '@/axios-instance';
import { IName } from '@/reuse/type';
import { IResponse } from '@/types/response.type';
import { cookies } from 'next/headers';

const Cookies = await cookies();

interface ISignUpData {
  email: string;
  password: string;
  name: IName;
  role: 'Member';
}

interface ISignInData {
  email: string;
  password: string;
}

export const signUp = async (data: ISignUpData) => {
  try {
    const { data: resData } = await axiosInstance.post(
      '/auth/signup-request',
      data
    );
    return resData as IResponse<null>;
  } catch (error: any) {
    return error?.response?.data as IResponse<null>;
  }
};

export const signIn = async (data: ISignInData) => {
  try {
    const { data: resData } = await axiosInstance.post('/auth/login', data);
    if (resData.success) {
      (await cookies()).set('accessToken', resData.data.accessToken, {
        maxAge: 30 * 24 * 60 * 60,
      });
      (await cookies()).set('refreshToken', resData.data.refreshToken, {
        maxAge: 30 * 24 * 60 * 60,
      });
    }
    return resData as IResponse<null>;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const googleCallBack = async (accessToken: string) => {
  try {
    const { data } = await axiosInstance.post('/auth/google-callback', {
      accessToken,
    });
    (await cookies()).set('accessToken', data?.data?.accessToken);
    (await cookies()).set('refreshToken', data?.data?.refreshToken);
    return data as IResponse<null>;
  } catch (error: any) {
    return error?.response as IResponse<null>;
  }
};
