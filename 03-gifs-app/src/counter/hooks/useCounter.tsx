import { useState } from "react";

export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const handleCounterAdd = () => {
    setCounter(counter + 1);
  };

  // !Esta es otra manera de acceder al valor actual de la propiedad
  // Esto aplica cuando no tenemos acceso/conocimiento del primer argumento
  // Pero si se tiene la funcion dispacher en este caso setCounter
  // setCounter((prevState) => prevState - 1);
  const handleCounterMinus = () => {
    setCounter((prevState) => prevState - 1);
  };
  const handleCounterReset = () => {
    setCounter(5);
  };

  return {
    // Properties / values
    counter,

    // Methods / actions
    handleCounterAdd,
    handleCounterMinus,
    handleCounterReset,
  };
};
