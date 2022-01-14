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
export default class Level2 extends Level {
    constructor(game) {
        super(game);
        this.objects();
        this.players();
        this.makePlatforms();
        this.speedbubbles(game);
    }
    speedbubbles(game) {
        this.speedBubble = [];
        this.speedBubble.push(new SpeedBubble(game, 'dit is een vliegende vbuck pas dus op', 120, 600, 100, 500));
    }
    players() {
        this.player = [];
        this.player.push(new PlayerRed(150, this.game.canvas.height, this.game));
        this.player.push(new PlayerBlue(200, this.game.canvas.height, this.game));
    }
    objects() {
        const { width } = this.game.canvas;
        const { height } = this.game.canvas;
        this.door = new Door(1400, 10, 'DoubleDoor0');
        this.scoringObjects = [];
        this.scoringObjects.push(new VBucks(width * 0.226, 110, 'blue', -3, this.game));
        this.scoringObjects.push(new VBucks(width * 0.456, 400, 'blue', -3, this.game));
        this.scoringObjects.push(new FlyingBuck(width * 0.358, 150, 'flyingbuck', -3, this.game));
        this.scoringObjects.push(new VBucks(width * 0.15, 490, 'red', -3, this.game));
        this.scoringObjects.push(new FutPack(width * 0.292, 450, 'blue', -3));
        this.scoringObjects.push(new FutPack(width * 0.749, 300, 'red', -3));
        this.scoringObjects.push(new FlyingBuck(width * 0.657, 580, 'moneymonster', -3, this.game));
        this.scoringObjects.push(new Star(width * 0.227, 600, 'star', 1));
        this.scoringObjects.push(new Star(width * 0.814, 340, 'star', 1));
        this.scoringObjects.push(new Star(width * 0.227, 150, 'star', 1));
        this.scoringObjects.push(new VBucks(width * 0.179, 600, 'red', -3, this.game));
        this.scoringObjects.push(new FutPack(width * 0.273, 600, 'red', -3));
    }
    makePlatforms() {
        const { width } = this.game.canvas;
        const { height } = this.game.canvas;
        this.platform = [];
        this.platform.push(new Platform(width * 0.163, 200, 200, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.9115, 110, 75, 25, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.130, 530, 300, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.475, 450, 200, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.75, 380, 200, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.39, 250, 300, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.75, 150, 200, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        console.log('LEVEL2');
        this.platform.push(new Platform(0, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width / 4, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width / 2, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.75, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    }
}
//# sourceMappingURL=Level2.js.map