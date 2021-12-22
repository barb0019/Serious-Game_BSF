import ScoringObject from './ScoringObject.js';

export default class FutPack extends ScoringObject {
  /**
   *
   * @param maxX the max value of the X position
   * @param maxY the max value of the Y position
   * @param type type of the v buck
   */
  public constructor(maxX: number, maxY: number, type:string) {
    super(`./assets/img/${type}.png`, maxX - 2, maxY - 50, 15, type);
  }
}
