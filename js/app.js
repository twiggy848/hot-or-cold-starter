$(document).ready(function() {
    

	//as soon as the page loads generate the random number
    var mainNumber = Math.floor(Math.random() * 100);

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
        var guess = $("#userGuess").val();
        debug(guess);
        
        //check the guess
        checkGuesses(guess);
        
		//appended it to the gues list
        var guessDisplay = $('<li>' + guess + '</li>');
        $('#guessList').append(guessDisplay);

		//reset it to the empty value for a new input
        $('#userGuess').val('');
    }
    
    //guess counter
    var count = 0;
    function countClicks() {
        count = count + 1;
        document.getElementById("count").innerHTML = count;
    }
    
        //here it should be the function which checks if the input number is close to random number and displays Hot, Warm, or Cold
    function checkGuesses(guess) {
        var closeLow = mainNumber -+ 10;
        var closeHigh = mainNumber + 10;
        var medLow = mainNumber - 30;
        var medHigh = mainNumber + 30;
        
	    if (guess == mainNumber) {
            $('#feedback').text('Your guess is CORRECT!, YOU WIN!');
        } else if ((guess >= closeLow) && (guess <= closeHigh )) {
            $('#feedback').text('Your guess is getting HOTTER!');
        } else if ((guess >= medLow) && (guess <= medHigh )) {
            $('#feedback').text('Your guess is a little cold.');
        } else {
           $('#feedback').text('Your guess is freezing!'); 
        }
            
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
