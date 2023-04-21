interface A {
   a: string;
}

interface B {
   b: number;
}

type AB = A & B;
let value: AB = { a: "hello", b: 42 };
