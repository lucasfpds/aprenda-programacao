import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders Aprenda Programação", () => {
  render(<App />);
  const linkElement = screen.getByText(/Aprenda Programação/i);
  expect(linkElement).toBeInTheDocument();
});
