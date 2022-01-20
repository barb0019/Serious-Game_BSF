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
import Shootingbuck from './ShootingBucks.js';
import PressurePlate from './PressurePlate.js';
export default class Level4 extends Level {
    constructor(game) {
        super(game);
        this.objects();
        this.players();
        this.makePlatforms();
        this.speedbubbles(game);
        this.checksIfPressureOnThePlate();
        document.getElementById('canvas').style.backgroundImage = 'url(./assets/img/background/ForestBackground.jpg)';
    }
    speedbubbles(game) {
        this.speedBubble = [];
        this.speedBubble.push(new SpeedBubble(game, 'in-game aankopen zijn niet altijd slecht', 230, 260, 100, 500));
        this.speedBubble.push(new SpeedBubble(game, 'Soms maken ze de game-ervaring leuker', 50, 1150, 100, 500));
        this.speedBubble.push(new SpeedBubble(game, 'Maar let wel op wat je uitgeeft!!', 350, 1250, 100, 500));
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
        this.scoringObjects.push(new VBucks(width * 0.226, height * 0.22, 'blue', -3, this.game));
        this.scoringObjects.push(new FutPack(width * 0.41, height * 0.5, 'blue', -3));
        this.scoringObjects.push(new Shootingbuck(width * 0.358, height * 0.21, 'red', -3, this.game));
        this.scoringObjects.push(new FlyingBuck(width * 0.657, height * 0.155, 'moneymonster', -3, this.game));
        this.scoringObjects.push(new FlyingBuck(width * 0.75, height * 0.2, 'finalboss', -3, this.game));
        this.scoringObjects.push(new FutPack(width * 0.51, height * 0.5, 'red', -3));
        this.scoringObjects.push(new FutPack(width * 0.61, height * 0.5, 'blue', -3));
        this.scoringObjects.push(new Star(width * 0.84, height * 0.15, 'star', 1));
        this.scoringObjects.push(new Star(width * 0.814, height * 0.45, 'star', 1));
        this.scoringObjects.push(new Star(width * 0.227, height * 0.15, 'star', 1));
        const boughtItems = this.game.getBoughtItems();
        for (let i = 0; i < boughtItems.length; i++) {
            if (boughtItems[i] === 2) {
            }
        }
    }
    makePlatforms() {
        const { width } = this.game.canvas;
        const { height } = this.game.canvas;
        this.platform = [];
        this.platform.push(new Platform(width * 0.9115, height * 0.154, width * 0.048, 25, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
        this.platform.push(new Platform(width * 0.130, height * 0.77, width * 0.195, 50, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
        this.platform.push(new Platform(width * 0.350, height * 0.6, width * 0.2, 50, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
        this.platform.push(new Platform(width * 0.39, height * 0.28, width * 0.19, 50, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
        this.platform.push(new Platform(width * 0.75, height * 0.28, width * 0.13, 50, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
        this.platform.push(new Platform(0, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
        this.platform.push(new Platform(width / 4, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
        this.platform.push(new Platform(width / 2, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
        this.platform.push(new Platform(width * 0.75, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
        this.platform.push(new Platform(width * 0.75, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
        this.platform.push(new Platform(width * 0.163, height * 0.28, width * 0.13, 50, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
    }
    checksIfPressureOnThePlate() {
        const { width } = this.game.canvas;
        const { height } = this.game.canvas;
        if (this.player[0].collidesWith(this.pressurePlate[0])
            || this.player[1].collidesWith(this.pressurePlate[0])
            || this.player[0].collidesWith(this.pressurePlate[1])
            || this.player[1].collidesWith(this.pressurePlate[1])) {
            this.platform[9] = (new Platform(width * 0.163, height * 0.50, width * 0.13, 50, Game.loadNewImage('./assets/img/platform/TileMapForest.png')));
        }
        else {
            this.platform.splice(9, 1);
        }
    }
    makePressurePlates() {
        this.pressurePlate = [];
        const { width } = this.game.canvas;
        const { height } = this.game.canvas;
        this.pressurePlate.push(new PressurePlate(width * 0.75, height * 0.90, 'pressure plate'));
        this.pressurePlate.push(new PressurePlate(width * 0.83, height * 0.24, 'pressure plate'));
    }
    allMove() {
        this.scoringObjects[2].move();
        this.scoringObjects[3].moveY();
        this.platform[2].moveX();
    }
}
//# sourceMappingURL=Level4.js.map