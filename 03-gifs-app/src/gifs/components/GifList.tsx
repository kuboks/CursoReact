import type { FC } from "react";
import type { Gif } from "../../mock-data/gifs.mock";

interface Props {
  gifList: Gif[];
}

// ! Esta es otra manera de usar las props
// export const GifList: FC<Props> = ({ gifList }) => {

export const GifList: FC<Props> = ({ gifList }) => {
  return (
    <div className="gifs-container">
      {gifList.map((gif) => (
        <div key={gif.id} className="gif-card">
          <img src={gif.url} alt={gif.title} />
          <h3>{gif.title}</h3>
          <p>
            {gif.width}x{gif.height} (1.5mb)
          </p>
        </div>
      ))}
    </div>
  );
};
