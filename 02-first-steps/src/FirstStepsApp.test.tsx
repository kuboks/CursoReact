import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp, items, ItemInCard } from "./FirstStepsApp";
import { render, screen } from "@testing-library/react";

// ! Un mock es informacion ficticia que se usaran en las pruebas
// vi.mock("./shopping-cart/ItemCounter", () => ({
//   ItemCounter: (props: unknown) => (
//     <div
//       data-testid="ItemCounter"
//       name={props.name}
//       quantity={props.quantity}
//     />
//   ),
// }));

const mockItemCounter = vi.fn((props: ItemInCard) => {
  return (
    <div
      data-testid="ItemCounter"
      name={props.name}
      quantity={props.quantity}
    />
  );
});

vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: ItemInCard) => mockItemCounter(props),
}));

describe("FirstStepsApp", () => {
  // ! Este es un paso importante
  // Before sirve para ejecutar algo antes de cada prueba
  // After sirve para ejecutar algo despues de cada prueba
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("Should match, snapshot - screen", () => {
    render(<FirstStepsApp />);

    expect(screen.getByTestId("div-app")).toMatchSnapshot();
  });

  test("Should render the correct number of itemCounter components", () => {
    render(<FirstStepsApp />);

    const itemCounters = screen.getAllByTestId("ItemCounter");

    expect(itemCounters.length).toBe(items.length);
  });

  test("Should render ItemCounter with correct props", () => {
    render(<FirstStepsApp />);

    expect(mockItemCounter).toHaveBeenCalledTimes(items.length);

    items.forEach((item) => {
      expect(mockItemCounter).toHaveBeenCalledWith(item);
    });
  });
});
