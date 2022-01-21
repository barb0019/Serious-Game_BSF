import Game from './Game.js';
import Enemies from './Enemies.js';

export default class SpeedsBubble extends Enemies {
  private text:string;

  private xCoordinate:number;

  private yCoordinate:number;

  private width:number;

  private height:number;

  private color: string;

  /**
   * intilize the class speedBubble
   *
   * @param game the game of the game
   * @param text the text of the speedbubble
   * @param yCoordinate y coodinate of the speedbubble
   * @param xCoordinate x coordinate
   * @param width the max width of the speedbubbles
   * @param height the max height of the speedbubble
   */
  public constructor(game:Game, text:string, yCoordinate:number,
    xCoordinate:number, width:number, height:number, color: string) {
    super('./assets/img/interactingitems/textcloud.png', xCoordinate, yCoordinate, 0, 'speedbubble', true, game);
    this.text = text;
    this.width = width;
    this.height = height;
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.color = color;
  }

  /**
   * render the speedBubble rang when you can see the text
   *
   */
  public render(): void {
    this.game.writeTextToCanvas(this.text, 15, this.xCoordinate + this.getImageWidth() / 2, this.yCoordinate + this.getImageHeight() / 2, 'center', this.color);
  }
}
