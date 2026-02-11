const person = {
  name: "Tony",
  age: 45,
  key: "Ironman",
};

// desestructuracion con variables inecesarias
// const name= person.name;
// const age= person.age;
// const key= person.key;

// desestructuracion
const { name, age:ironmanAge, key } = person;

console.log({ name, ironmanAge, key });

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

// Si la desestructuracion es en 3 variables hacerlo en la funcion flecha
// Si son mas variables mejor hacerlo en el cuerpo de la funcion flecha
const useContext = ({key, age, name, rank}: Hero) => {
  return {
    keyname: key,
    user: {
        name: name, //Se llaman igual
        age   //Si las variables se llaman igual se pueden obviar y solo ponerlo una vez
    },
    rank:rank
  };
};

const { rank, keyname, user:{age} }= useContext(person);

console.log({rank, keyname, age}) 