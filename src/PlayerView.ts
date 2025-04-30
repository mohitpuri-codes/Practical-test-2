import { Player } from "./Player";
export class PlayerView {
  constructor() {}
  displayPlayer() {
    const playerContainer = document.getElementById("players");
    const user1 = new Player("player1");
    const user2 = new Player("player2");
    const player1 = document.createElement("div");
    const playerName = document.createElement("div");
    const playerScore = document.createElement("span");
    const player2 = document.createElement("div");
    const playerName2 = document.createElement("div");
    const playerScore2 = document.createElement("span");

    playerName.innerHTML = user1.playerName;
    playerScore.innerHTML = "Score: " + user1.score.toString();
    playerName2.innerHTML = user2.playerName;
    playerScore2.innerHTML = "Score: " + user2.score.toString();

    player1.append(playerName, playerScore);
    player2.append(playerName2, playerScore2);
    playerContainer?.append(player1, player2);
  }
}
