import Game from './Game.js';

export default class SpeedBubble {
  private game:Game;

 /**
  *
  * @param game
  * @param text
  * @param yCoordinate
  * @param xCoordinate
  */
  public constructor(game:Game, text:string, yCoordinate:number, xCoordinate:number) {
    this.game = game;

    this.game.writeTextToCanvas(text, 125, yCoordinate, xCoordinate , 'center', 'red');
  }
}
