import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
  test("Should render with default values", () => {
    const name = "testItem";

    render(<ItemCounter name={name} />);

    screen.debug();

    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(name)).not.toBeNull();
  });

  test("Should render with custom quantity", () => {
    const name = "testItem";
    const quantity = 10;

    render(<ItemCounter name={name} quantity={quantity} />);

    screen.debug();

    expect(screen.getByText(quantity)).toBeDefined();
  });

  test("Should increase count when +1 button is pressed", () => {
    const name = "testItem";
    const quantity = 10;
    render(<ItemCounter name={name} quantity={quantity} />);

    const [buttonAdd] = screen.getAllByRole("button");

    fireEvent.click(buttonAdd);
    // console.log(screen.getByTestId("counter"));
    const item = screen.getByTestId("counter").innerHTML;
    expect(item).toBe(`${quantity + 1}`);
  });

  test("Should decrease count when -1 button is pressed", () => {
    const name = "testItem";
    const quantity = 6;
    render(<ItemCounter name={name} quantity={quantity} />);

    const [, buttonSubs] = screen.getAllByRole("button");

    fireEvent.click(buttonSubs);
    // console.log(screen.getByTestId("counter"));
    const item = screen.getByTestId("counter").innerHTML;
    expect(item).toBe("5");
  });
  test("Should not decrease count when -1 button is pressed and quantity is 1", () => {
    const name = "testItem";
    const quantity = 1;
    render(<ItemCounter name={name} quantity={quantity} />);

    const [, buttonSubs] = screen.getAllByRole("button");

    fireEvent.click(buttonSubs);
    const item = screen.getByTestId("counter").innerHTML;
    expect(item).toBe("1");
  });

  // ! Si el color esta definido como hexadecimal, se debe evaluar con rgb
  // Por ejemplo, toBe("rgb(0, 0, 0)")
  test("Should change to red when count is 1", () => {
    const name = "testItem";
    const quantity = 1;
    render(<ItemCounter name={name} quantity={quantity} />);

    const item = screen.getByTestId("spanName");

    expect(item.style.color).toBe("red");
  });

  test("Should change to black when count is greater than 1", () => {
    const name = "testItem";
    const quantity = 2;
    render(<ItemCounter name={name} quantity={quantity} />);

    const item = screen.getByTestId("spanName");

    expect(item.style.color).toBe("rgb(0, 0, 0)");
  });
});
