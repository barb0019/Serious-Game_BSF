import ScoringObject from './ScoringObject.js';

export default class FutPack extends ScoringObject {
  /**
   *
   * @param xPos the max value of the X position
   * @param yPos the max value of the Y position
   * @param type type of the v buck
   */
  public constructor(xPos: number, yPos: number, type:string, points:number) {
    super(`./assets/img/${type}.png`, xPos, yPos, points, type);
  }
}
