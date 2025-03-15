var buttonColours = ["red", "purple", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

document.getElementById("level-title").addEventListener("touchstart", function () {
  if (!started) {
    document.getElementById("level-title").textContent = "Level " + level;
    nextSequence();
    started = true;
  }
});

document.querySelectorAll(".btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
  });
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    document.body.classList.add("game-over");
    document.getElementById("level-title").textContent = "GAME OVER, on Pc Press ANY Key To Restart, on Mobile Touch Me To Restart";

    setTimeout(function () {
      document.body.classList.remove("game-over");
    }, 200);

    startOver();
  }
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  document.getElementById("level-title").textContent = "Level " + level;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  var button = document.getElementById(randomChosenColour);
  button.style.opacity = 0;
  setTimeout(() => (button.style.opacity = 1), 200);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  var button = document.getElementById(currentColor);
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
function clicked() {
  document.querySelector(".hid-box").classList.add('appear');
  setTimeout(function () {
    document.querySelector(".hid-box").classList.remove('appear');
  }, 9000)
}