import { questionList } from "./questionsList";

class QuizGame {
  private container: HTMLElement;
  private nextBtnContainer: HTMLDivElement | null;
  private currentIndex: number;
  private nextBtn: HTMLDivElement;

  constructor(containerId: string, nextContainerId: string) {
    this.container = document.getElementById(containerId)!;
    this.nextBtnContainer = document.querySelector(nextContainerId);
    this.currentIndex = 0;

    this.nextBtn = document.createElement("div");
    this.nextBtn.textContent = "Start";
    this.nextBtn.addEventListener("click", this.goToNextQuestion.bind(this));
    this.nextBtnContainer?.append(this.nextBtn);
  }

  private renderQuestion(index: number) {
    console.log("function execute");
    this.container.innerHTML = "";

    if (index >= questionList.length) {
      this.container.innerHTML = "Game Over";
      this.nextBtn.style.display = "none";
      return;
    }

    const questionLabel = document.createElement("div");
    questionLabel.id = "question";

    const ques = document.createElement("p");
    ques.textContent = questionList[index].question;

    const optionsContainer = document.createElement("div");
    optionsContainer.id = "options";

    questionList[index].options.forEach((option, idx) => {
      const btn = document.createElement("button");
      btn.id = idx.toString();
      btn.textContent = option;
      optionsContainer.append(btn);
    });

    questionLabel.append(ques, optionsContainer);
    this.container.append(questionLabel);

    optionsContainer.addEventListener("click", (e: Event) => {
      const target = e.target as HTMLElement;
      const btnId = target.closest("button")?.id;
      const selectedIndex = Number(btnId);
      // this.checkIfCorrect(index, selectedIndex);
    });
  }

  private goToNextQuestion() {
    console.log("next btn click");
    this.nextBtn.textContent = "Next";
    this.renderQuestion(this.currentIndex++);
    console.log(this.currentIndex);
  }
}

// Usage:
new QuizGame("questions-container", "#next");

// TODO:
