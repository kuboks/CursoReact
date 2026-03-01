import type { GiphyRamdomResponse } from "../data/giphy-response";

const API_KEY = "0bBaVkfD9tYT9NiuK3ZEHQKt9W9ZqRgD";

const createImgDOM = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;
  document.body.append(imgElement);
};

const getRandomGifUrl = async (): Promise<string> => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`,
  );

  const { data }: GiphyRamdomResponse = await response.json();
  return data.images.original.url;
};

// getRandomGifUrl().then((url) => createImgDOM(url));

// Paso por referencia
getRandomGifUrl().then(createImgDOM);
