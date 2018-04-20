var obj = {
	name: "Chuck",
	age: 45,
	isCool: false,
	friends: ["bob", "tina"],
	add: function (x,y){
		return x+y;
    }
}

// console is an object, .log is a method on the console
// methods help eliminate name-space collisions

verb = function speak() {
  return this.noise;
}

let dog = {
  noise: "woof",
  mkNoise: verb
}

let cat = {
  noise: "meow",
  mkNoise: verb
}

// lesson 143:

let comments = {};
comments.data = [ "good job!", "bye", "lame..."];

comments.print = function (){
	this.data.forEach(function(el){
		console.log(el);
	});
}
