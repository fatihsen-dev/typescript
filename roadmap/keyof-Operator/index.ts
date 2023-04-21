interface User {
   name: string;
   age: number;
   location: string;
}

type UserKeys = keyof User; // "name" | "age" | "location"
const key: UserKeys = "name";
console.log(key);
