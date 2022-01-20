import Game from './Game.js';
import GameOver from './GameOver.js';
import LevelUp from './LevelUp.js';
import Scene from './Scene.js';
export default class Level extends Scene {
    scoringObjects;
    speedBubble;
    player;
    platform;
    countUntilNextItem;
    door;
    pressurePlate = [];
    popUps = [];
    constructor(game) {
        super(game);
        this.makePressurePlates();
        this.objects();
        this.players();
        this.makePlatforms();
        this.speedbubbles(game);
        this.countUntilNextItem = 300;
    }
    makePressurePlates() { }
    speedbubbles(game) { }
    players() { }
    objects() { }
    makePlatforms() { }
    checksIfHit(player) {
        this.scoringObjects = this.scoringObjects.filter((element) => {
            const collides = player.collidesWith(element);
            if (collides) {
                this.game.getUser().addScore(element.getScore());
                this.game.getUser().setDeadOrNot(element.getAlive());
            }
            return !collides;
        });
    }
    hasWon() {
        const user = this.game.getUser();
        return user.getScore() >= user.getLevel() * 1;
    }
    processInput() {
        for (let i = 0; i < this.player.length; i++) {
            this.player[i].move(this.game.canvas);
        }
    }
    checksIfPressureOnThePlate() { }
    update(elapsed) {
        this.allCollides();
        if (this.countUntilNextItem <= 0) {
            this.countUntilNextItem = Game.randomNumber(120, 240);
        }
        this.countUntilNextItem -= elapsed;
        if (this.hasWon() && this.player[1].collidesWith(this.door)
            && this.player[0].collidesWith(this.door)) {
            return new LevelUp(this.game);
        }
        this.allMove();
        if (this.game.getUser().getAlive() === false) {
            return new GameOver(this.game);
        }
        return null;
    }
    allCollides() {
        this.player.forEach((element) => {
            element.increaseGravity();
        });
        this.checksIfPressureOnThePlate();
        for (let i = 0; i < this.platform.length; i++) {
            this.platform[i].collidesWith(this.player[0]);
            this.platform[i].collidesWith(this.player[1]);
        }
        for (let i = 0; i < this.player.length; i++) {
            this.checksIfHit(this.player[i]);
        }
        for (let i = 0; i < this.popUps.length; i++) {
            this.popUps[i].collidesPopUpWithPlayer();
        }
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        const score = `Sterren: ${this.game.getUser().getScore()}`;
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
        for (let i = 0; i < this.pressurePlate.length; i++) {
            this.pressurePlate[i].draw(this.game.ctx, this.player);
        }
        this.door.draw(this.game.ctx, this.player);
        for (let i = 0; i < this.speedBubble.length; i++) {
            if (this.player[0].collidesWith(this.speedBubble[i])
                || this.player[1].collidesWith(this.speedBubble[i])) {
                this.speedBubble[i].render();
            }
        }
    }
}
//# sourceMappingURL=Level.js.map