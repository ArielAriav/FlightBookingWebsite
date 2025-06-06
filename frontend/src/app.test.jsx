// src/App.test.jsx
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders booking title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Flight Booking/i);
  expect(linkElement).toBeInTheDocument();
});
