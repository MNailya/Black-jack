// HackerYou: Nailya Mukhametova
// Project 2: Single Deck BlackJack Game
// Casino rules: 
// - One deck (52 cards does not include joker cards)
// - One player (human) vs a dealer (computer)
// - Soft 17 for a dealer
// - No splits 
// - No bets. Lets just play for fun;)
// - No insurance!


// Create a empty object
const blackJack = {};

// Add an object 'deck' to blackJack which is an array of 52 objects representing 
// cards, suits, values and codes to grab card images from a website. 
blackJack.deck =[
	{
		suit: 'heart',
		card: 'two',
		value: 2,
		code: '2H'
	},
	{
		suit: 'spade',
		card: 'two',
		value: 2,
		code: '2S'
	},
	{
		suit: 'diamond',
		card: 'two',
		value: 2,
		code: '2D'
	},
	{
		suit: 'club',
		card: 'two',
		value: 2,
		code: '2C'
	},
	{
		suit: 'heart',
		card: 'three',
		value: 3,
		code: '3H'
	},
	{
		suit: 'spade',
		card: 'three',
		value: 3,
		code: '3S'
	},
	{
		suit: 'diamond',
		card: 'three',
		value: 3,
		code: '3D'
	},
	{
		suit: 'club',
		card: 'three',
		value: 3,
		code: '3C'
	},
	{
		suit: 'heart',
		card: 'four',
		value: 4,
		code: '4H'
	},
	{
		suit: 'spade',
		card: 'four',
		value: 4,
		code: '4S'
	},
	{
		suit: 'diamond',
		card: 'four',
		value: 4,
		code: '4D'
	},
	{
		suit: 'club',
		card: 'four',
		value: 4,
		code: '4C'
	},
	{
		suit: 'heart',
		card: 'five',
		value: 5,
		code: '5H'
	},
	{
		suit: 'spade',
		card: 'five',
		value: 5,
		code: '5S'
	},
	{
		suit: 'diamond',
		card: 'five',
		value: 5,
		code: '5D'
	},
	{
		suit: 'club',
		card: 'five',
		value: 5,
		code: '5C'
	},
	{
		suit: 'heart',
		card: 'six',
		value: 6,
		code: '6H'
	},
	{
		suit: 'spade',
		card: 'six',
		value: 6,
		code: '6S'
	},
	{
		suit: 'diamond',
		card: 'six',
		value: 6,
		code: '6D'
	},
	{
		suit: 'club',
		card: 'six',
		value: 6,
		code: '6C'
	},
	{
		suit: 'heart',
		card: 'seven',
		value: 7,
		code: '7H'
	},
	{
		suit: 'spade',
		card: 'seven',
		value: 7,
		code: '7S'
	},
	{
		suit: 'diamond',
		card: 'seven',
		value: 7,
		code: '7D'
	},
	{
		suit: 'club',
		card: 'seven',
		value: 7,
		code: '7C'
	},
	{
		suit: 'heart',
		card: 'eight',
		value: 8,
		code: '8H'
	},
	{
		suit: 'spade',
		card: 'eight',
		value: 8,
		code: '8S'
	},
	{
		suit: 'diamond',
		card: 'eight',
		value: 8,
		code: '8D'
	},
	{
		suit: 'club',
		card: 'eight',
		value: 8,
		code: '8C'
	},
	{
		suit: 'heart',
		card: 'nine',
		value: 9,
		code: '9H'
	},
	{
		suit: 'spade',
		card: 'nine',
		value: 9,
		code: '9S'
	},
	{
		suit: 'diamond',
		card: 'nine',
		value: 9,
		code: '9D'
	},
	{
		suit: 'club',
		card: 'nine',
		value: 9,
		code: '9C'
	},
	{
		suit: 'heart',
		card: 'ten',
		value: 10,
		code: '0H'
	},
	{
		suit: 'spade',
		card: 'ten',
		value: 10,
		code: '0S'
	},
	{
		suit: 'diamond',
		card: 'ten',
		value: 10,
		code: '0D'
	},
	{
		suit: 'club',
		card: 'ten',
		value: 10,
		code: '0C'
	},
	{
		suit: 'heart',
		card: 'jack',
		value: 10,
		code: 'JH'
	},
	{
		suit: 'spade',
		card: 'jack',
		value: 10,
		code: 'JS'
	},
	{
		suit: 'diamond',
		card: 'jack',
		value: 10,
		code: 'JD'
	},
	{
		suit: 'club',
		card: 'jack',
		value: 10,
		code: 'JC'
	},
	{
		suit: 'heart',
		card: 'queen',
		value: 10,
		code: 'QH'
	},
	{
		suit: 'spade',
		card: 'queen',
		value: 10,
		code: 'QS'
	},
	{
		suit: 'diamond',
		card: 'queen',
		value: 10,
		code: 'QD'
	},
	{
		suit: 'club',
		card: 'queen',
		value: 10,
		code: 'QC'
	},
	{
		suit: 'heart',
		card: 'king',
		value: 10,
		code: 'KH'
	},
	{
		suit: 'spade',
		card: 'king',
		value: 10,
		code: 'KS'
	},
	{
		suit: 'diamond',
		card: 'king',
		value: 10,
		code: 'KD'
	},
	{
		suit: 'club',
		card: 'king',
		value: 10,
		code: 'KC'
	},
	{
		suit: 'heart',
		card: 'ace',
		value: [1,11],
		code: 'AH'
	},
	{
		suit: 'spade',
		card: 'ace',
		value: [1,11],
		code: 'AH'
	},
	{
		suit: 'diamond',
		card: 'ace',
		value: [1,11],
		code: 'AD'
	},
	{
		suit: 'club',
		card: 'ace',
		value: [1,11],
		code: 'AC'
	}
];

