interface Point {
   x: number;
   y: number;
}
interface Vehicle {
   travelTo(point: Point): void;
}

class Taxi implements Vehicle {
   constructor(private _location?: Point, private _color?: string) {}

   travelTo(point: Point): void {
      console.log(
         `Taxi X: ${this._location.x} Y: ${this._location.y} dan X: ${point.x} Y: ${point.y} konumuna gidiyor.`
      );
   }
   get location() {
      return this._location;
   }

   set location(value: Point) {
      if (value.x < 0 || value.y < 0) {
         throw new Error("Kordinat bilgileri negatif olamaz");
      }
      this._location = value;
   }
}

let taxi_1 = new Taxi({ x: 12, y: 46 });
taxi_1.travelTo({ x: 273, y: 141 });

let curentLocation = taxi_1.location;
taxi_1.location = { x: 20, y: 50 };
