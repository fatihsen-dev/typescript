// ANY - any türü bütün tipleri destekler
let obj: any = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

// OBJECT
function printCoord(pt: { x: number; y: number }) {
   console.log("The coordinate's x value is " + pt.x);
   console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });

// UNKNOWN - unknown any tipinin daha güvenli halidir unknown değişkene herşey atanabilir fakat unknown
// değeri any tipli değişken hariç hiç bir değişkene atanamaz
function f1(a: any) {
   a.b(); // OK
}

function f2(a: unknown) {
   // Error: Property 'b' does not exist on type 'unknown'.
   // a.b();
}

// NEVER - never bir fonksiyonun tamamlanmamasini garanti eder

function throwError(message: string): never {
   throw new Error(message);
}

function assert(condition: boolean, message: string): never {
   if (!condition) {
      throw new Error(message);
   }
}

// UNION - Bir değişkenin farklı türde tipleri desteklemesi
let stringOrNumber: number | string = "Fatih";
stringOrNumber = 24;

// INTERSECTION - Birden fazla tipi birleştirme
interface MyArray {
   length: number;
   forEach(callback: (value: any, index: number) => void): void;
}

type MyArrayFunction = {
   (callback: (value: any, index: number) => void): void;
};

type IntersectionTypes = MyArray & MyArrayFunction;

// TYPE ALIASES
type Price = string | number;

type Product = {
   name: string;
   price: Price;
};

// TYPE ASSERTIONS - Bir değişken any türündedir ama siz onun number olduğunu biliyorsanız number tipine dönüştürebilirsiniz
let myVariable: any = 5;
let myNumber: number = <number>myVariable;
