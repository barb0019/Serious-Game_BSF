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

export default class Level3 extends Level {
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
  }

  /**
   * makes the speedbubbles
   *
   * @param game the game of the game (legendarische tekst)(*Φ皿Φ*)
   */
  protected speedbubbles(game: Game):void {
    this.speedBubble = [];
    this.speedBubble.push(new SpeedBubble(game, 'Zijn alle in-game aankopen je geld wel waard?', 550, 800, 100, 500));
    this.speedBubble.push(new SpeedBubble(game, 'Games als Fortnite zijn gratis, en toch geven mensen er meer geld aan uit dan een nieuwe game?!', 350, 1100, 100, 500));
    this.speedBubble.push(new SpeedBubble(game, 'Door te gamen leren kinderen 23% effectiever dan boeken te lezen!', 50, 1000, 100, 500));
  }

  /**
   * makes the players
   */
  protected players():void {
    this.player = [];
    this.player.push(new PlayerRed(150, this.game.canvas.height, this.game));
    this.player.push(new PlayerBlue(200, this.game.canvas.height, this.game));
  }

  /**
   * makes the objects
   */
  protected objects():void {
    const { width } = this.game.canvas;
    const { height } = this.game.canvas;
    this.door = new Door(width * 0.91, height * 0.11, 'DoubleDoor0');
    this.scoringObjects = [];
    this.scoringObjects.push(new VBucks(width * 0.88, height * 0.2, 'blue', -3, this.game));
    this.scoringObjects.push(new VBucks(width * 0.463, height * 0.04, 'red', -3, this.game));
    this.scoringObjects.push(new VBucks(width * 0.7, height * 0.36, 'finalboss', -3, this.game));
    // First 'barrier' in the middle
    this.scoringObjects.push(new FutPack(width * 0.7, height * 0.81, 'blue', -3));
    this.scoringObjects.push(new FutPack(width * 0.7, height * 0.71, 'blue', -3));
    this.scoringObjects.push(new FutPack(width * 0.7, height * 0.51, 'red', -3));
    this.scoringObjects.push(new FutPack(width * 0.7, height * 0.61, 'blue', -3));
    // other objects
    this.scoringObjects.push(new VBucks(width * 0.015, height * 0.23, 'red', -3, this.game));
    this.scoringObjects.push(new VBucks(width * 0.873, height * 0.58, 'blue', -3, this.game));
    // Secons 'barrier'in the middle
    this.scoringObjects.push(new FutPack(width * 0.5, height * 0.81, 'red', -3));
    this.scoringObjects.push(new FutPack(width * 0.5, height * 0.71, 'red', -3));
    this.scoringObjects.push(new FutPack(width * 0.5, height * 0.51, 'blue', -3));
    this.scoringObjects.push(new FutPack(width * 0.5, height * 0.61, 'red', -3));
    // Stars
    this.scoringObjects.push(new Star(width * 0.75, height * 0.03, 'star', 1));
    this.scoringObjects.push(new Star(width * 0.875, height * 0.64, 'star', 1));
    this.scoringObjects.push(new Star(width * 0.6, height * 0.75, 'star', 1));

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
    // Left platforms
    this.platform.push(new Platform(0, height * 0.6, 75, height * 0.05, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
    this.platform.push(new Platform(0, height * 0.3, 75, height * 0.05, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
    // Top platforms
    this.platform.push(new Platform(width * 0.15, height * 0.1, width * 0.3, height * 0.05, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
    this.platform.push(new Platform(width * 0.5, height * 0.1, width * 0.2, height * 0.05, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
    this.platform.push(new Platform(width * 0.7, height * 0.1, width * 0.2, height * 0.05, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
    // Middle platforms
    this.platform.push(new Platform(width * 0.81, height * 0.36, width * 0.05, 15, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
    this.platform.push(new Platform(width * 0.45, height * 0.43, width * 0.3, height * 0.05, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
    this.platform.push(new Platform(width * 0.25, height * 0.7, width * 0.075, height * 0.05, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
    this.platform.push(new Platform(width * 0.85, height * 0.7, width * 0.075, 20, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));

    // Door platform
    this.platform.push(new Platform(width * 0.91, height * 0.26, width * 0.06, height * 0.05, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
    // The ground
    this.platform.push(new Platform(0, height - 50, width / 4, height * 0.06, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
    this.platform.push(new Platform(width * 0.25, height - 50, width / 4, height * 0.06, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
    this.platform.push(new Platform(width * 0.5, height - 50, width / 4, height * 0.06, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
    this.platform.push(new Platform(width * 0.75, height - 50, width / 4, height * 0.06, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
  }

  /**
   *makes the obecjcts and platforms move
   */
  public allMove(): void {
    this.scoringObjects[2].move();
  }
}