// Create an empty array to store the cards that user gets
blackJack.playerCards = [];

// Create an empty array to store the cards that dealer gets
blackJack.dealerCards = [];

// Create a variable that to check if a player has blackjack ("0"=no; "1"=yes)
blackJack.playerGotBlackjack = 0;

// Create a variable that to check if a dealer has blackjack ("0"=no; "1"=yes)
blackJack.dealerGotBlackjack = 0;

// Create a variable that to check if a player busted ("0"=no; "1"=yes)
blackJack.playerBusted = 0; 

// Function 1: draw a random card
blackJack.drawCard = () =>{
	// Pick a random number between 0 and length of the array
	const randomPick = Math.floor(Math.random()*blackJack.deck.length);
	// Find what card was chosen
	const cardChoice = blackJack.deck[randomPick];
	// Remove the card from the array (so it does not being picked multiple times)
	blackJack.deck.splice(blackJack.deck.indexOf(cardChoice),1);
	// Save a card object
	return cardChoice;
}

// Function 2: Draw a card for a player and create a new array of a player's hand
blackJack.playerDrawCard = () =>{
	// Assign a new card draw to a varuable
	const newPlayerCard = blackJack.drawCard();
	// Add this new card to Player's hand array
	blackJack.playerCards.push(newPlayerCard);
	// Display a card 
	$('#user-hand').append(`<img src='https://deckofcardsapi.com/static/img/${newPlayerCard.code}.png'>`);
};

// Function 3: Draw a card for a dealer and create a new array of a dealer's hand
blackJack.dealerDrawCard = () =>{
	// Assign a new card draw to a varuable
	const newDealerCard = blackJack.drawCard();
	// Add this new card to Dealer's hand array
	blackJack.dealerCards.push(newDealerCard);
	// Display a card
	$('#dealer-hand').append(`<img id="dealer" src='https://deckofcardsapi.com/static/img/${newDealerCard.code}.png'>`);
};

// Function 4: Start Game 
blackJack.startGame = () => {
	//disable "start" button
	$('#start').prop('disabled', true);
	$('#start').removeClass('btn-active');
	$('#start').addClass('btn-disabled');
	//draw 1 card for a player
	blackJack.playerDrawCard();
	//draw 1 card for a dealer
	blackJack.dealerDrawCard(); 
	//hide a dealer's card (show only the back of this card)
	$('#dealer:nth-child(2)').attr('src',"../BlackJack/images/back-card.png");
	//draw 1 card for a player
	blackJack.playerDrawCard();
	//draw 1 card for a dealer
	blackJack.dealerDrawCard();
	// enable "hit" and "stand" buttons
	$('#hit').removeClass('btn-disabled');
	$('#hit').addClass('btn-active');
	$('#stand').removeClass('btn-disabled');
	$('#stand').addClass('btn-active');
	// count Total for a player depending if Ace=1 or Ace=11
	blackJack.playerTotalAce1();
	blackJack.playerTotalAce11();
	//check if players score went over 21
	blackJack.isPlayerBusted(blackJack.playerTotal1,blackJack.playerTotal2);
	// call a function for "Hit" button in case a player wants to draw more cards
	blackJack.hit();
	// call a function for "Stand" button in case a player wants to stop getting more cards
	blackJack.stand();
}

