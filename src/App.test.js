import { render, screen } from "@testing-library/react";
import App from "./BezCoders/Tutorials/App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(<App />);
  expect(linkElement).toBeInTheDocument();
});
