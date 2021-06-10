// traversing the dom










//using selectors inside the element

// select item
const btns = document.querySelectorAll(".question-btn");

// add event
btns.forEach( function (btn) {
 btn.addEventListener('click', function (e) {
  const question = e.currentTarget.parentElement.parentElement;
  question.classList.toggle("show-text");
  console.log(question);
 })
})