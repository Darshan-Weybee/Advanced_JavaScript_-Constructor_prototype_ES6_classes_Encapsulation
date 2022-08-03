class Car{
    constructor(speed, make){
        this.make =make;
        this.speed = speed;
    }

    accelerate(){
        this.speed += 10
        console.log(this.speed);
        return this;
    }

    breake(){
        this.speed -= 5
        console.log(this.speed);
        return this;
    }

    get speedUs(){
        console.log(this.speed/1.6 + "m/h");
    }
    set speedUs(sp){
        this.speed = sp*1.6;
    }
}


class EVCL extends Car{
    #charge;
    constructor(speed, make, charge){
        super(speed, make);
        this.#charge = charge;
    }

    chargeBattery(chargeTo){
        this.#charge = chargeTo;
        return this;
    }
}

const Rivian =  new EVCL(120, "Rivian", 23);
Rivian.accelerate().chargeBattery(90).breake().accelerate();
Rivian.speedUs;
console.log(Rivian);