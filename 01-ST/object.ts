interface Point {
   x: number;
   y: number;
}

interface Vehicle {
   curentLocation: Point;
   travelTo(point: Point): void;
}

class Taxi implements Vehicle {
   curentLocation: Point;
   travelTo(point: Point): void {
      console.log(`Taxi X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
   }
}

class Bus implements Vehicle {
   curentLocation: Point;
   travelTo(point: Point): void {
      console.log(`Otobüs X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
   }
}

let taxi_1: Taxi = new Taxi();
taxi_1.travelTo({ x: 1, y: 2 });
taxi_1.curentLocation = { x: 2, y: 1 };

let taxi_2 = new Taxi();
taxi_2.travelTo({ x: 2, y: 3 });
taxi_2.curentLocation = { x: 2, y: 5 };

let bus_1 = new Bus();

console.log(taxi_1.curentLocation.x);
console.log(taxi_1.curentLocation.y);
