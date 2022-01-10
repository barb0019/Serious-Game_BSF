import Game from './Game.js';

export default abstract class GameItem {
  protected img: HTMLImageElement;

  protected xPos: number;

  protected yPos: number;

  protected speed: number;

  private type:string;

  /**
   * Creates a new GameItem on a random position
   *
   * @param imageSrc the src of the image
   * @param maxX the max value of the X position
   * @param maxY the max value of the X position
   * @param xPos
   * @param yPos
   * @param type
   */
  public constructor(imageSrc: string, xPos: number, yPos: number, type:string) {
    this.img = Game.loadNewImage(imageSrc);
    this.xPos = xPos;
    this.yPos = yPos;
    this.type = type;
    this.speed = 3;
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
   * get the speed
   * @returns the speed
   */
  public getSpeed(): number {
    return this.speed;
  }

  /**
   * draw
   *
   * @param ctx the rendering context to draw on
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.img, this.xPos, this.yPos);
  }

  /**
   * gwt the type
   *
   * @returns the type color od the object
   */
  public getType():string {
    return this.type;
  }
}
