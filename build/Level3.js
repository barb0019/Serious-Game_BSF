import Game from './Game.js';
import Platform from './Platform.js';
import VBucks from './VBucks.js';
import PlayerRed from './PlayerRed.js';
import PlayerBlue from './playerblue.js';
import FutPack from './FutPack.js';
import Star from './Star.js';
import Door from './Door.js';
import SpeedBubble from './SpeedBubble.js';
import Level from './Level.js';
export default class Level3 extends Level {
    constructor(game) {
        super(game);
        this.objects();
        this.players();
        this.makePlatforms();
        this.speedbubbles(game);
    }
    speedbubbles(game) {
        this.speedBubble = [];
        this.speedBubble.push(new SpeedBubble(game, 'hallo', 100, 550, 300, 100));
        this.speedBubble.push(new SpeedBubble(game, 'Alleen de blauwe speler kan blauw aanraken', 350, 770, 300, 100));
        this.speedBubble.push(new SpeedBubble(game, 'Alleen de rode speler kan rood aanraken', 350, 1100, 300, 100));
    }
    players() {
        this.player = [];
        this.player.push(new PlayerRed(150, this.game.canvas.height, this.game));
        this.player.push(new PlayerBlue(200, this.game.canvas.height, this.game));
    }
    objects() {
        this.door = new Door(1400, 100, 'DoubleDoor0');
        const { width } = this.game.canvas;
        const { height } = this.game.canvas;
        this.scoringObjects = [];
        this.scoringObjects.push(new VBucks(width * 0.88, height * 0.2, 'blue', -3, this.game));
        this.scoringObjects.push(new VBucks(width * 0.463, height * 0.04, 'red', -3, this.game));
        this.scoringObjects.push(new VBucks(width * 0.7, height * 0.4, 'finalboss', -3, this.game));
        this.scoringObjects.push(new FutPack(width * 0.7, height * 0.85, 'red', -3));
        this.scoringObjects.push(new FutPack(width * 0.7, height * 0.75, 'blue', -3));
        this.scoringObjects.push(new FutPack(width * 0.7, height * 0.55, 'red', -3));
        this.scoringObjects.push(new FutPack(width * 0.7, height * 0.65, 'blue', -3));
        this.scoringObjects.push(new FutPack(width * 0.5, height * 0.85, 'blue', -3));
        this.scoringObjects.push(new FutPack(width * 0.5, height * 0.75, 'red', -3));
        this.scoringObjects.push(new FutPack(width * 0.5, height * 0.55, 'blue', -3));
        this.scoringObjects.push(new FutPack(width * 0.5, height * 0.65, 'red', -3));
        this.scoringObjects.push(new Star(0, height * 0.01, 'star', 1));
        this.scoringObjects.push(new Star(width * 0.725, height * 0.4, 'star', 1));
        this.scoringObjects.push(new Star(width * 0.6, height * 0.75, 'star', 1));
    }
    makePlatforms() {
        const { width } = this.game.canvas;
        const { height } = this.game.canvas;
        this.platform = [];
        this.platform.push(new Platform(0, height * 0.6, 75, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(0, height * 0.3, 75, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.15, height * 0.1, width * 0.3, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.5, height * 0.1, width * 0.2, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.7, height * 0.1, width * 0.2, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.81, height * 0.36, width * 0.05, 15, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.45, height * 0.47, width * 0.3, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.25, height * 0.6, width * 0.075, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.85, height * 0.7, width * 0.075, 20, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(1400, 200, 76, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(0, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width / 4, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width / 2, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.75, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    }
}
//# sourceMappingURL=Level3.js.map