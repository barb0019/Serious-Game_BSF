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
import Door from './Door.js';
import FlyingBuck from './FlyingBuck.js';
import SpeedBubble from './SpeedBubble.js';
export default class Level1 extends Scene {
    scoringObjects;
    speedBubble;
    player;
    platform;
    countUntilNextItem;
    door;
    constructor(game) {
        super(game);
        this.door = new Door(250, 550, 'DoubleDoor0');
        this.scoringObjects = [];
        this.player = [];
        this.scoringObjects.push(new VBucks(250, 450, 'blue', -3));
        this.scoringObjects.push(new VBucks(650, 350, 'red', -3));
        this.scoringObjects.push(new FlyingBuck(550, 350, 'flyingbuck', -3));
        this.scoringObjects.push(new FutPack(450, 350, 'red', -3));
        this.scoringObjects.push(new FutPack(850, 350, 'blue', -3));
        this.scoringObjects.push(new Star(950, 450, 'star', 1));
        this.scoringObjects.push(new Star(1050, 450, 'star', 1));
        this.scoringObjects.push(new Star(1150, 450, 'star', 1));
        this.player.push(new PlayerRed(this.game.canvas.width, this.game.canvas.height));
        this.player.push(new PlayerBlue(this.game.canvas.width, this.game.canvas.height));
        this.platform = [];
        this.makePlatforms();
        this.countUntilNextItem = 300;
        this.speedBubble = new SpeedBubble(game, 'hallo', 100, 500, this.player[1], this.player[0]);
        console.log('level 1');
    }
    makePlatforms() {
        const { canvas } = this.game;
        this.platform.push(new Platform(250, 250, 200, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(100, 100, 75, 25, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(1000, canvas.height / 1.5, 75, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(1250, canvas.height / 1.5, 100, 100, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(0, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(canvas.width / 4, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(canvas.width / 2, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
        this.platform.push(new Platform(canvas.width * 0.75, canvas.height - 50, canvas.width / 4, 50, Game.loadNewImage('./assets/img/TileMapDesert2.png')));
    }
    checksIfHit(player) {
        this.scoringObjects = this.scoringObjects.filter((element) => {
            const collides = player.collidesWith(element);
            if (collides) {
                this.game.getUser().addScore(element.getScore());
                if (element instanceof PowerUp) {
                    const powerUp = element;
                    powerUp.applyTo(player);
                }
            }
            return !collides;
        });
    }
    hasWon() {
        const user = this.game.getUser();
        return user.getScore() >= user.getLevel() * 3;
    }
    processInput() {
        for (let i = 0; i < this.player.length; i++) {
            this.player[i].move(this.game.canvas);
        }
    }
    update(elapsed) {
        this.player.forEach((element) => {
            element.increaseGravity();
        });
        this.platform.forEach((element) => {
            for (let i = 0; i < this.player.length; i++) {
                element.collidesWith(this.player[i]);
            }
        });
        for (let i = 0; i < this.player.length; i++) {
            this.checksIfHit(this.player[i]);
        }
        if (this.countUntilNextItem <= 0) {
            const choice = Game.randomNumber(0, 10);
            this.countUntilNextItem = Game.randomNumber(120, 240);
        }
        this.countUntilNextItem -= elapsed;
        if (this.hasWon() && this.player[1].collidesWith(this.door)
            && this.player[0].collidesWith(this.door)) {
            return new LevelUp(this.game);
        }
        this.scoringObjects[2].move();
        if (this.game.getUser().getScore() < 0) {
            return new GameOver(this.game);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.speedBubble.render();
        const score = `Stars: ${this.game.getUser().getScore()}`;
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
        this.door.draw(this.game.ctx, this.player);
    }
}
//# sourceMappingURL=Level.js.map