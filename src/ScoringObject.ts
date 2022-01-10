import GameItem from './GameItem.js';

export default abstract class ScoringObject extends GameItem {
  private score: number;

  /**
   *
   * @param imageSrc the src of the image
   * @param maxX the max value of the X position
   * @param maxY the max value of the X position
   * @param xPos
   * @param yPos
   * @param score the score of this scoring object
   * @param type the type of tje object
   */
  public constructor(imageSrc: string, xPos: number, yPos: number,
    score: number, type:string) {
    super(imageSrc, xPos, yPos, type);
    this.score = score;
  }

  /**
   * getScore
   *
   * @returns the score
   */
  public getScore(): number {
    return this.score;
  }

  public move(): void {
  }
}
