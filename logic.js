//Goal score is generated 
//Four random scores are created
//Random scores are assigned to each button
//each button click adds the score to "Your Score"

//selected Goal Score will be held here
var goalScore = 0;

//Where your total score will be held
var yourScore = 0;

//Where values for each button will be stored
var button1 = [];
var button2 = [];
var button3 = [];
var button4 = [];

//Counters for wins and losses
var wins = 0;
var losses = 0;
var crystals = {};

function win() {
    startGame();
    wins++;
    $(".wins").text(wins);
    alert("You Win!");
    $(".your-number").text("0");

}
function lose() {
    startGame();
    losses++;
    $(".losses").text(losses);
    alert("You Lose!");
    $(".your-number").text("0");

}

//Function for starting the game
function startGame() {
    //Resets your score back to zero
    yourScore = 0;
    // Goal score chosen randomly from range of numbers
    goalScore = Math.floor(Math.random() * 101) + 19;
    $(".goal-number").text(goalScore);

    console.log(goalScore);

    //score assigned to each button
    crystals = {
        button1score: Math.floor(Math.random() * 11) + 1,
        button2score: Math.floor(Math.random() * 11) + 1,
        button3score: Math.floor(Math.random() * 11) + 1,
        button4score: Math.floor(Math.random() * 11) + 1,
    }


    // console.log(crystals.button1score, button2score, button3score, button4score);
    $(".btn1").val(crystals.button1score);
    $(".btn2").val(crystals.button2score);
    $(".btn3").val(crystals.button3score);
    $(".btn4").val(crystals.button4score);
    console.log(crystals);

}

$(".btn1").on("click", function () {
    yourScore += crystals.button1score;
    $(".your-number").text(yourScore);
    if (yourScore === goalScore) {
        win();
    }
    if (yourScore > goalScore) {
        lose();
    }
})
console.log(yourScore);
$(".btn2").on("click", function () {
    yourScore += crystals.button2score;
    $(".your-number").text(yourScore);
    if (yourScore === goalScore) {
        win();
    }
    if (yourScore > goalScore) {
        lose();
    }
})
$(".btn3").on("click", function () {
    yourScore += crystals.button3score;
    $(".your-number").text(yourScore);
    if (yourScore === goalScore) {
        win();
    }
    if (yourScore > goalScore) {
        lose();
    }
})
$(".btn4").on("click", function () {
    yourScore += crystals.button4score;
    $(".your-number").text(yourScore);
    if (yourScore === goalScore) {
        win();
    }
    if (yourScore > goalScore) {
        lose();
    }
})

//Reset the text on the page that doesnt need to be carried over

startGame();

