import ScoringObject from './ScoringObject.js';
export default class VBucks extends ScoringObject {
    timer;
    flyingSpeed;
    constructor(xPos, yPos, type, points) {
        super(`./assets/img/${type}.png`, xPos, yPos, points, type);
        this.timer = 0;
        this.flyingSpeed = 3;
    }
    move() {
        this.xPos += this.flyingSpeed;
        this.timer += 1;
        if (this.timer > 200) {
            this.timer = 0;
            this.xPos = 300;
        }
    }
}
//# sourceMappingURL=VBucks.js.map