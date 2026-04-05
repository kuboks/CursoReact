// import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { CustomSearch } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { gifs, previousTerms, handleSearch, handleTermClicked } = useGifs();
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
