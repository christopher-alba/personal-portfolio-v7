import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { createClient } from "contentful";

export const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE,
  environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT, // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
