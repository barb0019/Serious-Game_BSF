import Game from './Game.js';
import Platform from './Platform.js';
import VBucks from './VBucks.js';
import PlayerRed from './PlayerRed.js';
import PlayerBlue from './PlayerBlue.js';
import FutPack from './FutPack.js';
import Star from './Star.js';
import Door from './Door.js';
import SpeedBubble from './SpeedBubble.js';
import Level from './Level.js';

export default class Level1 extends Level {

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
  }

  /**
   * makes the speedbubbles
   *
   * @param game the game of the game (legendarische tekst)(*Φ皿Φ*)
   */
  protected speedbubbles(game: Game):void {
    this.speedBubble = [];
    this.speedBubble.push(new SpeedBubble(game, 'hallo', 100, 550, 300, 100));
    this.speedBubble.push(new SpeedBubble(game, 'Alleen de blauwe speler kan blauw aanraken', 350, 770, 300, 100));
    this.speedBubble.push(new SpeedBubble(game, 'Alleen de rode speler kan rood aanraken', 350, 1100, 300, 100));
  }

  /**
   *
   */
  protected players():void {
    this.player = [];
    this.player.push(new PlayerRed(150, this.game.canvas.height, this.game));
    this.player.push(new PlayerBlue(200, this.game.canvas.height, this.game));
  }

  /**
   *
   */
  protected objects():void {
    const { width } = this.game.canvas;
    const { height } = this.game.canvas;
    console.log(width);
    console.log(height);
    this.door = new Door(width * 0.91, 50, 'DoubleDoor0');
    this.scoringObjects = [];
    this.scoringObjects.push(new VBucks(width * 0.5, height * 0.16, 'blue', -3, this.game));
    this.scoringObjects.push(new VBucks(width * 0.78, height * 0.26, 'red', -3, this.game));
    // this.scoringObjects.push(new FlyingBuck(550, 350, 'flyingbuck', -3, this.game));
    // this.scoringObjects.push(new VBucks(500, 400, 'moneymonster', -1, this.game));
    // this.scoringObjects.push(new VBucks(950, 200, 'finalboss', -3));
    this.scoringObjects.push(new FutPack(width * 0.19, height * 0.37, 'red', -3));
    this.scoringObjects.push(new FutPack(width * 0.39, height * 0.51, 'blue', -3));
    this.scoringObjects.push(new Star(width * 0.45, height * 0.53, 'star', 1));
    this.scoringObjects.push(new Star(width * 0.12, height * 0.39, 'star', 1));
    this.scoringObjects.push(new Star(width * 0.75, height * 0.26, 'star', 1));
  }

  /**
   * Creates platforms
   */
  public makePlatforms(): void {
    const { width } = this.game.canvas;
    const { height } = this.game.canvas;
    this.platform = [];
    this.platform.push(new Platform(width * 0.1, height * 0.46, width * 0.13, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(width * 0.87, height * 0.19, width * 0.1, 25, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(width * 0.36, height * 0.59, width * 0.13, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(width * 0.4, height * 0.22, width * 0.13, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(width * 0.71, height * 0.33, width * 0.16, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(width * 0.65, height / 1.5, width * 0.05, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(width * 0.81, height / 1.5, width * 0.065, 100, Game.loadNewImage('./assets/img/TileMapDesert2.png')));

    // the ground
    this.platform.push(new Platform(0, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(width * 0.25, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(width * 0.5, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(width * 0.75, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
  }
}
