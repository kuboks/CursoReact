import type { GiphyRamdomResponse } from "../data/giphy-response";

const API_KEY = "0bBaVkfD9tYT9NiuK3ZEHQKt9W9ZqRgD"

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ API_KEY }`)

const createImgDOM = (url: string) =>{
  const imgElement= document.createElement('img');
    imgElement.src= url
    document.body.append(imgElement)
}

myRequest
  .then((response) => response.json())
  .then(({data} : GiphyRamdomResponse) => {
    const imageUrl= data.images.original.url
    // Al hacer la desestructuracion ({data}) se ahorra el data.data.
    // const imageUrl= data.data.images.original.url;
    // console.log(imageUrl);
    createImgDOM(imageUrl)
  })
  .catch(err => {
    console.error("Algo salio mal: ", err)
  })