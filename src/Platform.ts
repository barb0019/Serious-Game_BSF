import Player from './Player.js';

export default class Platform {
  private xPos: number;

  private yPos: number;

  private width: number;

  private height: number;

  private img: HTMLImageElement;

  private player: Player;

  private walljumpCheck: number;

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
    // walljumping is off by default
    this.walljumpCheck = 10;
  }

  /**
   * Checks if it collides with the player
   * and makes it so the player doesn't go through the platform.
   *
   * @param player The player character
   * @returns Wheter the platform collides with the player or not
   */
  public collidesWith(player: Player): boolean {
    let collision = false;
    // sets the current pos of the player to be used next frame for collision detection
    player.xPosPrevious.push(player.getXPos());
    player.yPosPrevious.push(player.getYPos());

    // hover for description
    // this.checkPlayerheightAbovePlatform(player);
    player.setOnPlatform(false);
    if (this.checkPixelAbovePlatform(player)) {
      collision = true;
    }
    if (this.checkPlayerInsidePlatform(player)) {
      collision = true;
    }

    return collision;
  }

  /**
   * Checks if the player is 1 pixel above the platform and turns the gravity off.
   * This way the player isn't considered in the platform
   * and won't continually get his position changed.
   *
   * @returns boolean of whether the player is 1 pixel above the platform
   * @param player the Player class
   */
  private checkPixelAbovePlatform(player: Player): boolean {
    // the 1 checks for the pixel above the platform
    if (this.xPos < player.getXPos() + player.getImageWidth()
      + player.getXVel() - this.walljumpCheck
      && this.xPos + this.width > player.getXPos() - player.getXVel() + this.walljumpCheck
      && this.yPos < player.getYPos() + player.getImageHeight() + 1
      && this.yPos + this.height > player.getYPos()) {
      player.setGravity(0);
      player.setOnPlatform(true);
      // console.log('platform');
      return true;
    }
    return false;
  }

  /**
   * Turn walljumping either on or off
   *
   * @param onOrOff whether to turn waljumping on (true) or off (false)
   */
  public wallJumping(onOrOff: boolean): void {
    if (onOrOff) {
      this.walljumpCheck = 0;
    } else this.walljumpCheck = 10;
  }

  /**
   * Checks if you are above the platform and makes it so you aren't considered onPlatform in
   * Player.
   * Makes it so gravity acitvates when you walk off a floating platform to the left or right
   *
   * @param player the Player class
   */

  // Doesn't work correctly
  // private checkPlayerheightAbovePlatform(player: Player) {
  //   if (!(this.yPos
  //     > player.getYPos() + player.getImageHeight()
  //     || this.yPos + this.height
  //     > player.getYPos() + player.getImageHeight() - this.height)) {
  //     player.setOnPlatform(false);
  //     // console.log('air');
  //   }
  // }

  /**
   * Checks if the player collides with the platform
   * and puts the player in the previous position he was before the collision.
   *
   * @param player the player character
   * @returns boolean of whether the character collided or not
   */
  private checkPlayerInsidePlatform(player: Player) {
    const collisionTop = this.yPos + this.height > player.getYPos() + player.getImageHeight();
    const collisionBottom = this.yPos < player.getYPos();
    const collisionRight = this.xPos < player.getXPos() + player.getImageWidth() - 10;
    const collisionLeft = this.xPos + this.width > player.getXPos() + 10;

    // checks if there is collision with the entire object
    if (this.xPos < player.getXPos() + player.getImageWidth() + player.getXVel()
      && this.xPos + this.width > player.getXPos() - player.getXVel()
      && this.yPos < player.getYPos() + player.getImageHeight()
      && this.yPos + this.height > player.getYPos()) {
      // checks if standing just above platform,
      // or in platform to prevent clipping through the object
      if (collisionTop && collisionRight && collisionLeft) {
        // moves you up, so prevents you from going through the top
        // collision top
        player.setYPos(this.yPos - player.getImageHeight());
        console.log('top');
        player.xPosPrevious.splice(0, 1);
        player.yPosPrevious.splice(0, 1);
        return true;
      }
      if (collisionBottom && collisionRight && collisionLeft) {
        // moves you down, so prevents you from going through the bottom
        // also prevents you from jumping again (setOnPlatform(false))
        // and makes it so there is gravity when you hit it from the bottom
        // collision bottom
        player.setYPos(player.yPosPrevious[1] + player.getJumpHeight());
        console.log('bottom');
        player.xPosPrevious.splice(0, 1);
        player.yPosPrevious.splice(0, 1);
        player.setGravity(10);
        player.setOnPlatform(false);
        return true;
      }
      if (collisionLeft) {
        // moves you left, so prevents you from going through the left
        // collision left
        player.setXPos(player.xPosPrevious[1] - player.getXVel());
        console.log('left');
      }
      if (collisionRight) {
        // moves you right, so prevents you from going through the right
        // collision right
        player.setXPos(player.xPosPrevious[1] + player.getXVel());
        console.log('right');
      }
      if (collisionRight && collisionLeft) {
        player.setXPos(player.xPosPrevious[1] - player.getXVel());
        console.log('corner');
      }
      // removes the previous position of the player so it can add a new previous position
      player.xPosPrevious.splice(0, 1);
      player.yPosPrevious.splice(0, 1);
      return true;
    }
    // removes the previous position of the player so it can add a new previous position
    player.xPosPrevious.splice(0, 1);
    player.yPosPrevious.splice(0, 1);
    return false;
  }

  /**
   * @param ctx ctx
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.img, this.xPos, this.yPos, this.width, this.height);
  }
}