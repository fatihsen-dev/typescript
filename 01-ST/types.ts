let a: number = 5;
let b: string = "a";
let c: boolean = true;
let d: any;
let e: number[] = [1, 2, 3];
let f: Array<number> = [1, 2, 3];
let g: any[] = [1, "a", true];
let h: [string, number, boolean] = ["text", 2, true];

const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 2;

enum Payment {
   kredi = 0,
   havale = 1,
   kapidaOdeme = 2,
   eft = 3,
}

let kredi = Payment.kredi; // 0
let havale = Payment.havale; // 1
let kapidaOdeme = Payment.kapidaOdeme; // 2
let eft = Payment.eft; // 3
