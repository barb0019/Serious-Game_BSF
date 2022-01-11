import Scene from './Scene.js';
import Game from './Game.js';
import KeyListener from './KeyListener.js';

export default class Shop extends Scene {
  private keyboard: KeyListener;

  private levelArray: any[];

  private continueGame: boolean;

  /**
   * @param game THE game
   */
  public constructor(game: Game, levelArray: any[]) {
    super(game);
    this.levelArray = levelArray;
    this.keyboard = new KeyListener();
    this.continueGame = false;
  }

  /**
   * @param elapsed
   */
  public update(elapsed: number): Scene {
    if (this.continueGame && this.game.getUser().getLevel() < this.levelArray.length) {
      // this.levelArray.splice(0, 1);
      this.game.getUser().increaseLevel();
      return this.levelArray[this.game.getUser().getLevel() - 1];
    }
    return null;
  }

  /**
   *
   */
  public processInput(): void {
    if (this.keyboard.isKeyDown(KeyListener.KEY_ENTER)) {
      this.continueGame = true;
    }
    return null;
  }

  /**
   *
   */
  public render(): void {
    this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
    this.game.writeTextToCanvas('SHOP', 90, this.game.canvas.width / 2, this.game.canvas.height / 5, 'center', 'black');
    this.game.writeTextToCanvas('Press enter to leave', 70, this.game.canvas.width / 2, this.game.canvas.height / 3, 'center', 'black');
  }
}
