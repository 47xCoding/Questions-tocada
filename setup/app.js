// traversing the dom

// select item
const questions = document.querySelectorAll(".question");

// add event
questions.forEach( function (question) {
 const btn = question.querySelector(".question-btn")

 btn.addEventListener('click', function () {
  
  questions.forEach( function (item) {
   if (item !== question) {
    item.classList.remove("show-text");
   }
  });

  question.classList.toggle("show-text");
 });
});



//using selectors inside the element

// // select item
// const btns = document.querySelectorAll(".question-btn");

// // add event
// btns.forEach( function (btn) {
//  btn.addEventListener('click', function (e) {
//   const question = e.currentTarget.parentElement.parentElement;
//   question.classList.toggle("show-text");
//   console.log(question);
//  })
// })