# Psychic-Game
Press key to guess the randomly selected answer.

Game starts 
Computer randomly a pickes letter.

When key is pressed, check if the letter matches the picked letter.
	If (guess matches letter) {
		add 1 to win tally
		reset guess letter list
		have computer pick another letter
	}
	else if (guess does not match letter) {
		subtract 1 from number of tries
		add guessed letter to a list
		display/update the guessed letter list to player
}

	If (number of tries reaches 0) {
		add 1 to losses tally
		reset guess letter list
		have computer pick another letter
	}