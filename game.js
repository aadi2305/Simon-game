
var buttonColours = ["red", "blue","green" ,"yellow"];
var gamePattern = [];
var userClickedPattern = [];
var count = 0, level = 1;


function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomColor = buttonColours[randomNumber];
    gamePattern.push(randomColor);
    clickAnimation(randomColor);
}



$(document).keypress(function(){
$("h1").text("Level: "+ level);
nextSequence();
})
    


$(".btn").click(function(){
    var userClikcedButton = $(this).attr("id");
    clickAnimation(userClikcedButton);
    userClickedPattern.push(userClikcedButton);
    playSound(userClikcedButton);
    count++;
    if(count == level)checkAnswer();
})


function checkAnswer(){
    for (var i =0 ; i< gamePattern.length;  i++) {
        if(gamePattern[i]!=userClickedPattern[i]){
            gameOver();
            return
        }
    }
    userClickedPattern = [];
    count = 0;
    level++;
    $("h1").text("Level: "+ level);
    setTimeout(function(){
        nextSequence()
    }, 700);
    
}
function clickAnimation(color){
    $("#"+color).addClass("pressed");
    setTimeout(function(){
        $("#"+color).removeClass("pressed"); 
    }, 200);
}

function gameOver(){
    $("h1").text("Game Over. Press any key to start again");
    playSound("wrong");
    gamePattern = [];
    userClickedPattern = [];
    count = 0, level = 1;
}

function playSound(color){
    var audio = new Audio("sounds/"+color+".mp3");
    audio.play();
}
