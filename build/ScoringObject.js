import GameItem from './GameItem.js';
export default class ScoringObject extends GameItem {
    score;
    deadly;
    constructor(imageSrc, xPos, yPos, score, type, deadly) {
        super(imageSrc, xPos, yPos, type);
        this.score = score;
        this.deadly = deadly;
    }
    getScore() {
        return this.score;
    }
    move() {
    }
    getdeadly() {
        return this.deadly;
    }
}
//# sourceMappingURL=ScoringObject.js.map