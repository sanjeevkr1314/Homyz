import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-tt7snaty3e154av6.us.auth0.com"
      clientId="89IrIbQLxHvRSpvFaf8lnkaFxoRtTEDI"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      audience="http://localhost:8000"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
