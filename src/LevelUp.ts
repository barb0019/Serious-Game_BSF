import Game from './Game.js';
import KeyListener from './KeyListener.js';
import Level from './Level.js';
import Level1 from './Level1.js';
import Scene from './Scene.js';
import Shop from './Shop.js';

export default class LevelUp extends Scene {
  private shouldStart: boolean;

  private levelArray: Level[];

  private keyboard: KeyListener;

  private toShop: boolean;

  /**
   * Creates a new instance of this class
   *
   * @param game the game object where this scene will be a part of
   */
  public constructor(game: Game) {
    super(game);
    this.keyboard = new KeyListener();
    this.shouldStart = false;
    // this.levelArray = [new Level1(this.game), new Level1(this.game)];
  }

  /**
   * Handles any user input that has happened since the last call
   */
  public processInput(): void {
    if (this.keyboard.isKeyDown(KeyListener.KEY_P)) {
      this.shouldStart = true;
      Game.pause();
    }
    if (this.keyboard.isKeyDown(KeyListener.KEY_SPACE)) {
      this.toShop = true;
      Game.pause();
    }
  }

  /**
   * Advances the game simulation one step. It may run AI and physics (usually
   * in that order). The return value of this method determines what the `GameLoop`
   * that is animating this object will do next. If `null` is returned, the
   * GameLoop will render this scene and proceeds to the next animation frame.
   * If this methods returns a `Scene` (subclass) object, it will NOT render this
   * scene but will start considering that object as the current scene to animate.
   * In other words, by returning a Scene object, you can set the next scene to
   * animate.
   *
   * @returns a new `Scene` object if the game should start animating that scene
   *   on the next animation frame. If the game should just continue with the
   *   current scene, just return `null`
   */
  public update(): Scene {
    if (this.toShop) {
      return new Shop(this.game, this.game.getCurrentLevel());
    }
    if (this.shouldStart && this.game.getUser().getLevel() +1 <= 2) {

      // this.levelArray.splice(0, 1);
      console.log(this.game.getUser().getLevel());
      this.game.getUser().increaseLevel();
      console.log('test');
      return this.game.getCurrentLevel();
    }
    return null;
  }

  /**
   * Draw the game so the player can see what happened
   */
  public render(): void {
    // Clear the screen
    this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
    // Show score
    const centerX = this.game.canvas.width / 2;
    const line1 = `Level ${this.game.getUser().getLevel()} Clear`;
    this.game.writeTextToCanvas(line1, 128, centerX, 250, 'center', 'red');
    const msg = `${this.game.getUser().getName()} score: ${this.game.getUser().getScore()}`;
    this.game.writeTextToCanvas(msg, 48, centerX, 450, 'center', 'yellow');
    this.game.writeTextToCanvas("Type 'p' to proceed to the next level", 48, centerX,
      550, 'center', 'black');
    this.game.writeTextToCanvas("Press 'space' to go to the shop", 48, centerX, 600, 'center', 'black');
  }
}
