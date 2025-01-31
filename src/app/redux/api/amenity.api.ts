import { IResponse } from "@/types/response.type";
import { baseApi } from "./baseApi";

const amenitiesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAmenities: builder.query({
      query: (params: { searchTerm: string; propertyType: string }) => ({
        url: `/amenities?searchTerm=${params.searchTerm}&propertyType=${params.propertyType}`,
        method: "GET",
      }),
      transformResponse: (response: IResponse<IAmenity[]>) => {
        return {
          data: response.data,
        };
      },
    }),
  }),
});

export const { useGetAmenitiesQuery } = amenitiesApi;
