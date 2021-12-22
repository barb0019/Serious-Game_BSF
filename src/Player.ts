import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
import GameLoop from './GameLoop.js';

export default abstract class Player extends GameItem {
  protected xVel: number;

  protected yVel: number;

  protected keyBoard: KeyListener;

  public xPosPrevious: number[];

  public yPosPrevious: number[];

  private count: number;

  protected gravity: number;

  protected onPlatform: boolean;

  protected jumpHeight: number;

  private static readonly gravityIncrease: number = 1.5;

  /**
   *
   * @param imageSrc
   * @param maxX the max value of the X positiond
   * @param maxY the max value of the X position
   */
  public constructor(imageSrc: string, maxX: number, maxY: number) {
    super(imageSrc, maxX - 76, maxY - 92);
    this.xVel = 3;
    this.yVel = 3;
    this.jumpHeight = 230;
    this.count = 0;
    this.keyBoard = new KeyListener();
    this.xPosPrevious = [];
    this.yPosPrevious = [];
    this.xPosPrevious.push(0);
    this.yPosPrevious.push(0);
    this.gravity = 0.7;
  }

  /**
   * increases the gravity and apllies it to the player
   */
  public increaseGravity(): void {
    // TODO The count used fucks with the gravity variable, need something else
    if (!this.onPlatform) {
      if (this.count % 8 === 0) {
        this.yPos += this.gravity;
        this.count = 0;
      }
      this.gravity += Player.gravityIncrease;
      if (this.gravity > 75) {
        this.gravity = 9.81;
      }
      this.count += 1;
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
   * @returns The y velocity number
   */
  public getYVel(): number {
    return this.yVel;
  }

  /**
   *
   * @returns
   */
  public getXPos(): number {
    return this.xPos;
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
    this.yVel += size;
  }

  abstract move(canvas: HTMLCanvasElement): void;

  abstract collidesWith(other: GameItem): boolean;
}
