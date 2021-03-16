import { fireEvent, render } from "@testing-library/react";
import PlaceHero from "./PlaceHero";
import PlaceIntroduction from "./PlaceIntroduction";

beforeEach(() => {
  window.scrollTo = jest.fn();
});

test("Correct title shows", () => {
  const { container } = render(<PlaceHero placeName="Correct country name" />);
  expect(container.querySelector("h1").textContent).toBe(
    "Correct country name"
  );
});

test("The read more button works correctly", () => {
  const { container, getByRole, getByText } = render(
    <PlaceIntroduction
      shortDescription="this is short"
      longDescription="this is long"
    />
  );
  expect(container).toHaveTextContent("this is short");

  expect(
    getByText("this is long")
      .closest("span")
      .classList.contains("read-more-hidden")
  ).toBe(true);

  const button = getByRole("button");
  fireEvent.click(button);

  expect(
    getByText("this is long")
      .closest("span")
      .classList.contains("read-more-displayed")
  ).toBe(true);
});
