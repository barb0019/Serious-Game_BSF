import Enemies from './Enemies.js';
import Game from './Game.js';

export default class VBucks extends Enemies {
  private maxXPos: number;

  private maxYPos: number;

  private goingRight: boolean;

  private timer: number;

  private minYPos: number;

  /**
   *  initilize the vbucks
   *
   * @param xPos the max value of the X position
   * @param yPos the max value of the Y position
   * @param type type of the v buck
   * @param points points you get if you got hit
   * @param game the game of the game
   */
  public constructor(xPos: number, yPos: number, type: string, points: number, game: Game) {
    super(`./assets/img/${type}.png`, xPos, yPos, points, type, false, game);

    this.goingRight = false;
    this.maxXPos = this.xPos - game.canvas.width * 0.28;
    this.maxYPos = this.yPos - game.canvas.height * 0.05;
    this.minYPos = this.yPos + game.canvas.height * 0.3;
    this.flyingSpeed += 3.5;
    this.flyingSpeed1 += 3.5;
    this.timer = 0;
  }

  /**
   * move the vbucks
   */
  public move(): void {
    this.xPos -= this.flyingSpeed;
    if (this.goingRight) {
      if (this.xPos > this.maxXPos) {
        this.maxXPos = this.xPos - this.game.canvas.width * 0.28;
        this.flyingSpeed = -this.flyingSpeed;
        this.goingRight = false;
      }
    } else if (this.xPos < this.maxXPos) {
      this.maxXPos = this.xPos + this.game.canvas.width * 0.28;
      this.flyingSpeed = -this.flyingSpeed;
      this.goingRight = true;
    }
  }

  /**
   * move the flying vbucks vertically
   */
  public moveY(): void {
    this.yPos += this.flyingSpeed1;
    this.timer += 1;
    if (this.timer > 55) {
      this.timer = 0;
      this.flyingSpeed1 = -this.flyingSpeed1;
    }
    // this.yPos += this.flyingSpeed;
    // if (this.yPos > this.minYPos) {
    //   // this.minYPos = this.yPos + this.game.canvas.width * 0.28;
    //   this.flyingSpeed = -this.flyingSpeed;
    //   this.goingRight = false;
    // }
    // if (this.yPos < this.maxYPos) {
    //   // this.maxYPos = this.yPos - this.game.canvas.width * 0.28;
    //   this.flyingSpeed = -this.flyingSpeed;
    //   this.goingRight = true;
    // }

    // this.yPos += this.flyingSpeed;
    // console.log(`max: ${this.maxYPos}`);
    // console.log(this.yPos);

    // if (this.goingRight) {
    //   if (this.yPos < this.maxYPos) {
    //     this.maxYPos = this.yPos - this.game.canvas.height * 0.5;
    //     this.flyingSpeed = -this.flyingSpeed;
    //     this.goingRight = false;
    //   }
    // } else if (this.yPos > this.maxYPos) {
    //   this.maxYPos = this.yPos + this.game.canvas.height * 0.5;
    //   this.flyingSpeed = -this.flyingSpeed;
    //   this.goingRight = true;
    // }
  }

  /**
   * move the flying vbucks vertically
   */
  public moveY2(): void {
    this.yPos -= this.flyingSpeed1;
    this.timer += 1;
    if (this.timer > 55) {
      this.timer = 0;
      this.flyingSpeed1 = -this.flyingSpeed1;
    }
  }
}
