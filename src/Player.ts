import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
import Door from './Door.js';
import SpeedBubble from './SpeedBubble.js';
import Game from './Game.js';

export default abstract class Player extends GameItem {
  protected xVel: number;

  protected keyBoard: KeyListener;

  public xPosPrevious: number[];

  public yPosPrevious: number[];

  protected gravity: number;

  protected onPlatform: boolean;

  protected jumpHeight: number;

  private static gravityIncrease: number = 0.2;

  private static maxGravity: number = 100;

  protected isJumping: boolean;

  protected game: Game;

  /**
   * @param imageSrc imageSrc, the actual image used for the player
   * @param maxX the max value of the X positiond
   * @param maxY the max value of the X position
   * @param type the type of item
   * @param game the game of the game
   */
  public constructor(imageSrc: string, maxX: number, maxY: number, type: string, game: Game) {
    super(imageSrc, maxX - 76, maxY - 92, type);
    this.game = game;
    // Player.gravityIncrease = game.canvas.height * 0.0002;
    // Player.maxGravity = game.canvas.height * 0.01;
    this.xVel = 5;
    this.jumpHeight = Player.gravityIncrease * 50;
    this.keyBoard = new KeyListener();
    this.xPosPrevious = [];
    this.yPosPrevious = [];
    this.xPosPrevious.push(0);
    this.yPosPrevious.push(0);
    this.gravity = 0;
    this.checkBoughtItems();
  }

  /**
   *
   */
  public checkBoughtItems(): void {
    const boughtItems = this.game.getBoughtItems();
    for (let i = 0; i < boughtItems.length; i++) {
      if (boughtItems[i] === 0) {
        this.jumpHeight *= 1.2;
      }
      if (boughtItems[i] === 1) {
        this.xVel *= 1.2;
      }
    }
  }

  /**
   * increases the gravity and apllies it to the player
   */
  public increaseGravity(): void {
    // TODO The count used fucks with the gravity variable, need something else
    if (!this.onPlatform) {
      this.yPos += this.gravity;

      this.gravity += Player.gravityIncrease;

      // max speed for the gravity
      if (this.gravity > Player.maxGravity) {
        this.gravity = Player.maxGravity;
      }
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
      this.jumpMusic();
      this.isJumping = false;
    }
  }

  /**
   * set x pos of the player
   *
   * @param xPos x position of the player
   */
  public setXPos(xPos: number): void {
    this.xPos = xPos;
  }

  /**
   * set y pos of the player
   *
   * @param yPos y position of the player
   */
  public setYPos(yPos: number): void {
    this.yPos = yPos;
  }

  /**
   * get the y position
   *
   * @returns the y position
   */
  public getYPos(): number {
    return this.yPos;
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
   * @returns current xpos of Player
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
   * Sets the amount of gravity
   *
   * @param gravity the amount of gravity, changes how fast you fall. On a platform it's always 0.
   */
  public setGravity(gravity: number): void {
    this.gravity = gravity;
  }

  /**
   * Sets whether the player is considered on a platform or not
   *
   * @param trueOrFalse if it's true or false that the player is on a platform
   */
  public setOnPlatform(trueOrFalse: boolean): void {
    this.onPlatform = trueOrFalse;
  }

  /**
   * get if you on a platform
   *
   * @returns true or false
   */
  public getOnPlatform(): boolean {
    return this.onPlatform;
  }

  /**
   * Increases the speed
   *
   * @param size the amount of speed to add
   */
  public increaseSpeed(size: number): void {
    this.xVel += size;
  }

  // abstract move(canvas: HTMLCanvasElement): void;

  abstract collidesWith(other: GameItem | Door | SpeedBubble): boolean;

  /**
   * plays the music of the person jumping
   */
  // eslint-disable-next-line class-methods-use-this
  protected jumpMusic(): void {
    const jumpMusic = new Audio('./assets/jumpMusic.mp3');
    jumpMusic.play();
  }

  /**
   * moves the players
   *
   * @param canvas the canvas of the game
   */
  public move(canvas: HTMLCanvasElement): void {
    let keys = [];
    const klisten = KeyListener;
    if (this.getType() === 'blue') {
      keys = [klisten.KEY_D, klisten.KEY_A, klisten.KEY_W, klisten.KEY_S];
    } else {
      keys = [klisten.KEY_RIGHT, klisten.KEY_LEFT, klisten.KEY_UP, klisten.KEY_DOWN];
    }

    // Set the limit values
    const minX = 0;
    const maxX = canvas.width - this.img.width;
    const minY = 0;
    // Moving right
    if (this.keyBoard.isKeyDown(keys[0]) && this.xPos < maxX) {
      this.xPos += this.xVel;
      if (this.getType() === 'blue') {
        this.setImage('./assets/img/BlueKidLookRight.png');
      } else {
        this.setImage('./assets/img/RedKidLookRight.png');
      }
      // Limit to the max value
      if (this.xPos > maxX) {
        this.xPos = maxX;
      }
    }

    // Moving left
    if (this.keyBoard.isKeyDown(keys[1]) && this.xPos > minX) {
      this.xPos -= this.xVel;
      if (this.getType() === 'blue') {
        this.setImage('./assets/img/BlueKid2.png');
      } else {
        this.setImage('./assets/img/RedKid2.png');
      }
      // Limit to the max value
      if (this.xPos < minX) {
        this.xPos = minX;
      }
      // this.setOnPlatform(false);
    }

    // Moving up
    if (this.keyBoard.isKeyDown(keys[2]) && this.yPos > minY) {
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
  }
}
