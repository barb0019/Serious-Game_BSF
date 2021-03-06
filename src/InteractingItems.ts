import Game from './Game.js';
import Player from './Player.js';

export default abstract class InteractingItems {
  protected img: HTMLImageElement;

  protected xPos: number;

  protected yPos: number;

  protected type:string;

  /**
   * intilize the class interactingItems
   *
   * @param xPos x position of the interacting item
   * @param yPos y position of the interacting item
   * @param type type of the interacting item
   * @param imgSrc imagesource of the interacting item
   */
  public constructor(xPos: number, yPos: number, type:string, imgSrc:string) {
    this.img = Game.loadNewImage(imgSrc);
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
   * draw the interacting items
   *
   * @param ctx ctx of the game
   * @param player the array of players
   */
  abstract draw(ctx: CanvasRenderingContext2D, player:Player[]): void;
}
