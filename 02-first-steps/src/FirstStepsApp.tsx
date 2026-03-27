import { ItemCounter } from "./shopping-cart/ItemCounter";
export interface ItemInCard {
  name: string;
  quantity: number | undefined;
}

const items: ItemInCard[] = [
  { name: "Nintendo switch 2", quantity: 1 },
  { name: "Xbox", quantity: 9999 },
  { name: "PSP", quantity: 8 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      {/* <ItemCounter name="Nintendo" quantity={10} /> */}
      {items.map((element: ItemInCard) => (
        <ItemCounter
          key={element.name}
          name={element.name}
          quantity={element.quantity}
        />
      ))}
    </>
  );
}
