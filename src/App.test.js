import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App component text", () => {
  render(<App />);
  const textElement = screen.getByText(/oi/i);
  expect(textElement).toBeInTheDocument();
});
