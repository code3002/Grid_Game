let gameCount = 0;

class Game {
  constructor(rows, cols) {
    gameCount++;

    this.gameId = 'Game ' + String(gameCount).padStart(2, '0');

    this.rows = rows;
    this.cols = cols;

    this.players = [];

    this.destination = null;

    this.turn = 1;
  }

  static create(rows, cols) {
    return new Game(rows, cols);
  }

  addPlayer(player) {
    this.players.push(player);
  }

  randomPosition() {
    return {
      x: Math.floor(Math.random() * this.cols),
      y: Math.floor(Math.random() * this.rows),
    };
  }

  start() {
    this.destination = this.randomPosition();

    for (let i = 0; i < this.players.length; i++) {
      let pos = this.randomPosition();

      this.players[i].x = pos.x;
      this.players[i].y = pos.y;
    }

    this.drawBoard();

    let self = this;

    this.timer = setInterval(function () {
      self.turn++;

      for (let i = 0; i < self.players.length; i++) {
        let player = self.players[i];

        player.move(self.destination.x, self.destination.y);
      }

      self.drawBoard();
    }, 5000);
  }

  drawBoard() {
    console.log(
      '\n' + this.gameId + ' Turn ' + String(this.turn).padStart(3, '0') + ':\n'
    );

    for (let r = 0; r < this.rows; r++) {
      let row = '';

      for (let c = 0; c < this.cols; c++) {
        let cell = '_';

        if (this.destination.x === c && this.destination.y === r) {
          cell = 'X';
        }

        for (let i = 0; i < this.players.length; i++) {
          let p = this.players[i];

          if (p.x === c && p.y === r) {
            cell = p.id;
          }
        }

        row += cell + ' ';
      }

      console.log(row);
    }
  }
}

export default Game;
