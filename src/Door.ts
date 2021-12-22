import Game from './Game.js';

export default class Door {
  private img: HTMLImageElement;

  private xPos: number;

  private yPos: number;

  /**
   *
   * @param xPos
   * @param yPos
   * @param type
   */
  public constructor(xPos: number, yPos: number, type:string) {
    this.img = Game.loadNewImage(`./assets/img/${type}.png`);
    this.xPos = xPos;
    this.yPos = yPos;
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
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.img, this.xPos, this.yPos, 75, 100);
  }
}
