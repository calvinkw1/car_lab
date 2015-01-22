function Car(make, model, year, color){
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.state = "off";
	this.previous_owners = [];
	this.current_owner = "Manufacturer";
	this.passengers = [];
}




Car.prototype.start = function() {
	if (this.state === "off") {
		this.state = "on";
	}
};

Car.prototype.off = function() {
	if (this.state === "on") {
		this.state = "off";
	}
};

Car.prototype.sale = function(newOwner){
	this.previous_owners.push(this.current_owner);
	this.current_owner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;
};


Car.prototype.driveTo = function(destination) {
	if (this.state === "on") {
		console.log("driving to " + destination);
	}
};

Car.prototype.park = function() {
	if (this.state === "off") {
		console.log("parked!!");
	}
};

Car.prototype.pick_up = function(name) {
	if (this.state === "on") {
		this.passengers.push(name);
		console.log("driving to pick up " + name);
	} 
};


Car.prototype.dropOff = function(name) {
	if (this.state === "on") {
		var passengerSeat = this.passengers.indexOf(name);
		if (passengerSeat !== -1) {
			this.passengers.splice(passengerSeat, 1);
		}
	}
};




module.exports=Car;