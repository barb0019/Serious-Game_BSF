import Door from './Door.js';
import Game from './Game.js';
import GameOver from './GameOver.js';
import LevelUp from './LevelUp.js';
import Platform from './Platform.js';
import Player from './Player.js';
import PowerUp from './PowerUp.js';
import PressurePlate from './PressurePlate.js';
import Scene from './Scene.js';
import ScoringObject from './ScoringObject.js';
import SpeedBubble from './SpeedBubble.js';

export default abstract class Level extends Scene {
  // Garbage items (the player needs to pick these up)
  protected scoringObjects: ScoringObject[];

  protected speedBubble: SpeedBubble[];

  // Player
  protected player: Player[];

  // platform
  protected platform: Platform[];

  // Amount of frames until the next item
  private countUntilNextItem: number;

  protected door: Door;

  protected pressurePlate: PressurePlate[] = [];

  /**
   * Creates a new instance of this class
   *
   * @param game the game object where this scene will be a part of
   */
  public constructor(game: Game) {
    super(game);

    this.makePressurePlates();
    this.objects();
    // Create player
    this.players();
    // create platforms
    this.makePlatforms();
    // make speedbubbles
    this.speedbubbles(game);

    // Take about 5 seconds on a decent computer to show next item
    this.countUntilNextItem = 300;
  }

  /**
   *
   */
  protected makePressurePlates():void {}

  /**
   *makes de speedbubbles
   *
   * @param game the game of the game
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected speedbubbles(game: Game): void { }

  /**
   *
   */
  // eslint-disable-next-line class-methods-use-this
  protected players(): void { }

  /**
   *
   */
  // eslint-disable-next-line class-methods-use-this
  protected objects(): void { }

  /**
   * Creates platforms
   */
  // eslint-disable-next-line class-methods-use-this
  protected makePlatforms(): void { }

  /**
   * Removes scoring objects from the game based on box collision detection.
   *
   * Read for more info about filter function: https://alligator.io/js/filter-array-method/
   *
   * @param player the player of the game
   */
  private checksIfHit(player: Player) {
    // create a new array with garbage item that are still on the screen
    // (filter the clicked garbage item out of the array garbage items)

    this.scoringObjects = this.scoringObjects.filter(
      (element) => {
        const collides = player.collidesWith(element);
        if (collides) {
          this.game.getUser().addScore(element.getScore());
          this.game.getUser().setDeadorNot(element.getAlive());
          if (element instanceof PowerUp) {
            const powerUp = element as PowerUp;
            powerUp.applyTo(player);
          }
        }
        return !collides;
      },
    );
  }

  /**
   * show if you have won
   *
   * @returns true or false
   */
  public hasWon(): boolean {
    const user = this.game.getUser();
    return user.getScore() >= user.getLevel() * 3;
  }

  /**
   * Handles any user input that has happened since the last call
   */
  public processInput(): void {
    // Move the player
    // this.player.move(this.game.canvas);
    for (let i = 0; i < this.player.length; i++) {
      this.player[i].move(this.game.canvas);
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
   * @param elapsed the time in ms that has been elapsed since the previous
   *   call
   * @returns a new `Scene` object if the game should start animating that scene
   *   on the next animation frame. If the game should just continue with the
   *   current scene, just return `null`
   */
  public update(elapsed: number): Scene {
    this.player.forEach((element) => {
      element.increaseGravity();
    });

    for (let i = 0; i < this.platform.length; i++) {
      this.platform[i].collidesWith(this.player[0]);
      this.platform[i].collidesWith(this.player[1]);
    }

    // Player removes objects
    for (let i = 0; i < this.player.length; i++) {
      this.checksIfHit(this.player[i]);
    }

    // Create new items if necessary
    if (this.countUntilNextItem <= 0) {
      // const choice = Game.randomNumber(0, 10);

      // Reset the timer with a count between 2 and 4 seconds on a
      // decent computer
      this.countUntilNextItem = Game.randomNumber(120, 240);
    }

    // Lower the count until the next item with 1
    this.countUntilNextItem -= elapsed;

    // Move to level clear screen
    if (this.hasWon() && this.player[1].collidesWith(this.door)
      && this.player[0].collidesWith(this.door)) {
      return new LevelUp(this.game);
    }

    // this.scoringObjects[1].move();
    this.scoringObjects[2].move();

    // Move to gameover screen
    if (this.game.getUser().getAlive() === false) {
      return new GameOver(this.game);
    }
    return null;
  }

  /**
   * Draw the game so the player can see what happened
   */
  public render(): void {
    // Clear the screen
    this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);

    // console.log(this.speedBubble.getXPos(),this.speedBubble.getYPos())

    // Show score
    const score = `Stars: ${this.game.getUser().getScore()}`;
    this.game.writeTextToCanvas(score, 36, 120, 50);
    this.scoringObjects.forEach((element) => {
      element.draw(this.game.ctx);
    });
    for (let i = 0; i < this.player.length; i++) {
      this.player[i].draw(this.game.ctx);
    }
    for (let i = 0; i < this.platform.length; i++) {
      this.platform[i].draw(this.game.ctx);
    }

    for (let i = 0; i < this.pressurePlate.length; i++) {
      this.pressurePlate[i].draw(this.game.ctx, this.player);
    }
    this.door.draw(this.game.ctx, this.player);
    for (let i = 0; i < this.speedBubble.length; i++) {
      if (this.player[0].collidesWith(this.speedBubble[i])
        || this.player[1].collidesWith(this.speedBubble[i])) {
        // console.log(this.speedBubble);
        this.speedBubble[i].render();
      }
    }
  }
}
