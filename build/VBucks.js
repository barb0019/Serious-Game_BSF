import ScoringObject from './ScoringObject.js';
export default class VBucks extends ScoringObject {
    timer;
    flyingSpeed;
    constructor(xPos, yPos, type, points) {
<<<<<<< HEAD
        super(`./assets/img/${type}.png`, xPos, yPos, points, type);
        this.timer = 0;
        this.flyingSpeed = 5;
    }
    move() {
        this.xPos += this.flyingSpeed;
        this.timer += 1;
        if (this.timer > 200) {
            this.timer = 0;
            this.flyingSpeed = +this.flyingSpeed;
        }
=======
        super(`./assets/img/${type}.png`, xPos, yPos, points, type, false);
>>>>>>> 3d0fbae35c2cccf5ae5369c2c90dd473f5a47f01
    }
}
//# sourceMappingURL=VBucks.js.map