import Scene from './Scene.js';
import Game from './Game.js';
import KeyListener from './KeyListener.js';

export default class Shop extends Scene {
  private keyboard: KeyListener;

  /**
   *
   */
  public constructor(game: Game) {
    super(game);
  }

  public update(elapsed: number): Scene {

    return null;
  }

  public processInput(): void {
    // if (this.keyboard.isKeyDown(KeyListener.KEY_ENTER)
    // && this.game.getUser().getLevel() < this.levelArray.length) {
    //   // this.levelArray.splice(0, 1);
    //   this.game.getUser().increaseLevel();
    //   return this.levelArray[this.game.getUser().getLevel() - 1];
    // }
  }

  public render(): void {
    this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
    this.game.writeTextToCanvas('SHOP', 90, this.game.canvas.width / 2, this.game.canvas.height / 5, 'center', 'black');
  }

}
