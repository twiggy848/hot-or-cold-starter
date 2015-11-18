$(document).ready(function() {
    

	//all global variables
    var mainNumber = Math.floor(Math.random() * 100);
    var allGuesses = [];
    var count = 0;

    //New Game Reset
    function newGame(){
         window.location.reload();
    }
    
    var DEBUG_MODE = true;
    var debug = function(msg) {
        if (DEBUG_MODE == true) {
            console.log("DEBUG:", msg);
        }
    } 
    
    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);
    }); 
    
    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });
    
    debug(mainNumber);

    function addGuesses() {
    	//get the input value
        var input = $("#userGuess").val();
        var guess = parseFloat(input);
        debug (typeof guess);
        debug(guess);
        
        if (guess % 1 === 0) {
             //check the guess
            checkGuesses(guess);
        
		  //appended it to the gues list
            var guessDisplay = $('<li>' + guess + '</li>');
            $('#guessList').append(guessDisplay);
        } else {
            $('#feedback').text('Please enter a whole number.');
        }

		//reset it to the empty value for a new input
        $('#userGuess').val('');
    }
    
    //guess counter
    function countClicks() {
        count = count + 1;
        document.getElementById("count").innerHTML = count;
    }
    
    //check and store guesses, hot or cold?
    function checkGuesses(guess) {
        var hotLow = mainNumber - 5;
        var hotHigh = mainNumber + 5;
        var closeLow = mainNumber - 10;
        var closeHigh = mainNumber + 10;
        var medLow = mainNumber - 30;
        var medHigh = mainNumber + 30;
        
        guessStorage(guess);
        
	    function guessStorage(guess) {
            allGuesses.push(guess);
            debug(allGuesses);
            return allGuesses;
        }
        
        var lastGuessPosition = allGuesses.length - 2;
        debug('Position: ' + lastGuessPosition);
        var lastGuess = allGuesses[lastGuessPosition];
        debug('Last Guess: ' + lastGuess);
        
        if (guess == mainNumber) {
            $('#feedback').text('Your guess is CORRECT!, YOU WIN!');
        } else if ((guess >= hotLow) && (guess <= hotHigh )) {
            $('#feedback').text('Your guess is BOILING!!');
        } else if ((guess >= closeLow) && (guess <= closeHigh )) {
            $('#feedback').text('Your guess is getting HOTTER!');
        } else if ((guess >= medLow) && (guess <= medHigh )) {
            $('#feedback').text('Your guess is a little cold.');
        } else {
           $('#feedback').text('Your guess is freezing!'); 
        } 
        
        var helper = '';
        
        if ( lastGuess >= 1) {
            if (guess == mainNumber) {
                $('#feedback').text('Your guess is CORRECT!, YOU WIN!');
            } else if ( (guess > lastGuess) && (guess < mainNumber) ) {
                var helper = 'Keep going up';
            } else if ( (guess < lastGuess) && (guess < mainNumber) ) {
                var helper = 'Too Low!';
            } else if ( (guess < lastGuess) && (guess > mainNumber) ) {
                debug('True');
                debug(mainNumber);
               var helper = 'Keep going down'; 
            } else if ( (guess > lastGuess) && ( guess > mainNumber) ) {
                var helper = 'Too High!';
            } 
        }
        debug(helper);
        $('#feedback').append(' ' + helper);
            
    }
    
    //on button click addGuesses
    $('#guessButton').on('click', addGuesses);
    $('#guessButton').on('click', countClicks);
    
    //on key press Enter addGuesses
	$(document).on('keypress', function(key) {
        if (key.keyCode == 13) {
            addGuesses();
            countClicks();
        }
	});
	
    $('.new').on('click', newGame);
});
