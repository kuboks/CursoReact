import { CSSProperties } from "react";

interface Props {
  name: string;
  quantity: number | undefined;
}

const styleSection: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  marginTop: 10,
};

const styleSpanItem: CSSProperties = {
  width: 200,
};

export const ItemCounter = ({ name, quantity }: Props) => {
  return (
    <section style={styleSection}>
      <span style={styleSpanItem}>{name}</span>
      <button>+1</button>
      <span>{quantity}</span>
      <button>-1</button>
    </section>
  );
};
