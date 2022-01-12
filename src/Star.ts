import Player from './Player.js';
import ScoringObject from './ScoringObject.js';

export default class Star extends ScoringObject {
  private player: Player;

  private height: number;

  private width: number;

  /**
   *
   * @param xPos the max value of the X position
   * @param yPos the max value of the Y position
   * @param type type of the v buck
   * @param points amount of point a object is
   */
  public constructor(xPos: number, yPos: number, type:string, points: number) {
    super(`./assets/img/${type}.png`, xPos, yPos, points, type, true);
  }
}
