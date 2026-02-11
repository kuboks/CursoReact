interface Person{
    firstName: string;
    lastName: string;
    age: number;
    address?: Address;
}
interface Address{
    postalCode: string;
    city: string;
}

const ironMan: Person = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 45,
  address: {
    postalCode: '12345',
    city: 'New York',
  },
};

const spiderman: Person={
    firstName: "",
    lastName: "",
    age: 0,
    address: {
        postalCode: 't',
        city: ""
    }
}

console.log(ironMan)

/* 
// Esto hace una copia e ignora el primer nivel. No muy practico
// const spiderman = { ...ironMan };

// Esto hace un deep clone
const spiderman= structuredClone(ironMan)

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.address.city= 'San Fierro'

console.log(ironMan, spiderman);
 */