//Function 5: Update Scores
blackJack.updateScore = (id,total) =>{
	$(`#${id}`).html(total);
}

// Function 6: Count Totals for a player depending on ace value equal 1 (one).
blackJack.playerTotalAce1 = () =>{
	// A varuable that stores the score
	blackJack.playerTotal1 = 0;
	// Go through player cards and count the total value of the cards
	for (i=0; i<blackJack.playerCards.length; i++){
		if (blackJack.playerCards[i].card === 'ace') {
				blackJack.playerTotal1 = blackJack.playerTotal1 + blackJack.playerCards[i].value[0];
				blackJack.updateScore('player-score-1',blackJack.playerTotal1);
		} else {
			blackJack.playerTotal1 = blackJack.playerTotal1 + blackJack.playerCards[i].value;
			blackJack.updateScore('player-score-1',blackJack.playerTotal1);
		}
	}
	return blackJack.playerTotal1;
}

// Function 7: Count Totals for a player depending on ace value equal 11 (eleven).
blackJack.playerTotalAce11 = () =>{
	// A varuable that stores the score
	blackJack.playerTotal2 = 0;
	// Go through player cards and count the total value of the cards
	for (i=0; i<blackJack.playerCards.length; i++){
		if (blackJack.playerCards[i].card === 'ace') {
				blackJack.playerTotal2 = blackJack.playerTotal2 + blackJack.playerCards[i].value[1];
				blackJack.updateScore('player-score-11',blackJack.playerTotal2);
		} else {
			blackJack.playerTotal2 = blackJack.playerTotal2 + blackJack.playerCards[i].value;
			blackJack.updateScore('player-score-11',blackJack.playerTotal2);
		}
	}
	return blackJack.playerTotal2;
}

// Function 8: Count Totals for a dealer depending on ace value equal 1 (one).
blackJack.dealerTotalAce1 = () =>{
	// A varuable that stores the score
	blackJack.dealerTotal1 = 0;
	// Go through dealer's cards and count the total value of the cards
	for (i=0; i<blackJack.dealerCards.length; i++){
		if (blackJack.dealerCards[i].card === 'ace') {
			blackJack.dealerTotal1 = blackJack.dealerTotal1 + blackJack.dealerCards[i].value[0];
			blackJack.updateScore('dealer-score-1',blackJack.dealerTotal1);
		} else {
			blackJack.dealerTotal1 = blackJack.dealerTotal1 + blackJack.dealerCards[i].value;
			blackJack.updateScore('dealer-score-1',blackJack.dealerTotal1);
		}
	}
	return blackJack.dealerTotal1;
}

// Function 9: Count Totals for a player depending on ace value equal 11 (eleven).
blackJack.dealerTotalAce11 = () =>{
	// A varuable that stores the score
	blackJack.dealerTotal2 = 0;
	// Go through dealer's cards and count the total value of the cards
	for (i=0; i<blackJack.dealerCards.length; i++){
		if (blackJack.dealerCards[i].card === 'ace') {
				blackJack.dealerTotal2 = blackJack.dealerTotal2 + blackJack.dealerCards[i].value[1];
				blackJack.updateScore('dealer-score-11',blackJack.dealerTotal2);
		} else {
			blackJack.dealerTotal2 = blackJack.dealerTotal2 + blackJack.dealerCards[i].value;
			blackJack.updateScore('dealer-score-11',blackJack.dealerTotal2);
		}
	}
	return blackJack.dealerTotal2;
}

// Function 10: Player Draws a New Card
blackJack.hit = () => {
	$('#hit').on('click',function(){
		//draw a new card
		blackJack.playerDrawCard();
		// count player's totals
		blackJack.playerTotalAce1();
		blackJack.playerTotalAce11();
		//check if player went over 21
		blackJack.isPlayerBusted(blackJack.playerTotal1,blackJack.playerTotal2);
	});
}

