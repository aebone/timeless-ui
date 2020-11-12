import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/components/_assets/styles/GlobalStyle";
import { ThemeDefault } from "../src/components/_assets/styles/ThemeDefault";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={ThemeDefault}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
