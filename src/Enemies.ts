import Game from './Game.js';
import ScoringObject from './ScoringObject.js';

export default abstract class Enemies extends ScoringObject {
  protected flyingSpeed: number;

  protected game: Game;

  /**
   * @param imageSrc
   * @param xPos
   * @param yPos
   * @param score
   * @param type
   * @param alive
   * @param game
   */
  public constructor(imageSrc: string, xPos: number, yPos: number,
    score: number, type:string, alive: boolean, game: Game) {
    super(imageSrc, xPos, yPos, score, type, alive);
    this.game = game;
    this.flyingSpeed = 0;
    this.checkBoughtItems();
  }

  /**
   *
   */
  public checkBoughtItems(): void {
    const boughtItems = this.game.getBoughtItems();
    for (let i = 0; i < boughtItems.length; i++) {
      if (boughtItems[i] === 3) {
        this.flyingSpeed += 3;
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  /**
   *
   */
  public move(): void {}
}
