import { baseApi } from "../../baseApi/baseApi";
const chatApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // chatHistory
    allFaq: builder.query({
      query: () => ({
        url: "/faq",
        method: "GET",
      }),
    }),
    
    // Privacy
    Privacy: builder.query({
      query: () => ({
        url: "/privacy-terms/get-privacy-terms",
        method: "GET",
      }),
    })
    
  }),
});

export const {
useAllFaqQuery,
usePrivacyQuery
} = chatApi;
