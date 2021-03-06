import Game from './Game.js';
import Platform from './Platform.js';
import VBucks from './VBucks.js';
import PlayerRed from './PlayerRed.js';
import PlayerBlue from './PlayerBlue.js';
import FutPack from './FutPack.js';
import Star from './Star.js';
import Door from './Door.js';
import FlyingBuck from './FlyingBuck.js';
import SpeedsBubble from './SpeedsBubble.js';
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
    this.speedsbubbles(game);
  }

  /**
   * makes the speedbubbles
   *
   * @param game the game of the game
   */
  protected speedsbubbles(game: Game): void {
    this.speedBubble = [];
    this.speedBubble.push(new SpeedsBubble(game, 'Voegen skins wel iets toe aan je game-ervaring?', this.game.canvas.height * 0.66, this.game.canvas.width * 0.17, 100, 500, 'blue'));
    this.speedBubble.push(new SpeedsBubble(game, 'DLCs met extra game-content stellen meestal teleur', this.game.canvas.height * 0.25, this.game.canvas.width * 0.72, 100, 500, 'blue'));
    this.speedBubble.push(new SpeedsBubble(game, 'Pas op voor de vliegende V-Bucks!', this.game.canvas.height * 0.02, this.game.canvas.width * 0.17, 100, 500, 'blue'));
  }

  /**
   * Creates the players
   */
  protected players(): void {
    this.player = [];
    this.player.push(new PlayerRed(150, this.game.canvas.height, this.game));
    this.player.push(new PlayerBlue(200, this.game.canvas.height, this.game));
  }

  /**
   * makes the objects in the game
   */
  protected objects(): void {
    const { width } = this.game.canvas;
    const { height } = this.game.canvas;
    this.door = new Door(width * 0.911, height * 0.018, 'DoubleDoor0');
    this.scoringObjects = [];
    // creates the objects
    this.scoringObjects.push(new VBucks(width * 0.226, height * 0.13, 'blue', -3, this.game));
    this.scoringObjects.push(new VBucks(width * 0.456, height * 0.55, 'blue', -3, this.game));
    this.scoringObjects.push(new FlyingBuck(width * 0.358, height * 0.2, 'FlyingBuckBlack', -3, this.game));
    this.scoringObjects.push(new VBucks(width * 0.15, height * 0.65, 'red', -3, this.game));
    this.scoringObjects.push(new FutPack(width * 0.2902, height * 0.6, 'blue', -3));
    this.scoringObjects.push(new FutPack(width * 0.749, height * 0.4, 'red', -3));
    this.scoringObjects.push(new FlyingBuck(width * 0.657, height * 0.77, 'moneymonster', -3, this.game));
    // creates the stars
    this.scoringObjects.push(new Star(width * 0.227, height * 0.8, 'star', 1));
    this.scoringObjects.push(new Star(width * 0.814, height * 0.45, 'star', 1));
    this.scoringObjects.push(new Star(width * 0.227, height * 0.22, 'star', 1));
    this.scoringObjects.push(new VBucks(width * 0.179, height * 0.8, 'red', -3, this.game));
    this.scoringObjects.push(new FutPack(width * 0.273, height * 0.8, 'red', -3));
    // create more enemies if you bought the wrong product in the shop
    const boughtItems = this.game.getBoughtItems();
    for (let i = 0; i < boughtItems.length; i++) {
      if (boughtItems[i] === 2) {
        this.scoringObjects.push(new VBucks(width * 0.81, height * 0.13, 'blue', -3, this.game));
        this.scoringObjects.push(new VBucks(width * 0.885, height * 0.22, 'red', -3, this.game));
        this.scoringObjects.push(new FutPack(width * 0.48, height * 0.09, 'red', -3));
      }
    }
  }

  /**
   * Creates platforms
   */
  public makePlatforms(): void {
    const { width } = this.game.canvas;
    const { height } = this.game.canvas;

    this.platform = [];

    // creates the top left platform
    this.platform.push(new Platform(width * 0.163, height * 0.28, width * 0.13, 50, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
    // creates the platform the door is standing on
    this.platform.push(new Platform(width * 0.9115, height * 0.154, width * 0.048, 25, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
    // creates the bottom left platform
    this.platform.push(new Platform(width * 0.130, height * 0.7, width * 0.195, 50, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
    // creates the bottom middle platform
    this.platform.push(new Platform(width * 0.400, height * 0.6, width * 0.2, 50, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
    // creates the top middle platfrom
    this.platform.push(new Platform(width * 0.39, height * 0.33, width * 0.19, 50, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
    // creates to top right platform
    this.platform.push(new Platform(width * 0.75, height * 0.2, width * 0.13, 50, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
    // creates the bottom right platform
    this.platform.push(new Platform(width * 0.75, height * 0.5, width * 0.13, 50, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
    // the ground
    this.platform.push(new Platform(0, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
    this.platform.push(new Platform(width / 4, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
    this.platform.push(new Platform(width / 2, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
    this.platform.push(new Platform(width * 0.75, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
  }

  /**
   * makes all of the platforms and object move
   */
  allMove(): void {
    this.scoringObjects[2].move();
  }
}
