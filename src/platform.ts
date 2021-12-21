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
   * @param xPos the x position of the platform on the canvas
   * @param yPos the y position of the platform on the canvas
   * @param width the width of the image on the canvas
   * @param height the height of the image on the canvas
   * @param img the img of the platform
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
    // console.log(this.xPosPrevious);
    // console.log(this.yPosPrevious);

    // TODO make the 3 the player velocity
    // make the player go back to where he was so he doesn't fall through
    // checks if there is collision with the entire object
    if (this.xPos < player.getXPos() + player.getImageWidth() + player.getXVel()
    && this.xPos + this.width > player.getXPos() - player.getXVel()
    && this.yPos < player.getYPos() + player.getImageHeight()
    && this.yPos + this.height > player.getYPos()) {
      if (this.yPos + this.height > player.getYPos() + player.getImageHeight()
      && this.xPos < player.getXPos() + player.getImageWidth()
      && this.xPos + this.width > player.getXPos()) {
        // moves you up, so prevents you from going through the top
        // collision top
        player.setYPos(this.yPosPrevious[0] - player.getYVel());
        console.log('top');
        this.xPosPrevious.splice(0, 1);
        this.yPosPrevious.splice(0, 1);
        return true;
        // TODO set gravity to 0 so you stop falling
      }
      if (this.yPos < player.getYPos()
      && this.xPos + this.width > player.getXPos()
      && this.xPos < player.getXPos() + player.getImageWidth()) {
        // moves you down, so prevents you from going through the bottom
        // collision bottom
        player.setYPos(this.yPosPrevious[0] + player.getYVel());
        console.log('bottom');
        this.xPosPrevious.splice(0, 1);
        this.yPosPrevious.splice(0, 1);
        return true;
      }
      if (this.xPos + this.width > player.getXPos()) {
        // moves you left, so prevents you from going through the left
        // collision left
        player.setXPos(this.xPosPrevious[0] - player.getXVel());
        console.log('left');
      }
      if (this.xPos < player.getXPos() + player.getImageWidth()) {
        // moves you right, so prevents you from going through the right
        // collision right
        player.setXPos(this.xPosPrevious[0] + player.getXVel());
        console.log('right');
      }

      // removes the previous position of the player so it can add a new previous position
      this.xPosPrevious.splice(0, 1);
      this.yPosPrevious.splice(0, 1);
      return true;
    }

    // removes the previous position of the player so it can add a new previous position
    this.xPosPrevious.splice(0, 1);
    this.yPosPrevious.splice(0, 1);
    return false;
  }

  /**
   * @param ctx ctx
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.img, this.xPos, this.yPos, this.width, this.height);
  }
}
