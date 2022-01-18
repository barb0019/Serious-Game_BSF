import Scene from './Scene.js';
import Game from './Game.js';
import KeyListener from './KeyListener.js';
import Level from './Level.js';
import Start from './Start.js';

export default class WinScreen extends Scene {
  private continueGame: boolean = false;

  private keyboard: KeyListener;

  /**
   * @param game
   */
  public constructor(game: Game) {
    super(game);

    this.keyboard = new KeyListener();
  }

  /**
   *
   * @returns The level
   */
  public update(): Scene {
    if (this.continueGame) {
      return new Start(this.game);
    }
    return null;
  }

  /**
   * input to progress in the shop
   *
   */
  public processInput(): void {
    if (this.keyboard.isKeyDown(KeyListener.KEY_ENTER)) {
      this.continueGame = true;
    }
  }

  /**
   *
   */
  public render(): void {
    const { canvas } = this.game;
    const win = this.game;
    this.game.ctx.clearRect(0, 0, canvas.width, canvas.height);

    win.writeTextToCanvas('YOU WIN', 100, canvas.width / 2, canvas.height / 2, 'center', 'black');
    win.writeTextToCanvas('Click ENTER om opnieuw te beginnen, je houdt al je items', 100, canvas.width / 2, canvas.height / 2.5, 'center', 'black');
  }
}
