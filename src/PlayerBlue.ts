import Game from './Game.js';
import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';

export default class PlayerBlue extends Player {
  // KeyboardListener so the player can move
  private keyboard: KeyListener;

  /**
   *
   * @param maxX the max value of the X position
   * @param maxY the max value of the X position
   */
  public constructor(maxX: number, maxY: number, game: Game) {
    super('./assets/img/blueKid.png', maxX - 76, maxY - 92, 'blue', game);
    this.keyboard = new KeyListener();
  }

  /**
   * Moves the player depending on which arrow key is pressed. Player is bound
   * to the canvas and cannot move outside of it
   *
   * @param canvas the canvas to move over, for max x and y positions
   */
  public move(canvas: HTMLCanvasElement): void {
    // Set the limit values
    const minX = 0;
    const maxX = canvas.width - this.img.width;
    const minY = 0;
    // Moving right
    if (this.keyboard.isKeyDown(KeyListener.KEY_D) && this.xPos < maxX) {
      this.xPos += this.xVel;
      // Limit to the max value
      if (this.xPos > maxX) {
        this.xPos = maxX;
      }
      // this.setOnPlatform(false);
    }

    // Moving left
    if (this.keyboard.isKeyDown(KeyListener.KEY_A) && this.xPos > minX) {
      this.xPos -= this.xVel;
      // Limit to the max value
      if (this.xPos < minX) {
        this.xPos = minX;
      }
      // this.setOnPlatform(false);
    }

    // Moving up
    if (this.keyboard.isKeyDown(KeyListener.KEY_W) && this.yPos > minY) {
      if (this.onPlatform) {
        this.isJumping = true;
        this.setOnPlatform(false);
      }
    }

    if (this.isJumping === true) {
      this.jump();
      if (this.yPos < minY) {
        this.yPos = minY;
      }
    }

    // // Moving down
    // if (this.keyboard.isKeyDown(KeyListener.KEY_S) && this.yPos < maxY) {
    //   this.yPos += this.yVel;
    //   if (this.yPos > maxY) {
    //     this.yPos = maxY;
    //   }
    //   this.setOnPlatform(false);
    // }
  }

  /**
   *
   * @param other the other GameItem
   * @returns true if this object collides with the specified other object
   */
  public collidesWith(other: GameItem): boolean {
    // console.log('collision');
    return this.xPos < other.getXPos() + other.getImageWidth()
      && this.xPos + this.img.width > other.getXPos()
      && this.yPos < other.getYPos() + other.getImageHeight()
      && this.yPos + this.img.height > other.getYPos()
      && other.getType() !== 'blue';
  }
}
