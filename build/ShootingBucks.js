import Enemies from './Enemies.js';
export default class Shootingbuck extends Enemies {
    maxXPos;
    maxYPos;
    goingRight;
    timer;
    constructor(xPos, yPos, type, points, game) {
        super(`./assets/img/enemies/${type}.png`, xPos, yPos, points, type, false, game);
        this.goingRight = true;
        this.maxXPos = this.xPos + game.canvas.width * 0.17;
        this.maxYPos = this.yPos + game.canvas.width * 0.17;
        this.flyingSpeed += 5;
        this.timer = 0;
    }
    move() {
        this.xPos -= this.flyingSpeed;
        this.timer += 1;
        if (this.timer > 250) {
            this.timer = 0;
            this.xPos = this.game.canvas.width * 0.70;
        }
    }
    move1() {
        this.xPos += this.flyingSpeed;
        this.timer += 1;
        if (this.timer > 150) {
            this.timer = 0;
            this.xPos = this.game.canvas.width * 0.228;
        }
    }
    move2() {
        this.xPos += this.flyingSpeed;
        this.timer += 1;
        if (this.timer > 200) {
            this.timer = 50;
            this.xPos = this.game.canvas.width * 0.228;
        }
    }
    moveY() {
        this.yPos += this.flyingSpeed;
        this.timer += 1;
        if (this.timer > 60) {
            this.timer = 0;
            this.flyingSpeed = -this.flyingSpeed;
        }
    }
}
//# sourceMappingURL=ShootingBucks.js.map