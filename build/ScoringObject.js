import GameItem from './GameItem.js';
export default class ScoringObject extends GameItem {
    score;
    type;
    constructor(imageSrc, xPos, yPos, score, type) {
        super(imageSrc, xPos, yPos);
        this.score = score;
        this.type = type;
    }
    getScore() {
        return this.score;
    }
    getType() {
        return this.type;
    }
}
//# sourceMappingURL=ScoringObject.js.map