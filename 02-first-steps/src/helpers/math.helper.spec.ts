import { describe, expect, test } from "vitest";
import { multiply, divide } from "./math.helper";

describe("multiply", () => {
  test("Multiplicar 2 numeros positivos", () => {
    // Arrange
    const [a, b] = [10, 10];

    // Act
    const result = multiply(a, b);

    // Assert
    expect(result).toBe(a * b);
  });

  test("Multiplicar 2 numeros negativos", () => {
    // Arrange
    const [a, b] = [-9, -10];

    // Act
    const result = multiply(a, b);

    // Assert
    expect(result).toBe(a * b);
  });

  test("Multiplicar un numero positivo y un numero negativo", () => {
    // Arrange
    const [a, b] = [7, -5];

    // Act
    const result = multiply(a, b);

    // Assert
    expect(result).toBe(a * b);
  });
});

describe("Divide", () => {
  test("Dividir 2 numeros positivos", () => {
    // Arrange
    const [a, b] = [10, 10];

    // Act
    const result = divide(a, b);

    // Assert
    expect(result).toBe(a / b);
  });

  test("Dividir 2 numeros negativos", () => {
    // Arrange
    const [a, b] = [-9, -10];

    // Act
    const result = divide(a, b);

    // Assert
    expect(result).toBe(a / b);
  });

  test("Dividir un numero positivo y un numero negativo", () => {
    // Arrange
    const [a, b] = [7, -5];

    // Act
    const result = divide(a, b);

    // Assert
    expect(result).toBe(a / b);
  });
});
