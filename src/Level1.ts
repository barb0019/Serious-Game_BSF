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
    this.speedBubble = new SpeedBubble(game, 'hallo', 100, 400, this.player[1], this.player[0],750,300);
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
    this.door = new Door(250, 550, 'DoubleDoor0');
    this.scoringObjects = [];
    this.scoringObjects.push(new VBucks(250, 450, 'blue', -3));
    this.scoringObjects.push(new VBucks(1000, 200, 'red', -3));
    this.scoringObjects.push(new FlyingBuck(550, 350, 'flyingbuck', -3));
    this.scoringObjects.push(new VBucks(500, 400, 'moneymonster', -1));
    // this.scoringObjects.push(new VBucks(950, 200, 'finalboss', -3));
    this.scoringObjects.push(new FutPack(450, 350, 'red', -3));
    // this.scoringObjects.push(new FutPack(850, 350, 'blue', -3));
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
    this.platform.push(new Platform(1500, 130, 75, 25, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(600, 400, 200, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(600, 200, 200, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
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
