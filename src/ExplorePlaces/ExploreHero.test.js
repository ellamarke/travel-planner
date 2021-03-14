import { render } from "@testing-library/react";
import ExploreHero from "./ExploreHero";

test("renders a H1", () => {
  const { container } = render(<ExploreHero />);
  const header = container.querySelector("h1");
  expect(header.textContent).toBe("Discover somewhere new!");
});
