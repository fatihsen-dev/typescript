function getAverageOne(a: number, b: number, c?: number): string {
   let total = a + b;
   let count = 2;

   if (typeof c !== "undefined") {
      total += c;
      count++;
   }

   const result = total / 3;
   return "result: " + result;
}
getAverageOne(10, 20, 30);
getAverageOne(10, 20);


function getAverageTwo(...a: number[]): string {
   let total = 0;
   let count = 0;

   for (let i = 0; i < a.length; i++) {
      total += a[i];
      count++;
   }
   const result = total / 3;
   return "result: " + result;
}
getAverageTwo(10, 20, 30);
getAverageTwo(10, 20);
getAverageTwo(10);