// Function 11: Disable "Hit" and "Stand" buttons
blackJack.hitStandDisabled = () =>{
	// disables hit button
	$('#hit').prop('disabled', true);
	$('#hit').removeClass('btn-active');
	$('#hit').addClass('btn-disabled');
	// disables stand button
	$('#stand').prop('disabled', true);
	$('#stand').removeClass('btn-active');
	$('#stand').addClass('btn-disabled');
}

// Function 12: Stand (Prevents from drawing a new card)
blackJack.stand = () => {
	$('#stand').on('click',function(){
		// Disable "Hit" and "Stand" buttons
		blackJack.hitStandDisabled();
		// Check if a player went over 21
		blackJack.isPlayerBusted(blackJack.playerTotal1, blackJack.playerTotal2);
		// Check if a player has a blackJack
		blackJack.isPlayerBlackJack(blackJack.playerTotal1, blackJack.playerTotal2);
	});
}

// Function 13: Dealer Draws a New Card 
blackJack.dealerHit = () =>{
	//draw a new card
	blackJack.dealerDrawCard();
	// count totals
	blackJack.dealerTotalAce1();
	blackJack.dealerTotalAce11();
	// check if a dealer went over 21 or got blackjack or need more cards
	blackJack.bustedOrBlackJackDealer(blackJack.dealerTotal1, blackJack.dealerTotal2);
}

//Function 14: Dealer's turn 
blackJack.dealerTurn = () => {
	//show dealer's hidden card
	$('#dealer:nth-child(2)').attr('src',`https://deckofcardsapi.com/static/img/${blackJack.dealerCards[0].code}.png`);
	//count the totals
	blackJack.dealerTotalAce1();
	blackJack.dealerTotalAce11();
	//check if a dealer went over 21 or has a blackjack or needs more cards
	blackJack.bustedOrBlackJackDealer(blackJack.dealerTotal1,blackJack.dealerTotal2);
}

// Function 15: Check which total is lower
blackJack.smallestTotal = (total1,total2) => {
	if (total1 <= total2){
		return total1;
	} else if (total1 === 21) {
		return total1;
	} else if (total2 === 21){
		return total2;
	} else {
		return total2;
	}
}

// Function 16: Close pop up window with the game result message
blackJack.closeMessage = () => {
	// hide popup window when a player clicks "X"
	$('#btn-close').on('click', function(){
		$('#result').hide();
		blackJack.reStart();
	});
	// hide popup window when a player clicks outside of the popup window
	$('#result').on('click', function(e){
		if (e.target == this) { 
			$('#result').hide();
			blackJack.reStart();
		}
	});
	// hide popup window when a player clicks ESC button on a keyboard
	$(document).keyup(function(e) {
	    if (e.keyCode == 27) { // escape key maps to keycode `27`
	       $('#result').hide();
	       blackJack.reStart();
	    }
	});

}

// Function 17: Show win/lost popup message
blackJack.resultMessage = (message) =>{
	// show message
	$('#result').show();
	$('#result-message').html(message);
	//disable hit and stand buttons
	blackJack.hitStandDisabled();
	// call a function to close the message window
	blackJack.closeMessage();
}

// Function 18: Check if a player went over 21
blackJack.isPlayerBusted = (total1,total2) => {
	// assign a lower total to a varuable
	blackJack.playerTotal = blackJack.smallestTotal(total1,total2);
	// check if total more than 21
	if (blackJack.playerTotal > 21) {
		blackJack.playerBusted = 1;
		// show a message
		blackJack.resultMessage('You Bust!');
		// disable buttons hit and stand
		blackJack.hitStandDisabled();
		// go to dealer's hand
		blackJack.dealerTurn();
 	}
}

// Function 19: check if a player got BlackJack
blackJack.isPlayerBlackJack = (total1,total2) => {
	// if one of the totals is 21
	if (total1 === 21 || total2 === 21){
		// if a player has 2 cards
		if (blackJack.playerCards.length == 2){
			blackJack.playerTotal = 21;
			//player has Natural BlackJack
			blackJack.playerGotBlackjack = 1;
		} else {
			blackJack.playerTotal = 21;
			//player does not have a BlackJack because they have more than 2 cards
			blackJack.playerGotBlackjack = 0;
		}
		// disable hit and stand buttons
		blackJack.hitStandDisabled();
		// go to dealer's hand
		blackJack.dealerTurn();
 	} else{
 		blackJack.playerGotBlackjack = 0;
 		// go to dealer's hand
		blackJack.dealerTurn();
	}
}

