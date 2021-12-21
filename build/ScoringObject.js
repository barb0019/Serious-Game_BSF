import GameItem from './GameItem.js';
export default class ScoringObject extends GameItem {
    score;
    type;
    constructor(imageSrc, maxX, maxY, score, type) {
        super(imageSrc, maxX, maxY);
        this.score = score;
        this.type = type;
    }
    getScore() {
        return this.score;
    }
}
//# sourceMappingURL=ScoringObject.js.map