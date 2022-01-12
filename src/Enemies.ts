import ScoringObject from './ScoringObject.js';


export default abstract class Enemies extends ScoringObject {
  protected flyingSpeed: number;

  public constructor(imageSrc: string, xPos: number, yPos: number,
    score: number, type:string, alive: boolean) {
    super(imageSrc, xPos, yPos, score, type, alive);

  }

  public checkBoughtItems(): void {

  }

  // eslint-disable-next-line class-methods-use-this
  public move(): void {}
}
