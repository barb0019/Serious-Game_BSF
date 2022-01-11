import ScoringObject from './ScoringObject.js';

export default class FutPack extends ScoringObject {
  /**
   *
   * @param xPos the max value of the X position
   * @param yPos the max value of the Y position
   * @param type type of the v buck
   * @param points points that you get of lose if you collide with the object
   */
  public constructor(xPos: number, yPos: number, type:string, points:number) {
    super(`./assets/img/pack${type}.png`, xPos, yPos, points, type);
  }
}
