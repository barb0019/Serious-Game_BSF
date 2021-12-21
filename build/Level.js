import Game from './Game.js';
import Scene from './Scene.js';
import Player from './Player.js';
import GameOver from './GameOver.js';
import LevelUp from './LevelUp.js';
import Platform from './platform.js';
import Bluebucks from './bluebucks.js';
export default class Level extends Scene {
    scoringObjects;
    player;
    platform;
    countUntilNextItem;
    constructor(game) {
        super(game);
        this.scoringObjects = [];
        this.scoringObjects.push(new Bluebucks(250, 250));
        this.player = new Player(this.game.canvas.width, this.game.canvas.height);
        this.platform = [];
        this.makePlatforms();
        this.countUntilNextItem = 300;
    }
    makePlatforms() {
        this.platform.push(new Platform(250, 250, 10, 20, Game.loadNewImage('./assets/img/egg.png')));
    }
    hasWon() {
        const user = this.game.getUser();
        return user.getScore() >= user.getLevel() * 10;
    }
    processInput() {
        this.player.move(this.game.canvas);
    }
    update(elapsed) {
        this.platform.forEach((element) => {
            element.collidesWith(this.player);
        });
        if (this.player.isCleaning()) {
        }
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
        const score = `Score: ${this.game.getUser().getScore()}`;
        this.game.writeTextToCanvas(score, 36, 120, 50);
        this.scoringObjects.forEach((element) => {
            element.draw(this.game.ctx);
        });
        this.player.draw(this.game.ctx);
        for (let i = 0; i < this.platform.length; i++) {
            this.platform[i].draw(this.game.ctx);
        }
    }
}
//# sourceMappingURL=Level.js.map