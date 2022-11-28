import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RootStateProvider } from "./stores/RootStateContextValue";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RootStateProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </RootStateProvider>
  </React.StrictMode>
);
