import Enemies from './Enemies.js';
export default class FlyingBuck extends Enemies {
    timer;
    constructor(xPos, yPos, type, points) {
        super(`./assets/img/${type}.png`, xPos, yPos, points, type, false);
        this.timer = 0;
        this.flyingSpeed = 3;
    }
    move() {
        this.xPos += this.flyingSpeed;
        this.timer += 1;
        if (this.timer > 20) {
            this.timer = 0;
            this.flyingSpeed = -this.flyingSpeed;
        }
    }
}
//# sourceMappingURL=FlyingBuck.js.map