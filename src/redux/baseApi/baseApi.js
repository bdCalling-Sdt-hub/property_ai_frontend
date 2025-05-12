import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/api/v1`,
    // baseUrl: `https://706b-103-174-189-193.ngrok-free.app/api/v1`,
    
// https://apurbo7000.sobhoy.com/api/v1/auth/sign-in
    // baseUrl: "http://64.226.68.85:8000/v1",
    prepareHeaders: (headers, { getState }) => {
      // Retrieve the token from your store or local storage
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User", "Categories", "admin", "chats", "profile"],
  endpoints: () => ({}),
});
