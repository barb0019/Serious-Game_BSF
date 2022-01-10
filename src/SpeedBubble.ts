import Game from './Game.js';

export default class SpeedBubble {
  private text:string;

  private yCoordinate:number;

  private xCoordinate:number;

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
    this.text = text;
    this.yCoordinate = yCoordinate;
    this.xCoordinate = xCoordinate;
  }

  /**
   * render
   */
  public render(): void {
    this.game.writeTextToCanvas(this.text, 39, this.yCoordinate, this.xCoordinate, 'center', 'black');
  }
}
