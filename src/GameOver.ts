import Game from './Game.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import Start from './Start.js';

export default class GameOver extends Scene {
  private shouldStart: boolean;

  private keyboard: KeyListener;

  /**
   * Creates a new instance of this class
   *
   * @param game the game object where this scene will be a part of
   */
  public constructor(game: Game) {
    super(game);
    this.keyboard = new KeyListener();
    this.shouldStart = false;
    // change the background
    document.getElementById('canvas').style.backgroundImage = 'url(./assets/img/background/Desert-BackgroundStart.png)';
  }

  /**
   * Handles any user input that has happened since the last call
   */
  public processInput(): void {
    if (this.keyboard.isKeyDown(KeyListener.KEY_SPACE)) {
      for (let i = 0; i < 5; i++) {
        Game.pause(i);
      }
      this.shouldStart = true;
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
    if (this.shouldStart) {
      this.game.resetBoughtItems();
      return new Start(this.game);
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
    this.game.writeTextToCanvas('Game Over', 128, centerX, 250, 'center', 'black');
    const msg = `${this.game.getUser().getName()} score: ${this.game.getUser().getScore()}`;
    this.game.writeTextToCanvas(msg, 48, centerX, 450, 'center', 'black');
    this.game.writeTextToCanvas("Type 'space' to continue", 48, centerX,
      550, 'center', 'black');
  }
}
