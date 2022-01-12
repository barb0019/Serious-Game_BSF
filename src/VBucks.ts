import ScoringObject from './ScoringObject.js';

export default class VBucks extends ScoringObject {
  private timer: number;

  /**
   *
   * @param xPos the max value of the X position
   * @param yPos the max value of the Y position
   * @param type type of the v buck
   * @param points
   */
  public constructor(xPos: number, yPos: number, type:string, points:number) {
    super(`./assets/img/${type}.png`, xPos, yPos, points, type,false);

    this.timer = 0;
    this.flyingSpeed = 5;
  }

  /**
   *
   */
  public move():void {
    this.xPos -= this.flyingSpeed;
    this.timer += 1;
    if (this.timer > 150) {
      this.timer = 0;
      this.xPos = 945;
    }
  }
}
