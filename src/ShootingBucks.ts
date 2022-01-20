import Enemies from './Enemies.js';
import Game from './Game.js';

export default class Shootingbuck extends Enemies {
  private maxXPos: number;

  private maxYPos: number;

  private goingRight: boolean;

  private timer: number;

  /**
   * intilize the class shootingbucks
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
    this.flyingSpeed += 5;
    this.timer = 0;
  }

  /**
   * move the shooting bucks horinzontal
   */
  public move():void {
    this.xPos -= this.flyingSpeed;
    this.timer += 1;
    if (this.timer > 250) {
      this.timer = 0;
      this.xPos = this.game.canvas.width * 0.70;
    }
  }

  /**
   * move the shooting bucks from left to right position
   */
  public move1():void {
    this.xPos += this.flyingSpeed;
    this.timer += 1;
    if (this.timer > 150) {
      this.timer = 0;
      this.xPos = this.game.canvas.width * 0.228;
    }
  }

  /**
   * move the shooting bucks from right to left position
   */
  public move2():void {
    this.xPos += this.flyingSpeed;
    this.timer += 1;
    if (this.timer > 200) {
      this.timer = 50;
      this.xPos = this.game.canvas.width * 0.228;
    }
  }

  /**
   * move the shooting buks from high to a low position
   */
  public moveY():void {
    this.yPos += this.flyingSpeed;
    this.timer += 1;
    if (this.timer > 60) {
      this.timer = 0;
      this.flyingSpeed = -this.flyingSpeed;
    }
  }
}
