import Enemies from './Enemies.js';
export default class VBucks extends Enemies {
    timer;
    constructor(xPos, yPos, type, points, game) {
        super(`./assets/img/${type}.png`, xPos, yPos, points, type, false, game);
        this.timer = 0;
        this.flyingSpeed += 4;
    }
    move() {
        this.xPos -= this.flyingSpeed;
        this.timer += 1;
        if (this.timer > 120) {
            this.timer = 0;
            this.flyingSpeed = -this.flyingSpeed;
        }
    }
}
//# sourceMappingURL=VBucks.js.map