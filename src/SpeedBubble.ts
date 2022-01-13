import Game from './Game.js';
import Player from './Player.js';
import GameItem from './GameItem.js';
import Enemies from './Enemies.js';

export default class SpeedBubble extends Enemies {
  private text:string;

<<<<<<< HEAD
  private xCoordinate:number;

  private yCoordinate:number;
=======
private xCoordinate:number;

private yCoordinate:number;
>>>>>>> 63243a38292db520f63821b3103e98a3f8212c54

  private width:number;

  private height:number;

  /**
   *
   * @param game the game of the game
   * @param text the text of the speedbubble
   * @param yCoordinate y coodinate of the speedbubble
   * @param xCoordinate x coordinate
   * @param width
   * @param height
   */
  public constructor(game:Game, text:string, yCoordinate:number,
    xCoordinate:number, width:number, height:number) {
<<<<<<< HEAD
    super('./assets/img/textcloud.png', xCoordinate, yCoordinate, 0, 'speedbubble', true, game);
=======
    super('./assets/img/textcloud.png', xCoordinate, yCoordinate,0, 'speedbubble',true,game);
>>>>>>> 63243a38292db520f63821b3103e98a3f8212c54
    this.text = text;
    this.width = width;
    this.height = height;
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
  }

  /**
   * render
   *
   * @param canvas
   */
<<<<<<< HEAD
  public render(): void {
    this.game.writeTextToCanvas(this.text, 39, this.xCoordinate + this.getImageWidth() / 2, this.yCoordinate + this.getImageHeight() / 2, 'center', 'black');
=======
  public render(canvas:HTMLCanvasElement): void {
    this.game.writeTextToCanvas(this.text, 15,this.xCoordinate + this.getImageWidth()/2, this.yCoordinate+this.getImageHeight()/2, 'center', 'blue');
>>>>>>> 63243a38292db520f63821b3103e98a3f8212c54
  }
}
