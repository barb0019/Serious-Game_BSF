import Player from './Player.js';

export default class Platform {
  private xPos: number;

  private yPos: number;

  private width: number;

  private height: number;

  private img: HTMLImageElement;

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
  }

  /**
   * Checks if it collides with the player
   *
   * @param player The player character
   * @returns Wheter the platform collides with the player or not
   */
  public collidesWith(player: Player): boolean {
    if (this.xPos < player.getXPos() + player.getImageWidth()
      && this.xPos + this.img.width > player.getXPos()
      && this.yPos < player.getYPos() + player.getImageHeight()
      && this.yPos + this.img.height > player.getYPos()) {
      // make the player go back to where he was so he doesn't fall through
      return true;
    }
    return false;
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.img, this.xPos, this.yPos);
  }
}
