import { describe, expect, test } from "vitest";
import { add, substract } from "./math.helper";

describe("add", () => {
  test("Sumar 2 numeros positivos", () => {
    // Arrange
    const [a, b] = [1, 1];

    // Act
    const result = add(a, b);

    // Assert
    expect(result).toBe(a + b);
  });

  test("Sumar 2 numeros negativos", () => {
    // Arrange
    const [a, b] = [-1, -1];

    // Act
    const result = add(a, b);

    // Assert
    expect(result).toBe(a + b);
  });

  test("Sumar un numero positivo y un numero negativo", () => {
    // Arrange
    const [a, b] = [16, -20];

    // Act
    const result = add(a, b);

    // Assert
    expect(result).toBe(a + b);
  });
});

describe("substract", () => {
  test("Restar 2 numeros positivos", () => {
    // Arrange
    const [a, b] = [1, 1];

    // Act
    const result = substract(a, b);

    // Assert
    expect(result).toBe(a - b);
  });

  test("Restar 2 numeros negativos", () => {
    // Arrange
    const [a, b] = [-13, -7];

    // Act
    const result = substract(a, b);

    // Assert
    expect(result).toBe(a - b);
  });

  test("Restar un numero positivo y un numero negativo", () => {
    // Arrange
    const [a, b] = [6, -7];

    // Act
    const result = substract(a, b);

    // Assert
    expect(result).toBe(a - b);
  });
});
