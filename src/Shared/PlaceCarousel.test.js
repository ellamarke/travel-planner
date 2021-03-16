import { render, fireEvent } from "@testing-library/react";
import PlaceCarousel from "./PlaceCarousel";
import Store from "../Store";

test("renders a H3", () => {
  const { container } = render(
    <PlaceCarousel title="My place title" places={[]} />
  );
  const header = container.querySelector("h3");
  expect(header.textContent).toBe("My place title");
});

describe("with 2 places", () => {
  var queryAllByTestId;
  beforeEach(() => {
    const places = [
      {
        cardName: "first card",
        cardCaption: "card caption 1",
        route: "/route1",
        src: "image/image1.jpg",
      },
      {
        cardName: "second card",
        cardCaption: "card caption 2",
        route: "/route2",
        src: "image/image2.jpg",
      },
    ];

    const result = render(
      <Store>
        <PlaceCarousel title="My place title" places={places} />
      </Store>
    );

    queryAllByTestId = result.queryAllByTestId;
  });

  test("will render each card", () => {
    const children = queryAllByTestId("place-card");
    expect(children).toHaveLength(2);
  });

  test("each card uses card name as header", () => {
    const children = queryAllByTestId("place-card");
    const firstHeader = children[0].querySelector("h6");
    expect(firstHeader.textContent).toBe("first card");

    const secondHeader = children[1].querySelector("h6");
    expect(secondHeader.textContent).toBe("second card");
  });

  test("each card uses the image source", () => {
    const images = queryAllByTestId("card-image");
    expect(images[0]).toHaveAttribute("src", "image/image1.jpg");
    expect(images[1]).toHaveAttribute("src", "image/image2.jpg");
  });

  test("will save the card when clicked", () => {
    const children = queryAllByTestId("place-card");
    const firstButton = children[0].querySelector("button");
    fireEvent.click(firstButton);

    expect(firstButton.textContent).toBe("Saved!");
  });
});
