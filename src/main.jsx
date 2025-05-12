import { LoadScript } from "@react-google-maps/api";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import "./index.css";
import { store } from "./redux/store";
import router from "./routes/routes";
import { VITE_GOOGLE_MAP_API_KEY } from "./config/environment_variables";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoadScript googleMapsApiKey={VITE_GOOGLE_MAP_API_KEY}>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster richColors position="top-center" />
      </Provider>
    </LoadScript>
  </React.StrictMode>
);
