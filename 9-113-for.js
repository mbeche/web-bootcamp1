// Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19");

for (var i = -10; i < 20; i++) {
	console.log(i);
}


// Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");

for (var e = 10; e < 41; e += 2) {
	console.log(e);
}

// Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333");

for (var o = 301; o < 334; o += 1) {
	console.log(o);
}

// Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");

for (var d = 5; d < 51; d++) {
	if ( d % 5 === 0 && d % 3 === 0 ) {
		console.log(d);
	}
}