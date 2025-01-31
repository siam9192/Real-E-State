"use server";

import axiosInstance from "@/axios-instance";
import { IUser } from "@/types/user.type";
import { cookies } from "next/headers";

export const getAccessToken = async () => {
  return (await cookies()).get("accessToken")?.value || null;
};

export const getCurrentUser = async () => {
  try {
    const { data } = await axiosInstance.get("/profiles/current-user");
    return data.data as IUser;
  } catch (error) {
    return null;
  }
};
