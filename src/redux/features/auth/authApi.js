import { baseApi } from "../../baseApi/baseApi";


const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //login
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: data,
      }),
    }),
    // google login 
    googleLogin: builder.mutation({
      query: (data) => ({
        url: "/auth/sign-up-or-in-with-google",
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: data,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: "/auth/verify-otp",
        method: "POST",
        body: data,
      }),
    }),
    forgetOtpVerify: builder.mutation({
      query: (data) => ({
        url: "/auth/verify-forgot-password-otp",
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/change-password-of-forgot-password",
        method: "POST",
        body: data,
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/change-password-in-settings-3",
        method: "POST",
        body: data,
      }),
    }),
   
  }),
});

export const {
  useLoginMutation,
  useGoogleLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useForgotPasswordMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
  useForgetOtpVerifyMutation,
  useChangePasswordMutation
} = authApi;
