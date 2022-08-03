function Car(speed, make){
    this.speed = speed;
    this.make = make;
}

Car.prototype.accelerate = function(){
    this.speed += 10
    console.log(this.speed);
}

Car.prototype.breake = function(){
    this.speed -= 5
    console.log(this.speed);
}
const BMW = new Car(200, 'BMW');
const Mercedes = new Car(300, 'Mercedes');

BMW.accelerate();
BMW.breake();

Mercedes.accelerate();
Mercedes.breake();

const ElectricCar = function(speed, make, batteryCharge){
    Car.call(this,speed, make);
    this.batteryCharge = batteryCharge;
}

ElectricCar.prototype = Object.create(Car.prototype);

Car.prototype.chargeBattery = function(chargeTo){
    this.batteryCharge = chargeTo;
}

Car.prototype.accelerate = function(){
    this.speed += 20;
    this.batteryCharge--;
    console.log(`${this.make} is going at ${this.speed}km/h with a charge of ${this.batteryCharge}`);
}
const tesla =  new ElectricCar(120,"Tesla", 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
tesla.breake();
