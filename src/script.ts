import { EASY, HARD, MEDIUM } from "./constants";
import {
  Question,
  questionList,
  questionListHard,
  questionsListMedium,
} from "./questionsList";

class QuizGame {
  private container: HTMLElement;
  private nextBtnContainer: HTMLDivElement | null;
  private currentIndex: number;
  private nextBtn: HTMLDivElement;
  private player1: string = "Player 1";
  private player2: string = "Player 2";
  private score1: number = 0;
  private score2: number = 0;
  private playersContainer: HTMLDivElement | null;
  private timer: number = 0;
  private timerInterval: number | null = null;
  private timerDisplay: HTMLDivElement | null = null;
  private timeLeft: number = 10;

  private category: HTMLSelectElement | null;
  private typeOfQuestion: Question[] = [];

  constructor(containerId: string, nextContainerId: string) {
    this.container = document.getElementById(containerId)!;
    this.nextBtnContainer = document.querySelector(nextContainerId);
    this.currentIndex = 0;
    this.nextBtn = document.querySelector("#next")!;
    this.nextBtn.textContent = "Start";
    this.nextBtn.addEventListener("click", this.goToNextQuestion.bind(this));
    this.playersContainer = document.querySelector("#players");
    this.category = document.querySelector("#category");

    this.typeOfQuestion = questionList;

    this.selectCategory = this.selectCategory.bind(this);
    this.init();
  }

  init() {
    this.category?.addEventListener("change", this.selectCategory);
  }

  handleRestart() {
    const restartBtn = document.querySelector("#restart");
    restartBtn?.addEventListener("click", () => {
      this.currentIndex = 0;
      this.score1 = 0;
      this.score2 = 0;
      this.updateScoreDisplay();
      this.renderQuestion(this.currentIndex);
    });
  }

  private selectCategory(e: Event) {
    const target = e.target;
    if (target instanceof HTMLSelectElement) {
      const selectedIndex = target.selectedIndex;
      if (selectedIndex === EASY) {
        this.typeOfQuestion = questionList;
      } else if (selectedIndex === HARD) {
        this.typeOfQuestion = questionListHard;
      } else if (selectedIndex === MEDIUM) {
        this.typeOfQuestion = questionsListMedium;
      }
      this.nextBtn.style.display = "none";

      this.currentIndex = 0;
      this.score1 = 0;
      this.score2 = 0;
      this.updateScoreDisplay();
      this.renderQuestion(this.currentIndex);
    }
  }

  private startTimer() {
    this.timeLeft = 10;
    if (this.timerDisplay) {
      this.timerDisplay.textContent = `Time left: ${this.timeLeft}s`;
    }
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      if (this.timerDisplay) {
        this.timerDisplay.textContent = `Time left: ${this.timeLeft}s`;
      }
      if (this.timeLeft <= 0) {
        this.handleTimeExpired();
      }
    }, 1000);
  }

  private handleTimeExpired() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    const allButtons = document.querySelectorAll("#options button");
    allButtons.forEach((btn) => {
      (btn as HTMLButtonElement).disabled = true;
    });
    const selectedButton = document.querySelector(
      "#options button[style*='background-color']"
    );
    if (selectedButton) {
      const selectedIndex = Number(selectedButton.id);
      this.checkIfCorrect(this.currentIndex - 1, selectedIndex);
    }
    setTimeout(() => {
      this.goToNextQuestion();
    }, 1500);
  }

  private renderQuestion(index: number) {
    if (this.typeOfQuestion.length === 0) {
      this.container.innerHTML =
        "<p>Please select a question category first!</p>";
      return;
    }

    this.container.innerHTML = "";
    let winner: string;
    if (this.score1 === this.score2) winner = "draw";
    else if (this.score1 > this.score2) winner = this.player1;
    else winner = this.player2;

    if (index >= this.typeOfQuestion.length) {
      this.container.innerHTML = `
        <div class="game-over">
        <p>Game Over</p>
        <div id="leaderBoard">
          <div id="winner">Winner: ${winner}</div>
          <div class="final-score">
            <span>Player 1 : ${this.score1}</span>
            <span>Player 2 : ${this.score2}</span>
          </div>
        </div>
       <button id="restart">Restart</button>
      </div>
      `;

      this.handleRestart();

      this.nextBtn.style.display = "none";
      if (this.timerDisplay) {
        this.timerDisplay.style.display = "none";
      }
      return;
    }

    this.timerDisplay = document.createElement("div");
    this.timerDisplay.id = "timer";
    this.timerDisplay.style.fontSize = "24px";
    this.timerDisplay.style.marginBottom = "20px";
    this.timerDisplay.textContent = `Time left: ${this.timeLeft}s`;

    const questionLabel = document.createElement("div");
    const questionFor = document.createElement("div");
    if (index % 2 === 0) {
      questionFor.textContent = "Question for " + this.player1;
    } else {
      questionFor.textContent = "Question for " + this.player2;
    }
    questionLabel.id = "question";
    const ques = document.createElement("p");
    ques.innerHTML = this.typeOfQuestion[index].question;
    const optionsContainer = document.createElement("div");
    optionsContainer.id = "options";
    this.typeOfQuestion[index].options.forEach((option, idx) => {
      const btn = document.createElement("button");
      btn.id = idx.toString();
      btn.textContent = option;
      optionsContainer.append(btn);
    });

    questionLabel.append(questionFor, ques, optionsContainer);
    this.container.append(this.timerDisplay, questionLabel);
    this.startTimer();

    optionsContainer.addEventListener("click", (e: Event) => {
      const target = e.target as HTMLElement;
      const btn = target.closest("button");
      if (!btn) return;
      const btnId = btn.id;
      const selectedIndex = Number(btnId);
      btn.style.backgroundColor =
        this.typeOfQuestion[index].correctAns === selectedIndex
          ? "green"
          : "red";
      const allButtons = document.querySelectorAll("#options button");
      allButtons.forEach((btn) => {
        (btn as HTMLButtonElement).disabled = true;
      });
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
      this.checkIfCorrect(index, selectedIndex);
      setTimeout(() => {
        this.goToNextQuestion();
      }, 1500);
    });
    this.container.style.border = "1px solid white";
  }

  private checkIfCorrect(index: number, selectedIndex: number) {
    if (selectedIndex === this.typeOfQuestion[index].correctAns) {
      if (index % 2 === 0) {
        ++this.score1;
      } else {
        ++this.score2;
      }
      this.updateScoreDisplay();
    }
  }

  private updateScoreDisplay() {
    this.playersContainer!.innerHTML = `
      <div id="player1">
        <span id="player1-name">Player1</span>
        <span id="player1-score">Score: ${this.score1}</span>
      </div>
      <div id="player2">
        <span id="player2-name">Player2</span>
        <span id="player2-score">Score: ${this.score2}</span>
      </div>
    `;
  }

  private goToNextQuestion() {
    if (this.typeOfQuestion.length === 0) {
      alert("Please select a question category first!");
      return;
    }
    this.nextBtn.textContent = "Next";
    this.nextBtn.style.display = "none";
    this.renderQuestion(this.currentIndex++);
  }
}

new QuizGame("questions-container", "#next");
