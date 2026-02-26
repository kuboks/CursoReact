export interface Hero {
    id: number,
    name: string,
    owner: Owner;
}

// Transpilar = Convertir codigo Typescript a Javascript

// Es algo asi como un combobox de las posibles opciones
// Con valores especificos
// type Owner = 'DC' | 'Marvel'
// Type no crea algo al transpilar

// Si no tiene valor, por defecto se usan valores desde 0
// DC=0 Marvel=1
// Enum si genera opjetos literales al transpilar
export enum Owner {
    DC= 'DC',
    Marvel = 'Marvel'
}

// Enum y type son utiles para valores estaticos

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: Owner.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: Owner.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    owner: Owner.DC,
  },
  {
    id: 4,
    name: 'Flash',
    owner: Owner.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: Owner.Marvel,
  },
  {
    id: 6,
    name: 'Marcus',
    owner: Owner.Marvel
  },
];

// Exportacion por defecto
export default heroes;