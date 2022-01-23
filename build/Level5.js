import Game from './Game.js';
import Platform from './Platform.js';
import VBucks from './VBucks.js';
import PlayerRed from './PlayerRed.js';
import PlayerBlue from './PlayerBlue.js';
import Star from './Star.js';
import Door from './Door.js';
import FlyingBuck from './FlyingBuck.js';
import SpeedsBubble from './SpeedsBubble.js';
import Level from './Level.js';
import Shootingbuck from './ShootingBucks.js';
import PressurePlate from './PressurePlate.js';
export default class Level5 extends Level {
    constructor(game) {
        super(game);
        this.objects();
        this.players();
        this.makePlatforms();
        this.speedsbubbles(game);
        document.getElementById('canvas').style.backgroundImage = 'url(./assets/img/background/ForestBackground.jpg)';
    }
    speedsbubbles(game) {
        this.speedBubble = [];
        this.speedBubble.push(new SpeedsBubble(game, 'In veel landen zijn het kopen van lootboxen verboden', this.game.canvas.height * 0.55, this.game.canvas.width * 0.05, 100, 500, 'white'));
        this.speedBubble.push(new SpeedsBubble(game, 'Van lootboxen krijg je vaak niets nuttigs', this.game.canvas.height * 0.01, this.game.canvas.width * 0.6, 100, 500, 'white'));
        this.speedBubble.push(new SpeedsBubble(game, 'van teveel in-game aankopen kan je in geld problemen komen', this.game.canvas.height * 0.28, this.game.canvas.width * 0.75, 100, 500, 'white'));
    }
    players() {
        this.player = [];
        this.player.push(new PlayerRed(150, this.game.canvas.height, this.game));
        this.player.push(new PlayerBlue(200, this.game.canvas.height, this.game));
    }
    objects() {
        const { width } = this.game.canvas;
        const { height } = this.game.canvas;
        this.door = new Door(width * 0.911, height * 0.013, 'DoubleDoor0');
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
        this.scoringObjects.push(new VBucks(width * 0.07, height * 0.39, 'black', -3, this.game));
        this.scoringObjects.push(new VBucks(width * 0.07, height * 0.29, 'black', -3, this.game));
        this.scoringObjects.push(new VBucks(width * 0.07, height * 0.19, 'black', -3, this.game));
        this.scoringObjects.push(new Star(width * 0.84, height * 0.1, 'star', 1));
        this.scoringObjects.push(new Star(width * 0.814, height * 0.45, 'star', 1));
        this.scoringObjects.push(new Star(width * 0.04, height * 0.39, 'star', 1));
        const boughtItems = this.game.getBoughtItems();
        for (let i = 0; i < boughtItems.length; i++) {
            if (boughtItems[i] === 2) {
                this.scoringObjects.push(new VBucks(width * 0.275, height * 0.48, 'red', -3, this.game));
                this.scoringObjects.push(new VBucks(width * 0.475, height * 0.72, 'red', -3, this.game));
                this.scoringObjects.push(new VBucks(width * 0.675, height * 0.48, 'red', -3, this.game));
                this.scoringObjects.push(new VBucks(width * 0.375, height * 0.72, 'blue', -3, this.game));
                this.scoringObjects.push(new VBucks(width * 0.575, height * 0.48, 'blue', -3, this.game));
                this.scoringObjects.push(new VBucks(width * 0.775, height * 0.72, 'blue', -3, this.game));
                this.scoringObjects.push(new VBucks(width * 0.975, height * 0.05, 'black', -3, this.game));
            }
        }
    }
    makePlatforms() {
        const { width } = this.game.canvas;
        const { height } = this.game.canvas;
        this.platform = [];
        this.platform.push(new Platform(width * 0.130, height * 0.77, width * 0.295, 40, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
        this.platform.push(new Platform(width * 0.425, height * 0.77, width * 0.295, 40, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
        this.platform.push(new Platform(width * 0.720, height * 0.77, width * 0.3, 40, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
        this.platform.push(new Platform(width * 0.8, height * 0.5, width * 0.13, 50, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
        this.platform.push(new Platform(width * 0.20, height * 0.44, width * 0.19, 25, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
        this.platform.push(new Platform(width * 0.035, height * 0.44, width * 0.16, 25, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
        this.platform.push(new Platform(width * 0.60, height * 0.15, width * 0.33, 25, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
        this.platform.push(new Platform(width * 0.850, height * 0.15, width * 0.2, 25, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
        this.platform.push(new Platform(0, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
        this.platform.push(new Platform(width / 4, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
        this.platform.push(new Platform(width / 2, height - 150, width / 8, 500, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
        this.platform.push(new Platform(width * 1.5, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
    }
    checksIfPressureOnThePlate() {
        const { width } = this.game.canvas;
        const { height } = this.game.canvas;
        if (this.player[0].collidesWith(this.pressurePlate[0])
            || this.player[1].collidesWith(this.pressurePlate[0])
            || this.player[0].collidesWith(this.pressurePlate[1])
            || this.player[1].collidesWith(this.pressurePlate[1])) {
            this.platform[11] = (new Platform(width * 0.275, height * 0.15, width * 0.33, 25, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
        }
        else {
            this.platform.splice(12, 1);
        }
        if (this.player[0].collidesWith(this.pressurePlate[2])
            || this.player[1].collidesWith(this.pressurePlate[2])
            || this.player[0].collidesWith(this.pressurePlate[3])
            || this.player[1].collidesWith(this.pressurePlate[3])) {
            this.platform.splice(12, 1);
        }
        else {
            this.platform[12] = (new Platform(width * 0.014, height * 0.15, width * 0.05, 25, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
        }
    }
    makePressurePlates() {
        this.pressurePlate = [];
        const { width } = this.game.canvas;
        const { height } = this.game.canvas;
        this.pressurePlate.push(new PressurePlate(width * 0.88, height * 0.46, 'pressure plate'));
        this.pressurePlate.push(new PressurePlate(width * 0.77, height * 0.11, 'pressure plate'));
        this.pressurePlate.push(new PressurePlate(width * 0.11, height * 0.40, 'pressure plate'));
        this.pressurePlate.push(new PressurePlate(width * 0.30, height * 0.885, 'pressure plate'));
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