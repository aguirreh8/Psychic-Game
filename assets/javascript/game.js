// Create word bank array
const wordBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'u', 'w', 'x', 'y', 'z'];
// Create local variables
let compPick = "";
let guess = "";
let wins = 0;
let losses = 0;
let tries = 9;
let guessList = [];

// Randomly pick an index from array and store into a global variable
function pickLetter() {
	compPick = wordBank[Math.floor(Math.random() * wordBank.length)];
}

// Check the current user's input
function compareGuess() {
	// If user's input matched the stored value, add 1 to wins, display to dom, and reset game
	if (guess === compPick) {
		wins++;
		document.querySelector('#wins').innerHTML = "Wins: " + wins;
		gameReset();
	} 
	// if user's input does not match, - 1 to tries, push the input to an array, display all and check if game is over
	else {
		tries--;
		guessList.push(guess);
		document.querySelector('#tries').innerHTML = "Tries left: " + tries;
		document.querySelector('#guesses').innerHTML = guessList + ' ';
		loseGame();
	}
}

// Reset game once it's over
function gameReset() {	
	while (guessList.length > 0) {
			guessList.pop();
	}
	pickLetter();
	tries = 9;
	document.querySelector('#tries').innerHTML = "Tries left: " + tries;
	document.querySelector('#guesses').innerHTML = ' ';
}

// Check if user has ran out of tries and reset game
function loseGame() {
	//if tries is 0, add 1 to losses, display to dom, and reset game
	if (tries === 0) {
		losses++;
		document.querySelector('#losses').innerHTML = "Losses: " + losses;
		gameReset();
	}
}

pickLetter()
// listen to keyboard presses
window.addEventListener('keyup', function(event) {
	//Check if keyboard press was an alphabet key. If not, do nothing
	if (event.keyCode >= 65 && event.keyCode <= 90) {
		guess = event.key.toLowerCase(); // store press into a variable
		compareGuess(); //run game check		
	}

})