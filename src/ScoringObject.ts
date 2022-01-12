import GameItem from './GameItem.js';

export default abstract class ScoringObject extends GameItem {
  private score: number;

  private alive:boolean;

  protected flyingSpeed: number;

  /**
   *
   * @param imageSrc the src of the image
   * @param xPos x position of the object
   * @param yPos y position of hte object
   * @param score the score of this scoring object
   * @param type the type of tje object
   */
  public constructor(imageSrc: string, xPos: number, yPos: number,
    score: number, type:string, alive:boolean) {
    super(imageSrc, xPos, yPos, type);
    this.score = score;
    this.alive = alive;
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
   * the object moves
   */
  // eslint-disable-next-line class-methods-use-this
  public move(): void {
  }

  /**
   *
   *
   * @returns
   */
   public getdeadly(): boolean {
    return this.alive;
  }
}
