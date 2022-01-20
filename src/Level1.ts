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
import PressurePlate from './PressurePlate.js';

export default class Level1 extends Level {
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
  }

  /**
   * makes the speedbubbles
   *
   * @param game the game of the game (legendarische tekst)(*Φ皿Φ*)
   */
  protected speedbubbles(game: Game): void {
    this.speedBubble = [];
    this.speedBubble.push(new SpeedBubble(game, 'kinderen geven soms €200 uit aan skins op fortnite', 75, 1000, 300, 100));
    this.speedBubble.push(new SpeedBubble(game, '40% van de kinderen speelt fortnite voor meer dan 6 uur ', 300, 900, 300, 100));
    this.speedBubble.push(new SpeedBubble(game, '40% van de kinderen geeft geld uit aan skins, lootboxes en andere dingen', 500, 200, 300, 100));
  }

  /**
   * makes the players
   */
  protected players(): void {
    this.player = [];
    this.player.push(new PlayerRed(150, this.game.canvas.height, this.game));
    this.player.push(new PlayerBlue(200, this.game.canvas.height, this.game));
  }

  /**
   * make objects in the game
   */
  protected objects(): void {
    const { width } = this.game.canvas;
    const { height } = this.game.canvas;

    // makes the door
    this.door = new Door(width * 0.91, 50, 'DoubleDoor0');
    this.scoringObjects = [];
    // makes the objects
    this.scoringObjects.push(new VBucks(width * 0.5, height * 0.16, 'blue', -3, this.game));
    this.scoringObjects.push(new VBucks(width * 0.78, height * 0.26, 'red', -3, this.game));
    this.scoringObjects.push(new FutPack(width * 0.19, height * 0.37, 'red', -3));
    this.scoringObjects.push(new FutPack(width * 0.39, height * 0.51, 'blue', -3));
    // makes the stars
    this.scoringObjects.push(new Star(width * 0.45, height * 0.53, 'star', 1));
    this.scoringObjects.push(new Star(width * 0.12, height * 0.39, 'star', 1));
    this.scoringObjects.push(new Star(width * 0.75, height * 0.26, 'star', 1));

    const boughtItems = this.game.getBoughtItems();
    for (let i = 0; i < boughtItems.length; i++) {
      if (boughtItems[i] === 2) {
        // enemies here
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
    // makes the most left platform
    this.platform.push(new Platform(width * 0.1, height * 0.46, width * 0.13, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    // makes the platform the door is on
    this.platform.push(new Platform(width * 0.87, height * 0.19, width * 0.1, 25, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    // makes the bottom left platform
    this.platform.push(new Platform(width * 0.36, height * 0.59, width * 0.13, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    // creates the top middle platform
    this.platform.push(new Platform(width * 0.4, height * 0.27, width * 0.13, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    // makes the middle right platform before to door
    this.platform.push(new Platform(width * 0.71, height * 0.37, width * 0.16, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    // makes the bottom rifht platform
    this.platform.push(new Platform(width * 0.65, height / 1.5, width * 0.05, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    // the ground
    this.platform.push(new Platform(0, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(width * 0.25, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(width * 0.5, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    this.platform.push(new Platform(width * 0.75, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
  }

  /**
   * makes the objects and platforms move
   */
  // eslint-disable-next-line class-methods-use-this
  public allMove(): void {}
}
