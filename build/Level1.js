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
    constructor(game) {
        super(game);
        this.objects();
        this.players();
        this.makePlatforms();
        this.speedbubbles(game);
    }
    speedbubbles(game) {
        this.speedBubble = new SpeedBubble(game, 'hallo', 100, 500, this.player[1], this.player[0]);
    }
    players() {
        this.player = [];
        this.player.push(new PlayerRed(this.game.canvas.width, this.game.canvas.height));
        this.player.push(new PlayerBlue(this.game.canvas.width, this.game.canvas.height));
    }
    objects() {
        this.door = new Door(250, 550, 'DoubleDoor0');
        this.scoringObjects = [];
        this.scoringObjects.push(new VBucks(250, 450, 'blue', -3));
        this.scoringObjects.push(new VBucks(650, 350, 'red', -3));
        this.scoringObjects.push(new FlyingBuck(550, 350, 'flyingbuck', -3));
        this.scoringObjects.push(new VBucks(500, 400, 'moneymonster', -1));
        this.scoringObjects.push(new FutPack(450, 350, 'red', -3));
        this.scoringObjects.push(new FutPack(850, 350, 'blue', -3));
        this.scoringObjects.push(new Star(950, 450, 'star', 1));
        this.scoringObjects.push(new Star(1050, 450, 'star', 1));
        this.scoringObjects.push(new Star(1150, 450, 'star', 1));
    }
    makePlatforms() {
        const { canvas } = this.game;
        this.platform = [];
        this.platform.push(new Platform(250, 250, 200, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(100, 100, 75, 25, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(1000, canvas.height / 1.5, 75, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(1250, canvas.height / 1.5, 100, 100, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(0, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(canvas.width / 4, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(canvas.width / 2, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(canvas.width * 0.75, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    }
}
//# sourceMappingURL=Level1.js.map