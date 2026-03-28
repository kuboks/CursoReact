import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";

// ! Si el archivos que se va a probar no es jsx, hook o un componente
// Solo se requiere vitest
// En caso contrario si es jsx, hook o componente
// Se requiere testing-library

describe("MyAwesomeApp", () => {
  test("Should renders, firstName and lastName", () => {
    // Sin screen
    // const { container } = render(<MyAwesomeApp />);
    // console.log(container);

    // Usando screen, se supone da mas comodidad en la terminal
    render(<MyAwesomeApp />);
    screen.debug();
  });
});
