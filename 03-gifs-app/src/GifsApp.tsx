import React, { useState } from "react";
// import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { CustomSearch } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = async (query: string) => {
    const searchTerm = query.trim().toLowerCase();
    if (previousTerms.includes(searchTerm) || !(searchTerm.length > 0)) return;

    setPreviousTerms([searchTerm, ...previousTerms].slice(0, 6));

    setGifs(await getGifsByQuery(query));
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de gifs"
        description="Descubre el gif perfecto"
      />

      {/* Search */}
      <CustomSearch placeholder="Buscar gifs" onQuery={handleSearch} />

      {/* Busqueda previa */}
      <PreviousSearches
        title="Busquedas previas"
        listSearches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifList={gifs} />
    </>
  );
};
