import React, { useState } from "react";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { CustomSearch } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState([]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };
  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de gifs"
        description="Descubre el gif perfecto"
      />

      {/* Search */}
      <CustomSearch placeholder="Buscar gifs" />

      {/* Busqueda previa */}
      <PreviousSearches
        title="Busquedas previas"
        listSearches={["Gears of war", "Halo", "Metal slug"]}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifList={mockGifs} />
    </>
  );
};
