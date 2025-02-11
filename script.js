// Complete the js code
function Car(make, model){
	this.make = make;
	this.model = model;
}

function SportsCar(make, model, topSpeed) {
	Car.call(this,make,model);
	this.topSpeed = topSpeed;
}



// class Car {
// 	constructor (make, model){
// 		this.make = make;
// 		this.model = model;
// 	}
	
// }

Car.prototype.getMakeModel = function(){
		return `${this.make} ${this.model}`;
	}


// class SportsCar extends Car{
// 	constructor(make, model, topSpeed) {
// 		super(make, model);
// 		this.topSpeed = topSpeed;
// 	}
	
// }

SportsCar.prototype.getTopSpeed = function(){
		return this.topSpeed;
	}

SportsCar.prototype = Object.create(Car.prototype);

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
