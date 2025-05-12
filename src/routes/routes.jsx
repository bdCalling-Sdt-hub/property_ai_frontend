import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ForgetPassword from "../page/Auth/ForgetPassword/ForgetPassword";
import NewPassword from "../page/Auth/NewPassword/NewPassword";
import Otp from "../page/Auth/Otp/Otp";
import Signin from "../page/Auth/SignIn/SignIn";
// import AdminRoutes from "./AdminRoutes";
// import UserPage from "../page/user/UserPage";
// import PropertyPage from "../page/PropertyPage/PropertyPage";
import Register from "../page/Auth/Register/Register";
import SocialMedia from "../page/Auth/SocialMedia/SocialMedia";
import ChangePasswordPage from "../page/ChangePasswordPage/ChangePasswordPage";
import ChatScreenPage from "../page/ChatScreenPage/ChatScreenPage";
import DiscoverDetailsPage from "../page/DiscoverDetails/DiscoverDetailsPage";
import DiscoverFindPage from "../page/DiscoverFindPage/DiscoverFindPage";
import FAQsPage from "../page/FAQsPage/FAQsPage";
import HistoricalSalePage from "../page/HistoricalSalePage/HistoricalSalePage";
import HomePages from "../page/HomePages/HomePages";
import PersonalInfoPage from "../page/PersonalInfoPage/PersonalInfoPage";
import PrivacyTermsPage from "../page/PrivacyTermsPage/PrivacyTermsPage";
import PropertyValuePage from "../page/PropertyValuePage/PropertyValuePage";
import AdminRoutes from "./AdminRoutes";
import ForgetOtpValidation from "../page/Auth/Otp/ForgetOtpValidation";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <AdminRoutes >
      <MainLayout />
      // </AdminRoutes>
    ),
    errorElement: <h1>Error</h1>,
    children: [
      {
        index: true,
        element: <HomePages />,
      },
      {
        path: "chat",
        element: <ChatScreenPage />,
      },
      // {
      //   path: "users",
      //   element: <UserPage />,
      // },
      // {
      //   path: "property",
      //   element: <PropertyPage />,
      // },
      // {
      //   path: "/history/:id",
      //   element: <mainContainer />,
      // },
      {
        path: "Profile",
        element:<AdminRoutes> <PersonalInfoPage/></AdminRoutes>,
      },
      {
        path: "/ChangePassword",
        element:<AdminRoutes> <ChangePasswordPage/></AdminRoutes>,
      },
      {
        path: 'PrivacyTerms',
        element: <PrivacyTermsPage />,
      },
      {
        path: 'FAQ',
        element: <FAQsPage />,
      },
      {
         path: "HistoricalSale",
         element: <HistoricalSalePage />,
      },
      {
        path: "PropertyValue",
        element: <PropertyValuePage/>,
      },
      {
        path: "DiscoverFind",
        element: <DiscoverFindPage/>,
      },
      {
        path:'Discover/:id',
        element: <DiscoverDetailsPage/>,
      }
    ],
  },
  {
    path: "/auth",
    errorElement: <h1>Auth Error</h1>,
    children: [
      {
        index: true,
        element: <SocialMedia/>,
      },
      {
        // '/auth/login'
        path: "login",
        element: <Signin/>
      },
      {
        path: "register",
        element: <Register/>
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "otp/:email",
        element: <Otp />,
      },
      {
        path: "forget-otp-validation/:email",
        element: <ForgetOtpValidation />,
      },
      {
        path: "new-password/:email",
        element: <NewPassword />,
      },
    ],
  },
]);

export default router;
