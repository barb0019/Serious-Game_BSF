import ScoringObject from './ScoringObject.js';

export default class Redbucks extends ScoringObject {
  /**
   *
   * @param maxX the max value of the X position
   * @param maxY the max value of the Y position
   */
  public constructor(maxX: number, maxY: number) {
    super('./assets/img/red.png', maxX - 2, maxY - 50, -5);
  }
}
