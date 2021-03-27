import { fireEvent, render } from "@testing-library/react";
import BasicPlacePage from "./BasicPlacePage";
import Store from "../Store";

beforeEach(() => {
  window.scrollTo = jest.fn();
});

describe("BasicPlacePage", () => {
  test("Correct title shows", () => {
    const { container } = render(
      <Store
        suppliedState={{
          currentSearchedPlace: {
            placeName: "Italy",
            content:
              "Reprehenderit nostrud ut labore adipisicing anim. Incididunt officia fugiat deserunt amet id ex sunt consectetur aliquip laboris. Enim incididunt nisi incididunt duis id ex ipsum labore officia laborum. Veniam pariatur do ex veniam exercitation culpa velit nostrud magna eiusmod et quis ad. Voluptate aliqua ea et ea voluptate laboris minim reprehenderit ad aliquip sit velit veniam proident. Elit velit veniam fugiat veniam proident. Nostrud velit irure est id anim consequat ad adipisicing Lorem excepteur deserunt esse.",
          },
        }}
      >
        <BasicPlacePage />
      </Store>
    );
    expect(container.querySelector("h1").textContent).toBe("Italy");
  });

  test("Message displayed when not found", () => {
    const { container } = render(
      <Store suppliedState={{ currentSearchedPlace: { notFound: true } }}>
        <BasicPlacePage />
      </Store>
    );
    expect(container.querySelector("h3").textContent).toBe(
      "Country not found!"
    );
  });
});
