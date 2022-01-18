import Enemies from './Enemies.js';
import Game from './Game.js';

export default class VBucks extends Enemies {
  private maxXPos: number;

  private goingRight: boolean;

  private timer: number;

  /**
   *  initilize the vbucks
   *
   * @param xPos the max value of the X position
   * @param yPos the max value of the Y position
   * @param type type of the v buck
   * @param points points you get if you got hit
   * @param game the game of the game
   */
  public constructor(xPos: number, yPos: number, type:string, points:number, game: Game) {
    super(`./assets/img/${type}.png`, xPos, yPos, points, type, false, game);

    this.goingRight = false;
    this.maxXPos = this.xPos - game.canvas.width * 0.28;
    this.flyingSpeed += 3;
    this.timer = 0;
  }

  /**
   * move the vbucks
   */
  public move():void {
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
   * move the flying vbucks
   */
  public moveY():void {
    this.yPos += this.flyingSpeed;
    this.timer += 1;
    if (this.timer > 55) {
      this.timer = 0;
      this.flyingSpeed = -this.flyingSpeed;
    }
  }

  /**
   * move the flying vbucks
   */
  public moveY2():void {
    this.yPos -= this.flyingSpeed;
    this.timer += 1;
    if (this.timer > 55) {
      this.timer = 0;
      this.flyingSpeed = -this.flyingSpeed;
    }
  }
}
