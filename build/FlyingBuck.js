import Enemies from './Enemies.js';
export default class FlyingBuck extends Enemies {
    maxXPos;
    maxYPos;
    goingRight;
    constructor(xPos, yPos, type, points, game) {
        super(`./assets/img/${type}.png`, xPos, yPos, points, type, false, game);
        this.goingRight = true;
        this.maxXPos = this.xPos + game.canvas.width * 0.17;
        this.maxYPos = this.yPos + game.canvas.width * 0.17;
        this.flyingSpeed += 2.2;
    }
    move() {
        this.xPos += this.flyingSpeed;
        if (this.goingRight) {
            if (this.xPos > this.maxXPos) {
                this.maxXPos = this.xPos - this.game.canvas.width * 0.17;
                this.flyingSpeed = -this.flyingSpeed;
                this.goingRight = false;
            }
        }
        else if (this.xPos < this.maxXPos) {
            this.maxXPos = this.xPos + this.game.canvas.width * 0.17;
            this.flyingSpeed = -this.flyingSpeed;
            this.goingRight = true;
        }
    }
    moveY() {
        this.yPos += this.flyingSpeed;
        if (this.goingRight) {
            if (this.yPos > this.maxYPos) {
                this.maxYPos = this.yPos - this.game.canvas.width * 0.17;
                this.flyingSpeed = -this.flyingSpeed;
                this.goingRight = false;
            }
        }
        else if (this.yPos < this.maxYPos) {
            this.maxYPos = this.yPos + this.game.canvas.width * 0.17;
            this.flyingSpeed = -this.flyingSpeed;
            this.goingRight = true;
        }
    }
}
//# sourceMappingURL=FlyingBuck.js.map