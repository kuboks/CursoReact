import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

// const gifCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const [gifs, setGifs] = useState<Gif[]>([]);

  const gifCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    const gifsTerm = gifCache.current[term];
    if (gifsTerm) {
      setGifs(gifsTerm);
      return;
    }
    setGifs(await getGifsByQuery(term));
  };

  const handleSearch = async (query: string) => {
    const searchTerm = query.trim().toLowerCase();
    if (previousTerms.includes(searchTerm) || !(searchTerm.length > 0)) return;

    setPreviousTerms([searchTerm, ...previousTerms].slice(0, 6));

    setGifs(await getGifsByQuery(query));

    gifCache.current[query] = gifs;
  };
  return { previousTerms, gifs, handleSearch, handleTermClicked };
};
