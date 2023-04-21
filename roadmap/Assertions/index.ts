// AS CONST - Sadece okunabilir değiştirilemez
const colors = ["red", "green", "blue"] as const;

// AS TYPE
let num = 42;
let str = num as string;

// AS ANY
let anyValue: any = 42;

anyValue = "Hello, world!";
anyValue = true;

// Non Null Assertion - değerin asla null olmayacağını belirtiyoruz
let userName: string | null = null;
let nameLength = userName!.length;

// SATISFIES KEYWORD - bir türün belirli bir özellik kümesini karşılayıp karşılamadığını kontrol etmek için kullanılır
class Person {
   name: string;
   age: number;
   email: string;
}

class Customer extends Person {
   customerId: number;
   purchaseHistory: string[];
}

function isPerson(obj: any): obj is Person {
   return "name" in obj && "age" in obj && "email" in obj;
}

let customer = new Customer();
if (isPerson(customer)) {
   console.log(customer.name + " is a person.");
}
