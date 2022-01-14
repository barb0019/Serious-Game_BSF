import Enemies from './Enemies.js';
import Game from './Game.js';

export default class VBucks extends Enemies {
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

    this.timer = 0;
    this.flyingSpeed += 4;
  }

  /**
   * move the vbucks
   */
  public move():void {
    this.xPos -= this.flyingSpeed;
    this.timer += 1;
    if (this.timer > 150) {
      this.timer = 0;
      // this.xPos = 945;
      this.flyingSpeed = -this.flyingSpeed;
    }
  }
}
