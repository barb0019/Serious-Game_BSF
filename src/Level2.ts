import Game from './Game.js';
import Platform from './platform.js';
import VBucks from './VBucks.js';
import PlayerRed from './PlayerRed.js';
import PlayerBlue from './playerblue.js';
import FutPack from './FutPack.js';
import Star from './Star.js';
import Door from './Door.js';
import FlyingBuck from './FlyingBuck.js';
import SpeedBubble from './SpeedBubble.js';
import Level from './Level.js';

export default class Level2 extends Level {
  /**
   * Creates a new instance of this class
   *
   * @param game the game object where this scene will be a part of
   */
  public constructor(game: Game) {
    super(game);

    this.objects();
    // Create player
    this.players();
    // create platforms
    this.makePlatforms();
    // make speedbubbles
    this.speedbubbles(game);
    // Take about 5 seconds on a decent computer to show next item
    // this.countUntilNextItem = 300;

    // Take about 5 seconds on a decent computer to show next item
    // this.countUntilNextItem = 300;
    // console.log('level 2');
  }

  /**
   * makes the speedbubbles
   *
   * @param game the game of the game
   */
  protected speedbubbles(game: Game): void {
    this.speedBubble = [];
    this.speedBubble.push(new SpeedBubble(game, 'hallo', 100, 500, this.player[1], this.player[0],100,50));
  }

  /**
   *
   */
  protected players(): void {
    this.player = [];
    // Create player
    this.player.push(new PlayerRed(this.game.canvas.width, this.game.canvas.height, this.game));
    this.player.push(new PlayerBlue(this.game.canvas.width, this.game.canvas.height, this.game));
  }

  /**
   *
   */
  protected objects(): void {
    this.door = new Door(250, 550, 'DoubleDoor0');
    this.scoringObjects = [];
    this.scoringObjects.push(new VBucks(250, 350, 'blue', -3, this.game));
    this.scoringObjects.push(new VBucks(650, 350, 'red', -3, this.game));
    this.scoringObjects.push(new FlyingBuck(550, 350, 'flyingbuck', -3, this.game));
    this.scoringObjects.push(new FutPack(450, 350, 'red', -3));
    this.scoringObjects.push(new FutPack(850, 350, 'blue', -3));
    this.scoringObjects.push(new Star(950, 450, 'star', 1));
    this.scoringObjects.push(new Star(1050, 450, 'star', 1));
    this.scoringObjects.push(new Star(1150, 450, 'star', 1));
  }

  /**
   * Creates platforms
   */
  public makePlatforms(): void {
    const { canvas } = this.game;
    this.platform = [];

    this.platform.push(new Platform(250, 250, 200, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(100, 100, 75, 25, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(1000, canvas.height / 1.5, 75, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(1250, canvas.height / 1.5, 100, 100, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    console.log('LEVEL2');
    // the ground
    // this.platform.push(new Platform(0, canvas.height - 50, canvas.width / 4, 50,
    //  Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(canvas.width / 4, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(canvas.width / 2, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(canvas.width * 0.75, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
  }

  //   /**
  //    * Removes scoring objects from the game based on box collision detection.
  //    *
  //    * Read for more info about filter function: https://alligator.io/js/filter-array-method/
  //    *
  //    * @param player
  //    */
  //   private checksIfHit(player:Player) {
  //     // create a new array with garbage item that are still on the screen
  //     // (filter the clicked garbage item out of the array garbage items)

  //     this.scoringObjects = this.scoringObjects.filter(
  //       (element) => {
  //         const collides = player.collidesWith(element);
  //         if (collides) {
  //           this.game.getUser().addScore(element.getScore());
  //           if (element instanceof PowerUp) {
  //             const powerUp = element as PowerUp;
  //             powerUp.applyTo(player);
  //           }
  //         }
  //         return !collides;
  //       },
  //     );
  //   }

  //   private hasWon(): boolean {
  //     const user = this.game.getUser();
  //     return user.getScore() >= user.getLevel() * 3;
  //   }

  //   /**
  //    * Handles any user input that has happened since the last call
  //    */
  //   public processInput(): void {
  //     // Move the player
  //     // this.player.move(this.game.canvas);
  //     for (let i = 0; i < this.player.length; i++) {
  //       this.player[i].move(this.game.canvas);
  //     }
  //   }

  //   /**
  //    * Advances the game simulation one step. It may run AI and physics (usually
  //    * in that order). The return value of this method determines what the `GameLoop`
  //    * that is animating this object will do next. If `null` is returned, the
  //    * GameLoop will render this scene and proceeds to the next animation frame.
  //    * If this methods returns a `Scene` (subclass) object, it will NOT render this
  //    * scene but will start considering that object as the current scene to animate.
  //    * In other words, by returning a Scene object, you can set the next scene to
  //    * animate.
  //    *
  //    * @param elapsed the time in ms that has been elapsed since the previous
  //    *   call
  //    * @returns a new `Scene` object if the game should start animating that scene
  //    *   on the next animation frame. If the game should just continue with the
  //    *   current scene, just return `null`
  //    */
  //   public update(elapsed: number): Scene {
  //     this.player.forEach((element) => {
  //       element.increaseGravity();
  //     });
  //     this.platform.forEach((element) => {
  //       // console.log(element);
  //       for (let i = 0; i < this.player.length; i++) {
  //         element.collidesWith(this.player[i]);
  //       }
  //     });

  //     // Player removes objects
  //     for (let i = 0; i < this.player.length; i++) {
  //       this.checksIfHit(this.player[i]);
  //     }

  //     // Create new items if necessary
  //     if (this.countUntilNextItem <= 0) {
  //       const choice = Game.randomNumber(0, 10);

  //       // Reset the timer with a count between 2 and 4 seconds on a
  //       // decent computer
  //       this.countUntilNextItem = Game.randomNumber(120, 240);
  //     }

  //     // Lower the count until the next item with 1
  //     this.countUntilNextItem -= elapsed;

  // // Move to level clear screen
  // if (this.hasWon() && this.player[1].collidesWith(this.door)
  // && this.player[0].collidesWith(this.door)) {
  //   return new LevelUp(this.game);
  // }

  //     // Move to gameover screen
  //     if (this.game.getUser().getScore() < 0) {
  //       return new GameOver(this.game);
  //     }

  //     return null;
  //   }

  //   /**
  //    * Draw the game so the player can see what happened
  //    */
  //   public render(): void {
  //     // Clear the screen
  //     this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
  //     // Show score
  //     const score = `Stars: ${this.game.getUser().getScore()}`;
  //     this.game.writeTextToCanvas(score, 36, 120, 50);

//     this.scoringObjects.forEach((element) => {
//       element.draw(this.game.ctx);
//     });
//     for (let i = 0; i < this.player.length; i++) {
//       this.player[i].draw(this.game.ctx);
//     }
//     for (let i = 0; i < this.platform.length; i++) {
//       this.platform[i].draw(this.game.ctx);
//     }
//     this.door.draw(this.game.ctx, this.player);
//   }
}
