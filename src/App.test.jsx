import { describe, test, expect, beforeEach } from "vitest";
import Welcome from "./components/utilities/Welcome/Welcome";
import { render, screen } from "@testing-library/react";

describe("App test show", () => {
  test("App test", () => {
    // Render el componente Welcome utilizando @testing-library/react
    beforeEach(() => {
      render(
        <Welcome
          className={"home"}
          text={"Connecting People Through Unforgettable Experiences."}
        />
      );
    });

    // Realiza una aserción utilizando @testing-library/react
    expect(
      screen.getByText("Connecting People Through Unforgettable Experiences.")
    ).toBeDefined();
  });
});
