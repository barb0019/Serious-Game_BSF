import GameItem from './GameItem.js';
export default class ScoringObject extends GameItem {
    score;
    flyingSpeed;
    constructor(imageSrc, xPos, yPos, score, type) {
        super(imageSrc, xPos, yPos, type);
        this.score = score;
    }
    getScore() {
        return this.score;
    }
    move() {
    }
}
//# sourceMappingURL=ScoringObject.js.map