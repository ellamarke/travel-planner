import { getByTestId, render } from "@testing-library/react";
import ArticlePageHero from "./ArticlePageHero";
import TickerTape from "../Shared/TickerTape";
import Store from "../Store";
import ArticlePageContent from "./ArticlePageContent";

beforeEach(() => {
  window.scrollTo = jest.fn();
});

test("titles show correctly", () => {
  const { container } = render(
    <Store>
      <ArticlePageHero
        articleName="expected article name"
        authorName="expected author name"
      />
    </Store>
  );
  const articleNameH2 = container.querySelector("h2");
  const authorNameH6 = container.querySelector("h6");

  expect(articleNameH2.textContent).toBe("expected article name");
  expect(authorNameH6.textContent).toBe("expected author name");
});

test("ticker text is correct", () => {
  const { container } = render(<TickerTape tickerText="correct content tag" />);
  const tickerText = container.querySelector("span");

  expect(tickerText.textContent).toBe("correct content tag");
});

test("both images are correct", () => {
  const { getByTestId } = render(
    <ArticlePageContent imgSrc="img/img-1" imgSrc2="img/img-2" />
  );
  const img = getByTestId("main-image");
  const img2 = getByTestId("secondary-image");

  expect(img).toHaveAttribute("src", "img/img-1");
  expect(img2).toHaveAttribute("src", "img/img-2");
});
