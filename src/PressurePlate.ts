import Game from './Game.js';
import Player from './Player.js';


export default class PressurePlate  {
  private img: HTMLImageElement;

  private xPos: number;

  private yPos: number;

  private type:string;

  /**
   *
   * @param xPos x position of the door
   * @param yPos y position of the door
   * @param type type of the door
   */
  public constructor(xPos: number, yPos: number, type:string) {
    this.img = Game.loadNewImage(`./assets/img/${type}.png`);
    this.xPos = xPos;
    this.yPos = yPos;
    this.type = type;
  }

  /**
   * get the type
   *
   * @returns the type of the door
   */
  public getType():string {
    return this.type;
  }

  /**
   * getImageHeight
   *
   * @returns the current height of the image.
   */
  public getImageHeight(): number {
    return this.img.height;
  }

  /**
   * getImageWidth
   *
   * @returns the current width of the image.
   */
  public getImageWidth(): number {
    return this.img.width;
  }

  /**
   * getXPos
   *
   * @returns the current X-position
   */
  public getXPos(): number {
    return this.xPos;
  }

  /**
   * getYPos
   *
   * @returns the current Y-position
   */
  public getYPos(): number {
    return this.yPos;
  }

  /**
   * @param ctx ctx
   * @param player the array of players
   */
  public draw(ctx: CanvasRenderingContext2D, player:Player[]): void {
    if (player[0].collidesWith(this) || player[1].collidesWith(this)) {
      ctx.drawImage(Game.loadNewImage('./assets/img/titled_yellow_power_icon.png'), this.xPos, this.yPos, 75, 100);
    } else {
      ctx.drawImage(this.img, this.xPos, this.yPos, 75, 100);
    }
  }
}
