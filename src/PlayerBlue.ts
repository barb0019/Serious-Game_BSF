import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
import ScoringObject from './ScoringObject.js';

export default class PlayerBlue extends GameItem {
  private xVel: number;

  private yVel: number;

  // KeyboardListener so the player can move
  private keyboard: KeyListener;

  /**
   *
   * @param maxX the max value of the X position
   * @param maxY the max value of the X position
   */
  public constructor(maxX: number, maxY: number) {
    super('./assets/img/character_robot_walk0.png', maxX - 76, maxY - 92);
    this.xVel = 3;
    this.yVel = 3;
    this.keyboard = new KeyListener();
  }

  /**
   *
   * @param xPos x position of the player
   */
  public setXPos(xPos: number): void {
    this.xPos = xPos;
  }

  /**
   *set y pos of the player
   *
   * @param yPos y position of the player
   */
  public setYPos(yPos: number): void {
    this.yPos = yPos;
  }

  /**
   * @returns The x velocity number
   */
  public getXVel(): number {
    return this.xVel;
  }

  /**
   * @returns The y velocity number
   */
  public getYVel(): number {
    return this.yVel;
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
    const maxY = canvas.height - this.img.height;

    // Moving right
    if (this.keyboard.isKeyDown(KeyListener.KEY_D) && this.xPos < maxX) {
      this.xPos += this.xVel;
      // Limit to the max value
      if (this.xPos > maxX) {
        this.xPos = maxX;
      }
    }

    // Moving left
    if (this.keyboard.isKeyDown(KeyListener.KEY_A) && this.xPos > minX) {
      this.xPos -= this.xVel;
      // Limit to the max value
      if (this.xPos < minX) {
        this.xPos = minX;
      }
    }

    // Moving up
    if (this.keyboard.isKeyDown(KeyListener.KEY_W) && this.yPos > minY) {
      this.yPos -= this.yVel;
      if (this.yPos < minY) {
        this.yPos = minY;
      }
    }

    // Moving down
    if (this.keyboard.isKeyDown(KeyListener.KEY_S) && this.yPos < maxY) {
      this.yPos += this.yVel;
      if (this.yPos > maxY) {
        this.yPos = maxY;
      }
    }
  }

  /**
   *
   * @returns true if the player is cleaning up
   */
  public isCleaning(): boolean {
    return this.keyboard.isKeyDown(KeyListener.KEY_SPACE);
  }

  /**
   *
   * @param other the other GameItem
   * @returns true if this object collides with the specified other object
   */
  public collidesWith(other: GameItem): boolean {
    console.log('collision');
    return this.xPos < other.getXPos() + other.getImageWidth()
    && this.xPos + this.img.width > other.getXPos()
    && this.yPos < other.getYPos() + other.getImageHeight()
    && this.yPos + this.img.height > other.getYPos();
  }

  /**
   * Increases the speed
   *
   * @param size the amount of speed to add
   */
  increaseSpeed(size: number): void {
    this.xVel += size;
    this.yVel += size;
  }
}