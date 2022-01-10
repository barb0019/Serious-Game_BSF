import Game from './Game.js';
import KeyListener from './KeyListener.js';
import Level1 from './Level.js';
import Level2 from './Level2.js';
import Scene from './Scene.js';

export default class Start extends Scene {
  private shouldStart: boolean;

  private keyboard: KeyListener;

  private levelsArray: any;

  /**
   * Creates a new instance of this class
   *
   * @param game the game object where this scene will be a part of
   */
  public constructor(game: Game) {
    super(game);
    game.reset();
    this.keyboard = new KeyListener();
    this.shouldStart = false;
    this.levelsArray = [new Level1(game), new Level2(game)];
  }

  /**
   * Handles any user input that has happened since the last call
   */
  public processInput(): void {
    if (this.keyboard.isKeyDown(KeyListener.KEY_SPACE)) {
      this.shouldStart = true;
      Game.play();
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
    console.log('test with HAM');
    // ZODRA JE OP DE SPATIE DRUKT WORDT DEZE FUNCTIE GENEGEERt
    if (this.shouldStart) {
      console.log('test');
      if (this.levelsArray[this.game.getUser().getLevel() - 1].hasWon()) { // dit stuk ergens anders
        this.levelsArray.splice(0, 1);
        this.levelsArray.hasWon = false;
      }
      return this.levelsArray[this.game.getUser().getLevel() - 1]; // nop wrk nit
    }
    return null;
  }
  // ik heb iets geflikt. het werkt. maar in achterwaardse volgorde.gaA

  /**
   * Draw the game so the player can see what happened
   */
  public render(): void {
    // Clear the screen
    this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
    // Show score
    const centerX = this.game.canvas.width / 2;
    this.game.writeTextToCanvas('Monsters and Legends', 128, centerX, 250, 'center', 'black');
    this.game.writeTextToCanvas(`Ready ${this.game.getUser().getName()}`, 48, centerX,
      450, 'center', 'black');
    this.game.writeTextToCanvas("Type 'space' to start", 48, centerX,
      550, 'center', 'black');
  }
}
