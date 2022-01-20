import Game from './Game.js';
import InteractingItems from './InteractingItems.js';
import Player from './Player.js';

export default class Door extends InteractingItems {
  /**
   * intilize the class door
   *
   * @param xPos x position of the door
   * @param yPos y position of the door
   * @param type type of the door
   */
  public constructor(xPos: number, yPos: number, type:string) {
    super(xPos, yPos, type, `./assets/img/door/${type}.png`);
  }

  /**
   * draw the image door
   *
   * @param ctx ctx
   * @param player the array of players
   */
  public draw(ctx: CanvasRenderingContext2D, player:Player[]): void {
    if (player[0].collidesWith(this) && player[1].collidesWith(this)) {
      ctx.drawImage(Game.loadNewImage('./assets/img/door/DoubleDoor2.png'), this.xPos, this.yPos, 75, 100);
    } else if (player[0].collidesWith(this) || player[1].collidesWith(this)) {
      ctx.drawImage(Game.loadNewImage('./assets/img/door/DoubleDoor1.png'), this.xPos, this.yPos, 75, 100);
    } else {
      ctx.drawImage(this.img, this.xPos, this.yPos, 75, 100);
    }
  }
}
