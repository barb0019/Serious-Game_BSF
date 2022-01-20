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
   * @param xPos x position of the gameitem
   * @param yPos y position of the gameitem
   * @param type type of the gameitem
   */
  public constructor(imageSrc: string, xPos: number, yPos: number, type:string) {
    this.img = Game.loadNewImage(imageSrc);
    this.xPos = xPos;
    this.yPos = yPos;
    this.type = type;
    this.speed = 3;
  }

  /**
   * set the image of a object
   *
   * @param img the img of the gameitem
   */
  // eslint-disable-next-line class-methods-use-this
  public setImage(img: string): void {
    this.img = Game.loadNewImage(img);
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
   * set the x position of the game item
   *
   * @param speed the speed of the game item
   */
  public setXPos(speed:number): void {
    this.xPos += speed;
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
   *
   * @returns the speed
   */
  public getSpeed(): number {
    return this.speed;
  }

  /**
   * draw the game item
   *
   * @param ctx the rendering context to draw on
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.img, this.xPos, this.yPos);
  }

  /**
   * get the type
   *
   * @returns the type color od the object
   */
  public getType():string {
    return this.type;
  }
}
