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
    this.door = new Door(1400, 10, 'DoubleDoor0');
    this.scoringObjects = [];
    this.scoringObjects.push(new VBucks(347, 110, 'blue', -3, this.game));
    this.scoringObjects.push(new VBucks(700, 400, 'blue', -3, this.game));
    this.scoringObjects.push(new FlyingBuck(550, 150, 'flyingbuck', -3, this.game));
    this.scoringObjects.push(new VBucks(230, 490, 'red', -3, this.game));
    this.scoringObjects.push(new FutPack(450, 450, 'blue', -3));
    this.scoringObjects.push(new FutPack(1150, 300, 'red', -3));
    this.scoringObjects.push(new FlyingBuck(1250, 75, 'moneymonster', -3, this.game));
    this.scoringObjects.push(new Star(350, 600, 'star', 1));
    this.scoringObjects.push(new Star(1250, 340, 'star', 1));
    this.scoringObjects.push(new Star(350, 150, 'star', 1));
    this.scoringObjects.push(new VBucks(275, 600, 'red', -3, this.game));
    this.scoringObjects.push(new FutPack(420, 600, 'red', -3));
  }

  /**
   * Creates platforms
   */
  public makePlatforms(): void {
    const { canvas } = this.game;
    this.platform = [];

    this.platform.push(new Platform(250, 200, 200, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(1400, 110, 75, 25, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    // this.platform.push(new Platform(1000, canvas.height / 1.5, 75, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(200, 530, 300, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(730, 450, 200, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(1150, 380, 200, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(700, 250, 200, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(1150, 150, 200, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));

    console.log('LEVEL2');
    // the ground
    this.platform.push(new Platform(0, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(canvas.width / 4, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(canvas.width / 2, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(canvas.width * 0.75, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
  }
}
