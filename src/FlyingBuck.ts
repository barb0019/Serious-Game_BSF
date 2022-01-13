import Enemies from './Enemies.js';
import Game from './Game.js';
export default class FlyingBuck extends Enemies {
  private timer: number;

  /**
   *
   * @param xPos the max value of the X position
   * @param yPos the max value of the Y position
   * @param type type of the v buck
   * @param points points that you lose of win if you collide with object
   * @param game the game of the game
   */
  public constructor(xPos: number, yPos: number, type:string, points:number, game: Game) {
    super(`./assets/img/${type}.png`, xPos, yPos, points, type, false, game);

    this.timer = 0;
    this.flyingSpeed += 1.50;
  }

  /**
   * move the flying vbucks
   */
  public move():void {
    this.xPos += this.flyingSpeed;
    this.timer += 1;
    if (this.timer > 200) {
      this.timer = 0;
      this.flyingSpeed = -this.flyingSpeed;
    }
  }
}
