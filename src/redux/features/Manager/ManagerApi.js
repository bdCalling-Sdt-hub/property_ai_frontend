import { baseApi } from "../../baseApi/baseApi";

const ManagerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addManager: builder.mutation({
      query: (data) => ({
        url: "/members/add-member",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Admins"],
    }),

    getAdminById: builder.query({
      query: (id) => ({
        url: `/auth/${id}`,
        method: "GET",
      }),
      providesTags: ["Admins"],
    }),

    getManagerById: builder.query({
      query: (id) => ({
        url: `/members/${id}`,
        method: "GET",
      }),
      providesTags: ["Managers"],
    }),

    getAllManager: builder.query({
      query: () => ({
        url: "/members/all/manager",
        method: "GET",
      }),
      providesTags: ["Managers"],
    }),
    updateManager: builder.mutation({
      query: ({ data, id }) => ({
        url: `/members/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Managers"],
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/car-brand/getAllCarBrands/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories"],
    }),
  }),
});

export const {
  useUpdateManagerMutation,
  useGetManagerByIdQuery,
  useAddManagerMutation,
  useGetAllManagerQuery,
} = ManagerApi;
