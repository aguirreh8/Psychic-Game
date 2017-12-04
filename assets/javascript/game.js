const wordBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'u', 'w', 'x', 'y', 'z'];
let compPick = "";
let guess = "";
let wins = 0;
let losses = 0;
let tries = 9;
let guessList = [];

function pickLetter() {
	compPick = wordBank[Math.floor(Math.random() * wordBank.length)];
}

function compareGuess() {
	if (guess === compPick) {
		wins++;
		gameReset();
	} else {
		tries--;
		guessList.push(guess);
		document.querySelector('#tries').innerHTML = "Tries left: " + tries;
		document.querySelector('#guesses').innerHTML = "Guesses so far: " + guessList;
		loseGame();
	}
}

function gameReset() {	
	while (guessList.length > 0) {
			guessList.pop();
	}
	pickLetter();
	tries = 9;
}

function loseGame() {
	if (tries === 0) {
		losses++;
		gameReset();
	}
}

pickLetter()
window.addEventListener('keyup', function(event) {
	if (event.keyCode >= 65 && event.keyCode <= 90) {
		guess = event.key.toLowerCase();
		console.log("I pressed: " + guess + " Computer picked: " + compPick);
		compareGuess();
		console.log("Current Tally");
		console.log("Wins: " + wins);
		console.log("Losses: " + losses);
		console.log("Tries: " + tries);
		console.log("Guesses Made: " + guessList);
		console.log("--------------------");		
	}

})