import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "store";
import App from "./App";
import { theme } from "./theme";

render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider resetCSS theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
