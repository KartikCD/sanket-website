import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { App } from "./App";
import { initAnalytics } from "./analytics";

// Initialize analytics services on application startup
initAnalytics();

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
