import Enemies from './Enemies.js';
import Game from './Game.js';

export default class FlyingBuck extends Enemies {
  private maxXPos: number;

  private maxYPos: number;

  private goingRight: boolean;

  /**
   *
   * @param xPos the max value of the X position
   * @param yPos the max value of the Y position
   * @param type type of the v buck
   * @param points points that you lose of win if you collide with object
   * @param game the game of the game
   */
  public constructor(xPos: number, yPos: number, type: string, points: number, game: Game) {
    super(`./assets/img/${type}.png`, xPos, yPos, points, type, false, game);

    this.goingRight = true;
    this.maxXPos = this.xPos + game.canvas.width * 0.17;
    this.maxYPos = this.yPos + game.canvas.width * 0.17;
    this.flyingSpeed += 2;
  }

  /**
   * move the flying vbucks
   */
  public move(): void {
    this.xPos += this.flyingSpeed;
    if (this.goingRight) {
      if (this.xPos > this.maxXPos) {
        this.maxXPos = this.xPos - this.game.canvas.width * 0.17;
        this.flyingSpeed = -this.flyingSpeed;
        this.goingRight = false;
      }
    } else if (this.xPos < this.maxXPos) {
      this.maxXPos = this.xPos + this.game.canvas.width * 0.17;
      this.flyingSpeed = -this.flyingSpeed;
      this.goingRight = true;
    }
  }

  /**
   * move the flying vbucks vertically
   */
  public moveY(): void {
    this.yPos += this.flyingSpeed;
    if (this.goingRight) {
      if (this.yPos > this.maxYPos) {
        this.maxYPos = this.yPos - this.game.canvas.width * 0.17;
        this.flyingSpeed = -this.flyingSpeed;
        this.goingRight = false;
      }
    } else if (this.yPos < this.maxYPos) {
      this.maxYPos = this.yPos + this.game.canvas.width * 0.17;
      this.flyingSpeed = -this.flyingSpeed;
      this.goingRight = true;
    }
  }
}
