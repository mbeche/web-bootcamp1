// Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19");

var num = -10;
while (num < 20) {
	console.log(num);
	num++;
}


// Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");

var even = 10;
while ( even < 41 ) {
	if (even % 2 === 0) {
		console.log(even);
	}
	even++;
}

console.log("Second way to print all even numbers between 10 and 40");
var too = 10;
while ( too < 41 ) {
	console.log(too);
	too += 2;
}

// Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333");

var odd = 301;
while (odd < 334) {
	console.log(odd);
	odd += 2;
}

// Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");

var div = 5;
while (div < 51) {
	if ( div % 5 === 0 && div % 3 === 0 ) {
		console.log(div);
	}
	div++;
}