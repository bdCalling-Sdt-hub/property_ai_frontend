import { baseApi } from "../../baseApi/baseApi";
const TaskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    taskAdd: builder.mutation({
      query: (data) => ({
        url: "/tasks/sub-task",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Categories"],
    }),
    mainTaskAdd: builder.mutation({
      query: (data) => ({
        url: "/tasks/create-task",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Categories"],
    }),
    getMainTaskById: builder.query({
      query: (id) => ({
        url: `/tasks/task/${id}`,
        method: "GET",
      }),
    }),
    getAllTasks: builder.query({
      query: () => ({
        url: "/tasks/all",
        method: "GET",
      }),
      providesTags: ["Categories"],
    }),
    getAllRejectedTasks: builder.query({
      query: () => ({
        url: "/tasks/all/rejected-task",
        method: "GET",
      }),
    }),
    
    updateMainTask: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/tasks/update-task/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["Categories"],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/delete-task/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories"],
    }),
    deleteSubTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/single-task/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories"],
    }),
    createSubTask: builder.mutation({
      query: (data) => ({
        url: "/tasks/sub-task",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllRejectedTasksQuery,
  useGetMainTaskByIdQuery,
  useUpdateMainTaskMutation,
  useMainTaskAddMutation,
  useTaskAddMutation,
  useGetAllTasksQuery,
  useAddAdminMutation,
  useAddCategoryMutation,
  useUpdateAdminMutation,
  useGetAdminByIdQuery,
  useDeleteTaskMutation,
  useDeleteSubTaskMutation,
} = TaskApi;
