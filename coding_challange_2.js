class Car{
    constructor(speed, make){
        this.make =make;
        this.speed = speed;
    }

    accelerate(){
        this.speed += 10
        console.log(this.speed);
    }

    breake(){
        this.speed -= 5
        console.log(this.speed);
    }

    get speedUs(){
        console.log(this.speed/1.6 + "m/h");
    }
    set speedUs(sp){
        this.speed = sp*1.6;
    }
}

const BMW = new Car(200, 'BMW');
const Mercedes = new Car(300, 'Mercedes');

BMW.accelerate();
BMW.breake();

Mercedes.accelerate();
Mercedes.breake();

BMW.speedUs;
BMW.speedUs = 50;