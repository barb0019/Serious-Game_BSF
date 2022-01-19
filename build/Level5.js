import Game from './Game.js';
import Platform from './Platform.js';
import VBucks from './VBucks.js';
import PlayerRed from './PlayerRed.js';
import PlayerBlue from './PlayerBlue.js';
import Star from './Star.js';
import Door from './Door.js';
import FlyingBuck from './FlyingBuck.js';
import SpeedBubble from './SpeedBubble.js';
import Level from './Level.js';
import Shootingbuck from './ShootingBucks.js';
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
        this.scoringObjects.push(new VBucks(width * 0.226, height * 0.48, 'black', -3, this.game));
        this.scoringObjects.push(new VBucks(width * 0.326, height * 0.72, 'black', -3, this.game));
        this.scoringObjects.push(new VBucks(width * 0.426, height * 0.47, 'black', -3, this.game));
        this.scoringObjects.push(new VBucks(width * 0.526, height * 0.72, 'black', -3, this.game));
        this.scoringObjects.push(new VBucks(width * 0.626, height * 0.47, 'black', -3, this.game));
        this.scoringObjects.push(new VBucks(width * 0.726, height * 0.72, 'black', -3, this.game));
        this.scoringObjects.push(new FlyingBuck(width * 0.16, height * 0.36, 'finalbossright', -3, this.game));
        this.scoringObjects.push(new Shootingbuck(width * 0.358, height * 0.3, 'red', -3, this.game));
        this.scoringObjects.push(new Shootingbuck(width * 0.258, height * 0.3, 'blue', -3, this.game));
        this.scoringObjects.push(new Star(width * 0.84, height * 0.1, 'star', 1));
        this.scoringObjects.push(new Star(width * 0.814, height * 0.45, 'star', 1));
        this.scoringObjects.push(new Star(width * 0.05, height * 0.39, 'star', 1));
    }
    makePlatforms() {
        const { width } = this.game.canvas;
        const { height } = this.game.canvas;
        this.platform = [];
        this.platform.push(new Platform(width * 0.130, height * 0.77, width * 0.295, 40, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.425, height * 0.77, width * 0.295, 40, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.720, height * 0.77, width * 0.25, 40, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.8, height * 0.5, width * 0.13, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.20, height * 0.44, width * 0.19, 25, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.035, height * 0.44, width * 0.16, 25, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.275, height * 0.15, width * 0.33, 25, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.550, height * 0.15, width * 0.33, 25, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(0, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width / 4, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width / 2, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.75, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    }
    checksIfPressureOnthePlate() {
        const { width } = this.game.canvas;
        const { height } = this.game.canvas;
        if (this.player[0].collidesWith(this.pressurePlate[0])
            || this.player[1].collidesWith(this.pressurePlate[0])) {
            this.platform.splice(11, 1);
        }
        else {
            this.platform[12] = (new Platform(width * 0.1, height * 0.80, width / 8, 100, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
            console.log(this.platform.length);
        }
    }
    allMove() {
        this.scoringObjects[0].moveY();
        this.scoringObjects[1].moveY2();
        this.scoringObjects[2].moveY();
        this.scoringObjects[3].moveY2();
        this.scoringObjects[4].moveY();
        this.scoringObjects[5].moveY2();
        this.platform[4].moveX2();
        this.scoringObjects[7].move1();
        this.scoringObjects[8].move2();
    }
}
//# sourceMappingURL=Level5.js.map