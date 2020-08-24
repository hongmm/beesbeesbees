var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  //this.food = Grub.food;
  //this.eat = Grub.eat;
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

