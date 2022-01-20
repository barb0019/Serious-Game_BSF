import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
import SpeedBubble from './SpeedBubble.js';
import Game from './Game.js';
import InteractingItems from './InteractingItems.js';
import MuteButton from './MuteButton.js';

export default abstract class Player extends GameItem {
  protected xVel: number;

  protected keyBoard: KeyListener;

  public xPosPrevious: number[];

  public yPosPrevious: number[];

  protected gravity: number;

  protected onPlatform: boolean;

  protected jumpHeight: number;

  private static gravityIncrease: number = 0.2;

  protected isJumping: boolean;

  protected game: Game;

  private walkingLeftRed: string[];

  private walkingRightRed: string[];

  private walkingLeftBlue: string[];

  private walkingRightBlue: string[];

  private animationFrameRed: number;

  private animationFrameBlue: number;

  /**
   * intilize the class player
   *
   * @param imageSrc imageSrc, the actual image used for the player
   * @param maxX the max value of the X positiond
   * @param maxY the max value of the X position
   * @param type the type of item
   * @param game the game of the game
   */
  public constructor(imageSrc: string, maxX: number, maxY: number, type: string, game: Game) {
    super(imageSrc, maxX - 76, maxY - 92, type);
    this.game = game;
    Player.gravityIncrease = game.canvas.height * 0.00025;
    this.jumpHeight = Player.gravityIncrease * 50;
    this.xVel = 5;
    this.keyBoard = new KeyListener();
    this.xPosPrevious = [];
    this.yPosPrevious = [];
    this.xPosPrevious.push(0);
    this.yPosPrevious.push(0);
    this.animationFrameRed = 0;
    this.animationFrameBlue = 0;
    this.createAnimationArray();
    this.gravity = 0;

    this.checkBoughtItems();
  }

  /**
   * creat an array of amages for the animation.
   * This is for the both players
   */
  private createAnimationArray() {
    this.walkingLeftRed = [
      './assets/img/animations/RedKidAnimation.png',
      './assets/img/animations/RedKidAnimation1.png',
      './assets/img/animations/RedKidAnimation2.png',
      './assets/img/animations/RedKidAnimation3.png',
      './assets/img/animations/RedKidAnimation4.png',
      './assets/img/animations/RedKidAnimation5.png',
      './assets/img/animations/RedKidAnimation6.png',
      './assets/img/animations/RedKidAnimation7.png',
      './assets/img/animations/RedKidAnimation8.png',
    ];

    this.walkingRightRed = [
      './assets/img/animations/RedKidAnimationRight.png',
      './assets/img/animations/RedKidAnimationRight1.png',
      './assets/img/animations/RedKidAnimationRight2.png',
      './assets/img/animations/RedKidAnimationRight3.png',
      './assets/img/animations/RedKidAnimationRight4.png',
      './assets/img/animations/RedKidAnimationRight5.png',
      './assets/img/animations/RedKidAnimationRight6.png',
      './assets/img/animations/RedKidAnimationRight7.png',
      './assets/img/animations/RedKidAnimationRight8.png',
    ];
    this.walkingLeftBlue = [
      './assets/img/animations/GirlAnimation1.png',
      './assets/img/animations/GirlAnimation2.png',
      './assets/img/animations/GirlAnimation3.png',
      './assets/img/animations/GirlAnimation4.png',
      './assets/img/animations/GirlAnimation5.png',
      './assets/img/animations/GirlAnimation6.png',
      './assets/img/animations/GirlAnimation7.png',
      './assets/img/animations/GirlAnimation8.png',
      './assets/img/animations/GirlAnimation9.png',
    ];
    this.walkingRightBlue = [
      './assets/img/animations/GirlAnimationRight1.png',
      './assets/img/animations/GirlAnimationRight2.png',
      './assets/img/animations/GirlAnimationRight3.png',
      './assets/img/animations/GirlAnimationRight4.png',
      './assets/img/animations/GirlAnimationRight5.png',
      './assets/img/animations/GirlAnimationRight6.png',
      './assets/img/animations/GirlAnimationRight7.png',
      './assets/img/animations/GirlAnimationRight8.png',
      './assets/img/animations/GirlAnimationRight9.png',
    ];

    // Pre-loads the images to be changed instantly
    for (let i = 0; i < this.walkingLeftRed.length; i++) {
      Game.loadNewImage(this.walkingLeftRed[i]);
      Game.loadNewImage(this.walkingLeftBlue[i]);
      Game.loadNewImage(this.walkingRightRed[i]);
      Game.loadNewImage(this.walkingRightBlue[i]);
    }
  }

