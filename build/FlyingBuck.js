import Enemies from './Enemies.js';
export default class FlyingBuck extends Enemies {
    timer;
    constructor(xPos, yPos, type, points, game) {
        super(`./assets/img/${type}.png`, xPos, yPos, points, type, false, game);
        this.timer = 0;
        this.flyingSpeed += 1.50;
    }
    move() {
        this.xPos += this.flyingSpeed;
        this.timer += 1;
        if (this.timer > 100) {
            this.timer = 0;
            this.flyingSpeed = -this.flyingSpeed;
        }
    }
}
//# sourceMappingURL=FlyingBuck.js.map