// INTERFACE - ismindende anlaşıldığı gibi bir arayüzdür
interface Person {
   name: string;
   age: number;
}

function greet(person: Person) {
   return `Hello ${person.name}`;
}

// CLASS - TS JS de var olan classları daha güçlü hale getirdi
class Person {
   firstName: string;
   lastName: string;
   age: number;

   constructor(firstName: string, lastName: string, age: number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
   }

   greet() {
      console.log(`Hello ${this.firstName}`);
   }
}
const user = new Person("Fatih", "Şen", 24);
user.greet();

// ENUM - Bir diziyi sambolik adlar ile tanımalama
enum Gunler {
   Pazartesi,
   Sali,
   Carsamba,
   Persembe,
   Cuma,
   Cumartesi,
   Pazar,
}

let bugun: Gunler = Gunler.Carsamba;
console.log("Bugün " + bugun + " günüdür.");

// ARRAY - Sadece sizin istediğiniz türde veri içeren arraylar oluşturabilirsiniz bir kaç örnek aşağıdaki gibi
const numberArray: number[] = [1, 2, 3];
const stringArray: string[] = ["String 1", "String 2", "String 3"];
const customArray: Array<string | number | boolean> = ["Fatih", "Şen", 23, true];

// TUPLE - Kaç index ve hangi indexte hangi türün olduğunu belirlediğin bir array türü

type User = [string, string, number, boolean];

const userArray: User = ["Fatih", "Şen", 24, true];

const userName = userArray[0];
const userSurname = userArray[1];
const userAge = userArray[2];
const userGender = userArray[3];

// Error: Index out of bounds
// const five = pair[4];
