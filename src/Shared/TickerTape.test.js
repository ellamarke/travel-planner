import { render } from "@testing-library/react";
import TickerTape from "./TickerTape";

test("displays the text with 15 spans", () => {
  const { getAllByText } = render(<TickerTape tickerText="Ticker Text Test" />);
  const children = getAllByText("Ticker Text Test");
  expect(children).toHaveLength(15);
});
