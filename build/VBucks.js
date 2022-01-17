import Enemies from './Enemies.js';
export default class VBucks extends Enemies {
    maxXPos;
    goingRight;
    constructor(xPos, yPos, type, points, game) {
        super(`./assets/img/${type}.png`, xPos, yPos, points, type, false, game);
        this.goingRight = false;
        this.maxXPos = this.xPos - game.canvas.width * 0.28;
        this.flyingSpeed += 4;
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
}
//# sourceMappingURL=VBucks.js.map