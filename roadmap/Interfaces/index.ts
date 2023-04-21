// EXAMPLE
interface User {
   name: string;
   age: number;
}

const user: User = {
   name: "John Doe",
   age: 30,
};

// TYPES vs INTERFACES
// Type yenbir tip tanimlamak için kullanılır
// Interfacesler nesnelerin ve sınıfların yapısını tanımlamak için kullanılır

// EXTENDING INTERFACES
interface Shape {
   width: number;
   height: number;
}

interface Square extends Shape {
   sideLength: number;
}

let square: Square = {
   width: 10,
   height: 10,
   sideLength: 10,
};
