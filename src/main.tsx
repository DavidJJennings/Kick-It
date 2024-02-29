import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BasketContextProvider } from "./Contexts/BasketContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BasketContextProvider>
      <App />
    </BasketContextProvider>
  </React.StrictMode>
);
