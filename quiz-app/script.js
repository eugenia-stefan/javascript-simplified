
const form = document.querySelector("#quiz-form");
const answers = Array.from(document.querySelectorAll(".answer"));
const questions = document.querySelectorAll(".question-item");
const alert = document.querySelector("#alert");


function handleForm(e) {
  e.preventDefault();
  questions.forEach((question) => {
    question.classList.add("incorrect");
    question.classList.remove("correct");
  });
  const checkedAnswers = answers.filter((answer) => answer.checked);
  checkedAnswers.forEach((answer) => {
    const isCorrect = answer.value === "true";
    const questionItem = answer.closest(".question-item");
    if (isCorrect) {
      questionItem.classList.add("correct");
      questionItem.classList.remove("incorrect");
    } else {
      questionItem.classList.add("incorrect");
      questionItem.classList.remove("correct");
    }
  });

  const allAnswersCorrect = checkedAnswers.every(
    (answer) => answer.value === "true"
  );
  if (allAnswersCorrect) {
    alert.classList.add("active");
    setTimeout(() => {
      alert.classList.remove("active");
    }, 1000);
  }
}

form.addEventListener("submit", handleForm);
