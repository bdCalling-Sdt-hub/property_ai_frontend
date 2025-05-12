import { baseApi } from "../../baseApi/baseApi";
const chatApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // chatHistory
    chatHistory: builder.query({
      query: () => ({
        url: "/property-chat/get-chat-history",
        method: "GET",
      }),
      providesTags:["chats"]
    }),
    // chatHistory
    previousChat: builder.query({
      query: (id) => ({
        url: `/property-chat/get-chats-of-specific-conversation-with-pagination?page=1&limit=10&conversationId=${id}`,
        method: "GET",
      })
    }),
    // chatHistory
    sendMessage: builder.mutation({
      query: (data) => ({
        url: `/property-chat/chat-about-property-2`,
        method: "POST",
        body:data
      }),
      invalidatesTags:['chats']
    }),
    // getBlogs
    getBlogs: builder.query({
      query: () => ({
        url: `/property-blog/get-property-blog-data-with-pagination`,
        method: "GET",
      }),
    }),
    // getBlog
    getBlog: builder.query({
      query: (id) => ({
        url: `/property-blog/get-single-property-blog-data/${id}`,
        method: "GET",
      }),
    }),
    // getBlog
    deleteChatsHistory: builder.mutation({
      query: () => ({
        url: `/property-chat/history/delete/all`,
        method: "POST",
      }),
      invalidatesTags : ["chats"]
    }),
  }),
});

export const {
  useChatHistoryQuery,
  usePreviousChatQuery,
  useSendMessageMutation,
  useGetBlogsQuery,
  useGetBlogQuery,
  useDeleteChatsHistoryMutation
} = chatApi;
