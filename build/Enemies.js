import ScoringObject from './ScoringObject.js';
export default class Enemies extends ScoringObject {
    flyingSpeed;
    constructor(imageSrc, xPos, yPos, score, type) {
        super(imageSrc, xPos, yPos, score, type);
    }
    move() { }
}
//# sourceMappingURL=Enemies.js.map