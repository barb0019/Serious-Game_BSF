import ScoringObject from './ScoringObject.js';

export default class FlyingBuck extends ScoringObject {
  private timer: number;

  private flyingSpeed: number;

  /**
   *
   * @param xPos the max value of the X position
   * @param yPos the max value of the Y position
   * @param type type of the v buck
   * @param points
   */
  public constructor(xPos: number, yPos: number, type:string, points:number) {
    super(`./assets/img/${type}.png`, xPos, yPos, points, type);

    this.timer = 0;
    this.flyingSpeed = 3;
  }

  /**
   * g
   */
  public move() {
    this.xPos += this.flyingSpeed;
    this.timer += 1;
    if (this.timer > 20) {
      this.timer = 0;
      this.flyingSpeed = -this.flyingSpeed;
    }
  }
}
