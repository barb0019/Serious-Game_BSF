import Game from './Game.js';
import KeyListener from './KeyListener.js';
import Level from './Level.js';
import Scene from './Scene.js';

export default class InstructionScreen extends Scene {
  private shouldStart: boolean;

  private keyboard: KeyListener;

  private levelsArray: Level[];

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
    // this.levelsArray = [new Level1(game), new Level2(game)];
    console.log(this.game.getCurrentLevel());
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
    if (this.shouldStart) {
      if (this.game.getCurrentLevel().hasWon()) {
        this.levelsArray.splice(0, 1);
        // this.levelsArray.hasWon = false;
      }
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

    const { width } = this.game.canvas;
    const { height } = this.game.canvas;
    // this.game.writeTextToCanvas('Monsters and Legends', 128, centerX, 250, 'center', 'black');

    this.game.writeTextToCanvas('uitleg instructies', 128, centerX, height * 0.15, 'center', 'black');

    this.game.writeTextToCanvas('het doel van het spel is om drie sterren per level te pakken en samen naar de deur te gaan', height * 0.027, width * 0.26, height * 0.26, 'center', 'black');
    this.game.writeTextToCanvas('➡️', height * 0.027, width * 0.18, height * 0.23, 'center', 'black');
    this.game.ctx.drawImage(Game.loadNewImage('./assets/img/star.png'), width * 0.2, height * 0.2);
    this.game.writeTextToCanvas('⬅️', height * 0.027, width * 0.24, height * 0.23, 'center', 'black');

    this.game.writeTextToCanvas('➡️', height * 0.027, width * 0.18, height * 0.32, 'center', 'black');
    this.game.ctx.drawImage(Game.loadNewImage('./assets/img/DoubleDoor0.png'), width * 0.19, height * 0.29);
    this.game.writeTextToCanvas('⬅️', height * 0.027, width * 0.24, height * 0.32, 'center', 'black');

    this.game.writeTextToCanvas('op je pad vind je vijanden probeer deze ten alle tijden te vermijden!', height * 0.027, width * 0.80, height * 0.26, 'center', 'black');

    this.game.writeTextToCanvas('➡️', height * 0.027, width * 0.73, height * 0.32, 'center', 'black');
    this.game.ctx.drawImage(Game.loadNewImage('./assets/img/blue.png'), width * 0.75, height * 0.29);
    this.game.ctx.drawImage(Game.loadNewImage('./assets/img/packred.png'), width * 0.80, height * 0.29);
    this.game.ctx.drawImage(Game.loadNewImage('./assets/img/packblue.png'), width * 0.85, height * 0.29);
    this.game.ctx.drawImage(Game.loadNewImage('./assets/img/red.png'), width * 0.90, height * 0.29);
    this.game.writeTextToCanvas('⬅️', height * 0.027, width * 0.94, height * 0.32, 'center', 'black');
    this.game.writeTextToCanvas('deze vijanden zijn in echte games geldeenheden voor of lootboxen', height * 0.027, width * 0.79, height * 0.40, 'center', 'black');
    this.game.writeTextToCanvas('je mag alleen de vijanden raken als je dezelfde kleur hebt als deze vijand', height * 0.027, width * 0.79, height * 0.45, 'center', 'black');
    this.game.writeTextToCanvas('➡️', height * 0.027, width * 0.82, height * 0.50, 'center', 'black');
    this.game.ctx.drawImage(Game.loadNewImage('./assets/img/BlueKidLookRight.png'), width * 0.79, height * 0.44);
    this.game.ctx.drawImage(Game.loadNewImage('./assets/img/packred.png'), width * 0.70, height * 0.46);
    this.game.ctx.drawImage(Game.loadNewImage('./assets/img/packblue.png'), width * 0.83, height * 0.46);
    this.game.ctx.drawImage(Game.loadNewImage('./assets/img/RedKid2.png'), width * 0.74, height * 0.44);
    this.game.writeTextToCanvas('⬅️', height * 0.027, width * 0.73, height * 0.50, 'center', 'black');
    // this.game.writeTextToCanvas('Monsters and Legends', 128, centerX, 250, 'center', 'black');


    this.game.writeTextToCanvas(`Ready ${this.game.getUser().getName()}`, 48, centerX,
      450, 'center', 'black');
    this.game.writeTextToCanvas('druk op spatie', 48, centerX,
      550, 'center', 'black');
  }
}
