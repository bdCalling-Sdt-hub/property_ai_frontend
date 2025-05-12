import { baseApi } from "../../baseApi/baseApi";
const AdminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addAdmin: builder.mutation({
      query: (data) => ({
        url: "/auth/sub-admin",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Categories"],
    }),
    getAdminById: builder.query({
      query: (id) => ({
        url: `/auth/${id}`,  
        method: "GET",
      }),
    }),
    getAllAdmin: builder.query({
      query: () => ({
        url: "/auth/all-admins",
        method: "GET",
      }),
      providesTags: ["Categories"],
    }),
    getBlokeAdmin: builder.query({
      query: () => ({
        url: "/auth/all-block-admins",
        method: "GET",
      }),
      providesTags: ["Categories"],
    }),
   
    updateBlockAdminButton: builder.mutation({
      query: ({id, data}) => ({
        url: `/auth/block/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Categories"],
    }),
    updateAdmin: builder.mutation({
      query: ({id, data}) => ({
        url: `/auth/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Categories"],
    }),

    deleteCategory: builder.mutation({
      query: (id) => {
        console.log(id)
        return {
          url: `/car-brand/getAllCarBrands${id}`,
          method: "DELETE",
        };
      },
       invalidatesTags: ["Categories"],
    }),
  }),
});

export const {
  useAddAdminMutation,
  useUpdateBlockAdminButtonMutation,
  useGetBlokeAdminQuery,
  useGetAllAdminQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateAdminMutation,
  useGetAdminByIdQuery,
} = AdminApi;
