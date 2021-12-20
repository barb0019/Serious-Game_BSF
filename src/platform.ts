import Player from './Player.js';

export default class Platform {
  private xPos: number;

  private yPos: number;

  private width: number;

  private height: number;

  private img: HTMLImageElement;

  private xPosPrevious: number[];

  private yPosPrevious: number[];

  private player: Player;

  /**
   * @param xPos
   * @param yPos
   * @param width
   * @param height
   * @param img
   */
  public constructor(xPos: number,
    yPos: number,
    width: number,
    height: number,
    img: HTMLImageElement) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.img = img;
    this.xPosPrevious = [];
    this.yPosPrevious = [];
    this.xPosPrevious.push(0);
    this.yPosPrevious.push(0);
  }

  /**
   * Checks if it collides with the player
   *
   * @param player The player character
   * @returns Wheter the platform collides with the player or not
   */
  public collidesWith(player: Player): boolean {
  // sets the current pos of the player to be used next frame for collision detection
    this.xPosPrevious.push(player.getXPos());
    this.yPosPrevious.push(player.getYPos());

    if (this.xPos < player.getXPos() + player.getImageWidth()
    && this.xPos + this.img.width > player.getXPos()
    && this.yPos < player.getYPos() + player.getImageHeight()
    && this.yPos + this.img.height > player.getYPos()) {
    // make the player go back to where he was so he doesn't fall through
      player.setXPos(this.xPosPrevious[1] - (player.getImageWidth() - this.img.width));
      player.setYPos(this.yPosPrevious[1] - (player.getImageHeight() - this.img.height));
      // removes the previous positsof the player so it can add a new previous position
      this.xPosPrevious.splice(1, 1);
      this.yPosPrevious.splice(1, 1);
      return true;
    }

    this.xPosPrevious.splice(1, 1);
    this.yPosPrevious.splice(1, 1);
    return false;
  }


  /**
   * @param ctx
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.img, this.xPos, this.yPos);
  }
}
