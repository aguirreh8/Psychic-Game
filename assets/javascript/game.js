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

function resetGuessList() {
	if (guessList.length == 9) {
		while (guessList.length > 0) {
			guessList.pop();
		}
	}
}

pickLetter();

window.addEventListener('keyup', function(event) {
	if (event.keyCode >= 65 && event.keyCode <= 90) {
		guess = event.key.toLowerCase();
		alert("You have pressed a letter: " + guess);
		guessList.push(guess);
		console.log(guessList);
	}

})