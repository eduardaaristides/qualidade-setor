import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { EditModeProvider } from "./context/EditMode";
import "./app.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <EditModeProvider>
      <App />
    </EditModeProvider>
  </React.StrictMode>
);