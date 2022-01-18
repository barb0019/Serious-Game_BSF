import Game from './Game.js';
import Platform from './Platform.js';
import VBucks from './VBucks.js';
import PlayerRed from './PlayerRed.js';
import PlayerBlue from './PlayerBlue.js';
import Star from './Star.js';
import Door from './Door.js';
import SpeedBubble from './SpeedBubble.js';
import Level from './Level.js';
export default class Level5 extends Level {
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
        this.door = new Door(width * 0.911, height * 0.018, 'DoubleDoor0');
        this.scoringObjects = [];
        this.scoringObjects.push(new VBucks(width * 0.226, height * 0.528, 'blue', -3, this.game));
        this.scoringObjects.push(new VBucks(width * 0.326, height * 0.71, 'red', -3, this.game));
        this.scoringObjects.push(new VBucks(width * 0.426, height * 0.528, 'blue', -3, this.game));
        this.scoringObjects.push(new VBucks(width * 0.526, height * 0.70, 'red', -3, this.game));
        this.scoringObjects.push(new VBucks(width * 0.626, height * 0.528, 'blue', -3, this.game));
        this.scoringObjects.push(new VBucks(width * 0.726, height * 0.71, 'red', -3, this.game));
        this.scoringObjects.push(new Star(width * 0.84, height * 0.15, 'star', 1));
        this.scoringObjects.push(new Star(width * 0.814, height * 0.45, 'star', 1));
        this.scoringObjects.push(new Star(width * 0.227, height * 0.15, 'star', 1));
    }
    makePlatforms() {
        const { width } = this.game.canvas;
        const { height } = this.game.canvas;
        console.log(height);
        this.platform = [];
        this.platform.push(new Platform(width * 0.130, height * 0.77, width * 0.295, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.425, height * 0.77, width * 0.295, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.720, height * 0.77, width * 0.25, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        console.log('LEVEL2');
        this.platform.push(new Platform(0, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width / 4, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width / 2, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.75, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    }
    allMove() {
        this.scoringObjects[0].moveY();
        this.scoringObjects[1].moveY2();
        this.scoringObjects[2].moveY();
        this.scoringObjects[3].moveY2();
        this.scoringObjects[4].moveY();
        this.scoringObjects[5].moveY2();
    }
}
//# sourceMappingURL=Level5.js.map