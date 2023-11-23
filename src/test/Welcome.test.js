import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Welcome from "../components/utilities/Welcome/Welcome";
import { BrowserRouter as Router } from "react-router-dom";

describe("Welcome.jsx", () => {
  test("should have the class passed in props", () => {
    render(
      <Router>
        <Welcome cn={"class"} text={"This is a text "} />
      </Router>
    );
    const welcomeElemeent = screen.getByTestId("welcome");
    expect(welcomeElemeent).toHaveClass("class");
    expect(screen.getByText("This is a text"));
  });
});
