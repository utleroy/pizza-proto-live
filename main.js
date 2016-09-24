var Order = function() {
	this.pizza = null;
	this.beverage = null;
};

//root obj in a prototype chain
var Pizza = function() {
	this.toppings = null;
	this.crustThickness = 1;
};

Pizza.prototype.setCrustThinkness = function(thickness) {
	this.crustThickness = this.crustThickness * thickness
}

Pizza.prototype.setToppings = function (topping) {
	this.toppings = this.toppings || [];
	this.toppings.push(...topping)
}

var DeepDish = function(toppingsArr) {
	this.description = "Chewy and greasy, but so filling!"
	this.setToppings.call(this, toppingsArr);
}

DeepDish.prototype = new Pizza();

var TraditionalHandTossed = function() {
 this.description = "boring'"
}

TraditionalHandTossed.prototype = new Pizza;
var myPizza = new DeepDish([]);
myPizza.setCrustThinkness(3)
console.log(myPizza.crustThickness)


 //root function in proto chain

 var Topping = function() {
 	this.price = 1.00;
 }

 var Pepperoni = function() {
 	this.isSpicy = false;

 }

Pepperoni.prototype = new Topping() 
Pepperoni.prototype.makeSpicy = function() {
	this.isSpicy = true;
}

var BananaPepper = function() {
	this.name = "Bannana Pepper";
}
BananaPepper.prototype = new Topping();

//root function in proto chain

var Beverage = function() {
	 this.hasIce = true;
}

var Soda = function() {

}
Soda.prototype = new Beverage();

// new order

var order01 = new Order();
var spicyPep = new Pepperoni();
spicyPep.makeSpicy();

console.log("Our Pep", spicyPep)

var bannanaPep = new BananaPepper();

var order01Toppings = [bannanaPep, spicyPep];

var order01Pizza = new DeepDish(order01Toppings);
console.log("Pizza", order01Pizza)
order01Pizza.setCrustThinkness(3);

var order01Bev = new Soda();

order01.pizza = order01Pizza;
order01.beverage = order01Bev;

console.log("OUR FIRST ORDER!", order01);


var display = document.getElementById('output');

display.innerHTML += `<div>YOUR ORDER IS READY!!!!<img src="https://s-media-cache-ak0.pinimg.com/originals/4f/b9/bc/4fb9bcef6d58027f993382093575f2e8.gif"</div>`









