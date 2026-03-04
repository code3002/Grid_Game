import Game from './game.js';
import Player from './player.js';

let game1 = Game.create(3, 4);
let game2 = Game.create(4, 4);

let playerA = Player.create();
let playerB = Player.create();
let playerC = Player.create();
let playerD = Player.create();

game1.addPlayer(playerA);
game1.addPlayer(playerB);

game2.addPlayer(playerC);
game2.addPlayer(playerD);

game1.start();
game2.start();