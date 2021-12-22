import Game from './Game.js';
import Scene from './Scene.js';
import PowerUp from './PowerUp.js';
import GameOver from './GameOver.js';
import LevelUp from './LevelUp.js';
import Platform from './platform.js';
import VBucks from './VBucks.js';
import PlayerRed from './PlayerRed.js';
import PlayerBlue from './playerblue.js';
import FutPack from './FutPack.js';
import Star from './Star.js';
export default class Level extends Scene {
    scoringObjects;
    player;
    platform;
    countUntilNextItem;
    constructor(game) {
        super(game);
        this.scoringObjects = [];
        this.player = [];
        this.scoringObjects.push(new VBucks(250, 250, 'blue'));
        this.scoringObjects.push(new VBucks(250, 250, 'red'));
        this.scoringObjects.push(new FutPack(250, 250, 'packred'));
        this.scoringObjects.push(new FutPack(250, 250, 'packblue'));
        this.scoringObjects.push(new Star(250, 250, 'star'));
        this.player.push(new PlayerRed(this.game.canvas.width, this.game.canvas.height));
        this.player.push(new PlayerBlue(this.game.canvas.width, this.game.canvas.height));
        this.platform = [];
        this.makePlatforms();
        this.countUntilNextItem = 300;
    }
    makePlatforms() {
        const { canvas } = this.game;
        this.platform.push(new Platform(250, 250, 200, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(100, 100, 75, 25, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(0, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(canvas.width / 4, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(canvas.width / 2, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(canvas.width * 0.75, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    }
    removeScoringObjects() {
        this.scoringObjects = this.scoringObjects.filter((element) => {
            this.player.forEach((player) => {
                if (player.collidesWith(element)) {
                    this.game.getUser().addScore(element.getScore());
                    if (element instanceof PowerUp) {
                        const powerUp = element;
                        for (let i = 0; i < this.player.length; i++) {
                            powerUp.applyTo(this.player[i]);
                        }
                    }
                    return true;
                }
                return false;
            });
        });
    }
    hasWon() {
        const user = this.game.getUser();
        return user.getScore() >= user.getLevel() * 10;
    }
    processInput() {
        for (let i = 0; i < this.player.length; i++) {
            this.player[i].move(this.game.canvas);
        }
    }
    update(elapsed) {
        this.platform.forEach((element) => {
            for (let i = 0; i < this.player.length; i++) {
                element.collidesWith(this.player[i]);
            }
        });
        this.removeScoringObjects();
        if (this.countUntilNextItem <= 0) {
            const choice = Game.randomNumber(0, 10);
            this.countUntilNextItem = Game.randomNumber(120, 240);
        }
        this.countUntilNextItem -= elapsed;
        if (this.hasWon()) {
            return new LevelUp(this.game);
        }
        if (this.game.getUser().getScore() < 0) {
            return new GameOver(this.game);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        const score = `Star: ${this.game.getUser().getScore()}`;
        this.game.writeTextToCanvas(score, 36, 120, 50);
        this.scoringObjects.forEach((element) => {
            element.draw(this.game.ctx);
        });
        for (let i = 0; i < this.player.length; i++) {
            this.player[i].draw(this.game.ctx);
        }
        for (let i = 0; i < this.platform.length; i++) {
            this.platform[i].draw(this.game.ctx);
        }
    }
}
//# sourceMappingURL=Level.js.map