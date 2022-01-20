import Game from './Game.js';
import ScoringObject from './ScoringObject.js';

export default abstract class Enemies extends ScoringObject {
  protected flyingSpeed: number;

  protected game: Game;

  protected flyingSpeed1: number;

  /**
   * intilize the enemies
   *
   * @param imageSrc the image source of the enemy
   * @param xPos the x position of the enemy
   * @param yPos the y position of the enemy
   * @param score the score what you get if you got hit
   * @param type the type of enemy
   * @param alive let see if the enemy can kill you
   * @param game the game of the game
   */
  public constructor(imageSrc: string, xPos: number, yPos: number,
    score: number, type:string, alive: boolean, game: Game) {
    super(imageSrc, xPos, yPos, score, type, alive);
    this.game = game;
    this.flyingSpeed = 0;
    this.flyingSpeed1 = 0;
    this.checkBoughtItems();
  }

  /**
   * check if you bought the items
   */
  public checkBoughtItems(): void {
    const boughtItems = this.game.getBoughtItems();
    for (let i = 0; i < boughtItems.length; i++) {
      if (boughtItems[i] === 3) {
        this.flyingSpeed += 3;
      }
    }
  }

  /**
   * move the enemies
   */
  // eslint-disable-next-line class-methods-use-this
  public move(): void {}
}
