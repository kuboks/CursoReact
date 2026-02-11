// Funcion "tradicional"
function greet(name: string): string {
  return `Hola ${name}`;
  // return 123;
}

// Funcion flecha o funcion anonima
const greet2 = (name: string): string => `Hola ${name}`;
// Ambas hacen lo mismo

const message = greet("Goku");
const message2 = greet2("Vegeta");

console.log(message);
console.log(message2);

interface User {
  uid: string;
  userName: string;
}

function getUser(): User {
  return { uid: "ABC-123", userName: "El_Papi123" };
}

const getUser2 = (): User => ({
  uid: "ABC-123",
  userName: "Kubo",
});

const user = getUser();
const user2 = getUser2();

console.log(user);
console.log(user2);

const myNumbers: number[]= [1, 2, 3, 4, 5]

// myNumbers.forEach( function(value){
//     console.log({value});
// });

// Callback con funcion flecha
// myNumbers.forEach( (value) => {console.log({value})} );

// Paso como referencia del console.log
// myNumbers.forEach( console.log );

myNumbers.forEach( (value, index, arr) => {
    console.log(value, index, arr)
} );
