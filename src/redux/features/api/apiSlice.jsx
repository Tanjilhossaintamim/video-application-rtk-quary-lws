import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "/videos",
    }),
    getSingelVideo: builder.query({
      query: (videoId) => `/videos/${videoId}`,
    }),
    getRelatedVideos: builder.query({
      query: ({ title, id }) => {
        const tags = title.split(" ");
        const quaryString = tags.map((tag) => `title_like=${tag}`).join("&");
        return `/videos?${quaryString}&_limit=4&id_ne=${id}`;
      },
    }),
  }),
});

export const {
  useGetVideosQuery,
  useGetSingelVideoQuery,
  useGetRelatedVideosQuery,
} = apiSlice;
