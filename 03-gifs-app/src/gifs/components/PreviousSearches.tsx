import { type FC } from "react";
interface Props {
  title: string;
  listSearches?: string[];
  onLabelClicked: (term: string) => void;
}

export const PreviousSearches: FC<Props> = ({
  title,
  listSearches,
  onLabelClicked,
}) => {
  return (
    <div className="previous-searches">
      <h2>{title}</h2>
      <ul className="previous-searches-list">
        {listSearches?.map((term) => (
          // ! No se usa solo la referencia del metodo por diferencia en el tipo de dato que recibe
          // Cuando solo se usa la refrencia seria el equivalente a onLabelClicked(event)
          // Esta funcion no puede recibir un objeto event, se requiere term que seria un string
          <li key={term} onClick={() => onLabelClicked(term)}>
            {term}
          </li>
        ))}
      </ul>
    </div>
  );
};
