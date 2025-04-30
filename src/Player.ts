export class Player {
  playerName: string;
  score: number = 0;

  constructor(playerName: string) {
    this.playerName = playerName;
  }

  incrementScore() {
    this.score++;
  }
}
