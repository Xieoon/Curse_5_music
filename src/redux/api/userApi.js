import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/user",
  }),
  endpoints: (builder) => ({
    getLogin: builder.mutation({
      query: (body) => ({
        url: "/login/",
        method: "POST",
        body,
      }),
    }),
    getReg: builder.mutation({
      query: (body) => ({
        url: "/signup/",
        method: "POST",
        body,
      }),
    }),
    getToken: builder.mutation({
      query: (body) => ({
        url: "/token/",
        method: "POST",
        body,
      }),
    }),
    refreshToken: builder.mutation({
      query: (body) => ({
        url: "/token/refresh/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetLoginMutation,
  useGetRegMutation,
  useGetTokenMutation,
  useRefreshTokenMutation,
} = userApi;
