import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
import GameLoop from './GameLoop.js';
import Door from './Door.js';
import ScoringObject from './ScoringObject.js';

export default abstract class Player extends GameItem {
  protected xVel: number;

  protected keyBoard: KeyListener;

  public xPosPrevious: number[];

  public yPosPrevious: number[];

  private count: number;

  protected gravity: number;

  protected onPlatform: boolean;

  protected jumpHeight: number;

  private static readonly gravityIncrease: number = 0.2;

  protected isJumping: boolean;

  /**
   *
   * @param imageSrc
   * @param maxX the max value of the X positiond
   * @param maxY the max value of the X position
   * @param type
   */
  public constructor(imageSrc: string, maxX: number, maxY: number, type:string) {
    super(imageSrc, maxX - 76, maxY - 92, type);
    this.xVel = 3;
    this.jumpHeight = Player.gravityIncrease * 50;
    this.count = 0;
    this.keyBoard = new KeyListener();
    this.xPosPrevious = [];
    this.yPosPrevious = [];
    this.xPosPrevious.push(0);
    this.yPosPrevious.push(0);
    this.gravity = 0;
  }

  /**
   * increases the gravity and apllies it to the player
   */
  public increaseGravity(): void {
    // TODO The count used fucks with the gravity variable, need something else
    if (!this.onPlatform) {
      this.yPos += this.gravity;
      this.count = 0;

      this.gravity += Player.gravityIncrease;

      // max speed for the gravity
      if (this.gravity > 100) {
        this.gravity = 100;
      }
      this.count += 1;
    }
  }

  /**
   * Makes the character jump
   */
  protected jump(): void {
    // if (this.jumpHeight < this.gravity / 2 && !this.onPlatform) {
    //   this.yPos -= this.jumpHeight;
    // } else
    if (!this.onPlatform) {
      this.yPos -= this.jumpHeight;
    } else {
      this.isJumping = false;
      this.jumpMusic();
    }
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
   * @returns current gravity "strength" number
   */
  public getGravity(): number {
    return this.gravity;
  }

  /**
   *
   * @returns
   */
  public getXPos(): number {
    return this.xPos;
  }

  /**
   * @returns jumpheight number
   */
  public getJumpHeight(): number {
    return this.jumpHeight;
  }

  /**
   * @param gravity
   */
  public setGravity(gravity: number): void {
    this.gravity = gravity;
  }

  /**
   * @param trueOrFalse
   */
  public setOnPlatform(trueOrFalse: boolean): void {
    this.onPlatform = trueOrFalse;
  }

  /**
   * Increases the speed
   *
   * @param size the amount of speed to add
   */
  public increaseSpeed(size: number): void {
    this.xVel += size;
  }

  abstract move(canvas: HTMLCanvasElement): void;

  abstract collidesWith(other: GameItem | Door): boolean;

  /**
   * plays the music of the person jumping
   */
  // eslint-disable-next-line class-methods-use-this
  protected jumpMusic():void {
    const jumpMusic = new Audio('./assets/jumpMusic.mp3');
    jumpMusic.play();
  }
}
