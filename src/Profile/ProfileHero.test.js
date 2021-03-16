import { render } from "@testing-library/react";
import ProfileHero from "./ProfileHero";

test("renders a H1", () => {
  const { container } = render(<ProfileHero />);
  const header = container.querySelector("h1");

  expect(header.textContent).toBe("Let's get planning!");
});
