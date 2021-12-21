import ScoringObject from './ScoringObject.js';

export default class Bluebucks extends ScoringObject {
  /**
   *
   * @param maxX the max value of the X position
   * @param maxY the max value of the X position
   */
  public constructor(maxX: number, maxY: number) {
    super('./assets/img/blue.png', maxX - 2, maxY - 50, -5);
  }
}