// Function 20: Busted or BlackJack for a Dealer 
blackJack.bustedOrBlackJackDealer = (total1,total2) => {
	blackJack.dealerTotal = blackJack.smallestTotal(total1,total2);
	//check if delaer's score equal 21
	if (total1 === 21 || total2 === 21){
		// check if a dealer has 2 cards
		if (blackJack.dealerCards.length == 2) {
			//dealer got natural blackjack
			blackJack.dealerGotBlackjack = 1;
			blackJack.dealerTotal = 21;
		} else {
			// dealer did not get blackjack
			blackJack.dealerGotBlackjack = 0;
			blackJack.dealerTotal = 21;
		}
		// check who won the game (in case it is a tie)
		blackJack.whoWon();
	//check if a delaer went over 21
	} else if (blackJack.dealerTotal > 21) {
		// check who won the game
		blackJack.whoWon();
	// check if a dealer's score is less than 17
	} else if (blackJack.dealerTotal <= 17){
		// dealer gets more cards
		blackJack.dealerHit();
	// check who won
	} else {
		blackJack.whoWon();
	}
}

// Function 21: checks the rest of the combinations and displays the message
blackJack.whoWon = () =>{
	if (blackJack.playerGotBlackjack ===1 && blackJack.dealerGotBlackjack === 0){
		blackJack.resultMessage('BlackJack');
	} else if (blackJack.playerGotBlackjack ===1 && blackJack.dealerGotBlackjack === 1){
		blackJack.resultMessage("It's a Push!");
	} else if (blackJack.playerGotBlackjack ===0 && blackJack.dealerTotal > 21 && blackJack.playerTotal===21) {
		blackJack.resultMessage("You Won!");
	} else if (blackJack.playerGotBlackjack ===0 && blackJack.dealerGotBlackjack === 1){
		blackJack.resultMessage("You Lost!");
	} else if (blackJack.dealerTotal < 21 && blackJack.dealerTotal > blackJack.playerTotal && blackJack.playerTotal!=21) {
		blackJack.resultMessage('You Lost!');
	} else if (blackJack.dealerTotal < 21 && blackJack.playerTotal===21 && blackJack.playerGotBlackjack === 0){
		blackJack.resultMessage("You Won!");
	} else if (blackJack.dealerTotal < 21 && blackJack.dealerTotal === blackJack.playerTotal && blackJack.playerTotal < 21){
		blackJack.resultMessage("It's a Push!");
	} else if ( blackJack.playerTotal < 21 && blackJack.dealerTotal < blackJack.playerTotal ){
		blackJack.resultMessage("You Won!");
	} else if (blackJack.playerTotal < 21 && blackJack.dealerTotal > 21){
		blackJack.resultMessage("You Won!");
	} else if (blackJack.playerTotal < 21 && blackJack.dealerTotal === 21 && blackJack.dealerGotBlackjack === 0) {
		blackJack.resultMessage("You Lost!"); 
	} 

	console.log("Player's hand", blackJack.playerCards);
	console.log("Dealer's hand", blackJack.dealerCards);
	console.log("Deck of cards", blackJack.deck);	
}


// Function 22: show rules of the game
blackJack.rules = () =>{
	$('.rules_btn').on('click', function(){
		$('#rules').css('display','block');
		blackJack.closeRules();
	});
}
blackJack.rules();

// Function 23: close rules
blackJack.closeRules = () => {
	// hide popup window when a player clicks "X"
	$('#btn-close-1').on('click', function(){
		$('#rules').hide();
	});
	// hide popup window when a player clicks outside of the popup window
	$('.overlay').on('click', function(e){
		if (e.target == this) { 
			$('#rules').hide();
		}
	});
	// hide popup window when a player clicks ESC button on a keyboard
	$(document).keyup(function(e) {
	    if (e.keyCode == 27) { // escape key maps to keycode `27`
	       $('#rules').hide();
	    }
	});
}

//FUnction 24: Re-start the game
blackJack.reStart = () =>{
	$('#start').hide();
	$('#restart').show();
	$('#restart').on('click', function(){
		location.reload();
	});
}

blackJack.init = () =>{
		blackJack.startGame();
}

$(function(){
	$('#start').on('click', function(){
		blackJack.init();
	});
});