  /**
   * checks if you bought the Items
   */
  public checkBoughtItems(): void {
    const boughtItems = this.game.getBoughtItems();
    for (let i = 0; i < boughtItems.length; i++) {
      if (boughtItems[i] === 0) {
        this.jumpHeight *= 1.1;
      }
      if (boughtItems[i] === 1) {
        this.xVel *= 1.1;
      }
    }
  }

  /**
   * increases the gravity and apllies it to the player
   */
  public increaseGravity(): void {
    if (!this.onPlatform) {
      this.yPos += this.gravity;
      this.gravity += Player.gravityIncrease;
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
      if (MuteButton.muted === false) {
        this.jumpMusic();
      }
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
  /**
   *checks if it the player collides with a object
   *
   * @param other game items
   */
  abstract collidesWith(other: GameItem | SpeedBubble | InteractingItems): boolean;

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
      this.animateRight();
      // Limit to the max value
      if (this.xPos > maxX) {
        this.xPos = maxX;
      }
    }

    // Moving left
    if (this.keyBoard.isKeyDown(keys[1]) && this.xPos > minX) {
      this.xPos -= this.xVel;
      this.animateLeft();
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

  private animateRight() {
    if (this.getType() === 'blue' && this.onPlatform) {
      this.animationFrameBlue += 1;
      if (this.animationFrameBlue % 10 === 0) {
        if (this.animationFrameBlue / 10 >= this.walkingRightBlue.length) {
          this.animationFrameBlue = 0;
        }
        this.setImage(this.walkingRightBlue[this.animationFrameBlue / 10]);
      }
    } else if (this.getType() === 'blue' && !this.onPlatform) {
      this.setImage(this.walkingRightBlue[0]);
    } else if (this.getType() === 'red' && this.onPlatform) {
      this.animationFrameRed += 1;
      if (this.animationFrameRed % 10 === 0) {
        if (this.animationFrameRed / 10 >= this.walkingRightRed.length) {
          this.animationFrameRed = 0;
        }
        this.setImage(this.walkingRightRed[this.animationFrameRed / 10]);
      }
    } else if (this.getType() === 'red' && !this.onPlatform) {
      this.setImage(this.walkingRightRed[0]);
    }
  }

  private animateLeft() {
    if (this.getType() === 'blue' && this.onPlatform) {
      this.animationFrameBlue += 1;
      if (this.animationFrameBlue % 10 === 0) {
        if (this.animationFrameBlue / 10 >= this.walkingLeftBlue.length) {
          this.animationFrameBlue = 0;
        }
        this.setImage(this.walkingLeftBlue[this.animationFrameBlue / 10]);
      }
    } else if (this.getType() === 'blue' && !this.onPlatform) {
      this.setImage(this.walkingLeftBlue[0]);
    } else if (this.getType() === 'red' && this.onPlatform) {
      this.animationFrameRed += 1;
      if (this.animationFrameRed % 10 === 0) {
        if (this.animationFrameRed / 10 >= this.walkingLeftRed.length) {
          this.animationFrameRed = 0;
        }
        this.setImage(this.walkingLeftRed[this.animationFrameRed / 10]);
      }
    } else if (!this.onPlatform) {
      this.setImage(this.walkingLeftRed[0]);
    }
  }
}
