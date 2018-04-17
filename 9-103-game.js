// alert("Hello!");

// create secret number
var secretNumber = Math.round(Math.random()*100);

// ask user for guess
var guess = Number(prompt("Guess number"));

//check if guess is right
while (guess !== secretNumber) {
	if(Number(guess) === (secretNumber)) {
			alert("You got it right!");
			break;
	}	// otherwise: check if higher or lower

	else if (guess > secretNumber) {
		guess = prompt("Two high, guess again");
	}

	else {
		guess = prompt("Two low, guess again");
	}
}
