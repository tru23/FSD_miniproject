import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-paczqfoazon7jk64.us.auth0.com"
      clientId="9YLH7hCJu5uAVygaWwCgY3We6DwdCDXI"
      authorizationParams={{
        redirect_uri: "https://fsd-mini-project-mjqn.vercel.app",
        audience: "http://localhost:8000/",
      }}
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
