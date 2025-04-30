import { questionList } from "./questionsList";

const questionContainer = document.getElementById("questions-container");

function createQuestion(num = 0) {
  console.log("function execurte");

  const questionLabel = document.createElement("div");
  const ques = document.createElement("p");
  const optionsContainer = document.createElement("div");
  questionContainer!.innerHTML = "";
  if (num >= questionList.length) {
    questionContainer!.innerHTML = "game over";
    next!.style.display = "none";
  }

  ques.textContent = questionList[num].question;
  const options = questionList[num].options;
  options.map((option) => {
    const opt = document.createElement("p");
    opt.textContent = option;
    optionsContainer.append(opt);
  });

  questionLabel.append(ques, optionsContainer);
  questionContainer?.append(questionLabel);
}

const nextBtn = document.createElement("div");
nextBtn.textContent = "Next";

let i = 0;
nextBtn.addEventListener("click", () => {
  console.log("next btn click");

  createQuestion(i);
  console.log(i);

  i++;
});

const next: HTMLDivElement | null = document.querySelector("#next");

next?.append(nextBtn);
