const texts = ["a Web Developer.", "available for hire", "alway learning"];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  //goes thru array
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typing").textContent = letter;
  // goes to next phrase of array
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 400);
})();
