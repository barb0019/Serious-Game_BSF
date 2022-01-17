import Game from './Game.js';
import InteractingItems from './InteractingItems.js';
import Player from './Player.js';


export default class PressurePlate extends InteractingItems {
  // private img: HTMLImageElement;

  // private xPos: number;

  // private yPos: number;

  // private type:string;

  /**
   *
   * @param xPos x position of the door
   * @param yPos y position of the door
   * @param type type of the door
   */
  public constructor(xPos: number, yPos: number, type:string) {
    super(xPos, yPos, type, './assets/img/ButtonNeutral.png')
    this.img = Game.loadNewImage('./assets/img/ButtonNeutral.png');
  }

  /**
   * @param ctx ctx
   * @param player the array of players
   */
  public draw(ctx: CanvasRenderingContext2D, player:Player[]): void {
    if (player[0].collidesWith(this) || player[1].collidesWith(this)) {
      ctx.drawImage(Game.loadNewImage('./assets/img/ButtonEnd.png'), this.xPos, this.yPos, 60, 32);
    } else {
      ctx.drawImage(this.img, this.xPos, this.yPos, 60, 32);
    }
  }
}
