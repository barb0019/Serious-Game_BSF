import Game from './Game.js';
import Platform from './Platform.js';
import VBucks from './VBucks.js';
import PlayerRed from './PlayerRed.js';
import PlayerBlue from './PlayerBlue.js';
import FutPack from './FutPack.js';
import Star from './Star.js';
import Door from './Door.js';
import SpeedsBubble from './SpeedsBubble.js';
import Level from './Level.js';
export default class Level1 extends Level {
    constructor(game) {
        super(game);
        this.makePressurePlates();
        this.objects();
        this.players();
        this.makePlatforms();
        this.speedsbubbles(game);
        document.getElementById('canvas').style.backgroundImage = 'url(./assets/img/background/Desert-BackgroundStart.png)';
    }
    speedsbubbles(game) {
        this.speedBubble = [];
        this.speedBubble.push(new SpeedsBubble(game, 'Wist je dat 10-12 jarigen elk jaar gemiddeld €200 uitgeven aan in-game aankopen?', this.game.canvas.height * 0.2, this.game.canvas.width * 0.13, 100, 500, 'blue'));
        this.speedBubble.push(new SpeedsBubble(game, 'Wist je dat bijna de helft van alle fortnite spelers meer dan 6 uur achter elkaar speelt?', this.game.canvas.height * 0.11, this.game.canvas.width * 0.6, 300, 100, 'blue'));
        this.speedBubble.push(new SpeedsBubble(game, 'Wist je dat, van alle gamers, kinderen het vaakst in-game aankopen doen?', this.game.canvas.height * 0.32, this.game.canvas.width * 0.39, 300, 100, 'blue'));
    }
    players() {
        this.player = [];
        this.player.push(new PlayerRed(150, this.game.canvas.height, this.game));
        this.player.push(new PlayerBlue(200, this.game.canvas.height, this.game));
    }
    objects() {
        const { width } = this.game.canvas;
        const { height } = this.game.canvas;
        this.door = new Door(width * 0.91, height * 0.05, 'DoubleDoor0');
        this.scoringObjects = [];
        this.scoringObjects.push(new VBucks(width * 0.5, height * 0.16, 'blue', -3, this.game));
        this.scoringObjects.push(new VBucks(width * 0.78, height * 0.26, 'red', -3, this.game));
        this.scoringObjects.push(new FutPack(width * 0.19, height * 0.37, 'red', -3));
        this.scoringObjects.push(new FutPack(width * 0.39, height * 0.51, 'blue', -3));
        this.scoringObjects.push(new Star(width * 0.45, height * 0.53, 'star', 1));
        this.scoringObjects.push(new Star(width * 0.12, height * 0.39, 'star', 1));
        this.scoringObjects.push(new Star(width * 0.75, height * 0.26, 'star', 1));
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
        this.platform.push(new Platform(width * 0.1, height * 0.46, width * 0.13, 50, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.87, height * 0.19, width * 0.1, 25, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.36, height * 0.59, width * 0.13, 50, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.4, height * 0.27, width * 0.13, 50, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.71, height * 0.37, width * 0.16, 50, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.65, height / 1.5, width * 0.05, 50, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
        this.platform.push(new Platform(0, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.25, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.5, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
        this.platform.push(new Platform(width * 0.75, height - 50, width / 4, 50, Game.loadNewImage('./assets/img/platform/TileMapDesert2.png')));
    }
    allMove() { }
}
//# sourceMappingURL=Level1.js.map