var pos = 0,
  test,
  test_status,
  question,
  choice,
  choices,
  chA,
  chB,
  chC,
  chD,
  correct = 0;
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const counter = document.getElementById("counter");
let TIMER;
var time = questions.length * 20;
let count = 20;
const questionTime = 20;
start.addEventListener("click", startQuiz);
// start quiz
function startQuiz() {
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderCounter();
  TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}
function quizEnd() {
  // stop timer
  clearInterval(TIMER);
}
function _(x) {
  return document.getElementById(x);
}
function renderQuestion() {
  test = _("test");
  if (pos >= questions.length) {
    test.innerHTML =
      "<h2>Your score is " + correct + " of " + questions.length + " .</h2>";
    _("test_status").innerHTML = "All Done!";
    pos = 0;
    correct = 0;
    return false;
  }
  _("test_status").innerHTML =
    "Question " + (pos + 1) + " of " + questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  chD = questions[pos][4];
  test.innerHTML = "<h3>" + question + "</h3>";
  test.innerHTML +=
    "<input type='radio' name='choices' value='A'> " + chA + "<br>";
  test.innerHTML +=
    "<input type='radio' name='choices' value='B'> " + chB + "<br>";
  test.innerHTML +=
    "<input type='radio' name='choices' value='C'> " + chC + "<br>";
  test.innerHTML +=
    "<input type='radio' name='choices' value='D'> " + chD + "<br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function renderCounter() {
  if (count <= time) {
    counter.innerHTML = count;
    count--;
  }
  if (count <= 0) {
    quizEnd();
  }
}
function checkAnswer() {
  choices = document.getElementsByName("choices");
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value;
    }
  }
  if (choice == questions[pos][5]) {
    correct++;
    alert("Good job!");
  } else {
    alert("Nope!");
  }
  pos++;
  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);
