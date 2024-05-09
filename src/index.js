import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { InfoProvider } from "./context/Context";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <InfoProvider>
    <GoogleOAuthProvider clientId="608712285681-s2iijpdiev6gfd9qtg8fc1v1sg24v2e6.apps.googleusercontent.com">
      <App />
      <ToastContainer />
    </GoogleOAuthProvider>
  </InfoProvider>
  </BrowserRouter>
);
