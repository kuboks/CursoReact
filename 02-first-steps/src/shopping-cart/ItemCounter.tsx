import { useState } from "react";

// import "./css/ItemCounter.css";
import styles from "./css/ItemCounter.module.css";

interface Props {
  name: string;
  quantity?: number | undefined;
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  // Hooks siempre van al inicio
  const [itemCounter, setItemCounter] = useState(
    quantity && quantity > 0 ? quantity : 1,
  );

  // useEffect(() => {
  //   setItemCounter(quantity ? quantity : 0);
  // });

  const handlerAdd = () => setItemCounter(itemCounter + 1);

  const handlerSustract = () => {
    if (itemCounter === 1) return;
    setItemCounter(itemCounter - 1);
  };

  const handlerClick = () => {
    console.log(`Click ${name}`);
    handlerAdd();
  };
  const handlerMouse = () => {
    console.log(`Mouse enter ${name}`);
  };

  return (
    // Cuando se usa css por modulo se debe usar styles['nombre'] si tiene simbolos
    // Si es un solo una palabra seria styles.nombre
    <section className={styles["item-row"]}>
      <span
        data-testid="spanName"
        className={styles["item-name"]}
        style={{ color: itemCounter === 1 ? "red" : "#000000" }}
      >
        {name}
      </span>
      <button onMouseEnter={handlerMouse} onClick={handlerClick}>
        +1
      </button>
      <span data-testid="counter" className={styles["item-quantity"]}>
        {itemCounter}
      </span>
      <button onClick={handlerSustract}>-1</button>
    </section>
  );
};
