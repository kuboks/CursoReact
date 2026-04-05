import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";
import { giphyAPI } from "../api/giphy.api";
import { formatFileSize } from "../../utils/fuctions.utils";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  const response = await giphyAPI.get<GiphyResponse>("/search", {
    params: {
      q: query,
      limit: 10,
    },
  });

  // ! Esto es parte de hacer un mapper

  const result: Gif[] = response.data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: Number(gif.images.original.width),
    height: Number(gif.images.original.height),
    size: formatFileSize(Number(gif.images.original.size)),
  }));

  return result;

  // fetch(
  //   `https://api.giphy.com/v1/gifs/search?api_key=0bBaVkfD9tYT9NiuK3ZEHQKt9W9ZqRgD&q=${query}&limit=10&lang=es`,
  // );
};
