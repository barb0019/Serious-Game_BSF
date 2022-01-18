import Game from './Game.js';
import Platform from './Platform.js';
import VBucks from './VBucks.js';
import PlayerRed from './PlayerRed.js';
import PlayerBlue from './PlayerBlue.js';
import FutPack from './FutPack.js';
import Star from './Star.js';
import Door from './Door.js';
import FlyingBuck from './FlyingBuck.js';
import SpeedBubble from './SpeedBubble.js';
import Level from './Level.js';
import Shootingbuck from './ShootingBucks.js';

export default class Level5 extends Level {
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
    this.speedBubble.push(new SpeedBubble(game, 'dit is een vliegende vbuck pas dus op', 120, 600, 100, 500));
  }

  /**
   *
   */
  protected players(): void {
    this.player = [];
    // Create player
    this.player.push(new PlayerRed(150, this.game.canvas.height, this.game));
    this.player.push(new PlayerBlue(200, this.game.canvas.height, this.game));
  }

  /**
   *
   */
  protected objects(): void {
    const { width } = this.game.canvas;
    const { height } = this.game.canvas;
    this.door = new Door(width * 0.911, height * 0.018, 'DoubleDoor0');
    this.scoringObjects = [];
    this.scoringObjects.push(new VBucks(width * 0.226, height * 0.52, 'blue', -3, this.game));
    this.scoringObjects.push(new VBucks(width * 0.326, height * 0.52, 'red', -3, this.game));
    this.scoringObjects.push(new VBucks(width * 0.426, height * 0.52, 'blue', -3, this.game));
    this.scoringObjects.push(new VBucks(width * 0.526, height * 0.52, 'red', -3, this.game));
    this.scoringObjects.push(new VBucks(width * 0.626, height * 0.52, 'blue', -3, this.game));
    this.scoringObjects.push(new VBucks(width * 0.726, height * 0.52, 'red', -3, this.game));
    // this.scoringObjects.push(new FutPack(width * 0.41, height * 0.5, 'blue', -3));
    // this.scoringObjects.push(new Shootingbuck(width * 0.358, height * 0.21, 'red', -3, this.game));
    // this.scoringObjects.push(new FlyingBuck(width * 0.657, height * 0.155, 'moneymonster', -3, this.game));
    // this.scoringObjects.push(new FlyingBuck(width * 0.75, height * 0.2, 'finalboss', -3, this.game));
    // this.scoringObjects.push(new FutPack(width * 0.51, height * 0.5, 'red', -3));
    // this.scoringObjects.push(new FutPack(width * 0.61, height * 0.5, 'blue', -3));
    // // this.scoringObjects.push(new VBucks(width * 0.15, height * 0.65, 'red', -3, this.game));
    // // this.scoringObjects.push(new FutPack(width * 0.2902, height * 0.6, 'blue', -3));
    // // this.scoringObjects.push(new FutPack(width * 0.749, height * 0.4, 'red', -3));
    this.scoringObjects.push(new Star(width * 0.84, height * 0.15, 'star', 1));
    this.scoringObjects.push(new Star(width * 0.814, height * 0.45, 'star', 1));
    this.scoringObjects.push(new Star(width * 0.227, height * 0.15, 'star', 1));
    // this.scoringObjects.push(new VBucks(width * 0.179, height * 0.8, 'red', -3, this.game));
    // this.scoringObjects.push(new FutPack(width * 0.273, height * 0.8, 'red', -3));
  }

  /**
   * Creates platforms
   */
  public makePlatforms(): void {
    const { width } = this.game.canvas;
    const { height } = this.game.canvas;
    console.log(height);

    this.platform = [];

    // this.platform.push(new Platform(width * 0.163, height * 0.28, width * 0.13, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    // this.platform.push(new Platform(width * 0.9115, height * 0.154, width * 0.048, 25, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(width * 0.130, height * 0.77, width * 0.295, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(width * 0.425, height * 0.77, width * 0.295, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(width * 0.720, height * 0.77, width * 0.25, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    // this.platform.push(new Platform(width * 0.350, height * 0.6, width * 0.2, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    // // this.platform.push(new Platform(width * 0.75, height * 0.5, width * 0.13, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    // this.platform.push(new Platform(width * 0.39, height * 0.28, width * 0.19, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    // this.platform.push(new Platform(width * 0.75, height * 0.28, width * 0.13, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));

    console.log('LEVEL2');
    // the ground
    this.platform.push(new Platform(0, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(width / 4, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(width / 2, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(width * 0.75, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
  }

  public allMove(): void {
    // this.scoringObjects[2].move();
    this.scoringObjects[0].moveY();
    this.scoringObjects[1].moveY();
    this.scoringObjects[2].moveY();
    this.scoringObjects[3].moveY();
    // this.platform[3].moveX();
    // this.platform[0].moveY();
    // this.platform[5].moveY();
    // this.scoringObjects[1].move();
  }
}
