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
