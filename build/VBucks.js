import ScoringObject from './ScoringObject.js';
export default class VBucks extends ScoringObject {
    timer;
    constructor(xPos, yPos, type, points) {
        super(`./assets/img/${type}.png`, xPos, yPos, points, type);
        this.timer = 0;
        this.flyingSpeed = 6.5;
    }
    move() {
        this.xPos -= this.flyingSpeed;
        this.timer += 1;
        if (this.timer > 150) {
            this.timer = 0;
            this.xPos = 945;
        }
    }
}
//# sourceMappingURL=VBucks.js.map