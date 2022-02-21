let Mixin = function(obj) {
  obj.glide = function() {
    console.log("Glide...");
  }
}
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
name: "Warrior",
type: "race-boat"
};

Mixin(bird);
Mixin(boat);

bird.glide();
boat.glide();