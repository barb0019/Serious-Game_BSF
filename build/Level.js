import Game from './Game.js';
import GameOver from './GameOver.js';
import LevelUp from './LevelUp.js';
import PowerUp from './PowerUp.js';
import Scene from './Scene.js';
export default class Level extends Scene {
    scoringObjects;
    speedBubble;
    player;
    platform;
    countUntilNextItem;
    door;
    constructor(game) {
        super(game);
        this.objects();
        this.players();
        this.makePlatforms();
        this.speedbubbles(game);
        this.countUntilNextItem = 300;
    }
    speedbubbles(game) { }
    players() { }
    objects() { }
    makePlatforms() { }
    checksIfHit(player) {
        this.scoringObjects = this.scoringObjects.filter((element) => {
            const collides = player.collidesWith(element);
            if (collides) {
                this.game.getUser().addScore(element.getScore());
                this.game.getUser().setDeadorNot(element.getdeadly());
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
            this.countUntilNextItem = Game.randomNumber(120, 240);
        }
        this.countUntilNextItem -= elapsed;
        if (this.hasWon() && this.player[1].collidesWith(this.door)
            && this.player[0].collidesWith(this.door)) {
            return new LevelUp(this.game);
        }
        this.scoringObjects[2].move();
        if (this.game.getUser().getAlive() === false) {
            return new GameOver(this.game);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.speedBubble.render();
        this.speedBubble.draw(this.game.ctx);
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