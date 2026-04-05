import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
  placeholder?: string;
  onQuery: (query: string) => void;
}

export const CustomSearch = ({
  placeholder = "Ingresa un valor",
  onQuery,
}: Props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
    setQuery("");
  };

  const hanldeKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key.toLowerCase() === "enter" && query != "") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={hanldeKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};
