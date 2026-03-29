import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";

// ! Si el archivos que se va a probar no es jsx, hook o un componente
// Solo se requiere vitest
// En caso contrario si es jsx, hook o componente
// Se requiere testing-library

describe("MyAwesomeApp", () => {
  // ! container solo sirve para validar estados iniciales, no para evaluar eventos
  test("Should renders, firstName and lastName", () => {
    // Sin screen
    const { container } = render(<MyAwesomeApp />);
    // console.log(container);

    // Usando screen, se supone da más comodidad en la terminal
    // render(<MyAwesomeApp />);
    // screen.debug();

    const h1 = container.querySelector("h1");
    expect(h1?.innerHTML).toContain("Brayan");

    const h3 = container.querySelector("h3");
    expect(h3?.innerHTML).toContain("Aguilar");
  });

  // ! screen sirve para evaluar eventos
  test("Should renders, firstName and lastName - screen", () => {
    render(<MyAwesomeApp />);
    screen.debug();

    // const h1 = screen.getByRole("heading", {
    //   level: 1,
    // });
    const h1 = screen.getByTestId("first-name-title");

    expect(h1.innerHTML).toContain("Brayan");
  });

  // ! Usar los snapshots en componentes que nunca van a cambiar
  // Esto hablando de cambios provinientes del desarrollador
  test("Should match, snapshot", () => {
    const { container } = render(<MyAwesomeApp />);

    expect(container).toMatchSnapshot();
  });

  test("Should match, snapshot - screen", () => {
    render(<MyAwesomeApp />);

    expect(screen.getByTestId("div-app")).toMatchSnapshot();
  });
});
