import { baseApi } from "../../baseApi/baseApi";
const CustomersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCustomer: builder.mutation({
      query: (formData) => ({
        url: "/members/add-member",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Categories"],
    }),
    getCustomerById: builder.query({
      query: (id) => ({
        url: `/members/${id}`,
        method: "GET",
      }),
    }),
    getAllCustomers: builder.query({
      query: () => ({
        url: "/members/all/customer",
        method: "GET",
      }),
      providesTags: ["Categories"],
    }),
    updateCustomer: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/members/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["Categories"],
    }),
  }),
});

export const {
  useUpdateCustomerMutation,
  useGetCustomerByIdQuery,
  useAddCustomerMutation,
  useGetAllCustomersQuery,
} = CustomersApi;
