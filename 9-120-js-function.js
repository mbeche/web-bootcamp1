// write a function that tells use whether a value is event

function isEven(num) {
	if (num === 0) {
		return false;
	}
	else if (num % 2 === 0) {
		return true;
	}
	else {
		return false;
	}
}

//Colt's Solutions:
function isEven(num) {
	return num % 2 === 0;
}

// write a function that performs the factorial

function factorial(val) {
	if (val === 0) {
		num = 1;
	}
	else if (val <= 0) {
		console.log("please use a positive number");
	}
	else {
		var num = val;
		for (var i = val-1; i > 0; i--) {
			num = i*num;
		}
	}
	return(num);
}

// Colt's Solutions:

function factorial(num) {
	var result = 1;
	for (var 1 = 2; i <= num; i++) {
		result *= i;
	}
	return result;
}

// kebabToSnake()
// kebab uses dashes between words, replace them with underscores

function kebabToSnake(str) {
	str = str.replace("-","_");
	return str;
}

// Colt's Solutions:

function kebabkToSnake(str) {
	var newStr = str.replace(/-/g , "_");
	return newStr;
}