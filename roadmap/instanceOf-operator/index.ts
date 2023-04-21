// instanceof object class interface type bunlardan birinin bir örnğimi kontrol eder

class Bird {
   fly() {
      console.log("flying...");
   }
   layEggs() {
      console.log("laying eggs...");
   }
}

const pet = new Bird();

// instanceof
if (pet instanceof Bird) {
   pet.fly();
} else {
   console.log("pet is not a bird");
}
