import React from "react";

interface Props {
  placeholder?: string;
}

export const CustomSearch = ({ placeholder = "Ingresa un valor" }: Props) => {
  return (
    <div className="search-container">
      <input type="text" placeholder={placeholder} />
      <button>Buscar</button>
    </div>
  );
};
