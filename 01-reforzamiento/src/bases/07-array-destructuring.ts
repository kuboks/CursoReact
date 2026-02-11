const charaterNames = ["Goku", "Vegeta", "Trunks"];

const [, , p3] = charaterNames;

// console.log({p3});

// Al agregar as const se indica que siempre sera un string y luego un numero
// tambien combierte la funcion en readonly
const returnArrayFn = () => {
  return ["ABC", 1234] as const;
};

const [letters, numbers] = returnArrayFn();

// console.log(numbers + 100)

//////////////////////////////////////////////////////////////
// Tarea

const useState = (value: string) => {
  return [
    value,
    (newValue: string) => {
      console.log(newValue);
    },
  ] as const;
};

const [name, setName] = useState("kokun");

console.log(name);

console.log("------------------");

setName("Vegeta");
