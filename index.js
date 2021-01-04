// ~~~~~~~~~~~~~~~~~ query selectors  ~~~~~~~~~~~~~~~~~~~~~~~~
var userQuestion = document.querySelector(".user-question");
var getYourAnswerButton = document.querySelector(".get-your-answer");
var eightBallImage = document.querySelector(".eight-ball");
var askedQuestion = document.querySelector(".entered-question");
var answer = document.querySelector(".answer");
var clearButton = document.querySelector(".clear");

// ~~~~~~~~~~~~~~~~~ event listeners ~~~~~~~~~~~~~~~~~~~~~~~~
getYourAnswerButton.addEventListener("click", generateAnswer);
clearButton.addEventListener("click", clearField);

// ~~~~~~~~~~~~~~~~~ global variables ~~~~~~~~~~~~~~~~~~~~~~~~
var answers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
]
// ~~~~~~~~~~~~~~~~~ functions ~~~~~~~~~~~~~~~~~~~~~~~~
