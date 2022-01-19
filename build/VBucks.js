import Enemies from './Enemies.js';
export default class VBucks extends Enemies {
    maxXPos;
    maxYPos;
    goingRight;
    timer;
    minYPos;
    constructor(xPos, yPos, type, points, game) {
        super(`./assets/img/${type}.png`, xPos, yPos, points, type, false, game);
        this.goingRight = false;
        this.maxXPos = this.xPos - game.canvas.width * 0.28;
        this.maxYPos = this.yPos - game.canvas.height * 0.05;
        this.minYPos = this.yPos + game.canvas.height * 0.35;
        this.flyingSpeed += 3.5;
        this.timer = 0;
    }
    move() {
        this.xPos -= this.flyingSpeed;
        if (this.goingRight) {
            if (this.xPos > this.maxXPos) {
                this.maxXPos = this.xPos - this.game.canvas.width * 0.28;
                this.flyingSpeed = -this.flyingSpeed;
                this.goingRight = false;
            }
        }
        else if (this.xPos < this.maxXPos) {
            this.maxXPos = this.xPos + this.game.canvas.width * 0.28;
            this.flyingSpeed = -this.flyingSpeed;
            this.goingRight = true;
        }
    }
    moveY() {
        this.yPos += this.flyingSpeed;
        if (this.yPos > this.minYPos) {
            console.log(this.minYPos);
            this.flyingSpeed = -this.flyingSpeed;
            this.goingRight = false;
        }
        if (this.yPos < this.maxYPos) {
            this.flyingSpeed = -this.flyingSpeed;
            this.goingRight = true;
        }
    }
    moveY2() {
        this.yPos -= this.flyingSpeed;
        this.timer += 1;
        if (this.timer > 55) {
            this.timer = 0;
            this.flyingSpeed = -this.flyingSpeed;
        }
    }
}
//# sourceMappingURL=VBucks.js.map