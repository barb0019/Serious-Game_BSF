import GameItem from './GameItem.js';

export default abstract class ScoringObject extends GameItem {
  private score: number;

  private type:string;

  /**
   *
   * @param imageSrc the src of the image
   * @param maxX the max value of the X position
   * @param maxY the max value of the X position
   * @param score the score of this scoring object
   * @param type the type of tje object
   */
  public constructor(imageSrc: string, xPos: number, yPos: number,
    score: number, type:string) {
    super(imageSrc, xPos, yPos);
    this.score = score;
    this.type = type;
  }

  /**
   * getScore
   *
   * @returns the score
   */
  public getScore(): number {
    return this.score;
  }
  /**
   * gwt the type
   *
   * @returns the type color od the object
   */
  public getType():string {
    return this.type;
  }
}
