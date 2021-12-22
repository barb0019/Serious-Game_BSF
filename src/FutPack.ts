import ScoringObject from './ScoringObject.js';

export default class FutPack extends ScoringObject {
  /**
   *
   * @param maxX the max value of the X position
   * @param maxY the max value of the Y position
   * @param type type of the v buck
   */
  public constructor(xPos: number, yPos: number, type:string) {
    super(`./assets/img/${type}.png`, 550, 550, 15, type);
  }
}
