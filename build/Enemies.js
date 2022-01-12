import ScoringObject from './ScoringObject.js';
export default class Enemies extends ScoringObject {
    flyingSpeed;
    constructor(imageSrc, xPos, yPos, score, type, alive) {
        super(imageSrc, xPos, yPos, score, type, alive);
    }
    checkBoughtItems() {
    }
    move() { }
}
//# sourceMappingURL=Enemies.js.map