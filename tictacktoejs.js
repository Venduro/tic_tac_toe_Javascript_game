$(document).ready(function(){
  //this variable defines player 1
  var player1 = -1;
  //this variable defines player 2
  var player2 = 1;
  //this variable defines the beginings of player turns
  var numberClicks = 0;
  //This variable represents an array that represents the board, the zeros represent empty spaces.
  var boardArray = [0,0,0,0,0,0,0,0,0];

  //this function
  $("#submit").click(
    function() {
      //the variable
      var first = $("#player1Input").val().toUpperCase();
      //the variable
      var second = $("#player2Input").val().toUpperCase();
      $("#versus").html(first + " vs " + second);
      $("#player1Input").hide();
      $("#player2Input").hide();
      $("label").hide();
      $("#submit").hide();
    }
  );

  //This function initiate a coin toss to determine which player goes first
  $("#coinTossButton").click(
    function iniciateCoinToss(){
      //use math.floor to randomly pick a number between 1 and 2 (player 1 and player 2)
      var coinSide = Math.floor((Math.random() * 2) + 1);
      //if cointoss = 1 print heads!
      if (coinSide === 1) {
        $("#coinStatus").html("Heads! " + $("#player1Input").val() + " Goes First!");
        $("#coinTossButton").hide();
      }
      //if cointoss = 2 print tails
      if (coinSide === 2) {
        $("#coinStatus").html("Tails! " + $("#player2Input").val() + " Goes First!");
        $("#coinTossButton").hide();
      }
    }
  );


  //   The following functions runs when a user clicks on a square and changes the square to 'X'.
  $("#field0").click(function iniciateCoinToss(){
    //This links the function which connects clicks with evan or odd numbers to player 1 or 2
    clickDiv("#field0");
    findSum(boardArray);
  })

  $("#field1").click(function iniciateCoinToss(){
    clickDiv("#field1")
    findSum(boardArray);
  })

  $("#field2").click(function iniciateCoinToss(){
    clickDiv("#field2")
    findSum(boardArray);
  })

  $("#field3").click(function iniciateCoinToss(){
    clickDiv("#field3")
    findSum(boardArray);
  })

  $("#field4").click(function iniciateCoinToss(){
    clickDiv("#field4")
    findSum(boardArray);
  })

  $("#field5").click(function iniciateCoinToss(){
    clickDiv("#field5")
    findSum(boardArray);
  })

  $("#field6").click(function iniciateCoinToss(){
    clickDiv("#field6")
    findSum(boardArray);
  })

  $("#field7").click(function iniciateCoinToss(){
    clickDiv("#field7")
    findSum(boardArray);
  })

  $("#field8").click(function iniciateCoinToss(){
    clickDiv("#field8")
    findSum(boardArray);
  })


  //This is a function stops the button from being clicked twice, increases the number of clicks by 1, if the number is even prints X, and if odd prints O. Clicks represent player turns in the game.
  function clickDiv(myId){
    //this extracts the 6th place of the field ID string using .substring and assigns it to a variable.
    var fieldIndexNumber = myId.substring(6);
    //this stops the button from being clickable
    $(myId).unbind();
    //this increases the number of clicks by 1
    numberClicks++;

    //if numClicks is even it prints the X img.
    if (((numberClicks % 2) != 0) && numberClicks < 10)
    {
      //attaches the X img to the html
      $(myId).html("<img src='http://wiki.urbandead.com/images/b/bc/Xmark.png'/>")
      //This converts the string assigned to the field Id into an integer then changes the array index possition to the value of -1 once Player1(X) clicks the box, because player=-1.
      boardArray[parseInt(fieldIndexNumber)] = player1;
    }
    //if numClicks is odd it prints the O img.
    if (((numberClicks % 2) === 0) && numberClicks < 10) {
      //attaches the O img to the html
      $(myId).html("<img src='http://www.dreamincode.net/forums/uploads/post-97990-1260678636.png'/>")
      boardArray[parseInt(fieldIndexNumber)] = player2;

    }
  }

  function sum(arr, x, y, z) {
    return arr[x] + arr[y] + arr[z];
  };
  //this function resets the game by reloading the page. the function is called with in each if statement as X or O win or when the game is a Draw.
  function resetGame() {
    window.location.reload();
  }

  function slideWonResetX(){
    $( "p" ).slideDown( "slow" );
    $("p").html("X WON!!! </br> Play Again?");
    $("p").click(function(){
      resetGame();
    });
  }

  function slideDownOWonReset(){
    $("p").slideDown( "slow" );
    $("p").html("O WON!!! </br> Play Again?");
    $("p").click(function(){
      resetGame();
    });
  }

  //

  function findSum(boardArray) {
    if (sum(boardArray, 0, 1, 2) === -3) {
      slideWonResetX();
    }
    if (sum(boardArray, 3, 4, 5) === -3) {
      slideWonResetX();
    }
    if (sum(boardArray, 6, 7, 8) === -3) {
      slideWonResetX();
    }
    if (sum(boardArray, 0, 3, 6) === -3) {
      slideWonResetX();
    }
    if (sum(boardArray, 1, 4, 7) === -3) {
      slideWonResetX();
    }
    if (sum(boardArray, 2, 5, 8) === -3) {
      slideWonResetX();
    }
    if (sum(boardArray, 0, 4, 8) === -3) {
      slideWonResetX();
    }
    if (sum(boardArray, 2, 4, 6) === -3) {
      slideWonResetX();
    }
    if (sum(boardArray, 0, 1, 2) === 3) {
      slideDownOWonReset();
    }
    if (sum(boardArray, 3, 4, 5) === 3) {
      slideDownOWonReset();
    }
    if (sum(boardArray, 6, 7, 8) === 3) {
      slideDownOWonReset();
    }
    if (sum(boardArray, 0, 3, 6) === 3) {
      slideDownOWonReset();
    }
    if (sum(boardArray, 1, 4, 7) === 3) {
      slideDownOWonReset();
    }
    if (sum(boardArray, 2, 5, 8) === 3) {
      slideDownOWonReset();
    }
    if (sum(boardArray, 0, 4, 8) === 3) {
      slideDownOWonReset();
    }
    if (sum(boardArray, 2, 4, 6) === 3) {
      slideDownOWonReset();
    }
    //This function is for the cats game
    if (numberClicks === 9) {
      $("p").slideDown("slow");
      $("p").html("Cats Game!! </br> Play Again?");
      $("p").click(
        function(){
          resetGame();
        }
      )
    }
  }
});
