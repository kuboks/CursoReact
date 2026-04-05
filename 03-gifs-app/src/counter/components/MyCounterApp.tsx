import { useCounter } from "../hooks/useCounter";

export const MyCounterApp = () => {
  const { counter, handleCounterAdd, handleCounterMinus, handleCounterReset } =
    useCounter(5);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Counter: {counter}</h1>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleCounterAdd}>+1</button>
        <button onClick={handleCounterMinus}>-1</button>
        <button onClick={handleCounterReset}>Reset</button>
      </div>
    </div>
  );
};
