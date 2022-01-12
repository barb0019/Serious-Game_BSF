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
    this.speedBubble = new SpeedBubble(game, 'hallo', 100, 550, 300, 100);
  }

  /**
   *
   */
  protected players():void {
    this.player = [];
    this.player.push(new PlayerRed(this.game.canvas.width, this.game.canvas.height, this.game));
    this.player.push(new PlayerBlue(this.game.canvas.width, this.game.canvas.height, this.game));
  }

  /**
   *
   */
  protected objects():void {
    this.door = new Door(1400, 50, 'DoubleDoor0');
    this.scoringObjects = [];
    this.scoringObjects.push(new VBucks(790, 160, 'blue', -3, this.game));
    this.scoringObjects.push(new VBucks(1250, 200, 'red', -3, this.game));
    // this.scoringObjects.push(new FlyingBuck(550, 350, 'flyingbuck', -3, this.game));
    // this.scoringObjects.push(new VBucks(500, 400, 'moneymonster', -1, this.game));
    // this.scoringObjects.push(new VBucks(950, 200, 'finalboss', -3));
    this.scoringObjects.push(new FutPack(400, 280, 'red', -3));
    this.scoringObjects.push(new FutPack(600, 430, 'blue', -3));
    this.scoringObjects.push(new Star(700, 450, 'star', 1));
    this.scoringObjects.push(new Star(280, 300, 'star', 1));
    this.scoringObjects.push(new Star(1150, 200, 'star', 1));
  }

  /**
   * Creates platforms
   */
  public makePlatforms(): void {
    const { canvas } = this.game;
    this.platform = [];
    this.platform.push(new Platform(250, 350, 200, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(1350, 150, 150, 25, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(600, 500, 200, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(650, 200, 200, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(1100, 250, 250, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(1000, canvas.height / 1.5, 75, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(1250, canvas.height / 1.5, 100, 100, Game.loadNewImage('./assets/img/TileMapDesert2.png')));

    // the ground
    this.platform.push(new Platform(0, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(canvas.width / 4, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(canvas.width / 2, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(canvas.width * 0.75, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
  }
}
