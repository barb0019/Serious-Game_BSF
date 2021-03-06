import GameItem from './GameItem.js';

export default abstract class ScoringObject extends GameItem {
  private score: number;

  private alive:boolean;

  /**
   * intilize the class ScoringObject
   *
   * @param imageSrc the src of the image
   * @param xPos x position of the object
   * @param yPos y position of hte object
   * @param score the score of this scoring object
   * @param type the type of tje object
   * @param alive shows if the players are alive
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
   * the object moves
   */
  // eslint-disable-next-line class-methods-use-this
  public move1(): void {
  }

  /**
   * the object moves
   */
  // eslint-disable-next-line class-methods-use-this
  public move2(): void {
  }

  /**
   * the object moves vertically
   */
  // eslint-disable-next-line class-methods-use-this
  public moveY(): void {
  }

  /**
   * the object moves vertically
   */
  // eslint-disable-next-line class-methods-use-this
  public moveY2(): void {
  }

  /**
   * get alive
   *
   * @returns true or false
   */
  public getAlive(): boolean {
    return this.alive;
  }
}
