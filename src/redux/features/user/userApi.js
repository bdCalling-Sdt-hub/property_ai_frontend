import { baseApi } from "../../baseApi/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyProfile : builder.query({
      query:()=>({
        url:"/auth/get-own-data-with-authtoken",
        method:"GET"
      }),
      providesTags:["profile"]
  }),

  updateProfile : builder.mutation({
    query:(data)=>({
      url:"/auth/update-profile",
      method:"POST",
      body:data
    }),
    invalidatesTags:["profile"]
  })
  }),
});

export const { useGetMyProfileQuery, useUpdateProfileMutation  } = userApi;
