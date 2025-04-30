import { questionList } from "./questionsList";

class QuizGame {
  private container: HTMLElement;
  private nextBtnContainer: HTMLDivElement | null;
  private currentIndex: number;
  private nextBtn: HTMLDivElement;
  private player1: string = "player1";
  private player2: string = "player2";
  private score1: number = 0;
  private score2: number = 0;
  private playersContainer: HTMLDivElement | null;
  private timer: number = 0;

  constructor(containerId: string, nextContainerId: string) {
    this.container = document.getElementById(containerId)!;
    this.nextBtnContainer = document.querySelector(nextContainerId);
    this.currentIndex = 0;

    this.nextBtn = document.createElement("div");
    this.nextBtn.textContent = "Start";
    this.nextBtn.addEventListener("click", this.goToNextQuestion.bind(this));
    this.nextBtnContainer?.append(this.nextBtn);
    this.playersContainer = document.querySelector("#players");
  }

  private renderQuestion(index: number) {
    this.container.innerHTML = "";

    if (index >= questionList.length) {
      this.container.innerHTML = "Game Over";
      this.nextBtn.style.display = "none";
      return;
    }

    const questionLabel = document.createElement("div");
    questionLabel.id = "question";

    const ques = document.createElement("p");
    ques.innerHTML =
      index % 2 === 0
        ? `
    question for ${this.player1}:  
    ${questionList[index].question}`
        : `
    question for ${this.player2}:  
    ${questionList[index].question}`;

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
      const btn = target.closest("button");
      const btnId = btn?.id;
      const selectedIndex = Number(btnId);
      btn!.style.backgroundColor =
        questionList[index].correctAns === selectedIndex ? "green" : "red";
      const allButtons = document.querySelectorAll("#options button");
      allButtons.forEach((btn) => {
        (btn as HTMLButtonElement).disabled = true;
      });

      if (selectedIndex) {
        optionsContainer.matches("button");
      }
      this.checkIfCorrect(index, selectedIndex);
    });
  }

  private checkIfCorrect(index: number, selectedIndex: number) {
    if (selectedIndex === questionList[index].correctAns) {
      if (index % 2 === 0) {
        ++this.score2;
        this.playersContainer!.innerHTML = `
          <div id="player1">
          <span id="player1-name">Player1</span>
          <span id="player1-score">Score: ${this.score1}</span>
        </div>
        <div id="player1">
          <span id="player2-name">Player2</span>
          <span id="player2-score">Score: ${this.score2}</span>
        </div>
        `;
      } else {
        this.score1++;
        this.playersContainer!.innerHTML = `
          <div id="player1">
          <span id="player1-name">Player1</span>
          <span id="player1-score">Score: ${this.score1}</span>
        </div>
        <div id="player1">
          <span id="player2-name">Player2</span>
          <span id="player2-score">Score: ${this.score2}</span>
        </div>
        `;
      }
    }
  }

  private goToNextQuestion() {
    this.nextBtn.textContent = "Next";
    this.renderQuestion(this.currentIndex++);
  }
}

// Usage:
new QuizGame("questions-container", "#next");

// TODO:
