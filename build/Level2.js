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
    constructor(game) {
        super(game);
        this.objects();
        this.players();
        this.makePlatforms();
        this.speedbubbles(game);
    }
    speedbubbles(game) {
        this.speedBubble = [];
        this.speedBubble.push(new SpeedBubble(game, 'hallo', 100, 500, 100, 50));
    }
    players() {
        this.player = [];
        this.player.push(new PlayerRed(150, this.game.canvas.height, this.game));
        this.player.push(new PlayerBlue(200, this.game.canvas.height, this.game));
    }
    objects() {
        this.door = new Door(1400, 10, 'DoubleDoor0');
        this.scoringObjects = [];
        this.scoringObjects.push(new VBucks(347, 110, 'blue', -3, this.game));
        this.scoringObjects.push(new VBucks(650, 350, 'red', -3, this.game));
        this.scoringObjects.push(new FlyingBuck(550, 150, 'flyingbuck', -3, this.game));
        this.scoringObjects.push(new VBucks(250, 280, 'red', -3, this.game));
        this.scoringObjects.push(new FutPack(450, 350, 'red', -3));
        this.scoringObjects.push(new FutPack(1150, 350, 'blue', -3));
        this.scoringObjects.push(new Star(350, 600, 'star', 1));
        this.scoringObjects.push(new Star(1250, 340, 'star', 1));
        this.scoringObjects.push(new Star(350, 150, 'star', 1));
        this.scoringObjects.push(new VBucks(275, 600, 'red', -3, this.game));
        this.scoringObjects.push(new FutPack(420, 600, 'red', -3));
    }
    makePlatforms() {
        const { canvas } = this.game;
        this.platform = [];
        this.platform.push(new Platform(250, 200, 200, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(1400, 110, 75, 25, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(200, 530, 300, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(710, 450, 200, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(1150, 380, 200, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(700, 250, 200, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(1150, 150, 200, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        console.log('LEVEL2');
        this.platform.push(new Platform(0, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(canvas.width / 4, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(canvas.width / 2, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(canvas.width * 0.75, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    }
}
//# sourceMappingURL=Level2.js.map