let playerCount = 0;

class Player {
  constructor() {
    playerCount++;

    this.id = String.fromCharCode(64 + playerCount);

    this.x = null;
    this.y = null;

    this.eliminated = false;
  }

  static create() {
    return new Player();
  }

  move(targetX, targetY) {
    let stepX = Math.sign(targetX - this.x);
    let stepY = Math.sign(targetY - this.y);

    this.x = this.x + stepX;
    this.y = this.y + stepY;
  }
}

export default Player;
