import Player from './Player.js';

export default class Platform {
  private xPos: number;

  private yPos: number;

  private width: number;

  private height: number;

  private img: HTMLImageElement;

  private xPosPrevious:number[];

  private yPosPrevious:number[];

  private player: Player;

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
    this.xPosPrevious = [this.player.getXPos()];
    this.yPosPrevious = [this.player.getYPos()];
  }

  /**
   * Checks if it collides with the player
   *
   * @param player The player character
   * @returns Wheter the platform collides with the player or not
   */
  public collidesWith(player: Player): boolean {
    this.xPosPrevious.push(player.getXPos());
    this.yPosPrevious.push(player.getYPos());

    if (this.xPos < player.getXPos() + player.getImageWidth()
    && this.xPos + this.img.width > player.getXPos()
    && this.yPos < player.getYPos() + player.getImageHeight()
    && this.yPos + this.img.height > player.getYPos()) {
      player.setXPos(this.xPosPrevious[1]);
      player.setYPos(this.yPosPrevious[1]);
      this.xPosPrevious.splice(1, 1);
      this.yPosPrevious.splice(1, 1);
      // make the player go back to where he was so he doesn't fall through
      return true;
    }

    this.xPosPrevious.splice(1, 1);
    this.yPosPrevious.splice(1, 1);
    return false;
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.img, this.xPos, this.yPos);
  }
}
