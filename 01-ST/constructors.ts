interface Point {
   x: number;
   y: number;
}
interface Vehicle {
   curentLocation: Point;
   travelTo(point: Point): void;
}

class Taxi implements Vehicle {
   
   color: string;
   curentLocation: Point;

   constructor(location?: Point, color?: string) {
      this.curentLocation = location;
      this.color = color;
   }

   travelTo(point: Point): void {
      console.log(`Taxi X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
   }
}

let taxi_1: Taxi = new Taxi({ x: 2, y: 1 }, "red");
let taxi_2 = new Taxi({ x: 5, y: 1 });
let taxi_2 = new Taxi();
