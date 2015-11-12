
$(document).ready(function(){

	var DEBUG_MODE = true;
		var debug = function(msg) {
	    if (DEBUG_MODE == true) {
	        console.log("DEBUG:", msg);
	    }
	}
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var guess = $("#userGuess").val();
  	debug(guess);
  	var mainNumber = Math.floor(Math.random()*100);
  	debug(mainNumber);
  	var guessDisplay = $('<li>' + guess + '</li>');

  		function addGuesses(){

	    $('.guessBox').prepend(guessDisplay);
	    $('guess').val();

  		};

  		$('#guessButton').on('click', addGuesses);
  		$('#userGuess').keydown(function(e) {
        if (e.which == 13 ) {
            addGuesses();
        }
  
    	});
    	// $('#userGuess').keydown(function(e) {
	    //     if (e.which == 13 ) {
	    //         addGuesses();
	    //     }
     //    });


});


